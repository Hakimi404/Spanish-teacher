import { useEffect, useRef, useState } from 'react'

export type RecState = 'idle' | 'recording' | 'denied' | 'unsupported'

/** Record the learner's voice so they can compare it with the model pronunciation. */
export function useRecorder(maxSeconds = 12) {
  const [state, setState] = useState<RecState>('idle')
  const [url, setUrl] = useState<string | null>(null)
  const rec = useRef<MediaRecorder | null>(null)
  const chunks = useRef<Blob[]>([])
  const timer = useRef<number | undefined>(undefined)

  useEffect(
    () => () => {
      window.clearTimeout(timer.current)
      if (rec.current?.state === 'recording') rec.current.stop()
    },
    [],
  )
  useEffect(() => () => void (url && URL.revokeObjectURL(url)), [url])

  const start = async () => {
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      setState('unsupported')
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mr = new MediaRecorder(stream)
      chunks.current = []
      mr.ondataavailable = (e) => {
        if (e.data.size) chunks.current.push(e.data)
      }
      mr.onstop = () => {
        stream.getTracks().forEach((t) => t.stop())
        const blob = new Blob(chunks.current, { type: mr.mimeType || 'audio/webm' })
        setUrl(URL.createObjectURL(blob))
        setState('idle')
      }
      mr.start()
      rec.current = mr
      setState('recording')
      timer.current = window.setTimeout(() => stop(), maxSeconds * 1000)
    } catch {
      setState('denied')
    }
  }

  const stop = () => {
    window.clearTimeout(timer.current)
    if (rec.current?.state === 'recording') rec.current.stop()
  }

  const play = () => {
    if (url) void new Audio(url).play()
  }

  return { state, url, start, stop, play }
}
