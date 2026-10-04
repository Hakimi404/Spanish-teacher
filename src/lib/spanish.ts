/* Spanish text helpers: folding, tokenising, syllables, stress, numbers, answer checking. */

const PUNCT_RE = /[¿?¡!.,;:"“”'‘’«»()[\]…–—]/g
const WORD_RE = /[\p{L}\p{M}\p{N}]+/gu

/** lower-case, strip punctuation, keep accents */
export function clean(s: string): string {
  return s.toLowerCase().replace(PUNCT_RE, ' ').replace(/\s+/g, ' ').trim()
}

/** lower-case, strip punctuation AND accents (ñ→n) — for lenient comparison & search */
export function fold(s: string): string {
  return clean(s).normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export interface Tok {
  text: string
  word: boolean
  start: number
}

export function tokenize(s: string): Tok[] {
  const out: Tok[] = []
  let last = 0
  for (const m of s.matchAll(WORD_RE)) {
    const i = m.index ?? 0
    if (i > last) out.push({ text: s.slice(last, i), word: false, start: last })
    out.push({ text: m[0], word: true, start: i })
    last = i + m[0].length
  }
  if (last < s.length) out.push({ text: s.slice(last), word: false, start: last })
  return out
}

export function wordsOf(s: string): string[] {
  return [...s.matchAll(WORD_RE)].map((m) => m[0])
}

/* ───────────── Syllables & stress ───────────── */

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ü'])
const STRONG = new Set(['a', 'e', 'o', 'á', 'é', 'ó'])
const INSEP = new Set(['pl', 'pr', 'bl', 'br', 'fl', 'fr', 'cl', 'cr', 'gl', 'gr', 'tr', 'dr', 'kl', 'kr'])
const ACUTE: Record<string, string> = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' }
const UNACUTE: Record<string, string> = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u' }

interface Unit {
  s: string
  v: boolean
  start: number
}

function units(w: string): Unit[] {
  const out: Unit[] = []
  let i = 0
  while (i < w.length) {
    const c = w[i]
    const n = w[i + 1] ?? ''
    const n2 = w[i + 2] ?? ''
    if ((c === 'c' && n === 'h') || (c === 'l' && n === 'l') || (c === 'r' && n === 'r')) {
      out.push({ s: c + n, v: false, start: i })
      i += 2
      continue
    }
    // qu / gu before e,i: the u is silent and belongs to the consonant
    if ((c === 'q' || c === 'g') && n === 'u' && n2 !== '' && 'eiéí'.includes(n2)) {
      out.push({ s: c + n, v: false, start: i })
      i += 2
      continue
    }
    if (c === 'y') {
      out.push({ s: c, v: !VOWELS.has(n), start: i })
      i++
      continue
    }
    out.push({ s: c, v: VOWELS.has(c), start: i })
    i++
  }
  return out
}

function isHiatus(a: string, b: string): boolean {
  const sa = STRONG.has(a)
  const sb = STRONG.has(b)
  if (sa && sb) return true
  if ((a === 'í' || a === 'ú') && sb) return true
  if (sa && (b === 'í' || b === 'ú')) return true
  return false
}

interface SylInfo {
  syl: string[]
  /** unit index ranges [start, end) of each syllable */
  unitRanges: [number, number][]
  us: Unit[]
}

function analyse(word: string): SylInfo {
  const us = units(word.toLowerCase())
  const nuclei: [number, number][] = []
  for (let i = 0; i < us.length; i++) {
    if (!us[i].v) continue
    const last = nuclei[nuclei.length - 1]
    if (last && last[1] === i - 1 && !isHiatus(us[i - 1].s, us[i].s)) last[1] = i
    else nuclei.push([i, i])
  }
  if (nuclei.length <= 1) return { syl: [word], unitRanges: [[0, us.length]], us }
  const cuts: number[] = []
  for (let k = 0; k < nuclei.length - 1; k++) {
    const a = nuclei[k][1]
    const b = nuclei[k + 1][0]
    const cons = us.slice(a + 1, b)
    const n = cons.length
    let cut: number
    if (n === 0) cut = b
    else if (n === 1) cut = a + 1
    else if (n === 2) cut = INSEP.has(cons[0].s + cons[1].s) ? a + 1 : a + 2
    else if (n === 3) cut = INSEP.has(cons[1].s + cons[2].s) ? a + 2 : a + 3
    else cut = INSEP.has(cons[n - 2].s + cons[n - 1].s) ? b - 2 : b - 1
    cuts.push(cut)
  }
  const syl: string[] = []
  const unitRanges: [number, number][] = []
  let prevU = 0
  for (const c of cuts) {
    syl.push(word.slice(us[prevU].start, us[c].start))
    unitRanges.push([prevU, c])
    prevU = c
  }
  syl.push(word.slice(us[prevU].start))
  unitRanges.push([prevU, us.length])
  return { syl, unitRanges, us }
}

export function syllabify(word: string): string[] {
  return analyse(word).syl
}

/** Index of the stressed syllable, following the Spanish accent rules. */
export function stressIndex(word: string): number {
  const syl = syllabify(word)
  for (let i = 0; i < syl.length; i++) if (/[áéíóú]/i.test(syl[i])) return i
  if (syl.length === 1) return 0
  const last = word.toLowerCase().slice(-1)
  return 'aeiouns'.includes(last) ? syl.length - 2 : syl.length - 1
}

/** Add an acute accent so that syllable `idx` carries the stress. */
export function accentSyllable(word: string, idx: number): string {
  const { unitRanges, us } = analyse(word)
  const [from, to] = unitRanges[idx] ?? [0, 0]
  const vowelUnits = us.slice(from, to).filter((u) => u.v)
  if (!vowelUnits.length) return word
  const strong = vowelUnits.find((u) => STRONG.has(u.s))
  const target = strong ?? vowelUnits[vowelUnits.length - 1]
  const ch = word[target.start]
  const lower = ch.toLowerCase()
  const acc = ACUTE[lower]
  if (!acc) return word
  const rep = ch === lower ? acc : acc.toUpperCase()
  return word.slice(0, target.start) + rep + word.slice(target.start + 1)
}

/** Remove stress accents but keep the ones that mark a hiatus (í/ú next to a strong vowel). */
export function stripStressAccents(word: string): string {
  let out = ''
  for (let i = 0; i < word.length; i++) {
    const c = word[i]
    const plain = UNACUTE[c]
    if (!plain) {
      out += c
      continue
    }
    if (c === 'í' || c === 'ú') {
      const prev = word[i - 1] ?? ''
      const next = word[i + 1] ?? ''
      if (STRONG.has(prev) || STRONG.has(next)) {
        out += c
        continue
      }
    }
    out += plain
  }
  return out
}

/** Attach enclitic pronouns (e.g. levanta + te → levántate) keeping the original stress. */
export function attachClitic(form: string, clitic: string): string {
  const s = stressIndex(form)
  const w = stripStressAccents(form) + clitic
  return stressIndex(w) === s ? w : accentSyllable(w, s)
}

/** Ensure the last syllable is stressed (used when a prefix is added to a monosyllable: ten → mantén). */
export function stressLast(word: string): string {
  const n = syllabify(word).length
  if (stressIndex(word) === n - 1) return word
  return accentSyllable(stripStressAccents(word), n - 1)
}

/* ───────────── Numbers ───────────── */

const UNITS = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve']
const TENS = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa']
const HUNDREDS = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']

function below1000(n: number): string {
  if (n < 30) return UNITS[n]
  if (n < 100) {
    const t = Math.floor(n / 10)
    const u = n % 10
    return u ? `${TENS[t]} y ${UNITS[u]}` : TENS[t]
  }
  if (n === 100) return 'cien'
  const h = Math.floor(n / 100)
  const r = n % 100
  return r ? `${HUNDREDS[h]} ${below1000(r)}` : HUNDREDS[h]
}

/** Spanish words for 0 … 999 999 999 (counting form: "uno", "veintiuno"). */
export function numberToSpanish(n: number): string {
  n = Math.floor(Math.abs(n))
  if (n < 1000) return below1000(n)
  if (n < 1_000_000) {
    const th = Math.floor(n / 1000)
    const r = n % 1000
    const head = th === 1 ? 'mil' : `${apocope(below1000(th))} mil`
    return r ? `${head} ${below1000(r)}` : head
  }
  const m = Math.floor(n / 1_000_000)
  const r = n % 1_000_000
  const head = m === 1 ? 'un millón' : `${apocope(numberToSpanish(m))} millones`
  return r ? `${head} ${numberToSpanish(r)}` : head
}

/** uno → un, veintiuno → veintiún before a noun / "mil" */
function apocope(s: string): string {
  return s.replace(/veintiuno$/, 'veintiún').replace(/uno$/, 'un')
}

/** Replace digit groups by Spanish words (helps compare speech-recognition output). */
export function digitsToWords(s: string): string {
  return s.replace(/\d+/g, (d) => numberToSpanish(Number(d)))
}

/* ───────────── Comparison ───────────── */

/** Edit distance where swapping two neighbouring letters counts as one typo. */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  let prev2: number[] = []
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) cur[j] = Math.min(cur[j], prev2[j - 2] + 1)
    }
    prev2 = prev
    prev = cur
  }
  return prev[b.length]
}

