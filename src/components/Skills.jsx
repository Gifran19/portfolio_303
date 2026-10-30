import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading id="skills-title" eyebrow="Skills" before="Skills &" accent="Tools" />
        <ul className="grid gap-5 md:grid-cols-2">
          {portfolio.skills.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 70} className="rounded-2xl border border-line bg-sage/50 p-6 transition-colors hover:border-olive md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-olive text-olive">
                <Icon name={g.icon} />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{g.title}</h3>
              <p className="mt-2 text-muted">{g.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${g.title} skills`}>
                {g.items.map((s, j) => (
                  <li key={j} className="chip">{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

