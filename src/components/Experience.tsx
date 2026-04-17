import { useState } from 'react'
import { useIntersection } from '../hooks/useIntersection'
import { cvData } from '../data/cv'

export default function Experience() {
  const { ref, isVisible } = useIntersection<HTMLElement>()
  const [expanded, setExpanded] = useState<string>('capgemini')

  return (
    <section id="experience" ref={ref} className="py-24 bg-hud-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-14 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 mb-3">
            <span className="section-label">03 / History</span>
            <div className="flex-1 h-px bg-hud-cyan/15" />
          </div>
          <h2 className="text-3xl font-bold text-white">Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-hud-cyan/40 via-hud-cyan/20 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {cvData.experience.map((job, i) => {
              const isOpen = expanded === job.id
              return (
                <div
                  key={job.id}
                  className={`relative pl-0 sm:pl-14 reveal ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.08 * i}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[10px] top-5 w-2.5 h-2.5 rounded-full border-2 border-hud-bg hidden sm:block ${job.current ? 'bg-hud-cyan shadow-[0_0_8px_rgba(0,212,255,0.7)]' : 'bg-hud-subtle'}`} />

                  <div className="hud-card rounded-sm">
                    {/* Header row — always visible */}
                    <button
                      className="w-full text-left p-5 pb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2"
                      onClick={() => setExpanded(isOpen ? '' : job.id)}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          {job.current && (
                            <span className="font-mono text-[9px] uppercase tracking-widest text-hud-bg bg-hud-cyan px-1.5 py-0.5 rounded-sm font-semibold">
                              Current
                            </span>
                          )}
                          <h3 className="text-base font-semibold text-hud-text">{job.role}</h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="text-hud-cyan text-sm font-medium">{job.company}</span>
                          <span className="text-hud-muted text-xs">·</span>
                          <span className="text-hud-muted text-xs font-mono">{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="font-mono text-xs text-hud-muted border border-hud-subtle/50 px-2 py-1 rounded-sm whitespace-nowrap">
                          {job.period}
                        </span>
                        <svg
                          className={`w-4 h-4 text-hud-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Expanded content */}
                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-hud-cyan/8">
                        <ul className="mt-4 space-y-2.5 mb-5">
                          {job.bullets.map((b, bi) => (
                            <li key={bi} className="flex gap-3 text-sm text-hud-muted leading-relaxed">
                              <span className="text-hud-cyan/50 font-mono mt-0.5 flex-shrink-0">›</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map(tag => (
                            <span key={tag} className="tag-pill">{tag}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
