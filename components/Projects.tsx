'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '@/data/projects'
import ProjectModal from './ProjectModal'

const statusColors: Record<string, string> = {
  Live: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/8',
  Completed: 'text-ink-2 border-white/10 bg-white/4',
  'In Progress': 'text-amber border-amber/30 bg-amber/8',
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group relative flex flex-col p-6 border border-white/[0.06] bg-surface/40 cursor-pointer card-amber-hover overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="flex items-start justify-between mb-4">
        <span className="text-2xl" role="img" aria-label={project.name}>
          {project.icon}
        </span>
        <span
          className={`font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 border ${statusColors[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <h3 className="font-serif font-bold text-xl text-ink mb-2 group-hover:text-amber transition-colors duration-300">
        {project.name}
      </h3>
      <p className="text-ink-2 text-sm leading-relaxed flex-1 mb-4">{project.tagline}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-elevated text-ink-3 border border-white/[0.04]">
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="font-mono text-[10px] px-2 py-0.5 text-ink-3">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center gap-1 font-mono text-xs text-amber/60 group-hover:text-amber transition-colors duration-300">
        <span>View case study</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label mb-5">Projects</div>
          <h2 className="section-title text-[clamp(2rem,4vw,3rem)] max-w-lg">
            Things I&apos;ve{' '}
            <span style={{ color: '#C9A84C' }}>shipped.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setActive(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
