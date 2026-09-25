import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Instrumentation',
    items: [
      { name: 'HPLC' },
      { name: 'GC' },
      { name: 'GC-MS' },
      { name: 'FTIR' },
      { name: 'Polarimeter' },
      { name: 'Karl Fischer Titrator' },
      { name: 'Auto Titrator' },
    ],
  },
  {
    category: 'Techniques',
    items: [
      { name: 'Method Development' },
      { name: 'Method Validation' },
      { name: 'Instrument Calibration' },
      { name: 'Reference Standard Management' },
      { name: 'Good Documentation Practices' },
    ],
  },
  {
    category: 'Software',
    items: [
      { name: 'Empower' },
      { name: 'LabSolutions' },
      { name: 'OpenLab CDS' },
      { name: 'MassHunter' },
      { name: 'Microsoft Excel' },
      { name: 'Microsoft Word' },
      { name: 'Microsoft PowerPoint' },
    ],
  },
]
