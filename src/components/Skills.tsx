import { motion } from 'framer-motion'
import {
  TestTube2,
  FlaskConical,
  Microscope,
  Waves,
  Sun,
  Droplet,
  Beaker,
  ClipboardList,
  ShieldCheck,
  Gauge,
  BadgeCheck,
  FileText,
  Database,
  LineChart,
  BarChart3,
  Cpu,
  FileSpreadsheet,
  FileType,
  Presentation,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { fadeUp, staggerContainer, viewportDefault } from '../animations/variants'
import { skillGroups } from '../data/skills'
import SectionKicker from './SectionKicker'

const ICONS: Record<string, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  HPLC: TestTube2,
  GC: FlaskConical,
  'GC-MS': Microscope,
  FTIR: Waves,
  Polarimeter: Sun,
  'Karl Fischer Titrator': Droplet,
  'Auto Titrator': Beaker,
  'Method Development': ClipboardList,
  'Method Validation': ShieldCheck,
  'Instrument Calibration': Gauge,
  'Reference Standard Management': BadgeCheck,
  'Good Documentation Practices': FileText,
  Empower: Database,
  LabSolutions: LineChart,
  'OpenLab CDS': BarChart3,
  MassHunter: Cpu,
  'Microsoft Excel': FileSpreadsheet,
  'Microsoft Word': FileType,
  'Microsoft PowerPoint': Presentation,
}

const CATEGORY_ACCENT: Record<string, { icon: string; hoverBorder: string }> = {
  Instrumentation: { icon: 'text-accent-violet', hoverBorder: 'hover:border-accent-violet/50' },
  Techniques: { icon: 'text-accent-amber', hoverBorder: 'hover:border-accent-amber/50' },
  Software: { icon: 'text-accent-moss', hoverBorder: 'hover:border-accent-moss/50' },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
          variants={staggerContainer(0.08)}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionKicker index="02" label="Skills & Instrumentation" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-balance font-display text-4xl font-medium italic tracking-tight sm:text-5xl">
            The instruments behind the results.
          </motion.h2>
        </motion.div>

        <div className="space-y-12">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="show"
              viewport={viewportDefault}
              variants={staggerContainer(0.05)}
            >
              <motion.h3 variants={fadeUp} className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-ink-faint">
                {group.category}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => {
                  const Icon = ICONS[skill.name] ?? FlaskConical
                  const accent = CATEGORY_ACCENT[group.category]
                  return (
                    <motion.div
                      key={skill.name}
                      variants={fadeUp}
                      whileHover="hover"
                      className={`group relative flex items-center gap-2.5 overflow-hidden rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 transition-colors duration-300 hover:bg-white/[0.04] ${accent.hoverBorder}`}
                    >
                      <motion.span
                        variants={{ hover: { rotate: -8, scale: 1.15 } }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className={accent.icon}
                      >
                        <Icon size={17} strokeWidth={1.8} />
                      </motion.span>
                      <span className="text-sm font-medium text-ink-muted transition-colors group-hover:text-ink">
                        {skill.name}
                      </span>
                      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 shadow-glow-sm transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
