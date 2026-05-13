'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { type Project } from '@/data/projects'

const statusColors: Record<string, string> = {
  Live: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/8',
  Completed: 'text-ink-2 border-white/10 bg-white/4',
  'In Progress': 'text-amber border-amber/30 bg-amber/8',
}

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
    >
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto bg-[#111114] border border-white/[0.08] shadow-2xl"
        style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.08)' }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#111114]/95 backdrop-blur-sm border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="text-xl">{project.icon}</span>
            <span className="font-serif font-bold text-lg text-ink">{project.name}</span>
            <span className={`font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 border ${statusColors[project.status]}`}>
              {project.status}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-ink-3 hover:text-ink transition-colors text-lg leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <div>
            <p className="text-ink-2 leading-relaxed text-base">{project.description}</p>
          </div>

          <div>
            <h4 className="section-label mb-3">The Problem</h4>
            <p className="text-ink-2 leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h4 className="section-label mb-3">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-ink-2 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-amber/60 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs px-3 py-1.5 bg-elevated border border-white/[0.06] text-ink-2">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="section-label mb-3">What I Learned</h4>
            <p className="text-ink-2 leading-relaxed">{project.learned}</p>
          </div>

          {(project.github || project.demo) && (
            <div className="flex gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-5 py-2.5 border border-white/10 text-ink-2 hover:border-amber/30 hover:text-amber transition-all duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-5 py-2.5 text-[#0C0C0E] transition-all duration-200"
                  style={{ background: '#C9A84C' }}
                >
                  Live Demo →
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
