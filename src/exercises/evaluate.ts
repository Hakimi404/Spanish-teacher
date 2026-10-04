import type { Exercise } from './generate'
import { speakable } from './generate'
import { bestVerdict, compareAnswer, fold, stripArticle } from '../lib/spanish'
import { SPEECH_PASS, type SpeechScore } from '../lib/recognition'

export interface Evaluation {
  ok: boolean
  note?: string
  /** the correct answer to show */
  expected: string
  /** is `expected` Spanish (tappable + speakable)? */
  expectedEs: boolean
  translation?: string
  /** Spanish text to read aloud after checking */
  say?: string
}

export function isReady(ex: Exercise, value: unknown): boolean {
  switch (ex.kind) {
    case 'mc':
    case 'listen':
    case 'fill':
      return typeof value === 'string' && value.length > 0
    case 'build':
      return Array.isArray(value) && value.length > 0
    case 'type':
    case 'dictation':
      return typeof value === 'string' && value.trim().length > 0
    case 'speak':
      return !!value
    case 'match':
      return false
  }
}

export function evaluate(ex: Exercise, value: unknown): Evaluation {
  switch (ex.kind) {
    case 'mc':
      return ex.dir === 'es-en'
        ? { ok: value === ex.answer, expected: ex.answer, expectedEs: false, translation: undefined, say: undefined }
        : { ok: value === ex.answer, expected: ex.answer, expectedEs: true, translation: ex.prompt, say: ex.answer }
    case 'listen':
      return { ok: value === ex.answer, expected: ex.answer, expectedEs: true, translation: ex.item.en }
    case 'fill':
      return { ok: value === ex.answer, expected: ex.full, expectedEs: true, translation: ex.en, say: speakable(ex.full) }
    case 'build': {
      const chosen = (value as number[]).map((i) => ex.bank[i])
      const norm = (a: string[]) => fold(a.join(' ')).replace(/'/g, '')
      const ok = norm(chosen) === norm(ex.answer)
      return ex.dir === 'en-es'
        ? { ok, expected: ex.full, expectedEs: true, translation: ex.prompt, say: ex.full }
        : { ok, expected: ex.item.en, expectedEs: false, translation: undefined }
    }
    case 'type': {
      const input = String(value ?? '')
      const { verdict, match } = bestVerdict(input, ex.accept)
      if (verdict !== 'wrong') {
        const note = verdict === 'accent' ? `Watch the accents: ${match}` : verdict === 'typo' ? `Small typo — it's “${match}”` : undefined
        return { ok: true, note, expected: ex.answer, expectedEs: true, translation: ex.prompt, say: ex.answer }
      }
      const bare = ex.accept.map((a) => stripArticle(a))
      if (bare.some((b) => b !== ex.answer && compareAnswer(input, b) !== 'wrong')) {
        return { ok: true, note: `Remember the article: ${ex.answer}`, expected: ex.answer, expectedEs: true, translation: ex.prompt, say: ex.answer }
      }
      return { ok: false, expected: ex.answer, expectedEs: true, translation: ex.prompt, say: ex.answer }
    }
    case 'dictation': {
      const { verdict, match } = bestVerdict(String(value ?? ''), ex.accept)
      const ok = verdict !== 'wrong'
      const note = verdict === 'accent' ? `Watch the accents: ${match}` : verdict === 'typo' ? `Almost! It's “${match}”` : undefined
      return { ok, note, expected: ex.text, expectedEs: true, translation: ex.en }
    }
    case 'speak': {
      const v = value as SpeechScore | null
      const ok = !!v && v.score >= SPEECH_PASS
      return {
        ok,
        note: v ? `I heard: “${v.heard}” (${Math.round(v.score * 100)}%)` : undefined,
        expected: ex.text,
        expectedEs: true,
        translation: ex.en,
      }
    }
    case 'match':
      return { ok: true, expected: '', expectedEs: false }
  }
}
