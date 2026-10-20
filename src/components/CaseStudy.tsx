import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

type CaseStudyProps = {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export function CaseStudy({ open, onClose, title, children }: CaseStudyProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
      document.body.dataset.locked = 'true'
    }
    if (!open && dialog.open) {
      dialog.close()
      delete document.body.dataset.locked
    }

    return () => {
      delete document.body.dataset.locked
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      className="case-dialog"
      aria-label={title}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {open && (
        <div className="case-inner">
          <div className="case-toolbar">
            <span>{title}</span>
            <button type="button" className="case-close" onClick={onClose}>
              Close <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="case-body">{children}</div>
        </div>
      )}
    </dialog>
  )
}
