import { useIntersection } from '../hooks/useIntersection'
import { cvData } from '../data/cv'

const contactItems = [
  {
    label: 'Email',
    value: cvData.personal.email,
    href: `mailto:${cvData.personal.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: cvData.personal.linkedin,
    href: cvData.personal.linkedinUrl,
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: cvData.personal.phone,
    href: `tel:${cvData.personal.phone.replace(/\s/g, '')}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: cvData.personal.location,
    href: undefined,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const { ref, isVisible } = useIntersection<HTMLElement>()

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 hud-grid"
      style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 80%, rgba(0,212,255,0.04) 0%, transparent 60%), #070d14',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-14 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 mb-3">
            <span className="section-label">06 / Reach Out</span>
            <div className="flex-1 h-px bg-hud-cyan/15" />
          </div>
          <h2 className="text-3xl font-bold text-white">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: message */}
          <div className={`reveal delay-1 ${isVisible ? 'visible' : ''}`}>
            <p className="text-hud-muted text-base leading-relaxed mb-6">
              Open to opportunities in embedded systems, avionics software, and safety-critical development.
              Based in Munich, Germany. Available for full-time roles and project engagements.
            </p>
            <p className="text-hud-muted text-sm leading-relaxed">
              Feel free to reach out via email or LinkedIn — I typically respond within 24 hours.
            </p>

            {/* Terminal-style status block */}
            <div className="mt-8 hud-card rounded-sm p-4 font-mono text-xs">
              <div className="text-hud-cyan/40 mb-3 tracking-wide">// status</div>
              <div className="space-y-1.5">
                <div className="flex gap-3">
                  <span className="text-hud-muted w-24 flex-shrink-0">availability</span>
                  <span className="text-green-400">open_to_offers</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-hud-muted w-24 flex-shrink-0">location</span>
                  <span className="text-hud-text">Munich, DE</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-hud-muted w-24 flex-shrink-0">relocation</span>
                  <span className="text-hud-text">available_upon_request</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-hud-muted w-24 flex-shrink-0">domain</span>
                  <span className="text-hud-cyan">avionics / embedded</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact cards */}
          <div className={`space-y-3 reveal delay-2 ${isVisible ? 'visible' : ''}`}>
            {contactItems.map(item => {
              const inner = (
                <>
                  <div className="w-10 h-10 flex-shrink-0 border border-hud-cyan/20 rounded-sm flex items-center justify-center bg-hud-surface text-hud-cyan/70">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] text-hud-muted uppercase tracking-widest mb-0.5">{item.label}</div>
                    <div className="text-sm text-hud-text font-medium truncate">{item.value}</div>
                  </div>
                  {item.href && (
                    <svg className="w-4 h-4 text-hud-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </>
              )

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="hud-card rounded-sm p-4 flex items-center gap-4 group cursor-pointer hover:border-hud-cyan/40 transition-all"
                >
                  {inner}
                </a>
              ) : (
                <div key={item.label} className="hud-card rounded-sm p-4 flex items-center gap-4">
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
