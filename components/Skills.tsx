'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups, currentlyLearning } from '@/data/skills'
import SectionLabel from './SectionLabel'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <SectionLabel className="mb-5">Skills</SectionLabel>
          <h2
            className="font-sans font-bold text-ink leading-tight tracking-[-0.02em] max-w-md"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            What I build with.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-card border border-line bg-surface"
            >
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-ink-soft mb-4">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full border border-line bg-bg text-ink-soft hover:border-accent/40 hover:text-ink transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.65 }}
          className="mt-6 p-7 rounded-card border border-line bg-surface"
        >
          <div className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            Currently learning
          </div>
          <p className="text-ink-soft leading-relaxed">{currentlyLearning}</p>
        </motion.div>
      </div>
    </section>
  )
}
