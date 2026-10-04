import type { Drill, Lesson, Phrase, Word } from '../content/types'
import { WORD_ENTRIES } from '../content/dictionary'
import { recognitionSupported } from '../lib/recognition'
import { fold, stripArticle, wordsOf } from '../lib/spanish'
import { pick, sample, shuffle, uniqBy } from '../lib/util'

export interface Item {
  es: string
  en: string
}

export type Exercise =
  | { kind: 'mc'; id: string; dir: 'es-en' | 'en-es'; prompt: string; options: string[]; answer: string; item: Item; cardId?: string }
  | { kind: 'listen'; id: string; audio: string; options: string[]; answer: string; item: Item; cardId?: string }
  | { kind: 'fill'; id: string; sentence: string; options: string[]; answer: string; en?: string; full: string; item: Item }
  | { kind: 'build'; id: string; dir: 'en-es' | 'es-en'; prompt: string; answer: string[]; bank: string[]; full: string; item: Item }
  | { kind: 'match'; id: string; pairs: Item[] }
  | { kind: 'type'; id: string; prompt: string; accept: string[]; answer: string; item: Item; cardId?: string }
  | { kind: 'speak'; id: string; text: string; en: string; item: Item }
  | { kind: 'dictation'; id: string; text: string; en: string; accept: string[]; item: Item }

let seq = 0
const nid = (k: string) => `${k}-${++seq}`

/** "me llamo…" → "me llamo"; "alto, alta" stays */
export const spoken = (es: string) => es.replace(/…/g, '').replace(/\s+/g, ' ').trim()

/** Accepted typed answers for a vocabulary item. */
export function acceptedForms(es: string): string[] {
  const base = spoken(es)
  const forms = new Set<string>([base])
  for (const part of base.split(/,\s*|\s*\/\s*/)) {
    const p = part.trim()
    if (!p) continue
    forms.add(p)
  }
  return [...forms]
}

type WKind = 'noun' | 'verb' | 'phrase' | 'other'
function kindOf(w: Item): WKind {
  if (/^(el|la|los|las)\s/i.test(w.es)) return 'noun'
  if (/^to\s/.test(w.en) && /[aeií]r(se)?$/.test(w.es)) return 'verb'
  if (stripArticle(w.es).trim().includes(' ')) return 'phrase'
  return 'other'
}

const GLOBAL: Item[] = WORD_ENTRIES.map((e) => ({ es: e.es, en: e.en }))

function distractors(answer: Item, local: Item[], field: 'es' | 'en', n = 3): string[] {
  const k = kindOf(answer)
  const ansFold = fold(answer[field])
  const ok = (w: Item) => fold(w[field]) !== ansFold && fold(w.en) !== fold(answer.en) && fold(w.es) !== fold(answer.es)
  const sameKindLocal = local.filter((w) => ok(w) && kindOf(w) === k)
  const otherLocal = local.filter((w) => ok(w) && kindOf(w) !== k)
  const pool = uniqBy([...shuffle(sameKindLocal), ...shuffle(otherLocal)], (w) => fold(w[field]))
  const out = pool.slice(0, n).map((w) => w[field])
  if (out.length < n) {
    const extra = shuffle(GLOBAL.filter((w) => ok(w) && kindOf(w) === k && !out.some((o) => fold(o) === fold(w[field]))))
    for (const w of extra) {
      if (out.length >= n) break
      if (!out.some((o) => fold(o) === fold(w[field]))) out.push(w[field])
    }
  }
  return out
}

export function mcEsEn(w: Item, local: Item[], cardId?: string): Exercise | null {
  const d = distractors(w, local, 'en')
  if (d.length < 2) return null
  return { kind: 'mc', id: nid('mc'), dir: 'es-en', prompt: w.es, options: shuffle([w.en, ...d]), answer: w.en, item: w, cardId }
}

export function mcEnEs(w: Item, local: Item[], cardId?: string): Exercise | null {
  const d = distractors(w, local, 'es')
  if (d.length < 2) return null
  return { kind: 'mc', id: nid('mc'), dir: 'en-es', prompt: w.en, options: shuffle([w.es, ...d]), answer: w.es, item: w, cardId }
}

