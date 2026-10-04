import { describe, expect, it } from 'vitest'
import { attachClitic, bestVerdict, compareAnswer, fold, numberToSpanish, stressIndex, syllabify, tokenize } from './spanish'
import { newCard, schedule } from './srs'

describe('syllables & stress', () => {
  const cases: [string, string, number][] = [
    ['casa', 'ca-sa', 0],
    ['hablar', 'ha-blar', 1],
    ['España', 'Es-pa-ña', 1],
    ['teléfono', 'te-lé-fo-no', 1],
    ['ciudad', 'ciu-dad', 1],
    ['día', 'dí-a', 0],
    ['aeropuerto', 'a-e-ro-puer-to', 3],
    ['construir', 'cons-truir', 1],
    ['perro', 'pe-rro', 0],
    ['guitarra', 'gui-ta-rra', 1],
    ['queso', 'que-so', 0],
    ['Uruguay', 'U-ru-guay', 2],
    ['examen', 'e-xa-men', 1],
    ['hombre', 'hom-bre', 0],
    ['instante', 'ins-tan-te', 1],
    ['pingüino', 'pin-güi-no', 1],
    ['árbol', 'ár-bol', 0],
    ['estoy', 'es-toy', 1],
    ['hoy', 'hoy', 0],
    ['Rodríguez', 'Ro-drí-guez', 1],
    ['leíste', 'le-ís-te', 1],
  ]
  for (const [w, syl, st] of cases) {
    it(w, () => {
      expect(syllabify(w).join('-')).toBe(syl)
      expect(stressIndex(w)).toBe(st)
    })
  }
  it('enclitics keep the stress', () => {
    expect(attachClitic('levanta', 'te')).toBe('levántate')
    expect(attachClitic('di', 'me')).toBe('dime')
    expect(attachClitic('di', 'melo')).toBe('dímelo')
    expect(attachClitic('compra', 'lo')).toBe('cómpralo')
    expect(attachClitic('comprando', 'lo')).toBe('comprándolo')
  })
})

describe('numbers', () => {
  const cases: [number, string][] = [
    [0, 'cero'],
    [16, 'dieciséis'],
    [21, 'veintiuno'],
    [22, 'veintidós'],
    [31, 'treinta y uno'],
    [100, 'cien'],
    [101, 'ciento uno'],
    [115, 'ciento quince'],
    [500, 'quinientos'],
    [777, 'setecientos setenta y siete'],
    [1000, 'mil'],
    [1999, 'mil novecientos noventa y nueve'],
    [2024, 'dos mil veinticuatro'],
    [21000, 'veintiún mil'],
    [1000000, 'un millón'],
    [2500000, 'dos millones quinientos mil'],
  ]
  for (const [n, s] of cases) it(String(n), () => expect(numberToSpanish(n)).toBe(s))
})

describe('answer checking', () => {
  it('folds accents and punctuation', () => {
    expect(fold('¿Cómo estás?')).toBe('como estas')
    expect(compareAnswer('Cómo estás', '¿Cómo estás?')).toBe('exact')
    expect(compareAnswer('como estas', '¿Cómo estás?')).toBe('accent')
    expect(compareAnswer('gracais', 'gracias')).toBe('typo')
    expect(compareAnswer('adios', 'hola')).toBe('wrong')
    expect(bestVerdict('alta', ['alto, alta', 'alto', 'alta']).verdict).toBe('exact')
  })
  it('tokenizes words and punctuation', () => {
    const t = tokenize('¡Hola, Ana!')
    expect(t.filter((x) => x.word).map((x) => x.text)).toEqual(['Hola', 'Ana'])
    expect(t.map((x) => x.text).join('')).toBe('¡Hola, Ana!')
  })
})

describe('spaced repetition', () => {
  it('grows intervals and handles lapses', () => {
    const now = Date.UTC(2026, 9, 5, 12)
    let c = newCard('perro', 'el perro', 'dog', 't', now)
    c = schedule(c, 2, now)
    expect(c.interval).toBe(1)
    c = schedule(c, 2, now + 86_400_000)
    expect(c.interval).toBeGreaterThanOrEqual(2)
    const before = c.interval
    c = schedule(c, 2, now + 3 * 86_400_000)
    expect(c.interval).toBeGreaterThan(before)
    c = schedule(c, 0, now + 10 * 86_400_000)
    expect(c.interval).toBe(0)
    expect(c.lapses).toBe(1)
  })
})
