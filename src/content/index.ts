import { buildWeek } from './parse'
import type { Lesson, Level, PlanDay, Story, Week, WeekSrc } from './types'
import { pad2 } from '../lib/util'

const modules = import.meta.glob<{ default: WeekSrc }>('./weeks/w*.ts', { eager: true })

export const WEEKS: Week[] = Object.values(modules)
  .map((m) => buildWeek(m.default))
  .sort((a, b) => a.n - b.n)

export const LESSONS: Lesson[] = WEEKS.flatMap((w) => w.lessons)
export const LESSON_BY_ID = new Map(LESSONS.map((l) => [l.id, l]))
export const STORIES: Story[] = WEEKS.map((w) => w.story)
export const STORY_BY_ID = new Map(STORIES.map((s) => [s.id, s]))
export const WEEK_BY_N = new Map(WEEKS.map((w) => [w.n, w]))

export const CHECKPOINT_WEEKS = new Set([9, 17, 26])
export const TOTAL_WEEKS = 26
export const LEVELS: { id: Level; name: string; es: string; weeks: [number, number]; blurb: string }[] = [
  { id: 'A1', name: 'Beginner', es: 'Primeros pasos', weeks: [1, 9], blurb: 'Sounds, introductions, present tense, everyday basics' },
  { id: 'A2', name: 'Elementary', es: 'Construyendo', weeks: [10, 17], blurb: 'Past tenses, future, comparisons, travel, health' },
  { id: 'B1', name: 'Intermediate', es: 'Independiente', weeks: [18, 26], blurb: 'Subjunctive, conditionals, reported speech, opinions' },
]

export const reviewId = (week: number) => `w${pad2(week)}d7`

/** The 26-week plan: 6 lesson days + 1 review/checkpoint day per week = 182 days. */
export const PLAN: PlanDay[] = WEEKS.flatMap((w) => [
  ...w.lessons.map((l) => ({ id: l.id, index: 0, week: w.n, day: l.day, level: w.level, kind: 'lesson' as const, title: l.title, lesson: l })),
  {
    id: reviewId(w.n),
    index: 0,
    week: w.n,
    day: 7,
    level: w.level,
    kind: CHECKPOINT_WEEKS.has(w.n) ? ('checkpoint' as const) : ('review' as const),
    title: CHECKPOINT_WEEKS.has(w.n) ? `${w.level} checkpoint` : `Week ${w.n} review`,
  },
]).map((d, i) => ({ ...d, index: i }))

export const PLAN_BY_ID = new Map(PLAN.map((d) => [d.id, d]))

export function weekOfId(id: string): number {
  return Number(id.slice(1, 3))
}

export type { Lesson, Level, PlanDay, Story, Week }
