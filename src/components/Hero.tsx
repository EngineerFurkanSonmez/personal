import { useEffect, useState } from 'react'
import { cvData } from '../data/cv'

const roles = [
  'Embedded Systems Engineer',
  'Avionics Software Developer',
  'DO-178C Specialist',
  'Safety-Critical Firmware Engineer',
  'Real-Time Systems Engineer',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = roles[roleIdx]
    let t: ReturnType<typeof setTimeout>

    if (!deleting && text.length < role.length) {
      t = setTimeout(() => setText(role.slice(0, text.length + 1)), 55)
    } else if (!deleting && text.length === role.length) {
      t = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 28)
    } else {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(t)
  }, [text, deleting, roleIdx])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hud-grid"
      style={{
        background:
          'radial-gradient(ellipse 70% 60% at 15% 55%, rgba(0,212,255,0.055) 0%, transparent 65%), #070d14',
      }}
    >
      {/* Horizontal accent lines */}
      <div className="absolute top-[38%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-hud-cyan/8 to-transparent pointer-events-none" />
      <div className="absolute bottom-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-hud-cyan/5 to-transparent pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-20 right-8 w-16 h-16 border-t border-r border-hud-cyan/15 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-20 left-8 w-16 h-16 border-b border-l border-hud-cyan/15 pointer-events-none hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 w-full">
        <div className="max-w-3xl">

          {/* System status badge */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-hud-cyan animate-pulse" />
            <span className="font-mono text-hud-cyan/50 text-xs tracking-[0.35em] uppercase">
              sys.online — portfolio.v1.0
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none mb-5 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="text-white block">Furkan</span>
            <span
              className="block text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(90deg, #00d4ff 0%, #7ee8ff 100%)',
              }}
            >
              Sönmez
            </span>
          </h1>

          {/* Animated role */}
          <div
            className="h-9 flex items-center mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            <span className="font-mono text-lg sm:text-xl text-hud-muted">
              {text}
              <span className="cursor-blink" />
            </span>
          </div>

          {/* Summary */}
          <p
            className="text-hud-muted text-base sm:text-lg max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            ~5 years engineering safety-critical embedded software for avionics and real-time systems.
            Specialized in{' '}
            <span className="text-hud-text">DO-178C</span>,{' '}
            <span className="text-hud-text">aviation battery management</span>, and{' '}
            <span className="text-hud-text">multi-protocol communication stacks</span>.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-hud-cyan hover:bg-cyan-300 text-hud-bg font-semibold text-sm font-mono tracking-wide rounded-sm transition-all duration-200 shadow-lg shadow-hud-cyan/20"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="px-6 py-3 border border-hud-cyan/35 text-hud-cyan hover:bg-hud-cyan/10 hover:border-hud-cyan/70 text-sm font-mono tracking-wide rounded-sm transition-all duration-200"
            >
              View Experience
            </a>
          </div>

          {/* Contact links */}
          <div
            className="flex flex-wrap gap-6 items-center opacity-0 animate-fade-up"
            style={{ animationDelay: '0.78s', animationFillMode: 'forwards' }}
          >
            <a
              href={`mailto:${cvData.personal.email}`}
              className="flex items-center gap-2 text-hud-muted hover:text-hud-cyan text-sm transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:text-hud-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {cvData.personal.email}
            </a>
            <a
              href={cvData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-hud-muted hover:text-hud-cyan text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <div className="flex items-center gap-2 text-hud-muted text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Munich, Germany
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30 pointer-events-none">
        <span className="font-mono text-[10px] text-hud-cyan tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-hud-cyan to-transparent" />
      </div>
    </section>
  )
}
