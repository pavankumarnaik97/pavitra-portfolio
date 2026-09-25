import type { Project } from './types'

// `image` holds a CSS gradient used as the card's visual mockup —
// swap for a real lab/facility photo path (e.g. "/projects/foo.jpg") when available.
export const projects: Project[] = [
  {
    id: 'proj-rich-analytical-rd',
    title: 'Crop-Care Analytical R&D — RICH',
    tagline: 'Rallis Innovation Chemistry Hub (RICH), Bengaluru',
    description:
      'Analytical support for crop-care R&D activities — active ingredients, formulations and premixes — covering raw materials, in-process materials and finished formulations.',
    image: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 60%, #0ea5e9 100%)',
    technologies: ['HPLC', 'GC', 'GC-MS', 'FTIR', 'Polarimeter', 'Karl Fischer'],
    featured: true,
    year: '2021 — Present',
    detail: {
      problem:
        'Rallis\' crop-care R&D pipeline spans insecticides, fungicides and herbicides, and needed dependable, audit-ready analytical data to support fast-moving formulation and active-ingredient development.',
      solution:
        'Provide end-to-end analytical support — from chromatographic analysis on HPLC and GC to advanced characterization on GC-MS — for raw materials, in-process materials and finished formulations, while supporting method development and validation for new products.',
      features: [
        'Qualitative and quantitative evaluation using HPLC and GC',
        'Advanced characterization and investigation support via GC-MS',
        'FTIR, Polarimeter, Karl Fischer and titration analysis as required',
        'Analytical documentation and traceability of results for R&D decisions',
      ],
      challenges:
        'Coordinating multiple analytical techniques across concurrent R&D requests while maintaining Good Documentation Practices and full traceability in a fast-moving formulation-development environment.',
      results:
        'Consistent, accurate analytical data generation supporting product-quality assessments, formulation decisions and laboratory investigations across the RICH R&D pipeline.',
    },
  },
  {
    id: 'proj-method-validation',
    title: 'HPLC & GC Method Development and Validation',
    tagline: 'Analytical Method Development',
    description:
      'Development and validation of chromatographic methods for raw materials, in-process samples and finished products across Waters, Shimadzu and Agilent platforms.',
    image: 'linear-gradient(135deg, #f97316 0%, #ec4899 55%, #8b5cf6 100%)',
    technologies: ['HPLC', 'GC', 'Empower', 'LabSolutions', 'OpenLab CDS'],
    year: '2021 — Present',
    detail: {
      problem:
        'New and existing agrochemical products required chromatographic methods that were accurate, reproducible and compliant with internal specifications.',
      solution:
        'Supported method development and optimization, followed by validation against specificity, accuracy, precision, linearity, range, robustness and system-suitability parameters.',
      features: [
        'Method optimization across Waters, Shimadzu and Agilent HPLC/GC platforms',
        'Validation covering specificity, accuracy, precision, linearity, range and robustness',
        'System suitability and chromatographic data evaluation',
        'Chromatography data system management via Empower, LabSolutions and OpenLab CDS',
      ],
      challenges:
        'Optimizing chromatographic separation for complex agrochemical formulations while keeping methods robust across different instrument platforms.',
      results:
        'Delivered validated, audit-ready analytical methods supporting reliable routine analysis and R&D product-development timelines.',
    },
  },
  {
    id: 'proj-gcms-characterization',
    title: 'GC-MS Analytical Characterization & Investigations',
    tagline: 'Advanced Analytical Characterization',
    description:
      'Used GC-MS for advanced qualitative and quantitative characterization, supporting analytical investigations and abnormal-result troubleshooting.',
    image: 'linear-gradient(135deg, #10b981 0%, #3b82f6 60%, #6366f1 100%)',
    technologies: ['GC-MS', 'Agilent 7000C Triple Quadrupole', 'MassHunter'],
    year: '2021 — Present',
    detail: {
      problem:
        'Certain analytical results required deeper characterization beyond routine HPLC/GC analysis to confirm identity, purity or the cause of an unexpected result.',
      solution:
        'Applied GC-MS analysis on an Agilent 7000C Triple Quadrupole with MassHunter software for advanced characterization and root-cause investigation support.',
      features: [
        'Qualitative and quantitative GC-MS characterization',
        'Support for analytical investigations into abnormal or unexpected results',
        'Data interpretation using MassHunter software',
        'Coordination with R&D teams on investigation outcomes',
      ],
      challenges:
        'Identifying probable causes of abnormal analytical results and coordinating appropriate troubleshooting within tight R&D timelines.',
      results:
        'Enabled faster, evidence-based resolution of analytical investigations and greater confidence in reported results.',
    },
  },
  {
    id: 'proj-instrument-standards',
    title: 'Instrument Calibration & Standards Management',
    tagline: 'Laboratory Quality & Compliance',
    description:
      'Routine calibration, troubleshooting and reference/working-standard management supporting reliable, audit-ready laboratory operations.',
    image: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 60%, #ec4899 100%)',
    technologies: ['Instrument Calibration', 'Reference Standards', 'GDP'],
    year: '2021 — Present',
    detail: {
      problem:
        'Reliable analytical results depend on properly calibrated instruments and correctly qualified reference and working standards, with full documentation.',
      solution:
        'Performed routine calibration checks and troubleshooting of HPLC, GC, GC-MS, FTIR, Polarimeter and titration instruments, alongside preparation, qualification and usage-record management of reference and working standards.',
      features: [
        'Routine instrument calibration and performance checks',
        'Troubleshooting to maintain reliable laboratory operations',
        'Reference and working-standard preparation, qualification and record-keeping',
        'Analytical documentation aligned with Good Documentation Practices (GDP)',
      ],
      challenges:
        'Keeping instrument qualification and standard documentation continuously audit-ready alongside a full routine-analysis workload.',
      results:
        'Maintained organized, audit-ready laboratory records and dependable instrument performance supporting day-to-day analytical operations.',
    },
  },
]