export function listen(w: Item, local: Item[], cardId?: string): Exercise | null {
  const d = distractors(w, local, 'es')
  if (d.length < 2) return null
  return { kind: 'listen', id: nid('listen'), audio: spoken(w.es), options: shuffle([w.es, ...d]), answer: w.es, item: w, cardId }
}

export function typeIn(w: Item, cardId?: string): Exercise {
  return { kind: 'type', id: nid('type'), prompt: w.en, accept: acceptedForms(w.es), answer: spoken(w.es), item: w, cardId }
}

export function matchPairs(words: Item[]): Exercise | null {
  const pairs = uniqBy(uniqBy(words, (w) => fold(w.es)), (w) => fold(w.en)).slice(0, 5)
  if (pairs.length < 3) return null
  return { kind: 'match', id: nid('match'), pairs }
}

/** Drill sentence ready to be spoken: drop "(context:)" hints. */
export const speakable = (s: string) => s.replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim()

export function fill(d: Drill): Exercise {
  const options = uniqBy(shuffle([d.a, ...d.opts]), (o) => o)
  return {
    kind: 'fill',
    id: nid('fill'),
    sentence: d.q,
    options,
    answer: d.a,
    en: d.en,
    full: d.q.replace('___', d.a),
    item: { es: speakable(d.q.replace('___', d.a)), en: d.en ?? '' },
  }
}

