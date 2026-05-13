import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        amber: '#C9A84C',
        'amber-light': '#D4B86A',
        'amber-dark': '#9E7C2E',
        canvas: '#0C0C0E',
        surface: '#111114',
        elevated: '#18181C',
        ink: '#F0EAD6',
        'ink-2': '#9A9080',
        'ink-3': '#52504A',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'grain': 'grain 8s steps(1) infinite',
        'bounce-y': 'bounce-y 1.5s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'spin-slow-reverse': 'spin 18s linear infinite reverse',
        'pulse-ring': 'pulse-ring 3s ease-in-out infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        'bounce-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'pulse-ring': {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.35' },
        },
      },
    },
  },
  plugins: [],
}

export default config
