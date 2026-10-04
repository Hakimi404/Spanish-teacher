/* Text-to-speech with the device's own Spanish voices (Web Speech API).
   Free, offline-capable on most devices, no API keys. */
import { useSyncExternalStore } from 'react'

export const ttsSupported =
  typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window

let voices: SpeechSynthesisVoice[] = []
let spanish: SpeechSynthesisVoice[] = []
let prefURI: string | null = null
let baseRate = 0.92
let speakingId: string | null = null
let version = 0
const listeners = new Set<() => void>()

function emit() {
  version++
  listeners.forEach((l) => l())
}

const normLang = (l: string) => (l || '').replace('_', '-').toLowerCase()

function scoreVoice(v: SpeechSynthesisVoice): number {
  const lang = normLang(v.lang)
  const name = v.name.toLowerCase()
  let s = 0
  if (lang === 'es-es') s += 100
  else if (lang.startsWith('es')) s += 20
  if (/natural|neural|online|premium|enhanced|mejorad|wavenet|studio|siri/.test(name)) s += 40
  if (/google/.test(name)) s += 25
  if (/m[oó]nica|jorge|elvira|[aá]lvaro|helena|laura|pablo|luc[ií]a|sergio|dalia|abril|arnau|irene/.test(name)) s += 5
  if (/compact|eloquence|grandma|grandpa|rocko|shelley|flo|reed|sandy|eddy/.test(name)) s -= 30
  if (v.localService) s += 2
  return s
}

function loadVoices() {
  if (!ttsSupported) return
  const v = window.speechSynthesis.getVoices()
  if (!v.length) return
  voices = v
  spanish = v.filter((x) => normLang(x.lang).startsWith('es')).sort((a, b) => scoreVoice(b) - scoreVoice(a))
  emit()
}

if (ttsSupported) {
  loadVoices()
  window.speechSynthesis.addEventListener?.('voiceschanged', loadVoices)
  let tries = 0
  const iv = setInterval(() => {
    loadVoices()
    if (voices.length || ++tries > 24) clearInterval(iv)
  }, 250)
}

export function configureSpeech(opts: { voiceURI: string | null; rate: number }) {
  prefURI = opts.voiceURI
  baseRate = opts.rate
}

export function spanishVoices(): SpeechSynthesisVoice[] {
  return spanish
}

/** null = voice list not known yet / browser hides it (Android often does) */
export function voiceStatus(): 'ok' | 'none' | 'unknown' | 'unsupported' {
  if (!ttsSupported) return 'unsupported'
  if (!voices.length) return 'unknown'
  return spanish.length ? 'ok' : 'none'
}

export function currentVoice(): SpeechSynthesisVoice | null {
  if (prefURI) {
    const v = spanish.find((x) => x.voiceURI === prefURI)
    if (v) return v
  }
  return spanish[0] ?? null
}

function prepare(text: string): string {
  return text
    .replace(/[[\]]/g, '')
    .replace(/_{2,}/g, '…')
    .replace(/\s*\/\s*/g, ', ')
    .replace(/\s+/g, ' ')
    .trim()
}

let keep: SpeechSynthesisUtterance | null = null // avoid Chrome GC bug (onend never firing)
let seqToken = 0

export interface SpeakOpts {
  slow?: boolean
  rate?: number
  id?: string
  onEnd?: () => void
}

export function speak(text: string, opts: SpeakOpts = {}) {
  if (!ttsSupported) {
    opts.onEnd?.()
    return
  }
  const t = prepare(text)
  if (!t) return
  const synth = window.speechSynthesis
  const u = new SpeechSynthesisUtterance(t)
  const v = currentVoice()
  if (v) {
    u.voice = v
    u.lang = v.lang
  } else {
    u.lang = 'es-ES'
  }
  u.rate = opts.rate ?? (opts.slow ? Math.max(0.45, baseRate * 0.62) : baseRate)
  u.pitch = 1
  const id = opts.id ?? t
  let finished = false
  u.onstart = () => {
    speakingId = id
    emit()
  }
  const done = () => {
    if (finished) return
    finished = true
    if (speakingId === id) {
      speakingId = null
      emit()
    }
    opts.onEnd?.()
  }
  u.onend = done
  u.onerror = done
  keep = u
  speakingId = id
  emit()
  if (synth.speaking || synth.pending) {
    synth.cancel()
    setTimeout(() => synth.speak(u), 70)
  } else {
    synth.speak(u)
  }
  if (synth.paused) synth.resume()
}

/** Speak several texts in a row; onIndex reports which one is playing (-1 at the end). */
export function speakSequence(texts: string[], onIndex: (i: number) => void, opts: { slow?: boolean } = {}) {
  const token = ++seqToken
  const next = (i: number) => {
    if (token !== seqToken) return
    if (i >= texts.length) {
      onIndex(-1)
      return
    }
    onIndex(i)
    speak(texts[i], { slow: opts.slow, id: `seq-${token}-${i}`, onEnd: () => setTimeout(() => next(i + 1), 250) })
  }
  next(0)
  return () => {
    if (token === seqToken) seqToken++
    stopSpeaking()
    onIndex(-1)
  }
}

export function stopSpeaking() {
  seqToken++
  if (ttsSupported) window.speechSynthesis.cancel()
  if (speakingId !== null) {
    speakingId = null
    emit()
  }
  void keep
}

function subscribe(l: () => void) {
  listeners.add(l)
  return () => listeners.delete(l)
}

/** true while the utterance with this id (default: the text itself) is playing */
export function useSpeaking(id: string): boolean {
  return useSyncExternalStore(subscribe, () => speakingId === id)
}

/** re-render when the voice list changes */
export function useVoiceVersion(): number {
  return useSyncExternalStore(subscribe, () => version)
}
