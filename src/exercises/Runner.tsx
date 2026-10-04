import { useCallback, useEffect, useRef, useState } from 'react'
import { Check, Flame, X } from 'lucide-react'
import type { Exercise, Item } from './generate'
import { itemOf } from './generate'
import { evaluate, isReady, type Evaluation } from './evaluate'
import { BuildView, FillView, ListenView, MCView, MatchView, SpeakView, TypeView, pauseSpeaking } from './views'
import { ProgressBar } from '../components/Progress'
import { Es } from '../components/Es'
import { SpeakButton } from '../components/SpeakButton'
import { Sheet } from '../components/Sheet'
import { Mascot } from '../components/Mascot'
import { speak, stopSpeaking } from '../lib/speech'
import { sfx } from '../lib/sound'
import { cx, pick, vibrate } from '../lib/util'
import { useStore } from '../store/store'

export interface RunResult {
  correct: number
  total: number
  accuracy: number
  seconds: number
  wrong: Item[]
}

interface Props {
  exercises: Exercise[]
  onExit: () => void
  onFinish: (r: RunResult) => void
  /** called after each first attempt (used to grade flashcards) */
  onAnswer?: (ex: Exercise, ok: boolean) => void
  retryWrong?: boolean
}

const PRAISE = ['¡Muy bien!', '¡Genial!', '¡Perfecto!', '¡Excelente!', '¡Eso es!', '¡Fenomenal!', '¡Bravo!', '¡Estupendo!']
const SOFT = ['Casi…', '¡Ánimo!', 'No pasa nada.', '¡Vamos!']

export function Runner({ exercises, onExit, onFinish, onAnswer, retryWrong = true }: Props) {
  const [queue, setQueue] = useState<Exercise[]>(exercises)
  const [idx, setIdx] = useState(0)
  const [value, setValue] = useState<unknown>(null)
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle')
  const [evalRes, setEvalRes] = useState<Evaluation | null>(null)
  const [combo, setCombo] = useState(0)
  const [quitOpen, setQuitOpen] = useState(false)
  const [shaking, setShaking] = useState(false)
  const [praise, setPraise] = useState(PRAISE[0])
  const settings = useStore((s) => s.settings)
  const bumpStats = useStore((s) => s.bumpStats)
  const recordMistake = useStore((s) => s.recordMistake)
  const acc = useRef({ firstCorrect: 0, firstTotal: exercises.length, retried: new Set<string>(), wrong: [] as Item[], start: Date.now() })

  const ex = queue[idx]
  const ready = ex ? isReady(ex, value) : false

  useEffect(() => () => stopSpeaking(), [])

  const finish = useCallback(() => {
    const a = acc.current
    const accuracy = a.firstTotal ? a.firstCorrect / a.firstTotal : 1
    onFinish({ correct: a.firstCorrect, total: a.firstTotal, accuracy, seconds: Math.round((Date.now() - a.start) / 1000), wrong: a.wrong })
  }, [onFinish])

  const resolve = useCallback(
    (ok: boolean, res: Evaluation) => {
      const a = acc.current
      const isRetry = a.retried.has(ex.id)
      setEvalRes(res)
      setStatus(ok ? 'correct' : 'wrong')
      setPraise(ok ? pick(PRAISE) : pick(SOFT))
      if (ok) {
        sfx.correct()
        setCombo((c) => c + 1)
      } else {
        sfx.wrong()
        vibrate([40, 40, 60])
        setShaking(true)
        setTimeout(() => setShaking(false), 420)
        setCombo(0)
      }
      if (!isRetry) {
        if (ok) a.firstCorrect++
        bumpStats({ exercises: 1, correct: ok ? 1 : 0 })
        onAnswer?.(ex, ok)
      }
      if (!ok) {
        const item = itemOf(ex)
        if (item && item.en) {
          recordMistake(item.es, item.en)
          if (!isRetry) a.wrong.push(item)
        }
        if (retryWrong && !isRetry && ex.kind !== 'speak') {
          const copy = { ...ex, id: `${ex.id}-r` } as Exercise
          a.retried.add(copy.id)
          setQueue((q) => [...q, copy])
        }
      }
      if (settings.autoplay && res.say) setTimeout(() => speak(res.say!), ok ? 120 : 300)
    },
    [ex, bumpStats, onAnswer, recordMistake, retryWrong, settings.autoplay],
  )

  const check = useCallback(() => {
    if (!ex || status !== 'idle' || !ready) return
    const res = evaluate(ex, value)
    resolve(res.ok, res)
  }, [ex, status, ready, value, resolve])

  const next = useCallback(() => {
    stopSpeaking()
    if (idx + 1 >= queue.length) {
      finish()
      return
    }
    setIdx((i) => i + 1)
    setValue(null)
    setStatus('idle')
    setEvalRes(null)
  }, [idx, queue.length, finish])

  const skipSpeaking = () => {
    pauseSpeaking(15)
    acc.current.firstTotal = Math.max(0, acc.current.firstTotal - 1)
    if (idx + 1 >= queue.length) finish()
    else {
      setIdx((i) => i + 1)
      setValue(null)
      setStatus('idle')
    }
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || quitOpen) return
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      // handle Enter ourselves so a focused button doesn't also fire its click
      e.preventDefault()
      if (status === 'idle') check()
      else next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [status, check, next, quitOpen])

  if (!ex) return null
  const progress = (idx + (status !== 'idle' ? 1 : 0)) / queue.length
  const viewProps = { ex, value: value as never, setValue: setValue as never, status, onEnter: () => (status === 'idle' ? check() : next()) }

  return (
    <div className="min-h-dvh flex flex-col bg-bg">
      <header className="sticky top-0 z-20 bg-bg/95 backdrop-blur safe-top">
        <div className="max-w-2xl mx-auto w-full flex items-center gap-3 px-4 py-3">
          <button type="button" onClick={() => (idx > 0 || status !== 'idle' ? setQuitOpen(true) : onExit())} className="btn-ghost rounded-xl p-2 text-ink3 hover:text-ink" aria-label="Quit">
            <X className="w-6 h-6" />
          </button>
          <ProgressBar value={progress} className="flex-1" />
          {combo >= 3 ? (
            <span className="chip bg-fire-soft text-fire anim-pop" title="Correct answers in a row">
              <Flame className="w-4 h-4 fill-fire/40" />
              {combo}
            </span>
          ) : (
            <span className="w-10" />
          )}
        </div>
      </header>

      <main key={ex.id} className={cx('flex-1 w-full max-w-2xl mx-auto px-4 pt-4 pb-56 anim-rise', shaking && 'anim-shake')}>
        {ex.kind === 'mc' && <MCView {...viewProps} />}
        {ex.kind === 'listen' && <ListenView {...viewProps} />}
        {ex.kind === 'fill' && <FillView {...viewProps} />}
        {ex.kind === 'build' && <BuildView {...viewProps} />}
        {(ex.kind === 'type' || ex.kind === 'dictation') && <TypeView {...viewProps} />}
        {ex.kind === 'speak' && <SpeakView {...viewProps} />}
        {ex.kind === 'match' && (
          <MatchView
            ex={ex}
            status={status}
            onComplete={(mistakes) => resolve(true, { ok: true, expected: '', expectedEs: false, note: mistakes ? `${mistakes} mismatch${mistakes > 1 ? 'es' : ''}` : 'No mistakes!' })}
          />
        )}
      </main>

      <footer
        className={cx(
          'fixed bottom-0 inset-x-0 z-30 border-t-2 safe-bottom transition-colors',
          status === 'idle' && 'bg-bg border-line',
          status === 'correct' && 'bg-ok-soft border-ok/40',
          status === 'wrong' && 'bg-bad-soft border-bad/40',
        )}
      >
        <div className="max-w-2xl mx-auto px-4 py-4">
          {status === 'idle' ? (
            <div className="flex items-center gap-3">
              {ex.kind === 'speak' && (
                <button type="button" className="btn btn-ghost btn-sm" onClick={skipSpeaking}>
                  Can’t speak now
                </button>
              )}
              {ex.kind !== 'match' && (
                <button type="button" className="btn btn-primary flex-1 sm:flex-none sm:min-w-44 sm:ml-auto" disabled={!ready} onClick={check}>
                  Check
                </button>
              )}
              {ex.kind === 'match' && <div className="text-sm font-bold text-ink3 mx-auto">Match all pairs to continue</div>}
            </div>
          ) : (
            <Feedback status={status} res={evalRes} praise={praise} onNext={next} />
          )}
        </div>
      </footer>

      {quitOpen && (
        <Sheet onClose={() => setQuitOpen(false)} label="Quit?" bare>
          <div className="p-6 text-center space-y-4">
            <Mascot mood="sad" size={88} className="mx-auto" />
            <h2 className="text-xl font-black">Wait, don’t go!</h2>
            <p className="text-ink2 font-bold">If you quit now, you’ll lose the progress of this session.</p>
            <div className="grid gap-3">
              <button type="button" className="btn btn-primary" onClick={() => setQuitOpen(false)}>
                Keep learning
              </button>
              <button type="button" className="btn btn-ghost text-bad" onClick={onExit}>
                Quit session
              </button>
            </div>
          </div>
        </Sheet>
      )}
    </div>
  )
}

