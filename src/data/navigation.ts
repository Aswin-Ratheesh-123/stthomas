export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const utilityNav: NavItem[] = [
  { label: 'NBA', href: '/admissions' },
  { label: 'UGC', href: '/admissions' },
  { label: 'Careers', href: '/contact?subject=Careers' },
  { label: 'Student Portal', href: 'https://stmkannur.linways.com/' },
  { label: 'Faculty Portal', href: 'https://stmkannur.linways.com/' },
  { label: 'Contact', href: '/contact' },
];

export const mainNav: NavItem[] = [
  { label: 'ABOUT', href: '/about' },
  { label: 'ACADEMICS', href: '/academics' },
  { label: 'ADMISSIONS', href: '/admissions' },
  { label: 'PLACEMENTS', href: '/placements' },
  { label: 'RESEARCH', href: '/research' },
  { label: 'CAMPUS LIFE', href: '/campus-life' },
];

export const footerNav: NavGroup[] = [
  {
    label: 'ABOUT',
    items: [
      { label: 'About the Institution', href: '/about' },
      { label: 'Vision & Mission', href: '/about#vision-mission' },
      { label: 'Principal Message', href: '/about#principal-message' },
      { label: 'Accreditation', href: '/about#accreditation' },
      { label: 'Administrative Office', href: '/about/office' },
    ],
  },
  {
    label: 'ACADEMICS',
    items: [
      { label: 'Academic Programs', href: '/academics/programs' },
      { label: 'Departments', href: '/academics/departments' },
      { label: 'Faculty Profiles', href: '/faculty' },
      { label: 'Academic Calendar', href: '/academics#calendar' },
    ],
  },
  {
    label: 'ADMISSIONS',
    items: [
      { label: 'Admissions Overview', href: '/admissions' },
      { label: 'Eligibility Criteria', href: '/admissions#eligibility' },
      { label: 'How to Apply', href: '/admissions#apply' },
      { label: 'Scholarships', href: '/admissions#scholarships' },
    ],
  },
  {
    label: 'PLACEMENTS',
    items: [
      { label: 'Placements Overview', href: '/placements' },
      { label: 'Placement Records', href: '/placements#records' },
      { label: 'Training Modules', href: '/placements#training' },
      { label: 'Prime Recruiters', href: '/placements#recruiters' },
    ],
  },
  {
    label: 'CAMPUS LIFE',
    items: [
      { label: 'Campus Overview', href: '/campus-life' },
      { label: 'Clubs & Societies', href: '/campus-life#clubs' },
      { label: 'Photo & Video Gallery', href: '/gallery' },
      { label: 'Upcoming Events', href: '/events' },
    ],
  },
];
