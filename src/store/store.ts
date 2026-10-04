import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { addDays, diffDays, todayKey } from '../lib/dates'
import { dayStart, schedule, type Card, type Grade } from '../lib/srs'
import { clean } from '../lib/spanish'
import { clamp } from '../lib/util'
import { PLAN } from '../content'
import { ACHIEVEMENTS } from './achievements'

export type Theme = 'system' | 'light' | 'dark'

export interface Settings {
  dailyGoal: number
  voiceURI: string | null
  rate: number
  theme: Theme
  sound: boolean
  speaking: boolean
  autoplay: boolean
  tipsDe: boolean
  tipsAr: boolean
  reminder: string
}

export interface DayProgress {
  done: boolean
  best: number
  at: string
  count: number
}

export interface Streak {
  current: number
  longest: number
  last: string | null
  freezes: number
  frozen: string[]
}

export interface Stats {
  exercises: number
  correct: number
  seconds: number
  reviews: number
  spoken: number
  lessons: number
  perfect: number
}

export interface Mistake {
  es: string
  en: string
  n: number
  at: number
}

export interface PersistedState {
  onboarded: boolean
  startDate: string | null
  settings: Settings
  progress: Record<string, DayProgress>
  xp: Record<string, number>
  streak: Streak
  cards: Record<string, Card>
  mistakes: Record<string, Mistake>
  stories: Record<string, { at: string; score: number }>
  achievements: Record<string, string>
  stats: Stats
  cando: Record<string, boolean>
  goalCelebrated: string | null
}

export interface XpResult {
  gained: number
  streakExtended: boolean
  streak: number
  goalReached: boolean
  unlocked: string[]
}

interface Actions {
  setSettings: (p: Partial<Settings>) => void
  finishOnboarding: (p: { dailyGoal: number; startDate: string }) => void
  setStartDate: (k: string) => void
  addXP: (amount: number) => XpResult
  completeDay: (id: string, accuracy: number, words?: { es: string; en: string }[]) => XpResult
  addCards: (words: { es: string; en: string }[], src: string) => number
  gradeCard: (id: string, grade: Grade) => void
  saveWord: (es: string, en: string) => boolean
  removeCard: (id: string) => void
  recordMistake: (es: string, en: string) => void
  clearMistake: (es: string) => void
  bumpStats: (p: Partial<Stats>) => void
  markStory: (id: string, score: number) => void
  toggleCando: (key: string) => void
  checkAchievements: () => string[]
  importData: (data: PersistedState) => void
  resetAll: () => void
}

export type State = PersistedState & Actions

export const DEFAULT_SETTINGS: Settings = {
  dailyGoal: 50,
  voiceURI: null,
  rate: 0.92,
  theme: 'system',
  sound: true,
  speaking: true,
  autoplay: true,
  tipsDe: true,
  tipsAr: true,
  reminder: '19:00',
}

const initial = (): PersistedState => ({
  onboarded: false,
  startDate: null,
  settings: { ...DEFAULT_SETTINGS },
  progress: {},
  xp: {},
  streak: { current: 0, longest: 0, last: null, freezes: 0, frozen: [] },
  cards: {},
  mistakes: {},
  stories: {},
  achievements: {},
  stats: { exercises: 0, correct: 0, seconds: 0, reviews: 0, spoken: 0, lessons: 0, perfect: 0 },
  cando: {},
  goalCelebrated: null,
})

export const cardId = (es: string) => clean(es)

