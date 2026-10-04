import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { BookOpen, Check, ChevronDown, Lock, Play } from 'lucide-react'
import { WEEKS, LEVELS, PLAN, reviewId } from '../content'
import type { Level, PlanDay, Week } from '../content/types'
import { useStore, planInfo } from '../store/store'
import { PageHeader, LEVEL_COLOR } from '../components/Bits'
import { KIND_META, PLAN_META, KindBadge } from '../components/kinds'
import { Sheet } from '../components/Sheet'
import { Es } from '../components/Es'
import { ProgressBar } from '../components/Progress'
import { addDays, fmtDate } from '../lib/dates'
import { cx } from '../lib/util'

const OFFSETS = [0, 46, 70, 46, 0, -46, -70]

export default function PathPage() {
  const progress = useStore((s) => s.progress)
  const startDate = useStore((s) => s.startDate)
  const info = planInfo(progress, startDate)
  const currentLevel: Level = info.next?.level ?? 'B1'
  const [level, setLevel] = useState<Level>(currentLevel)
  const [preview, setPreview] = useState<PlanDay | null>(null)
  const weeks = WEEKS.filter((w) => w.level === level)

  const levelPct = (l: Level) => {
    const days = PLAN.filter((d) => d.level === l)
    return days.filter((d) => progress[d.id]?.done).length / Math.max(1, days.length)
  }

  return (
    <div>
      <PageHeader title="Your 6-month path" sub={`${info.done} of ${info.total} days done · A1 → B1`} />
      <div className="seg mb-6" role="tablist">
        {LEVELS.map((l) => (
          <button key={l.id} type="button" aria-pressed={level === l.id} onClick={() => setLevel(l.id)}>
            <span className="block">{l.id}</span>
            <span className="block text-[0.7rem] opacity-70">{Math.round(levelPct(l.id) * 100)}%</span>
          </button>
        ))}
      </div>
      {(() => {
        const l = LEVELS.find((x) => x.id === level)!
        return (
          <div className="rounded-3xl p-5 mb-6 text-white" style={{ background: LEVEL_COLOR[level] }}>
            <div className="text-sm font-black uppercase tracking-wider opacity-85">
              Level {l.id} · weeks {l.weeks[0]}–{l.weeks[1]}
            </div>
            <div className="text-2xl font-black">
              {l.name} — <span lang="es">{l.es}</span>
            </div>
            <div className="font-bold opacity-90">{l.blurb}</div>
          </div>
        )
      })()}

      {weeks.length === 0 && <p className="text-ink2 font-bold">This level’s content is coming soon.</p>}
      <div className="space-y-8">
        {weeks.map((w) => (
          <WeekBlock key={w.n} week={w} progress={progress} startDate={startDate} nextId={info.next?.id} onPick={setPreview} />
        ))}
      </div>
      {preview && <Preview d={preview} onClose={() => setPreview(null)} />}
    </div>
  )
}

