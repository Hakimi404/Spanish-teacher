/* Speech recognition (pronunciation checks). Chrome/Edge/Safari support it; Firefox does not. */
import { digitsToWords, fold, wordsOf, similarity } from './spanish'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyRec = any

function recClass(): AnyRec {
  if (typeof window === 'undefined') return null
  const w = window as unknown as Record<string, unknown>
  return w.SpeechRecognition || w.webkitSpeechRecognition || null
}

export const recognitionSupported = !!recClass()

export interface ListenOpts {
  onResult: (alternatives: string[]) => void
  onError?: (code: string) => void
  onEnd?: () => void
}

/** Start listening once; returns a function that aborts. */
export function listen(opts: ListenOpts): () => void {
  const C = recClass()
  if (!C) {
    opts.onError?.('unsupported')
    opts.onEnd?.()
    return () => {}
  }
  const rec: AnyRec = new C()
  rec.lang = 'es-ES'
  rec.interimResults = false
  rec.continuous = false
  rec.maxAlternatives = 5
  let got = false
  rec.onresult = (e: AnyRec) => {
    got = true
    const res = e.results[0]
    const alts: string[] = []
    for (let i = 0; i < res.length; i++) alts.push(String(res[i].transcript))
    opts.onResult(alts)
  }
  rec.onerror = (e: AnyRec) => opts.onError?.(String(e.error || 'error'))
  rec.onend = () => {
    if (!got) opts.onError?.('no-speech')
    opts.onEnd?.()
  }
  try {
    rec.start()
  } catch {
    opts.onError?.('start-failed')
    opts.onEnd?.()
  }
  return () => {
    try {
      rec.abort()
    } catch {
      /* ignore */
    }
  }
}

export interface SpeechScore {
  score: number
  heard: string
  /** for each target word: was it recognised? */
  matched: boolean[]
}

/** Score what the recogniser heard against the target sentence. */
export function scoreSpeech(target: string, alternatives: string[]): SpeechScore {
  const targetWords = wordsOf(target)
  const tw = targetWords.map((w) => fold(w))
  let best: SpeechScore = { score: 0, heard: alternatives[0] ?? '', matched: tw.map(() => false) }
  for (const alt of alternatives) {
    const heard = digitsToWords(alt)
    const hw = new Set(wordsOf(heard).map((w) => fold(w)))
    const matched = tw.map((w) => hw.has(w))
    const recall = matched.filter(Boolean).length / Math.max(1, tw.length)
    const sim = similarity(target, heard)
    const score = Math.round((0.55 * recall + 0.45 * sim) * 100) / 100
    if (score > best.score) best = { score, heard: alt, matched }
  }
  return best
}

export const SPEECH_PASS = 0.72

export function recognitionErrorText(code: string): string {
  switch (code) {
    case 'not-allowed':
    case 'service-not-allowed':
      return 'Microphone access is blocked. Allow the microphone for this site in your browser settings.'
    case 'no-speech':
      return "I didn't hear anything — tap the mic and speak clearly."
    case 'audio-capture':
      return 'No microphone was found.'
    case 'network':
      return 'Speech recognition needs an internet connection in this browser.'
    case 'unsupported':
      return 'This browser has no speech recognition. Try Chrome, Edge or Safari.'
    default:
      return 'Something went wrong with the microphone. Try again.'
  }
}
