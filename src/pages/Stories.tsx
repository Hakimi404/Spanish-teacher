import { Link } from 'react-router'
import { Check, ChevronRight } from 'lucide-react'
import { STORIES, LEVELS } from '../content'
import { useStore, planInfo } from '../store/store'
import { PageHeader, LEVEL_COLOR } from '../components/Bits'
import { cx } from '../lib/util'

export default function Stories() {
  const stories = useStore((s) => s.stories)
  const progress = useStore((s) => s.progress)
  const startDate = useStore((s) => s.startDate)
  const week = planInfo(progress, startDate).next?.week ?? 26
  return (
    <div>
      <PageHeader title="Stories" sub="Graded reading with audio — one per week" back />
      {LEVELS.map((l) => {
        const list = STORIES.filter((s) => s.level === l.id)
        if (!list.length) return null
        return (
          <section key={l.id} className="mb-8">
            <h2 className="text-sm font-black uppercase tracking-wider mb-2" style={{ color: LEVEL_COLOR[l.id] }}>
              {l.id} · {l.name}
            </h2>
            <div className="grid gap-3">
              {list.map((s) => {
                const read = stories[s.id]
                const ahead = s.week > week
                return (
                  <Link key={s.id} to={`/story/${s.id}`} className={cx('card card-press p-4 flex items-center gap-3', ahead && 'opacity-70')}>
                    <span className="grid place-items-center w-12 h-12 rounded-2xl text-white font-black flex-none" style={{ background: LEVEL_COLOR[l.id] }}>
                      {read ? <Check className="w-6 h-6" strokeWidth={3} /> : s.week}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span lang="es" className="block font-black text-lg leading-tight">
                        {s.title}
                      </span>
                      <span className="block text-sm font-bold text-ink2">
                        Week {s.week} · {s.paras.length} paragraphs{read ? ` · score ${read.score}/${s.questions.length}` : ''}
                        {ahead ? ' · ahead of your plan' : ''}
                      </span>
                    </span>
                    <ChevronRight className="w-5 h-5 text-ink3" />
                  </Link>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
