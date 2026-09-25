import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/types'
import { GithubIcon } from './icons/BrandIcons'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      layoutId={`card-${project.id}`}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-white/25"
    >
      <button
        onClick={() => onOpen(project)}
        className="relative aspect-[16/10] w-full overflow-hidden text-left"
        aria-label={`Open details for ${project.title}`}
      >
        <motion.div
          layoutId={`image-${project.id}`}
          style={{ background: project.image }}
          className="absolute inset-0 scale-100 transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
        <div className="absolute inset-0 flex items-end p-6">
          <span className="font-display text-2xl font-semibold text-white drop-shadow-sm sm:text-3xl">
            {project.title}
          </span>
        </div>
        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 -translate-x-2 translate-y-2">
          <ArrowUpRight size={18} />
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-accent-violet">
            {project.tagline}
          </p>
          <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              <GithubIcon size={15} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              <ArrowUpRight size={15} /> Live Demo
            </a>
          )}
          <button
            onClick={() => onOpen(project)}
            className="ml-auto text-sm font-medium text-accent-violet transition-colors hover:text-accent-blue"
          >
            Details →
          </button>
        </div>
      </div>
    </motion.article>
  )
}
