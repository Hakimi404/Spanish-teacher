/* Searchable dictionary built from every lesson, the verb list and core function words. */
import { LESSONS, STORIES } from './index'
import { CORE } from './core'
import { VERBS, verbInfo } from './verbs'
import { conjugate, formIndexEntries, TENSE_BY_ID, PERSONS_SHORT, IMP_PERSONS, type TenseId } from '../lib/conjugate'
import { clean, fold, stripArticle, articleOf } from '../lib/spanish'
import type { Level, Phrase } from './types'

export type EntryKind = 'word' | 'phrase' | 'verb' | 'core'

export interface Entry {
  id: string
  es: string
  en: string
  note?: string
  level: Level | null
  src: string
  kind: EntryKind
}

const entries: Entry[] = []
const index = new Map<string, Entry[]>()
const foldIndex = new Map<string, Entry[]>()

function add(key: string, e: Entry) {
  const k = key.toLowerCase().trim()
  if (!k) return
  const list = index.get(k) ?? []
  if (!list.includes(e)) list.push(e)
  index.set(k, list)
  const f = fold(k)
  const fl = foldIndex.get(f) ?? []
  if (!fl.includes(e)) fl.push(e)
  foldIndex.set(f, fl)
}

function keysOf(es: string): string[] {
  const keys = new Set<string>()
  keys.add(clean(es))
  for (const part of es.split(/,\s*|\s*\/\s*/)) {
    const p = clean(part.replace(/…/g, ''))
    if (!p) continue
    keys.add(p)
    keys.add(stripArticle(p))
  }
  return [...keys].filter(Boolean)
}

let n = 0
for (const l of LESSONS) {
  for (const w of l.words) {
    const multi = stripArticle(clean(w.es)).includes(' ') && !w.es.includes(',')
    const e: Entry = { id: `e${n++}`, es: w.es, en: w.en, note: w.note, level: l.level, src: l.id, kind: multi ? 'phrase' : 'word' }
    entries.push(e)
    keysOf(w.es).forEach((k) => add(k, e))
  }
}
for (const v of VERBS) {
  const e: Entry = { id: `v-${v.inf}`, es: v.inf, en: v.en, level: v.level, src: 'verb', kind: 'verb' }
  entries.push(e)
  add(v.inf, e)
}
for (const line of CORE.split('\n')) {
  const t = line.trim()
  if (!t) continue
  const i = t.indexOf(' = ')
  const e: Entry = { id: `c${n++}`, es: t.slice(0, i), en: t.slice(i + 3), level: null, src: 'core', kind: 'core' }
  entries.push(e)
  add(e.es, e)
}

export const ENTRIES = entries
export const WORD_ENTRIES = entries.filter((e) => e.kind === 'word' || e.kind === 'phrase')

/* ── Verb form reverse index (built lazily) ── */
interface FormHit {
  inf: string
  tense: TenseId | 'ger' | 'part'
  p: number
}
let formIdx: Map<string, FormHit[]> | null = null
function formIndex(): Map<string, FormHit[]> {
  if (formIdx) return formIdx
  formIdx = new Map()
  for (const v of VERBS) {
    let c
    try {
      c = conjugate(v.inf)
    } catch {
      continue
    }
    for (const f of formIndexEntries(c)) {
      const list = formIdx.get(f.form) ?? []
      if (!list.some((h) => h.inf === v.inf)) list.push({ inf: v.inf, tense: f.tense, p: f.p })
      formIdx.set(f.form, list)
    }
  }
  return formIdx
}

export function formLabel(h: FormHit): string {
  if (h.tense === 'ger') return 'gerund (-ing form)'
  if (h.tense === 'part') return 'past participle'
  const t = TENSE_BY_ID[h.tense]
  const person = h.tense === 'imp' ? IMP_PERSONS[h.p] : PERSONS_SHORT[h.p]
  return `${person} · ${t.es.toLowerCase()}`
}

export interface Lookup {
  word: string
  entries: Entry[]
  /** weak = only a reflexive verb matches but no me/te/se… precedes the word (e.g. "la casa" ≠ casarse) */
  verb?: { inf: string; en: string; label: string; weak: boolean }
}

const REFLEXIVE_PRONOUN = /^(me|te|se|nos|os)$/i

const GUESSES: [RegExp, string][] = [
  [/ces$/, 'z'],
  [/eses$/, 'és'],
  [/esas$/, 'és'],
  [/esa$/, 'és'],
  [/anas$/, 'án'],
  [/ana$/, 'án'],
  [/ones$/, 'ón'],
  [/oras$/, 'or'],
  [/ora$/, 'or'],
  [/es$/, ''],
  [/s$/, ''],
  [/as$/, 'o'],
  [/a$/, 'o'],
  [/os$/, 'o'],
  [/ita$/, 'a'],
  [/ito$/, 'o'],
  [/ísimo$/, 'o'],
  [/ísima$/, 'o'],
]

