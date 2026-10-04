# Camino 🌞 Learn Spanish from zero to B1 in 6 months

**Live app:** https://hakimi404.github.io/Spanish-teacher/

Camino is a free, installable web app (PWA) for learning **Castilian Spanish (Spain)**, starting from nothing and reaching **B1**. It follows a 26-week day-by-day plan. Explanations are in English, with extra tips for **German 🇩🇪** and **Arabic 🇸🇦** speakers.

## What's inside

- **A 6-month plan.** 26 weeks × 7 days = 182 days. Each week has six short lessons, then a weekly review with a story, a quiz and a can-do checklist. Level checkpoints come at weeks 9 (A1), 17 (A2) and 26 (B1).
- **Tap any Spanish word to hear it.** Audio uses your device's Spanish voice, with a 🐢 slow mode. The word sheet also shows the meaning, syllables with the stressed one highlighted, gender, examples, and the verb form when the word is a verb.
- **Pronunciation lab.** It covers all Spanish sounds, with tips for German and Arabic speakers. There are minimal-pair listening games (r/rr, s/θ, b/p…), a stress trainer and tongue twisters. You can record yourself and compare, and speech recognition scores your pronunciation.
- **Grammar A1 → B1.** Topics include ser/estar, all the past tenses, the future and conditional, every use of the subjunctive, si-clauses, reported speech, por/para and more. All of it is collected in the Grammar reference.
- **Vocabulary.** About 1,700 lesson words, 900+ phrases and a dictionary that understands conjugated forms (e.g. *tuviera* → *tener*).
- **Exercises.** Multiple choice, listening, fill-in-the-gap, sentence building, matching, typing (accent-tolerant and typo-tolerant), dictation and speaking.
- **Spaced repetition.** Every lesson word goes into your review deck and comes back just before you'd forget it. A "Fix my mistakes" session drills your weak words.
- **Verb conjugator and trainer.** 368 verbs, all tenses, with irregular forms highlighted.
- **26 graded stories.** They follow Laura, Omar, Anna, Javier and Grandma Carmen, with audio and tap-to-translate.
- **Daily streak and motivation.** Daily XP goal, streak freezes, a week strip, an activity heatmap, 23 achievements, and a calendar reminder you can add to your phone.
- **Works offline.** Your progress stays on your device. You can export or import it as a backup file under **Me → Settings**.

## Install it on your phone

**Android (Chrome):** open the live link, then tap **⋮ → Add to Home screen / Install app**. You can also use the **Install** button in the app.

**iPhone / iPad (Safari):** open the live link, then tap **Share → Add to Home Screen**.

The app then opens full-screen like a native app and keeps working without internet.

### Getting a good Spanish voice

Audio uses the voices installed on your device, so for the best (Spain) accent:

- **Android:** Settings → System → Languages → Text-to-speech → Google → install **Español (España)**.
- **iPhone:** Settings → Accessibility → Spoken Content → Voices → Spanish (Spain). Download **Mónica** or an *Enhanced* voice.
- **Windows:** Settings → Time & language → Speech → add **Spanish (Spain)**. Microsoft Edge has excellent natural voices.

Pick your favourite voice in **Settings → Spanish voice**.

## The plan

| Weeks | Level | Topics |
|---|---|---|
| 1–9 | **A1** Primeros pasos | sounds, greetings, ser/estar, gender, present tense, family, food, routine, ir a, hobbies, shopping |
| 10–17 | **A2** Construyendo | object pronouns, perfect tense, preterite, imperfect, storytelling, comparisons, commands, future, conditional, travel |
| 18–26 | **B1** Independiente | subjunctive (wishes, feelings, doubt, time, purpose), work & formal Spanish, si-clauses, reported speech, se, por/para, idioms, culture, B1 review |

<details>
<summary>All 26 weeks</summary>

| # | Week | |
|---|---|---|
| 1 | Sounds & first words | ¡Hola! |
| 2 | Who are you? — ser & gender | ¿Quién eres? |
| 3 | Family & descriptions | Mi familia |
| 4 | Daily life — the present tense | Mi día a día |
| 5 | Places & estar | ¿Dónde está? |
| 6 | Food & likes | ¡Me encanta! |
| 7 | My day — stem changes & routine | Un día normal |
| 8 | Plans & free time | ¿Qué vas a hacer? |
| 9 | Shopping, body & A1 wrap-up | De compras |
| 10 | Pronouns & the market | En el mercado |
| 11 | What have you done? — perfect tense | ¿Qué has hecho hoy? |
| 12 | Last weekend — the preterite | ¿Qué hiciste ayer? |
| 13 | When I was a child — the imperfect | Cuando era niño |
| 14 | Telling stories | Érase una vez… |
| 15 | Comparing, health & commands | Más que… |
| 16 | The future & travel | ¡Buen viaje! |
| 17 | Polite requests & A2 wrap-up | ¿Podría…? |
| 18 | The subjunctive I — wishes | ¡Ojalá! |
| 19 | The subjunctive II — feelings & opinions | No creo que… |
| 20 | The subjunctive III — time, purpose & people | Cuando llegues… |
| 21 | Work & formal Spanish | El mundo laboral |
| 22 | Hypotheses — if I had… | Si tuviera tiempo… |
| 23 | Reported speech & the news | Me dijo que… |
| 24 | Opinions, the environment & "se" | El medio ambiente |
| 25 | Culture, feelings & real Spanish | ¡Qué guay! |
| 26 | B1 finale — putting it all together | ¡Lo has conseguido! |

</details>

**Recommended pace:** one lesson a day (≈ 20–40 min) plus your flashcard review. If you miss days, the plan simply waits for you. The Today screen shows whether you're ahead or behind schedule.

## Run it locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev        # http://localhost:5173/Spanish-teacher/
npm test           # content validation + conjugation & language tests
npm run typecheck
npm run build      # production build in dist/
```

Every push to `main` is tested, built and published to the `gh-pages` branch by [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

**Vercel** works too: import the repo at [vercel.com/new](https://vercel.com/new) and keep the detected Vite settings. The build detects Vercel and serves the app from the site root instead of `/Spanish-teacher/`.

## How the code is organised

```
src/
  content/       course content (weeks/w01.ts … w26.ts), verbs, dictionary, pronunciation
  lib/           Spanish utilities: conjugation engine, syllables & stress, answer checking,
                 spaced repetition, speech synthesis & recognition
  exercises/     exercise generator, checker and exercise views
  pages/         screens (Today, Path, Practice, Words, Me, lessons, stories, trainers…)
  components/    shared UI (tap-to-hear text, word sheet, mascot, navigation…)
  store/         progress, streak, XP and achievements (saved in localStorage)
```

Lessons are written in a compact text format (see any `src/content/weeks/wNN.ts`), and `src/content/content.test.ts` checks every lesson, drill and story.

**Built with** React, TypeScript, Vite, Tailwind CSS, Zustand and vite-plugin-pwa. Audio uses the Web Speech API. The design takes inspiration from playful, tactile language apps: chunky buttons, a single bright action colour, instant green/red feedback, and Sol ☀️, the mascot.

¡Mucho ánimo! 💪
