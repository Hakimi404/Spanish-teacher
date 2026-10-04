import { Link } from 'react-router'
import { AudioLines, BookOpen, ChevronRight, Ear, Hash, Layers, Mic, Puzzle, Repeat, Table2, TriangleAlert } from 'lucide-react'
import type { ReactNode } from 'react'
import { useStore, dueCards } from '../store/store'
import { PageHeader } from '../components/Bits'
import { recognitionSupported } from '../lib/recognition'

function Tile({ to, icon, title, sub, tone, badge }: { to: string; icon: ReactNode; title: string; sub: string; tone: string; badge?: ReactNode }) {
  return (
    <Link to={to} className="card card-press p-4 flex items-center gap-3">
      <span className="grid place-items-center w-12 h-12 rounded-2xl flex-none" style={{ background: `var(--${tone}-soft)`, color: `var(--${tone})` }}>
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-black">{title}</span>
        <span className="block text-sm font-bold text-ink2">{sub}</span>
      </span>
      {badge}
      <ChevronRight className="w-5 h-5 text-ink3 flex-none" />
    </Link>
  )
}

export default function Practice() {
  const cards = useStore((s) => s.cards)
  const mistakes = useStore((s) => s.mistakes)
  const due = dueCards(cards).length
  const nMistakes = Object.keys(mistakes).length
  return (
    <div>
      <PageHeader title="Practice" sub="Extra training — every session earns XP and counts for your streak." />
      <h2 className="text-sm font-black uppercase tracking-wider text-ink3 mb-2">Memory</h2>
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <Tile to="/review" icon={<Layers className="w-6 h-6" />} title="Review flashcards" sub={due ? `${due} due now` : 'Spaced repetition deck'} tone="vio" badge={due ? <span className="chip bg-vio text-white">{due}</span> : undefined} />
        <Tile
          to="/session/mistakes"
          icon={<TriangleAlert className="w-6 h-6" />}
          title="Fix my mistakes"
          sub={nMistakes ? `${nMistakes} word${nMistakes > 1 ? 's' : ''} to fix` : 'Nothing to fix right now'}
          tone="bad"
          badge={nMistakes ? <span className="chip bg-bad text-white">{nMistakes}</span> : undefined}
        />
        <Tile to="/session/words" icon={<Repeat className="w-6 h-6" />} title="Word drill" sub="Random words you’ve learned" tone="ok" />
        <Tile to="/numbers" icon={<Hash className="w-6 h-6" />} title="Numbers trainer" sub="Hear a number, type it" tone="brand" />
      </div>
      <h2 className="text-sm font-black uppercase tracking-wider text-ink3 mb-2">Listening & speaking</h2>
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <Tile to="/pronunciation" icon={<AudioLines className="w-6 h-6" />} title="Pronunciation lab" sub="Sounds, minimal pairs, stress, tongue twisters" tone="info" />
        <Tile to="/session/listening" icon={<Ear className="w-6 h-6" />} title="Listening drill" sub="Listen, choose and write" tone="info" />
        <Tile to="/session/speaking" icon={<Mic className="w-6 h-6" />} title="Speaking drill" sub={recognitionSupported ? 'Say phrases, get a score' : 'Needs Chrome, Edge or Safari'} tone="fire" />
        <Tile to="/stories" icon={<BookOpen className="w-6 h-6" />} title="Stories" sub="26 graded stories with audio" tone="fire" />
      </div>
      <h2 className="text-sm font-black uppercase tracking-wider text-ink3 mb-2">Grammar</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        <Tile to="/train/verbs" icon={<Puzzle className="w-6 h-6" />} title="Verb trainer" sub="Conjugation drills by tense" tone="vio" />
        <Tile to="/verbs" icon={<Table2 className="w-6 h-6" />} title="Verb conjugator" sub="Every tense of 350+ verbs" tone="vio" />
        <Tile to="/grammar" icon={<BookOpen className="w-6 h-6" />} title="Grammar reference" sub="All explanations, A1 → B1" tone="ok" />
      </div>
    </div>
  )
}
