import { useEffect, useRef } from 'react'
import ProjectImage from './ProjectImage'
import Icon from './Icon'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function ProjectModal({ project: p, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      // Jebak fokus di dalam modal.
      const nodes = dialogRef.current?.querySelectorAll(FOCUSABLE)
      if (!nodes?.length) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const rows = [
    ['Problem & Objectives', p.goal],
    ['My Role', p.role],
    ['Outcomes & Learnings', p.outcome],
  ]

  return (
    <div
      className="anim-fade fixed inset-0 z-[60] flex items-end justify-center bg-[#020c1b]/80 backdrop-blur-sm p-0 sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="anim-pop relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-line bg-cream sm:rounded-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream text-olive hover:bg-sage"
        >
          <Icon name="close" />
        </button>
        {/* Area gulir terpisah agar tombol tutup selalu terlihat */}
        <div tabIndex={0} className="min-w-0 overflow-y-auto overflow-x-hidden overscroll-contain focus-visible:outline-offset-[-3px]">
        <ProjectImage src={p.image} alt={p.imageAlt} className="h-64 sm:h-80 md:h-96 w-full border-b border-line" />
        <div className="p-6 md:p-8 [overflow-wrap:anywhere]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="eyebrow">{p.category}</p>
            {p.status && (
              <span className="chip !px-2.5 !py-0.5 !text-xs font-medium !bg-olive/15 !text-olive border-olive/30">
                {p.status}
              </span>
            )}
          </div>
          <h3 id="modal-title" className="mt-2 text-2xl font-semibold md:text-3xl">{p.name}</h3>
          
          <div className="mt-3 space-y-3 text-muted">
            {(Array.isArray(p.description)
              ? p.description
              : (p.description || '').split(/\n\s*\n/)
            ).map((para, idx) => (
              <p key={idx} className="leading-relaxed">{para.trim()}</p>
            ))}
          </div>

          <dl className="mt-6 divide-y divide-line border-y border-line">
            {rows.filter(([, val]) => Boolean(val)).map(([label, value]) => (
              <div key={label} className="grid gap-1 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4">
                <dt className="eyebrow !text-muted">{label}</dt>
                <dd className="leading-relaxed">{value}</dd>
              </div>
            ))}
            {p.features && p.features.length > 0 && (
              <div className="grid gap-2 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4">
                <dt className="eyebrow !text-muted">Key Features</dt>
                <dd>
                  <ul className="list-disc space-y-1.5 pl-5 text-muted marker:text-olive">
                    {p.features.map((feat, idx) => (
                      <li key={idx} className="leading-relaxed">{feat}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
            {p.tech && p.tech.length > 0 && (
              <div className="grid gap-2 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4">
                <dt className="eyebrow !text-muted">Technologies</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {p.tech.map((t, i) => (
                      <li key={i} className="chip">{t}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>

          {(p.demoUrl || p.repoUrl) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {p.demoUrl && (
                <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Demo <Icon name="external" size={16} />
                </a>
              )}
              {p.repoUrl && (
                <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Repository <Icon name="external" size={16} />
                </a>
              )}
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  )
}

