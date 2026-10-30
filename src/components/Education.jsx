import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section-pad border-t border-line bg-sage/50">
      <div className="container-page">
        <SectionHeading id="education-title" eyebrow="Academic" accent="Education" />
        <ul className="grid gap-5 md:grid-cols-2">
          {portfolio.education.map((ed, i) => (
            <Reveal as="li" key={i} delay={i * 80} className="rounded-2xl border border-line bg-cream p-6 md:p-8">
              {ed.period && <p className="eyebrow">{ed.period}</p>}
              <h3 className="mt-2 text-xl font-semibold">{ed.institution}</h3>
              <p className="text-olive">{ed.program}</p>
              {ed.note && <p className="mt-3 text-muted">{ed.note}</p>}
              {(ed.nim || ed.gpa || (ed.courses && ed.courses.length > 0) || (ed.awards && ed.awards.length > 0)) && (
                <dl className="mt-4 space-y-3 border-t border-line pt-4 text-sm">
                  {ed.nim && (
                    <div>
                      <dt className="eyebrow !text-muted">Student ID (NIM)</dt>
                      <dd>{ed.nim}</dd>
                    </div>
                  )}
                  {ed.gpa && (
                    <div>
                      <dt className="eyebrow !text-muted">GPA</dt>
                      <dd>{ed.gpa}</dd>
                    </div>
                  )}
                  {ed.courses && ed.courses.length > 0 && (
                    <div>
                      <dt className="eyebrow !text-muted">Relevant Coursework</dt>
                      <dd>{ed.courses.join(', ')}</dd>
                    </div>
                  )}
                  {ed.awards && ed.awards.length > 0 && (
                    <div>
                      <dt className="eyebrow !text-muted">Honors & Awards</dt>
                      <dd>{ed.awards.join(', ')}</dd>
                    </div>
                  )}
                </dl>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

