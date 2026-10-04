import { useEffect, useRef, useState } from 'react'
import { Check, X } from 'lucide-react'
import { PageHeader, AccentKeys } from '../components/Bits'
import { SpeakButton } from '../components/SpeakButton'
import { ProgressBar } from '../components/Progress'
import { Es } from '../components/Es'
import { numberToSpanish, compareAnswer } from '../lib/spanish'
import { speak } from '../lib/speech'
import { sfx } from '../lib/sound'
import { announce } from '../lib/celebrate'
import { cx } from '../lib/util'
import { useStore } from '../store/store'

type Range = 'small' | 'hundred' | 'thousand' | 'big' | 'year' | 'price'
const RANGES: { id: Range; label: string; gen: () => number }[] = [
  { id: 'small', label: '0–20', gen: () => rnd(0, 20) },
  { id: 'hundred', label: '21–100', gen: () => rnd(21, 100) },
  { id: 'thousand', label: '100–999', gen: () => rnd(100, 999) },
  { id: 'big', label: '1 000+', gen: () => (Math.random() < 0.5 ? rnd(1000, 9999) : rnd(10, 999) * 1000 + (Math.random() < 0.5 ? 0 : rnd(1, 999))) },
  { id: 'year', label: 'Years', gen: () => rnd(1950, 2035) },
  { id: 'price', label: 'Prices €', gen: () => rnd(100, 9999) },
]
function rnd(a: number, b: number) {
  return a + Math.floor(Math.random() * (b - a + 1))
}

/** Spoken form + accepted digit answer. Prices are cents: 350 → "tres euros con cincuenta". */
function render(range: Range, n: number): { say: string; digits: string; show: string } {
  if (range === 'price') {
    const e = Math.floor(n / 100)
    const c = n % 100
    const euros = e === 1 ? 'un euro' : `${numberToSpanish(e).replace(/veintiuno$/, 'veintiún').replace(/uno$/, 'un')} euros`
    const say = c ? `${euros} con ${numberToSpanish(c)}` : euros
    const show = `${e},${String(c).padStart(2, '0')} €`
    return { say, digits: `${e},${String(c).padStart(2, '0')}`, show }
  }
  return { say: numberToSpanish(n), digits: String(n), show: n.toLocaleString('es-ES') }
}

