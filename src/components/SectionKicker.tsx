interface SectionKickerProps {
  index: string
  label: string
  align?: 'left' | 'center'
}

export default function SectionKicker({ index, label, align = 'left' }: SectionKickerProps) {
  return (
    <div className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
      <span className="font-mono text-xs text-accent-amber/80">{index}</span>
      <span className="h-px w-8 bg-white/15" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        {label}
      </span>
    </div>
  )
}
