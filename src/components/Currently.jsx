import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

export default function Currently() {
  return (
    <section id="currently" aria-labelledby="currently-title" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading id="currently-title" eyebrow="Updates" before="Current" accent="Focus" />
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.currently.map((c, i) => (
            <Reveal as="li" key={i} delay={i * 60} className="bg-cream p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-olive">
                <Icon name={c.icon} size={20} />
              </span>
              <p className="eyebrow mt-4 !text-muted">{c.label}</p>
              <p className="mt-1 break-words font-medium">{c.value}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

