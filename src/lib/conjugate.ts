/* Spanish conjugation engine: regular patterns + stem changes + spelling changes + irregular tables.
   Covers every tense taught from A1 to B1 (and the two B2 compound tenses for completeness). */
import { attachClitic, accentSyllable, stressIndex, stressLast, syllabify } from './spanish'

export type F6 = [string, string, string, string, string, string]
export type SimpleTense = 'pres' | 'pret' | 'impf' | 'fut' | 'cond' | 'subj' | 'impsubj'
export type CompoundTense = 'perf' | 'plus' | 'futp' | 'condp' | 'subjp' | 'plussubj'
export type TenseId = SimpleTense | CompoundTense | 'imp' | 'impneg'
export type Level = 'A1' | 'A2' | 'B1' | 'B2'

export const PERSONS = ['yo', 'tú', 'él / ella / usted', 'nosotros', 'vosotros', 'ellos / ustedes'] as const
export const PERSONS_SHORT = ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'] as const
export const IMP_PERSONS = ['', 'tú', 'usted', 'nosotros', 'vosotros', 'ustedes'] as const

export interface TenseInfo {
  id: TenseId
  es: string
  en: string
  level: Level
  mood: 'ind' | 'subj' | 'imp'
  example: string
}

export const TENSES: TenseInfo[] = [
  { id: 'pres', es: 'Presente', en: 'Present', level: 'A1', mood: 'ind', example: 'hablo — I speak' },
  { id: 'perf', es: 'Pretérito perfecto', en: 'Present perfect', level: 'A2', mood: 'ind', example: 'he hablado — I have spoken' },
  { id: 'pret', es: 'Pretérito indefinido', en: 'Preterite (simple past)', level: 'A2', mood: 'ind', example: 'hablé — I spoke' },
  { id: 'impf', es: 'Pretérito imperfecto', en: 'Imperfect', level: 'A2', mood: 'ind', example: 'hablaba — I used to speak' },
  { id: 'fut', es: 'Futuro simple', en: 'Future', level: 'A2', mood: 'ind', example: 'hablaré — I will speak' },
  { id: 'imp', es: 'Imperativo afirmativo', en: 'Commands', level: 'A2', mood: 'imp', example: '¡habla! — speak!' },
  { id: 'cond', es: 'Condicional simple', en: 'Conditional', level: 'B1', mood: 'ind', example: 'hablaría — I would speak' },
  { id: 'plus', es: 'Pluscuamperfecto', en: 'Past perfect', level: 'B1', mood: 'ind', example: 'había hablado — I had spoken' },
  { id: 'subj', es: 'Presente de subjuntivo', en: 'Present subjunctive', level: 'B1', mood: 'subj', example: 'que hable' },
  { id: 'impneg', es: 'Imperativo negativo', en: 'Negative commands', level: 'B1', mood: 'imp', example: '¡no hables! — don’t speak!' },
  { id: 'subjp', es: 'Pretérito perfecto de subjuntivo', en: 'Perfect subjunctive', level: 'B1', mood: 'subj', example: 'que haya hablado' },
  { id: 'impsubj', es: 'Pretérito imperfecto de subjuntivo', en: 'Imperfect subjunctive', level: 'B1', mood: 'subj', example: 'si hablara…' },
  { id: 'futp', es: 'Futuro perfecto', en: 'Future perfect', level: 'B1', mood: 'ind', example: 'habré hablado — I will have spoken' },
  { id: 'condp', es: 'Condicional compuesto', en: 'Conditional perfect', level: 'B2', mood: 'ind', example: 'habría hablado — I would have spoken' },
  { id: 'plussubj', es: 'Pluscuamperfecto de subjuntivo', en: 'Pluperfect subjunctive', level: 'B2', mood: 'subj', example: 'si hubiera hablado…' },
]

export const TENSE_BY_ID = Object.fromEntries(TENSES.map((t) => [t.id, t])) as Record<TenseId, TenseInfo>

type Cls = 'ar' | 'er' | 'ir'

