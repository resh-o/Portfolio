interface Props {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: Props) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden />
      <span className="text-xs font-semibold tracking-[0.14em] uppercase text-ink-soft">
        {children}
      </span>
    </div>
  )
}
