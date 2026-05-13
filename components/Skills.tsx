'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    label: 'Languages',
    skills: ['C#', 'Kotlin', 'Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks',
    skills: ['Next.js', 'React', 'ASP.NET Core MVC', 'Tailwind CSS', 'Express'],
  },
  {
    label: 'AI / ML',
    skills: ['Anthropic API', 'Groq API', 'Google Gemini', 'Ollama', 'Whisper'],
  },
  {
    label: 'Cloud & Infra',
    skills: ['Supabase', 'Vercel', 'Azure', 'Tailscale', 'Linux', 'systemd'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'VS Code', 'Cursor', 'Paystack', 'Resend'],
  },
  {
    label: 'Hardware',
    skills: ['Raspberry Pi 5', 'ESP32'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-32 md:py-40 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label mb-5">Skills & Tools</div>
          <h2 className="section-title text-[clamp(2rem,4vw,3rem)] max-w-lg">
            What I build{' '}
            <span style={{ color: '#C9A84C' }}>with.</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
            >
              <div className="w-32 flex-shrink-0">
                <span className="font-mono text-xs tracking-widest uppercase text-amber/60">
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm px-3.5 py-1.5 border border-white/[0.07] bg-surface/50 text-ink-2 hover:border-amber/25 hover:text-ink transition-all duration-200 cursor-default"
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
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 p-8 border border-white/[0.06] bg-surface/30 relative overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
          />
          <div className="font-mono text-xs text-amber/50 mb-3 tracking-widest uppercase">Currently learning</div>
          <p className="text-ink-2 leading-relaxed">
            Deepening into LLM architecture and fine-tuning, Rust for systems-level projects,
            and the business mechanics of building SaaS in emerging markets.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
