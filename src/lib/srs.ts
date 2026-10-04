/* Spaced repetition (SM-2 style, Anki-like day rollover at 4 am). */

export interface Card {
  id: string
  es: string
  en: string
  /** lesson id or 'saved' */
  src: string
  added: number
  due: number
  /** days; 0 = learning / relearning */
  interval: number
  ease: number
  reps: number
  lapses: number
  last?: number
}

export type Grade = 0 | 1 | 2 | 3 // again, hard, good, easy

const MIN = 60_000
const DAY = 86_400_000

/** Timestamp of 4:00 local time, `days` days after today's (or `now`'s) date. */
export function dayStart(now: number, days: number): number {
  const d = new Date(now)
  if (d.getHours() < 4) d.setDate(d.getDate() - 1)
  d.setHours(4, 0, 0, 0)
  d.setDate(d.getDate() + days)
  return d.getTime()
}

export function newCard(id: string, es: string, en: string, src: string, now = Date.now()): Card {
  return { id, es, en, src, added: now, due: now, interval: 0, ease: 2.5, reps: 0, lapses: 0 }
}

function fuzz(days: number): number {
  if (days < 4) return days
  const f = Math.round(days * 0.05 * (Math.random() * 2 - 1))
  return days + f
}

export function schedule(card: Card, grade: Grade, now = Date.now()): Card {
  const c: Card = { ...card, last: now }
  const learning = c.reps === 0 || c.interval === 0
  if (learning) {
    if (grade === 0) {
      c.interval = 0
      c.due = now + MIN
      if (c.reps > 0) c.ease = Math.max(1.3, c.ease - 0.1)
      return c
    }
    c.reps += 1
    if (grade === 1) {
      c.interval = 1
      c.ease = Math.max(1.3, c.ease - 0.15)
    } else if (grade === 2) {
      c.interval = c.lapses > 0 ? 1 : c.reps > 1 ? 2 : 1
    } else {
      c.interval = 4
      c.ease += 0.15
    }
    c.due = dayStart(now, c.interval)
    return c
  }
  if (grade === 0) {
    c.lapses += 1
    c.ease = Math.max(1.3, c.ease - 0.2)
    c.interval = 0
    c.due = now + 5 * MIN
    return c
  }
  c.reps += 1
  let next: number
  if (grade === 1) {
    next = Math.max(c.interval + 1, Math.round(c.interval * 1.2))
    c.ease = Math.max(1.3, c.ease - 0.15)
  } else if (grade === 2) {
    next = Math.max(c.interval + 1, Math.round(c.interval * c.ease))
  } else {
    next = Math.max(c.interval + 2, Math.round(c.interval * c.ease * 1.3))
    c.ease += 0.15
  }
  c.interval = Math.min(365, fuzz(next))
  c.due = dayStart(now, c.interval)
  return c
}

export function isDue(card: Card, now = Date.now()): boolean {
  return card.due <= now
}

/** Human label for the interval a grade would give, for the review buttons. */
export function previewLabel(card: Card, grade: Grade, now = Date.now()): string {
  const next = schedule(card, grade, now)
  if (next.interval === 0) return next.due - now <= MIN * 1.5 ? '1 min' : '5 min'
  const d = next.interval
  if (d < 30) return `${d}d`
  if (d < 365) return `${Math.round(d / 30)}mo`
  return '1y'
}

export function isMature(card: Card): boolean {
  return card.interval >= 21
}

export function strength(card: Card): number {
  if (card.reps === 0) return 0
  return Math.min(1, card.interval / 21)
}

export { DAY }
