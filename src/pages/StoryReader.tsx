import { useEffect, useMemo, useRef, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { Eye, EyeOff, Languages, Pause, Play } from 'lucide-react'
import { STORY_BY_ID } from '../content'
import { useStore } from '../store/store'
import { FocusHeader } from '../components/Results'
import { Es } from '../components/Es'
import { SpeakButton } from '../components/SpeakButton'
import { LevelChip } from '../components/Bits'
import { Mascot } from '../components/Mascot'
import { speakSequence, stopSpeaking } from '../lib/speech'
import { sfx } from '../lib/sound'
import { announce, burst } from '../lib/celebrate'
import { cx, shuffle } from '../lib/util'
import { useClose } from './LessonPage'

export default function StoryReader() {
  const { id = '' } = useParams()
  const story = STORY_BY_ID.get(id)
  const navigate = useNavigate()
  const close = useClose('/stories')
  const [showAll, setShowAll] = useState(false)
  const [shown, setShown] = useState<Set<number>>(new Set())
  const [playing, setPlaying] = useState(-1)
  const [slow, setSlow] = useState(false)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [saved, setSaved] = useState(false)
  const stopRef = useRef<() => void>(() => {})
  const markStory = useStore((s) => s.markStory)
  const already = useStore((s) => (story ? !!s.stories[story.id] : false))
  const addXP = useStore((s) => s.addXP)
  const options = useMemo(() => story?.questions.map((q) => shuffle([q.a, ...q.opts])) ?? [], [story])

  useEffect(() => () => stopSpeaking(), [])
  useEffect(() => {
    if (playing >= 0) document.getElementById(`para-${playing}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [playing])

  if (!story) return <Navigate to="/stories" replace />
  const total = story.questions.length
  const answered = Object.keys(answers).length
  const score = story.questions.filter((q, i) => answers[i] === q.a).length

  const playAll = () => {
    if (playing >= 0) {
      stopRef.current()
      setPlaying(-1)
      return
    }
    stopRef.current = speakSequence(
      story.paras.map((p) => p.es),
      (i) => setPlaying(i),
      { slow },
    )
  }

  const finish = () => {
    markStory(story.id, score)
    const res = addXP(already ? 5 : 15)
    announce(res)
    burst(0.7)
    setSaved(true)
  }

  return (
    <div className="min-h-dvh bg-bg">
      <FocusHeader
        title={<span lang="es">{story.title}</span>}
        sub={`Story · week ${story.week}`}
        onClose={close}
        right={
          <button type="button" className="btn-ghost rounded-xl p-2 text-ink2" onClick={() => setShowAll(!showAll)} aria-label={showAll ? 'Hide translations' : 'Show translations'} title="Translations">
            {showAll ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        }
      />
      <main className="max-w-2xl mx-auto px-4 pt-6 pb-20">
        <div className="flex items-center gap-3 mb-5">
          <Mascot mood="happy" size={64} />
          <div>
            <LevelChip level={story.level} />
            <h1 lang="es" className="text-3xl font-black leading-tight mt-1">
              {story.title}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button type="button" className={cx('btn btn-sm', playing >= 0 ? 'btn-bad' : 'btn-info')} onClick={playAll}>
            {playing >= 0 ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />} {playing >= 0 ? 'Stop' : 'Listen to all'}
          </button>
          <button type="button" className={cx('btn btn-sm', slow ? 'btn-primary' : 'btn-secondary')} onClick={() => setSlow(!slow)} aria-pressed={slow}>
            🐢 Slow
          </button>
          <span className="text-xs font-bold text-ink3 self-center">Tap any word for its meaning.</span>
        </div>

        <article className="space-y-3">
          {story.paras.map((p, i) => {
            const dialogue = p.es.trim().startsWith('—')
            const open = showAll || shown.has(i)
            return (
              <div
                key={i}
                id={`para-${i}`}
                className={cx('rounded-2xl p-3 transition-colors', playing === i ? 'bg-brand-soft ring-2 ring-brand' : 'bg-card border-2 border-line', dialogue && 'ml-3 border-l-4 border-l-info')}
              >
                <div className="flex items-start gap-2">
                  <SpeakButton text={p.es} size="sm" slow={slow} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[1.12rem] font-bold leading-relaxed">
                      <Es text={p.es} />
                    </p>
                    {open && p.en && <p className="text-ink2 font-bold mt-1.5 text-[0.95rem] anim-fade">{p.en}</p>}
                  </div>
                  {!showAll && p.en && (
                    <button
                      type="button"
                      onClick={() => {
                        const n = new Set(shown)
                        if (n.has(i)) n.delete(i)
                        else n.add(i)
                        setShown(n)
                      }}
                      className="btn-ghost rounded-lg p-1.5 text-ink3 hover:text-ink"
                      aria-label="Translate paragraph"
                      title="Translate"
                    >
                      <Languages className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </article>

        <section className="mt-10">
          <h2 className="text-xl font-black mb-1">¿Lo has entendido?</h2>
          <p className="text-ink2 font-bold mb-4">Did you understand it? Answer the questions.</p>
          <div className="space-y-4">
            {story.questions.map((q, i) => {
              const a = answers[i]
              return (
                <div key={i} className="card p-4">
                  <div className="font-black text-lg">
                    <Es text={q.q} />
                  </div>
                  {q.en && <div className="text-sm font-bold text-ink3 mb-3">{q.en}</div>}
                  <div className="grid gap-2">
                    {options[i].map((o) => {
                      const state = a === undefined ? undefined : o === q.a ? 'correct' : o === a ? 'wrong' : 'dim'
                      return (
                        <button
                          key={o}
                          type="button"
                          className="option py-2.5"
                          data-state={state}
                          disabled={a !== undefined}
                          onClick={() => {
                            setAnswers({ ...answers, [i]: o })
                            if (o === q.a) sfx.correct()
                            else sfx.wrong()
                          }}
                        >
                          <Es text={o} static />
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          {answered === total && (
            <div className="card p-5 mt-6 text-center anim-pop">
              <div className="text-3xl font-black">
                {score} / {total}
              </div>
              <p className="font-bold text-ink2">{score === total ? '¡Perfecto! You understood everything.' : score >= total / 2 ? '¡Bien! Read it once more and try to catch the rest.' : 'Listen again with the translations on — then retry.'}</p>
              {!saved ? (
                <button type="button" className="btn btn-primary w-full mt-4" onClick={finish}>
                  Finish story (+{already ? 5 : 15} XP)
                </button>
              ) : (
                <button type="button" className="btn btn-secondary w-full mt-4" onClick={() => navigate('/', { replace: true })}>
                  Back to today
                </button>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
