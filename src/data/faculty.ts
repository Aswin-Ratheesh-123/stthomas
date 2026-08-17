export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  specialization: string;
  experience: string;
  email: string;
  imageUrl?: string;
  researchInterests?: string[];
  publicationsCount?: number;
}

export const facultyList: FacultyMember[] = [
  {
    id: 'dr-shaji',
    name: 'Dr. Shaji Sen',
    designation: 'Principal & Professor',
    department: 'Computer Science & Engineering',
    qualification: 'Ph.D. in Computer Science (NIT Calicut), M.Tech, B.Tech',
    specialization: 'Artificial Intelligence, High Performance Computing',
    experience: '22 Years',
    email: 'principal@stcet.ac.in',
    imageUrl: '/images/faculty/shaji.jpg',
    researchInterests: ['Neural Networks', 'Distributed Systems', 'Cloud Security'],
    publicationsCount: 45
  },
  {
    id: 'prof-mathew',
    name: 'Prof. Mathew Joseph',
    designation: 'Associate Professor & HOD',
    department: 'Computer Science & Engineering',
    qualification: 'M.Tech (IIT Madras), B.Tech (CUSAT)',
    specialization: 'Software Architecture, Machine Learning',
    experience: '15 Years',
    email: 'hodcse@stcet.ac.in',
    imageUrl: '/images/faculty/mathew.jpg',
    researchInterests: ['Pattern Recognition', 'Object Oriented Designs'],
    publicationsCount: 18
  },
  {
    id: 'dr-thomas',
    name: 'Dr. Thomas George',
    designation: 'Professor & HOD',
    department: 'Electronics & Communication Engineering',
    qualification: 'Ph.D. in VLSI (IIT Bombay), M.E., B.Tech',
    specialization: 'Microchip Designing, Low Power VLSI',
    experience: '18 Years',
    email: 'hodece@stcet.ac.in',
    imageUrl: '/images/faculty/thomas.jpg',
    researchInterests: ['VLSI Architectures', 'ASIC Designs', 'Embedded Firmware'],
    publicationsCount: 32
  },
  
  {
    id: 'dr-ramesh',
    name: 'Dr. Ramesh Kumar',
    designation: 'Professor & HOD',
    department: 'Mechanical Engineering',
    qualification: 'Ph.D. in Thermal Science (IIT Kharagpur), M.Tech, B.Tech',
    specialization: 'Internal Combustion Engines, Renewable Energy Systems',
    experience: '20 Years',
    email: 'hodme@stcet.ac.in',
    imageUrl: '/images/faculty/ramesh.jpg',
    researchInterests: ['Alternative Fuels', 'Fluid Dynamics Modeling', 'Heat Transfer'],
    publicationsCount: 38
  },
  {
    id: 'prof-suresh',
    name: 'Prof. Suresh Babu',
    designation: 'Associate Professor & HOD',
    department: 'Civil Engineering',
    qualification: 'M.Tech in Structural Engineering (Cochin University), B.Tech',
    specialization: 'Structural Dynamics, Earthquake Engineering',
    experience: '16 Years',
    email: 'hodce@stcet.ac.in',
    imageUrl: '/images/faculty/suresh.jpg',
    researchInterests: ['High Performance Concrete', 'Disaster Mitigation Structures'],
    publicationsCount: 15
  },
  {
    id: 'prof-sruthy',
    name: 'Prof. Sruthy M.',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    qualification: 'M.Tech (KTU), B.Tech',
    specialization: 'Database Systems, Web Technologies',
    experience: '8 Years',
    email: 'sruthy@stcet.ac.in',
    imageUrl: '/images/faculty/sruthy.jpg',
    researchInterests: ['NoSQL Databases', 'Cloud Data Formats'],
    publicationsCount: 6
  },
  {
    id: 'prof-jayan',
    name: 'Prof. Jayan K. P.',
    designation: 'Assistant Professor',
    department: 'Electronics & Communication Engineering',
    qualification: 'M.Tech (CUSAT), B.Tech',
    specialization: 'Embedded Hardware, IoT Protocols',
    experience: '9 Years',
    email: 'jayan@stcet.ac.in',
    imageUrl: '/images/faculty/jayan.jpg',
    researchInterests: ['Wireless Sensor Networks', 'Smart Agriculture Tools'],
    publicationsCount: 9
  }
];
