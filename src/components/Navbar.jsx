import { useEffect, useRef, useState } from 'react'
import { portfolio } from '../data/portfolio'
import useActiveSection from '../hooks/useActiveSection'
import Icon from './Icon'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'english-class', label: 'English Class' },
  { id: 'contact', label: 'Contact' },
]
const ids = links.map((l) => l.id)
// Currently ikut dilacak (tanpa item menu) agar menu tidak menyorot bagian yang salah.
const trackedIds = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'currently',
  'english-class',
  'contact',
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(trackedIds)
  const toggleRef = useRef(null)

  // Tutup dengan Escape, kembalikan fokus ke tombol hamburger.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Tutup menu bila layar melebar ke desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#home" className="font-serif text-xl italic text-olive" aria-label={`${portfolio.profile.name} — back to top`}>
          {portfolio.profile.initials}
          <span className="not-italic text-ink">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`relative block px-3 py-2 text-sm transition-colors hover:text-olive ${
                    active === l.id ? 'font-semibold text-olive' : 'text-muted'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-3 -bottom-px h-0.5 bg-olive transition-opacity ${
                      active === l.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary hidden !py-2 !text-sm sm:inline-flex">
            Contact Me
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-olive hover:bg-sage lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Mobile navigation" className="anim-fade border-t border-line bg-cream lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {links.map((l) => (
              <li key={l.id} className="border-b border-line last:border-0">
                <a
                  href={`#${l.id}`}
                  onClick={close}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`block py-3 ${active === l.id ? 'font-semibold text-olive' : 'text-ink'}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href="#contact" onClick={close} className="btn btn-primary w-full">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

