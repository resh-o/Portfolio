import Link from 'next/link'
import type { Metadata } from 'next'
import Misregister from '@/components/Misregister'
import Grain from '@/components/Grain'

export const metadata: Metadata = {
  title: '404. Page not found · Reshaan Govender',
}

export default function NotFound() {
  return (
    <>
      <Grain />
      <main className="paper-dots flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.28em] text-ink-soft">
          Ed. 2026 · Off the press run
        </p>

        <h1 className="font-display font-bold uppercase leading-[0.85] tracking-tightest text-ink">
          <span className="sr-only">404. Page not found</span>
          <Misregister as="span" hover aria-hidden className="block cursor-default text-[clamp(5rem,26vw,16rem)]">
            404
          </Misregister>
        </h1>

        <p className="mt-6 max-w-sm text-lg text-ink-soft">
          This page didn&apos;t make the final print. Let&apos;s get you back to the front page.
        </p>

        <Link
          href="/"
          className="mt-8 bg-ink px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
        >
          ← Back to the start
        </Link>
      </main>
    </>
  )
}
