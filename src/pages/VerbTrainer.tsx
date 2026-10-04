import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { Check, X } from 'lucide-react'
import { VERBS, verbInfo } from '../content/verbs'
import { conjugate, PERSONS, IMP_PERSONS, TENSES, TENSE_BY_ID, type TenseId } from '../lib/conjugate'
import { bestVerdict } from '../lib/spanish'
import { speak } from '../lib/speech'
import { sfx } from '../lib/sound'
import { announce } from '../lib/celebrate'
import { pick, cx, shuffle } from '../lib/util'
import { useStore, planInfo } from '../store/store'
import { FocusHeader, Results } from '../components/Results'
import { ProgressBar } from '../components/Progress'
import { AccentKeys } from '../components/Bits'
import { SpeakButton } from '../components/SpeakButton'
import { useClose } from './LessonPage'

type VerbSet = 'top' | 'level' | 'irregular' | 'all' | 'one'
const TOP = ['ser', 'estar', 'tener', 'haber', 'hacer', 'ir', 'venir', 'poder', 'querer', 'decir', 'ver', 'dar', 'saber', 'conocer', 'hablar', 'vivir', 'comer', 'trabajar', 'salir', 'poner', 'llegar', 'pensar', 'volver', 'pedir', 'dormir', 'jugar', 'empezar', 'seguir', 'traer', 'oír', 'leer', 'escribir', 'llamarse', 'levantarse', 'gustar', 'necesitar', 'encontrar', 'sentir', 'conducir', 'creer']
const IRR = new Set(['ser', 'estar', 'ir', 'haber', 'tener', 'venir', 'poner', 'salir', 'hacer', 'decir', 'traer', 'caer', 'oír', 'ver', 'dar', 'saber', 'caber', 'poder', 'querer', 'andar', 'valer', 'conducir', 'traducir', 'pedir', 'dormir', 'sentir', 'jugar', 'seguir', 'morir', 'volver', 'reír', 'construir', 'leer'])

interface Q {
  inf: string
  tense: TenseId
  p: number
  answer: string
}

/** Tenses unlocked by plan progress. */
function unlockedTenses(week: number): TenseId[] {
  const out: TenseId[] = ['pres']
  if (week >= 11) out.push('perf')
  if (week >= 12) out.push('pret')
  if (week >= 13) out.push('impf')
  if (week >= 15) out.push('imp')
  if (week >= 16) out.push('fut')
  if (week >= 17) out.push('cond')
  if (week >= 18) out.push('subj')
  if (week >= 19) out.push('impneg')
  if (week >= 21) out.push('plus')
  if (week >= 22) out.push('impsubj')
  if (week >= 26) out.push('subjp', 'futp')
  return out
}

