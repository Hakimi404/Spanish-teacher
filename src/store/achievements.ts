import type { PersistedState } from './store'

export interface Achievement {
  id: string
  emoji: string
  title: string
  desc: string
  check: (s: PersistedState) => boolean
}

const totalXP = (s: PersistedState) => Object.values(s.xp).reduce((a, b) => a + b, 0)
const words = (s: PersistedState) => Object.keys(s.cards).length
const done = (s: PersistedState, id: string) => !!s.progress[id]?.done

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first', emoji: '👣', title: '¡Primer paso!', desc: 'Finish your first lesson', check: (s) => s.stats.lessons >= 1 },
  { id: 'streak3', emoji: '🔥', title: 'En racha', desc: 'Reach a 3-day streak', check: (s) => s.streak.longest >= 3 },
  { id: 'streak7', emoji: '📅', title: 'Una semana', desc: 'Reach a 7-day streak', check: (s) => s.streak.longest >= 7 },
  { id: 'streak30', emoji: '🌙', title: 'Un mes entero', desc: 'Reach a 30-day streak', check: (s) => s.streak.longest >= 30 },
  { id: 'streak100', emoji: '💯', title: 'Cien días', desc: 'Reach a 100-day streak', check: (s) => s.streak.longest >= 100 },
  { id: 'streak180', emoji: '🏆', title: 'Medio año', desc: 'Reach a 180-day streak', check: (s) => s.streak.longest >= 180 },
  { id: 'words50', emoji: '🌱', title: 'Primeras palabras', desc: 'Learn 50 words', check: (s) => words(s) >= 50 },
  { id: 'words250', emoji: '🌿', title: 'Vocabulario', desc: 'Learn 250 words', check: (s) => words(s) >= 250 },
  { id: 'words750', emoji: '🌳', title: 'Gran vocabulario', desc: 'Learn 750 words', check: (s) => words(s) >= 750 },
  { id: 'words1500', emoji: '📚', title: 'Diccionario andante', desc: 'Learn 1,500 words', check: (s) => words(s) >= 1500 },
  { id: 'week1', emoji: '⭐', title: 'Semana uno', desc: 'Complete week 1', check: (s) => done(s, 'w01d7') },
  { id: 'a1', emoji: '🥉', title: 'Nivel A1', desc: 'Pass the A1 checkpoint', check: (s) => done(s, 'w09d7') },
  { id: 'a2', emoji: '🥈', title: 'Nivel A2', desc: 'Pass the A2 checkpoint', check: (s) => done(s, 'w17d7') },
  { id: 'b1', emoji: '🥇', title: 'Nivel B1', desc: 'Pass the B1 checkpoint', check: (s) => done(s, 'w26d7') },
  { id: 'perfect', emoji: '💎', title: '¡Perfecto!', desc: 'Finish a lesson with no mistakes', check: (s) => s.stats.perfect >= 1 },
  { id: 'perfect10', emoji: '👑', title: 'Perfeccionista', desc: '10 perfect lessons', check: (s) => s.stats.perfect >= 10 },
  { id: 'reviews100', emoji: '🧠', title: 'Memoria', desc: 'Do 100 flashcard reviews', check: (s) => s.stats.reviews >= 100 },
  { id: 'reviews1000', emoji: '🐘', title: 'Memoria de elefante', desc: 'Do 1,000 flashcard reviews', check: (s) => s.stats.reviews >= 1000 },
  { id: 'speak20', emoji: '🎙️', title: 'Valiente', desc: 'Say 20 phrases into the microphone', check: (s) => s.stats.spoken >= 20 },
  { id: 'stories5', emoji: '📖', title: 'Lector', desc: 'Read 5 stories', check: (s) => Object.keys(s.stories).length >= 5 },
  { id: 'stories20', emoji: '📜', title: 'Ratón de biblioteca', desc: 'Read 20 stories', check: (s) => Object.keys(s.stories).length >= 20 },
  { id: 'xp1000', emoji: '⚡', title: 'Mil puntos', desc: 'Earn 1,000 XP', check: (s) => totalXP(s) >= 1000 },
  { id: 'xp5000', emoji: '🚀', title: 'Cinco mil', desc: 'Earn 5,000 XP', check: (s) => totalXP(s) >= 5000 },
]

export const ACH_BY_ID = new Map(ACHIEVEMENTS.map((a) => [a.id, a]))
