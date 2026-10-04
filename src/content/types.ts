export type Level = 'A1' | 'A2' | 'B1'
export type LessonKind = 'pron' | 'grammar' | 'vocab' | 'talk' | 'culture'

export interface Word {
  es: string
  en: string
  note?: string
}

export interface Phrase {
  es: string
  en: string
}

/** A gap-fill / multiple-choice item. `q` contains ___ for the gap (story questions have no gap). */
export interface Drill {
  q: string
  a: string
  opts: string[]
  en?: string
}

/* ── Authoring format (compact text blocks, parsed at load time) ──
   words:   "el perro = dog // note"          one per line
   phrases: "¿Qué tal? = How's it going?"     one per line
   drills:  "Yo ___ de Marruecos. => soy | eres | es | somos # I'm from Morocco."
   body:    mini-markdown, Spanish in {braces}, examples "> es = en", tips "!de: …" "!ar: …" "!tip: …" "!warn: …" "!es: …" */
export interface LessonSrc {
  t: string
  k: LessonKind
  goal: string
  body: string
  words?: string
  phrases?: string
  drills?: string
}

export interface StorySrc {
  title: string
  /** Spanish paragraph lines, then "= English" line; paragraphs separated by blank lines */
  text: string
  /** "¿Pregunta? => correct | wrong | wrong" */
  questions: string
}

export interface WeekSrc {
  n: number
  title: string
  es: string
  cando: string[]
  lessons: LessonSrc[]
  story: StorySrc
}

export interface Lesson {
  id: string
  week: number
  day: number
  level: Level
  title: string
  kind: LessonKind
  goal: string
  body: string
  words: Word[]
  phrases: Phrase[]
  drills: Drill[]
  examples: Phrase[]
}

export interface Story {
  id: string
  week: number
  level: Level
  title: string
  paras: Phrase[]
  questions: Drill[]
}

export interface Week {
  n: number
  level: Level
  title: string
  es: string
  cando: string[]
  lessons: Lesson[]
  story: Story
}

export type PlanKind = 'lesson' | 'review' | 'checkpoint'

export interface PlanDay {
  id: string
  index: number
  week: number
  day: number
  level: Level
  kind: PlanKind
  title: string
  lesson?: Lesson
}
