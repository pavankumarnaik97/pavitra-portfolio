import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportDefault } from '../animations/variants'
import { processSteps } from '../data/process'
import SectionKicker from './SectionKicker'

export default function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
          variants={staggerContainer(0.08)}
          className="mb-16 max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <SectionKicker index="05" label="How I Approach Analysis" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-balance font-display text-4xl font-medium italic tracking-tight sm:text-5xl"
          >
            A process built for accuracy, every time.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
          variants={staggerContainer(0.1)}
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step, idx) => (
            <motion.div key={step.index} variants={fadeUp} className="relative pt-8">
              <div
                className="absolute left-0 top-0 h-px w-full bg-accent-amber"
                style={{ opacity: 1 - idx * 0.2 }}
              />
              <span className="mb-4 block font-display text-4xl font-light text-accent-amber/90">
                {step.index}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
