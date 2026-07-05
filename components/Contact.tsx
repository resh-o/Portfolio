'use client'

import { useRef, useState, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from './SectionLabel'
import Misregister from './Misregister'

const EMAIL = 'reshaangovender@gmail.com'

const socials = [
  { label: 'GitHub', href: 'https://github.com/resh-o' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/reshaan' },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const empty = { name: '', email: '', message: '' }

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [values, setValues] = useState(empty)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const { name, email, message } = values
    if (!name.trim()) return setErrorMsg('Please enter your name.')
    if (!emailRe.test(email.trim())) return setErrorMsg('Please enter a valid email address.')
    if (!message.trim()) return setErrorMsg('Please enter a message.')

    setState('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      })
      if (res.ok) {
        setState('success')
        setValues(empty)
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg((data as { error?: string }).error ?? 'Failed to send. Please email me directly.')
        setState('error')
      }
    } catch {
      setErrorMsg('Network error. Please email me directly.')
      setState('error')
    }
  }

  const set =
    (field: keyof typeof empty) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }))
      if (state === 'error') {
        setState('idle')
        setErrorMsg('')
      }
    }

  const inputClass =
    'w-full border-2 border-ink bg-bg px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:border-blue transition-colors'

  return (
    <section id="contact" ref={ref} className="border-t-2 border-ink px-5 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="05" className="mb-12">
          Contact
        </SectionLabel>

        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          {/* Left (the invitation) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tightest text-ink">
              Let&apos;s{' '}
              <Misregister as="span" hover className="inline-block cursor-default">
                build
              </Misregister>{' '}
              something.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
              Open to interesting projects and conversations. Use the form, or reach me directly.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-8 inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              Email me
              <span aria-hidden>↗</span>
            </a>

            <ul className="mt-8 flex flex-wrap gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="key-line inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-bg"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right (the form) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="key-line bg-surface p-6 sm:p-8"
          >
            {state === 'success' ? (
              <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center bg-blue text-bg" aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="mt-4 font-display text-lg font-bold uppercase text-ink">Message sent</p>
                <p className="mt-1 text-sm text-ink-soft">I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <Field id="name" label="Name">
                  <input id="name" type="text" required placeholder="Your name" value={values.name} onChange={set('name')} className={inputClass} />
                </Field>
                <Field id="email" label="Email">
                  <input id="email" type="email" required placeholder="you@email.com" value={values.email} onChange={set('email')} className={inputClass} />
                </Field>
                <Field id="message" label="Message">
                  <textarea id="message" required rows={5} placeholder="What are you building?" value={values.message} onChange={set('message')} className={`${inputClass} resize-none`} />
                </Field>

                {errorMsg && (
                  <p role="alert" className="text-sm font-semibold text-pink">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="w-full bg-ink py-3.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {state === 'loading' ? 'Sending…' : 'Send message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
        {label}
      </label>
      {children}
    </div>
  )
}
