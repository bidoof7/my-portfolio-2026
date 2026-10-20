import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (reduced) {
      node.dataset.reveal = 'shown'
      return
    }

    if (!('IntersectionObserver' in window)) {
      node.dataset.reveal = 'shown'
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.dataset.reveal = 'shown'
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-reveal={reduced ? 'shown' : 'hidden'}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
