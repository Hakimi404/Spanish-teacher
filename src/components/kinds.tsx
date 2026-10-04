import { AudioLines, Crown, Globe, Layers, MessageCircle, Puzzle, Star } from 'lucide-react'
import type { LessonKind, PlanKind } from '../content/types'
import type { LucideIcon } from 'lucide-react'

export const KIND_META: Record<LessonKind, { label: string; icon: LucideIcon; color: string; soft: string; minutes: number }> = {
  pron: { label: 'Pronunciation', icon: AudioLines, color: 'var(--info)', soft: 'var(--info-soft)', minutes: 15 },
  grammar: { label: 'Grammar', icon: Puzzle, color: 'var(--vio)', soft: 'var(--vio-soft)', minutes: 20 },
  vocab: { label: 'Vocabulary', icon: Layers, color: 'var(--ok)', soft: 'var(--ok-soft)', minutes: 15 },
  talk: { label: 'Conversation', icon: MessageCircle, color: 'var(--fire)', soft: 'var(--fire-soft)', minutes: 15 },
  culture: { label: 'Culture', icon: Globe, color: 'var(--bad)', soft: 'var(--bad-soft)', minutes: 15 },
}

export const PLAN_META: Record<Exclude<PlanKind, 'lesson'>, { label: string; icon: LucideIcon; color: string; soft: string; minutes: number }> = {
  review: { label: 'Weekly review', icon: Star, color: 'var(--brand-lip)', soft: 'var(--brand-soft)', minutes: 25 },
  checkpoint: { label: 'Level checkpoint', icon: Crown, color: 'var(--brand-lip)', soft: 'var(--brand-soft)', minutes: 35 },
}

export function KindBadge({ kind, className }: { kind: LessonKind; className?: string }) {
  const m = KIND_META[kind]
  const Icon = m.icon
  return (
    <span className={`chip ${className ?? ''}`} style={{ background: m.soft, color: m.color }}>
      <Icon className="w-3.5 h-3.5" strokeWidth={2.6} />
      {m.label}
    </span>
  )
}
