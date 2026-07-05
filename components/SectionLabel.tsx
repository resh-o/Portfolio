interface Props {
  /** Section index, e.g. "02" — the numbering is real, not decorative. */
  index: string
  children: React.ReactNode
  className?: string
}

/**
 * A print-style section marker: an ink number chip + a mono label.
 */
export default function SectionLabel({ index, children, className = '' }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="key-line inline-flex h-7 min-w-[1.75rem] items-center justify-center px-1.5 font-display text-[0.7rem] font-bold tabular-nums text-ink">
        {index}
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
        {children}
      </span>
      <span className="h-px flex-1 bg-ink/15" aria-hidden />
    </div>
  )
}
