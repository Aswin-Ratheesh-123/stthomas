export interface CollegeEvent {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  location: string;
  category: 'academic' | 'cultural' | 'sports' | 'technical';
  description: string;
}

export const events: CollegeEvent[] = [
  {
    id: '1',
    title: 'ASTHRA 2026 - Annual National Tech Fest',
    date: '2026-09-18',
    day: '18',
    month: 'SEP',
    time: '09:00 AM - 05:00 PM',
    location: 'Main Campus / Labs',
    category: 'technical',
    description: 'A national-level technical symposium featuring paper presentations, robotics championships, hackathons, and design contests.'
  },
  {
    id: '2',
    title: 'International Conference on Green Energy Technologies',
    date: '2026-10-05',
    day: '05',
    month: 'OCT',
    time: '10:00 AM - 04:00 PM',
    location: 'Auditorium (Block A)',
    category: 'academic',
    description: 'Brings together leading academic scientists, researchers, and engineers to share experiences on green networks and power setups.'
  },
  {
    id: '3',
    title: 'DHWANI 2026 - Inter-College Cultural Festival',
    date: '2026-11-12',
    day: '12',
    month: 'NOV',
    time: '09:00 AM - 08:30 PM',
    location: 'Open Air Theater',
    category: 'cultural',
    description: 'A vibrant celebration of music, dance, theater, and arts drawing colleges from across the region to perform.'
  },
  {
    id: '4',
    title: 'Annual Athletic Meet and Sports Championship',
    date: '2026-12-03',
    day: '03',
    month: 'DEC',
    time: '08:00 AM - 04:30 PM',
    location: 'College Sports Field',
    category: 'sports',
    description: 'Stretching over two days of track, field, and indoor tournament events highlighting the athletic prowess of our engineering teams.'
  }
];
