import { AnimatePresence, motion } from 'framer-motion'
import { Loader2, Mail, Send, CheckCircle2, Phone, MapPin } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { fadeUp, staggerContainer, viewportDefault } from '../animations/variants'
import SectionKicker from './SectionKicker'
import { LinkedinIcon } from './icons/BrandIcons'

type FormStatus = 'idle' | 'loading' | 'success'

const CONTACT_LINKS = [
  { icon: Mail, label: 'pavitrap364@gmail.com', href: 'mailto:pavitrap364@gmail.com' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/pavan-naik-77b64a20b/', label: 'LinkedIn' },
  { icon: Phone, label: '+91 94826 88622', href: 'tel:+919482688622' },
  { icon: MapPin, label: 'Bengaluru, Karnataka', href: 'https://maps.google.com/?q=Bengaluru,Karnataka' },
]

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status !== 'idle') return
    setStatus('loading')
    window.setTimeout(() => {
      setStatus('success')
      window.setTimeout(() => setStatus('idle'), 2600)
    }, 1400)
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
          variants={staggerContainer(0.08)}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionKicker index="08" label="Contact" align="center" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-2xl text-balance font-display text-4xl font-medium italic tracking-tight sm:text-5xl"
          >
            Let&apos;s talk about your lab&apos;s next analytical challenge.
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-ink-muted">
            Open to analytical, R&amp;D and quality-focused opportunities — my inbox is always open.
          </motion.p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportDefault}
            variants={staggerContainer(0.08)}
            className="flex flex-col gap-4"
          >
            {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent-violet/40"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-white/10 text-accent-violet transition-colors group-hover:bg-white/[0.05]">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span className="text-sm font-medium text-ink-muted transition-colors group-hover:text-ink">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={viewportDefault}
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
          >
            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors duration-300 focus:border-accent-violet/60 focus:bg-white/[0.04] focus:outline-none"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors duration-300 focus:border-accent-violet/60 focus:bg-white/[0.04] focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell me about the role or opportunity..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors duration-300 focus:border-accent-violet/60 focus:bg-white/[0.04] focus:outline-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status !== 'idle'}
              whileHover={status === 'idle' ? { scale: 1.02 } : undefined}
              whileTap={status === 'idle' ? { scale: 0.98 } : undefined}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-amber px-6 py-3.5 text-sm font-semibold text-white shadow-glow-sm disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === 'idle' && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <Send size={16} /> Send Message
                  </motion.span>
                )}
                {status === 'loading' && (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </motion.span>
                )}
                {status === 'success' && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} /> Message Sent
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
