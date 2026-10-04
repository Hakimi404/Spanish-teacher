import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, Circle, Mic, Play, RotateCcw, Square, X } from 'lucide-react'
import { SOUNDS, PAIR_SETS, TWISTERS, STRESS_WORDS, type PairSet } from '../content/pronunciation'
import { LESSONS } from '../content'
import { PageHeader } from '../components/Bits'
import { Es } from '../components/Es'
import { SpeakButton } from '../components/SpeakButton'
import { Callout, inline } from '../components/Rich'
import { ProgressBar } from '../components/Progress'
import { Mascot } from '../components/Mascot'
import { useStore } from '../store/store'
import { speak } from '../lib/speech'
import { sfx } from '../lib/sound'
import { announce } from '../lib/celebrate'
import { useRecorder } from '../lib/recorder'
import { listen, recognitionErrorText, recognitionSupported, scoreSpeech, SPEECH_PASS, type SpeechScore } from '../lib/recognition'
import { syllabify, stressIndex, wordsOf } from '../lib/spanish'
import { cx, pick, sample, shuffle } from '../lib/util'

type Tab = 'sounds' | 'pairs' | 'stress' | 'twisters' | 'speak'
const TABS: [Tab, string][] = [
  ['sounds', 'Sounds'],
  ['pairs', 'Pairs'],
  ['stress', 'Stress'],
  ['twisters', 'Twisters'],
  ['speak', 'Speak'],
]

export default function Pronunciation() {
  const [tab, setTab] = useState<Tab>('sounds')
  return (
    <div>
      <PageHeader title="Pronunciation lab" sub="Castilian Spanish, sound by sound" back />
      <div className="seg mb-6 overflow-x-auto no-scrollbar">
        {TABS.map(([k, label]) => (
          <button key={k} type="button" aria-pressed={tab === k} onClick={() => setTab(k)} className="whitespace-nowrap">
            {label}
          </button>
        ))}
      </div>
      {tab === 'sounds' && <Sounds />}
      {tab === 'pairs' && <Pairs />}
      {tab === 'stress' && <StressGame />}
      {tab === 'twisters' && <Twisters />}
      {tab === 'speak' && <SpeakPractice />}
    </div>
  )
}

/* ───────────── Sound guide ───────────── */
function Sounds() {
  const tipsDe = useStore((s) => s.settings.tipsDe)
  const tipsAr = useStore((s) => s.settings.tipsAr)
  return (
    <div className="space-y-3">
      <p className="text-ink2 font-bold">Tap any example to hear it. Use the turtle for slow motion.</p>
      {SOUNDS.map((s) => (
        <section key={s.id} className="card p-4">
          <div className="flex items-start gap-3">
            <span lang="es" className="grid place-items-center min-w-14 h-14 px-2 rounded-2xl bg-brand text-brand-ink text-xl font-black flex-none">
              {s.letters.split(',')[0].split(' ')[0]}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span lang="es" className="font-black text-lg">
                  {s.letters}
                </span>
                <span className="text-sm font-bold text-ink3">{s.ipa}</span>
              </div>
              <div className="font-bold text-ink2">{s.like}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {s.examples.map((e) => (
              <button key={e} type="button" lang="es" onClick={() => speak(e)} className="tile text-base py-1.5">
                {e}
              </button>
            ))}
            <SpeakButton text={s.examples.slice(0, 3).join(', ')} slow size="md" />
          </div>
          {s.tip && <div className="mt-3 text-sm font-bold text-ink2">💡 {inline(s.tip)}</div>}
          <div className="mt-3 space-y-2">
            {tipsDe && s.de && <Callout kind="de">{inline(s.de)}</Callout>}
            {tipsAr && s.ar && <Callout kind="ar">{inline(s.ar)}</Callout>}
          </div>
        </section>
      ))}
    </div>
  )
}

