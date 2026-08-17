export interface Department {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  vision: string;
  mission: string[];
  intake: number;
  duration: string;
  achievements: string[];
  labs: { name: string; description: string }[];
}

export const departments: Department[] = [
  {
    slug: 'computer-science-engineering',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    icon: 'Cpu',
    description: 'Empowering students with state-of-the-art computer science knowledge, software systems design, and engineering skills to lead the digital revolution.',
    vision: 'To be a center of excellence in computer science education and research, fostering innovation and social responsibility.',
    mission: [
      'Provide quality education in theory and application of computer science.',
      'Promote research, development, and industrial collaborations.',
      'Impart strong ethical values and leadership skills for societal benefit.'
    ],
    intake: 120,
    duration: '4 Years (B.Tech)',
    achievements: [
      '100% placement record in tier-1 IT companies in 2025.',
      'Students won 1st prize in Smart India Hackathon (SIH 2025).',
      'Research grants received from AICTE for Deep Learning Research Project.'
    ],
    labs: [
      { name: 'Advanced Programming Lab', description: 'Equipped with Core i7 desktops running Java, Python, and C++ environments.' },
      { name: 'Database & Data Mining Lab', description: 'Supports research in database administration, SQL, NoSQL, and Big Data.' },
      { name: 'Cloud Computing & Cyber Security Lab', description: 'Configured for server administration, virtualization, and network security testing.' },
      { name: 'Machine Learning Lab', description: 'Equipped with NVIDIA GPU workstations for deep learning and neural network training.' }
    ]
  },
  
  {
    slug: 'electronics-communication-engineering',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    icon: 'Radio',
    description: 'Providing comprehensive training in telecommunication, microelectronics, VLSI design, signal processing, and embedded systems.',
    vision: 'To achieve global prominence in electronics and communication education through research and industry exposure.',
    mission: [
      'Deliver rich conceptual knowledge in analog, digital, and optical communication.',
      'Nurture hands-on skills in chip designing, embedded controllers, and RF circuits.',
      'Foster entrepreneurial mindsets in consumer electronics and telecom industries.'
    ],
    intake: 60,
    duration: '4 Years (B.Tech)',
    achievements: [
      'MoU signed with top semiconductor manufacturing groups for student internships.',
      'Best Paper Award at IEEE International Conference 2025.',
      'Patent granted for IoT-based smart agricultural sensing unit.'
    ],
    labs: [
      { name: 'Microprocessor & Microcontroller Lab', description: 'Features 8086, ARM, and PIC development boards.' },
      { name: 'VLSI & Embedded Systems Design Lab', description: 'Software environments like Xilinx, Cadence, and MATLAB.' },
      { name: 'Advanced Communication Lab', description: 'Equipped with spectrum analyzers, digital storage oscilloscopes, and fiber optic kits.' }
    ]
  },
  {
    slug: 'mechanical-engineering',
    name: 'Mechanical Engineering',
    shortName: 'ME',
    icon: 'Settings',
    description: 'Offering solid concepts in thermodynamics, machine design, CAD/CAM, robotics, and advanced manufacturing technologies.',
    vision: 'To deliver quality education in mechanical engineering, producing graduates who excel in industrial design and innovation.',
    mission: [
      'Provide practical training in mechanics, fluid dynamics, and thermodynamics.',
      'Enhance design thinking using industry-grade tools (AutoCAD, ANSYS, SolidWorks).',
      'Foster sustainable manufacturing methods and smart factory concepts.'
    ],
    intake: 60,
    duration: '4 Years (B.Tech)',
    achievements: [
      'Participated in SAE SUPRA Formula student race competition.',
      'State-of-the-art CNC and 3D printing lab installation.',
      'Alumni placed in premium automotive and aerospace companies.'
    ],
    labs: [
      { name: 'CAD/CAM Lab', description: 'Equipped with SolidWorks, CATIA, and ANSYS workspace.' },
      { name: 'Thermal Engineering & IC Engines Lab', description: 'Multi-cylinder test rigs, emission measurement systems.' },
      { name: 'Fluid Mechanics & Machinery Lab', description: 'Includes Pelton turbine, Francis turbine, and centrifugal pump test setups.' },
      { name: 'Machine Tools Workshop', description: 'Equipped with industry-grade lathe machines, milling machines, and shaper setups.' }
    ]
  },
  {
    slug: 'civil-engineering',
    name: 'Civil Engineering',
    shortName: 'CE',
    icon: 'Building',
    description: 'Building foundations of tomorrow with structured designs, environmental conservation, transportation safety, and smart cities planning.',
    vision: 'To prepare civil engineers committed to creating safe, resilient, and eco-friendly infrastructures.',
    mission: [
      'Offer solid theoretical grounding in structural design, soil mechanics, and hydraulics.',
      'Emphasize field surveying, material testing, and environmental quality.',
      'Encourage research in green building materials and disaster-resistant structures.'
    ],
    intake: 60,
    duration: '4 Years (B.Tech)',
    achievements: [
      'Provided structural consultancy to public works department.',
      'Student paper won top honors at National Civil Congress.',
      '100% success rate in industrial training placements.'
    ],
    labs: [
      { name: 'Strength of Materials Lab', description: 'Universal Testing Machine, torsion testing, and hardness equipment.' },
      { name: 'Geotechnical Engineering Lab', description: 'Direct shear setups, triaxial testing, and liquid limit analysis.' },
      { name: 'Environmental Engineering Lab', description: 'Water quality chemical testing and spectroscopic analysis.' },
      { name: 'Surveying Lab', description: 'Equipped with electronic total stations and standard theodolites.' }
    ]
  }
];
