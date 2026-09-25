export default function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base"
    >
      {/* base grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      {/* top radial glow */}
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 bg-radial-fade-warm" />

      {/* floating gradient blobs */}
      <div className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-accent-purple/20 blur-[120px] animate-float" />
      <div className="absolute -right-24 top-2/3 h-[380px] w-[380px] rounded-full bg-accent-amber/15 blur-[120px] animate-float-delayed" />
      <div className="absolute left-1/3 top-[10%] h-[300px] w-[300px] rounded-full bg-accent-violet/10 blur-[100px] animate-float" />

      {/* noise texture */}
      <div className="noise-overlay absolute inset-0 opacity-[0.03] mix-blend-overlay" />
    </div>
  )
}
