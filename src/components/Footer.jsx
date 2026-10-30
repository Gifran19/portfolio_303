import { portfolio } from '../data/portfolio'
import Icon from './Icon'

export default function Footer() {
  const { name, tagline } = portfolio.profile
  return (
    <footer className="border-t border-line bg-[#020c1b] text-muted">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-xl italic text-olive">{name}</p>
          <p className="mt-1 text-sm text-muted">{tagline}</p>
          <p className="mt-4 text-sm text-muted/80">© {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
        <a
          href="#home"
          className="inline-flex items-center gap-2 self-start rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-olive transition-colors hover:bg-sage focus-visible:!outline-olive md:self-auto"
        >
          <Icon name="arrowUp" size={16} /> Back to Top
        </a>
      </div>
    </footer>
  )
}

