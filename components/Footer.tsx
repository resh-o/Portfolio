const socials = [
  { label: 'GitHub', href: 'https://github.com/resh-o' },
  { label: 'X', href: 'https://x.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line/60 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-ink-soft text-center sm:text-left">
          &copy; 2026 Reshaan. Deployed from the bottom of the world.
        </p>

        <nav aria-label="Footer links" className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-soft hover:text-accent transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
