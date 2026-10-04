import { useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router'
import { BookOpen, Check, ChevronRight, Crown, ListChecks, Play, Repeat } from 'lucide-react'
import { WEEK_BY_N, LESSONS, CHECKPOINT_WEEKS, reviewId, LEVELS } from '../content'
import { useStore, planInfo } from '../store/store'
import { FocusHeader, Results } from '../components/Results'
import { Mascot } from '../components/Mascot'
import { Es } from '../components/Es'
import { LevelChip, LEVEL_COLOR } from '../components/Bits'
import { Runner, type RunResult } from '../exercises/Runner'
import { quizExercises } from '../exercises/generate'
import { speakingPaused } from '../exercises/views'
import { announce } from '../lib/celebrate'
import { cx } from '../lib/util'
import { useClose } from './LessonPage'

export default function WeekReview() {
  const n = Number(useParams().n)
  const week = WEEK_BY_N.get(n)
  const navigate = useNavigate()
  const close = useClose('/path')
  const id = reviewId(n)
  const isCheckpoint = CHECKPOINT_WEEKS.has(n)
  const [phase, setPhase] = useState<'overview' | 'quiz' | 'done'>('overview')
  const [run, setRun] = useState(0)
  const [result, setResult] = useState<{ r: RunResult; xp: number } | null>(null)
  const progress = useStore((s) => s.progress)
  const stories = useStore((s) => s.stories)
  const cando = useStore((s) => s.cando)
  const toggleCando = useStore((s) => s.toggleCando)
  const completeDay = useStore((s) => s.completeDay)
  const bumpStats = useStore((s) => s.bumpStats)
  const speaking = useStore((s) => s.settings.speaking)

  const lessons = useMemo(() => (week ? (isCheckpoint ? LESSONS.filter((l) => l.level === week.level) : week.lessons) : []), [week, isCheckpoint])
  const exercises = useMemo(
    () => (phase === 'quiz' ? quizExercises(lessons, isCheckpoint ? 25 : 15, { speaking: speaking && !speakingPaused() }) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lessons, run, phase === 'quiz'],
  )

  if (!week) return <Navigate to="/path" replace />
  const level = LEVELS.find((l) => l.id === week.level)!

  if (phase === 'quiz') {
    return (
      <Runner
        key={run}
        exercises={exercises}
        onExit={() => setPhase('overview')}
        onFinish={(r) => {
          const res = completeDay(id, r.accuracy)
          bumpStats({ seconds: r.seconds })
          announce(res)
          setResult({ r, xp: res.gained })
          setPhase('done')
        }}
      />
    )
  }

  if (phase === 'done' && result) {
    const next = planInfo(useStore.getState().progress, useStore.getState().startDate).next
    const passed = result.r.accuracy >= 0.7
    return (
      <Results
        title={isCheckpoint ? (passed ? `¡Enhorabuena! ${week.level} done` : `${week.level} checkpoint done`) : `Week ${n} complete!`}
        sub={isCheckpoint ? (passed ? `You’ve completed level ${week.level} — ${level.name}.` : 'Review the tricky topics and try again for a higher score.') : '¡Una semana más! One more week behind you.'}
        xp={result.xp}
        accuracy={result.r.accuracy}
        seconds={result.r.seconds}
        mood={passed ? 'cool' : 'happy'}
        actions={
          <>
            {next && (
              <button type="button" className="btn btn-primary" onClick={() => navigate(next.kind === 'lesson' ? `/lesson/${next.id}` : `/week/${next.week}`, { replace: true })}>
                Next: {next.title} <ChevronRight className="w-5 h-5" />
              </button>
            )}
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/', { replace: true })}>
              Back to today
            </button>
          </>
        }
      >
        {isCheckpoint && passed && (
          <div className="rounded-3xl border-4 p-5 text-center" style={{ borderColor: LEVEL_COLOR[week.level] }}>
            <Crown className="w-10 h-10 mx-auto" style={{ color: LEVEL_COLOR[week.level] }} />
            <div className="text-xs font-black uppercase tracking-widest text-ink3 mt-2">Certificado</div>
            <div className="text-2xl font-black">Nivel {week.level}</div>
            <div className="font-bold text-ink2">
              {level.name} · <span lang="es">{level.es}</span>
            </div>
            <div className="text-sm font-bold text-ink3 mt-1">Score {Math.round(result.r.accuracy * 100)}%</div>
          </div>
        )}
      </Results>
    )
  }

  const done = !!progress[id]?.done
  const story = week.story
  const storyRead = !!stories[story.id]
  const words = week.lessons.reduce((a, l) => a + l.words.length, 0)

  return (
    <div className="min-h-dvh bg-bg">
      <FocusHeader title={isCheckpoint ? `${week.level} checkpoint` : `Week ${n} review`} sub={`${week.es} · ${week.title}`} onClose={close} />
      <main className="max-w-2xl mx-auto px-4 pt-6 pb-16 space-y-5">
        <div className="flex items-center gap-4">
          <Mascot mood={isCheckpoint ? 'cool' : 'cheer'} size={84} />
          <div>
            <div className="flex items-center gap-2">
              <LevelChip level={week.level} />
              {done && (
                <span className="chip bg-ok-soft text-ok-ink">
                  <Check className="w-3.5 h-3.5" /> Done · best {Math.round((progress[id]?.best ?? 0) * 100)}%
                </span>
              )}
            </div>
            <h1 className="text-2xl font-black leading-tight mt-1">{isCheckpoint ? `Show what you know: level ${week.level}` : `Great week! Let’s lock it in.`}</h1>
          </div>
        </div>

        <Step n={1} icon={<BookOpen className="w-6 h-6" />} title="Read the story" done={storyRead}>
          <p className="font-bold text-ink2">
            <span lang="es" className="font-black text-ink">
              {story.title}
            </span>{' '}
            — tap any word you don’t know.
          </p>
          <Link to={`/story/${story.id}`} className="btn btn-secondary mt-3 w-full">
            {storyRead ? 'Read again' : 'Read story'}
          </Link>
        </Step>

        <Step n={2} icon={<Play className="w-6 h-6" />} title={isCheckpoint ? `Level ${week.level} checkpoint` : 'Week quiz'} done={done}>
          <p className="font-bold text-ink2">
            {isCheckpoint ? `25 questions from all ${lessons.length} lessons of level ${week.level}.` : `15 mixed questions from this week’s 6 lessons.`}
          </p>
          <button
            type="button"
            className="btn btn-primary mt-3 w-full"
            onClick={() => {
              setRun((x) => x + 1)
              setPhase('quiz')
            }}
          >
            {done ? 'Take it again' : 'Start'}
          </button>
        </Step>

        <Step n={3} icon={<ListChecks className="w-6 h-6" />} title="Can you do this?" done={week.cando.every((_, i) => cando[`w${n}-${i}`])}>
          <ul className="space-y-2">
            {week.cando.map((c, i) => {
              const k = `w${n}-${i}`
              return (
                <li key={k}>
                  <button type="button" onClick={() => toggleCando(k)} className="w-full flex items-start gap-3 text-left font-bold" aria-pressed={!!cando[k]}>
                    <span className={cx('grid place-items-center w-6 h-6 rounded-lg border-2 flex-none mt-0.5', cando[k] ? 'bg-ok border-ok text-white' : 'border-line2')}>
                      {cando[k] && <Check className="w-4 h-4" strokeWidth={3} />}
                    </span>
                    <span className={cx(cando[k] ? 'text-ink' : 'text-ink2')}>{c}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </Step>

        <Link to={`/session/week?w=${n}`} className="card card-press p-4 flex items-center gap-3">
          <span className="grid place-items-center w-12 h-12 rounded-2xl bg-vio-soft text-vio flex-none">
            <Repeat className="w-6 h-6" />
          </span>
          <span className="flex-1">
            <span className="block font-black">Extra practice</span>
            <span className="block text-sm font-bold text-ink2">Drill this week’s {words} words and phrases</span>
          </span>
          <ChevronRight className="w-5 h-5 text-ink3" />
        </Link>

        <div className="text-sm font-bold text-ink3 text-center">
          <Es text={week.es} plain /> — {week.title}
        </div>
      </main>
    </div>
  )
}

function Step({ n, icon, title, done, children }: { n: number; icon: React.ReactNode; title: string; done: boolean; children: React.ReactNode }) {
  return (
    <section className={cx('card p-4', done && 'border-ok/50')}>
      <div className="flex items-center gap-3 mb-3">
        <span className={cx('grid place-items-center w-11 h-11 rounded-2xl flex-none', done ? 'bg-ok text-white' : 'bg-brand-soft text-brand-lip')}>{done ? <Check className="w-6 h-6" strokeWidth={3} /> : icon}</span>
        <div>
          <div className="text-xs font-black uppercase tracking-wider text-ink3">Step {n}</div>
          <div className="font-black text-lg leading-tight">{title}</div>
        </div>
      </div>
      {children}
    </section>
  )
}
