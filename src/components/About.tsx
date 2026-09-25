import { motion } from 'framer-motion'
import { fadeUp, slideIn, slideInRight, staggerContainer, viewportDefault } from '../animations/variants'
import SectionKicker from './SectionKicker'
import StatCounter from './StatCounter'
import type { StatItem } from '../data/types'

const STATS: StatItem[] = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Instruments Mastered', value: 12, suffix: '+' },
  { label: 'Analytical Techniques', value: 8, suffix: '+' },
  { label: 'Data Accuracy Focus', value: 100, suffix: '%' },
]

const STAT_ACCENTS = ['text-accent-violet', 'text-accent-amber', 'text-ink', 'text-accent-moss']

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
          variants={staggerContainer(0.08)}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionKicker index="01" label="About Me" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Precision behind every analytical result.
          </motion.h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportDefault}
            variants={slideIn}
            className="space-y-5 text-lg leading-relaxed text-ink-muted"
          >
            <p>
              I&apos;m an analytical chemistry professional with nearly five years of experience
              in analytical development, method validation, routine analysis and laboratory
              operations within the agrochemical and crop-care R&amp;D environment.
            </p>
            <p>
              Currently an Analytical Executive at Rallis India Limited, a Tata Enterprise, I work
              hands-on with raw materials, in-process samples and finished products using HPLC,
              GC, GC-MS, FTIR, Polarimeter, Karl Fischer Titrator and Auto Titrators — across
              Waters, Shimadzu and Agilent platforms.
            </p>
            <p>
              I&apos;m known for maintaining analytical accuracy, data integrity and documentation
              compliance, and for the timely execution of analytical activities that support R&amp;D,
              product development and quality requirements.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportDefault}
            variants={staggerContainer(0.1)}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={slideInRight}
                whileHover={{ y: -4, borderColor: 'rgba(167,139,250,0.4)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`card-border group flex flex-col justify-between gap-6 bg-white/[0.02] p-6 ${
                  i === 1 ? 'sm:mt-4' : ''
                }`}
              >
                <span
                  className={`font-display text-4xl font-medium sm:text-5xl ${STAT_ACCENTS[i % STAT_ACCENTS.length]}`}
                >
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-ink-muted">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
