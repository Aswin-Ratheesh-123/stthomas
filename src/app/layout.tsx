import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingProgramsTab from '@/components/FloatingProgramsTab';
import FloatingDepartmentsTab from '@/components/FloatingDepartmentsTab';
import ContactButtons from '@/components/ContactButtons';
import CustomCursor from '@/components/CustomCursor';
import PageTransition from '@/components/PageTransition';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | St. Thomas College of Engineering and Technology',
    default: 'St. Thomas College of Engineering and Technology, Mattannur',
  },
  description:
    'A premium engineering college in Mattannur, Kannur, offering B.Tech programs in CSE, AI & DS, ECE, EEE, Mechanical, and Civil Engineering with outstanding placements and facilities.',
  keywords: [
    'St Thomas College of Engineering and Technology',
    'STCET Mattannur',
    'Engineering College Mattannur',
    'Kannur Engineering College',
    'B.Tech Admissions Kerala',
    'KTU Affiliated Colleges',
    'Computer Science Engineering Mattannur',
    'AI and Data Science BTech',
  ],
  metadataBase: new URL('https://stcet.ac.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'St. Thomas College of Engineering and Technology, Mattannur',
    description:
      'Empowering engineering students through state-of-the-art laboratory training, academic innovation, and industry collaborations.',
    url: 'https://stcet.ac.in',
    siteName: 'STCET Mattannur',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'St. Thomas College of Engineering and Technology, Mattannur',
    description: 'Empowering future engineering leaders through high-impact learning.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <CustomCursor />
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow flex flex-col pt-0">
          <PageTransition>{children}</PageTransition>
        </main>
        
        {/* Floating drawers and buttons */}
        <FloatingProgramsTab />
        <FloatingDepartmentsTab />
        <ContactButtons />
        
        <Footer />
      </body>
    </html>
  );
}
