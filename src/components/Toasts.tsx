import { useUI } from '../store/ui'
import { cx } from '../lib/util'

const TONES = {
  info: 'border-info/40',
  ok: 'border-ok/50',
  fire: 'border-fire/50',
  gold: 'border-brand',
}

export function Toasts() {
  const toasts = useUI((s) => s.toasts)
  const dismiss = useUI((s) => s.dismiss)
  return (
    <div className="fixed top-0 inset-x-0 z-[60] flex flex-col items-center gap-2 p-3 pointer-events-none safe-top" aria-live="polite">
      {toasts.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => dismiss(t.id)}
          className={cx('pointer-events-auto w-full max-w-sm card flex items-center gap-3 px-4 py-3 text-left anim-pop shadow-[var(--shadow-pop)]', TONES[t.tone ?? 'info'])}
        >
          {t.emoji && <span className="text-3xl leading-none">{t.emoji}</span>}
          <span className="min-w-0">
            <span className="block font-black">{t.title}</span>
            {t.body && <span className="block text-sm text-ink2 font-bold">{t.body}</span>}
          </span>
        </button>
      ))}
    </div>
  )
}