export function lookupWord(raw: string, prev?: string): Lookup {
  const w = raw.toLowerCase().trim()
  const res: Lookup = { word: raw, entries: [] }
  const direct = index.get(w)
  if (direct?.length) res.entries = direct
  const hits = formIndex().get(w)
  if (hits?.length) {
    const reflexiveContext = !!prev && REFLEXIVE_PRONOUN.test(prev)
    const h = hits.find((x) => x.inf.endsWith('se') === reflexiveContext) ?? hits[0]
    const info = verbInfo(h.inf)
    res.verb = { inf: h.inf, en: info?.en ?? '', label: formLabel(h), weak: h.inf.endsWith('se') && !reflexiveContext }
  }
  if (!res.entries.length && (!res.verb || res.verb.weak)) {
    for (const [re, rep] of GUESSES) {
      if (!re.test(w)) continue
      const g = w.replace(re, rep)
      const list = index.get(g)
      if (list?.length) {
        res.entries = list
        break
      }
    }
  }
  if (!res.entries.length && !res.verb) {
    const f = foldIndex.get(fold(w))
    if (f?.length) res.entries = f
  }
  // prefer lesson words over core words
  res.entries = [...res.entries].sort((a, b) => rank(a) - rank(b))
  return res
}

function rank(e: Entry) {
  return e.kind === 'word' ? 0 : e.kind === 'phrase' ? 1 : e.kind === 'verb' ? 2 : 3
}

export function lookupPhrase(text: string): Entry | undefined {
  return index.get(clean(text))?.[0]
}

/* ── Example sentences ── */
const CORPUS: Phrase[] = (() => {
  const out: Phrase[] = []
  const seen = new Set<string>()
  for (const l of LESSONS) {
    for (const p of [...l.phrases, ...l.examples]) {
      const k = clean(p.es)
      if (seen.has(k)) continue
      seen.add(k)
      out.push(p)
    }
  }
  return out
})()

export function examplesFor(word: string, max = 3): Phrase[] {
  const target = fold(stripArticle(word.split(',')[0]))
  if (!target) return []
  const re = new RegExp(`(^| )${target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}( |$)`)
  const out: Phrase[] = []
  for (const p of CORPUS) {
    if (re.test(fold(p.es))) out.push(p)
    if (out.length >= max) break
  }
  return out
}

/* ── Search ── */
export interface SearchHit {
  entry: Entry
  score: number
}

export function searchEntries(query: string, limit = 60): SearchHit[] {
  const q = fold(query)
  if (!q) return []
  const hits: SearchHit[] = []
  const seen = new Set<string>()
  for (const e of entries) {
    const key = `${e.es}|${e.en}`
    if (seen.has(key)) continue
    const es = fold(e.es)
    const esBare = fold(stripArticle(e.es))
    const en = fold(e.en)
    let score = -1
    if (es === q || esBare === q) score = 100
    else if (esBare.startsWith(q) || es.startsWith(q)) score = 80
    else if (new RegExp(`\\b${escape(q)}`).test(en)) score = en.startsWith(q) || en.startsWith(`to ${q}`) ? 70 : 60
    else if (es.includes(q)) score = 40
    else if (en.includes(q)) score = 30
    if (score < 0) continue
    if (e.kind === 'core') score -= 5
    seen.add(key)
    hits.push({ entry: e, score })
  }
  return hits.sort((a, b) => b.score - a.score || a.entry.es.length - b.entry.es.length).slice(0, limit)
}

function escape(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Is this verb conjugation available? */
export function isKnownVerb(inf: string): boolean {
  return !!verbInfo(inf)
}

export function genderOf(es: string): 'm' | 'f' | null {
  const a = articleOf(es)
  if (!a) return null
  return a === 'el' || a === 'los' ? 'm' : 'f'
}

/** Sentences from stories that contain a word (for the dictionary's "seen in" section). */
export function storyMentions(word: string, max = 2): { story: string; es: string }[] {
  const target = fold(stripArticle(word))
  const out: { story: string; es: string }[] = []
  for (const s of STORIES) {
    for (const p of s.paras) {
      if (fold(p.es).split(' ').includes(target)) {
        out.push({ story: s.title, es: p.es })
        break
      }
    }
    if (out.length >= max) break
  }
  return out
}
