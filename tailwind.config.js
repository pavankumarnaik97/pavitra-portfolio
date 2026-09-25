/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#07060a',
          soft: '#0b0a10',
          surface: '#100e16',
          raised: '#16131c',
          plum: '#140d1a',
        },
        accent: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
          violet: '#a78bfa',
          amber: '#e8a259',
          rust: '#c9683f',
          moss: '#7c9473',
        },
        ink: {
          DEFAULT: '#f5f2ec',
          muted: '#a6a1b0',
          faint: '#615c6c',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Fraunces"', '"Georgia"', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.14), transparent 60%)',
        'radial-fade-warm':
          'radial-gradient(circle at 85% 15%, rgba(232,162,89,0.10), transparent 55%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(139,92,246,0.35)',
        'glow-sm': '0 0 20px -6px rgba(139,92,246,0.3)',
        'glow-amber': '0 0 30px -8px rgba(232,162,89,0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 8s ease-in-out infinite',
        'float-delayed': 'float 10s ease-in-out infinite 2s',
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -30px) scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
