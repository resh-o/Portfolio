'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const focuses = [
  { label: 'AI Integration', detail: 'Anthropic, Groq, Gemini, Ollama' },
  { label: 'Full-Stack Dev', detail: 'Next.js, .NET, Python backends' },
  { label: 'Shipping Products', detail: 'Real users, real problems' },
  { label: 'Building in Public', detail: 'Open source where possible' },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
})

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-32 md:py-40 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="section-label mb-5"
          >
            About
          </motion.div>

          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="section-title text-[clamp(2rem,4vw,3rem)] mb-8"
          >
            From the bottom of Africa,
            <br />
            <span style={{ color: '#C9A84C' }}>building for the world.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-5 text-ink-2 leading-relaxed"
          >
            <p>
              Third-year Computer Science student at a university in Gqeberha (Port Elizabeth),
              South Africa &mdash; building real products alongside my degree instead of waiting
              until I graduate.
            </p>
            <p>
              I&apos;m interested in AI tooling, developer infrastructure, and software that
              actually scales. Currently deep in the intersection of LLMs and practical
              applications people pay for.
            </p>
            <p>
              Outside of code: rock climbing, hydroponics, gym. I think the same mindset that
              sends you up a route applies to shipping software &mdash; methodical, committed,
              no shortcuts on the crux moves.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="mt-10 grid grid-cols-2 gap-3"
          >
            {focuses.map((f) => (
              <div
                key={f.label}
                className="p-4 border border-white/[0.06] bg-surface/60 group hover:border-amber/20 transition-colors duration-300"
              >
                <div className="font-mono text-xs text-amber mb-1 tracking-wider">{f.label}</div>
                <div className="text-ink-3 text-xs leading-snug">{f.detail}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div
              className="absolute inset-0 animate-spin-slow rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent 60%, rgba(201,168,76,0.15) 80%, transparent 100%)',
              }}
            />
            <div
              className="absolute inset-4 animate-spin-slow-reverse rounded-full"
              style={{
                background: 'conic-gradient(from 180deg, transparent 60%, rgba(201,168,76,0.08) 80%, transparent 100%)',
              }}
            />
            <div
              className="absolute inset-8"
              style={{
                border: '1px solid rgba(201,168,76,0.12)',
                borderRadius: '50%',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center select-none">
                <div
                  className="font-serif font-bold leading-none"
                  style={{
                    fontSize: 'clamp(4rem, 12vw, 6rem)',
                    color: 'transparent',
                    WebkitTextStroke: '1.5px rgba(201,168,76,0.6)',
                  }}
                >
                  R
                </div>
                <div className="font-mono text-xs tracking-[0.4em] text-amber/40 uppercase mt-1">
                  Reshaan
                </div>
              </div>
            </div>

            <div className="absolute -inset-12 pointer-events-none">
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-1 h-1 rounded-full animate-pulse-ring"
                  style={{
                    background: 'rgba(201,168,76,0.5)',
                    top: `${50 - 45 * Math.cos((deg * Math.PI) / 180)}%`,
                    left: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                    animationDelay: `${deg / 360}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
