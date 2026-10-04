import { useMemo, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router'
import { LESSONS, WEEK_BY_N } from '../content'
import { useStore } from '../store/store'
import { Runner, type RunResult } from '../exercises/Runner'
import { dictation, itemExercises, listen, quizExercises, speakEx, type Exercise, type Item } from '../exercises/generate'
import { speakingPaused } from '../exercises/views'
import { Results } from '../components/Results'
import { Empty } from '../components/Bits'
import { Mascot } from '../components/Mascot'
import { recognitionSupported } from '../lib/recognition'
import { announce } from '../lib/celebrate'
import { shuffle } from '../lib/util'
import { wordsOf } from '../lib/spanish'
import { useClose } from './LessonPage'

const TITLES: Record<string, string> = {
  mistakes: 'Fix your mistakes',
  listening: 'Listening drill',
  speaking: 'Speaking drill',
  week: 'Week practice',
  words: 'Word drill',
}

export default function Session() {
  const { kind = 'words' } = useParams()
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const close = useClose('/practice')
  const progress = useStore((s) => s.progress)
  const mistakes = useStore((s) => s.mistakes)
  const cards = useStore((s) => s.cards)
  const speaking = useStore((s) => s.settings.speaking)
  const addXP = useStore((s) => s.addXP)
  const bumpStats = useStore((s) => s.bumpStats)
  const clearMistake = useStore((s) => s.clearMistake)
  const [run, setRun] = useState(0)
  const [result, setResult] = useState<{ r: RunResult; xp: number } | null>(null)

  const exercises: Exercise[] = useMemo(() => {
    const doneLessons = LESSONS.filter((l) => progress[l.id]?.done)
    const learnedPhrases: Item[] = doneLessons.flatMap((l) => l.phrases)
    const learnedWords: Item[] = Object.values(cards).map((c) => ({ es: c.es, en: c.en }))
    const opts = { speaking: speaking && !speakingPaused() }
    switch (kind) {
      case 'mistakes':
        return itemExercises(
          Object.values(mistakes)
            .sort((a, b) => b.n - a.n)
            .slice(0, 15),
          opts,
        )
      case 'listening': {
        const out: (Exercise | null)[] = []
        for (const w of shuffle(learnedWords).slice(0, 5)) out.push(listen(w, learnedWords))
        for (const p of shuffle(learnedPhrases.filter((p) => wordsOf(p.es).length <= 7)).slice(0, 5)) out.push(dictation(p))
        return shuffle(out.filter((x): x is Exercise => !!x))
      }
      case 'speaking':
        return recognitionSupported ? shuffle([...learnedPhrases, ...learnedWords.filter((w) => wordsOf(w.es).length >= 2)]).slice(0, 8).map((p) => speakEx(p)) : []
      case 'week': {
        const w = WEEK_BY_N.get(Number(params.get('w')))
        return w ? quizExercises(w.lessons, 12, opts) : []
      }
      default:
        return itemExercises(shuffle(learnedWords).slice(0, 12), opts)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind, run])

  if (result) {
    return (
      <Results
        title="Session complete!"
        sub={TITLES[kind]}
        xp={result.xp}
        accuracy={result.r.accuracy}
        seconds={result.r.seconds}
        actions={
          <>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setResult(null)
                setRun((n) => n + 1)
              }}
            >
              Go again
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/practice', { replace: true })}>
              Back to practice
            </button>
          </>
        }
      />
    )
  }

  if (!exercises.length) {
    return (
      <div className="min-h-dvh bg-bg grid place-items-center px-4">
        <Empty
          title={kind === 'speaking' && !recognitionSupported ? 'Speech recognition isn’t available here' : kind === 'mistakes' ? 'No mistakes to fix!' : 'Nothing to practise yet'}
          art={<Mascot mood={kind === 'mistakes' ? 'cool' : 'think'} size={110} />}
        >
          {kind === 'speaking' && !recognitionSupported
            ? 'Try Chrome, Edge or Safari. You can still practise pronunciation with the recorder in the Pronunciation lab.'
            : kind === 'mistakes'
              ? 'Words you get wrong will show up here so you can fix them.'
              : 'Finish a few lessons first — then come back here.'}
          <div className="mt-6">
            <button type="button" className="btn btn-primary" onClick={close}>
              Back
            </button>
          </div>
        </Empty>
      </div>
    )
  }

  return (
    <Runner
      key={run}
      exercises={exercises}
      onExit={close}
      onAnswer={(ex, ok) => {
        if (kind === 'mistakes' && ok && ex.kind !== 'match') clearMistake(ex.item.es)
      }}
      onFinish={(r) => {
        const res = addXP(Math.min(20, r.correct + 2))
        bumpStats({ seconds: r.seconds })
        announce(res)
        setResult({ r, xp: res.gained })
      }}
    />
  )
}
