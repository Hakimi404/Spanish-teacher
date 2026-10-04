import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { Check, ChevronRight, Search } from 'lucide-react'
import { LESSONS, LEVELS } from '../content'
import type { LessonKind } from '../content/types'
import { useStore } from '../store/store'
import { PageHeader, LEVEL_COLOR } from '../components/Bits'
import { KIND_META } from '../components/kinds'
import { fold } from '../lib/spanish'
import { cx } from '../lib/util'

export default function Grammar() {
  const [kind, setKind] = useState<LessonKind | 'all'>('grammar')
  const [q, setQ] = useState('')
  const progress = useStore((s) => s.progress)
  const list = useMemo(() => {
    const f = fold(q)
    return LESSONS.filter((l) => (kind === 'all' || l.kind === kind) && (!f || fold(`${l.title} ${l.goal} ${l.body}`).includes(f)))
  }, [kind, q])
  return (
    <div>
      <PageHeader title="Grammar & topics" sub="Every explanation from the course, ready to re-read" back />
      <label className="relative block mb-3">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink3" />
        <input className="input pl-12" placeholder="e.g. subjunctive, ser, por / para…" value={q} onChange={(e) => setQ(e.target.value)} />
      </label>
      <div className="flex flex-wrap gap-2 mb-5">
        {(['all', 'grammar', 'pron', 'vocab', 'talk', 'culture'] as const).map((k) => (
          <button key={k} type="button" onClick={() => setKind(k)} className={cx('chip border-2 py-1.5 px-3', kind === k ? 'bg-ink text-bg border-ink' : 'bg-card text-ink2 border-line')}>
            {k === 'all' ? 'All' : KIND_META[k].label}
          </button>
        ))}
      </div>
      {LEVELS.map((lv) => {
        const items = list.filter((l) => l.level === lv.id)
        if (!items.length) return null
        return (
          <section key={lv.id} className="mb-7">
            <h2 className="text-sm font-black uppercase tracking-wider mb-2" style={{ color: LEVEL_COLOR[lv.id] }}>
              {lv.id} · {lv.name}
            </h2>
            <ul className="card divide-y-2 divide-line overflow-hidden">
              {items.map((l) => {
                const m = KIND_META[l.kind]
                const Icon = m.icon
                return (
                  <li key={l.id}>
                    <Link to={`/lesson/${l.id}?read=1`} className="flex items-center gap-3 px-4 py-3 hover:bg-bg2">
                      <span className="grid place-items-center w-9 h-9 rounded-xl flex-none" style={{ background: m.soft, color: m.color }}>
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-black leading-tight">{l.title}</span>
                        <span className="block text-xs font-bold text-ink3">
                          Week {l.week} · Day {l.day}
                        </span>
                      </span>
                      {progress[l.id]?.done && <Check className="w-5 h-5 text-ok" />}
                      <ChevronRight className="w-5 h-5 text-ink3" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
      {!list.length && <p className="text-center font-bold text-ink2 py-8">No topic found.</p>}
    </div>
  )
}
