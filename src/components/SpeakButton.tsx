import { Turtle, Volume2 } from 'lucide-react'
import { speak, stopSpeaking, useSpeaking } from '../lib/speech'
import { cx } from '../lib/util'

export function Wave({ className }: { className?: string }) {
  return (
    <span className={cx('sound-wave inline-flex items-center', className)} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

interface Props {
  text: string
  slow?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'soft' | 'brand' | 'info' | 'ghost'
  className?: string
  label?: string
}

const SIZES = {
  sm: 'w-7 h-7 rounded-lg [&_svg]:w-4 [&_svg]:h-4',
  md: 'w-10 h-10 rounded-xl [&_svg]:w-5 [&_svg]:h-5',
  lg: 'w-14 h-14 rounded-2xl [&_svg]:w-7 [&_svg]:h-7',
  xl: 'w-24 h-24 rounded-3xl [&_svg]:w-11 [&_svg]:h-11',
}

const VARIANTS = {
  soft: 'bg-brand-soft text-brand-soft-ink hover:brightness-95',
  brand: 'bg-brand text-brand-ink shadow-[0_4px_0_var(--brand-lip)] active:translate-y-1 active:shadow-none',
  info: 'bg-info text-white shadow-[0_4px_0_var(--info-lip)] active:translate-y-1 active:shadow-none',
  ghost: 'text-ink2 hover:bg-bg2',
}

/** Round "play" button. Shows an animated wave while its own text is speaking. */
export function SpeakButton({ text, slow, size = 'md', variant = 'soft', className, label }: Props) {
  const id = `${slow ? 'slow' : 'btn'}:${text}`
  const speaking = useSpeaking(id)
  return (
    <button
      type="button"
      aria-label={label ?? (slow ? `Play slowly: ${text}` : `Play: ${text}`)}
      title={slow ? 'Play slowly' : 'Play'}
      onClick={(e) => {
        e.stopPropagation()
        if (speaking) stopSpeaking()
        else speak(text, { slow, id })
      }}
      className={cx('grid place-items-center flex-none transition', SIZES[size], VARIANTS[variant], className)}
    >
      {speaking ? <Wave /> : slow ? <Turtle strokeWidth={2.4} /> : <Volume2 strokeWidth={2.4} />}
    </button>
  )
}
