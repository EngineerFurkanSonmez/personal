import { useIntersection } from '../hooks/useIntersection'
import { cvData } from '../data/cv'

export default function Trainings() {
  const { ref, isVisible } = useIntersection<HTMLElement>()

  return (
    <section id="trainings" ref={ref} className="py-24 bg-hud-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-14 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 mb-3">
            <span className="section-label">05 / Certifications</span>
            <div className="flex-1 h-px bg-hud-cyan/15" />
          </div>
          <h2 className="text-3xl font-bold text-white">Trainings & Certifications</h2>
          <p className="text-hud-muted text-sm mt-2">
            All trainings administered by{' '}
            <span className="text-hud-text">Turkish Aerospace Industry (TAI)</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cvData.trainings.map((t, i) => (
            <div
              key={t.title}
              className={`hud-card rounded-sm p-5 flex flex-col gap-4 reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.08 * i}s` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-9 h-9 flex-shrink-0 border border-hud-cyan/25 rounded-sm flex items-center justify-center bg-hud-bg">
                  <svg className="w-4 h-4 text-hud-cyan/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="tag-pill text-[10px]">{t.tag}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-hud-text leading-snug flex-1">{t.title}</h3>

              {/* Footer */}
              <div className="flex flex-col gap-1 pt-2 border-t border-hud-cyan/8">
                <span className="font-mono text-[10px] text-hud-muted uppercase tracking-wide">{t.provider}</span>
                <span className="font-mono text-[10px] text-hud-cyan/60">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
