'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { projects, type Project } from '@/data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import SectionLabel from './SectionLabel'

const displayed = projects.filter((p) => p.display !== false)

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="gradient-mesh py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <SectionLabel className="mb-5">Projects</SectionLabel>
          <h2
            className="font-sans font-bold text-ink leading-tight tracking-[-0.02em] max-w-md"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Things I&apos;ve shipped.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((project, i) => (
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
