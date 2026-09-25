import { motion } from 'framer-motion'
import { ArrowDown, Mail, Phone } from 'lucide-react'
import { useRef, type MouseEvent } from 'react'
import { fadeUp, staggerContainer } from '../animations/variants'
import profilePhoto from '../assets/profile.jpg'
import { LinkedinIcon } from './icons/BrandIcons'

const SOCIALS = [
  { icon: Mail, href: 'mailto:pavitrap364@gmail.com', label: 'Email' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/pavan-naik-77b64a20b/', label: 'LinkedIn' },
  { icon: Phone, href: 'tel:+919482688622', label: 'Phone' },
]

const FLOAT_TAGS = [
  { label: 'HPLC', className: 'left-[-14px] top-10 sm:left-[-22px]' },
  { label: 'GC-MS', className: 'right-[-10px] top-1/3 sm:right-[-18px]' },
  { label: '5+ yrs', className: 'bottom-8 left-2 sm:left-[-10px]' },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = heroRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mx', `${x}%`)
    el.style.setProperty('--my', `${y}%`)
  }

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
      style={{ ['--mx' as string]: '50%', ['--my' as string]: '30%' }}
    >
      {/* mouse-follow glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx) var(--my), rgba(139,92,246,0.12), transparent 60%)',
        }}
      />

      {/* oversized watermark type */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-0 select-none whitespace-nowrap font-display text-[22vw] font-light italic leading-none text-white/[0.025] sm:text-[16vw]"
      >
        Analytical
      </span>

      <div className="section-shell relative grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-ink-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent-amber/80"
          >
            Hi, I&apos;m Pavitra Ganapati Naik — Analytical Executive
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.75rem]"
          >
            I build confidence
            <span className="block bg-gradient-to-r from-accent-violet via-accent-purple to-accent-amber bg-clip-text italic text-transparent">
              in every analytical result.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-muted"
          >
            I develop and validate analytical methods across HPLC, GC and GC-MS, delivering
            accurate, audit-ready results for raw materials, in-process samples and finished products.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('projects')}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent-purple to-accent-amber px-6 py-3 text-sm font-semibold text-white shadow-glow"
            >
              <span className="relative z-10">View My Work</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('contact')}
              className="rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-white/30 hover:bg-white/[0.05]"
            >
              Contact Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('contact')}
              className="rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-white/30 hover:bg-white/[0.05]"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex items-center gap-5">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-all hover:-translate-y-0.5 hover:border-accent-violet/40 hover:text-ink"
              >
                <Icon size={17} strokeWidth={1.8} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm lg:block"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent-purple/40 via-accent-violet/20 to-accent-amber/30 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-base-raised/80">
            <div className="pointer-events-none absolute inset-0 z-10 bg-grid-pattern bg-[size:28px_28px] opacity-20" />
            <img
              src={profilePhoto}
              alt="Pavitra Ganapati Naik"
              className="h-full w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-base-deep/90 via-base-deep/10 to-transparent pb-5 pt-14 text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-faint">
                Since 2021
              </span>
            </div>
          </div>

          {FLOAT_TAGS.map((tag, i) => (
            <motion.span
              key={tag.label}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.6,
              }}
              className={`absolute z-10 rounded-full border border-white/15 bg-base-soft/95 px-3 py-1.5 text-xs font-medium text-ink shadow-glow-sm backdrop-blur-sm ${tag.className}`}
            >
              {tag.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  )
}
