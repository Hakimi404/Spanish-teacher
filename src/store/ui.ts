import { create } from 'zustand'

export interface Toast {
  id: number
  title: string
  body?: string
  emoji?: string
  tone?: 'info' | 'ok' | 'fire' | 'gold'
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

interface UIState {
  sheet: { word: string; context?: string; key?: string; prev?: string } | null
  openWord: (word: string, context?: string, key?: string, prev?: string) => void
  closeWord: () => void
  toasts: Toast[]
  toast: (t: Omit<Toast, 'id'>) => void
  dismiss: (id: number) => void
  installEvent: BeforeInstallPromptEvent | null
  setInstallEvent: (e: BeforeInstallPromptEvent | null) => void
}

let tid = 0

export const useUI = create<UIState>((set, get) => ({
  sheet: null,
  openWord: (word, context, key, prev) => set({ sheet: { word, context, key, prev } }),
  closeWord: () => set({ sheet: null }),
  toasts: [],
  toast: (t) => {
    const id = ++tid
    set({ toasts: [...get().toasts, { ...t, id }].slice(-3) })
    setTimeout(() => get().dismiss(id), 4200)
  },
  dismiss: (id) => set({ toasts: get().toasts.filter((x) => x.id !== id) }),
  installEvent: null,
  setInstallEvent: (e) => set({ installEvent: e }),
}))
