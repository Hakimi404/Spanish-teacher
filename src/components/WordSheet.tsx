import { useMemo } from 'react'
import { useNavigate } from 'react-router'
import { BookOpen, Check, ExternalLink, Search, Star } from 'lucide-react'
import { Sheet } from './Sheet'
import { SpeakButton } from './SpeakButton'
import { Es } from './Es'
import { useUI } from '../store/ui'
import { cardId, useStore } from '../store/store'
import { lookupWord, examplesFor, genderOf } from '../content/dictionary'
import { syllabify, stressIndex, stripArticle } from '../lib/spanish'
import { uniqBy, cx } from '../lib/util'

export function Syllables({ word, className }: { word: string; className?: string }) {
  const syl = syllabify(word)
  const st = stressIndex(word)
  return (
    <span className={cx('inline-flex flex-wrap items-center gap-1', className)} aria-label={`Syllables: ${syl.join('-')}`}>
      {syl.map((s, i) => (
        <span key={i} className={cx('rounded-lg px-1.5 py-0.5 text-sm font-black', i === st ? 'bg-brand text-brand-ink' : 'bg-bg2 text-ink2')}>
          {s}
        </span>
      ))}
    </span>
  )
}

export function WordSheet() {
  const sheet = useUI((s) => s.sheet)
  const close = useUI((s) => s.closeWord)
  if (!sheet) return null
  return <WordCard word={sheet.word} context={sheet.context} prev={sheet.prev} onClose={close} />
}

function WordCard({ word, context, prev, onClose }: { word: string; context?: string; prev?: string; onClose: () => void }) {
  const navigate = useNavigate()
  const cards = useStore((s) => s.cards)
  const saveWord = useStore((s) => s.saveWord)
  const toast = useUI((s) => s.toast)
  const info = useMemo(() => lookupWord(word, prev), [word, prev])
  const entries = uniqBy(info.entries, (e) => `${e.es}|${e.en}`).slice(0, 3)
  const main = entries[0]
  // a reflexive-only match ("casa" → casarse) is noise when the word has its own meaning
  const verb = info.verb && !(info.verb.weak && entries.length) ? info.verb : undefined
  const lessonWordFirst = main && (main.kind === 'word' || main.kind === 'phrase')
  const examples = useMemo(() => examplesFor(main?.es ?? verb?.inf ?? word, 2), [main, verb, word])
  const saveTarget = main ?? (verb ? { es: verb.inf, en: verb.en } : null)
  const saved = saveTarget ? !!cards[cardId(saveTarget.es)] : false
  const multiWordContext = context && context.trim().split(/\s+/).length > 1 && context.trim() !== word

  const go = (to: string) => {
    onClose()
    navigate(to)
  }

  const verbCard = verb && (
    <button type="button" onClick={() => go(`/verbs/${encodeURIComponent(verb.inf)}`)} className="w-full text-left card card-press p-3 flex items-center gap-3">
      <span className="chip bg-vio-soft text-vio">verb</span>
      <div className="min-w-0 flex-1">
        <div className="font-black">
          <span lang="es">{verb.inf}</span> <span className="text-ink2 font-bold">— {verb.en}</span>
        </div>
        <div className="text-sm text-ink2">{verb.label}</div>
      </div>
      <BookOpen className="w-5 h-5 text-ink3" />
    </button>
  )

  return (
    <Sheet onClose={onClose} label={`Word: ${word}`}>
      <div className="p-5 pt-4 sm:pt-6 space-y-4">
        <div className="flex items-center gap-3 pr-8">
          <SpeakButton text={word} size="lg" variant="brand" />
          <SpeakButton text={word} slow size="md" variant="soft" />
          <div className="min-w-0">
            <div lang="es" className="text-3xl font-black leading-tight break-words">
              {word}
            </div>
            <Syllables word={word} className="mt-1" />
          </div>
        </div>

        {!lessonWordFirst && verbCard}

        {entries.length > 0 ? (
          <div className="space-y-2">
            {entries.map((e) => {
              const g = genderOf(e.es)
              return (
                <div key={e.id} className="rounded-2xl bg-bg2 px-4 py-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span lang="es" className="font-black text-lg">
                      {e.es}
                    </span>
                    {g && <span className={cx('chip', g === 'm' ? 'bg-info-soft text-info-ink' : 'bg-bad-soft text-bad-ink')}>{g === 'm' ? 'masculine' : 'feminine'}</span>}
                    {e.level && <span className="chip bg-card text-ink2 border-2 border-line">{e.level}</span>}
                  </div>
                  <div className="text-ink2 font-bold">{e.en}</div>
                  {e.note && <div className="text-sm text-ink3 mt-0.5">{e.note}</div>}
                </div>
              )
            })}
          </div>
        ) : (
          !verb && <p className="text-ink2">No saved translation for this word yet — but you can still hear it, and look it up below.</p>
        )}

        {lessonWordFirst && verbCard}

        {examples.length > 0 && (
          <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-wider text-ink3">Examples</div>
            {examples.map((x, i) => (
              <div key={i} className="flex items-start gap-2">
                <SpeakButton text={x.es} size="sm" />
                <div>
                  <div className="font-extrabold">
                    <Es text={x.es} />
                  </div>
                  <div className="text-sm text-ink2">{x.en}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {multiWordContext && (
          <div className="rounded-2xl border-2 border-dashed border-line p-3 flex items-start gap-2">
            <SpeakButton text={context!} size="sm" />
            <div className="text-sm">
              <div className="text-ink3 font-black uppercase text-[0.7rem] tracking-wider">Whole sentence</div>
              <div lang="es" className="font-bold">
                {context}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2 pt-1">
          {saveTarget ? (
            <button
              type="button"
              disabled={saved}
              onClick={() => {
                if (saveWord(saveTarget.es, saveTarget.en)) toast({ emoji: '⭐', title: 'Saved to your review deck', body: saveTarget.es, tone: 'ok' })
              }}
              className="btn btn-secondary btn-sm"
            >
              {saved ? <Check className="w-4 h-4" /> : <Star className="w-4 h-4" />}
              {saved ? 'In review' : 'Save word'}
            </button>
          ) : (
            <span />
          )}
          <button type="button" onClick={() => go(`/words?q=${encodeURIComponent(stripArticle(main?.es ?? word))}`)} className="btn btn-secondary btn-sm">
            <Search className="w-4 h-4" /> Dictionary
          </button>
        </div>
        <a
          href={`https://www.wordreference.com/es/en/translation.asp?spen=${encodeURIComponent(word.toLowerCase())}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 text-sm font-bold text-info hover:underline"
        >
          More on WordReference <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Sheet>
  )
}
