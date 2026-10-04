import type { ReactNode } from 'react'
import { clamp, cx } from '../lib/util'

export function ProgressBar({ value, color, className, height }: { value: number; color?: string; className?: string; height?: string }) {
  const pct = clamp(value, 0, 1) * 100
  return (
    <div className={cx('progress-track', className)} style={height ? { height } : undefined} role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
      <div className="progress-fill" style={{ width: `${Math.max(pct, pct > 0 ? 4 : 0)}%`, background: color }} />
    </div>
  )
}

export function Ring({
  value,
  size = 56,
  stroke = 7,
  color = 'var(--brand)',
  track = 'var(--line)',
  children,
  className,
}: {
  value: number
  size?: number
  stroke?: number
  color?: string
  track?: string
  children?: ReactNode
  className?: string
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const v = clamp(value, 0, 1)
  return (
    <div className={cx('relative grid place-items-center flex-none', className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90 absolute inset-0">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - v)}
          style={{ transition: 'stroke-dashoffset 600ms cubic-bezier(.2,.8,.2,1)' }}
        />
      </svg>
      <div className="relative">{children}</div>
    </div>
  )
}
