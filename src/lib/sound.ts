/* Tiny synthesized sound effects — no audio files needed. */

let ctx: AudioContext | null = null
let enabled = true

export function setSfxEnabled(on: boolean) {
  enabled = on
}

function ac(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const C = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!C) return null
    ctx = new C()
  }
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

function note(freq: number, at: number, dur: number, type: OscillatorType = 'triangle', vol = 0.12) {
  const c = ac()
  if (!c) return
  const t0 = c.currentTime + at
  const o = c.createOscillator()
  const g = c.createGain()
  o.type = type
  o.frequency.setValueAtTime(freq, t0)
  g.gain.setValueAtTime(0.0001, t0)
  g.gain.exponentialRampToValueAtTime(vol, t0 + 0.015)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  o.connect(g)
  g.connect(c.destination)
  o.start(t0)
  o.stop(t0 + dur + 0.05)
}

export const sfx = {
  correct() {
    if (!enabled) return
    note(784, 0, 0.14)
    note(1175, 0.1, 0.26)
  },
  wrong() {
    if (!enabled) return
    note(233, 0, 0.16, 'square', 0.05)
    note(175, 0.13, 0.3, 'square', 0.05)
  },
  tap() {
    if (!enabled) return
    note(880, 0, 0.05, 'sine', 0.04)
  },
  flip() {
    if (!enabled) return
    note(520, 0, 0.06, 'sine', 0.05)
    note(700, 0.05, 0.08, 'sine', 0.04)
  },
  complete() {
    if (!enabled) return
    ;[523, 659, 784, 1047].forEach((f, i) => note(f, i * 0.11, 0.32, 'triangle', 0.1))
  },
  streak() {
    if (!enabled) return
    ;[392, 523, 659, 784, 1047, 1319].forEach((f, i) => note(f, i * 0.08, 0.28, 'triangle', 0.09))
  },
}
