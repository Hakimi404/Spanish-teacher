import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { Layers, ListChecks, RotateCcw } from 'lucide-react'
import { useStore, dueCards } from '../store/store'
import { previewLabel, type Card, type Grade } from '../lib/srs'
import { FocusHeader, Results } from '../components/Results'
import { ProgressBar } from '../components/Progress'
import { Mascot } from '../components/Mascot'
import { Es } from '../components/Es'
import { SpeakButton } from '../components/SpeakButton'
import { Syllables } from '../components/WordSheet'
import { Runner, type RunResult } from '../exercises/Runner'
import { cardExercises, spoken } from '../exercises/generate'
import { examplesFor } from '../content/dictionary'
import { speak, stopSpeaking } from '../lib/speech'
import { announce } from '../lib/celebrate'
import { sfx } from '../lib/sound'
import { cx, shuffle } from '../lib/util'
import { stripArticle } from '../lib/spanish'
import { useClose } from './LessonPage'

const SESSION = 20

export default function Review() {
  const cards = useStore((s) => s.cards)
  const navigate = useNavigate()
  const close = useClose('/')
  const [mode, setMode] = useState<'cards' | 'quiz' | null>(null)
  const [session, setSession] = useState<Card[]>([])
  const [result, setResult] = useState<{ xp: number; count: number; seconds: number; accuracy?: number } | null>(null)
  const due = dueCards(cards)
  const all = Object.values(cards)

  const start = (m: 'cards' | 'quiz', extra = false) => {
    const list = extra ? shuffle(all).slice(0, 12) : due.slice(0, SESSION)
    setSession(list)
    setMode(m)
  }

  if (result) {
    return (
      <Results
        title="Review done!"
        sub={`${result.count} card${result.count === 1 ? '' : 's'} reviewed. Spaced repetition will bring them back right on time.`}
        xp={result.xp}
        accuracy={result.accuracy}
        seconds={result.seconds}
        actions={
          <>
            {dueCards(useStore.getState().cards).length > 0 && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setResult(null)
                  setMode(null)
                }}
              >
                Review more
              </button>
            )}
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/', { replace: true })}>
              Back to today
            </button>
          </>
        }
      />
    )
  }

  if (mode === 'cards' && session.length) return <Flashcards cards={session} onExit={() => setMode(null)} onDone={setResult} />
  if (mode === 'quiz' && session.length) return <QuizMode cards={session} pool={all} onExit={() => setMode(null)} onDone={setResult} />

  return (
    <div className="min-h-dvh bg-bg">
      <FocusHeader title="Review" sub="Spaced repetition" onClose={close} />
      <main className="max-w-xl mx-auto px-4 pt-8 pb-16 text-center">
        {all.length === 0 ? (
          <>
            <Mascot mood="think" size={120} className="mx-auto" />
            <h1 className="text-2xl font-black mt-4">Nothing to review yet</h1>
            <p className="text-ink2 font-bold mt-1">Finish a lesson — its words land here and come back just before you’d forget them.</p>
            <button type="button" className="btn btn-primary mt-6" onClick={() => navigate('/')}>
              Go to today’s lesson
            </button>
          </>
        ) : (
          <>
            <Mascot mood={due.length ? 'happy' : 'cool'} size={120} className="mx-auto" />
            <h1 className="text-2xl font-black mt-4">{due.length ? `${due.length} word${due.length > 1 ? 's' : ''} to review` : 'All caught up!'}</h1>
            <p className="text-ink2 font-bold mt-1">
              {due.length ? `A session is up to ${SESSION} cards (~${Math.max(2, Math.round(Math.min(due.length, SESSION) * 0.25))} min).` : `Next review: ${nextDueLabel(all)}. You can still practise.`}
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-8 text-left">
              <button type="button" className="card card-press p-4 flex items-center gap-3" onClick={() => start('cards', !due.length)}>
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-vio-soft text-vio flex-none">
                  <Layers className="w-6 h-6" />
                </span>
                <span>
                  <span className="block font-black">Flashcards</span>
                  <span className="block text-sm font-bold text-ink2">Recall, flip, rate yourself</span>
                </span>
              </button>
              <button type="button" className="card card-press p-4 flex items-center gap-3" onClick={() => start('quiz', !due.length)}>
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-ok-soft text-ok flex-none">
                  <ListChecks className="w-6 h-6" />
                </span>
                <span>
                  <span className="block font-black">Quiz mode</span>
                  <span className="block text-sm font-bold text-ink2">Choose, listen and type</span>
                </span>
              </button>
            </div>
            <div className="mt-8 card p-4 text-left">
              <div className="text-xs font-black uppercase tracking-wider text-ink3 mb-2">Your deck</div>
              <DeckStats cards={all} />
            </div>
          </>
        )}
      </main>
    </div>
  )
}

