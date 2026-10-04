import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { BookOpen, ChevronDown, Search, Table2, Trash2, X } from 'lucide-react'
import { WEEKS, LESSONS } from '../content'
import { searchEntries } from '../content/dictionary'
import { useStore } from '../store/store'
import { useUI } from '../store/ui'
import { PageHeader, LevelChip, LEVEL_COLOR } from '../components/Bits'
import { SpeakButton } from '../components/SpeakButton'
import { Es } from '../components/Es'
import { strength } from '../lib/srs'
import { fold, stripArticle } from '../lib/spanish'
import { cx } from '../lib/util'
import { spoken } from '../exercises/generate'

export default function Words() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const [tab, setTab] = useState<'browse' | 'deck'>('browse')
  const cards = useStore((s) => s.cards)
  const results = useMemo(() => searchEntries(q), [q])
  const lessonHits = useMemo(() => {
    const f = fold(q)
    if (f.length < 3) return []
    return LESSONS.filter((l) => fold(l.title).includes(f) || fold(l.goal).includes(f)).slice(0, 6)
  }, [q])
  const openWord = useUI((s) => s.openWord)

  const setQ = (v: string) => setParams(v ? { q: v } : {}, { replace: true })

  return (
    <div>
      <PageHeader title="Words" sub="Dictionary · your deck · every lesson’s vocabulary" />
      <label className="relative block mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink3" />
        <input className="input pl-12 pr-11" placeholder="Search Spanish or English…" value={q} onChange={(e) => setQ(e.target.value)} lang="es" autoComplete="off" />
        {q && (
          <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-ink3 hover:text-ink" onClick={() => setQ('')} aria-label="Clear">
            <X className="w-5 h-5" />
          </button>
        )}
      </label>

      {q ? (
        <div className="space-y-5">
          {lessonHits.length > 0 && (
            <div>
              <h2 className="text-sm font-black uppercase tracking-wider text-ink3 mb-2">Lessons</h2>
              <div className="grid gap-2">
                {lessonHits.map((l) => (
                  <Link key={l.id} to={`/lesson/${l.id}?read=1`} className="card card-press px-4 py-3 flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-vio" />
                    <span className="font-black flex-1">{l.title}</span>
                    <span className="text-xs font-bold text-ink3">Week {l.week}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div>
            <h2 className="text-sm font-black uppercase tracking-wider text-ink3 mb-2">{results.length ? `${results.length} result${results.length > 1 ? 's' : ''}` : 'No results'}</h2>
            <ul className="card divide-y-2 divide-line overflow-hidden">
              {results.map(({ entry: e }) => (
                <li key={e.id} className="flex items-center gap-3 px-3 py-2.5">
                  <SpeakButton text={spoken(e.es)} size="sm" />
                  <button type="button" className="min-w-0 flex-1 text-left" onClick={() => openWord(stripArticle(spoken(e.es)).split(',')[0], e.es)}>
                    <span lang="es" className="block font-black">
                      {e.es}
                    </span>
                    <span className="block text-sm font-bold text-ink2 truncate">{e.en}</span>
                  </button>
                  {e.kind === 'verb' && (
                    <Link to={`/verbs/${encodeURIComponent(e.es)}`} className="btn btn-secondary btn-icon w-9 h-9" aria-label={`Conjugate ${e.es}`}>
                      <Table2 className="w-4 h-4" />
                    </Link>
                  )}
                  {e.level && <LevelChip level={e.level} />}
                </li>
              ))}
              {!results.length && <li className="p-5 text-center font-bold text-ink2">Nothing found. Try another spelling — accents are optional.</li>}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <div className="seg mb-5">
            <button type="button" aria-pressed={tab === 'browse'} onClick={() => setTab('browse')}>
              By week
            </button>
            <button type="button" aria-pressed={tab === 'deck'} onClick={() => setTab('deck')}>
              My deck ({Object.keys(cards).length})
            </button>
          </div>
          {tab === 'browse' ? <Browse /> : <Deck />}
        </>
      )}
    </div>
  )
}

function Browse() {
  const [open, setOpen] = useState<number | null>(null)
  const progress = useStore((s) => s.progress)
  return (
    <div className="space-y-2.5">
      {WEEKS.map((w) => {
        const isOpen = open === w.n
        const count = w.lessons.reduce((a, l) => a + l.words.length, 0)
        return (
          <section key={w.n} className="card overflow-hidden">
            <button type="button" className="w-full flex items-center gap-3 px-4 py-3 text-left" onClick={() => setOpen(isOpen ? null : w.n)} aria-expanded={isOpen}>
              <span className="grid place-items-center w-10 h-10 rounded-xl text-white font-black flex-none" style={{ background: LEVEL_COLOR[w.level] }}>
                {w.n}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-black truncate">
                  <span lang="es">{w.es}</span> · {w.title}
                </span>
                <span className="block text-xs font-bold text-ink3">{count} words</span>
              </span>
              <ChevronDown className={cx('w-5 h-5 text-ink3 transition-transform', isOpen && 'rotate-180')} />
            </button>
            {isOpen && (
              <div className="border-t-2 border-line">
                {w.lessons.map((l) => (
                  <div key={l.id} className="px-4 py-3 border-b-2 border-line last:border-b-0">
                    <Link to={`/lesson/${l.id}?read=1`} className="flex items-center gap-2 font-black text-sm mb-2 hover:underline">
                      {progress[l.id]?.done ? '✅' : '📘'} {l.title}
                    </Link>
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1">
                      {l.words.map((wd) => (
                        <li key={wd.es} className="flex items-center gap-2 text-sm">
                          <SpeakButton text={spoken(wd.es)} size="sm" variant="ghost" />
                          <span className="font-black">
                            <Es text={wd.es} />
                          </span>
                          <span className="text-ink2 font-bold truncate">{wd.en}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}

function Deck() {
  const cards = useStore((s) => s.cards)
  const removeCard = useStore((s) => s.removeCard)
  const list = Object.values(cards).sort((a, b) => a.due - b.due)
  if (!list.length) return <p className="text-center font-bold text-ink2 py-8">Your deck is empty. Finish a lesson or save words by tapping them.</p>
  return (
    <ul className="card divide-y-2 divide-line overflow-hidden">
      {list.map((c) => (
        <li key={c.id} className="flex items-center gap-3 px-3 py-2.5">
          <SpeakButton text={spoken(c.es)} size="sm" />
          <div className="min-w-0 flex-1">
            <div className="font-black">
              <Es text={c.es} />
            </div>
            <div className="text-sm font-bold text-ink2 truncate">{c.en}</div>
          </div>
          <div className="w-16" title={`Interval: ${c.interval} days`}>
            <div className="h-2 rounded-full bg-line overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${Math.max(8, strength(c) * 100)}%`, background: strength(c) >= 1 ? 'var(--ok)' : strength(c) > 0.3 ? 'var(--info)' : 'var(--fire)' }} />
            </div>
            <div className="text-[0.65rem] font-bold text-ink3 text-right mt-0.5">{c.interval ? `${c.interval}d` : 'new'}</div>
          </div>
          <button type="button" className="p-2 rounded-lg text-ink3 hover:text-bad" onClick={() => removeCard(c.id)} aria-label={`Remove ${c.es}`}>
            <Trash2 className="w-4 h-4" />
          </button>
        </li>
      ))}
    </ul>
  )
}
