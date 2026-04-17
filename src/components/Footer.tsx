import { cvData } from '../data/cv'

export default function Footer() {
  return (
    <footer className="border-t border-hud-cyan/8 bg-hud-bg py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="font-mono text-xs text-hud-muted tracking-widest uppercase">
            <span className="text-white">F.</span>
            <span className="text-hud-cyan">SÖNMEZ</span>
            <span className="text-hud-muted"> // {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`mailto:${cvData.personal.email}`}
              className="text-hud-muted hover:text-hud-cyan text-xs font-mono transition-colors"
            >
              Email
            </a>
            <a
              href={cvData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-hud-muted hover:text-hud-cyan text-xs font-mono transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="font-mono text-[10px] text-hud-muted/50 tracking-wide">
            Munich, Germany — Embedded Systems Engineer
          </div>
        </div>
      </div>
    </footer>
  )
}