function nextDueLabel(cards: Card[]) {
  const next = Math.min(...cards.map((c) => c.due))
  const h = Math.max(0, Math.round((next - Date.now()) / 3_600_000))
  return h < 1 ? 'in less than an hour' : h < 24 ? `in ${h} h` : `in ${Math.round(h / 24)} day${h >= 48 ? 's' : ''}`
}

function DeckStats({ cards }: { cards: Card[] }) {
  const learning = cards.filter((c) => c.interval < 7).length
  const young = cards.filter((c) => c.interval >= 7 && c.interval < 21).length
  const mature = cards.filter((c) => c.interval >= 21).length
  const total = Math.max(1, cards.length)
  return (
    <div>
      <div className="flex h-4 rounded-full overflow-hidden bg-line">
        <span style={{ width: `${(learning / total) * 100}%`, background: 'var(--fire)' }} />
        <span style={{ width: `${(young / total) * 100}%`, background: 'var(--info)' }} />
        <span style={{ width: `${(mature / total) * 100}%`, background: 'var(--ok)' }} />
      </div>
      <div className="flex justify-between mt-2 text-sm font-bold text-ink2">
        <span>
          <b className="text-fire">{learning}</b> learning
        </span>
        <span>
          <b className="text-info">{young}</b> young
        </span>
        <span>
          <b className="text-ok">{mature}</b> mastered
        </span>
      </div>
    </div>
  )
}