export default function Numbers() {
  const [range, setRange] = useState<Range>('small')
  const [mode, setMode] = useState<'listen' | 'write'>('listen')
  const [round, setRound] = useState(0)
  const [n, setN] = useState(() => RANGES[0].gen())
  const [value, setValue] = useState('')
  const [state, setState] = useState<'idle' | 'ok' | 'bad'>('idle')
  const [score, setScore] = useState(0)
  const ref = useRef<HTMLInputElement>(null)
  const addXP = useStore((s) => s.addXP)
  const r = render(range, n)
  const ROUNDS = 10

  useEffect(() => {
    if (mode === 'listen' && round < ROUNDS) {
      const t = setTimeout(() => speak(r.say), 250)
      return () => clearTimeout(t)
    }
  }, [n, mode]) // eslint-disable-line react-hooks/exhaustive-deps

  const restart = (rg = range, md = mode) => {
    setRange(rg)
    setMode(md)
    setRound(0)
    setScore(0)
    setValue('')
    setState('idle')
    setN(RANGES.find((x) => x.id === rg)!.gen())
  }

  const check = () => {
    if (state !== 'idle') {
      next()
      return
    }
    if (!value.trim()) return
    let ok: boolean
    if (mode === 'listen') {
      const clean = (s: string) => s.replace(/[\s.€]/g, '').replace(/,$/, '')
      ok = clean(value) === clean(r.digits) || clean(value) === clean(r.digits).replace(/,00$/, '')
    } else ok = compareAnswer(value, r.say) !== 'wrong'
    setState(ok ? 'ok' : 'bad')
    if (ok) {
      sfx.correct()
      setScore((s) => s + 1)
    } else sfx.wrong()
    if (mode === 'write') speak(r.say)
  }
  const next = () => {
    if (round + 1 >= ROUNDS) {
      announce(addXP(Math.min(15, score + 3)))
      setRound(ROUNDS)
      return
    }
    setRound(round + 1)
    setValue('')
    setState('idle')
    setN(RANGES.find((x) => x.id === range)!.gen())
    setTimeout(() => ref.current?.focus(), 50)
  }

  return (
    <div>
      <PageHeader title="Numbers trainer" sub="Prices, years and phone numbers — numbers are everywhere" back />
      <div className="seg mb-3">
        <button type="button" aria-pressed={mode === 'listen'} onClick={() => restart(range, 'listen')}>
          👂 Listen → digits
        </button>
        <button type="button" aria-pressed={mode === 'write'} onClick={() => restart(range, 'write')}>
          ✍️ Digits → words
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {RANGES.map((x) => (
          <button key={x.id} type="button" onClick={() => restart(x.id)} className={cx('chip border-2 py-1.5 px-3', range === x.id ? 'bg-brand text-brand-ink border-brand' : 'bg-card text-ink2 border-line')}>
            {x.label}
          </button>
        ))}
      </div>

      {round >= ROUNDS ? (
        <div className="card p-6 text-center">
          <div className="text-4xl font-black">
            {score} / {ROUNDS}
          </div>
          <p className="font-bold text-ink2 mt-1">{score >= 8 ? '¡Excelente!' : 'Keep practising — numbers get automatic with repetition.'}</p>
          <button type="button" className="btn btn-primary mt-5" onClick={() => restart()}>
            Play again
          </button>
        </div>
      ) : (
        <div className="card p-5">
          <ProgressBar value={round / ROUNDS} color="var(--brand)" className="mb-6" />
          {mode === 'listen' ? (
            <div className="flex justify-center gap-4 mb-6">
              <SpeakButton text={r.say} size="xl" variant="info" label="Play the number" />
              <SpeakButton text={r.say} slow size="lg" />
            </div>
          ) : (
            <div className="text-center text-5xl font-black mb-6">{r.show}</div>
          )}
          <input
            ref={ref}
            autoFocus
            lang="es"
            inputMode={mode === 'listen' ? 'decimal' : 'text'}
            className={cx('input text-center text-2xl', state === 'ok' && 'border-ok!', state === 'bad' && 'border-bad!')}
            placeholder={mode === 'listen' ? (range === 'price' ? 'e.g. 3,50' : 'Type the number') : 'Write it in Spanish words'}
            value={value}
            disabled={state !== 'idle'}
            autoComplete="off"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && check()}
          />
          {mode === 'write' && (
            <div className="mt-3 flex justify-center">
              <AccentKeys inputRef={ref} value={value} onChange={setValue} />
            </div>
          )}
          {state !== 'idle' && (
            <div className={cx('mt-5 rounded-2xl p-4 flex items-center gap-3 anim-pop', state === 'ok' ? 'bg-ok-soft text-ok-ink' : 'bg-bad-soft text-bad-ink')}>
              {state === 'ok' ? <Check className="w-7 h-7 flex-none" strokeWidth={3} /> : <X className="w-7 h-7 flex-none" strokeWidth={3} />}
              <div>
                <div className="font-black text-xl">{r.show}</div>
                <div className="font-bold">
                  <Es text={r.say} />
                </div>
              </div>
            </div>
          )}
          <button type="button" className={cx('btn w-full mt-5', state === 'idle' ? 'btn-primary' : state === 'ok' ? 'btn-ok' : 'btn-bad')} disabled={state === 'idle' && !value.trim()} onClick={check}>
            {state === 'idle' ? 'Check' : 'Continue'}
          </button>
        </div>
      )}
    </div>
  )
}