export default function VerbTrainer() {
  const [params] = useSearchParams()
  const oneVerb = params.get('verb')
  const progress = useStore((s) => s.progress)
  const startDate = useStore((s) => s.startDate)
  const week = planInfo(progress, startDate).next?.week ?? 26
  const close = useClose('/practice')
  const [tenses, setTenses] = useState<TenseId[]>(() => (oneVerb ? TENSES.filter((t) => t.level !== 'B2').map((t) => t.id) : unlockedTenses(week)))
  const [set, setSet] = useState<VerbSet>(oneVerb ? 'one' : 'top')
  const [count, setCount] = useState(10)
  const [questions, setQuestions] = useState<Q[] | null>(null)

  const pool = useMemo(() => {
    const lvl = week <= 9 ? ['A1'] : week <= 17 ? ['A1', 'A2'] : ['A1', 'A2', 'B1']
    switch (set) {
      case 'one':
        return oneVerb ? [oneVerb] : TOP
      case 'top':
        return TOP
      case 'level':
        return VERBS.filter((v) => lvl.includes(v.level)).map((v) => v.inf)
      case 'irregular':
        return [...IRR]
      default:
        return VERBS.map((v) => v.inf)
    }
  }, [set, oneVerb, week])

  const start = () => {
    const qs: Q[] = []
    let guard = 0
    while (qs.length < count && guard++ < 500) {
      const inf = pick(pool)
      const tense = pick(tenses)
      const c = conjugate(inf)
      const isImp = tense === 'imp' || tense === 'impneg'
      const p = isImp ? 1 + Math.floor(Math.random() * 5) : Math.floor(Math.random() * 6)
      const answer = c.forms[tense][p]
      if (!answer || qs.some((q) => q.inf === inf && q.tense === tense && q.p === p)) continue
      qs.push({ inf, tense, p, answer })
    }
    setQuestions(shuffle(qs))
  }

  if (questions) return <Drill questions={questions} onExit={() => setQuestions(null)} onAgain={start} />

  return (
    <div className="min-h-dvh bg-bg">
      <FocusHeader title="Verb trainer" sub="Type the right form" onClose={close} />
      <main className="max-w-xl mx-auto px-4 pt-6 pb-16 space-y-6">
        <section>
          <h2 className="font-black mb-2">Tenses</h2>
          <div className="flex flex-wrap gap-2">
            {TENSES.map((t) => {
              const on = tenses.includes(t.id)
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTenses(on ? tenses.filter((x) => x !== t.id) : [...tenses, t.id])}
                  className={cx('chip border-2 py-1.5 px-3 text-sm', on ? 'bg-vio text-white border-vio' : 'bg-card text-ink2 border-line')}
                >
                  <span lang="es">{t.es}</span>
                  <span className="opacity-70">{t.level}</span>
                </button>
              )
            })}
          </div>
          <p className="text-xs font-bold text-ink3 mt-2">Pre-selected: the tenses you’ve reached in your plan (week {week}).</p>
        </section>
        <section>
          <h2 className="font-black mb-2">Verbs</h2>
          <div className="seg flex-wrap">
            {(
              [
                ...(oneVerb ? ([['one', oneVerb]] as const) : []),
                ['top', 'Top 40'],
                ['level', 'My level'],
                ['irregular', 'Irregular'],
                ['all', 'All'],
              ] as [VerbSet, string][]
            ).map(([k, label]) => (
              <button key={k} type="button" aria-pressed={set === k} onClick={() => setSet(k)}>
                {label}
              </button>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-black mb-2">Questions</h2>
          <div className="seg">
            {[10, 20, 30].map((n) => (
              <button key={n} type="button" aria-pressed={count === n} onClick={() => setCount(n)}>
                {n}
              </button>
            ))}
          </div>
        </section>
        <button type="button" className="btn btn-primary w-full" disabled={!tenses.length} onClick={start}>
          Start
        </button>
      </main>
    </div>
  )
}

function Drill({ questions, onExit, onAgain }: { questions: Q[]; onExit: () => void; onAgain: () => void }) {
  const navigate = useNavigate()
  const addXP = useStore((s) => s.addXP)
  const bumpStats = useStore((s) => s.bumpStats)
  const [i, setI] = useState(0)
  const [value, setValue] = useState('')
  const [state, setState] = useState<'idle' | 'ok' | 'bad'>('idle')
  const [note, setNote] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState<{ xp: number; seconds: number } | null>(null)
  const ref = useRef<HTMLInputElement>(null)
  const startT = useRef(Date.now())
  const nextRef = useRef<() => void>(() => {})
  const q = questions[i]

  // after checking, the input is disabled — let Enter continue
  useEffect(() => {
    if (state === 'idle' || done) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        nextRef.current()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [state, done])

  if (done) {
    return (
      <Results
        title="Verbs trained!"
        sub={`${score} of ${questions.length} correct`}
        xp={done.xp}
        accuracy={score / questions.length}
        seconds={done.seconds}
        actions={
          <>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setDone(null)
                onAgain()
              }}
            >
              New round
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/practice', { replace: true })}>
              Back to practice
            </button>
          </>
        }
      />
    )
  }

  const t = TENSE_BY_ID[q.tense]
  const isImp = q.tense === 'imp' || q.tense === 'impneg'
  const person = isImp ? IMP_PERSONS[q.p] : PERSONS[q.p]
  const accept = [q.answer, q.answer.replace(/^(me|te|se|nos|os) /, ''), q.answer.replace(/^no /, '')]

  const check = () => {
    if (state !== 'idle') {
      next()
      return
    }
    if (!value.trim()) return
    const { verdict } = bestVerdict(value, [q.answer])
    const loose = bestVerdict(value, accept).verdict
    const ok = verdict !== 'wrong' || loose === 'exact'
    setState(ok ? 'ok' : 'bad')
    setNote(ok && verdict === 'accent' ? 'Watch the accents!' : null)
    if (ok) {
      sfx.correct()
      setScore((s) => s + 1)
    } else sfx.wrong()
    bumpStats({ exercises: 1, correct: ok ? 1 : 0 })
    speak(q.answer)
  }
  const next = () => {
    if (i + 1 >= questions.length) {
      const res = addXP(Math.min(30, score + 2))
      const seconds = Math.round((Date.now() - startT.current) / 1000)
      bumpStats({ seconds })
      announce(res)
      setDone({ xp: res.gained, seconds })
      return
    }
    setI(i + 1)
    setValue('')
    setState('idle')
    setNote(null)
    setTimeout(() => ref.current?.focus(), 50)
  }
  nextRef.current = next

  return (
    <div className="min-h-dvh bg-bg flex flex-col">
      <FocusHeader title="Verb trainer" sub={`${i + 1} / ${questions.length}`} onClose={onExit} />
      <div className="max-w-xl w-full mx-auto px-4 pt-4">
        <ProgressBar value={i / questions.length} color="var(--vio)" />
      </div>
      <main className="flex-1 max-w-xl w-full mx-auto px-4 py-8">
        <div className="card p-5 text-center">
          <div className="flex items-center justify-center gap-2">
            <SpeakButton text={q.inf} size="sm" />
            <span lang="es" className="text-3xl font-black">
              {q.inf}
            </span>
          </div>
          <div className="text-ink2 font-bold">{verbInfo(q.inf)?.en}</div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="chip bg-vio-soft text-vio text-sm" lang="es">
              {t.es}
            </span>
            <span className="chip bg-brand-soft text-brand-soft-ink text-sm" lang="es">
              {person}
            </span>
          </div>
          <div className="text-xs font-bold text-ink3 mt-2">{t.en}</div>
        </div>
        <input
          ref={ref}
          autoFocus
          lang="es"
          className={cx('input mt-6 text-xl text-center', state === 'ok' && 'border-ok!', state === 'bad' && 'border-bad!')}
          placeholder={isImp ? 'command…' : `${person.split(' ')[0]} …`}
          value={value}
          disabled={state !== 'idle'}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && check()}
        />
        <div className="mt-3 flex justify-center">
          <AccentKeys inputRef={ref} value={value} onChange={setValue} />
        </div>
        {state !== 'idle' && (
          <div className={cx('mt-6 rounded-2xl p-4 flex items-center gap-3 anim-pop', state === 'ok' ? 'bg-ok-soft text-ok-ink' : 'bg-bad-soft text-bad-ink')}>
            {state === 'ok' ? <Check className="w-7 h-7" strokeWidth={3} /> : <X className="w-7 h-7" strokeWidth={3} />}
            <div>
              <div className="font-black text-lg" lang="es">
                {q.answer}
              </div>
              {note && <div className="text-sm font-bold">{note}</div>}
            </div>
          </div>
        )}
      </main>
      <footer className="sticky bottom-0 bg-bg border-t-2 border-line safe-bottom">
        <div className="max-w-xl mx-auto px-4 py-3">
          <button type="button" className={cx('btn w-full', state === 'idle' ? 'btn-primary' : state === 'ok' ? 'btn-ok' : 'btn-bad')} disabled={state === 'idle' && !value.trim()} onClick={check}>
            {state === 'idle' ? 'Check' : 'Continue'}
          </button>
        </div>
      </footer>
    </div>
  )
}
