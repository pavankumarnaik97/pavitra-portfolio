import type { ExperienceItem } from './types'

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Rallis India Limited — A Tata Enterprise',
    role: 'Analytical Executive — Analytical / R&D',
    duration: 'September 2021 — Present',
    location: 'Bengaluru, Karnataka',
    description:
      'Perform analytical testing of raw materials, in-process samples and finished products at the Rallis Innovation Chemistry Hub (RICH) — Rallis India\'s Bengaluru-based crop-care R&D facility — using HPLC, GC, GC-MS, FTIR, Polarimeter, Karl Fischer and Auto Titration techniques.',
    achievements: [
      'Support analytical method development and validation activities for R&D and product-development requirements',
      'Review chromatographic data and system suitability parameters to confirm accuracy, precision and compliance with specifications before reporting',
      'Manage reference and working standards, including preparation, qualification, usage records and documentation',
      'Maintain analytical records per Good Documentation Practices (GDP) and support instrument calibration, troubleshooting and audit-readiness',
    ],
    technologies: ['HPLC', 'GC', 'GC-MS', 'FTIR', 'Polarimeter', 'Karl Fischer Titrator', 'Auto Titrator'],
  },
]
