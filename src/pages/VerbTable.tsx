import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'
import { ChevronDown, Puzzle } from 'lucide-react'
import { conjugate, irregularMask, PERSONS, IMP_PERSONS, TENSES, type TenseId } from '../lib/conjugate'
import { verbInfo, verbTags } from '../content/verbs'
import { PageHeader, LevelChip } from '../components/Bits'
import { SpeakButton } from '../components/SpeakButton'
import { speak } from '../lib/speech'
import { cx } from '../lib/util'
import type { Level } from '../content/types'

const GROUPS: { level: Level | 'B2'; title: string }[] = [
  { level: 'A1', title: 'A1 — the present' },
  { level: 'A2', title: 'A2 — past, future & commands' },
  { level: 'B1', title: 'B1 — conditional & subjunctive' },
  { level: 'B2', title: 'More (B2)' },
]

export default function VerbTable() {
  const { inf = '' } = useParams()
  const verb = decodeURIComponent(inf)
  const info = verbInfo(verb)
  const c = useMemo(() => {
    try {
      return conjugate(verb)
    } catch {
      return null
    }
  }, [verb])
  const mask = useMemo(() => (c ? irregularMask(c) : {}), [c])
  const [showB2, setShowB2] = useState(false)

  if (!c) return <PageHeader title="Verb not found" back="/verbs" />
  const tags = info ? verbTags(info) : []

  return (
    <div>
      <PageHeader
        back
        title={
          <span className="flex items-center gap-3">
            <SpeakButton text={verb} size="md" variant="brand" />
            <span lang="es">{verb}</span>
          </span>
        }
        sub={info?.en}
        right={
          <Link to={`/train/verbs?verb=${encodeURIComponent(verb)}`} className="btn btn-primary btn-sm">
            <Puzzle className="w-4 h-4" /> Train
          </Link>
        }
      />
      <div className="flex flex-wrap gap-1.5 mb-4">
        {info && <LevelChip level={info.level} />}
        {tags.map((t) => (
          <span key={t} className={cx('chip', t === 'irregular' ? 'bg-bad-soft text-bad-ink' : 'bg-bg2 text-ink2')}>
            {t}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Mini label="Gerundio (-ing)" value={c.ger} />
        <Mini label="Participio" value={c.part} />
      </div>
      <p className="text-sm font-bold text-ink3 mb-5">
        <span className="es-hl">Red</span> = irregular form. Tap any form to hear it.
      </p>

      {GROUPS.map((g) => {
        const tenses = TENSES.filter((t) => t.level === g.level)
        if (g.level === 'B2' && !showB2)
          return (
            <button key={g.level} type="button" onClick={() => setShowB2(true)} className="btn btn-secondary w-full mt-2">
              <ChevronDown className="w-4 h-4" /> Show B2 tenses
            </button>
          )
        return (
          <section key={g.level} className="mb-8">
            <h2 className="text-lg font-black mb-3">{g.title}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {tenses.map((t) => (
                <TenseCard key={t.id} id={t.id} forms={c.forms[t.id]} irregular={mask[t.id]} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <button type="button" onClick={() => speak(value)} className="card p-3 text-left">
      <div className="text-xs font-black uppercase tracking-wider text-ink3">{label}</div>
      <div lang="es" className="font-black text-lg">
        {value}
      </div>
    </button>
  )
}

function TenseCard({ id, forms, irregular }: { id: TenseId; forms: string[]; irregular?: boolean[] }) {
  const t = TENSES.find((x) => x.id === id)!
  const isImp = id === 'imp' || id === 'impneg'
  return (
    <div className="card overflow-hidden">
      <div className="px-4 pt-3 pb-2 border-b-2 border-line bg-bg2">
        <div className="flex items-center gap-2">
          <span lang="es" className="font-black">
            {t.es}
          </span>
        </div>
        <div className="text-xs font-bold text-ink3">
          {t.en} · e.g. <span lang="es">{t.example}</span>
        </div>
      </div>
      <table className="w-full text-[0.98rem]">
        <tbody>
          {forms.map((f, p) =>
            !f ? null : (
              <tr key={p} className="border-t border-line first:border-t-0">
                <td className="pl-4 pr-2 py-1.5 text-ink3 font-bold text-sm whitespace-nowrap">{isImp ? IMP_PERSONS[p] : PERSONS[p]}</td>
                <td className="pr-3 py-1.5 w-full">
                  <button type="button" lang="es" onClick={() => speak(f)} className={cx('font-black text-left hover:underline', irregular?.[p] && 'es-hl')}>
                    {f}
                  </button>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  )
}
