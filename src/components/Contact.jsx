import { useEffect, useRef, useState } from 'react'
import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

function fallbackCopy(text) {
  const ta = document.createElement('textarea')
  ta.value = text
  ta.setAttribute('readonly', '')
  ta.style.position = 'fixed'
  ta.style.opacity = '0'
  document.body.appendChild(ta)
  ta.select()
  let ok = false
  try {
    ok = document.execCommand('copy')
  } catch {
    ok = false
  }
  document.body.removeChild(ta)
  return ok
}

export default function Contact() {
  const { intro, email, linkedin, github, instagram } = portfolio.contact
  const [toast, setToast] = useState('')
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const notify = (msg) => {
    setToast(msg)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(''), 3000)
  }

  const copyEmail = async () => {
    let ok = false
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(email)
        ok = true
      }
    } catch {
      ok = false
    }
    if (!ok) ok = fallbackCopy(email)
    notify(ok ? 'Email address copied to clipboard.' : `Failed to copy. Please copy manually: ${email}`)
  }

  const channels = [
    { icon: 'linkedin', label: 'LinkedIn', url: linkedin },
    { icon: 'github', label: 'GitHub', url: github },
    { icon: 'instagram', label: 'Instagram', url: instagram },
  ].filter((c) => Boolean(c.url))

  const rowClass = 'flex items-center gap-4 rounded-xl border border-line bg-cream p-4'
  const iconClass = 'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-olive'

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad border-t border-line bg-sage/50">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading id="contact-title" eyebrow="Contact" before="Get in" accent="Touch" intro={intro} />
        </div>

        <Reveal delay={100}>
          <ul className="space-y-3">
            {email && (
              <li className={rowClass}>
                <span className={iconClass}><Icon name="mail" /></span>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow !text-muted">Email</p>
                  <a href={`mailto:${email}`} className="break-all font-medium hover:text-olive hover:underline">{email}</a>
                </div>
                <button type="button" onClick={copyEmail} aria-label="Copy email address" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-olive hover:bg-sage">
                  <Icon name="copy" size={18} />
                </button>
              </li>
            )}
            {channels.map((c) => (
              <li key={c.label} className={rowClass}>
                <span className={iconClass}><Icon name={c.icon} /></span>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow !text-muted">{c.label}</p>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="break-all font-medium hover:text-olive hover:underline">
                    {c.url.replace(/^https?:\/\/(www\.)?/, '')}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
        {toast && <p className="anim-pop rounded-full bg-ink px-5 py-2.5 text-sm text-cream shadow-lg">{toast}</p>}
      </div>
    </section>
  )
}

