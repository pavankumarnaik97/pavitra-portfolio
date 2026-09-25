export interface SkillItem {
  name: string
  level?: number
}

export interface SkillGroup {
  category: 'Instrumentation' | 'Techniques' | 'Software'
  items: SkillItem[]
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  duration: string
  location?: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface ProjectDetail {
  problem: string
  solution: string
  features: string[]
  challenges: string
  results: string
  screenshots?: string[]
}

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  year: string
  detail: ProjectDetail
}

export interface ServiceItem {
  title: string
  description: string
  icon: string
}

export interface StatItem {
  label: string
  value: number
  suffix: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
}

export interface ProcessStep {
  index: string
  title: string
  description: string
}
