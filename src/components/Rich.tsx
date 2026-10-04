import { Fragment, useMemo, type ReactNode } from 'react'
import { Lightbulb, TriangleAlert } from 'lucide-react'
import { Es } from './Es'
import { SpeakButton } from './SpeakButton'
import { useStore } from '../store/store'
import { cx } from '../lib/util'

type CallKind = 'de' | 'ar' | 'tip' | 'warn' | 'es'
type Block =
  | { t: 'h3' | 'h4' | 'p'; text: string }
  | { t: 'ul' | 'ol'; items: string[] }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'ex'; items: { es: string; en: string }[] }
  | { t: 'call'; kind: CallKind; text: string }

function parseBlocks(src: string): Block[] {
  const lines = src.split('\n')
  const out: Block[] = []
  let para: string[] = []
  const flush = () => {
    if (para.length) out.push({ t: 'p', text: para.join(' ') })
    para = []
  }
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].trim()
    if (!l) {
      flush()
      continue
    }
    if (l.startsWith('### ')) {
      flush()
      out.push({ t: 'h4', text: l.slice(4) })
      continue
    }
    if (l.startsWith('## ')) {
      flush()
      out.push({ t: 'h3', text: l.slice(3) })
      continue
    }
    const call = /^!(de|ar|tip|warn|es):\s*(.*)$/.exec(l)
    if (call) {
      flush()
      out.push({ t: 'call', kind: call[1] as CallKind, text: call[2] })
      continue
    }
    if (l.startsWith('> ')) {
      flush()
      const body = l.slice(2)
      const k = body.indexOf(' = ')
      const item = k < 0 ? { es: body, en: '' } : { es: body.slice(0, k).trim(), en: body.slice(k + 3).trim() }
      const last = out[out.length - 1]
      if (last?.t === 'ex') last.items.push(item)
      else out.push({ t: 'ex', items: [item] })
      continue
    }
    if (l.startsWith('|')) {
      flush()
      const rows: string[][] = []
      let j = i
      while (j < lines.length && lines[j].trim().startsWith('|')) {
        const cells = lines[j]
          .trim()
          .replace(/^\|/, '')
          .replace(/\|$/, '')
          .split('|')
          .map((c) => c.trim())
        if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(cells)
        j++
      }
      i = j - 1
      out.push({ t: 'table', head: rows[0] ?? [], rows: rows.slice(1) })
      continue
    }
    if (l.startsWith('- ')) {
      flush()
      const last = out[out.length - 1]
      if (last?.t === 'ul') last.items.push(l.slice(2))
      else out.push({ t: 'ul', items: [l.slice(2)] })
      continue
    }
    if (/^\d+\.\s/.test(l)) {
      flush()
      const txt = l.replace(/^\d+\.\s/, '')
      const last = out[out.length - 1]
      if (last?.t === 'ol') last.items.push(txt)
      else out.push({ t: 'ol', items: [txt] })
      continue
    }
    para.push(l)
  }
  flush()
  return out
}

const ARABIC_RE = /([؀-ۿ][؀-ۿً-ٰٟ ،]*[؀-ۿً-ٟ]|[؀-ۿ])/g

function arabicRuns(text: string, key: string): ReactNode[] {
  const parts = text.split(ARABIC_RE)
  return parts.map((p, i) =>
    i % 2 === 1 ? (
      <span key={`${key}-a${i}`} lang="ar" dir="rtl" className="text-[1.08em]">
        {p}
      </span>
    ) : (
      <Fragment key={`${key}-t${i}`}>{p}</Fragment>
    ),
  )
}

