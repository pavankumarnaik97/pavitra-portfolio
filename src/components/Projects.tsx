import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeUp, staggerContainer, viewportDefault } from '../animations/variants'
import { projects } from '../data/projects'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import SectionKicker from './SectionKicker'
import type { Project } from '../data/types'

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const featured = projects.find((p) => p.featured) ?? projects[0]
  const rest = projects.filter((p) => p.id !== featured.id)

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
          variants={staggerContainer(0.08)}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionKicker index="04" label="R&D Project Exposure" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-balance font-display text-4xl font-medium italic tracking-tight sm:text-5xl">
            Analytical R&amp;D in focus.
          </motion.h2>
        </motion.div>

        <FeaturedProject project={featured} onOpen={setActiveProject} />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
          variants={staggerContainer(0.1)}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rest.map((project, index) => (
            <motion.div key={project.id} variants={fadeUp} className={index === 0 ? 'lg:col-span-2' : ''}>
              <ProjectCard project={project} onOpen={setActiveProject} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
