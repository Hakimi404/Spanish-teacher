import { pad2 } from './util'

/** Local calendar date as YYYY-MM-DD (never UTC, so streaks follow the user's day). */
export function dateKey(d = new Date()): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
}

export const todayKey = () => dateKey(new Date())

export function parseKey(k: string): Date {
  const [y, m, d] = k.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function addDays(k: string, n: number): string {
  const d = parseKey(k)
  d.setDate(d.getDate() + n)
  return dateKey(d)
}

/** Whole days from a to b (b - a). Rounding makes it DST-safe. */
export function diffDays(a: string, b: string): number {
  return Math.round((parseKey(b).getTime() - parseKey(a).getTime()) / 86_400_000)
}

/** Monday = 0 … Sunday = 6 */
export function weekday(k: string): number {
  return (parseKey(k).getDay() + 6) % 7
}

export function fmtDate(k: string, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' }): string {
  return parseKey(k).toLocaleDateString('en-GB', opts)
}

/** Spanish weekday initials — note X for miércoles (to avoid clashing with M for martes). */
export const ES_DAY_INITIALS = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
export const ES_DAY_NAMES = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
export const ES_MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

/** Spanish-style greeting by hour: in Spain "buenos días" lasts until lunch (~2 pm). */
export function greeting(d = new Date()): { es: string; en: string } {
  const h = d.getHours()
  if (h >= 5 && h < 14) return { es: '¡Buenos días!', en: 'Good morning!' }
  if (h >= 14 && h < 21) return { es: '¡Buenas tardes!', en: 'Good afternoon!' }
  return { es: '¡Buenas noches!', en: 'Good evening!' }
}

/** "lunes, 5 de octubre" */
export function spanishDate(d = new Date()): string {
  return `${ES_DAY_NAMES[(d.getDay() + 6) % 7]}, ${d.getDate()} de ${ES_MONTHS[d.getMonth()]}`
}
