'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { academics } from '@/data/academics'
import SectionLabel from './SectionLabel'

export default function Academics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} className="border-t-2 border-ink px-5 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="03" className="mb-12">
          Education
        </SectionLabel>

        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          {/* Credentials ledger */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="mb-8 font-display text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold uppercase leading-[1.02] tracking-tight text-ink">
              On the record.
            </h2>
            <dl className="border-t-2 border-ink">
              {academics.facts.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-ink-soft sm:w-44">
                    {f.label}
                  </dt>
                  <dd className="text-base font-semibold text-ink sm:text-right">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Achievements, the headline credential */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="key-line self-start bg-blue p-7 text-bg sm:p-8"
          >
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display text-5xl font-bold leading-none">×2</span>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-bg/80">
                years running
              </span>
            </div>
            {academics.achievements.map((a) => (
              <div key={a.title}>
                <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight">
                  {a.title}
                </h3>
                <p className="mt-2 text-bg/85">{a.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
