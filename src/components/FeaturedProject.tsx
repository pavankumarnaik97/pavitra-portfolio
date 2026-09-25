import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import type { Project } from '../data/types'
import { GithubIcon } from './icons/BrandIcons'

interface FeaturedProjectProps {
  project: Project
  onOpen: (project: Project) => void
}

export default function FeaturedProject({ project, onOpen }: FeaturedProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.15, 1.25])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.35, 0.15])
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1])
  const textY = useTransform(scrollYProgress, [0.1, 0.35], [24, 0])

  return (
    <div ref={ref} className="relative mb-20 sm:mb-28">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-8 bg-accent-violet" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-violet">
          Primary R&amp;D Focus
        </span>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10">
        <motion.div
          aria-hidden="true"
          style={{ opacity: glowOpacity }}
          className="absolute -inset-20 bg-gradient-to-br from-accent-purple via-accent-blue to-transparent blur-3xl"
        />

        <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[16/8]">
          <motion.div
            style={{ background: project.image, scale: imageScale }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent" />

          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute inset-x-0 bottom-0 p-6 sm:p-10"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              {project.tagline}
            </p>
            <h3 className="mb-4 max-w-lg font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpen(project)}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#050507] transition-transform hover:scale-105"
              >
                View Case Study <ArrowUpRight size={16} />
              </button>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  <GithubIcon size={16} /> Source
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