export function englishTokens(en: string): string[] | null {
  const t = en.replace(/\([^)]*\)/g, '')
  if (/[/—]/.test(t)) return null
  const toks = t
    .replace(/[.!?¿¡,;:"“”]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
  return toks.length >= 2 && toks.length <= 10 ? toks : null
}

export function buildEnEs(p: Phrase, others: Phrase[]): Exercise | null {
  const target = wordsOf(p.es)
  if (target.length < 2 || target.length > 10) return null
  const have = new Set(target.map((t) => fold(t)))
  const extra = uniqBy(
    shuffle(others.filter((o) => o !== p).flatMap((o) => wordsOf(o.es))).filter((w) => !have.has(fold(w))),
    (w) => fold(w),
  ).slice(0, target.length > 5 ? 3 : 2)
  return {
    kind: 'build',
    id: nid('build'),
    dir: 'en-es',
    prompt: p.en,
    answer: target,
    bank: shuffle([...target, ...extra]),
    full: p.es,
    item: p,
  }
}

export function buildEsEn(p: Phrase, others: Phrase[]): Exercise | null {
  const target = englishTokens(p.en)
  if (!target) return null
  const have = new Set(target.map((t) => t.toLowerCase()))
  const extra = uniqBy(
    shuffle(others.filter((o) => o !== p).flatMap((o) => englishTokens(o.en) ?? [])).filter((w) => !have.has(w.toLowerCase())),
    (w) => w.toLowerCase(),
  ).slice(0, 3)
  return {
    kind: 'build',
    id: nid('build'),
    dir: 'es-en',
    prompt: p.es,
    answer: target,
    bank: shuffle([...target, ...extra]),
    full: p.es,
    item: p,
  }
}

export function dictation(p: Item): Exercise {
  const text = spoken(p.es)
  return { kind: 'dictation', id: nid('dict'), text, en: p.en, accept: [text], item: p }
}

export function speakEx(p: Item): Exercise {
  return { kind: 'speak', id: nid('speak'), text: spoken(p.es), en: p.en, item: p }
}

const usable = (ws: Word[]) => ws.filter((w) => w.en && w.es)
const short = (p: Item, max: number) => wordsOf(p.es).length <= max

export interface GenOpts {
  speaking: boolean
}

/** ~14 varied exercises for one lesson, easier ones first. */
export function lessonExercises(lesson: Lesson, opts: GenOpts): Exercise[] {
  const words: Item[] = usable(lesson.words)
  const phrases: Phrase[] = lesson.phrases.length ? lesson.phrases : lesson.examples
  const w = shuffle(words)
  const ph = shuffle(phrases)
  const out: (Exercise | null)[] = []

  out.push(w[0] ? mcEsEn(w[0], words) : null)
  out.push(w[1] ? listen(w[1], words) : null)
  out.push(words.length >= 4 ? matchPairs(sample(words, 5)) : null)
  out.push(w[2] ? mcEnEs(w[2], words) : null)
  for (const d of sample(lesson.drills, 4)) out.push(fill(d))
  out.push(ph[0] ? buildEnEs(ph[0], phrases) : null)
  out.push(ph[1] ? listen(ph[1], phrases) : null)
  const esEn = ph.slice(2).find((p) => englishTokens(p.en)) ?? ph.find((p) => p !== ph[0] && englishTokens(p.en))
  out.push(esEn ? buildEsEn(esEn, phrases) : null)
  const typeWord = w.slice(3).find((x) => stripArticle(spoken(x.es)).split(' ').length <= 2) ?? w.find((x) => stripArticle(spoken(x.es)).split(' ').length <= 2)
  out.push(typeWord ? typeIn(typeWord) : null)
  const dict = ph.find((p) => p !== ph[0] && short(p, 5)) ?? (w[4] ? w[4] : null)
  out.push(dict ? dictation(dict) : null)
  if (opts.speaking && recognitionSupported) {
    const sp = ph.find((p) => short(p, 7))
    out.push(sp ? speakEx(sp) : null)
  }
  return out.filter((x): x is Exercise => !!x)
}

/** Mixed quiz across several lessons (weekly review, level checkpoint, mistakes…). */
export function quizExercises(lessons: Lesson[], count: number, opts: GenOpts): Exercise[] {
  const allWords: Item[] = lessons.flatMap((l) => usable(l.words))
  const allPhrases: Phrase[] = lessons.flatMap((l) => (l.phrases.length ? l.phrases : l.examples))
  const pool: Exercise[] = []
  for (const l of lessons) {
    const words = usable(l.words)
    const phrases = l.phrases.length ? l.phrases : l.examples
    for (const d of sample(l.drills, 2)) pool.push(fill(d))
    const w = shuffle(words)
    const a = w[0] && mcEnEs(w[0], allWords)
    const b = w[1] && listen(w[1], allWords)
    const c = w[2] && mcEsEn(w[2], allWords)
    for (const x of [a, b, c]) if (x) pool.push(x)
    const p = pick(phrases.length ? phrases : [{ es: '', en: '' }])
    const bb = p.es ? buildEnEs(p, allPhrases) : null
    if (bb) pool.push(bb)
  }
  const tw = shuffle(allWords).find((x) => stripArticle(spoken(x.es)).split(' ').length <= 2)
  const picked = sample(pool, Math.max(0, count - 3))
  if (tw) picked.push(typeIn(tw))
  const d = shuffle(allPhrases).find((p) => short(p, 6))
  if (d) picked.push(dictation(d))
  if (opts.speaking && recognitionSupported) {
    const s = shuffle(allPhrases).find((p) => short(p, 7))
    if (s) picked.push(speakEx(s))
  }
  const m = matchPairs(sample(allWords, 5))
  return [...(m ? [m] : []), ...shuffle(picked)].slice(0, count)
}

/** Auto-graded drills for review cards (each exercise carries its card id). */
export function cardExercises(cards: { id: string; es: string; en: string }[], localPool: Item[]): Exercise[] {
  const pool = localPool.length >= 4 ? localPool : GLOBAL
  return cards
    .map((c) => {
      const item = { es: c.es, en: c.en }
      const r = Math.random()
      if (r < 0.3) return mcEsEn(item, pool, c.id)
      if (r < 0.55) return mcEnEs(item, pool, c.id)
      if (r < 0.8) return listen(item, pool, c.id)
      return typeIn(item, c.id)
    })
    .filter((x): x is Exercise => !!x)
}

/** Exercises built from a list of items (e.g. your mistakes). */
export function itemExercises(items: Item[], opts: GenOpts): Exercise[] {
  const out: (Exercise | null)[] = []
  const words = items.filter((i) => wordsOf(i.es).length <= 3)
  const sentences = items.filter((i) => wordsOf(i.es).length > 3)
  for (const w of shuffle(words).slice(0, 8)) {
    const r = Math.random()
    out.push(r < 0.35 ? mcEnEs(w, words) : r < 0.7 ? listen(w, words) : typeIn(w))
  }
  for (const s of shuffle(sentences).slice(0, 5)) {
    out.push(Math.random() < 0.6 ? buildEnEs(s, sentences) : opts.speaking && recognitionSupported ? speakEx(s) : dictation(s))
  }
  return shuffle(out.filter((x): x is Exercise => !!x))
}

export function itemOf(ex: Exercise): Item | null {
  return ex.kind === 'match' ? null : ex.item
}
