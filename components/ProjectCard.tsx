'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Project } from '@/data/projects'

interface Props {
  project: Project
  index: number
  onClick: () => void
}

const MAX_PILLS = 4

export default function ProjectCard({ project, index, onClick }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const visible = project.tech.slice(0, MAX_PILLS)
  const extra = project.tech.length - MAX_PILLS
  const isLive = project.status === 'Live'

  const handleClick = () => {
    if (project.caseStudyUrl) {
      window.open(project.caseStudyUrl, '_blank', 'noopener,noreferrer')
    } else {
      onClick()
    }
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.09, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.name} case study`}
      className="group flex flex-col p-6 rounded-card border border-line bg-surface cursor-pointer card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-2xl" role="img" aria-label={project.name}>
          {project.icon}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full border ${
            isLive
              ? 'text-accent-2 border-accent-2/30 bg-accent-2/10'
              : 'text-ink-soft border-line bg-bg'
          }`}
        >
          {isLive && <span className="w-1.5 h-1.5 rounded-full bg-accent-2" aria-hidden />}
          {project.status}
        </span>
      </div>

      <h3 className="font-semibold text-ink text-[1.05rem] mb-2 group-hover:text-accent transition-colors duration-200">
        {project.name}
      </h3>
      <p className="text-ink-soft text-sm leading-relaxed flex-1 mb-5">
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {visible.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2.5 py-1 rounded-full border border-line bg-bg text-ink-soft"
          >
            {t}
          </span>
        ))}
        {extra > 0 && (
          <span className="text-[11px] px-2.5 py-1 rounded-full border border-line text-ink-soft">
            +{extra}
          </span>
        )}
      </div>

      {project.caseStudyUrl ? (
        <a
          href={project.caseStudyUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 text-sm text-accent font-medium"
        >
          <span>View case study</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden>&rarr;</span>
        </a>
      ) : (
        <div className="flex items-center gap-1 text-sm text-accent font-medium">
          <span>View case study</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden>&rarr;</span>
        </div>
      )}
    </motion.article>
  )
}
