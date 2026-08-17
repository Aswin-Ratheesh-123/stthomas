export interface AlumniProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  batch: string;
  department: string;
  quote: string;
  imageUrl: string;
  linkedInUrl?: string;
}

export interface AlumniStat {
  id: string;
  value: string;
  label: string;
}

export const alumniProfiles: AlumniProfile[] = [
  {
    id: '1',
    name: 'Siddharth Rajesh',
    role: 'Senior Software Engineer',
    company: 'Google',
    batch: '2018',
    department: 'Computer Science & Engineering',
    quote: 'The strong foundations in algorithms and computer systems combined with the encouraging mentorship from the CSE department at STCET paved the way for my career at Google.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: '2',
    name: 'Anjali Mukundan',
    role: 'Associate Director',
    company: 'KPMG India',
    batch: '2015',
    department: 'Electronics & Communication Engineering',
    quote: 'St. Thomas provided an environment where technical brilliance meets leadership training. The campus tech fests and team leadership roles built the confidence I rely on today.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: '3',
    name: 'Pranav V. P.',
    role: 'Doctoral Researcher',
    company: 'IISc Bangalore',
    batch: '2020',
    department: 'Mechanical Engineering',
    quote: 'The hands-on workshop experience and research publications mentored by the faculty at STCET made my transition into postgraduate research in advanced robotics seamless and highly rewarding.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: '4',
    name: 'Sneha K.',
    role: 'Infrastructure Project Manager',
    company: 'Larsen & Toubro (L&T)',
    batch: '2017',
    department: 'Civil Engineering',
    quote: 'From lab experiments to field visits, the Civil Engineering department at STCET emphasized practical execution. Managing complex urban development projects now feels natural.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80',
    linkedInUrl: 'https://linkedin.com'
  }
];

export const alumniStats: AlumniStat[] = [
  {
    id: 'graduates',
    value: '4,500+',
    label: 'Global Graduates'
  },
  {
    id: 'chapters',
    value: '12+',
    label: 'Alumni Chapters'
  },
  {
    id: 'countries',
    value: '25+',
    label: 'Countries Reached'
  },
  {
    id: 'leaders',
    value: '300+',
    label: 'Industry Leaders'
  }
];
