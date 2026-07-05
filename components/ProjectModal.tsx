'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { type Project } from '@/data/projects'

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const isLive = project.status === 'Live'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} case study`}
    >
      <motion.div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ type: 'spring', damping: 30, stiffness: 320 }}
        className="key-line relative max-h-[92vh] w-full overflow-y-auto bg-bg sm:max-h-[86vh] sm:max-w-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b-2 border-ink bg-bg/95 px-6 py-4 backdrop-blur-sm">
          <div className="flex min-w-0 items-center gap-3">
            <span className="font-display text-lg font-bold tabular-nums text-ink/40">
              {project.no}
            </span>
            <span className="truncate font-display text-base font-bold uppercase tracking-tight text-ink">
              {project.name}
            </span>
            <span
              className={`inline-flex shrink-0 items-center gap-1.5 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] ${
                isLive ? 'bg-blue text-bg' : 'key-line text-ink-soft'
              }`}
            >
              {project.status}
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center text-xl leading-none text-ink-soft transition-colors hover:text-pink"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="space-y-8 p-6 md:p-8">
          {project.todo && (
            <p className="border-2 border-dashed border-pink px-4 py-3 text-sm font-semibold text-pink">
              ⚑ {project.todo}
            </p>
          )}

          <p className="text-base leading-relaxed text-ink-soft">{project.description}</p>

          {project.metrics && (
            <dl className="flex flex-wrap gap-x-10 gap-y-4 border-y-2 border-ink py-5">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dd className="font-display text-2xl font-bold tabular-nums text-pink">{m.value}</dd>
                  <dt className="mt-0.5 text-xs uppercase tracking-[0.14em] text-ink-soft">{m.label}</dt>
                </div>
              ))}
            </dl>
          )}

          <Block title="The problem">
            <p className="leading-relaxed text-ink-soft">{project.problem}</p>
          </Block>

          <Block title="Key features">
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-pink" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Tech stack">
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="key-line px-3 py-1 text-sm text-ink-soft">
                  {t}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="What I learned">
            <p className="leading-relaxed text-ink-soft">{project.learned}</p>
          </Block>

          {(project.liveSiteUrl || project.github) && (
            <div className="flex flex-wrap gap-3 pt-1">
              {project.liveSiteUrl && (
                <a
                  href={project.liveSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
                >
                  Visit live site ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="key-line px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  View on GitHub ↗
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-ink">
        {title}
      </h4>
      {children}
    </div>
  )
}
