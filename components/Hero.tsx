'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.3,
        o: Math.random() * 0.35 + 0.05,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 168, 76, ${p.o})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { delay: d, duration: 0.75, ease: [0.16, 1, 0.3, 1] } }),
}

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="grain-overlay" aria-hidden />
      <ParticleCanvas />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 80% 80%, rgba(201,168,76,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate="show"
          className="section-label mb-8"
        >
          Reshaan &mdash; Developer &amp; Builder
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={0.25}
          initial="hidden"
          animate="show"
          className="section-title text-[clamp(2.6rem,7vw,5.5rem)] mb-6"
        >
          Building from the{' '}
          <span
            className="relative inline-block"
            style={{ color: '#C9A84C' }}
          >
            edge of the world.
            <span
              className="absolute -bottom-1 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
            />
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={0.4}
          initial="hidden"
          animate="show"
          className="text-ink-2 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          CS student in Gqeberha, South Africa &mdash; shipping AI tools, full-stack
          products, and developer infrastructure with global ambition.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.55}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group relative px-8 py-3.5 font-mono text-sm tracking-widest uppercase overflow-hidden"
            style={{ background: '#C9A84C', color: '#0C0C0E' }}
          >
            <span className="relative z-10 font-semibold">See My Work</span>
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: '#D4B86A' }}
            />
          </button>

          <button
            onClick={() => scrollTo('#contact')}
            className="px-8 py-3.5 font-mono text-sm tracking-widest uppercase border border-amber/30 text-amber hover:bg-amber/8 hover:border-amber/60 transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-3 hover:text-ink-2 transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="animate-bounce-y block w-px h-8 bg-gradient-to-b from-ink-3 to-transparent" />
      </motion.button>
    </section>
  )
}
