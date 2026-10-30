import { useState } from 'react'
import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'

export default function Home() {
  const { name, role, intro, photo, photoAlt, availability } = portfolio.profile
  const [failed, setFailed] = useState(!photo)

  return (
    <section id="home" aria-labelledby="home-title" className="section-pad !pt-12 md:!pt-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Personal Portfolio</p>
          {availability && (
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-sage px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-olive" aria-hidden="true" />
              {availability}
            </p>
          )}
          <h1 id="home-title" className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="accent">{name}</span>
          </h1>
          <p className="mt-4 text-xl text-olive md:text-2xl">{role}</p>
          <p className="mt-5 max-w-xl text-lg text-muted">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </Reveal>

        <Reveal delay={120} className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative mx-auto max-w-sm">
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-t-[10rem] rounded-b-2xl border border-olive" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-2xl border border-line bg-sage">
              {failed ? (
                <div role="img" aria-label="Profile photo placeholder" className="flex h-full flex-col items-center justify-end gap-3 pb-8 text-olive">
                  <svg viewBox="0 0 120 120" className="h-3/4 w-3/4" aria-hidden="true">
                    <circle cx="60" cy="42" r="20" fill="currentColor" />
                    <path d="M18 120c0-28 18-42 42-42s42 14 42 42z" fill="currentColor" />
                  </svg>
                  <span className="eyebrow">Profile Photo</span>
                </div>
              ) : (
                <img
                  src={photo}
                  alt={photoAlt}
                  width="400"
                  height="500"
                  className="h-full w-full object-cover"
                  onError={() => setFailed(true)}
                />
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

