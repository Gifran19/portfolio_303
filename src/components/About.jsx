import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

export default function About() {
  const { paragraphs, summary } = portfolio.about
  const { cvUrl } = portfolio.profile

  return (
    <section id="about" aria-labelledby="about-title" className="section-pad border-t border-line bg-sage/50">
      <div className="container-page">
        <SectionHeading id="about-title" eyebrow="About" before="About" accent="Me" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="space-y-5 text-lg text-muted">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="pt-4">
              {cvUrl ? (
                <a
                  href={cvUrl}
                  target={cvUrl.startsWith('http') ? '_blank' : undefined}
                  rel={cvUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  download={!cvUrl.startsWith('http')}
                  className="btn btn-primary"
                >
                  <Icon name="download" size={18} /> Download CV
                  {cvUrl.startsWith('http') && <span className="sr-only"> (opens CV in a new tab)</span>}
                </a>
              ) : (
                <>
                  <button type="button" disabled aria-describedby="cv-note" className="btn btn-primary">
                    <Icon name="download" size={18} /> Download CV
                  </button>
                  <p id="cv-note" className="mt-2 text-sm">CV is not yet available.</p>
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <dl className="rounded-2xl border border-line bg-cream px-6 py-2">
              {summary.filter((s) => Boolean(s.value)).map((s) => (
                <div key={s.label} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-4 last:border-0">
                  <dt className="eyebrow !text-muted pt-0.5">{s.label}</dt>
                  <dd className="min-w-0 break-words">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

