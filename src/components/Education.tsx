import { useIntersection } from '../hooks/useIntersection'
import { cvData } from '../data/cv'

export default function Education() {
  const { ref, isVisible } = useIntersection<HTMLElement>()

  return (
    <section id="education" ref={ref} className="py-24 hud-grid" style={{ background: '#070d14' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-14 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 mb-3">
            <span className="section-label">04 / Academic</span>
            <div className="flex-1 h-px bg-hud-cyan/15" />
          </div>
          <h2 className="text-3xl font-bold text-white">Education</h2>
        </div>

        <div className={`reveal delay-1 ${isVisible ? 'visible' : ''}`}>
          {cvData.education.map(edu => (
            <div key={edu.degree} className="hud-card rounded-sm p-6 max-w-2xl">
              <div className="flex items-start gap-5">
                {/* Degree icon */}
                <div className="flex-shrink-0 w-12 h-12 border border-hud-cyan/25 rounded-sm flex items-center justify-center bg-hud-surface">
                  <svg className="w-6 h-6 text-hud-cyan/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-hud-text mb-1">{edu.degree}</h3>
                  <div className="text-hud-cyan font-medium text-sm mb-3">{edu.institution}</div>
                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-4">
                    <div className="flex items-center gap-1.5 text-hud-muted text-xs font-mono">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-hud-muted text-xs font-mono">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {edu.location}
                    </div>
                  </div>
                  <p className="text-hud-muted text-xs leading-relaxed">{edu.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
