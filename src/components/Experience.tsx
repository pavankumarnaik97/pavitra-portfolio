import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, viewportDefault } from '../animations/variants'
import { experience } from '../data/experience'
import SectionKicker from './SectionKicker'

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.4'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
          variants={fadeUp}
          className="mb-16"
        >
          <SectionKicker index="03" label="Experience" />
          <h2 className="text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Where analytical precision meets R&amp;D.
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* track */}
          <div className="absolute left-[7px] top-1 h-full w-px bg-white/10 sm:left-[9px]" />
          {/* animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] top-1 w-px bg-gradient-to-b from-accent-violet via-accent-purple to-accent-blue sm:left-[9px]"
          />

          <div className="space-y-14">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportDefault}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10 sm:pl-12"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent-violet bg-base shadow-glow-sm sm:h-[18px] sm:w-[18px]" />

                <div className="card-border group bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/20 sm:p-8">
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {item.role} <span className="text-ink-muted">· {item.company}</span>
                    </h3>
                    <span className="text-sm font-medium text-accent-violet">{item.duration}</span>
                  </div>

                  <p className="mb-4 leading-relaxed text-ink-muted">{item.description}</p>

                  <ul className="mb-5 space-y-2">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-blue" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ y: -2, borderColor: 'rgba(167,139,250,0.5)' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-ink-muted"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
