import { useMemo, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams, useSearchParams } from 'react-router'
import { ChevronRight, Dumbbell, Target } from 'lucide-react'
import { LESSON_BY_ID } from '../content'
import { Rich, ExampleRow } from '../components/Rich'
import { Es } from '../components/Es'
import { SpeakButton } from '../components/SpeakButton'
import { KindBadge } from '../components/kinds'
import { LevelChip } from '../components/Bits'
import { FocusHeader, Results } from '../components/Results'
import { Runner, type RunResult } from '../exercises/Runner'
import { lessonExercises, spoken } from '../exercises/generate'
import { speakingPaused } from '../exercises/views'
import { useStore, planInfo } from '../store/store'
import { announce } from '../lib/celebrate'

export function useClose(fallback = '/') {
  const navigate = useNavigate()
  const location = useLocation()
  return () => (location.key !== 'default' ? navigate(-1) : navigate(fallback))
}

export default function LessonPage() {
  const { id = '' } = useParams()
  const [params] = useSearchParams()
  const readOnly = params.get('read') === '1'
  const lesson = LESSON_BY_ID.get(id)
  const navigate = useNavigate()
  const close = useClose('/path')
  const [phase, setPhase] = useState<'learn' | 'practice' | 'done'>('learn')
  const [run, setRun] = useState(0)
  const [result, setResult] = useState<{ r: RunResult; xp: number; added: number } | null>(null)
  const speaking = useStore((s) => s.settings.speaking)
  const completeDay = useStore((s) => s.completeDay)
  const bumpStats = useStore((s) => s.bumpStats)
  const cardsBefore = useStore((s) => Object.keys(s.cards).length)

  const exercises = useMemo(
    () => (lesson && phase === 'practice' ? lessonExercises(lesson, { speaking: speaking && !speakingPaused() }) : []),
    // regenerate for every practice run
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lesson, run, phase === 'practice'],
  )

  if (!lesson) return <Navigate to="/path" replace />

  if (phase === 'practice') {
    return (
      <Runner
        key={run}
        exercises={exercises}
        onExit={() => setPhase('learn')}
        onFinish={(r) => {
          const res = completeDay(lesson.id, r.accuracy, lesson.words)
          bumpStats({ seconds: r.seconds })
          const added = Object.keys(useStore.getState().cards).length - cardsBefore
          announce(res)
          setResult({ r, xp: res.gained, added })
          setPhase('done')
        }}
      />
    )
  }

  if (phase === 'done' && result) {
    const next = planInfo(useStore.getState().progress, useStore.getState().startDate).next
    const perfect = result.r.accuracy >= 0.999
    return (
      <Results
        title={perfect ? '¡Perfecto!' : 'Lesson complete!'}
        sub={perfect ? 'No mistakes — impressive.' : result.r.accuracy >= 0.8 ? '¡Muy bien! Great work.' : 'Good effort — mistakes are how you learn.'}
        xp={result.xp}
        accuracy={result.r.accuracy}
        seconds={result.r.seconds}
        mood={perfect ? 'cool' : 'cheer'}
        actions={
          <>
            {next && next.id !== lesson.id ? (
              <button type="button" className="btn btn-primary" onClick={() => navigate(next.kind === 'lesson' ? `/lesson/${next.id}` : `/week/${next.week}`, { replace: true })}>
                Next: {next.title} <ChevronRight className="w-5 h-5" />
              </button>
            ) : null}
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/', { replace: true })}>
              Back to today
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setRun((n) => n + 1)
                setPhase('practice')
              }}
            >
              Practise again
            </button>
          </>
        }
      >
        <div className="space-y-3 text-left">
          {result.added > 0 && (
            <div className="card p-3 text-sm font-bold flex items-center gap-2">
              <span className="text-xl">⭐</span> {result.added} new word{result.added > 1 ? 's' : ''} added to your review deck — they’ll come back tomorrow.
            </div>
          )}
          {result.r.wrong.length > 0 && (
            <div className="card p-3">
              <div className="text-xs font-black uppercase tracking-wider text-ink3 mb-2">Watch out for</div>
              <div className="space-y-1.5">
                {result.r.wrong.slice(0, 5).map((w, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <SpeakButton text={w.es} size="sm" />
                    <span className="font-black">
                      <Es text={w.es} />
                    </span>
                    <span className="text-ink2 font-bold truncate">— {w.en}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Results>
    )
  }

  return (
    <div className="min-h-dvh bg-bg">
      <FocusHeader title={lesson.title} sub={`Week ${lesson.week} · Day ${lesson.day}`} onClose={close} />
      <main className="max-w-2xl mx-auto px-4 pt-6 pb-36">
        <div className="flex items-center gap-2 mb-3">
          <KindBadge kind={lesson.kind} />
          <LevelChip level={lesson.level} />
        </div>
        <h1 className="text-3xl font-black leading-tight">{lesson.title}</h1>
        <p className="mt-2 flex items-start gap-2 font-bold text-ink2">
          <Target className="w-5 h-5 mt-0.5 text-brand-lip flex-none" /> {lesson.goal}
        </p>
        <Rich text={lesson.body} className="mt-6" />

        {lesson.words.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-black mb-3">
              New words <span className="text-ink3">({lesson.words.length})</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {lesson.words.map((w) => (
                <div key={w.es} className="card p-3 flex items-center gap-3">
                  <SpeakButton text={spoken(w.es)} size="md" />
                  <div className="min-w-0">
                    <div className="font-black text-lg leading-tight">
                      <Es text={w.es} />
                    </div>
                    <div className="text-sm font-bold text-ink2">{w.en}</div>
                    {w.note && <div className="text-xs font-bold text-ink3">{w.note}</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {lesson.phrases.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl font-black mb-3">Useful phrases</h2>
            <div className="space-y-2">
              {lesson.phrases.map((p) => (
                <ExampleRow key={p.es} es={p.es} en={p.en} />
              ))}
            </div>
          </section>
        )}
      </main>
      <footer className="fixed bottom-0 inset-x-0 z-20 bg-bg/95 backdrop-blur border-t-2 border-line safe-bottom">
        <div className="max-w-2xl mx-auto px-4 py-3 flex gap-3">
          {readOnly && (
            <button type="button" className="btn btn-secondary flex-1" onClick={close}>
              Back
            </button>
          )}
          <button type="button" className="btn btn-primary flex-[2]" onClick={() => setPhase('practice')}>
            <Dumbbell className="w-5 h-5" /> {readOnly ? 'Practise' : 'Start practice'}
          </button>
        </div>
      </footer>
    </div>
  )
}