function WeekBlock({
  week,
  progress,
  startDate,
  nextId,
  onPick,
}: {
  week: Week
  progress: Record<string, { done: boolean }>
  startDate: string | null
  nextId?: string
  onPick: (d: PlanDay) => void
}) {
  const [open, setOpen] = useState(false)
  const days = useMemo(() => PLAN.filter((d) => d.week === week.n), [week.n])
  const doneCount = days.filter((d) => progress[d.id]?.done).length
  const first = days[0]
  const from = startDate ? addDays(startDate, first.index) : null
  const to = startDate ? addDays(startDate, first.index + 6) : null
  const color = LEVEL_COLOR[week.level]
  return (
    <section>
      <div className="card p-4">
        <div className="flex items-start gap-3">
          <span className="grid place-items-center w-12 h-12 rounded-2xl text-white font-black flex-none" style={{ background: color }}>
            {week.n}
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-black uppercase tracking-wider text-ink3">
              Semana {week.n}
              {from && to ? ` · ${fmtDate(from)} – ${fmtDate(to)}` : ''}
            </div>
            <div className="text-lg font-black leading-tight">
              <Es text={week.es} plain /> <span className="text-ink2">· {week.title}</span>
            </div>
            <ProgressBar value={doneCount / days.length} color={color} className="mt-2" height="0.6rem" />
          </div>
        </div>
        <button type="button" onClick={() => setOpen(!open)} className="mt-3 flex items-center gap-1 text-sm font-black text-ink2" aria-expanded={open}>
          <ChevronDown className={cx('w-4 h-4 transition-transform', open && 'rotate-180')} /> What you’ll be able to do
        </button>
        {open && (
          <ul className="mt-2 space-y-1.5 text-sm font-bold text-ink2">
            {week.cando.map((c) => (
              <li key={c} className="flex gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-none" style={{ color }} /> {c}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col items-center gap-4 mt-14">
        {days.map((d, i) => {
          const done = !!progress[d.id]?.done
          const current = d.id === nextId
          const meta = d.kind === 'lesson' && d.lesson ? KIND_META[d.lesson.kind] : PLAN_META[d.kind === 'lesson' ? 'review' : d.kind]
          const Icon = meta.icon
          const big = d.kind !== 'lesson'
          return (
            <div key={d.id} className="relative" style={{ transform: `translateX(${OFFSETS[i]}px)` }}>
              {current && (
                <div className="absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border-2 border-line bg-card px-3 py-1 text-sm font-black text-brand-lip anim-bob shadow-[0_3px_0_var(--line)]">
                  START
                </div>
              )}
              <button
                type="button"
                onClick={() => onPick(d)}
                aria-label={`${d.title}${done ? ' (done)' : ''}`}
                className={cx(
                  'grid place-items-center rounded-full transition active:translate-y-1',
                  big ? 'w-[84px] h-[84px]' : 'w-[72px] h-[72px]',
                  current && 'anim-pulse-ring',
                )}
                style={{
                  background: done ? color : current ? 'var(--brand)' : 'var(--line)',
                  color: done ? '#fff' : current ? 'var(--brand-ink)' : 'var(--ink3)',
                  boxShadow: `0 6px 0 ${done ? `color-mix(in srgb, ${color} 70%, black)` : current ? 'var(--brand-lip)' : 'var(--line2)'}`,
                }}
              >
                {done && !big ? <Check className="w-9 h-9" strokeWidth={3.4} /> : <Icon className={big ? 'w-10 h-10' : 'w-8 h-8'} strokeWidth={2.5} />}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Preview({ d, onClose }: { d: PlanDay; onClose: () => void }) {
  const navigate = useNavigate()
  const done = useStore((s) => !!s.progress[d.id]?.done)
  const lesson = d.lesson
  const go = (to: string) => {
    onClose()
    navigate(to)
  }
  return (
    <Sheet onClose={onClose} label={d.title}>
      <div className="p-6 pt-5 space-y-4">
        <div className="flex items-center gap-2 flex-wrap pr-8">
          {lesson ? <KindBadge kind={lesson.kind} /> : <span className="chip bg-brand-soft text-brand-lip">{d.kind === 'checkpoint' ? 'Checkpoint' : 'Weekly review'}</span>}
          <span className="text-sm font-black text-ink3">
            Week {d.week} · Day {d.index + 1}
          </span>
          {done && (
            <span className="chip bg-ok-soft text-ok-ink">
              <Check className="w-3.5 h-3.5" /> Done
            </span>
          )}
        </div>
        <h2 className="text-2xl font-black leading-tight">{d.title}</h2>
        <p className="text-ink2 font-bold">{lesson ? lesson.goal : `Read the week’s story, take the ${d.kind === 'checkpoint' ? 'level checkpoint' : 'review quiz'} and tick off what you can do.`}</p>
        {lesson && (
          <div className="flex flex-wrap gap-1.5">
            {lesson.words.slice(0, 8).map((w) => (
              <span key={w.es} lang="es" className="chip bg-bg2 text-ink2 border-2 border-line">
                {w.es}
              </span>
            ))}
            {lesson.words.length > 8 && <span className="chip bg-bg2 text-ink3">+{lesson.words.length - 8}</span>}
          </div>
        )}
        <div className="grid gap-3 pt-2">
          <button type="button" className="btn btn-primary" onClick={() => go(lesson ? `/lesson/${d.id}` : `/week/${d.week}`)}>
            <Play className="w-5 h-5 fill-current" /> {done ? 'Practise again' : 'Start'}
          </button>
          {lesson && (
            <button type="button" className="btn btn-secondary" onClick={() => go(`/lesson/${d.id}?read=1`)}>
              <BookOpen className="w-5 h-5" /> Just read the explanation
            </button>
          )}
        </div>
        {!done && d.id !== reviewId(d.week) && d.index > 0 && (
          <p className="text-xs font-bold text-ink3 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" /> Everything is open — but the plan works best in order.
          </p>
        )}
      </div>
    </Sheet>
  )
}
