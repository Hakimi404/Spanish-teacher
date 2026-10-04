import { useEffect } from 'react'
import { HashRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router'
import { SideNav, TabBar } from './components/Nav'
import { WordSheet } from './components/WordSheet'
import { Toasts } from './components/Toasts'
import { useStore } from './store/store'
import { useUI } from './store/ui'
import { configureSpeech } from './lib/speech'
import { setSfxEnabled } from './lib/sound'
import Onboarding from './pages/Onboarding'
import Today from './pages/Today'
import PathPage from './pages/Path'
import LessonPage from './pages/LessonPage'
import WeekReview from './pages/WeekReview'
import Review from './pages/Review'
import Practice from './pages/Practice'
import Session from './pages/Session'
import Verbs from './pages/Verbs'
import VerbTable from './pages/VerbTable'
import VerbTrainer from './pages/VerbTrainer'
import Pronunciation from './pages/Pronunciation'
import Stories from './pages/Stories'
import StoryReader from './pages/StoryReader'
import Words from './pages/Words'
import Grammar from './pages/Grammar'
import Numbers from './pages/Numbers'
import Me from './pages/Me'
import Settings from './pages/Settings'

function Effects() {
  const settings = useStore((s) => s.settings)
  const setInstallEvent = useUI((s) => s.setInstallEvent)
  const closeWord = useUI((s) => s.closeWord)
  const { pathname } = useLocation()

  useEffect(() => {
    const root = document.documentElement
    if (settings.theme === 'system') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', settings.theme)
  }, [settings.theme])

  useEffect(() => {
    configureSpeech({ voiceURI: settings.voiceURI, rate: settings.rate })
  }, [settings.voiceURI, settings.rate])

  useEffect(() => setSfxEnabled(settings.sound), [settings.sound])

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault()
      setInstallEvent(e as never)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    return () => window.removeEventListener('beforeinstallprompt', onPrompt)
  }, [setInstallEvent])

  useEffect(() => {
    window.scrollTo(0, 0)
    closeWord()
  }, [pathname, closeWord])

  return null
}

function RequireOnboarded() {
  const onboarded = useStore((s) => s.onboarded)
  if (!onboarded) return <Navigate to="/welcome" replace />
  return <Outlet />
}

function Layout() {
  return (
    <>
      <SideNav />
      <div className="lg:pl-64">
        <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-5 pb-28 lg:pb-12 safe-top">
          <Outlet />
        </main>
      </div>
      <TabBar />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Effects />
      <Routes>
        <Route path="/welcome" element={<Onboarding />} />
        <Route element={<RequireOnboarded />}>
          <Route element={<Layout />}>
            <Route index element={<Today />} />
            <Route path="path" element={<PathPage />} />
            <Route path="practice" element={<Practice />} />
            <Route path="words" element={<Words />} />
            <Route path="me" element={<Me />} />
            <Route path="settings" element={<Settings />} />
            <Route path="verbs" element={<Verbs />} />
            <Route path="verbs/:inf" element={<VerbTable />} />
            <Route path="pronunciation" element={<Pronunciation />} />
            <Route path="stories" element={<Stories />} />
            <Route path="grammar" element={<Grammar />} />
            <Route path="numbers" element={<Numbers />} />
          </Route>
          <Route path="lesson/:id" element={<LessonPage />} />
          <Route path="week/:n" element={<WeekReview />} />
          <Route path="review" element={<Review />} />
          <Route path="story/:id" element={<StoryReader />} />
          <Route path="train/verbs" element={<VerbTrainer />} />
          <Route path="session/:kind" element={<Session />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WordSheet />
      <Toasts />
    </HashRouter>
  )
}