/* ───────────── Minimal pairs ───────────── */
function Pairs() {
  const [set, setSet] = useState<PairSet | null>(null)
  if (!set)
    return (
      <div className="space-y-3">
        <p className="text-ink2 font-bold">You’ll hear one word of a pair. Can you tell which one? Training your ear is the first step to a good accent.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {PAIR_SETS.map((p) => (
            <button key={p.id} type="button" onClick={() => setSet(p)} className="card card-press p-4 text-left">
              <div className="font-black text-lg" lang="es">
                {p.title}
              </div>
              <div className="text-sm font-bold text-ink2">{p.focus}</div>
              <div className="text-xs font-bold text-ink3 mt-1" lang="es">
                {p.pairs
                  .slice(0, 3)
                  .map((x) => `${x[0]} / ${x[2]}`)
                  .join(' · ')}
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  return <PairGame set={set} onExit={() => setSet(null)} />
}

function PairGame({ set, onExit }: { set: PairSet; onExit: () => void }) {
  const rounds = useMemo(() => Array.from({ length: 10 }, () => ({ pair: pick(set.pairs), side: Math.random() < 0.5 ? 0 : 1 })), [set])
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const addXP = useStore((s) => s.addXP)
  const r = rounds[i]
  const target = r ? (r.side === 0 ? r.pair[0] : r.pair[2]) : ''

  useEffect(() => {
    if (!target) return
    const t = setTimeout(() => speak(target), 300)
    return () => clearTimeout(t)
  }, [i, target])

  if (!r)
    return (
      <div className="card p-6 text-center">
        <Mascot mood={score >= 8 ? 'cool' : 'happy'} size={96} className="mx-auto" />
        <div className="text-2xl font-black mt-2">
          {score} / {rounds.length}
        </div>
        <p className="font-bold text-ink2">{score >= 8 ? '¡Qué oído! Great ear.' : 'Keep training your ear — it gets easier.'}</p>
        <div className="grid gap-2 mt-5">
          <button type="button" className="btn btn-primary" onClick={onExit}>
            Done
          </button>
        </div>
      </div>
    )

  const choose = (side: number) => {
    if (picked !== null) return
    setPicked(side)
    const ok = side === r.side
    if (ok) {
      sfx.correct()
      setScore((s) => s + 1)
    } else sfx.wrong()
  }
  const next = () => {
    setPicked(null)
    if (i + 1 >= rounds.length) {
      const res = addXP(Math.min(15, score + 3))
      announce(res)
    }
    setI(i + 1)
  }

  return (
    <div className="card p-5">
      <div className="flex items-center gap-3 mb-5">
        <button type="button" onClick={onExit} className="btn-ghost rounded-xl p-1.5 text-ink3" aria-label="Back to sets">
          <X className="w-5 h-5" />
        </button>
        <ProgressBar value={i / rounds.length} className="flex-1" color="var(--info)" />
        <span className="font-black text-sm text-ink2">{score}</span>
      </div>
      <div className="text-center">
        <div className="text-sm font-black uppercase tracking-wider text-ink3">{set.title}</div>
        <div className="flex justify-center gap-4 my-6">
          <SpeakButton text={target} size="xl" variant="info" label="Play the word" />
          <SpeakButton text={target} slow size="lg" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[0, 1].map((side) => {
          const word = r.pair[side * 2]
          const meaning = r.pair[side * 2 + 1]
          const state = picked === null ? undefined : side === r.side ? 'correct' : side === picked ? 'wrong' : 'dim'
          return (
            <button key={side} type="button" className="option flex-col items-center text-center" data-state={state} onClick={() => choose(side)} disabled={picked !== null}>
              <span lang="es" className="text-2xl font-black">
                {word}
              </span>
              <span className="text-sm font-bold opacity-75">{meaning}</span>
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <div className="mt-5 flex flex-col gap-3 anim-rise">
          <div className="flex justify-center gap-2">
            <button type="button" className="tile" onClick={() => speak(r.pair[0])} lang="es">
              <Play className="w-4 h-4 mr-1" /> {r.pair[0]}
            </button>
            <button type="button" className="tile" onClick={() => speak(r.pair[2])} lang="es">
              <Play className="w-4 h-4 mr-1" /> {r.pair[2]}
            </button>
          </div>
          <button type="button" className={cx('btn', picked === r.side ? 'btn-ok' : 'btn-bad')} onClick={next}>
            Continue
          </button>
        </div>
      )}
    </div>
  )
}

/* ───────────── Stress game ───────────── */
function stressRule(word: string): string {
  if (/[áéíóú]/i.test(word)) return 'Written accent → that syllable is stressed.'
  if (syllabify(word).length === 1) return 'Only one syllable.'
  return 'aeiouns'.includes(word.slice(-1).toLowerCase()) ? 'Ends in a vowel, n or s → stress the second-to-last syllable.' : 'Ends in another consonant → stress the last syllable.'
}

function StressGame() {
  const progress = useStore((s) => s.progress)
  const addXP = useStore((s) => s.addXP)
  const words = useMemo(() => {
    const learned = LESSONS.filter((l) => progress[l.id]?.done)
      .flatMap((l) => l.words.map((w) => w.es.replace(/^(el|la|los|las)\s+/i, '')))
      .filter((w) => /^[a-záéíóúñü]+$/i.test(w) && syllabify(w).length >= 2)
    return sample([...STRESS_WORDS, ...learned], 10)
  }, [progress])
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(0)
  const word = words[i]

  if (!word)
    return (
      <div className="card p-6 text-center">
        <Mascot mood="cool" size={96} className="mx-auto" />
        <div className="text-2xl font-black mt-2">
          {score} / {words.length}
        </div>
        <p className="font-bold text-ink2">Three rules, every word. You’re getting it!</p>
        <button
          type="button"
          className="btn btn-primary mt-5"
          onClick={() => {
            setI(0)
            setScore(0)
            setRound(round + 1)
          }}
        >
          <RotateCcw className="w-5 h-5" /> Play again
        </button>
      </div>
    )

  const syl = syllabify(word)
  const st = stressIndex(word)
  const choose = (k: number) => {
    if (picked !== null) return
    setPicked(k)
    if (k === st) {
      sfx.correct()
      setScore((s) => s + 1)
    } else sfx.wrong()
    speak(word)
  }
  const next = () => {
    setPicked(null)
    if (i + 1 >= words.length) announce(addXP(Math.min(15, score + 3)))
    setI(i + 1)
  }
  return (
    <div className="card p-5" key={round}>
      <div className="flex items-center gap-3 mb-5">
        <ProgressBar value={i / words.length} className="flex-1" color="var(--info)" />
        <span className="font-black text-sm text-ink2">{score}</span>
      </div>
      <p className="text-center font-bold text-ink2">Which syllable is stressed?</p>
      <div className="text-center text-4xl font-black my-4" lang="es">
        {word}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {syl.map((s, k) => {
          const state = picked === null ? undefined : k === st ? 'correct' : k === picked ? 'wrong' : 'dim'
          return (
            <button key={k} type="button" className="option w-auto justify-center text-2xl px-5" data-state={state} disabled={picked !== null} onClick={() => choose(k)} lang="es">
              {s}
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <div className="mt-5 space-y-3 anim-rise">
          <div className="rounded-2xl bg-bg2 p-3 text-center font-bold">{stressRule(word)}</div>
          <button type="button" className={cx('btn w-full', picked === st ? 'btn-ok' : 'btn-bad')} onClick={next}>
            Continue
          </button>
        </div>
      )}
    </div>
  )
}

/* ───────────── Tongue twisters ───────────── */
function Twisters() {
  return (
    <div className="space-y-3">
      <p className="text-ink2 font-bold">Listen, then record yourself and compare. Start slowly — speed comes later.</p>
      {TWISTERS.map((t) => (
        <TwisterCard key={t.es} es={t.es} en={t.en} focus={t.focus} />
      ))}
    </div>
  )
}

function TwisterCard({ es, en, focus }: { es: string; en: string; focus: string }) {
  const rec = useRecorder(15)
  return (
    <section className="card p-4">
      <span className="chip bg-info-soft text-info-ink mb-2" lang="es">
        {focus}
      </span>
      <div className="text-xl font-black leading-snug">
        <Es text={es} />
      </div>
      <div className="text-sm font-bold text-ink2 mt-1">{en}</div>
      <Recorder es={es} rec={rec} />
    </section>
  )
}

function Recorder({ es, rec }: { es: string; rec: ReturnType<typeof useRecorder> }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-3">
      <SpeakButton text={es} size="md" variant="info" />
      <SpeakButton text={es} slow size="md" />
      {rec.state === 'recording' ? (
        <button type="button" className="btn btn-bad btn-sm" onClick={rec.stop}>
          <Square className="w-4 h-4 fill-white" /> Stop
        </button>
      ) : (
        <button type="button" className="btn btn-secondary btn-sm" onClick={rec.start}>
          <Circle className="w-4 h-4 fill-bad text-bad" /> Record me
        </button>
      )}
      {rec.url && rec.state !== 'recording' && (
        <button type="button" className="btn btn-secondary btn-sm" onClick={rec.play}>
          <Play className="w-4 h-4" /> My voice
        </button>
      )}
      {rec.state === 'denied' && <span className="text-xs font-bold text-bad">Microphone blocked — allow it in your browser settings.</span>}
      {rec.state === 'unsupported' && <span className="text-xs font-bold text-bad">Recording isn’t supported in this browser.</span>}
    </div>
  )
}

/* ───────────── Speaking practice ───────────── */
function SpeakPractice() {
  const progress = useStore((s) => s.progress)
  const bumpStats = useStore((s) => s.bumpStats)
  const addXP = useStore((s) => s.addXP)
  const phrases = useMemo(() => {
    const done = LESSONS.filter((l) => progress[l.id]?.done)
    const src = done.length ? done : LESSONS.slice(0, 3)
    return shuffle(src.flatMap((l) => l.phrases).filter((p) => wordsOf(p.es).length <= 9))
  }, [progress])
  const [i, setI] = useState(0)
  const [score, setScore] = useState<SpeechScore | null>(null)
  const [listening, setListening] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const stopRef = useRef<() => void>(() => {})
  const rec = useRecorder(12)
  const p = phrases[i % Math.max(1, phrases.length)]
  if (!p) return <p className="font-bold text-ink2">Finish a lesson to unlock speaking practice.</p>

  const go = () => {
    if (listening) {
      stopRef.current()
      return
    }
    setError(null)
    setListening(true)
    stopRef.current = listen({
      onResult: (alts) => {
        const sc = scoreSpeech(p.es, alts)
        setScore(sc)
        bumpStats({ spoken: 1 })
        if (sc.score >= SPEECH_PASS) {
          sfx.correct()
          announce(addXP(2))
        } else sfx.wrong()
      },
      onError: (c) => c !== 'aborted' && setError(recognitionErrorText(c)),
      onEnd: () => setListening(false),
    })
  }
  const words = p.es.split(/\s+/)
  return (
    <div className="space-y-4">
      <div className="card p-5">
        <div className="text-xs font-black uppercase tracking-wider text-ink3 mb-2">Say this</div>
        <div className="text-2xl font-black leading-snug">
          {score ? (
            <span lang="es">
              {words.map((w, k) => (
                <span key={k} className={score.matched[k] ? 'text-ok' : 'text-bad'}>
                  {w}{' '}
                </span>
              ))}
            </span>
          ) : (
            <Es text={p.es} />
          )}
        </div>
        <div className="font-bold text-ink2 mt-1">{p.en}</div>
        <Recorder es={p.es} rec={rec} />
      </div>
      {recognitionSupported ? (
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={go}
            className={cx('grid place-items-center w-24 h-24 rounded-full text-white transition', listening ? 'bg-bad anim-pulse-ring' : 'bg-info shadow-[0_5px_0_var(--info-lip)] active:translate-y-1 active:shadow-none')}
            aria-label={listening ? 'Stop' : 'Speak'}
          >
            {listening ? <Square className="w-9 h-9 fill-white" /> : <Mic className="w-10 h-10" />}
          </button>
          {score && (
            <div className={cx('chip text-base py-1.5 px-4', score.score >= SPEECH_PASS ? 'bg-ok-soft text-ok-ink' : 'bg-bad-soft text-bad-ink')}>
              {score.score >= SPEECH_PASS ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />} {Math.round(score.score * 100)}% · heard “{score.heard}”
            </div>
          )}
          {error && <div className="text-sm font-bold text-bad text-center">{error}</div>}
        </div>
      ) : (
        <p className="text-sm font-bold text-ink2 text-center">Automatic scoring needs Chrome, Edge or Safari — but you can record yourself and compare with the model above.</p>
      )}
      <button
        type="button"
        className="btn btn-secondary w-full"
        onClick={() => {
          setI(i + 1)
          setScore(null)
          setError(null)
        }}
      >
        Next phrase
      </button>
    </div>
  )
}
