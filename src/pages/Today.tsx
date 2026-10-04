import { Link } from 'react-router'
import { BookOpen, Check, ChevronRight, Flame, Mic, Repeat, Snowflake, Zap } from 'lucide-react'
import { useStore, displayStreak, planInfo, dueCards } from '../store/store'
import { WEEK_BY_N, STORY_BY_ID, LESSONS, PLAN } from '../content'
import { SOUNDS } from '../content/pronunciation'
import { Mascot } from '../components/Mascot'
import { Es } from '../components/Es'
import { SpeakButton } from '../components/SpeakButton'
import { Ring, ProgressBar } from '../components/Progress'
import { WeekStrip, LevelChip, LEVEL_COLOR } from '../components/Bits'
import { KIND_META, PLAN_META } from '../components/kinds'
import { inline } from '../components/Rich'
import { greeting, spanishDate, todayKey, fmtDate, addDays } from '../lib/dates'
import { cx } from '../lib/util'
import type { PlanDay } from '../content/types'

const FACTS = [
  'Spanish has about 500 million native speakers — the second most spoken native language in the world.',
  'Around 4,000 Spanish words come from Arabic, like {ojalá}, {aceite}, {azúcar} and {almohada}.',
  'In Spain, lunch is around 2–3 pm and dinner around 9–10 pm.',
  'Spanish has two verbs for "to be": {ser} and {estar}. You’ll master both!',
  'The letter {ñ} is a symbol of the language: {España}, {mañana}, {año}.',
  'Spanish calendars write X for {miércoles} so it isn’t confused with M for {martes}.',
  '{¡Vale!} means "OK" — you’ll hear it a hundred times a day in Spain.',
  '{guerra} (war) and {blanco} (white) come from the Germanic language of the Visigoths.',
  'Spaniards say {¡Hasta luego!} even when they won’t see you again.',
  'In Spain people have two surnames: the father’s first surname and the mother’s first surname.',
  'Spanish is the official language of 20 countries, plus Puerto Rico.',
  'The word {guitarra} comes from Arabic قيثارة (qīthāra), itself from Greek.',
  'Spain uses {tú} much more than German uses "du" — even with colleagues and shop staff.',
  'The Real Academia Española has published the official Spanish dictionary since 1780.',
]

function dayHash(s: string) {
  let h = 0
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return h
}

function planLink(d: PlanDay) {
  return d.kind === 'lesson' ? `/lesson/${d.id}` : `/week/${d.week}`
}

