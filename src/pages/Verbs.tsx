import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { ChevronRight, Puzzle, Search } from 'lucide-react'
import { VERBS, verbTags } from '../content/verbs'
import type { Level } from '../content/types'
import { PageHeader, LevelChip } from '../components/Bits'
import { fold } from '../lib/spanish'
import { cx } from '../lib/util'

export default function Verbs() {
  const [q, setQ] = useState('')
  const [level, setLevel] = useState<Level | 'all'>('all')
  const [irregular, setIrregular] = useState(false)
  const list = useMemo(() => {
    const f = fold(q)
    return VERBS.filter((v) => (level === 'all' || v.level === level) && (!irregular || verbTags(v).some((t) => t !== 'reflexive' && t !== 'spelling change')))
      .filter((v) => !f || fold(v.inf).includes(f) || fold(v.en).includes(f))
      .sort((a, b) => (f ? Number(!fold(a.inf).startsWith(f)) - Number(!fold(b.inf).startsWith(f)) : 0))
  }, [q, level, irregular])

  return (
    <div>
      <PageHeader
        title="Verb conjugator"
        sub={`${VERBS.length} verbs · every tense from A1 to B1`}
        back
        right={
          <Link to="/train/verbs" className="btn btn-primary btn-sm">
            <Puzzle className="w-4 h-4" /> Train
          </Link>
        }
      />
      <label className="relative block mb-3">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink3" />
        <input className="input pl-12" placeholder="Search a verb in Spanish or English…" value={q} onChange={(e) => setQ(e.target.value)} lang="es" />
      </label>
      <div className="flex flex-wrap gap-2 mb-5">
        {(['all', 'A1', 'A2', 'B1'] as const).map((l) => (
          <button key={l} type="button" onClick={() => setLevel(l)} className={cx('chip border-2 py-1.5 px-3', level === l ? 'bg-ink text-bg border-ink' : 'bg-card text-ink2 border-line')}>
            {l === 'all' ? 'All levels' : l}
          </button>
        ))}
        <button type="button" onClick={() => setIrregular(!irregular)} className={cx('chip border-2 py-1.5 px-3', irregular ? 'bg-bad text-white border-bad' : 'bg-card text-ink2 border-line')}>
          Irregular only
        </button>
      </div>
      <ul className="card divide-y-2 divide-line overflow-hidden">
        {list.slice(0, 300).map((v) => (
          <li key={v.inf}>
            <Link to={`/verbs/${encodeURIComponent(v.inf)}`} className="flex items-center gap-3 px-4 py-3 hover:bg-bg2">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span lang="es" className="font-black text-lg">
                    {v.inf}
                  </span>
                  <LevelChip level={v.level} />
                </div>
                <div className="text-sm font-bold text-ink2 truncate">{v.en}</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {verbTags(v)
                    .slice(0, 3)
                    .map((t) => (
                      <span key={t} className="chip bg-bg2 text-ink3 text-[0.7rem] py-0">
                        {t}
                      </span>
                    ))}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-ink3" />
            </Link>
          </li>
        ))}
        {!list.length && <li className="p-6 text-center font-bold text-ink2">No verb found. Try the infinitive, e.g. “tener”.</li>}
      </ul>
    </div>
  )
}