/** Inline markup: **bold**, *italic*, {Spanish}, `code`, Arabic runs. */
export function inline(text: string, key = 'i'): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\{[^}]+\}|`[^`]+`|\*[^*\s][^*]*\*)/g)
  return parts.map((p, i) => {
    const k = `${key}-${i}`
    if (!p) return null
    if (p.startsWith('**') && p.endsWith('**') && p.length > 4) return <strong key={k}>{inline(p.slice(2, -2), k)}</strong>
    if (p.startsWith('{') && p.endsWith('}')) return <Es key={k} text={p.slice(1, -1)} className="font-extrabold" />
    if (p.startsWith('`') && p.endsWith('`')) return <code key={k}>{p.slice(1, -1)}</code>
    if (p.startsWith('*') && p.endsWith('*') && p.length > 2) return <em key={k}>{inline(p.slice(1, -1), k)}</em>
    return <Fragment key={k}>{arabicRuns(p, k)}</Fragment>
  })
}

const CALL_STYLE: Record<CallKind, { box: string; badge: string; label: string; icon: ReactNode }> = {
  de: { box: 'border-line bg-bg2', badge: 'bg-ink text-brand', label: 'For German speakers', icon: 'DE' },
  ar: { box: 'border-a1/30 bg-a1-soft', badge: 'bg-a1 text-white', label: 'For Arabic speakers', icon: <span lang="ar">ع</span> },
  tip: { box: 'border-brand/40 bg-brand-soft', badge: 'bg-brand text-brand-ink', label: 'Tip', icon: <Lightbulb className="w-4 h-4" /> },
  warn: { box: 'border-bad/30 bg-bad-soft', badge: 'bg-bad text-white', label: 'Careful', icon: <TriangleAlert className="w-4 h-4" /> },
  es: { box: 'border-info/30 bg-info-soft', badge: 'bg-info text-white', label: 'Spain & culture', icon: 'ES' },
}

export function Callout({ kind, children }: { kind: CallKind; children: ReactNode }) {
  const s = CALL_STYLE[kind]
  return (
    <div className={cx('callout', s.box)}>
      <span className={cx('callout-badge', s.badge)}>{s.icon}</span>
      <div className="min-w-0">
        <div className="text-[0.72rem] font-black uppercase tracking-wider text-ink2">{s.label}</div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export function ExampleRow({ es, en }: { es: string; en: string }) {
  return (
    <div className="example">
      <SpeakButton text={es} size="sm" className="mt-0.5" />
      <div className="min-w-0">
        <div className="font-extrabold text-[1.05rem] leading-snug">
          <Es text={es} />
        </div>
        {en && <div className="text-ink2 text-[0.92rem] leading-snug">{inline(en)}</div>}
      </div>
    </div>
  )
}

export function Rich({ text, className }: { text: string; className?: string }) {
  const blocks = useMemo(() => parseBlocks(text), [text])
  const tipsDe = useStore((s) => s.settings.tipsDe)
  const tipsAr = useStore((s) => s.settings.tipsAr)
  return (
    <div className={cx('rich', className)}>
      {blocks.map((b, i) => {
        const k = `b${i}`
        switch (b.t) {
          case 'h3':
            return <h3 key={k}>{inline(b.text, k)}</h3>
          case 'h4':
            return <h4 key={k}>{inline(b.text, k)}</h4>
          case 'p':
            return <p key={k}>{inline(b.text, k)}</p>
          case 'ul':
            return (
              <ul key={k}>
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it, `${k}-${j}`)}</li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={k}>
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it, `${k}-${j}`)}</li>
                ))}
              </ol>
            )
          case 'table': {
            const hasHead = b.head.some((c) => c)
            return (
              <div key={k} className="tbl-wrap">
                <table>
                  {hasHead && (
                    <thead>
                      <tr>
                        {b.head.map((c, j) => (
                          <th key={j}>{inline(c, `${k}-h${j}`)}</th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, m) => (
                          <td key={m}>{inline(c, `${k}-${j}-${m}`)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          }
          case 'ex':
            return (
              <div key={k} className="space-y-2">
                {b.items.map((it, j) => (
                  <ExampleRow key={j} es={it.es} en={it.en} />
                ))}
              </div>
            )
          case 'call':
            if ((b.kind === 'de' && !tipsDe) || (b.kind === 'ar' && !tipsAr)) return null
            return (
              <Callout key={k} kind={b.kind}>
                {inline(b.text, k)}
              </Callout>
            )
        }
      })}
    </div>
  )
}
