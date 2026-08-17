export interface OfficeUnit {
  id: string;
  name: string;
  location: string;
  extension: string;
  email: string;
  hours: string;
  focus: string;
}

export interface OfficeStaff {
  id: string;
  name: string;
  designation: string;
  officeUnitId: string;
  email: string;
  extension: string;
  imageUrl?: string;
}

export const officeUnits: OfficeUnit[] = [
  {
    id: 'central-admin',
    name: 'Central Administration Office',
    location: 'Main Block, Ground Floor, Room 101',
    extension: '101 / 102',
    email: 'info@stcet.ac.in',
    hours: '9:00 AM - 5:00 PM (Mon - Sat)',
    focus: 'General administration, academic compliance, HR records, public relations, and institutional planning.'
  },
  {
    id: 'accounts',
    name: 'Accounts & Finance Section',
    location: 'Main Block, Ground Floor, Room 103',
    extension: '105 / 106',
    email: 'accounts@stcet.ac.in',
    hours: '9:00 AM - 4:00 PM (Mon - Fri)',
    focus: 'Student fee payments, semester registrations, financial audits, scholarships disbursement, and vendor clearance.'
  },
  {
    id: 'admissions',
    name: 'Admissions & Public Relations Cell',
    location: 'Main Block, Entrance Lobby Desk 2',
    extension: '120 / 121',
    email: 'admissions@stcet.ac.in',
    hours: '8:30 AM - 5:30 PM (Mon - Sat)',
    focus: 'B.Tech & M.Tech course enquiries, prospectus distribution, seat allotments, and campus tour bookings.'
  },
  {
    id: 'exam-cell',
    name: 'Examination Cell',
    location: 'Main Block, First Floor, Room 205',
    extension: '110',
    email: 'examcell@stcet.ac.in',
    hours: '9:00 AM - 5:00 PM (Mon - Sat)',
    focus: 'KTU registration coordination, internal mark collection, hall ticket distribution, and university exam conducting.'
  },
  {
    id: 'it-support',
    name: 'Technical & IT Support Unit',
    location: 'Central Lab Block, Third Floor, Room 304',
    extension: '150',
    email: 'sysadmin@stcet.ac.in',
    hours: '8:30 AM - 6:00 PM (Mon - Sat)',
    focus: 'Campus-wide LAN & Wi-Fi networks, student portal maintenance, server systems, and laboratory hardware troubleshooting.'
  }
];

export const officeStaffList: OfficeStaff[] = [
  {
    id: 'somasekharan-nair',
    name: 'Sri. Somasekharan Nair',
    designation: 'Administrative Officer',
    officeUnitId: 'central-admin',
    email: 'ao@stcet.ac.in',
    extension: '101',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'bindhu-kurup',
    name: 'Smt. Bindhu Kurup',
    designation: 'Senior Accounts Officer',
    officeUnitId: 'accounts',
    email: 'bindhu.a@stcet.ac.in',
    extension: '105',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'vineeth-kumar',
    name: 'Sri. Vineeth Kumar',
    designation: 'Admissions & PR Coordinator',
    officeUnitId: 'admissions',
    email: 'admissions@stcet.ac.in',
    extension: '120',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'akhil-das',
    name: 'Sri. Akhil Das',
    designation: 'Exam Superintendent',
    officeUnitId: 'exam-cell',
    email: 'examcell@stcet.ac.in',
    extension: '110',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'vipin-lal',
    name: 'Sri. Vipin Lal',
    designation: 'System Administrator',
    officeUnitId: 'it-support',
    email: 'sysadmin@stcet.ac.in',
    extension: '150',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'preetha-kumari',
    name: 'Smt. Preetha Kumari',
    designation: 'Senior Office Clerk',
    officeUnitId: 'central-admin',
    email: 'preetha.k@stcet.ac.in',
    extension: '102',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'manoj-kumar',
    name: 'Sri. Manoj Kumar',
    designation: 'Accounts Assistant',
    officeUnitId: 'accounts',
    email: 'manoj.k@stcet.ac.in',
    extension: '106',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'sandhya-devi',
    name: 'Smt. Sandhya Devi',
    designation: 'Office Superintendent',
    officeUnitId: 'central-admin',
    email: 'sandhya.d@stcet.ac.in',
    extension: '103',
    imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80'
  }
];
