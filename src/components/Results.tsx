import { useEffect, type ReactNode } from 'react'
import { Clock, Target, Zap } from 'lucide-react'
import { Mascot, type Mood } from './Mascot'
import { burst } from '../lib/celebrate'
import { sfx } from '../lib/sound'
import { cx } from '../lib/util'

export function fmtTime(sec: number) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return m ? `${m}:${String(s).padStart(2, '0')}` : `${s}s`
}

function Tile({ label, value, tone, icon }: { label: string; value: string; tone: 'brand' | 'ok' | 'info'; icon: ReactNode }) {
  const head = { brand: 'bg-brand text-brand-ink', ok: 'bg-ok text-white', info: 'bg-info text-white' }[tone]
  const body = { brand: 'text-brand-lip border-brand', ok: 'text-ok border-ok', info: 'text-info border-info' }[tone]
  return (
    <div className={cx('rounded-2xl border-2 overflow-hidden', body)}>
      <div className={cx('text-[0.7rem] font-black uppercase tracking-wider py-1', head)}>{label}</div>
      <div className="flex items-center justify-center gap-1.5 py-3 text-xl font-black bg-card">
        {icon}
        {value}
      </div>
    </div>
  )
}

export function Results({
  title,
  sub,
  xp,
  accuracy,
  seconds,
  mood = 'cheer',
  children,
  actions,
}: {
  title: ReactNode
  sub?: ReactNode
  xp: number
  accuracy?: number
  seconds?: number
  mood?: Mood
  children?: ReactNode
  actions: ReactNode
}) {
  useEffect(() => {
    sfx.complete()
    if (accuracy === undefined || accuracy >= 0.7) burst(accuracy !== undefined && accuracy >= 0.999 ? 1.4 : 1)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-5 py-10 text-center bg-bg">
      <Mascot mood={mood} size={140} className="anim-bob" />
      <h1 className="text-3xl font-black mt-4 anim-pop">{title}</h1>
      {sub && <div className="text-ink2 font-bold mt-1 max-w-md">{sub}</div>}
      <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-8">
        <Tile label="Total XP" value={`+${xp}`} tone="brand" icon={<Zap className="w-5 h-5 fill-current" />} />
        {accuracy !== undefined && <Tile label="Accuracy" value={`${Math.round(accuracy * 100)}%`} tone="ok" icon={<Target className="w-5 h-5" />} />}
        {seconds !== undefined && <Tile label="Time" value={fmtTime(seconds)} tone="info" icon={<Clock className="w-5 h-5" />} />}
      </div>
      {children && <div className="w-full max-w-md mt-6">{children}</div>}
      <div className="w-full max-w-md grid gap-3 mt-8">{actions}</div>
    </div>
  )
}

export function FocusHeader({ title, onClose, right, sub }: { title: ReactNode; onClose: () => void; right?: ReactNode; sub?: ReactNode }) {
  return (
    <header className="sticky top-0 z-20 bg-bg/95 backdrop-blur border-b-2 border-line safe-top">
      <div className="max-w-2xl mx-auto flex items-center gap-2 px-3 py-2.5">
        <button type="button" onClick={onClose} className="btn-ghost rounded-xl p-2 text-ink3 hover:text-ink" aria-label="Close">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className="min-w-0 flex-1">
          <div className="font-black truncate">{title}</div>
          {sub && <div className="text-xs font-bold text-ink3 truncate">{sub}</div>}
        </div>
        {right}
      </div>
    </header>
  )
}