const END: Record<Cls, Record<'pres' | 'pret' | 'impf' | 'subj', string[]>> = {
  ar: {
    pres: ['o', 'as', 'a', 'amos', 'áis', 'an'],
    pret: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
    impf: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'],
    subj: ['e', 'es', 'e', 'emos', 'éis', 'en'],
  },
  er: {
    pres: ['o', 'es', 'e', 'emos', 'éis', 'en'],
    pret: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
    impf: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
    subj: ['a', 'as', 'a', 'amos', 'áis', 'an'],
  },
  ir: {
    pres: ['o', 'es', 'e', 'imos', 'ís', 'en'],
    pret: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
    impf: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
    subj: ['a', 'as', 'a', 'amos', 'áis', 'an'],
  },
}
const FUT = ['é', 'ás', 'á', 'emos', 'éis', 'án']
const COND = ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían']
const STRONG_PRET = ['e', 'iste', 'o', 'imos', 'isteis', 'ieron']
const BOOT = [true, true, true, false, false, true]
const REFL = ['me', 'te', 'se', 'nos', 'os', 'se']

interface Irr {
  pres?: string[]
  yo?: string
  pret?: string[]
  pretStem?: string
  impf?: string[]
  fut?: string
  subj?: string[]
  subjStem?: string
  impTu?: string
  ger?: string
  part?: string
  stem?: string
}

