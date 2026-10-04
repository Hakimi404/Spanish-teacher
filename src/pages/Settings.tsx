import { useRef, useState, type ReactNode } from 'react'
import { CalendarPlus, Download, Smartphone, Trash2, Upload, Volume2 } from 'lucide-react'
import { useStore, type PersistedState, type Theme } from '../store/store'
import { useUI } from '../store/ui'
import { PageHeader } from '../components/Bits'
import { VoiceHelp } from '../components/VoiceHelp'
import { Sheet } from '../components/Sheet'
import { GOALS } from './Onboarding'
import { spanishVoices, speak, useVoiceVersion, currentVoice, ttsSupported } from '../lib/speech'
import { reminderIcs } from '../lib/ics'
import { downloadFile, cx } from '../lib/util'
import { todayKey, addDays, fmtDate } from '../lib/dates'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="text-sm font-black uppercase tracking-wider text-ink3 mb-2">{title}</h2>
      <div className="card divide-y-2 divide-line">{children}</div>
    </section>
  )
}

function Row({ label, sub, children }: { label: ReactNode; sub?: ReactNode; children?: ReactNode }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5">
      <div className="min-w-0 flex-1">
        <div className="font-black">{label}</div>
        {sub && <div className="text-sm font-bold text-ink2">{sub}</div>}
      </div>
      {children}
    </div>
  )
}

