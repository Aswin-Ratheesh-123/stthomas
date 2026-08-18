export interface Program {
  id: string;
  name: string;
  degree: string;
  duration: string;
  eligibility: string;
  description: string;
  branches?: string[];
}

export interface Program {
  id: string;
  name: string;
  degree: string;
  duration: string;
  eligibility: string;
  description: string;
  branches?: string[];
}

export interface Program {
  id: string;
  name: string;
  degree: string;
  duration: string;
  eligibility: string;
  description: string;
  branches?: string[];
}

export const programs: {
  ug: Program[];
  certificate: Program[];
} = {
  ug: [
    {
      id: 'btech',
      name: 'Bachelor of Technology (B.Tech)',
      degree: 'Undergraduate (UG)',
      duration: '4 Years (8 Semesters)',
      eligibility:
        '10+2 with Physics, Chemistry, and Mathematics (minimum 45% aggregate in science subjects) and qualifying rank in KEAM entrance examination.',
      description:
        'Our B.Tech degree programs offer rigorous coursework, hands-on engineering lab experiences, and project-based learning to shape technical leaders of tomorrow.',
      branches: [
        'Computer Science & Engineering',
        'Computer Science & Engineering ( Data Science )',
        'Electronics & Communication Engineering',
        'Mechanical Engineering',
        'Civil Engineering'
      ]
    }
  ],

  certificate: [
    {
      id: 'cert-ml',
      name: 'Applied Machine Learning & Neural Networks',
      degree: 'Certificate (Short-term)',
      duration: '6 Months (Part-time)',
      eligibility:
        'Open to B.Tech/B.Sc computer science students and working professionals with coding knowledge in Python.',
      description:
        'Industry-partnered training focusing on supervised learning, deep networks, computer vision, NLP models, and production deployment.'
    },
    {
      id: 'cert-robotics',
      name: 'Industrial Robotics & PLC Automation',
      degree: 'Certificate (Short-term)',
      duration: '3 Months',
      eligibility:
        'Ongoing engineering students from EEE, ECE, or Mechanical branches.',
      description:
        'Hands-on practice on industrial robotic arms kinematics, sensor networks integration, and PLC ladder programming systems.'
    }
  ]
};