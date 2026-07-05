'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '@/data/skills'
import SectionLabel from './SectionLabel'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="border-t-2 border-ink px-5 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="04" className="mb-12">
          Toolkit
        </SectionLabel>

        <h2 className="mb-12 font-display text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase leading-[1] tracking-tightest text-ink">
          What I build with.
        </h2>

        <div className="grid gap-px border-2 border-ink bg-ink sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="bg-bg p-6 sm:p-8"
            >
              <div className="mb-4 flex items-baseline gap-2">
                <span className="font-display text-xs font-bold tabular-nums text-pink">
                  0{i + 1}
                </span>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-soft">
                  {group.label}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="key-line px-3 py-1.5 text-sm text-ink transition-colors hover:bg-ink hover:text-bg"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
