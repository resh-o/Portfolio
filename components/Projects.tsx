'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { featuredProjects, moreBuilds, type Project } from '@/data/projects'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import SectionLabel from './SectionLabel'

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="work" className="border-t-2 border-ink px-5 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" className="mb-12">
          Selected work
        </SectionLabel>

        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase leading-[1] tracking-tightest text-ink">
            Things I&apos;ve shipped.
          </h2>
          <p className="max-w-xs text-sm text-ink-soft">
            Three featured builds, then a shorter list. Every one links to its source.
          </p>
        </div>

        {/* Featured — case studies */}
        <div>
          {featuredProjects.map((project, i) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>

        {/* More builds */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.24em] text-ink-soft">
              More builds
            </h3>
            <span className="h-px flex-1 bg-ink/15" aria-hidden />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moreBuilds.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={() => setActive(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
