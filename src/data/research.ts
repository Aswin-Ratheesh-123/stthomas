export interface ResearchCenter {
  name: string;
  department: string;
  focusArea: string;
  collaborators: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
}

export interface Patent {
  title: string;
  inventors: string;
  applicationNumber: string;
  status: 'Published' | 'Granted' | 'Filed';
  year: number;
}

export const researchCenters: ResearchCenter[] = [
 
  {
    name: 'Advanced Computing & Cognitive AI Lab',
    department: 'Computer Science / AI & Data Science',
    focusArea: 'Medical imaging classification, NLP frameworks in regional languages, and cloud edge analytics.',
    collaborators: 'AICTE Research Grants division'
  },
  {
    name: 'IoT & Telecommunication Prototyping Facility',
    department: 'Electronics & Communication Engineering',
    focusArea: 'Agricultural sensor networks, low power wide area transmission protocols, and VLSI circuit layouts.',
    collaborators: 'State IT Mission / Agritech incubators'
  }
];

export const publicationsList: Publication[] = [
  {
    title: 'Optimizing Deep Learning Architectures for Early Plant Disease Detection using UAV Imagery',
    authors: 'Dr. Shaji Sen, Dr. Ananya Nair',
    journal: 'IEEE Transactions on Geoscience and Remote Sensing',
    year: 2025
  },
  {
    title: 'Low-Power VLSI Design of High-Speed FIR Filters for Telecommunication Architectures',
    authors: 'Dr. Thomas George, Prof. Jayan K. P.',
    journal: 'Springer Journal of VLSI Signal Processing',
    year: 2025
  },
  {
    title: 'Thermal Performance and Emissions Analysis of Biodiesel Blends in Multi-Cylinder CI Engines',
    authors: 'Dr. Ramesh Kumar',
    journal: 'Elsevier International Journal of Energy Research',
    year: 2024
  },
  {
    title: 'A Review on Sustainable Green Concrete Incorporating Recycled Plastics and Construction Waste',
    authors: 'Prof. Suresh Babu',
    journal: 'Journal of Cleaner Production',
    year: 2024
  }
];

export const patentsList: Patent[] = [
  {
    title: 'A Smart IoT-Based Agricultural Water Management System with Dynamic Soil Profiling',
    inventors: 'Dr. Thomas George, Prof. Jayan K. P.',
    applicationNumber: '20244105678A',
    status: 'Granted',
    year: 2025
  },
  {
    title: 'Autonomous Field Diagnostics Agrobot utilizing Deep Neural Classifiers',
    inventors: 'Dr. Ananya Nair, Dr. Shaji Sen',
    applicationNumber: '20254109812A',
    status: 'Published',
    year: 2025
  },
  {
    title: 'Thermal Cooling Jacket with Integrated Phase Change Material for EV Battery Packs',
    inventors: 'Dr. Ramesh Kumar, Prof. Latha K.',
    applicationNumber: '20254100234A',
    status: 'Filed',
    year: 2025
  }
];
