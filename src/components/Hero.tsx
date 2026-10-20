import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'

const nameLetters = [
  // { char: 'M', delay: 0.58, light: false },
  // { char: 'i', delay: 0.68, light: false },
  // { char: 'n', delay: 0.78, light: false },
  // { char: 'h', delay: 0.88, light: false },
  // { char: 'D', delay: 0.98, light: true },
  // { char: 'u', delay: 1.08, light: true },
  // { char: 'y', delay: 1.18, light: true },
]

const monogramLetters = [
  { char: 'D', delay: 0.38 },
  { char: 'u', delay: 0.48 },
  { char: 'y', delay: 0.58 },
]

export function Hero() {
  const reduced = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const leftRef = useRef(false)
  const [ready, setReady] = useState(false)
  const [run, setRun] = useState(0)

  useEffect(() => {
    if (reduced) return

    let cancelled = false
    const timeout = window.setTimeout(() => {
      if (!cancelled) setReady(true)
    }, 900)

    document.fonts?.ready.then(() => {
      window.clearTimeout(timeout)
      if (!cancelled) setReady(true)
    })

    return () => {
      cancelled = true
      window.clearTimeout(timeout)
    }
  }, [reduced])

  useEffect(() => {
    const node = heroRef.current
    if (!node || reduced || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio === 0) {
            leftRef.current = true
            return
          }
          if (leftRef.current && entry.intersectionRatio >= 0.2) {
            leftRef.current = false
            setRun((value) => value + 1)
          }
        })
      },
      { threshold: [0, 0.2] },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reduced])

  const playing = ready && !reduced
  const letterClass = reduced ? 'is-static' : playing ? 'is-playing' : 'is-waiting'

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-art" aria-hidden="true">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="heroGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ff630f" stopOpacity="0" />
              <stop offset="1" stopColor="#ff630f" stopOpacity=".55" />
            </linearGradient>
            <radialGradient id="heroHalo" cx="62%" cy="42%" r="48%">
              <stop offset="0" stopColor="#ff630f" stopOpacity=".2" />
              <stop offset="1" stopColor="#ff630f" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1600" height="900" fill="url(#heroHalo)" />
          <g stroke="#242424" strokeWidth="1">
            {Array.from({ length: 13 }, (_, index) => (
              <path key={`v${index}`} d={`M${index * 133} 0v900`} />
            ))}
            {Array.from({ length: 8 }, (_, index) => (
              <path key={`h${index}`} d={`M0 ${index * 128}h1600`} />
            ))}
          </g>
          <g fill="none" stroke="#383838" strokeWidth="1">
            <circle cx="985" cy="405" r="300" />
            <circle cx="985" cy="405" r="210" />
            <circle cx="985" cy="405" r="120" />
          </g>
          <path
            d="M685 405h180m120 0h120M985 105v90m0 420v90"
            stroke="#464646"
            strokeWidth="1"
          />
          <path
            d="M805 285 985 405 1165 525"
            fill="none"
            stroke="url(#heroGlow)"
            strokeWidth="2"
          />
          <g fill="#0b0b0b" stroke="#6a6a6a">
            <circle cx="985" cy="405" r="7" />
            <circle cx="805" cy="285" r="5" />
            <circle cx="1165" cy="525" r="5" />
            <circle cx="985" cy="105" r="5" />
            <circle cx="985" cy="705" r="5" />
          </g>
          <g
            fill="#8a8a8a"
            fontFamily="ui-monospace, Consolas, monospace"
            fontSize="11"
            letterSpacing="2"
          >
        
          </g>
          <path d="M1040 340a55 55 0 0 1 35 96" stroke="#ff630f" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-title">
          <span className="hero-monogram" aria-hidden="true" key={`mono-${run}`}>
            {monogramLetters.map((letter) => (
              <span
                key={letter.char}
                className={`hero-letter ${letterClass}`}
                style={{ animationDelay: `${letter.delay}s` }}
              >
                {letter.char}
              </span>
            ))}
          </span>

          <h1 className="hero-name">
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden="true" className="hero-name-visual" key={`name-${run}`}>
              {nameLetters.map((letter) => (
                <span
                  key={letter.char}
                  className={`hero-letter ${letterClass} ${letter.light ? 'is-light' : ''}`}
                  style={{ animationDelay: `${letter.delay}s` }}
                >
                  {letter.char}
                </span>
              ))}

            </span>
            <sup
              aria-hidden="true"
              className={`hero-sup ${reduced ? 'is-static' : 'is-playing'}`}
            >
              [01]
            </sup>
          </h1>
        </div>

        <div className="hero-subtitle">
          <span className="hero-role">
            Software developer
          </span>
          <span className="hero-tag">[ Portfolio ]</span>
        </div>

        <a className="hero-scroll" href="#about" aria-label="Scroll to about">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 4v15M5 12l7 7 7-7" />
          </svg>
        </a>

        <span className="hero-vertical" aria-hidden="true">
          ENTERPRISE DELIVERY / BACKEND FOCUS — 001
        </span>

        <div className="hero-foot">
          <div className="hero-notes">
            <p>• Enterprise systems in C#/.NET, React, and SQL Server.</p>
          </div>
          <a className="pill" href="#featured">
            View featured project <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>
    </section>
  )
}