export const useStore = create<State>()(
  persist(
    (set, get) => ({
      ...initial(),

      setSettings: (p) => set((s) => ({ settings: { ...s.settings, ...p } })),

      finishOnboarding: ({ dailyGoal, startDate }) =>
        set((s) => ({ onboarded: true, startDate, settings: { ...s.settings, dailyGoal } })),

      setStartDate: (k) => set({ startDate: k }),

      addXP: (amount) => {
        const s = get()
        const today = todayKey()
        const before = s.xp[today] ?? 0
        const after = before + Math.max(0, Math.round(amount))
        let { current, longest, last, freezes } = s.streak
        const frozen = [...s.streak.frozen]
        let streakExtended = false
        if (amount > 0 && last !== today) {
          if (!last) current = 1
          else {
            const gap = diffDays(last, today)
            if (gap === 1) current += 1
            else if (gap > 1) {
              const missed = gap - 1
              if (missed <= freezes) {
                freezes -= missed
                for (let i = 1; i <= missed; i++) frozen.push(addDays(last, i))
                current += 1
              } else current = 1
            }
          }
          last = today
          streakExtended = true
          longest = Math.max(longest, current)
          if (current % 7 === 0 && freezes < 2) freezes += 1
        }
        const goal = s.settings.dailyGoal
        const goalReached = before < goal && after >= goal && s.goalCelebrated !== today
        set({
          xp: { ...s.xp, [today]: after },
          streak: { current, longest, last, freezes, frozen: frozen.slice(-60) },
          ...(goalReached ? { goalCelebrated: today } : {}),
        })
        const unlocked = get().checkAchievements()
        return { gained: after - before, streakExtended, streak: current, goalReached, unlocked }
      },

      completeDay: (id, accuracy, words) => {
        const s = get()
        const prev = s.progress[id]
        const today = todayKey()
        const isReview = id.endsWith('d7')
        const base = isReview ? 25 : 15
        const first = !prev?.done
        const xp = Math.round((first ? base : base / 2) + 10 * clamp(accuracy, 0, 1))
        set({
          progress: {
            ...s.progress,
            [id]: { done: true, best: Math.max(prev?.best ?? 0, accuracy), at: prev?.at ?? today, count: (prev?.count ?? 0) + 1 },
          },
          stats: {
            ...s.stats,
            lessons: s.stats.lessons + (first ? 1 : 0),
            perfect: s.stats.perfect + (accuracy >= 0.999 ? 1 : 0),
          },
        })
        if (words?.length) get().addCards(words, id)
        return get().addXP(xp)
      },

      addCards: (words, src) => {
        const s = get()
        const now = Date.now()
        const cards = { ...s.cards }
        let added = 0
        for (const w of words) {
          const id = cardId(w.es)
          if (!id || cards[id]) continue
          cards[id] = { id, es: w.es, en: w.en, src, added: now, due: dayStart(now, 1), interval: 1, ease: 2.5, reps: 1, lapses: 0 }
          added++
        }
        if (added) set({ cards })
        return added
      },

      gradeCard: (id, grade) => {
        const s = get()
        const c = s.cards[id]
        if (!c) return
        set({ cards: { ...s.cards, [id]: schedule(c, grade) }, stats: { ...s.stats, reviews: s.stats.reviews + 1 } })
      },

      saveWord: (es, en) => {
        const id = cardId(es)
        const s = get()
        if (s.cards[id]) return false
        const now = Date.now()
        set({ cards: { ...s.cards, [id]: { id, es, en, src: 'saved', added: now, due: now, interval: 0, ease: 2.5, reps: 0, lapses: 0 } } })
        return true
      },

      removeCard: (id) => {
        const cards = { ...get().cards }
        delete cards[id]
        set({ cards })
      },

      recordMistake: (es, en) => {
        const s = get()
        const k = cardId(es)
        const m = s.mistakes[k]
        set({ mistakes: { ...s.mistakes, [k]: { es, en, n: (m?.n ?? 0) + 1, at: Date.now() } } })
      },

      clearMistake: (es) => {
        const k = cardId(es)
        const s = get()
        if (!s.mistakes[k]) return
        const mistakes = { ...s.mistakes }
        delete mistakes[k]
        set({ mistakes })
      },

      bumpStats: (p) =>
        set((s) => {
          const stats = { ...s.stats }
          for (const [k, v] of Object.entries(p)) stats[k as keyof Stats] += v as number
          return { stats }
        }),

      markStory: (id, score) => set((s) => ({ stories: { ...s.stories, [id]: { at: todayKey(), score: Math.max(score, s.stories[id]?.score ?? 0) } } })),

      toggleCando: (key) => set((s) => ({ cando: { ...s.cando, [key]: !s.cando[key] } })),

      checkAchievements: () => {
        const s = get()
        const unlocked: string[] = []
        const now = todayKey()
        const next = { ...s.achievements }
        for (const a of ACHIEVEMENTS) {
          if (next[a.id]) continue
          if (a.check(s)) {
            next[a.id] = now
            unlocked.push(a.id)
          }
        }
        if (unlocked.length) set({ achievements: next })
        return unlocked
      },

      importData: (data) => set({ ...initial(), ...data, settings: { ...DEFAULT_SETTINGS, ...data.settings } }),

      resetAll: () => set(initial()),
    }),
    {
      name: 'camino-v1',
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => {
        const { onboarded, startDate, settings, progress, xp, streak, cards, mistakes, stories, achievements, stats, cando, goalCelebrated } = s
        return { onboarded, startDate, settings, progress, xp, streak, cards, mistakes, stories, achievements, stats, cando, goalCelebrated }
      },
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<PersistedState>
        return { ...current, ...p, settings: { ...DEFAULT_SETTINGS, ...(p.settings ?? {}) }, stats: { ...current.stats, ...(p.stats ?? {}) } }
      },
    },
  ),
)

/* ───────────── Selectors ───────────── */

export function displayStreak(st: Streak, today = todayKey()) {
  if (!st.last) return { count: 0, doneToday: false, atRisk: false, freezeNeeded: 0 }
  const gap = diffDays(st.last, today)
  if (gap <= 0) return { count: st.current, doneToday: true, atRisk: false, freezeNeeded: 0 }
  if (gap === 1) return { count: st.current, doneToday: false, atRisk: true, freezeNeeded: 0 }
  const missed = gap - 1
  if (missed <= st.freezes) return { count: st.current, doneToday: false, atRisk: true, freezeNeeded: missed }
  return { count: 0, doneToday: false, atRisk: false, freezeNeeded: 0 }
}

export function planInfo(progress: Record<string, DayProgress>, startDate: string | null, today = todayKey()) {
  const done = PLAN.filter((d) => progress[d.id]?.done).length
  const next = PLAN.find((d) => !progress[d.id]?.done) ?? null
  const elapsed = startDate ? Math.max(0, diffDays(startDate, today)) : 0
  const expected = Math.min(PLAN.length, elapsed)
  const delta = done - expected
  const todayIdx = Math.min(PLAN.length - 1, elapsed)
  return { done, next, expected, delta, todayIdx, total: PLAN.length }
}

export function dueCards(cards: Record<string, Card>, now = Date.now()): Card[] {
  return Object.values(cards)
    .filter((c) => c.due <= now)
    .sort((a, b) => a.due - b.due)
}

export function wordsLearned(cards: Record<string, Card>): number {
  return Object.keys(cards).length
}

export function totalXP(xp: Record<string, number>): number {
  return Object.values(xp).reduce((a, b) => a + b, 0)
}
