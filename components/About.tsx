'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from './SectionLabel'

const focuses = [
  { label: 'AI Integration', detail: 'Anthropic, Groq, Gemini, Ollama' },
  { label: 'Full-Stack Dev', detail: 'Next.js, .NET, Python backends' },
  { label: 'Shipping Products', detail: 'Real users, real problems' },
  { label: 'Building in Public', detail: 'Open source where possible' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel className="mb-5">About</SectionLabel>
            <h2
              className="font-sans font-bold text-ink leading-[1.15] tracking-[-0.02em] mb-8"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}
            >
              From the bottom of Africa,{' '}
              <em className="font-serif italic font-normal text-accent">
                building for the world.
              </em>
            </h2>

            <div className="space-y-5 text-ink-soft leading-relaxed">
              <p>
                Third-year Computer Science student at Emeris University in Gqeberha
                (Port Elizabeth), South Africa, building real products alongside my degree
                instead of waiting until I graduate.
              </p>
              <p>
                Interested in AI tooling, developer infrastructure, and software that actually
                scales. Currently deep in the intersection of LLMs and practical applications
                people pay for.
              </p>
              <p>
                Outside of code: rock climbing, hydroponics, gym. The mindset that sends you
                up a route applies to shipping software. Methodical, committed, no shortcuts
                on the crux moves.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4 md:mt-14"
          >
            {focuses.map((f) => (
              <div
                key={f.label}
                className="p-5 rounded-[18px] border border-line bg-surface card-hover"
              >
                <div className="text-xs font-semibold tracking-[0.1em] uppercase text-accent mb-2">
                  {f.label}
                </div>
                <div className="text-sm text-ink-soft leading-snug">{f.detail}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
