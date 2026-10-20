import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import { useLocalClock } from '../hooks/useLocalClock'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#featured', label: 'Featured' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const { time, offset } = useLocalClock()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const panel = panelRef.current
    const main = document.querySelector('main')
    main?.setAttribute('inert', '')
    document.body.dataset.locked = 'true'

    const first = panel?.querySelector<HTMLAnchorElement>('a')
    first?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !panel) return

      const items = [
        triggerRef.current,
        ...Array.from(
          panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
        ),
      ].filter((item): item is HTMLElement => item !== null)
      if (items.length === 0) return

      const firstItem = items[0]
      const lastItem = items[items.length - 1]
      const active = document.activeElement

      if (event.shiftKey && active === firstItem) {
        event.preventDefault()
        lastItem.focus()
      } else if (!event.shiftKey && active === lastItem) {
        event.preventDefault()
        firstItem.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      main?.removeAttribute('inert')
      delete document.body.dataset.locked
    }
  }, [open])

  const close = (restore = true) => {
    setOpen(false)
    if (restore) triggerRef.current?.focus()
  }

  return (
    <header className="nav">
      <div className="nav-clock">
        <span className="nav-clock-label">{offset} // LOCAL</span>
        <span className="nav-clock-time">{time}</span>
      </div>

      <button
        ref={triggerRef}
        type="button"
        className="nav-trigger"
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => (open ? close() : setOpen(true))}
      >
        <span className="nav-bars" aria-hidden="true">
          {[3, 7, 12, 4, 8, 6, 3].map((height, index) => (
            <span key={index} style={{ height }} />
          ))}
        </span>
        <span className="nav-trigger-label">{open ? 'CLOSE' : 'MENU'}</span>
      </button>

      <a
        className="pill nav-cta"
        href="#contact"
        onClick={() => setOpen(false)}
      >
        Resumé<span aria-hidden="true">↗</span>
      </a>

      <div className={`menu ${open ? 'is-open' : ''}`} id="site-menu">
        <button
          type="button"
          className="menu-scrim"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => close()}
        />
        <div
          ref={panelRef}
          className="menu-panel"
          role="dialog"
          aria-modal="true"
          aria-hidden={!open}
          aria-label="Site navigation"
        >
          <nav className="menu-links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => {
                  setOpen(false)
                  const target = document.querySelector<HTMLElement>(link.href)
                  window.requestAnimationFrame(() => target?.focus({ preventScroll: true }))
                }}
              >
                <span className="menu-word" data-word={link.label}>
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
          <p className="menu-meta">
            {profile.role} / {profile.location}
          </p>
        </div>
      </div>
    </header>
  )
}
