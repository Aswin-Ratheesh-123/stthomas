export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const statistics: StatItem[] = [
  {
    id: 'years',
    value: 15,
    suffix: '+',
    label: 'Years of Excellence',
    description: 'Nurturing innovative minds and technical engineering excellence since our establishment.'
  },
  {
    id: 'programs',
    value: 10,
    suffix: '+',
    label: 'Academic Programs',
    description: 'Undergraduate and postgraduate degrees aligned with evolving global market needs.'
  },
  {
    id: 'alumni',
    value: 4500,
    suffix: '+',
    label: 'Alumni Globally',
    description: 'Our graduates hold key leadership positions in top-tier global software and manufacturing giants.'
  },
  {
    id: 'placements',
    value: 95,
    suffix: '%',
    label: 'Placement Assistance',
    description: 'Continuous year-on-year employment support in Fortune 500 companies and tech leaders.'
  },
  {
    id: 'mou',
    value: 50,
    suffix: '+',
    label: 'Industry Partners',
    description: 'Active partnerships, internships, and certification MoUs with top industries.'
  }
];