export function similarity(a: string, b: string): number {
  const A = fold(a)
  const B = fold(b)
  if (!A && !B) return 1
  return 1 - levenshtein(A, B) / Math.max(A.length, B.length)
}

export type Verdict = 'exact' | 'accent' | 'typo' | 'wrong'

/** Compare a typed answer with one expected answer. Accents & tiny typos are forgiven but flagged. */
export function compareAnswer(input: string, expected: string): Verdict {
  const a = clean(input)
  const b = clean(expected)
  if (!a) return 'wrong'
  if (a === b) return 'exact'
  if (fold(a) === fold(b)) return 'accent'
  const fa = fold(a)
  const fb = fold(b)
  const d = levenshtein(fa, fb)
  if ((fb.length >= 5 && d === 1) || (fb.length >= 12 && d === 2)) return 'typo'
  return 'wrong'
}

/** Best verdict among several accepted answers. */
export function bestVerdict(input: string, accepted: string[]): { verdict: Verdict; match: string } {
  const order: Verdict[] = ['exact', 'accent', 'typo', 'wrong']
  let best: { verdict: Verdict; match: string } = { verdict: 'wrong', match: accepted[0] ?? '' }
  for (const acc of accepted) {
    const v = compareAnswer(input, acc)
    if (order.indexOf(v) < order.indexOf(best.verdict)) best = { verdict: v, match: acc }
  }
  return best
}

/** Strip a leading article: "el perro" → "perro" */
export function stripArticle(s: string): string {
  return s.replace(/^(el|la|los|las|un|una|unos|unas|lo)\s+/i, '')
}

/** Gender/article info from a dictionary headword such as "el perro" */
export function articleOf(s: string): string | null {
  const m = /^(el|la|los|las)\s+/i.exec(s)
  return m ? m[1].toLowerCase() : null
}
