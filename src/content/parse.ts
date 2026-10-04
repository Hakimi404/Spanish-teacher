import type { Drill, Lesson, LessonSrc, Level, Phrase, Story, StorySrc, Week, WeekSrc, Word } from './types'
import { pad2 } from '../lib/util'

const lines = (src = '') =>
  src
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('//'))

function splitEq(line: string, ctx: string): [string, string] {
  const i = line.indexOf(' = ')
  if (i < 0) throw new Error(`[content] missing " = " in ${ctx}: ${line}`)
  return [line.slice(0, i).trim(), line.slice(i + 3).trim()]
}

export function parseWords(src: string | undefined, ctx: string): Word[] {
  return lines(src).map((l) => {
    const [main, note] = l.split(' // ')
    const [es, en] = splitEq(main, ctx)
    return note ? { es, en, note: note.trim() } : { es, en }
  })
}

export function parsePhrases(src: string | undefined, ctx: string): Phrase[] {
  return lines(src).map((l) => {
    const [es, en] = splitEq(l, ctx)
    return { es, en }
  })
}

export function parseDrills(src: string | undefined, ctx: string): Drill[] {
  return lines(src).map((l) => {
    const [main, en] = l.split(' # ')
    const at = main.indexOf(' => ')
    if (at < 0) throw new Error(`[content] missing " => " in ${ctx}: ${l}`)
    const q = main.slice(0, at).trim()
    const parts = main
      .slice(at + 4)
      .split(' | ')
      .map((s) => s.trim())
      .filter(Boolean)
    return { q, a: parts[0], opts: parts.slice(1), ...(en ? { en: en.trim() } : {}) }
  })
}

/** "> es = en" example lines inside a lesson body */
export function parseExamples(body: string): Phrase[] {
  const out: Phrase[] = []
  for (const l of body.split('\n')) {
    const t = l.trim()
    if (!t.startsWith('> ')) continue
    const i = t.indexOf(' = ')
    if (i < 0) continue
    out.push({ es: t.slice(2, i).trim(), en: t.slice(i + 3).trim() })
  }
  return out
}

export function parseStory(src: StorySrc, week: number, level: Level): Story {
  const paras: Phrase[] = []
  for (const block of src.text.split(/\n\s*\n/)) {
    const ls = block
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
    if (!ls.length) continue
    const es = ls.filter((l) => !l.startsWith('= ')).join(' ')
    const en = ls
      .filter((l) => l.startsWith('= '))
      .map((l) => l.slice(2))
      .join(' ')
    paras.push({ es, en })
  }
  return {
    id: `story-w${pad2(week)}`,
    week,
    level,
    title: src.title,
    paras,
    questions: parseDrills(src.questions, `story w${week}`),
  }
}

export function levelOfWeek(n: number): Level {
  return n <= 9 ? 'A1' : n <= 17 ? 'A2' : 'B1'
}

export function buildWeek(src: WeekSrc): Week {
  const level = levelOfWeek(src.n)
  const lessons: Lesson[] = src.lessons.map((l: LessonSrc, i) => {
    const id = `w${pad2(src.n)}d${i + 1}`
    return {
      id,
      week: src.n,
      day: i + 1,
      level,
      title: l.t,
      kind: l.k,
      goal: l.goal,
      body: l.body.trim(),
      words: parseWords(l.words, id),
      phrases: parsePhrases(l.phrases, id),
      drills: parseDrills(l.drills, id),
      examples: parseExamples(l.body),
    }
  })
  return { n: src.n, level, title: src.title, es: src.es, cando: src.cando, lessons, story: parseStory(src.story, src.n, level) }
}
