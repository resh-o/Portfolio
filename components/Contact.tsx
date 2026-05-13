'use client'

import { useRef, useState, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/resh-o',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [values, setValues] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { name, email, message } = values
    window.location.href = `mailto:hello@reshaan.dev?subject=Hey from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0A${encodeURIComponent(email)}`
    setSent(true)
  }

  return (
    <section id="contact" ref={ref} className="py-32 md:py-40 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-5">Contact</div>
            <h2 className="section-title text-[clamp(2rem,4vw,3rem)] mb-6">
              Building something{' '}
              <span style={{ color: '#C9A84C' }}>interesting?</span>
              <br />
              Let&apos;s talk.
            </h2>
            <p className="text-ink-2 leading-relaxed mb-10">
              Open to interesting projects, collaborations, and conversations. I respond
              to everything — reach out directly or use the form.
            </p>

            <a
              href="mailto:hello@reshaan.dev"
              className="group inline-flex items-center gap-3 font-mono text-sm text-amber hover:text-amber-light transition-colors mb-10"
            >
              <span>hello@reshaan.dev</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>

            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center border border-white/[0.08] text-ink-3 hover:border-amber/30 hover:text-amber transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {sent ? (
              <div className="h-full flex items-center justify-center p-8 border border-white/[0.06] bg-surface/30">
                <div className="text-center">
                  <div className="text-3xl mb-4">✓</div>
                  <p className="font-serif text-xl text-ink mb-2">Opening your mail client.</p>
                  <p className="text-ink-3 text-sm">Thanks for reaching out.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block font-mono text-xs tracking-widest uppercase text-ink-3 mb-2">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={values[field.id as keyof typeof values]}
                      onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
                      className="w-full bg-surface/60 border border-white/[0.07] px-4 py-3 text-ink placeholder-ink-3 font-sans text-sm focus:outline-none focus:border-amber/30 transition-colors duration-200"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block font-mono text-xs tracking-widest uppercase text-ink-3 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="What are you building?"
                    value={values.message}
                    onChange={(e) => setValues({ ...values, message: e.target.value })}
                    className="w-full bg-surface/60 border border-white/[0.07] px-4 py-3 text-ink placeholder-ink-3 font-sans text-sm focus:outline-none focus:border-amber/30 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 font-mono text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:opacity-90"
                  style={{ background: '#C9A84C', color: '#0C0C0E' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
