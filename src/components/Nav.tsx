import { NavLink } from 'react-router'
import { BookOpen, Dumbbell, Flame, House, Map, User, Zap } from 'lucide-react'
import { Mascot } from './Mascot'
import { useStore, displayStreak } from '../store/store'
import { todayKey } from '../lib/dates'
import { cx } from '../lib/util'

const ITEMS = [
  { to: '/', label: 'Today', icon: House, end: true },
  { to: '/path', label: 'Path', icon: Map },
  { to: '/practice', label: 'Practice', icon: Dumbbell },
  { to: '/words', label: 'Words', icon: BookOpen },
  { to: '/me', label: 'Me', icon: User },
]

export function TabBar() {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur border-t-2 border-line safe-bottom" aria-label="Main">
      <ul className="flex max-w-xl mx-auto">
        {ITEMS.map(({ to, label, icon: Icon, end }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                cx('flex flex-col items-center gap-0.5 pt-2 pb-1.5 text-[0.7rem] font-extrabold transition-colors', isActive ? 'text-ink' : 'text-ink3 hover:text-ink2')
              }
            >
              {({ isActive }) => (
                <>
                  <span className={cx('grid place-items-center w-12 h-8 rounded-xl transition-colors', isActive && 'bg-brand-soft border-2 border-brand')}>
                    <Icon className="w-[22px] h-[22px]" strokeWidth={isActive ? 2.6 : 2.2} />
                  </span>
                  {label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function SideNav() {
  const streak = useStore((s) => s.streak)
  const xp = useStore((s) => s.xp)
  const goal = useStore((s) => s.settings.dailyGoal)
  const st = displayStreak(streak)
  const today = xp[todayKey()] ?? 0
  return (
    <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 flex-col border-r-2 border-line bg-bg px-4 py-6 z-30">
      <NavLink to="/" className="flex items-center gap-2.5 px-2 mb-8">
        <Mascot size={44} still />
        <div>
          <div className="text-2xl font-black tracking-tight leading-none">Camino</div>
          <div className="text-xs font-bold text-ink3">Spanish · A1 → B1</div>
        </div>
      </NavLink>
      <ul className="space-y-1.5">
        {ITEMS.map(({ to, label, icon: Icon, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                cx(
                  'flex items-center gap-3 rounded-2xl px-4 py-3 font-black uppercase tracking-wide text-[0.88rem] border-2 transition-colors',
                  isActive ? 'bg-brand-soft border-brand text-ink' : 'border-transparent text-ink2 hover:bg-bg2',
                )
              }
            >
              <Icon className="w-6 h-6" strokeWidth={2.3} /> {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="mt-auto card p-4 space-y-3">
        <div className="flex items-center gap-2 font-black">
          <Flame className={cx('w-6 h-6', st.count ? 'text-fire fill-fire/30' : 'text-ink3')} />
          {st.count} day streak
        </div>
        <div className="flex items-center gap-2 font-black">
          <Zap className="w-6 h-6 text-brand-lip fill-brand/40" />
          {today} / {goal} XP today
        </div>
      </div>
    </aside>
  )
}
