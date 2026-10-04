import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Check, ChevronRight, Ear, Flame, Map, Volume2 } from 'lucide-react'
import { Mascot } from '../components/Mascot'
import { Es } from '../components/Es'
import { VoiceHelp } from '../components/VoiceHelp'
import { useStore } from '../store/store'
import { speak, currentVoice, voiceStatus, useVoiceVersion } from '../lib/speech'
import { addDays, fmtDate, todayKey } from '../lib/dates'
import { cx } from '../lib/util'

export const GOALS = [
  { xp: 20, label: 'Casual', time: '~10 min a day', note: 'Good start — the plan will take longer than 6 months' },
  { xp: 40, label: 'Regular', time: '~20–25 min a day', note: 'Steady progress' },
  { xp: 60, label: 'Serious', time: '~35–45 min a day', note: 'Recommended for A1 → B1 in 6 months', rec: true },
  { xp: 100, label: 'Intense', time: '60+ min a day', note: 'Fastest progress, extra practice every day' },
]

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const [goal, setGoal] = useState(60)
  const [start, setStart] = useState(todayKey())
  const [played, setPlayed] = useState(false)
  const [help, setHelp] = useState(false)
  const finish = useStore((s) => s.finishOnboarding)
  const navigate = useNavigate()
  useVoiceVersion()
  const voice = currentVoice()
  const vs = voiceStatus()

  const done = (to: string) => {
    finish({ dailyGoal: goal, startDate: start })
    navigate(to, { replace: true })
  }

  return (
    <div className="min-h-dvh bg-bg flex flex-col">
      <div className="max-w-lg w-full mx-auto px-5 pt-6 safe-top">
        <div className="flex gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={cx('h-2 flex-1 rounded-full transition-colors', i <= step ? 'bg-brand' : 'bg-line')} />
          ))}
        </div>
      </div>

      <div className="flex-1 max-w-lg w-full mx-auto px-5 py-8 flex flex-col">
        {step === 0 && (
          <div className="flex-1 flex flex-col items-center text-center anim-rise">
            <Mascot mood="cheer" size={150} className="anim-bob" />
            <h1 className="text-3xl font-black mt-5">
              <Es text="¡Hola!" plain /> I’m Sol.
            </h1>
            <p className="text-lg text-ink2 font-bold mt-2">I’ll take you from zero to B1 Spanish (Spain) in 6 months.</p>
            <ul className="text-left space-y-3 mt-8 w-full">
              {[
                { icon: <Map className="w-5 h-5" />, t: 'A 26-week plan', d: 'One short lesson a day: grammar, words, pronunciation and stories.' },
                { icon: <Volume2 className="w-5 h-5" />, t: 'Tap any word to hear it', d: 'Real Spanish pronunciation, plus slow mode and a microphone check.' },
                { icon: <Flame className="w-5 h-5" />, t: 'Streaks & smart review', d: 'Spaced repetition brings words back right before you forget them.' },
              ].map((x) => (
                <li key={x.t} className="card p-4 flex gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-soft text-brand-lip flex-none">{x.icon}</span>
                  <span>
                    <span className="block font-black">{x.t}</span>
                    <span className="block text-sm text-ink2 font-bold">{x.d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 w-full">
              <button type="button" className="btn btn-primary w-full" onClick={() => setStep(1)}>
                Let’s start
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="flex-1 flex flex-col items-center text-center anim-rise">
            <h1 className="text-2xl font-black">First, a sound check</h1>
            <p className="text-ink2 font-bold mt-1">Camino uses your device’s Spanish voice. Turn your sound on.</p>
            <button
              type="button"
              onClick={() => {
                speak('¡Hola! Bienvenido a Camino. Vamos a aprender español.')
                setPlayed(true)
              }}
              className="mt-10 grid place-items-center w-36 h-36 rounded-full bg-info text-white shadow-[0_8px_0_var(--info-lip)] active:translate-y-2 active:shadow-none transition"
              aria-label="Play a Spanish sentence"
            >
              <Ear className="w-16 h-16" />
            </button>
            <div className="mt-6 text-lg font-black">
              <Es text="¡Hola! Bienvenido a Camino." />
            </div>
            <div className="text-ink2 font-bold">Hello! Welcome to Camino.</div>
            <div className="mt-4 text-sm font-bold">
              {vs === 'ok' && voice && (
                <span className="chip bg-ok-soft text-ok-ink">
                  <Check className="w-4 h-4" /> Voice: {voice.name} ({voice.lang})
                </span>
              )}
              {vs === 'none' && <span className="chip bg-bad-soft text-bad-ink">No Spanish voice found on this device</span>}
            </div>
            {(help || vs === 'none') && (
              <div className="mt-5 w-full text-left">
                <VoiceHelp />
              </div>
            )}
            <div className="mt-auto pt-8 w-full grid gap-3">
              <button type="button" className="btn btn-primary w-full" disabled={!played && vs !== 'none'} onClick={() => setStep(2)}>
                {played ? 'Sounds good' : vs === 'none' ? 'Continue for now' : 'Tap the ear first'}
              </button>
              {played && !help && (
                <button type="button" className="btn btn-ghost" onClick={() => setHelp(true)}>
                  I heard nothing
                </button>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex-1 flex flex-col anim-rise">
            <h1 className="text-2xl font-black text-center">Pick a daily goal</h1>
            <p className="text-ink2 font-bold text-center mt-1">You can change this any time.</p>
            <div className="grid gap-3 mt-6">
              {GOALS.map((g) => (
                <button key={g.xp} type="button" className="option" data-state={goal === g.xp ? 'selected' : undefined} onClick={() => setGoal(g.xp)}>
                  <span className="flex-1">
                    <span className="flex items-center gap-2">
                      <span className="font-black">{g.label}</span>
                      {g.rec && <span className="chip bg-brand text-brand-ink">Recommended</span>}
                    </span>
                    <span className="block text-sm font-bold opacity-80">{g.note}</span>
                  </span>
                  <span className="text-right">
                    <span className="block font-black">{g.xp} XP</span>
                    <span className="block text-xs font-bold opacity-70">{g.time}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <button type="button" className="btn btn-primary w-full" onClick={() => setStep(3)}>
                Continue <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex-1 flex flex-col anim-rise">
            <div className="flex items-center gap-3 justify-center">
              <Mascot mood="cool" size={84} />
            </div>
            <h1 className="text-2xl font-black text-center mt-3">Your 6-month plan</h1>
            <label className="block mt-6">
              <span className="text-sm font-black uppercase tracking-wide text-ink3">Start date</span>
              <input type="date" className="input mt-1" value={start} onChange={(e) => e.target.value && setStart(e.target.value)} />
            </label>
            <ol className="mt-6 space-y-3">
              {[
                { lvl: 'A1', when: addDays(start, 62), t: 'Beginner: introduce yourself, daily life, present tense', c: 'bg-a1' },
                { lvl: 'A2', when: addDays(start, 118), t: 'Elementary: past tenses, future, travel & health', c: 'bg-a2' },
                { lvl: 'B1', when: addDays(start, 181), t: 'Intermediate: subjunctive, opinions, stories, hypotheses', c: 'bg-b1' },
              ].map((m) => (
                <li key={m.lvl} className="card p-4 flex items-center gap-3">
                  <span className={cx('grid place-items-center w-12 h-12 rounded-2xl text-white font-black flex-none', m.c)}>{m.lvl}</span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-black">by {fmtDate(m.when, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span className="block text-sm text-ink2 font-bold">{m.t}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-auto pt-8 grid gap-3">
              <button type="button" className="btn btn-primary w-full" onClick={() => done('/lesson/w01d1')}>
                Start lesson 1
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => done('/')}>
                Go to my dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
