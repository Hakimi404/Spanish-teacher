import { useEffect, useMemo, useRef, useState } from 'react'
import { Mic, Square } from 'lucide-react'
import type { Exercise } from './generate'
import { Es } from '../components/Es'
import { SpeakButton } from '../components/SpeakButton'
import { AccentKeys } from '../components/Bits'
import { speak } from '../lib/speech'
import { listen as listenMic, recognitionErrorText, scoreSpeech, type SpeechScore } from '../lib/recognition'
import { sfx } from '../lib/sound'
import { cx, shuffle, vibrate } from '../lib/util'
import { useStore } from '../store/store'

type Status = 'idle' | 'correct' | 'wrong'

export interface ViewProps<V> {
  ex: Exercise
  value: V
  setValue: (v: V) => void
  status: Status
  onEnter?: () => void
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl sm:text-2xl font-black mb-5">{children}</h2>
}

/** 1-9 keys pick an option on desktop. */
function useOptionKeys(options: string[], pick: (o: string) => void, disabled: boolean) {
  useEffect(() => {
    if (disabled) return
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      const n = Number(e.key)
      if (n >= 1 && n <= options.length) pick(options[n - 1])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [options, pick, disabled])
}

function optionState(o: string, value: unknown, answer: string, status: Status): string | undefined {
  if (status === 'idle') return value === o ? 'selected' : undefined
  if (o === answer) return 'correct'
  if (o === value) return 'wrong'
  return 'dim'
}

function useAutoplay(text: string | null, enabled = true) {
  const autoplay = useStore((s) => s.settings.autoplay)
  useEffect(() => {
    if (!text || !autoplay || !enabled) return
    const t = setTimeout(() => speak(text), 250)
    return () => clearTimeout(t)
  }, [text, autoplay, enabled])
}

/* ───────────── Multiple choice ───────────── */
const NO_OPTIONS: string[] = []

export function MCView({ ex, value, setValue, status }: ViewProps<string | null>) {
  const isMc = ex.kind === 'mc'
  const esPrompt = isMc && ex.dir === 'es-en'
  useAutoplay(isMc && esPrompt ? ex.prompt : null)
  const pick = (o: string) => {
    if (status !== 'idle') return
    setValue(o)
    if (!esPrompt) speak(o)
  }
  useOptionKeys(isMc ? ex.options : NO_OPTIONS, pick, status !== 'idle')
  if (ex.kind !== 'mc') return null
  return (
    <div>
      <Title>{esPrompt ? 'What does this mean?' : 'Choose the Spanish'}</Title>
      <div className="flex items-center gap-3 mb-7">
        {esPrompt && <SpeakButton text={ex.prompt} size="lg" variant="info" />}
        <div className="text-[1.7rem] sm:text-3xl font-black leading-tight">{esPrompt ? <Es text={ex.prompt} /> : <span>“{ex.prompt}”</span>}</div>
      </div>
      <div className="grid gap-3">
        {ex.options.map((o, i) => (
          <button key={o} type="button" className="option" data-state={optionState(o, value, ex.answer, status)} disabled={status !== 'idle'} onClick={() => pick(o)}>
            <span className="option-key">{i + 1}</span>
            {esPrompt ? <span>{o}</span> : <Es text={o} static />}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ───────────── Listening ───────────── */
export function ListenView({ ex, value, setValue, status }: ViewProps<string | null>) {
  const audio = ex.kind === 'listen' ? ex.audio : ''
  useAutoplay(audio || null)
  const options = ex.kind === 'listen' ? ex.options : []
  const pick = (o: string) => status === 'idle' && setValue(o)
  useOptionKeys(options, pick, status !== 'idle')
  if (ex.kind !== 'listen') return null
  return (
    <div>
      <Title>What do you hear?</Title>
      <div className="flex items-center justify-center gap-4 mb-8">
        <SpeakButton text={ex.audio} size="xl" variant="info" label="Play again" />
        <SpeakButton text={ex.audio} slow size="lg" variant="soft" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {ex.options.map((o, i) => (
          <button key={o} type="button" className="option" data-state={optionState(o, value, ex.answer, status)} disabled={status !== 'idle'} onClick={() => pick(o)}>
            <span className="option-key">{i + 1}</span>
            <Es text={o} static />
          </button>
        ))}
      </div>
    </div>
  )
}

/* ───────────── Fill the gap ───────────── */
export function FillView({ ex, value, setValue, status }: ViewProps<string | null>) {
  const options = ex.kind === 'fill' ? ex.options : []
  const pick = (o: string) => status === 'idle' && setValue(o)
  useOptionKeys(options, pick, status !== 'idle')
  if (ex.kind !== 'fill') return null
  const [before, after] = ex.sentence.split('___')
  const filled = value as string | null
  return (
    <div>
      <Title>Fill in the gap</Title>
      <div className="card p-5 mb-6">
        <div className="text-2xl font-black leading-relaxed">
          <Es text={before} />
          <span
            className={cx(
              'inline-block min-w-[4.5rem] mx-1 px-2 rounded-xl border-b-4 text-center align-baseline',
              status === 'correct' ? 'border-ok text-ok-ink bg-ok-soft' : status === 'wrong' ? 'border-bad text-bad-ink bg-bad-soft' : filled ? 'border-info text-info-ink bg-info-soft' : 'border-line2',
            )}
          >
            {filled ?? ' '}
          </span>
          {after !== undefined && <Es text={after} />}
        </div>
        {ex.en && <div className="text-ink2 font-bold mt-2">{ex.en}</div>}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {ex.options.map((o, i) => (
          <button key={o} type="button" className="option justify-center" data-state={optionState(o, value, ex.answer, status)} disabled={status !== 'idle'} onClick={() => pick(o)}>
            <span className="option-key hidden sm:grid">{i + 1}</span>
            <span lang="es">{o}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ───────────── Build a sentence with tiles ───────────── */
export function BuildView({ ex, value, setValue, status }: ViewProps<number[] | null>) {
  if (ex.kind !== 'build') return null
  const chosen = value ?? []
  const esTiles = ex.dir === 'en-es'
  const add = (i: number) => {
    if (status !== 'idle' || chosen.includes(i)) return
    sfx.tap()
    if (esTiles) speak(ex.bank[i])
    setValue([...chosen, i])
  }
  const remove = (i: number) => {
    if (status !== 'idle') return
    setValue(chosen.filter((x) => x !== i))
  }
  return (
    <div>
      <Title>Translate this sentence</Title>
      <div className="flex items-start gap-3 mb-6">
        {!esTiles && <SpeakButton text={ex.prompt} size="md" variant="info" />}
        <div className="text-xl sm:text-2xl font-black leading-snug">{esTiles ? ex.prompt : <Es text={ex.prompt} />}</div>
      </div>
      <div
        className={cx(
          'min-h-[7.5rem] rounded-2xl border-2 p-3 flex flex-wrap content-start gap-2 mb-6',
          'bg-[repeating-linear-gradient(transparent,transparent_3.15rem,var(--line)_3.15rem,var(--line)_3.3rem)]',
          status === 'correct' ? 'border-ok' : status === 'wrong' ? 'border-bad' : 'border-line',
        )}
      >
        {chosen.map((i) => (
          <button key={i} type="button" className="tile anim-pop" onClick={() => remove(i)} disabled={status !== 'idle'}>
            <span lang={esTiles ? 'es' : 'en'}>{ex.bank[i]}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {ex.bank.map((t, i) =>
          chosen.includes(i) ? (
            <span key={i} className="tile tile-ghost" aria-hidden="true">
              {t}
            </span>
          ) : (
            <button key={i} type="button" className="tile" onClick={() => add(i)} disabled={status !== 'idle'}>
              <span lang={esTiles ? 'es' : 'en'}>{t}</span>
            </button>
          ),
        )}
      </div>
    </div>
  )
}

/* ───────────── Match pairs ───────────── */
export function MatchView({ ex, onComplete, status }: { ex: Exercise; onComplete: (mistakes: number) => void; status: Status }) {
  const pairs = ex.kind === 'match' ? ex.pairs : []
  const left = useMemo(() => shuffle(pairs.map((p, i) => ({ i, t: p.es }))), [pairs])
  const right = useMemo(() => shuffle(pairs.map((p, i) => ({ i, t: p.en }))), [pairs])
  const [selL, setSelL] = useState<number | null>(null)
  const [selR, setSelR] = useState<number | null>(null)
  const [done, setDone] = useState<Set<number>>(new Set())
  const [bad, setBad] = useState<[number, number] | null>(null)
  const mistakes = useRef(0)

  useEffect(() => {
    if (selL === null || selR === null) return
    if (selL === selR) {
      sfx.correct()
      const next = new Set(done)
      next.add(selL)
      setDone(next)
      setSelL(null)
      setSelR(null)
      if (next.size === pairs.length) setTimeout(() => onComplete(mistakes.current), 350)
    } else {
      sfx.wrong()
      vibrate(60)
      mistakes.current++
      setBad([selL, selR])
      const t = setTimeout(() => {
        setBad(null)
        setSelL(null)
        setSelR(null)
      }, 550)
      return () => clearTimeout(t)
    }
  }, [selL, selR]) // eslint-disable-line react-hooks/exhaustive-deps

  if (ex.kind !== 'match') return null
  const state = (side: 'l' | 'r', i: number) => {
    if (done.has(i)) return 'correct'
    if (bad && (side === 'l' ? bad[0] : bad[1]) === i) return 'wrong'
    if ((side === 'l' ? selL : selR) === i) return 'selected'
    return undefined
  }
  return (
    <div>
      <Title>Tap the matching pairs</Title>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-3">
          {left.map(({ i, t }) => (
            <button
              key={i}
              type="button"
              className={cx('option justify-center text-center min-h-[3.6rem]', done.has(i) && 'opacity-60')}
              data-state={state('l', i)}
              disabled={done.has(i) || status !== 'idle'}
              onClick={() => {
                speak(t)
                setSelL(i)
              }}
            >
              <Es text={t} static />
            </button>
          ))}
        </div>
        <div className="grid gap-3">
          {right.map(({ i, t }) => (
            <button
              key={i}
              type="button"
              className={cx('option justify-center text-center min-h-[3.6rem] text-[0.95rem]', done.has(i) && 'opacity-60')}
              data-state={state('r', i)}
              disabled={done.has(i) || status !== 'idle'}
              onClick={() => setSelR(i)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ───────────── Type the answer / dictation ───────────── */
export function TypeView({ ex, value, setValue, status, onEnter }: ViewProps<string | null>) {
  const ref = useRef<HTMLInputElement>(null)
  const isDict = ex.kind === 'dictation'
  useAutoplay(isDict && ex.kind === 'dictation' ? ex.text : null)
  useEffect(() => {
    const t = setTimeout(() => ref.current?.focus(), 150)
    return () => clearTimeout(t)
  }, [])
  if (ex.kind !== 'type' && ex.kind !== 'dictation') return null
  const v = value ?? ''
  return (
    <div>
      <Title>{isDict ? 'Type what you hear' : 'Write this in Spanish'}</Title>
      {ex.kind === 'dictation' ? (
        <div className="flex items-center justify-center gap-4 mb-7">
          <SpeakButton text={ex.text} size="xl" variant="info" label="Play again" />
          <SpeakButton text={ex.text} slow size="lg" variant="soft" />
        </div>
      ) : (
        <div className="text-[1.7rem] sm:text-3xl font-black leading-tight mb-7">“{ex.prompt}”</div>
      )}
      <input
        ref={ref}
        lang="es"
        className={cx('input text-xl', status === 'correct' && 'border-ok!', status === 'wrong' && 'border-bad!')}
        placeholder={isDict ? 'Escribe aquí…' : 'In Spanish…'}
        value={v}
        disabled={status !== 'idle'}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            onEnter?.()
          }
        }}
      />
      <div className="mt-3">
        <AccentKeys inputRef={ref} value={v} onChange={(x) => setValue(x)} />
      </div>
    </div>
  )
}

/* ───────────── Speak ───────────── */
let speakingDisabledUntil = 0
export const speakingPaused = () => Date.now() < speakingDisabledUntil
export function pauseSpeaking(minutes = 15) {
  speakingDisabledUntil = Date.now() + minutes * 60_000
}

export function SpeakView({ ex, value, setValue, status }: ViewProps<SpeechScore | null>) {
  const [listening, setListening] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const stopRef = useRef<() => void>(() => {})
  const bumpStats = useStore((s) => s.bumpStats)
  useEffect(() => () => stopRef.current(), [])
  if (ex.kind !== 'speak') return null
  const start = () => {
    if (listening) {
      stopRef.current()
      setListening(false)
      return
    }
    setError(null)
    setListening(true)
    stopRef.current = listenMic({
      onResult: (alts) => {
        const sc = scoreSpeech(ex.text, alts)
        bumpStats({ spoken: 1 })
        setValue(sc)
      },
      onError: (code) => {
        if (code !== 'aborted') setError(recognitionErrorText(code))
      },
      onEnd: () => setListening(false),
    })
  }
  const words = ex.text.split(/\s+/)
  return (
    <div>
      <Title>Say this out loud</Title>
      <div className="card p-5 mb-7 flex items-start gap-3">
        <SpeakButton text={ex.text} size="md" variant="info" />
        <SpeakButton text={ex.text} slow size="md" variant="soft" />
        <div className="min-w-0">
          <div className="text-2xl font-black leading-snug">
            {value ? (
              <span lang="es">
                {words.map((w, i) => (
                  <span key={i} className={value.matched[i] ? 'text-ok' : 'text-bad'}>
                    {w}{' '}
                  </span>
                ))}
              </span>
            ) : (
              <Es text={ex.text} />
            )}
          </div>
          <div className="text-ink2 font-bold mt-1">{ex.en}</div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={start}
          disabled={status !== 'idle'}
          className={cx('grid place-items-center w-24 h-24 rounded-full text-white transition', listening ? 'bg-bad anim-pulse-ring' : 'bg-info shadow-[0_5px_0_var(--info-lip)] active:translate-y-1 active:shadow-none')}
          aria-label={listening ? 'Stop listening' : 'Start speaking'}
        >
          {listening ? <Square className="w-9 h-9 fill-white" /> : <Mic className="w-10 h-10" />}
        </button>
        <div className="text-sm font-bold text-ink2 h-5">{listening ? 'Listening… speak now' : value ? `Score ${Math.round(value.score * 100)}% — tap the mic to try again` : 'Tap the mic and read the sentence'}</div>
        {error && <div className="text-sm font-bold text-bad text-center max-w-sm">{error}</div>}
      </div>
    </div>
  )
}
