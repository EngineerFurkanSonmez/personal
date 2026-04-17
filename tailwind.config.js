/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hud-bg':      '#070d14',
        'hud-surface': '#0d1a26',
        'hud-card':    '#0f1e2e',
        'hud-cyan':    '#00d4ff',
        'hud-amber':   '#f59e0b',
        'hud-text':    '#e2e8f0',
        'hud-muted':   '#64748b',
        'hud-subtle':  '#1e3a4a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'blink': 'blink 1.2s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