/** Irregular verbs. Anything not listed falls back to the regular rules. */
const IRR: Record<string, Irr> = {
  ser: {
    pres: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
    pret: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    impf: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'],
    subj: ['sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'],
    impTu: 'sé',
    ger: 'siendo',
    part: 'sido',
  },
  estar: {
    pres: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
    pretStem: 'estuv',
    subj: ['esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'],
    impTu: 'está',
  },
  ir: {
    pres: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
    pret: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    impf: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'],
    subj: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'],
    impTu: 've',
    ger: 'yendo',
    part: 'ido',
  },
  haber: {
    pres: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'],
    pretStem: 'hub',
    fut: 'habr',
    subj: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
    impTu: 'he',
  },
  tener: { pres: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'], pretStem: 'tuv', fut: 'tendr', impTu: 'ten', subjStem: 'teng' },
  venir: { pres: ['vengo', 'vienes', 'viene', 'venimos', 'venís', 'vienen'], pretStem: 'vin', fut: 'vendr', impTu: 'ven', subjStem: 'veng', ger: 'viniendo' },
  poner: { yo: 'pongo', pretStem: 'pus', fut: 'pondr', impTu: 'pon', part: 'puesto' },
  salir: { yo: 'salgo', fut: 'saldr', impTu: 'sal' },
  hacer: { yo: 'hago', pretStem: 'hic', fut: 'har', impTu: 'haz', part: 'hecho' },
  decir: { pres: ['digo', 'dices', 'dice', 'decimos', 'decís', 'dicen'], pretStem: 'dij', fut: 'dir', impTu: 'di', part: 'dicho', ger: 'diciendo', subjStem: 'dig' },
  traer: { yo: 'traigo', pretStem: 'traj' },
  caer: { yo: 'caigo' },
  oír: { pres: ['oigo', 'oyes', 'oye', 'oímos', 'oís', 'oyen'], subjStem: 'oig' },
  ver: {
    pres: ['veo', 'ves', 've', 'vemos', 'veis', 'ven'],
    pret: ['vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'],
    impf: ['veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían'],
    part: 'visto',
    subjStem: 've',
  },
  dar: {
    pres: ['doy', 'das', 'da', 'damos', 'dais', 'dan'],
    pret: ['di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'],
    subj: ['dé', 'des', 'dé', 'demos', 'deis', 'den'],
  },
  saber: { yo: 'sé', pretStem: 'sup', fut: 'sabr', subjStem: 'sep' },
  caber: { yo: 'quepo', pretStem: 'cup', fut: 'cabr' },
  poder: { stem: 'ue', pretStem: 'pud', fut: 'podr', ger: 'pudiendo' },
  querer: { stem: 'ie', pretStem: 'quis', fut: 'querr' },
  andar: { pretStem: 'anduv' },
  valer: { yo: 'valgo', fut: 'valdr' },
  reír: {
    pres: ['río', 'ríes', 'ríe', 'reímos', 'reís', 'ríen'],
    pret: ['reí', 'reíste', 'rio', 'reímos', 'reísteis', 'rieron'],
    subj: ['ría', 'rías', 'ría', 'riamos', 'riais', 'rían'],
    impTu: 'ríe',
    ger: 'riendo',
    part: 'reído',
  },
  morir: { stem: 'ue', part: 'muerto' },
  volver: { stem: 'ue', part: 'vuelto' },
  resolver: { stem: 'ue', part: 'resuelto' },
  abrir: { part: 'abierto' },
  cubrir: { part: 'cubierto' },
  escribir: { part: 'escrito' },
  describir: { part: 'descrito' },
  romper: { part: 'roto' },
  imprimir: { part: 'impreso' },
}

export interface VerbFlags {
  stem?: 'ie' | 'ue' | 'i' | 'u>ue'
  accent?: 'í' | 'ú'
  base?: string
}

export function parseFlags(flags: string): VerbFlags {
  const out: VerbFlags = {}
  for (const f of flags.split(/[\s,]+/).filter(Boolean)) {
    if (f === 'ie' || f === 'ue' || f === 'i' || f === 'u>ue') out.stem = f
    else if (f === 'í' || f === 'ú') out.accent = f
    else if (f.startsWith('=')) out.base = f.slice(1)
  }
  return out
}

interface Simple {
  pres: string[]
  pret: string[]
  impf: string[]
  fut: string[]
  cond: string[]
  subj: string[]
  impsubj: string[]
  impTu: string
  impVos: string
  impNos: string | null
  ger: string
  part: string
}

const clsOf = (inf: string): Cls => inf.slice(-2).replace('í', 'i') as Cls

function changeLast(stem: string, from: string, to: string): string {
  const i = stem.lastIndexOf(from)
  return i < 0 ? stem : stem.slice(0, i) + to + stem.slice(i + from.length)
}

function mainChange(stem: string, f: VerbFlags): string {
  switch (f.stem) {
    case 'ie':
      return changeLast(stem, 'e', 'ie')
    case 'ue':
      return changeLast(stem, 'o', 'ue')
    case 'i':
      return changeLast(stem, 'e', 'i')
    case 'u>ue':
      return changeLast(stem, 'u', 'ue')
  }
  if (f.accent === 'í') return changeLast(stem, 'i', 'í')
  if (f.accent === 'ú') return changeLast(stem, 'u', 'ú')
  return stem
}

/** -ir stem changers: e→i / o→u in some forms (sintió, durmiendo, pidamos) */
function secondChange(stem: string, f: VerbFlags, cls: Cls): string {
  if (cls !== 'ir') return stem
  if (f.stem === 'ie' || f.stem === 'i') return changeLast(stem, 'e', 'i')
  if (f.stem === 'ue') return changeLast(stem, 'o', 'u')
  return stem
}

/** Spelling changes that keep the sound: busqué, llegué, empecé, averigüé, cojo, sigo, venzo */
function ortho(stem: string, ending: string, cls: Cls): string {
  const e0 = ending[0] ?? ''
  if (cls === 'ar' && (e0 === 'e' || e0 === 'é')) {
    if (stem.endsWith('gu')) return stem.slice(0, -2) + 'gü'
    if (stem.endsWith('c')) return stem.slice(0, -1) + 'qu'
    if (stem.endsWith('g')) return stem.slice(0, -1) + 'gu'
    if (stem.endsWith('z')) return stem.slice(0, -1) + 'c'
  }
  if (cls !== 'ar' && 'aoáó'.includes(e0) && e0 !== '') {
    if (stem.endsWith('zc')) return stem
    if (stem.endsWith('gu')) return stem.slice(0, -2) + 'g'
    if (stem.endsWith('qu')) return stem.slice(0, -2) + 'c'
    if (stem.endsWith('g')) return stem.slice(0, -1) + 'j'
    if (stem.endsWith('c')) return stem.slice(0, -1) + 'z'
  }
  return stem
}

const join = (stem: string, ending: string, cls: Cls) => ortho(stem, ending, cls) + ending

function accentLastVowel(s: string): string {
  const map: Record<string, string> = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' }
  for (let i = s.length - 1; i >= 0; i--) {
    if (map[s[i]]) return s.slice(0, i) + map[s[i]] + s.slice(i + 1)
  }
  return s
}

function stripAcute(s: string): string {
  return s.replace(/[áéíóú]/g, (c) => ({ á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u' })[c] as string)
}

function conjugateSimple(inf: string, flags: VerbFlags): Simple {
  const irr = IRR[inf] ?? {}
  const f: VerbFlags = { ...flags, ...(irr.stem ? { stem: irr.stem as VerbFlags['stem'] } : {}) }
  const cls = clsOf(inf)
  const stem = inf.slice(0, -2)
  const E = END[cls]
  const isUir = cls === 'ir' && /[^gq]uir$/.test(inf)
  const vowelStem = cls !== 'ar' && /[aeo]$/.test(stem) && !isUir
  const isZc = cls !== 'ar' && /[aeiou]c[eií]r$/.test(inf) && !irr.yo && !irr.pres
  const isDuc = /ducir$/.test(inf)

  // Present indicative
  let pres: string[]
  if (irr.pres) pres = irr.pres.slice()
  else {
    pres = E.pres.map((end, p) => {
      if (isUir && p !== 3 && p !== 4) return stem + 'y' + end
      const st = BOOT[p] ? mainChange(stem, f) : stem
      return join(st, end, cls)
    })
    if (irr.yo) pres[0] = irr.yo
    else if (isZc) pres[0] = stem.slice(0, -1) + 'zco'
  }

  // Present subjunctive
  let subj: string[]
  if (irr.subj) subj = irr.subj.slice()
  else {
    const yoStem = irr.subjStem ?? (irr.yo ? irr.yo.replace(/o$/, '') : isZc ? stem.slice(0, -1) + 'zc' : null)
    subj = E.subj.map((end, p) => {
      if (yoStem) return yoStem + end
      if (isUir) return stem + 'y' + end
      const st = BOOT[p] ? mainChange(stem, f) : secondChange(stem, f, cls)
      return join(st, end, cls)
    })
  }

  // Preterite
  let pret: string[]
  const pretStem = irr.pretStem ?? (isDuc ? stem.slice(0, -1) + 'j' : null)
  if (irr.pret) pret = irr.pret.slice()
  else if (pretStem) {
    pret = STRONG_PRET.map((end, p) => {
      if (p === 5 && pretStem.endsWith('j')) return pretStem + 'eron'
      if (p === 2 && pretStem === 'hic') return 'hizo'
      return pretStem + end
    })
  } else if (isUir) {
    pret = ['í', 'iste', 'yó', 'imos', 'isteis', 'yeron'].map((e) => stem + e)
  } else if (vowelStem) {
    pret = ['í', 'íste', 'yó', 'ímos', 'ísteis', 'yeron'].map((e) => stem + e)
  } else {
    pret = E.pret.map((end, p) => {
      const st = p === 2 || p === 5 ? secondChange(stem, f, cls) : stem
      return join(st, end, cls)
    })
  }

  // Imperfect
  const impf = irr.impf ? irr.impf.slice() : E.impf.map((end) => stem + end)

  // Future & conditional
  const futStem = irr.fut ?? stripAcute(inf)
  const fut = FUT.map((e) => futStem + e)
  const cond = COND.map((e) => futStem + e)

  // Imperfect subjunctive from 3rd plural preterite
  const base = pret[5].replace(/ron$/, '')
  const impsubj = ['ra', 'ras', 'ra', 'ramos', 'rais', 'ran'].map((e, p) => (p === 3 ? accentLastVowel(base) : base) + e)

  // Gerund & participle
  let ger: string
  if (irr.ger) ger = irr.ger
  else if (cls === 'ar') ger = stem + 'ando'
  else if (isUir || vowelStem) ger = stem + 'yendo'
  else ger = secondChange(stem, f, cls) + 'iendo'

  let part: string
  if (irr.part) part = irr.part
  else if (cls === 'ar') part = stem + 'ado'
  else if (vowelStem) part = stem + 'ído'
  else part = stem + 'ido'

  const impTu = irr.impTu ?? pres[2]
  const impVos = inf.slice(0, -1) + 'd'
  const impNos = inf === 'ir' ? 'vamos' : null

  return { pres, pret, impf, fut, cond, subj, impsubj, impTu, impVos, impNos, ger, part }
}

function prefixed(prefix: string, form: string): string {
  if (!form) return form
  const w = prefix + form
  return syllabify(form).length === 1 ? stressLast(w) : w
}

function prefixSimple(s: Simple, prefix: string): Simple {
  const p = (x: string) => prefixed(prefix, x)
  return {
    pres: s.pres.map(p),
    pret: s.pret.map(p),
    impf: s.impf.map(p),
    fut: s.fut.map(p),
    cond: s.cond.map(p),
    subj: s.subj.map(p),
    impsubj: s.impsubj.map(p),
    impTu: p(s.impTu),
    impVos: p(s.impVos),
    impNos: s.impNos ? p(s.impNos) : null,
    ger: p(s.ger),
    part: p(s.part),
  }
}

export interface Conjugation {
  inf: string
  reflexive: boolean
  ger: string
  part: string
  forms: Record<TenseId, F6>
}

let flagLookup: (inf: string) => string = () => ''
/** Lets the verb list (content/verbs.ts) provide flags for each infinitive. */
export function setFlagLookup(fn: (inf: string) => string) {
  flagLookup = fn
  cache.clear()
}

function simpleFor(inf: string): Simple {
  const flags = parseFlags(flagLookup(inf))
  if (flags.base && inf.endsWith(flags.base) && inf !== flags.base) {
    const prefix = inf.slice(0, inf.length - flags.base.length)
    return prefixSimple(simpleFor(flags.base), prefix)
  }
  return conjugateSimple(inf, flags)
}

const cache = new Map<string, Conjugation>()

/** Full conjugation of any infinitive (reflexive "-se" verbs supported). */
export function conjugate(infinitive: string): Conjugation {
  const hit = cache.get(infinitive)
  if (hit) return hit
  const reflexive = /[aeií]rse$/.test(infinitive)
  const inf = reflexive ? infinitive.slice(0, -2) : infinitive
  // flags for reflexive verbs may be stored on the "-se" infinitive (acostarse|ue)
  const simple = reflexive && flagLookup(infinitive) ? conjugateReflexiveFlags(infinitive) : simpleFor(inf)

  const haber = simpleFor('haber')
  const comp = (aux: string[]) => aux.map((a) => `${a} ${simple.part}`) as F6
  const six = (a: string[]) => a.slice(0, 6) as F6

  const subj = simple.subj
  const impAff: F6 = ['', simple.impTu, subj[2], simple.impNos ?? subj[3], simple.impVos, subj[5]]
  const impNeg: F6 = ['', `no ${subj[1]}`, `no ${subj[2]}`, `no ${subj[3]}`, `no ${subj[4]}`, `no ${subj[5]}`]

  const forms: Record<TenseId, F6> = {
    pres: six(simple.pres),
    pret: six(simple.pret),
    impf: six(simple.impf),
    fut: six(simple.fut),
    cond: six(simple.cond),
    subj: six(simple.subj),
    impsubj: six(simple.impsubj),
    perf: comp(haber.pres),
    plus: comp(haber.impf),
    futp: comp(haber.fut),
    condp: comp(haber.cond),
    subjp: comp(haber.subj),
    plussubj: comp(haber.impsubj),
    imp: impAff,
    impneg: impNeg,
  }

  let ger = simple.ger
  if (reflexive) {
    for (const t of Object.keys(forms) as TenseId[]) {
      if (t === 'imp' || t === 'impneg') continue
      forms[t] = forms[t].map((x, p) => `${REFL[p]} ${x}`) as F6
    }
    const isIr = /[ií]r$/.test(inf)
    forms.imp = [
      '',
      attachClitic(simple.impTu, 'te'),
      attachClitic(subj[2], 'se'),
      reflexiveNos(simple.impNos ?? subj[3]),
      inf === 'ir' ? 'idos' : reflexiveVos(simple.impVos, isIr),
      attachClitic(subj[5], 'se'),
    ]
    forms.impneg = ['', `no te ${subj[1]}`, `no se ${subj[2]}`, `no nos ${subj[3]}`, `no os ${subj[4]}`, `no se ${subj[5]}`]
    ger = attachClitic(simple.ger, 'se')
  }

  const out: Conjugation = { inf: infinitive, reflexive, ger, part: simple.part, forms }
  cache.set(infinitive, out)
  return out
}

function conjugateReflexiveFlags(reflInf: string): Simple {
  const inf = reflInf.slice(0, -2)
  const flags = parseFlags(flagLookup(reflInf))
  if (flags.base) {
    const base = flags.base.replace(/se$/, '')
    if (inf.endsWith(base) && inf !== base) return prefixSimple(simpleFor(base), inf.slice(0, inf.length - base.length))
  }
  return conjugateSimple(inf, flags)
}

/** levantemos + nos → levantémonos (the -s drops) */
function reflexiveNos(form: string): string {
  const s = stressIndex(form)
  const w = form.slice(0, -1) + 'nos'
  return stressIndex(w) === s ? w : accentSyllable(w, s)
}

/** levantad + os → levantaos; vestid + os → vestíos (the -d drops) */
function reflexiveVos(form: string, isIr: boolean): string {
  if (isIr) return form.slice(0, -2) + 'íos'
  return form.slice(0, -1) + 'os'
}

/** Regular model forms (no flags, no irregular table) — used to highlight irregular forms. */
export function regularModel(infinitive: string): Record<TenseId, F6> {
  const reflexive = /[aeií]rse$/.test(infinitive)
  const inf = reflexive ? infinitive.slice(0, -2) : infinitive
  const cls = clsOf(inf)
  const stem = stripAcute(inf).slice(0, -2)
  const E = END[cls]
  const r = (arr: string[]) => arr.map((e) => stem + e)
  const pres = r(E.pres)
  const pret = r(E.pret)
  const subj = r(E.subj)
  const futStem = stripAcute(inf)
  const base = pret[5].replace(/ron$/, '')
  const out = {
    pres,
    pret,
    impf: r(E.impf),
    fut: FUT.map((e) => futStem + e),
    cond: COND.map((e) => futStem + e),
    subj,
    impsubj: ['ra', 'ras', 'ra', 'ramos', 'rais', 'ran'].map((e, p) => (p === 3 ? accentLastVowel(base) : base) + e),
    imp: ['', pres[2], subj[2], subj[3], inf.slice(0, -1) + 'd', subj[5]],
    impneg: ['', subj[1], subj[2], subj[3], subj[4], subj[5]].map((x, i) => (i ? `no ${x}` : '')),
  } as Record<string, string[]>
  return out as Record<TenseId, F6>
}

/** Is a given form different from the plain regular pattern? (compound tenses: never highlighted) */
export function irregularMask(c: Conjugation): Partial<Record<TenseId, boolean[]>> {
  const model = regularModel(c.inf)
  const strip = (s: string) => s.replace(/^(me|te|se|nos|os) /, '').replace(/^no (me |te |se |nos |os )?/, '')
  const out: Partial<Record<TenseId, boolean[]>> = {}
  for (const t of ['pres', 'pret', 'impf', 'fut', 'cond', 'subj', 'impsubj', 'imp', 'impneg'] as TenseId[]) {
    const m = model[t]
    if (!m) continue
    out[t] = c.forms[t].map((f, p) => {
      if (!f) return false
      if (c.reflexive && t === 'imp') return false
      return strip(f) !== strip(m[p])
    })
  }
  return out
}

/** Every inflected word of a verb (for the tap-a-word lookup). */
export function formIndexEntries(c: Conjugation): { form: string; tense: TenseId | 'ger' | 'part'; p: number }[] {
  const out: { form: string; tense: TenseId | 'ger' | 'part'; p: number }[] = []
  const lastWord = (s: string) => s.split(' ').pop() ?? s
  for (const t of ['pres', 'pret', 'impf', 'fut', 'cond', 'subj', 'impsubj', 'imp'] as TenseId[]) {
    c.forms[t].forEach((f, p) => {
      if (f) out.push({ form: lastWord(f).toLowerCase(), tense: t, p })
    })
  }
  out.push({ form: c.ger.toLowerCase(), tense: 'ger', p: -1 })
  const part = c.part.toLowerCase()
  out.push({ form: part, tense: 'part', p: -1 })
  if (/o$/.test(part)) for (const suf of ['a', 'os', 'as']) out.push({ form: part.slice(0, -1) + suf, tense: 'part', p: -1 })
  return out
}
