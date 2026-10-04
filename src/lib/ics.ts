/** A daily recurring calendar event (.ics) — works as a reminder on any phone without a server. */
export function reminderIcs(time: string, startDate: string, appUrl: string): string {
  const [hh = '19', mm = '00'] = time.split(':')
  const d = startDate.replace(/-/g, '')
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Camino//Spanish learning//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:camino-daily-${d}-${hh}${mm}@camino.app`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${d}T${hh.padStart(2, '0')}${mm.padStart(2, '0')}00`,
    'DURATION:PT30M',
    'RRULE:FREQ=DAILY',
    'SUMMARY:Spanish practice · Camino 🔥',
    `DESCRIPTION:Keep your streak alive! Today's lesson is waiting: ${appUrl}`,
    `URL:${appUrl}`,
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    'DESCRIPTION:¡Hora de español! Time for Spanish.',
    'TRIGGER:PT0M',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}
