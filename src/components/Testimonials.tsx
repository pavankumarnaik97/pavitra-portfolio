import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeUp, viewportDefault } from '../animations/variants'
import { testimonials } from '../data/testimonials'
import SectionKicker from './SectionKicker'

function QuoteCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="flex w-[360px] flex-none flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:w-[420px]">
      <Quote size={22} className="text-accent-amber/70" strokeWidth={1.5} />
      <p className="text-[15px] leading-relaxed text-ink-muted">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-auto pt-2">
        <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
        <p className="text-xs text-ink-faint">{testimonial.role}</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const track = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="relative py-28 sm:py-36">
      <div className="section-shell mb-14">
        <motion.div initial="hidden" whileInView="show" viewport={viewportDefault} variants={fadeUp}>
          <SectionKicker index="06" label="Key Strengths" align="center" />
          <h2 className="text-balance text-center font-display text-4xl font-medium italic tracking-tight sm:text-5xl">
            Strengths built on precision.
          </h2>
        </motion.div>
      </div>

      <div className="relative overflow-x-auto overflow-y-hidden no-scrollbar">
        <div className="fade-edges flex w-max gap-5 motion-safe:animate-marquee motion-reduce:px-6 hover:[animation-play-state:paused]">
          {track.map((testimonial, i) => (
            <QuoteCard key={`${testimonial.id}-${i}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
