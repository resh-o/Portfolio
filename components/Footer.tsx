const socials = [
  { label: 'GitHub', href: 'https://github.com/resh-o' },
  { label: 'LinkedIn', href: '#' }, // [TODO: add LinkedIn URL]
  { label: 'Email', href: 'mailto:reshaangovender@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-tight text-ink">
            Reshaan Govender
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            © {new Date().getFullYear()} · Printed in Gqeberha, South Africa.
          </p>
        </div>

        <nav aria-label="Footer links" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-pink"
            >
              {s.label} ↗
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
