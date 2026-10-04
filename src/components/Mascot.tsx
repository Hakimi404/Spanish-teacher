import { cx } from '../lib/util'

export type Mood = 'happy' | 'cheer' | 'sad' | 'think' | 'wow' | 'cool' | 'sleep'

const INK = '#3A2A00'
const CHEEK = '#FF7A59'

function Face({ mood }: { mood: Mood }) {
  const cheeks = (
    <>
      <ellipse cx="40" cy="69" rx="6.5" ry="3.8" fill={CHEEK} opacity=".55" />
      <ellipse cx="80" cy="69" rx="6.5" ry="3.8" fill={CHEEK} opacity=".55" />
    </>
  )
  const eyes = (dy = 0, big = false) => (
    <>
      <ellipse cx="47" cy={56 + dy} rx={big ? 5.4 : 4.4} ry={big ? 7 : 5.8} fill={INK} />
      <ellipse cx="73" cy={56 + dy} rx={big ? 5.4 : 4.4} ry={big ? 7 : 5.8} fill={INK} />
      <circle cx={48.6} cy={53.6 + dy} r="1.7" fill="#fff" />
      <circle cx={74.6} cy={53.6 + dy} r="1.7" fill="#fff" />
    </>
  )
  const stroke = { fill: 'none', stroke: INK, strokeWidth: 4, strokeLinecap: 'round' as const }
  switch (mood) {
    case 'cheer':
      return (
        <>
          <path d="M41 58 Q47 50 53 58" {...stroke} />
          <path d="M67 58 Q73 50 79 58" {...stroke} />
          {cheeks}
          <path d="M45 66 Q60 88 75 66 Z" fill={INK} />
          <ellipse cx="60" cy="77" rx="7" ry="4" fill={CHEEK} />
        </>
      )
    case 'sad':
      return (
        <>
          <path d="M40 47 L52 51" {...stroke} strokeWidth={3} />
          <path d="M80 47 L68 51" {...stroke} strokeWidth={3} />
          {eyes(2)}
          {cheeks}
          <path d="M49 78 Q60 69 71 78" {...stroke} />
        </>
      )
    case 'think':
      return (
        <>
          <ellipse cx="49" cy="54" rx="4.4" ry="5.8" fill={INK} />
          <ellipse cx="75" cy="54" rx="4.4" ry="5.8" fill={INK} />
          <circle cx="50.5" cy="51.5" r="1.7" fill="#fff" />
          <circle cx="76.5" cy="51.5" r="1.7" fill="#fff" />
          {cheeks}
          <path d="M53 75 Q60 72 68 73" {...stroke} />
        </>
      )
    case 'wow':
      return (
        <>
          {eyes(-1, true)}
          {cheeks}
          <ellipse cx="60" cy="75" rx="5.5" ry="6.5" fill={INK} />
        </>
      )
    case 'cool':
      return (
        <>
          <path d="M36 52 H84" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
          <rect x="37" y="50" width="20" height="13" rx="5" fill={INK} />
          <rect x="63" y="50" width="20" height="13" rx="5" fill={INK} />
          <path d="M41 54 L46 54" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".7" />
          <path d="M67 54 L72 54" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".7" />
          {cheeks}
          <path d="M48 71 Q60 82 72 71" {...stroke} />
        </>
      )
    case 'sleep':
      return (
        <>
          <path d="M41 57 Q47 62 53 57" {...stroke} />
          <path d="M67 57 Q73 62 79 57" {...stroke} />
          {cheeks}
          <ellipse cx="60" cy="74" rx="4" ry="3" fill={INK} />
          <text x="84" y="40" fontSize="14" fontWeight="900" fill={INK} fontFamily="sans-serif">z</text>
          <text x="93" y="30" fontSize="10" fontWeight="900" fill={INK} fontFamily="sans-serif">z</text>
        </>
      )
    default:
      return (
        <>
          {eyes()}
          {cheeks}
          <path d="M48 69 Q60 81 72 69" {...stroke} />
        </>
      )
  }
}

/** Sol — the app's sun mascot. */
export function Mascot({ mood = 'happy', size = 96, className, still }: { mood?: Mood; size?: number; className?: string; still?: boolean }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} className={cx('flex-none', className)} aria-hidden="true">
      <g className={still ? undefined : 'anim-spin-slow'}>
        {Array.from({ length: 12 }, (_, i) => (
          <rect key={i} x="56" y="3" width="8" height="16" rx="4" fill="#FFB300" transform={`rotate(${i * 30} 60 60)`} />
        ))}
      </g>
      <circle cx="60" cy="60" r="37" fill="#FFC21A" />
      <path d="M33 47 A30 30 0 0 1 60 27" fill="none" stroke="#FFE07A" strokeWidth="5" strokeLinecap="round" opacity=".9" />
      <Face mood={mood} />
    </svg>
  )
}
