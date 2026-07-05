'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About', href: '#about', no: '01' },
  { label: 'Work', href: '#work', no: '02' },
  { label: 'Education', href: '#education', no: '03' },
  { label: 'Skills', href: '#skills', no: '04' },
  { label: 'Contact', href: '#contact', no: '05' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between border-b-2 border-ink bg-bg/85 px-5 backdrop-blur-md sm:px-6"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="flex h-8 w-8 items-center justify-center bg-pink font-display text-sm font-bold text-ink shadow-[2px_2px_0_rgb(var(--blue-rgb))]">
              R
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-ink">
              Reshaan&nbsp;Govender
            </span>
          </button>

          <ul className="hidden items-center gap-7 md:flex" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="group flex items-baseline gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  <span className="font-display text-[0.6rem] text-ink/40 group-hover:text-pink">
                    {link.no}
                  </span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <button
              onClick={() => scrollTo('#contact')}
              className="hidden bg-ink px-4 py-2 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 md:block"
            >
              Get in touch
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-ink transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-pink px-6 pt-16 md:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="flex items-baseline gap-4 border-b-2 border-ink/20 py-4 text-left"
            >
              <span className="font-display text-sm font-bold text-ink/50">{link.no}</span>
              <span className="font-display text-[2.25rem] font-bold leading-none tracking-tight text-ink">
                {link.label}
              </span>
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="mt-8 bg-ink px-6 py-4 text-center text-base font-semibold text-bg"
          >
            Get in touch →
          </button>
        </div>
      )}
    </>
  )
}
