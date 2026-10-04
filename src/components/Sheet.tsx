import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cx } from '../lib/util'

interface Props {
  onClose: () => void
  children: ReactNode
  label: string
  className?: string
  /** hide the close X */
  bare?: boolean
}

/** Bottom sheet on phones, floating card on wide screens. */
export function Sheet({ onClose, children, label, className, bare }: Props) {
  const panel = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panel.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" role="presentation">
      <div className="absolute inset-0 bg-black/40 anim-fade" onClick={onClose} />
      <div
        ref={panel}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={cx(
          'relative w-full sm:max-w-lg max-h-[88dvh] overflow-y-auto bg-card border-2 border-line rounded-t-[1.75rem] sm:rounded-[1.75rem] sm:mb-0 outline-none anim-slide-up safe-bottom',
          'shadow-[var(--shadow-pop)]',
          className,
        )}
      >
        <div className="sm:hidden mx-auto mt-2.5 h-1.5 w-12 rounded-full bg-line2" />
        {!bare && (
          <button type="button" onClick={onClose} aria-label="Close" className="absolute right-3 top-3 btn-ghost rounded-xl p-2 text-ink3 hover:text-ink">
            <X className="w-5 h-5" />
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body,
  )
}
