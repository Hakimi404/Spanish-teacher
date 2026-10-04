import { describe, expect, it } from 'vitest'
import './verbs'
import { WEEKS, LESSONS, PLAN, STORIES } from './index'
import { lookupWord, searchEntries } from './dictionary'
import { lessonExercises, quizExercises } from '../exercises/generate'
import { clean } from '../lib/spanish'

describe('course structure', () => {
  it('has consecutive weeks with 6 lessons each', () => {
    WEEKS.forEach((w, i) => {
      expect(w.n).toBe(i + 1)
      expect(w.lessons.length, `week ${w.n}`).toBe(6)
      expect(w.cando.length, `week ${w.n} can-do`).toBeGreaterThanOrEqual(3)
    })
    expect(PLAN.length).toBe(WEEKS.length * 7)
  })
  it('has unique lesson ids', () => {
    expect(new Set(LESSONS.map((l) => l.id)).size).toBe(LESSONS.length)
  })
})

describe.each(LESSONS.map((l) => [l.id, l] as const))('lesson %s', (_id, l) => {
  it('has enough material', () => {
    expect(l.title.length).toBeGreaterThan(2)
    expect(l.goal.length).toBeGreaterThan(5)
    expect(l.body.length).toBeGreaterThan(200)
    expect(l.words.length).toBeGreaterThanOrEqual(5)
    expect(l.phrases.length).toBeGreaterThanOrEqual(4)
    expect(l.drills.length).toBeGreaterThanOrEqual(4)
  })
  it('has well-formed markup', () => {
    let depth = 0
    for (const ch of l.body) {
      if (ch === '{') depth++
      if (ch === '}') depth--
      expect(depth).toBeGreaterThanOrEqual(0)
      expect(depth).toBeLessThanOrEqual(1)
    }
    expect(depth).toBe(0)
    expect(l.body).not.toMatch(/\{\s*\}/)
  })
  it('has unique words with translations', () => {
    const seen = new Set<string>()
    for (const w of l.words) {
      expect(w.en, w.es).toBeTruthy()
      // accent-sensitive: "para que" and "¿para qué?" are different words
      const k = clean(w.es)
      expect(seen.has(k), `duplicate word ${w.es}`).toBe(false)
      seen.add(k)
    }
  })
  it('has valid drills', () => {
    for (const d of l.drills) {
      expect(d.q, d.q).toContain('___')
      expect(d.a, d.q).toBeTruthy()
      expect(d.opts.length, d.q).toBeGreaterThanOrEqual(2)
      expect(d.opts, d.q).not.toContain(d.a)
      expect(new Set(d.opts).size, d.q).toBe(d.opts.length)
      expect(d.q.split('___').length, d.q).toBe(2)
    }
  })
  it('generates a full exercise session', () => {
    const ex = lessonExercises(l, { speaking: false })
    expect(ex.length).toBeGreaterThanOrEqual(9)
    for (const e of ex) {
      if (e.kind === 'mc' || e.kind === 'listen' || e.kind === 'fill') {
        expect(e.options).toContain(e.answer)
        expect(new Set(e.options).size).toBe(e.options.length)
      }
      if (e.kind === 'build') expect(e.answer.every((t) => e.bank.includes(t))).toBe(true)
    }
  })
})

describe('stories', () => {
  it.each(STORIES.map((s) => [s.id, s] as const))('%s is complete', (_id, s) => {
    expect(s.paras.length).toBeGreaterThanOrEqual(5)
    for (const p of s.paras) {
      expect(p.es).toBeTruthy()
      expect(p.en, p.es).toBeTruthy()
    }
    expect(s.questions.length).toBeGreaterThanOrEqual(3)
    for (const q of s.questions) {
      expect(q.opts).not.toContain(q.a)
      expect(q.opts.length).toBeGreaterThanOrEqual(2)
    }
  })
})

describe('quizzes & dictionary', () => {
  it('builds weekly quizzes', () => {
    for (const w of WEEKS) expect(quizExercises(w.lessons, 15, { speaking: false }).length).toBeGreaterThanOrEqual(12)
  })
  it('looks up verb forms and inflections', () => {
    expect(lookupWord('tengo').verb?.inf).toBe('tener')
    expect(lookupWord('hablamos').verb?.inf).toBe('hablar')
    expect(lookupWord('tuviera').verb?.inf).toBe('tener')
    expect(lookupWord('perro').entries[0]?.en).toBe('dog')
    expect(lookupWord('perros').entries[0]?.en).toBe('dog')
    expect(lookupWord('alemana').entries[0]?.es).toContain('alemán')
  })
  it('uses the previous word to pick reflexive verbs', () => {
    expect(lookupWord('casa').verb?.weak).toBe(true)
    expect(lookupWord('casa').entries[0]?.en).toContain('house')
    expect(lookupWord('casa', 'la').verb?.weak).toBe(true)
    expect(lookupWord('levanto', 'me').verb?.inf).toBe('levantarse')
    expect(lookupWord('levanto', 'me').verb?.weak).toBe(false)
  })
  it('searches both languages, accent-insensitive', () => {
    expect(searchEntries('adios')[0]?.entry.es).toBe('adiós')
    expect(searchEntries('dog').some((h) => h.entry.es === 'el perro')).toBe(true)
  })
})
