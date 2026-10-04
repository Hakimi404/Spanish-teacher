import { Fragment, useId, useMemo, type KeyboardEvent, type ReactNode } from 'react'
import { tokenize } from '../lib/spanish'
import { speak } from '../lib/speech'
import { useUI } from '../store/ui'
import { cx } from '../lib/util'
import { SpeakButton } from './SpeakButton'

/** Text may contain [brackets] to highlight endings: "habl[o]". */
function parseMarks(text: string): { clean: string; marks: boolean[] } {
  let clean = ''
  const marks: boolean[] = []
  let on = false
  for (const ch of text) {
    if (ch === '[') {
      on = true
      continue
    }
    if (ch === ']') {
      on = false
      continue
    }
    clean += ch
    marks.push(on)
  }
  return { clean, marks }
}

function renderRuns(text: string, start: number, marks: boolean[]): ReactNode {
  if (!marks.some(Boolean)) return text
  const out: ReactNode[] = []
  let buf = ''
  let cur = marks[start] ?? false
  for (let i = 0; i < text.length; i++) {
    const m = marks[start + i] ?? false
    if (m !== cur) {
      out.push(cur ? <span key={i} className="es-hl">{buf}</span> : buf)
      buf = ''
      cur = m
    }
    buf += text[i]
  }
  out.push(cur ? <span key="end" className="es-hl">{buf}</span> : buf)
  return out
}

interface EsProps {
  text: string
  /** show a speaker button that plays the whole text */
  play?: boolean
  className?: string
  /** no dotted underline (still tappable) */
  plain?: boolean
  /** disable word taps (e.g. inside buttons) */
  static?: boolean
}

/** Spanish text where every word can be tapped to hear it and see its meaning. */
export function Es({ text, play, className, plain, static: isStatic }: EsProps) {
  const uid = useId()
  const openWord = useUI((s) => s.openWord)
  const activeKey = useUI((s) => s.sheet?.key)
  const { clean, marks } = useMemo(() => parseMarks(text), [text])
  const toks = useMemo(() => tokenize(clean), [clean])

  if (isStatic) {
    return (
      <span lang="es" className={className}>
        {renderRuns(clean, 0, marks)}
      </span>
    )
  }

  const tap = (word: string, key: string, i: number) => {
    speak(word, { id: `w:${key}` })
    let prev: string | undefined
    for (let j = i - 1; j >= 0; j--) {
      if (toks[j].word) {
        prev = toks[j].text
        break
      }
    }
    openWord(word, clean, key, prev)
  }

  return (
    <span lang="es" className={cx(plain && 'es-plain', className)}>
      {play && <SpeakButton text={clean} size="sm" className="mr-1.5 inline-flex align-[-0.3em]" />}
      {toks.map((t, i) => {
        if (!t.word) return <Fragment key={i}>{renderRuns(t.text, t.start, marks)}</Fragment>
        const key = `${uid}-${i}`
        return (
          <span
            key={i}
            role="button"
            tabIndex={0}
            className="es-word"
            data-active={activeKey === key}
            onClick={(e) => {
              e.stopPropagation()
              tap(t.text, key, i)
            }}
            onKeyDown={(e: KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                tap(t.text, key, i)
              }
            }}
          >
            {renderRuns(t.text, t.start, marks)}
          </span>
        )
      })}
    </span>
  )
}
