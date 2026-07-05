'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Project } from '@/data/projects'
import Misregister from './Misregister'

const ACCENTS = ['text-pink', 'text-blue', 'text-violet'] as const

export default function FeaturedProject({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: () => void
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-90px' })
  const accent = ACCENTS[index % ACCENTS.length]
  const isLive = project.status === 'Live'

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="group border-t-2 border-ink py-12 first:border-t-0 md:py-16"
    >
      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
        {/* Index rail */}
        <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
          <span className={`font-display text-5xl font-bold leading-none tabular-nums md:text-7xl ${accent}`}>
            {project.no}
          </span>
          <StatusTag status={project.status} live={isLive} />
        </div>

        {/* Body */}
        <div>
          <button
            onClick={onOpen}
            className="block text-left"
            aria-label={`View ${project.name} case study`}
          >
            <Misregister
              as="h3"
              hover
              className="font-display text-[clamp(2rem,6vw,4rem)] font-bold uppercase leading-[0.95] tracking-tightest text-ink"
            >
              {project.name}
            </Misregister>
          </button>

          <p className="mt-3 max-w-xl text-lg font-semibold text-ink">{project.tagline}</p>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{project.description}</p>

          {project.todo && (
            <p className="mt-4 inline-block border-2 border-dashed border-pink px-3 py-1.5 text-xs font-semibold text-pink">
              ⚑ {project.todo}
            </p>
          )}

          {project.metrics && (
            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dd className={`font-display text-2xl font-bold tabular-nums sm:text-3xl ${accent}`}>
                    {m.value}
                  </dd>
                  <dt className="mt-0.5 text-xs uppercase tracking-[0.14em] text-ink-soft">
                    {m.label}
                  </dt>
                </div>
              ))}
            </dl>
          )}

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.tech.map((t) => (
              <li key={t} className="key-line px-2.5 py-1 text-xs font-medium text-ink-soft">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
            <button
              onClick={onOpen}
              className="flex items-center gap-1.5 text-ink transition-colors hover:text-pink"
            >
              View case study
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            {project.liveSiteUrl && (
              <a
                href={project.liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-blue hover:text-pink"
              >
                Visit live site <span aria-hidden>↗</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-ink-soft hover:text-ink"
              >
                GitHub <span aria-hidden>↗</span>
              </a>
            )}
            {project.privateRepo && (
              <span className="flex items-center gap-1.5 text-ink-soft">
                <LockIcon />
                Private repo
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
      <rect x="4" y="11" width="16" height="9" rx="1" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

function StatusTag({ status, live }: { status: Project['status']; live: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${
        live ? 'bg-blue text-bg' : 'key-line text-ink-soft'
      }`}
    >
      {live && <span className="h-1.5 w-1.5 rounded-full bg-bg" aria-hidden />}
      {status}
    </span>
  )
}