function Flashcards({ cards, onExit, onDone }: { cards: Card[]; onExit: () => void; onDone: (r: { xp: number; count: number; seconds: number }) => void }) {
  const [queue, setQueue] = useState(cards)
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const gradeCard = useStore((s) => s.gradeCard)
  const addXP = useStore((s) => s.addXP)
  const bumpStats = useStore((s) => s.bumpStats)
  const autoplay = useStore((s) => s.settings.autoplay)
  const live = useStore((s) => s.cards)
  const start = useRef(Date.now())
  const relearned = useRef(new Set<string>())
  const reverse = useMemo(() => cards.map((c) => c.reps >= 3 && Math.random() < 0.5), [cards])
  const card = queue[i]
  const rev = reverse[cards.indexOf(card)] ?? false
  const current = live[card?.id] ?? card

  useEffect(() => {
    if (card && !rev && autoplay) {
      const t = setTimeout(() => speak(spoken(card.es)), 200)
      return () => clearTimeout(t)
    }
  }, [card, rev, autoplay])
  useEffect(() => () => stopSpeaking(), [])

  const flip = () => {
    if (flipped) return
    sfx.flip()
    setFlipped(true)
    if (rev && autoplay) speak(spoken(card.es))
  }

  const grade = (g: Grade) => {
    gradeCard(card.id, g)
    let q = queue
    if (g === 0 && !relearned.current.has(card.id)) {
      relearned.current.add(card.id)
      q = [...queue, card]
      setQueue(q)
    }
    if (i + 1 >= q.length) {
      const count = cards.length
      const res = addXP(Math.min(30, count + 2))
      const seconds = Math.round((Date.now() - start.current) / 1000)
      bumpStats({ seconds })
      announce(res)
      onDone({ xp: res.gained, count, seconds })
      return
    }
    setI(i + 1)
    setFlipped(false)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        if (!flipped) flip()
      }
      if (flipped && ['1', '2', '3', '4'].includes(e.key)) grade((Number(e.key) - 1) as Grade)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (!card) return null
  const ex = flipped ? examplesFor(card.es, 1)[0] : undefined
  const grades: { g: Grade; label: string; cls: string }[] = [
    { g: 0, label: 'Again', cls: 'btn-bad' },
    { g: 1, label: 'Hard', cls: 'btn-secondary' },
    { g: 2, label: 'Good', cls: 'btn-ok' },
    { g: 3, label: 'Easy', cls: 'btn-info' },
  ]

  return (
    <div className="min-h-dvh bg-bg flex flex-col">
      <FocusHeader title="Flashcards" sub={`${Math.min(i + 1, queue.length)} / ${queue.length}`} onClose={onExit} />
      <div className="max-w-xl w-full mx-auto px-4 pt-4">
        <ProgressBar value={i / queue.length} color="var(--vio)" />
      </div>
      <main className="flex-1 max-w-xl w-full mx-auto px-4 py-6 flex flex-col">
        <button
          type="button"
          key={`${card.id}-${i}`}
          onClick={flip}
          className={cx('card flex-1 min-h-[19rem] p-6 flex flex-col items-center justify-center text-center gap-3 anim-pop', !flipped && 'cursor-pointer')}
        >
          {!rev || flipped ? (
            <>
              <div className="flex items-center gap-3">
                <SpeakButton text={spoken(card.es)} size="md" variant="info" />
                <div className="text-3xl sm:text-4xl font-black">
                  <Es text={card.es} />
                </div>
              </div>
              {flipped && <Syllables word={stripArticle(spoken(card.es)).split(/[ ,]/)[0]} />}
            </>
          ) : null}
          {(rev || flipped) && <div className={cx('font-black', flipped && !rev ? 'text-xl text-ink2' : 'text-3xl')}>{card.en}</div>}
          {!flipped && <div className="text-sm font-bold text-ink3 mt-4">{rev ? 'Say it in Spanish, then tap to check' : 'What does it mean? Tap to reveal'}</div>}
          {ex && (
            <div className="mt-3 rounded-2xl bg-bg2 px-4 py-2 text-left">
              <div className="font-bold">
                <Es text={ex.es} />
              </div>
              <div className="text-sm text-ink2 font-bold">{ex.en}</div>
            </div>
          )}
        </button>
        <div className="pt-5 safe-bottom">
          {!flipped ? (
            <button type="button" className="btn btn-primary w-full" onClick={flip}>
              <RotateCcw className="w-5 h-5" /> Show answer
            </button>
          ) : (
            <div className="grid grid-cols-4 gap-2">
              {grades.map(({ g, label, cls }) => (
                <button key={g} type="button" className={cx('btn btn-sm flex-col gap-0 px-1 min-h-[3.6rem]', cls)} onClick={() => grade(g)}>
                  <span>{label}</span>
                  <span className="text-[0.7rem] normal-case tracking-normal opacity-80">{previewLabel(current, g)}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function QuizMode({ cards, pool, onExit, onDone }: { cards: Card[]; pool: Card[]; onExit: () => void; onDone: (r: { xp: number; count: number; seconds: number; accuracy: number }) => void }) {
  const gradeCard = useStore((s) => s.gradeCard)
  const addXP = useStore((s) => s.addXP)
  const bumpStats = useStore((s) => s.bumpStats)
  const exercises = useMemo(() => cardExercises(cards, pool.map((c) => ({ es: c.es, en: c.en }))), [cards, pool])
  return (
    <Runner
      exercises={exercises}
      retryWrong={false}
      onExit={onExit}
      onAnswer={(ex, ok) => {
        const id = 'cardId' in ex ? ex.cardId : undefined
        if (id) gradeCard(id, ok ? 2 : 0)
      }}
      onFinish={(r: RunResult) => {
        const res = addXP(Math.min(30, r.correct + 2))
        bumpStats({ seconds: r.seconds })
        announce(res)
        onDone({ xp: res.gained, count: cards.length, seconds: r.seconds, accuracy: r.accuracy })
      }}
    />
  )
}
