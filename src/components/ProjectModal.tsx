import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { useEffect } from 'react'
import type { Project } from '../data/types'
import { GithubIcon } from './icons/BrandIcons'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto p-4 py-10 sm:p-6 sm:py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            aria-hidden="true"
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            layoutId={`card-${project.id}`}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-base-surface shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
            >
              <X size={17} />
            </button>

            <motion.div
              layoutId={`image-${project.id}`}
              style={{ background: project.image }}
              className="relative aspect-[16/9] w-full sm:aspect-[16/7]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-base-surface via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  {project.year}
                </p>
                <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  {project.title}
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="max-h-[60vh] overflow-y-auto p-6 sm:p-8"
            >
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-accent-violet">
                {project.tagline}
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-white/30 hover:bg-white/[0.05]"
                  >
                    <GithubIcon size={16} /> View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-amber px-4 py-2 text-sm font-semibold text-white"
                  >
                    <ArrowUpRight size={16} /> Live Demo
                  </a>
                )}
                <div className="ml-auto flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <DetailBlock title="Overview" text={project.description} />
                <DetailBlock title="Problem" text={project.detail.problem} />
                <DetailBlock title="Solution" text={project.detail.solution} />
                <DetailBlock title="Challenges" text={project.detail.challenges} />
              </div>

              <div className="mt-8">
                <h3 className="mb-3 font-display text-lg font-semibold text-ink">Key Features</h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.detail.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-violet" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <h3 className="mb-2 font-display text-lg font-semibold text-ink">Results</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{project.detail.results}</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function DetailBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="mb-2 font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
    </div>
  )
}
