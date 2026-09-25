import { motion } from 'framer-motion'
import { ArrowUpRight, FlaskConical, Gauge, BadgeCheck, FileText } from 'lucide-react'
import type { ComponentType } from 'react'
import { fadeUp, staggerContainer, viewportDefault } from '../animations/variants'
import { services } from '../data/services'
import SectionKicker from './SectionKicker'

const ICONS: Record<string, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  flask: FlaskConical,
  gauge: Gauge,
  badge: BadgeCheck,
  file: FileText,
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
          variants={staggerContainer(0.08)}
          className="mb-16 max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <SectionKicker index="07" label="Core Competencies" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Precision across every analytical step.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
          variants={staggerContainer(0.06)}
          className="divide-y divide-white/10 border-y border-white/10"
        >
          {services.map((service, index) => {
            const Icon = ICONS[service.icon] ?? FlaskConical
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group grid grid-cols-1 items-center gap-4 py-8 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[auto_auto_1fr_auto] sm:gap-8 sm:px-4"
              >
                <span className="font-mono text-sm text-ink-faint">0{index + 1}</span>

                <motion.div
                  whileHover={{ rotate: -6, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-violet"
                >
                  <Icon size={20} strokeWidth={1.7} />
                </motion.div>

                <div>
                  <h3 className="mb-1 font-display text-xl font-medium text-ink">{service.title}</h3>
                  <p className="max-w-xl text-sm leading-relaxed text-ink-muted">{service.description}</p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="hidden text-ink-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-amber sm:block"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
