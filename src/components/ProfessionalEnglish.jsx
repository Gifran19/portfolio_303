import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

function formatDate(dateString) {
  if (!dateString) return ''
  const parts = dateString.split('-')
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1
    const day = parseInt(parts[2], 10)
    const d = new Date(year, month, day)
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    }
  }
  return dateString
}

function getTypeIcon(type) {
  const t = (type || '').toLowerCase()
  if (t === 'video') return 'video'
  if (t === 'pdf') return 'pdf'
  if (t === 'presentation') return 'presentation'
  if (t === 'link') return 'link'
  return 'document'
}

export default function ProfessionalEnglish() {
  const assignments = portfolio.englishAssignments || []

  return (
    <section id="english-class" aria-labelledby="english-class-title" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading
          id="english-class-title"
          eyebrow="Coursework"
          before="Professional"
          accent="English Class"
          intro="A curated collection of assignments and coursework from the Professional English class."
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assignments.map((item, index) => {
            const taskNumber = String(index + 1).padStart(2, '0')
            const dateFormatted = formatDate(item.date)
            const buttonLabel = item.buttonText || 'Open in Google Drive'

            return (
              <Reveal
                as="li"
                key={item.id || index}
                delay={index * 70}
                className="flex flex-col justify-between rounded-2xl border border-line bg-sage/50 p-6 transition-colors hover:border-olive md:p-7"
              >
                <div>
                  {/* Header kartu: Tipe, Pertemuan, dan Nomor Besar */}
                  <div className="flex items-start justify-between gap-3 border-b border-line pb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="chip inline-flex items-center gap-1.5 !px-2.5 !py-0.5 !text-xs font-semibold uppercase tracking-wider text-olive border-olive/30 bg-olive/10">
                        <Icon name={getTypeIcon(item.type)} size={13} />
                        {item.type}
                      </span>
                      {item.meeting && (
                        <span className="text-xs font-medium uppercase tracking-wider text-muted">
                          {item.meeting}
                        </span>
                      )}
                    </div>
                    <span className="font-serif text-2xl font-bold italic text-olive/40 select-none">
                      {taskNumber}
                    </span>
                  </div>

                  {/* Judul Tugas */}
                  <h3 className="mt-5 text-xl font-bold uppercase tracking-tight text-ink leading-snug break-words">
                    {item.title}
                  </h3>

                  {/* Deskripsi Tugas */}
                  <p className="mt-3 text-muted text-sm md:text-base leading-relaxed break-words">
                    {item.description}
                  </p>

                  {/* Tanggal opsional jika diisi */}
                  {dateFormatted && (
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
                      <Icon name="calendar" size={13} />
                      <span>{dateFormatted}</span>
                    </div>
                  )}
                </div>

                {/* Tombol Aksi */}
                <div className="pt-6">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline w-full sm:w-auto uppercase !text-xs !tracking-wider font-semibold"
                    >
                      {buttonLabel} <Icon name="external" size={15} />
                      <span className="sr-only"> (opens {item.title} assignment in a new tab)</span>
                    </a>
                  ) : (
                    <div>
                      <button
                        type="button"
                        disabled
                        aria-disabled="true"
                        className="btn btn-outline w-full opacity-50 cursor-not-allowed sm:w-auto uppercase !text-xs !tracking-wider font-semibold"
                      >
                        {buttonLabel} <Icon name="external" size={15} />
                      </button>
                      <p data-status="unavailable" className="mt-2 text-xs text-muted">
                        Assignment not yet available
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
