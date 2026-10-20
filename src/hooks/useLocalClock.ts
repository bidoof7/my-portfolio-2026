import { useEffect, useState } from 'react'

function offsetLabel(offset: number) {
  const sign = offset < 0 ? '−' : '+'
  const hours = Math.floor(Math.abs(offset) / 60)
  const minutes = Math.abs(offset) % 60
  return `GMT${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}

export function useLocalClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    let timer = 0

    const tick = () => {
      if (!document.hidden) setNow(new Date())
    }

    const start = () => {
      window.clearInterval(timer)
      timer = window.setInterval(tick, 1000)
    }

    start()
    document.addEventListener('visibilitychange', start)
    return () => {
      window.clearInterval(timer)
      document.removeEventListener('visibilitychange', start)
    }
  }, [])

  const time = now.toLocaleTimeString('en-GB', { hour12: false })
  return { time, offset: offsetLabel(-now.getTimezoneOffset()) }
}
