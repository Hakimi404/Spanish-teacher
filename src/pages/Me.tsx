import { Link } from 'react-router'
import { BookOpen, Clock, Flame, Layers, Settings as Cog, Snowflake, Target, Trophy, Zap } from 'lucide-react'
import { useStore, displayStreak, totalXP, wordsLearned } from '../store/store'
import { ACHIEVEMENTS } from '../store/achievements'
import { PLAN, LEVELS } from '../content'
import { PageHeader, StatTile, Heatmap, LEVEL_COLOR } from '../components/Bits'
import { ProgressBar } from '../components/Progress'
import { Mascot } from '../components/Mascot'
import { fmtDate } from '../lib/dates'
import { cx } from '../lib/util'

function fmtDuration(sec: number) {
  const h = Math.floor(sec / 3600)
  const m = Math.round((sec % 3600) / 60)
  return h ? `${h}h ${m}m` : `${m}m`
}

export default function Me() {
  const s = useStore()
  const st = displayStreak(s.streak)
  const xp = totalXP(s.xp)
  const words = wordsLearned(s.cards)
  const mastered = Object.values(s.cards).filter((c) => c.interval >= 21).length
  const accuracy = s.stats.exercises ? Math.round((s.stats.correct / s.stats.exercises) * 100) : 0
  const lessonsDone = PLAN.filter((d) => s.progress[d.id]?.done).length
  const unlocked = ACHIEVEMENTS.filter((a) => s.achievements[a.id]).length
  const level = (() => {
    const next = PLAN.find((d) => !s.progress[d.id]?.done)
    return next?.level ?? 'B1'
  })()

  return (
    <div>
      <PageHeader
        title="Me"
        right={
          <Link to="/settings" className="btn btn-secondary btn-icon" aria-label="Settings">
            <Cog className="w-5 h-5" />
          </Link>
        }
      />
      <section className="card p-5 flex items-center gap-4 mb-5">
        <Mascot mood={st.count >= 7 ? 'cool' : 'happy'} size={80} />
        <div className="min-w-0">
          <div className="text-xs font-black uppercase tracking-wider text-ink3">Current level</div>
          <div className="text-3xl font-black" style={{ color: LEVEL_COLOR[level] }}>
            {level}
          </div>
          <div className="text-sm font-bold text-ink2">{s.startDate ? `Learning since ${fmtDate(s.startDate, { day: 'numeric', month: 'long', year: 'numeric' })}` : ''}</div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 mb-5">
        <StatTile icon={<Flame className="w-6 h-6" />} value={st.count} label="Day streak" tone="fire" />
        <StatTile icon={<Trophy className="w-6 h-6" />} value={s.streak.longest} label="Best streak" tone="brand" />
        <StatTile icon={<Zap className="w-6 h-6" />} value={xp.toLocaleString()} label="Total XP" tone="brand" />
        <StatTile icon={<Layers className="w-6 h-6" />} value={words} label={`Words · ${mastered} mastered`} tone="vio" />
        <StatTile icon={<BookOpen className="w-6 h-6" />} value={`${lessonsDone}/${PLAN.length}`} label="Plan days done" tone="ok" />
        <StatTile icon={<Clock className="w-6 h-6" />} value={fmtDuration(s.stats.seconds)} label="Time studied" tone="info" />
        <StatTile icon={<Target className="w-6 h-6" />} value={`${accuracy}%`} label="Accuracy" tone="ok" />
        <StatTile icon={<Snowflake className="w-6 h-6" />} value={s.streak.freezes} label="Streak freezes" tone="info" />
      </section>
      <p className="text-xs font-bold text-ink3 -mt-2 mb-5">🧊 You earn a streak freeze for every 7 days in a row (max 2). A freeze saves your streak if you miss a day.</p>

      <section className="card p-4 mb-5">
        <h2 className="font-black text-lg mb-3">Activity</h2>
        <Heatmap xp={s.xp} goal={s.settings.dailyGoal} />
      </section>

      <section className="card p-4 mb-5 space-y-4">
        <h2 className="font-black text-lg">Level progress</h2>
        {LEVELS.map((l) => {
          const days = PLAN.filter((d) => d.level === l.id)
          const done = days.filter((d) => s.progress[d.id]?.done).length
          return (
            <div key={l.id}>
              <div className="flex justify-between text-sm font-black mb-1">
                <span>
                  {l.id} · {l.name}
                </span>
                <span className="text-ink3">
                  {done}/{days.length}
                </span>
              </div>
              <ProgressBar value={done / Math.max(1, days.length)} color={LEVEL_COLOR[l.id]} />
            </div>
          )
        })}
      </section>

      <section className="mb-5">
        <h2 className="font-black text-lg mb-3">
          Achievements <span className="text-ink3">
            {unlocked}/{ACHIEVEMENTS.length}
          </span>
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {ACHIEVEMENTS.map((a) => {
            const got = s.achievements[a.id]
            return (
              <div key={a.id} className={cx('card p-3 text-center', !got && 'opacity-50')} title={a.desc}>
                <div className={cx('text-3xl', !got && 'grayscale')}>{a.emoji}</div>
                <div className="text-xs font-black leading-tight mt-1" lang="es">
                  {a.title}
                </div>
                <div className="text-[0.65rem] font-bold text-ink3 leading-tight mt-0.5">{a.desc}</div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
