/** How to install a Spain-Spanish voice on each platform. */
export function VoiceHelp() {
  const items = [
    { os: 'iPhone / iPad', steps: 'Settings → Accessibility → Spoken Content → Voices → Spanish → pick "Mónica" or "Jorge" (Spain) and download an Enhanced version.' },
    { os: 'Android', steps: 'Settings → System → Languages → Text-to-speech output → Google engine ⚙ → Install voice data → Spanish (Spain). Use Chrome.' },
    { os: 'Windows', steps: 'Settings → Time & language → Speech → Add voices → Español (España). In Microsoft Edge you also get very natural online voices.' },
    { os: 'Mac', steps: 'System Settings → Accessibility → Spoken Content → System voice → Manage voices → Spanish (Spain).' },
  ]
  return (
    <div className="card p-4 space-y-3">
      <div className="font-black">No sound or wrong accent?</div>
      <ul className="space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.os}>
            <span className="font-black">{i.os}: </span>
            <span className="text-ink2 font-bold">{i.steps}</span>
          </li>
        ))}
      </ul>
      <div className="text-xs font-bold text-ink3">Also check that your phone isn’t on silent mode. After installing a voice, reload the app and pick it in Settings.</div>
    </div>
  )
}
