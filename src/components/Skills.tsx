import { useIntersection } from '../hooks/useIntersection'
import { cvData } from '../data/cv'

/* Inline SVG icons keyed to the icon field in cv.ts */
function CategoryIcon({ icon }: { icon: string }) {
  const cls = 'w-4 h-4 text-hud-cyan flex-shrink-0'
  switch (icon) {
    case 'code':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    case 'cpu':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1.5} />
          <rect x="9" y="9" width="6" height="6" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeWidth={1.5} d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
        </svg>
      )
    case 'radio':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    case 'shield':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    case 'test':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    case 'tool':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        </svg>
      )
    case 'layers':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    default:
      return null
  }
}

export default function Skills() {
  const { ref, isVisible } = useIntersection<HTMLElement>()

  return (
    <section id="skills" ref={ref} className="py-24 hud-grid" style={{ background: 'radial-gradient(ellipse 80% 50% at 80% 50%, rgba(0,212,255,0.025) 0%, transparent 60%), #070d14' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-14 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 mb-3">
            <span className="section-label">02 / Capabilities</span>
            <div className="flex-1 h-px bg-hud-cyan/15" />
          </div>
          <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {cvData.skills.map((group, i) => (
            <div
              key={group.category}
              className={`hud-card rounded-sm p-5 reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.06 * i}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4">
                <CategoryIcon icon={group.icon} />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-hud-cyan/80">
                  {group.category}
                </span>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="skill-chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
