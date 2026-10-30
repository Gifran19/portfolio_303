import { useState } from 'react'

/** Gambar proyek dengan container cerdas, ambient glow, dan foreground contain agar gambar terlihat utuh dan jelas tanpa terpotong. */
export default function ProjectImage({ src, alt, className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`flex items-center justify-center bg-sage text-olive ${className}`}>
        <span className="eyebrow">Project Image</span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden bg-[#05101e] flex items-center justify-center ${className}`}>
      {/* Ambient background glow dari gambar itu sendiri */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25 blur-xl scale-125 pointer-events-none select-none"
      />
      {/* Gambar utama yang tajam, utuh, dan tidak terpotong */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`relative z-10 max-h-full max-w-full object-contain p-2 sm:p-3 rounded-lg drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.02] ${imgClassName}`}
      />
    </div>
  )
}

