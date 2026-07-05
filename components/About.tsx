'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from './SectionLabel'
import Misregister from './Misregister'

const rise = {
  initial: { opacity: 0, y: 24 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="border-t-2 border-ink px-5 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="01" className="mb-12">
          About
        </SectionLabel>

        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <motion.h2
            {...rise}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold uppercase leading-[1.02] tracking-tight text-ink"
          >
            Building{' '}
            <Misregister as="span" className="inline-block">
              from the ground
            </Misregister>{' '}
            up.
          </motion.h2>

          <motion.div
            {...rise}
            transition={{ ...rise.transition, delay: 0.12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="space-y-5 text-lg leading-relaxed text-ink-soft"
          >
            <p>
              I&apos;m a third-year Computer Science student at Emeris University in Gqeberha
              (Port Elizabeth), South Africa. I build and ship real products alongside my degree
              rather than waiting until I graduate.
            </p>
            <p>
              Most of my work sits where practical software meets AI (quoting tools, local-first
              chat apps, terminal experiments). One of them,{' '}
              <a
                href="https://tradesman.to"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue underline decoration-2 underline-offset-4 hover:text-pink"
              >
                Tradesman
              </a>
              , is live and used by tradespeople to write quotes in seconds.
            </p>
            <p>
              I care about shipping things that work, keeping the code clean enough to build on,
              and finishing what I start.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
