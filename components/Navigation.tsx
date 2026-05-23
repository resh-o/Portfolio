'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6">
        <nav
          aria-label="Main navigation"
          className="w-full max-w-4xl flex items-center justify-between h-14 px-5 rounded-full bg-surface/80 backdrop-blur-xl border border-line/60"
          style={{ boxShadow: '0 2px 24px rgba(0,0,0,0.06)' }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
            aria-label="Scroll to top"
          >
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm leading-none" aria-hidden>R</span>
            </div>
            <span className="font-semibold text-sm text-ink tracking-tight">Reshaan</span>
          </button>

          <ul className="hidden md:flex items-center gap-7" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-ink-soft hover:text-ink transition-colors duration-200 font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <button
              onClick={() => scrollTo('#contact')}
              className="hidden md:block text-sm font-semibold px-4 py-2 rounded-full bg-ink text-bg hover:opacity-85 transition-opacity duration-200"
            >
              Hire Me
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-0.5 bg-ink-soft transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-ink-soft transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-ink-soft transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-bg/96 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-4xl font-semibold text-ink hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="mt-4 px-8 py-3 rounded-full bg-ink text-bg font-semibold text-lg"
          >
            Hire Me
          </button>
        </div>
      )}
    </>
  )
}
