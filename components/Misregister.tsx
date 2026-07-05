import { createElement, type ElementType, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  /** Element to render (default span). */
  as?: ElementType
  className?: string
  /** Re-separate the ink layers on hover (for interactive titles). */
  hover?: boolean
  /** Any other attributes (e.g. aria-hidden) are forwarded to the root. */
  [key: string]: unknown
}

/**
 * The signature. Renders text three times (a pink and a blue ghost offset
 * behind the ink layer) so it reads like a screen print whose colours are
 * a touch out of registration. On load the ghosts travel in and snap toward
 * registration; `prefers-reduced-motion` renders them already registered.
 */
export default function Misregister({ children, as = 'span', className = '', hover = false, ...rest }: Props) {
  return createElement(
    as,
    { className: `riso ${hover ? 'riso-hover' : ''} ${className}`, ...rest },
    <>
      <span className="riso-ghost riso-pink" aria-hidden>{children}</span>
      <span className="riso-ghost riso-blue" aria-hidden>{children}</span>
      <span className="riso-ink">{children}</span>
    </>,
  )
}
