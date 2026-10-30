import Reveal from './Reveal'

/** Judul bagian konsisten: label kecil + h2 dengan aksen serif. */
export default function SectionHeading({ id, eyebrow, before = '', accent, after = '', intro }) {
  return (
    <Reveal className="mb-10 max-w-2xl md:mb-14">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
        {before} <span className="accent">{accent}</span> {after}
      </h2>
      {intro && <p className="mt-4 text-muted">{intro}</p>}
    </Reveal>
  )
}

