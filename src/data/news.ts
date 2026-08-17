export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  imageUrl?: string;
}

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Admissions Open for B.Tech Programs (Academic Year 2026-27)',
    category: 'Admissions',
    date: 'August 10, 2026',
    summary: 'St. Thomas College of Engineering and Technology announces the commencement of B.Tech admissions. Candidates can apply online or visit the campus.',
    content: 'St. Thomas College of Engineering and Technology, Mattannur has officially opened the admissions window for its highly sought-after B.Tech programs. Prospective students can apply for branches including CSE, AI & DS, ECE, EEE, ME, and CE. Scholarships are available for top-performing students in the qualifying exam and entrance rankings.',
    imageUrl: '/images/news-admissions.jpg'
  },
  {
    id: '2',
    title: 'STCET Partners with Leading German University for Research Collaboration',
    category: 'Research',
    date: 'July 28, 2026',
    summary: 'A new MoU signed today facilitates faculty exchange programs, collaborative laboratories, and student exchange research initiatives.',
    content: 'In a significant push for global academic excellence, STCET has inked an MoU with a premier European Technical University. The partnership covers cooperative work in Autonomous Systems and Internet of Things, facilitating student study terms in Germany and collaborative PhD guidelines.',
    imageUrl: '/images/news-mou.jpg'
  },
  {
    id: '3',
    title: 'Remarkable Placements Milestone: 92% B.Tech Batches Hired',
    category: 'Placements',
    date: 'June 15, 2026',
    summary: 'Over 120 recruiters conducted virtual and physical placement drives, hiring engineers across software, hardware, mechanical design, and consultation roles.',
    content: 'The Training and Placement cell of STCET is proud to announce that the B.Tech batch of 2026 has crossed a 92% placement rate. Companies like TCS, Infosys, Wipro, Bosch, and multiple engineering startups visited the campus, offering salaries up to 12 LPA.',
    imageUrl: '/images/news-placements.jpg'
  },
  {
    id: '4',
    title: 'AI & Data Science Student Group Wins National AI Hackathon',
    category: 'Student Achievements',
    date: 'May 20, 2026',
    summary: 'The project "Smart Agrobot Diagnostics" built by our pre-final year AD branch team clinched the first prize at the National AI Innovation Summit.',
    content: 'A team of four pre-final year B.Tech students from the Artificial Intelligence & Data Science department won the grand finale of the National AI Innovation Summit. Their IoT-driven agrobot uses deep learning to detect crop diseases in real-time, receiving a cash reward and incubation support.',
    imageUrl: '/images/news-achievement.jpg'
  }
];

export const tickerNews = [
  'B.Tech Admissions for the Academic Year 2026-27 are now open. Apply Now!',
  'STCET secured 95% placement assistance rate for the outgoing engineering batch.',
  'ASTHRA 2026 Technical Fest scheduled for September 18th. Registration opens next week.',
  'Principal Message: Academic sessions for odd semesters commence on September 1st.',
  'National Science Foundation research grant approved for ECE Department Smart IoT project.'
];
