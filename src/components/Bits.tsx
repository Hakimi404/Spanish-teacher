import { useNavigate } from 'react-router'
import { ArrowLeft, Flame, Snowflake } from 'lucide-react'
import type { ReactNode, RefObject } from 'react'
import { ES_DAY_INITIALS, addDays, todayKey, weekday, parseKey } from '../lib/dates'
import { cx } from '../lib/util'
import type { Level } from '../content/types'

export function PageHeader({ title, sub, back, right }: { title: ReactNode; sub?: ReactNode; back?: string | true; right?: ReactNode }) {
  const navigate = useNavigate()
  return (
    <header className="flex items-start gap-3 mb-5">
      {back && (
        <button
          type="button"
          onClick={() => (back === true ? navigate(-1) : navigate(back))}
          className="btn btn-secondary btn-icon mt-0.5"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}
      <div className="min-w-0 flex-1">
        <h1 className="text-[1.65rem] sm:text-3xl font-black tracking-tight leading-tight">{title}</h1>
        {sub && <div className="text-ink2 font-bold mt-0.5">{sub}</div>}
      </div>
      {right}
    </header>
  )
}

const LEVEL_STYLE: Record<Level, string> = {
  A1: 'bg-a1-soft text-a1',
  A2: 'bg-a2-soft text-a2',
  B1: 'bg-b1-soft text-b1',
}
export const LEVEL_COLOR: Record<Level, string> = { A1: 'var(--a1)', A2: 'var(--a2)', B1: 'var(--b1)' }

export function LevelChip({ level, className }: { level: Level; className?: string }) {
  return <span className={cx('chip', LEVEL_STYLE[level], className)}>{level}</span>
}

/** Monday–Sunday strip with Spanish initials (L M X J V S D) and flames on practised days. */
export function WeekStrip({ xp, frozen = [] }: { xp: Record<string, number>; frozen?: string[] }) {
  const today = todayKey()
  const monday = addDays(today, -weekday(today))
  return (
    <div className="grid grid-cols-7 gap-1.5">
      {ES_DAY_INITIALS.map((d, i) => {
        const k = addDays(monday, i)
        const done = (xp[k] ?? 0) > 0
        const isFrozen = frozen.includes(k)
        const isToday = k === today
        const future = k > today
        return (
          <div key={k} className="flex flex-col items-center gap-1">
            <span className={cx('text-xs font-black', isToday ? 'text-ink' : 'text-ink3')}>{d}</span>
            <span
              className={cx(
                'grid place-items-center w-9 h-9 rounded-full border-2',
                done ? 'bg-fire border-fire text-white' : isFrozen ? 'bg-info-soft border-info text-info' : 'border-line bg-card text-ink3',
                isToday && !done && 'border-fire border-dashed',
                future && 'opacity-50',
              )}
              title={k}
            >
              {done ? <Flame className="w-5 h-5 fill-white/40" /> : isFrozen ? <Snowflake className="w-4 h-4" /> : <span className="text-xs font-black">{parseKey(k).getDate()}</span>}
            </span>
          </div>
        )
      })}
    </div>
  )
}

/** GitHub-style activity heatmap for the last `weeks` weeks. */
export function Heatmap({ xp, goal, weeks = 26 }: { xp: Record<string, number>; goal: number; weeks?: number }) {
  const today = todayKey()
  const monday = addDays(today, -weekday(today))
  const start = addDays(monday, -7 * (weeks - 1))
  const cols = Array.from({ length: weeks }, (_, w) => Array.from({ length: 7 }, (_, d) => addDays(start, w * 7 + d)))
  const tone = (v: number) => (v <= 0 ? 'var(--line)' : v < goal * 0.5 ? 'color-mix(in srgb, var(--brand) 35%, var(--card))' : v < goal ? 'color-mix(in srgb, var(--brand) 70%, var(--card))' : 'var(--fire)')
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="inline-flex gap-[3px]">
        {cols.map((col, i) => (
          <div key={i} className="flex flex-col gap-[3px]">
            {col.map((k) => (
              <span
                key={k}
                title={`${k}: ${xp[k] ?? 0} XP`}
                className="block w-3 h-3 rounded-[3px]"
                style={{ background: k > today ? 'transparent' : tone(xp[k] ?? 0) }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-2 text-xs font-bold text-ink3">
        less
        {[0, goal * 0.3, goal * 0.7, goal].map((v, i) => (
          <span key={i} className="w-3 h-3 rounded-[3px]" style={{ background: tone(v) }} />
        ))}
        more
      </div>
    </div>
  )
}

const ACCENTS = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡']

/** On-screen keys to type Spanish characters into an input. */
export function AccentKeys({ inputRef, value, onChange }: { inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement | null>; value: string; onChange: (v: string) => void }) {
  const insert = (ch: string) => {
    const el = inputRef.current
    const start = el?.selectionStart ?? value.length
    const end = el?.selectionEnd ?? value.length
    const next = value.slice(0, start) + ch + value.slice(end)
    onChange(next)
    requestAnimationFrame(() => {
      el?.focus()
      el?.setSelectionRange(start + ch.length, start + ch.length)
    })
  }
  return (
    <div className="flex flex-wrap gap-1.5" aria-label="Spanish characters">
      {ACCENTS.map((a) => (
        <button key={a} type="button" className="kbd-key" onMouseDown={(e) => e.preventDefault()} onClick={() => insert(a)}>
          {a}
        </button>
      ))}
    </div>
  )
}

export function StatTile({ icon, value, label, tone = 'brand' }: { icon: ReactNode; value: ReactNode; label: string; tone?: 'brand' | 'fire' | 'ok' | 'info' | 'vio' }) {
  const tones = {
    brand: 'bg-brand-soft text-brand-lip',
    fire: 'bg-fire-soft text-fire',
    ok: 'bg-ok-soft text-ok',
    info: 'bg-info-soft text-info',
    vio: 'bg-vio-soft text-vio',
  }
  return (
    <div className="card p-3.5 flex items-center gap-3">
      <span className={cx('grid place-items-center w-11 h-11 rounded-2xl flex-none', tones[tone])}>{icon}</span>
      <div className="min-w-0">
        <div className="text-xl font-black leading-tight">{value}</div>
        <div className="text-xs font-bold text-ink3 uppercase tracking-wide">{label}</div>
      </div>
    </div>
  )
}

export function Empty({ title, children, art }: { title: string; children?: ReactNode; art?: ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 py-10 px-4">
      {art}
      <h2 className="text-xl font-black">{title}</h2>
      {children && <div className="text-ink2 font-bold max-w-sm">{children}</div>}
    </div>
  )
}
