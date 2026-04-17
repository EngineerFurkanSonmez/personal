import { useIntersection } from '../hooks/useIntersection'
import { cvData } from '../data/cv'

const stats = [
  { label: 'Experience',    value: '~5 Years' },
  { label: 'Domain',        value: 'Avionics / Embedded' },
  { label: 'Safety Std.',   value: 'DO-178C / DAL-A' },
  { label: 'Current Role',  value: 'Capgemini Engineering' },
  { label: 'Location',      value: 'Munich, Germany' },
  { label: 'Languages',     value: 'Turkish · English C1' },
]

const strengths = [
  { label: 'Safety-Critical SW',  desc: 'Full DO-178C lifecycle: planning, development, verification, SOI activities' },
  { label: 'Multi-Protocol Comms', desc: 'ARINC-429, CAN, SPI, UART, I2C, RS485, TCP/IP implemented in production firmware' },
  { label: 'Battery Management',  desc: 'DAL-A aviation BMS: SoC, SoH, thermal, protections, 28 V – 270 V architectures' },
  { label: 'Verification & Test', desc: 'LDRA static/coverage analysis, Gtest, WCET analysis, code/model reviews' },
]

export default function About() {
  const { ref, isVisible } = useIntersection<HTMLElement>()

  return (
    <section id="about" ref={ref} className="py-24 bg-hud-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-14 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 mb-3">
            <span className="section-label">01 / Overview</span>
            <div className="flex-1 h-px bg-hud-cyan/15" />
          </div>
          <h2 className="text-3xl font-bold text-white">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Bio */}
          <div className={`lg:col-span-2 space-y-5 reveal delay-1 ${isVisible ? 'visible' : ''}`}>
            <p className="text-hud-muted text-base leading-relaxed">
              Embedded software engineer with ~5 years of experience in safety-critical, real-time systems —
              primarily within avionics and aerospace applications — operating in full compliance with{' '}
              <span className="text-hud-cyan font-medium">RTCA DO-178C</span>.
            </p>
            <p className="text-hud-muted text-base leading-relaxed">
              Specialized in <span className="text-hud-text">aviation battery management systems</span> at
              Design Assurance Level A, covering the complete development lifecycle from High-Level and
              Low-Level Requirements in IBM DOORS through firmware implementation on TI C2000 and STM32 MCUs,
              verification planning across SOI-1, SOI-2, and SOI-3, and direct collaboration with
              Certification, Qualification, Safety, and Software Assurance teams.
            </p>
            <p className="text-hud-muted text-base leading-relaxed">
              Proficient in implementing communication interfaces including{' '}
              <span className="text-hud-text">ARINC-429, CAN, SPI, UART, I2C, and RS485</span>, conducting
              Static Code Analysis and Coverage Analysis using LDRA, and performing Model-Based Development
              with SysML/UML in MATLAB/Simulink. Current position at Capgemini Engineering in Munich focuses
              on Infineon Aurix Tricore embedded development and model-based system engineering.
            </p>

            {/* Strengths grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {strengths.map(s => (
                <div key={s.label} className="hud-card rounded-sm p-4">
                  <div className="font-mono text-hud-cyan text-xs font-semibold uppercase tracking-wide mb-1.5">
                    {s.label}
                  </div>
                  <p className="text-hud-muted text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats panel */}
          <div className={`reveal delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="hud-card rounded-sm p-5">
              <div className="font-mono text-hud-cyan/50 text-[10px] tracking-[0.3em] uppercase mb-4">
                — Profile Data
              </div>
              <div className="space-y-0">
                {stats.map(({ label, value }) => (
                  <div key={label} className="flex flex-col py-3 border-b border-hud-subtle/30 last:border-0">
                    <span className="font-mono text-[10px] text-hud-muted uppercase tracking-widest mb-0.5">
                      {label}
                    </span>
                    <span className="text-sm text-hud-text font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mt-4 hud-card rounded-sm p-5">
              <div className="font-mono text-hud-cyan/50 text-[10px] tracking-[0.3em] uppercase mb-4">
                — Languages
              </div>
              {cvData.languages.map(l => (
                <div key={l.name} className="flex justify-between items-center py-2 border-b border-hud-subtle/30 last:border-0">
                  <span className="text-sm text-hud-text font-medium">{l.name}</span>
                  <span className="font-mono text-xs text-hud-muted">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
