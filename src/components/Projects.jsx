import { useRef, useState } from 'react'
import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ProjectModal from './ProjectModal'
import ProjectImage from './ProjectImage'
import Icon from './Icon'

export default function Projects() {
  const { intro, items } = portfolio.projects
  const [selected, setSelected] = useState(null)
  const triggerRef = useRef(null)

  const openProject = (project, e) => {
    triggerRef.current = e.currentTarget
    setSelected(project)
  }
  const closeProject = () => {
    setSelected(null)
    // Kembalikan fokus ke tombol pemicu.
    setTimeout(() => triggerRef.current?.focus(), 0)
  }

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-pad border-t border-line bg-sage/50">
      <div className="container-page">
        <SectionHeading id="projects-title" eyebrow="Portfolio" before="Featured" accent="Projects" intro={intro} />
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 80} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-cream transition-colors hover:border-olive">
              <ProjectImage src={p.image} alt={p.imageAlt} className="aspect-[16/10] w-full border-b border-line" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="eyebrow">{p.category}</p>
                  {p.status && (
                    <span className="chip !px-2.5 !py-0.5 !text-xs font-medium !bg-olive/15 !text-olive border-olive/30">
                      {p.status}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-xl font-semibold leading-snug">{p.name}</h3>
                <p className="mt-2 text-muted">{p.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used in ${p.name}`}>
                  {p.tech.map((t, j) => (
                    <li key={j} className="chip !bg-sage/60">{t}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={(e) => openProject(p, e)}
                  aria-haspopup="dialog"
                  aria-label={`View details of ${p.name}`}
                  className="btn btn-outline mt-6 self-start"
                >
                  View Details <Icon name="arrowRight" size={16} />
                </button>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
      {selected && <ProjectModal project={selected} onClose={closeProject} />}
    </section>
  )
}