function Feedback({ status, res, praise, onNext }: { status: 'correct' | 'wrong'; res: Evaluation | null; praise: string; onNext: () => void }) {
  const ok = status === 'correct'
  return (
    <div className="flex flex-col sm:flex-row sm:items-end gap-4 anim-slide-up">
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <span className={cx('grid place-items-center w-11 h-11 rounded-full flex-none text-white', ok ? 'bg-ok' : 'bg-bad')}>
          {ok ? <Check className="w-7 h-7" strokeWidth={3.2} /> : <X className="w-7 h-7" strokeWidth={3.2} />}
        </span>
        <div className="min-w-0">
          <div className={cx('text-xl font-black', ok ? 'text-ok-ink' : 'text-bad-ink')}>{ok ? <Es text={praise} plain /> : 'Correct answer:'}</div>
          {!ok && res?.expected && (
            <div className="flex items-start gap-2 mt-1">
              {res.expectedEs && <SpeakButton text={res.expected} size="sm" variant="soft" />}
              <div className="font-black text-lg text-bad-ink leading-snug">{res.expectedEs ? <Es text={res.expected} /> : res.expected}</div>
            </div>
          )}
          {ok && res?.expectedEs && res.expected && (
            <div className="flex items-start gap-2 mt-1">
              <SpeakButton text={res.expected} size="sm" variant="soft" />
              <div className="font-bold text-ok-ink leading-snug">
                <Es text={res.expected} />
              </div>
            </div>
          )}
          {res?.translation && <div className={cx('text-sm font-bold mt-0.5', ok ? 'text-ok-ink/80' : 'text-bad-ink/80')}>{res.translation}</div>}
          {res?.note && <div className={cx('text-sm font-black mt-1', ok ? 'text-ok-ink' : 'text-bad-ink')}>{res.note}</div>}
        </div>
      </div>
      <button type="button" autoFocus className={cx('btn sm:min-w-44', ok ? 'btn-ok' : 'btn-bad')} onClick={onNext}>
        Continue
      </button>
    </div>
  )
}
