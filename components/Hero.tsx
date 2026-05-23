const stats = [
  { value: '7+', label: 'projects shipped' },
  { value: '2', label: 'live products' },
  { value: '3rd yr', label: 'CS student' },
  { value: 'AI-native', label: 'focus area' },
]

export default function Hero() {
  return (
    <section className="gradient-mesh relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-16 w-full">

        <div className="hero-el hero-el-1 flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line bg-surface/70 backdrop-blur-sm text-sm text-ink-soft">
            <span className="w-2 h-2 rounded-full bg-accent-2 animate-pulse" aria-hidden />
            Gqeberha, South Africa. Open to work.
          </div>
        </div>

        <h1
          className="hero-el hero-el-2 font-sans font-bold text-ink leading-[1.08] tracking-[-0.03em] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7.5vw, 5.5rem)' }}
        >
          Building from the{' '}
          <em className="font-serif italic font-normal text-accent">
            edge of the world.
          </em>
        </h1>

        <p className="hero-el hero-el-3 text-ink-soft text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          CS student in Gqeberha shipping AI tools, full-stack products, and developer
          infrastructure with global ambition.
        </p>

        <div className="hero-el hero-el-4 flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:opacity-90 transition-opacity duration-200"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full border border-line text-ink font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200 bg-surface/50 backdrop-blur-sm"
          >
            Get In Touch
          </a>
        </div>

        <div className="hero-el hero-el-5 border-t border-line/70 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-ink tracking-tight">{s.value}</div>
              <div className="text-xs text-ink-soft mt-1">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
