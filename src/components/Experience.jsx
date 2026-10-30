import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading id="experience-title" eyebrow="Career Journey" accent="Experience" />
        <ol className="relative ml-2 border-l border-line md:ml-4">
          {portfolio.experience.map((e, i) => (
            <Reveal as="li" key={i} delay={i * 80} className="relative pb-10 pl-8 last:pb-0 md:pl-12">
              <span aria-hidden="true" className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-olive bg-cream" />
              {e.period && <p className="eyebrow">{e.period}</p>}
              <h3 className="mt-1 text-xl font-semibold">{e.position}</h3>
              <p className="text-olive">{e.organization}</p>
              {e.description && <p className="mt-3 max-w-2xl text-muted">{e.description}</p>}
              {e.points && e.points.length > 0 && (
                <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-muted marker:text-olive">
                  {e.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}


