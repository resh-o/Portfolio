import Misregister from './Misregister'

const facts = [
  { value: '6', label: 'projects' },
  { value: '1', label: 'live product' },
  { value: '3rd yr', label: 'CS student' },
]

export default function Hero() {
  return (
    <section className="paper-dots relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-14 pt-24 sm:px-6">
      {/* Print registration marks in the corners */}
      <RegMark className="left-4 top-20 sm:left-6" />
      <RegMark className="right-4 top-20 sm:right-6" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="rise rise-1 mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-ink-soft">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue" aria-hidden />
            Gqeberha · South Africa
          </span>
          <span aria-hidden className="text-ink/25">/</span>
          <span>Ed. 2026 · No. 01</span>
        </div>

        <h1 className="font-display font-bold uppercase leading-[0.92] tracking-tightest text-ink">
          <span className="sr-only">Reshaan Govender. Developer and builder.</span>
          <Misregister
            as="span"
            hover
            aria-hidden
            className="rise rise-2 block cursor-default text-[clamp(2.6rem,11vw,8.5rem)]"
          >
            Reshaan
          </Misregister>
          <Misregister
            as="span"
            hover
            aria-hidden
            className="rise rise-3 block cursor-default text-[clamp(2.6rem,11vw,8.5rem)]"
          >
            Govender
          </Misregister>
        </h1>

        <div className="mt-7 grid gap-8 md:mt-9 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <p className="rise rise-4 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            <span className="font-semibold text-ink">Developer &amp; builder.</span>{' '}
            A third-year CS student in Gqeberha who ships real tools, including{' '}
            <a
              href="https://tradesman.to"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue underline decoration-2 underline-offset-4 hover:text-pink"
            >
              Tradesman
            </a>
            , a live AI quoting product for South African tradespeople.
          </p>

          <div className="rise rise-5 flex flex-col items-start gap-4 sm:flex-row md:justify-end">
            <a
              href="#work"
              className="w-full bg-ink px-6 py-3.5 text-center text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              See the work →
            </a>
            <a
              href="#contact"
              className="key-line w-full px-6 py-3.5 text-center text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Get in touch
            </a>
          </div>
        </div>

        <dl className="rise rise-6 mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t-2 border-ink pt-6 md:mt-14">
          {facts.map((f) => (
            <div key={f.label} className="flex items-baseline gap-2">
              <dt className="sr-only">{f.label}</dt>
              <dd className="font-display text-2xl font-bold tabular-nums text-ink sm:text-3xl">
                {f.value}
              </dd>
              <span className="text-xs uppercase tracking-[0.16em] text-ink-soft">{f.label}</span>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function RegMark({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`pointer-events-none absolute hidden h-5 w-5 text-ink/30 sm:block ${className}`}
    >
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