function Switch({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return <button type="button" role="switch" aria-checked={checked} aria-label={label} className="switch" onClick={() => onChange(!checked)} />
}

const APP_URL = 'https://hakimi404.github.io/Spanish-teacher/'

export default function Settings() {
  const settings = useStore((s) => s.settings)
  const setSettings = useStore((s) => s.setSettings)
  const startDate = useStore((s) => s.startDate)
  const setStartDate = useStore((s) => s.setStartDate)
  const importData = useStore((s) => s.importData)
  const resetAll = useStore((s) => s.resetAll)
  const toast = useUI((s) => s.toast)
  const installEvent = useUI((s) => s.installEvent)
  const setInstallEvent = useUI((s) => s.setInstallEvent)
  const [confirmReset, setConfirmReset] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  useVoiceVersion()
  const voices = spanishVoices()
  const voice = currentVoice()
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent)

  const exportData = () => {
    const { onboarded, startDate, settings, progress, xp, streak, cards, mistakes, stories, achievements, stats, cando, goalCelebrated } = useStore.getState()
    const data: PersistedState = { onboarded, startDate, settings, progress, xp, streak, cards, mistakes, stories, achievements, stats, cando, goalCelebrated }
    downloadFile(`camino-backup-${todayKey()}.json`, JSON.stringify({ app: 'camino', version: 1, data }, null, 1))
  }

  const onImport = async (f: File) => {
    try {
      const json = JSON.parse(await f.text())
      const data = (json?.data ?? json) as PersistedState
      if (!data || typeof data !== 'object' || !('progress' in data) || !('settings' in data)) throw new Error('bad file')
      importData(data)
      toast({ emoji: '✅', title: 'Backup restored', tone: 'ok' })
    } catch {
      toast({ emoji: '⚠️', title: 'That file is not a Camino backup', tone: 'info' })
    }
  }

  return (
    <div>
      <PageHeader title="Settings" back />

      <Section title="Daily goal">
        <div className="p-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {GOALS.map((g) => (
            <button key={g.xp} type="button" className="option flex-col items-start gap-0 py-2.5" data-state={settings.dailyGoal === g.xp ? 'selected' : undefined} onClick={() => setSettings({ dailyGoal: g.xp })}>
              <span className="font-black">{g.label}</span>
              <span className="text-xs font-bold opacity-75">
                {g.xp} XP · {g.time}
              </span>
            </button>
          ))}
        </div>
      </Section>

      <Section title="Voice & audio">
        <Row label="Spanish voice" sub={!ttsSupported ? 'Speech is not supported in this browser' : voices.length ? `${voices.length} Spanish voice${voices.length > 1 ? 's' : ''} on this device` : 'Using the default Spanish voice'}>
          <button type="button" className="btn btn-secondary btn-icon" onClick={() => speak('Hola, ¿qué tal? Me llamo Sol y hablo español de España.')} aria-label="Test voice">
            <Volume2 className="w-5 h-5" />
          </button>
        </Row>
        {voices.length > 0 && (
          <div className="px-4 py-3">
            <select className="input text-base" value={voice?.voiceURI ?? ''} onChange={(e) => setSettings({ voiceURI: e.target.value || null })}>
              {voices.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name} · {v.lang}
                  {v.localService ? '' : ' (online)'}
                </option>
              ))}
            </select>
            <p className="text-xs font-bold text-ink3 mt-1.5">Voices marked es-ES are Spain Spanish. “Natural”, “Online” or “Enhanced” voices sound the best.</p>
          </div>
        )}
        <div className="px-4 py-3.5">
          <div className="flex justify-between font-black">
            <span>Speaking speed</span>
            <span className="text-ink2">{Math.round(settings.rate * 100)}%</span>
          </div>
          <input type="range" min={0.6} max={1.2} step={0.02} value={settings.rate} onChange={(e) => setSettings({ rate: Number(e.target.value) })} className="w-full accent-[var(--brand-lip)] mt-2" aria-label="Speaking speed" />
        </div>
        <Row label="Play audio automatically" sub="Read Spanish aloud in exercises and flashcards">
          <Switch checked={settings.autoplay} onChange={(v) => setSettings({ autoplay: v })} label="Autoplay" />
        </Row>
        <Row label="Speaking exercises" sub="Use the microphone in lessons">
          <Switch checked={settings.speaking} onChange={(v) => setSettings({ speaking: v })} label="Speaking exercises" />
        </Row>
        <Row label="Sound effects">
          <Switch checked={settings.sound} onChange={(v) => setSettings({ sound: v })} label="Sound effects" />
        </Row>
        <div className="px-4 py-3">
          <button type="button" className="text-sm font-black text-info" onClick={() => setShowHelp(!showHelp)}>
            {showHelp ? 'Hide' : 'No sound or wrong accent? How to install a Spanish voice'}
          </button>
          {showHelp && (
            <div className="mt-3">
              <VoiceHelp />
            </div>
          )}
        </div>
      </Section>

      <Section title="Learning">
        <Row label="Tips for German speakers" sub="Compare Spanish with German">
          <Switch checked={settings.tipsDe} onChange={(v) => setSettings({ tipsDe: v })} label="German tips" />
        </Row>
        <Row label="Tips for Arabic speakers" sub="Compare Spanish with Arabic">
          <Switch checked={settings.tipsAr} onChange={(v) => setSettings({ tipsAr: v })} label="Arabic tips" />
        </Row>
        <div className="px-4 py-3.5">
          <label className="block">
            <span className="font-black">Plan start date</span>
            <input type="date" className="input mt-2 text-base" value={startDate ?? todayKey()} onChange={(e) => e.target.value && setStartDate(e.target.value)} />
          </label>
          {startDate && <p className="text-xs font-bold text-ink3 mt-1.5">Your plan ends on {fmtDate(addDays(startDate, 181), { day: 'numeric', month: 'long', year: 'numeric' })}. Move the date if you took a break — your progress stays.</p>}
        </div>
      </Section>

      <Section title="Appearance">
        <div className="p-3">
          <div className="seg">
            {(['system', 'light', 'dark'] as Theme[]).map((t) => (
              <button key={t} type="button" aria-pressed={settings.theme === t} onClick={() => setSettings({ theme: t })} className="capitalize">
                {t}
              </button>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Daily reminder">
        <div className="px-4 py-3.5 space-y-3">
          <p className="text-sm font-bold text-ink2">Add a repeating event to your phone’s calendar — it reminds you every day, even when the app is closed.</p>
          <div className="flex gap-2">
            <input type="time" className="input text-base w-36" value={settings.reminder} onChange={(e) => setSettings({ reminder: e.target.value })} aria-label="Reminder time" />
            <button type="button" className="btn btn-primary flex-1" onClick={() => downloadFile('camino-daily-reminder.ics', reminderIcs(settings.reminder, todayKey(), APP_URL), 'text/calendar')}>
              <CalendarPlus className="w-5 h-5" /> Add to calendar
            </button>
          </div>
        </div>
      </Section>

      <Section title="Install the app">
        <div className="px-4 py-3.5 space-y-3">
          {installEvent ? (
            <button
              type="button"
              className="btn btn-primary w-full"
              onClick={async () => {
                await installEvent.prompt()
                setInstallEvent(null)
              }}
            >
              <Smartphone className="w-5 h-5" /> Install Camino
            </button>
          ) : (
            <ul className="text-sm font-bold text-ink2 space-y-2">
              <li className={cx(isIOS && 'text-ink')}>
                <b>iPhone / iPad (Safari):</b> tap Share <span aria-hidden="true">⬆️</span> → “Add to Home Screen”.
              </li>
              <li>
                <b>Android (Chrome):</b> menu ⋮ → “Install app” / “Add to Home screen”.
              </li>
              <li>
                <b>Computer (Chrome / Edge):</b> click the install icon in the address bar.
              </li>
            </ul>
          )}
          <p className="text-xs font-bold text-ink3">Installed, Camino opens full-screen like a native app and works offline.</p>
        </div>
      </Section>

      <Section title="Your data">
        <div className="px-4 py-3.5 space-y-3">
          <p className="text-sm font-bold text-ink2">Progress is saved on this device only. Export a backup to move it to another phone or browser.</p>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" className="btn btn-secondary btn-sm" onClick={exportData}>
              <Download className="w-4 h-4" /> Export
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => fileRef.current?.click()}>
              <Upload className="w-4 h-4" /> Import
            </button>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) void onImport(f)
              e.target.value = ''
            }}
          />
          <button type="button" className="btn btn-ghost btn-sm w-full text-bad" onClick={() => setConfirmReset(true)}>
            <Trash2 className="w-4 h-4" /> Reset all progress
          </button>
        </div>
      </Section>

      <p className="text-center text-xs font-bold text-ink3 pb-4">Camino · Spanish A1 → B1 · made for learning, no ads, no tracking.</p>

      {confirmReset && (
        <Sheet onClose={() => setConfirmReset(false)} label="Reset progress?">
          <div className="p-6 space-y-4 text-center">
            <h2 className="text-xl font-black">Reset everything?</h2>
            <p className="font-bold text-ink2">Your streak, XP, words and lesson progress will be deleted from this device. Export a backup first if you might want it back.</p>
            <div className="grid gap-2">
              <button
                type="button"
                className="btn btn-bad"
                onClick={() => {
                  resetAll()
                  setConfirmReset(false)
                }}
              >
                Yes, reset
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => setConfirmReset(false)}>
                Cancel
              </button>
            </div>
          </div>
        </Sheet>
      )}
    </div>
  )
}
