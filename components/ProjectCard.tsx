'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Project } from '@/data/projects'

const MAX_PILLS = 3

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: () => void
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const visible = project.tech.slice(0, MAX_PILLS)
  const extra = project.tech.length - visible.length

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={onOpen}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.name} case study`}
      className="lift key-line group flex cursor-pointer flex-col bg-surface p-6"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-xl font-bold tabular-nums text-ink/30">
          {project.no}
        </span>
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
          {project.status}
        </span>
      </div>

      <h3 className="mt-5 font-display text-lg font-bold uppercase leading-tight tracking-tight text-ink transition-colors group-hover:text-pink">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{project.tagline}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
        {visible.map((t) => (
          <li key={t} className="border border-line px-2 py-0.5 text-[0.68rem] text-ink-soft">
            {t}
          </li>
        ))}
        {extra > 0 && (
          <li className="border border-line px-2 py-0.5 text-[0.68rem] text-ink-soft">+{extra}</li>
        )}
      </ul>

      <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-ink">
        View case study
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </motion.article>
  )
}
