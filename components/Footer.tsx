'use client'

const socials = [
  { label: 'GitHub', href: 'https://github.com/resh-o' },
  { label: 'X', href: 'https://x.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <span className="font-mono text-xs text-amber tracking-widest">R/</span>
          <span className="font-mono text-xs text-ink-3">
            © {new Date().getFullYear()} Reshaan — Built by me. Deployed from the bottom of the world.
          </span>
        </div>

        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-3 hover:text-amber transition-colors duration-200 tracking-wider"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
