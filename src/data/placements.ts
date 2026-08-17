export interface PlacementStat {
  year: string;
  percentage: number;
  highestPackage: string;
  averagePackage: string;
}

export interface Recruiter {
  name: string;
  logoText: string;
  industry: string;
}

export const placementHistory: PlacementStat[] = [
  { year: '2025-26', percentage: 92, highestPackage: '12.5 LPA', averagePackage: '4.8 LPA' },
  { year: '2024-25', percentage: 95, highestPackage: '14.0 LPA', averagePackage: '4.6 LPA' },
  { year: '2023-24', percentage: 89, highestPackage: '11.0 LPA', averagePackage: '4.2 LPA' },
  { year: '2022-23', percentage: 91, highestPackage: '10.5 LPA', averagePackage: '4.0 LPA' }
];

export const recruiters: Recruiter[] = [
  { name: 'TCS', logoText: 'TCS', industry: 'IT Services' },
  { name: 'Infosys', logoText: 'Infosys', industry: 'IT Services' },
  { name: 'Wipro', logoText: 'Wipro', industry: 'IT Services' },
  { name: 'Bosch', logoText: 'BOSCH', industry: 'Core Engineering' },
  { name: 'Cognizant', logoText: 'CTS', industry: 'IT Services' },
  { name: 'Accenture', logoText: 'Accenture', industry: 'Consulting' },
  { name: 'MRF', logoText: 'MRF', industry: 'Core Engineering' },
  { name: 'Hexaware', logoText: 'Hexaware', industry: 'IT Services' },
  { name: 'Federal Bank', logoText: 'Federal Bank', industry: 'Banking & Finance' },
  { name: 'UST Global', logoText: 'UST', industry: 'Digital Tech' }
];

export const trainingModules = [
  {
    title: 'Aptitude & Logical Reasoning',
    description: 'Weekly sessions starting in the 5th semester covering numerical ability, analytical concepts, and logical deduction techniques.'
  },
  {
    title: 'Coding & Algorithmic Practice',
    description: 'Hands-on training in Python, Java, C++, DSA, and cloud database optimization tailored for tier-1 developer exams.'
  },
  {
    title: 'Soft Skills & Interview Prep',
    description: 'Mock interviews, group discussions, presentation techniques, and resume building workshops conducted by corporate professionals.'
  },
  {
    title: 'Industrial Projects & Internships',
    description: 'Assisting students in securing mandatory pre-final year engineering internships in core tech firms.'
  }
];