export default function Today() {
  const progress = useStore((s) => s.progress)
  const startDate = useStore((s) => s.startDate)
  const xp = useStore((s) => s.xp)
  const streak = useStore((s) => s.streak)
  const cards = useStore((s) => s.cards)
  const stories = useStore((s) => s.stories)
  const goal = useStore((s) => s.settings.dailyGoal)

  const today = todayKey()
  const info = planInfo(progress, startDate, today)
  const st = displayStreak(streak, today)
  const xpToday = xp[today] ?? 0
  const due = dueCards(cards).length
  const g = greeting()
  const next = info.next
  const week = WEEK_BY_N.get(next?.week ?? 26)
  const doneToday = PLAN.filter((d) => progress[d.id]?.at === today)
  const story = week ? STORY_BY_ID.get(week.story.id) : undefined
  const sound = SOUNDS[((next?.week ?? 1) - 1 + (next?.day ?? 1)) % SOUNDS.length]

  const learned = LESSONS.filter((l) => progress[l.id]?.done).flatMap((l) => l.words)
  const wordPool = learned.length ? learned : (week?.lessons[0]?.words ?? [])
  const wotd = wordPool.length ? wordPool[dayHash(today) % wordPool.length] : null
  const fact = FACTS[dayHash(today + 'f') % FACTS.length]

  const status =
    info.delta > 0 ? { t: `${info.delta} day${info.delta > 1 ? 's' : ''} ahead`, c: 'text-ok' } : info.delta < 0 ? { t: `${-info.delta} day${info.delta < -1 ? 's' : ''} behind`, c: 'text-fire' } : { t: 'On track', c: 'text-ok' }

  return (
    <div className="space-y-5">
      {/* Greeting row */}
      <div className="flex items-center gap-3">
        <Mascot mood={st.doneToday ? 'cool' : st.atRisk && st.count > 0 ? 'wow' : 'happy'} size={58} />
        <div className="min-w-0 flex-1">
          <div className="text-2xl font-black leading-tight">
            <Es text={g.es} plain />
          </div>
          <div className="text-sm font-bold text-ink3 truncate">{spanishDate()}</div>
        </div>
        <Link to="/me" className={cx('chip text-base px-3 py-1.5', st.count ? 'bg-fire-soft text-fire' : 'bg-bg2 text-ink3')} aria-label={`${st.count} day streak`}>
          <Flame className={cx('w-5 h-5', st.count && 'fill-fire/40 anim-flicker')} /> {st.count}
        </Link>
        <Ring value={xpToday / goal} size={52} stroke={6}>
          <Zap className="w-5 h-5 text-brand-lip fill-brand" />
        </Ring>
      </div>

      {/* Streak status */}
      {!st.doneToday && st.count > 0 && (
        <div className="card p-3.5 flex items-center gap-3 border-fire/40 bg-fire-soft">
          {st.freezeNeeded ? <Snowflake className="w-6 h-6 text-info" /> : <Flame className="w-6 h-6 text-fire" />}
          <div className="text-sm font-bold">
            {st.freezeNeeded ? (
              <>A streak freeze will save your {st.count}-day streak — practise today to keep it!</>
            ) : (
              <>Practise today to keep your {st.count}-day streak alive.</>
            )}
          </div>
        </div>
      )}

      {/* Main plan card */}
      {next ? (
        <section className="card overflow-hidden">
          <div className="p-4 pb-3 flex items-center gap-2 flex-wrap">
            <LevelChip level={next.level} />
            <span className="text-sm font-black text-ink2">
              Week {next.week} · Day {next.index + 1} of {info.total}
            </span>
            <span className={cx('ml-auto text-sm font-black', status.c)}>{status.t}</span>
          </div>
          <div className="px-4">
            <ProgressBar value={info.done / info.total} color={LEVEL_COLOR[next.level]} height="0.75rem" />
          </div>
          <div className="p-4 pt-5">
            {week && (
              <div className="text-sm font-bold text-ink3 mb-1">
                <Es text={week.es} plain /> · {week.title}
              </div>
            )}
            <PlanItem d={next} />
            <Link to={planLink(next)} className="btn btn-primary w-full mt-4 text-base">
              {doneToday.length ? 'Keep going' : 'Start'} <ChevronRight className="w-5 h-5" />
            </Link>
            {doneToday.length > 0 && (
              <div className="mt-3 flex items-center gap-2 text-sm font-bold text-ok">
                <Check className="w-4 h-4" /> Done today: {doneToday.map((d) => d.title).join(', ')}
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="card p-6 text-center">
          <Mascot mood="cool" size={100} className="mx-auto" />
          <h2 className="text-2xl font-black mt-3">¡Enhorabuena! Plan complete 🎉</h2>
          <p className="text-ink2 font-bold">You finished all 26 weeks. Keep your Spanish alive with reviews, stories and the verb trainer.</p>
        </section>
      )}

      {/* Daily goal + week strip */}
      <section className="card p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-black text-lg">Daily goal</h2>
          <span className="font-black text-ink2">
            {xpToday} / {goal} XP
          </span>
        </div>
        <ProgressBar value={xpToday / goal} color="var(--brand)" />
        <WeekStrip xp={xp} frozen={streak.frozen} />
      </section>

      {/* Practice shortcuts */}
      <section className="grid sm:grid-cols-2 gap-3">
        <Link to="/review" className="card card-press p-4 flex items-center gap-3">
          <span className="grid place-items-center w-12 h-12 rounded-2xl bg-vio-soft text-vio flex-none">
            <Repeat className="w-6 h-6" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-black">Review words</span>
            <span className="block text-sm font-bold text-ink2">{due ? `${due} due now` : Object.keys(cards).length ? 'All caught up ✓' : 'Unlocks after your first lesson'}</span>
          </span>
          {due > 0 && <span className="chip bg-vio text-white">{due}</span>}
        </Link>
        <Link to="/pronunciation" className="card card-press p-4 flex items-center gap-3">
          <span className="grid place-items-center w-12 h-12 rounded-2xl bg-info-soft text-info flex-none">
            <Mic className="w-6 h-6" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-black">Sound of the day</span>
            <span className="block text-sm font-bold text-ink2 truncate">
              <span lang="es">{sound.letters}</span> — {sound.like}
            </span>
          </span>
        </Link>
        {story && (
          <Link to={`/story/${story.id}`} className="card card-press p-4 flex items-center gap-3 sm:col-span-2">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-fire-soft text-fire flex-none">
              <BookOpen className="w-6 h-6" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-black">Story of the week</span>
              <span className="block text-sm font-bold text-ink2 truncate">
                <span lang="es">{story.title}</span> {stories[story.id] ? '· read ✓' : ''}
              </span>
            </span>
            <ChevronRight className="w-5 h-5 text-ink3" />
          </Link>
        )}
      </section>

      {/* Word of the day */}
      {wotd && (
        <section className="card p-4">
          <div className="text-xs font-black uppercase tracking-wider text-ink3 mb-2">Palabra del día · word of the day</div>
          <div className="flex items-center gap-3">
            <SpeakButton text={wotd.es.replace(/…/g, '')} size="lg" variant="brand" />
            <div className="min-w-0">
              <div className="text-2xl font-black">
                <Es text={wotd.es} />
              </div>
              <div className="font-bold text-ink2">{wotd.en}</div>
            </div>
          </div>
        </section>
      )}

      {/* Fun fact */}
      <section className="rounded-3xl bg-brand-soft border-2 border-brand/40 p-4 flex gap-3">
        <Mascot mood="think" size={48} still />
        <div>
          <div className="font-black">¿Sabías que…?</div>
          <div className="text-sm font-bold text-ink2">{inline(fact)}</div>
        </div>
      </section>

      {startDate && (
        <p className="text-center text-xs font-bold text-ink3">
          Plan: {fmtDate(startDate, { day: 'numeric', month: 'short', year: 'numeric' })} → {fmtDate(addDays(startDate, 181), { day: 'numeric', month: 'short', year: 'numeric' })}
        </p>
      )}
    </div>
  )
}

function PlanItem({ d }: { d: PlanDay }) {
  const meta = d.kind === 'lesson' && d.lesson ? KIND_META[d.lesson.kind] : PLAN_META[d.kind === 'lesson' ? 'review' : d.kind]
  const Icon = meta.icon
  return (
    <div className="flex items-start gap-3">
      <span className="grid place-items-center w-14 h-14 rounded-2xl flex-none" style={{ background: meta.soft, color: meta.color }}>
        <Icon className="w-7 h-7" strokeWidth={2.4} />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-black uppercase tracking-wider" style={{ color: meta.color }}>
          {meta.label} · ~{meta.minutes} min
        </div>
        <div className="text-xl font-black leading-snug">{d.title}</div>
        {d.lesson && <div className="text-sm font-bold text-ink2">{d.lesson.goal}</div>}
        {!d.lesson && <div className="text-sm font-bold text-ink2">Story, quiz and a can-do checklist for week {d.week}.</div>}
      </div>
    </div>
  )
}
