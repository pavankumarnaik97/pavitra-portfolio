import type { ProcessStep } from './types'

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Sample Receipt & Planning',
    description:
      'Review the analytical request, confirm sample details and select the appropriate technique — HPLC, GC, GC-MS, FTIR, Polarimeter or titration — before testing begins.',
  },
  {
    index: '02',
    title: 'Method Development & Optimization',
    description:
      'Develop or adapt the analytical method, optimizing chromatographic and instrumental parameters for the sample matrix and required sensitivity.',
  },
  {
    index: '03',
    title: 'Validation & Analysis',
    description:
      'Validate methods against specificity, accuracy, precision, linearity, range and robustness, then execute routine analysis with full system-suitability checks.',
  },
  {
    index: '04',
    title: 'Review & Reporting',
    description:
      'Review chromatographic data and results for accuracy and compliance, then document everything per Good Documentation Practices before reporting.',
  },
]
