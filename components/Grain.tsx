/**
 * Fixed film-grain / print-noise overlay.
 * Blends over everything (multiply on paper, screen on dark) to give the
 * whole page a screen-printed texture. Purely decorative.
 */
export default function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[45]"
      style={{ opacity: 'var(--grain-opacity)', mixBlendMode: 'var(--grain-blend)' as React.CSSProperties['mixBlendMode'] }}
    >
      <svg className="h-full w-full">
        <filter id="grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves={2}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
    </div>
  )
}
