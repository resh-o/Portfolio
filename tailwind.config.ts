import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg-rgb) / <alpha-value>)',
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        'ink-soft': 'rgb(var(--ink-soft-rgb) / <alpha-value>)',
        line: 'rgb(var(--line-rgb) / <alpha-value>)',
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        'accent-2': 'rgb(var(--accent-2-rgb) / <alpha-value>)',
        pink: 'rgb(var(--pink-rgb) / <alpha-value>)',
        blue: 'rgb(var(--blue-rgb) / <alpha-value>)',
        violet: 'rgb(var(--violet-rgb) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-unbounded)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '4px',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}

export default config
