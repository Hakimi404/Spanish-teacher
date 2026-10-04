import confetti from 'canvas-confetti'
import { sfx } from './sound'
import { useUI } from '../store/ui'
import { ACH_BY_ID } from '../store/achievements'
import type { XpResult } from '../store/store'

const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export function burst(power = 1) {
  if (reduced()) return
  const colors = ['#FFC21A', '#E5383B', '#3DBE5B', '#2D8CF0', '#FF8A1F']
  confetti({ particleCount: Math.round(90 * power), spread: 75, startVelocity: 42, origin: { y: 0.65 }, colors, disableForReducedMotion: true })
  setTimeout(() => confetti({ particleCount: Math.round(50 * power), spread: 110, origin: { y: 0.6 }, colors, disableForReducedMotion: true }), 180)
}

/** Toasts + sounds after XP is earned (streak extended, goal reached, achievements). */
export function announce(r: XpResult) {
  const { toast } = useUI.getState()
  if (r.streakExtended && r.streak > 1) {
    sfx.streak()
    toast({ emoji: '🔥', title: `${r.streak}-day streak!`, body: '¡Sigue así! Keep it going.', tone: 'fire' })
  } else if (r.streakExtended && r.streak === 1) {
    toast({ emoji: '🔥', title: 'Streak started!', body: 'Come back tomorrow to keep it alive.', tone: 'fire' })
  }
  if (r.goalReached) {
    toast({ emoji: '🎯', title: 'Daily goal reached!', body: '¡Objetivo cumplido! Great work today.', tone: 'ok' })
    burst(0.8)
  }
  for (const id of r.unlocked) {
    const a = ACH_BY_ID.get(id)
    if (a) toast({ emoji: a.emoji, title: a.title, body: `Achievement unlocked · ${a.desc}`, tone: 'gold' })
  }
}
