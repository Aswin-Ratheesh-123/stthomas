'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck, Calendar, Users, Cpu, FileText, Mail, ChevronRight } from 'lucide-react';

import { departments } from '@/data/departments';
import { facultyList } from '@/data/faculty';
import FacultyCard from '@/components/FacultyCard';
import SectionHeading from '@/components/SectionHeading';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DepartmentDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const [activeSection, setActiveSection] = useState('about');

  const dept = departments.find((d) => d.slug === slug);
  if (!dept) {
    notFound();
  }

  // Filter faculty for this branch
  const deptFaculty = facultyList.filter((f) => f.department === dept.name);

  // Monitor scroll to highlight sticky sub-nav links
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'vision', 'labs', 'faculty', 'achievements'];
      let currentSection = 'about';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold based on headers offset
          if (rect.top <= 140) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'ABOUT' },
    { id: 'vision', label: 'VISION & MISSION' },
    { id: 'labs', label: 'LABS' },
    { id: 'faculty', label: 'FACULTY' },
    { id: 'achievements', label: 'ACHIEVEMENTS' },
  ];

  return (
    <div className="flex flex-col w-full text-navy-dark">
      {/* 1. Department Hero Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10 text-left">
          <span className="text-xs font-black tracking-widest uppercase text-blue-bright mb-3 block">
            Department of Engineering
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none max-w-4xl">
            {dept.name}
          </h1>
          <div className="flex flex-wrap gap-4 mt-6 text-xs font-bold uppercase tracking-wider text-gray-300">
            <span className="bg-white/10 px-3 py-1.5 rounded border border-white/5">Intake: {dept.intake} Students</span>
            <span className="bg-white/10 px-3 py-1.5 rounded border border-white/5">{dept.duration}</span>
          </div>
        </div>
      </section>

      {/* 2. Sticky Internal Sub-Nav */}
      <nav className="bg-white border-y border-gray-200 sticky top-[60px] sm:top-[70px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto flex justify-start sm:justify-center gap-6 sm:gap-10 py-4 font-bold text-xs uppercase tracking-widest scrollbar-none select-none">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`hover:text-blue-royal transition-colors whitespace-nowrap relative pb-1 ${
                activeSection === link.id ? 'text-blue-royal font-black' : 'text-gray-500'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-royal" />
              )}
            </a>
          ))}
        </div>
      </nav>

      {/* 3. About Section */}
      <section id="about" className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <SectionHeading label="Introduction" title="About the Department" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            {dept.description}
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The branch focuses on outcome-based education modules, pushing candidates to explore hardware assembly, mathematical formulations, and software compilers. We integrate continuous lab experiments and industrial projects directly into the semester schedules.
          </p>
        </div>
      </section>

      {/* 4. Vision & Mission Section */}
      <section id="vision" className="py-20 bg-blue-light/10 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <SectionHeading label="Aims & Goals" title="Vision & Mission" />
          
          {/* Vision */}
          <div className="mb-8 p-6 bg-white border border-gray-100 rounded-xl">
            <h4 className="font-extrabold text-xs text-blue-royal uppercase tracking-widest mb-2">Branch Vision</h4>
            <p className="text-navy-deep text-sm sm:text-base font-semibold leading-relaxed">
              {dept.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="p-6 bg-white border border-gray-100 rounded-xl">
            <h4 className="font-extrabold text-xs text-blue-royal uppercase tracking-widest mb-3">Branch Mission Statements</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
              {dept.mission.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-blue-royal font-bold shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Laboratories Section */}
      <section id="labs" className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <SectionHeading label="Facilities" title="Engineering Laboratories" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dept.labs.map((lab, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 border border-gray-100 rounded-xl hover:border-blue-bright/10 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-blue-royal/5 text-blue-royal rounded-lg flex items-center justify-center mb-4">
                    <Cpu size={20} />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-navy-deep uppercase mb-2">
                    {lab.name}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {lab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Faculty Section */}
      <section id="faculty" className="py-20 bg-blue-light/10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <SectionHeading
            label="Academicians"
            title="Department Faculty Profiles"
            subtitle={`Meet the faculty advisors and professors guiding the ${dept.name} program.`}
          />
          
          {deptFaculty.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {deptFaculty.map((member) => (
                <FacultyCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No specific faculty listed. Visit the full registry.</p>
          )}

          <div className="text-center mt-10">
            <Link
              href="/faculty"
              className="inline-flex items-center gap-2 border border-blue-royal/20 hover:bg-blue-royal hover:text-white text-blue-royal font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all cursor-pointer"
            >
              Browse Faculty Registry <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <SectionHeading label="Milestones" title="Department Achievements" />
          
          <div className="space-y-4">
            {dept.achievements.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-xl"
              >
                <div className="w-8 h-8 bg-blue-royal/5 text-blue-royal rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="bg-navy-deep text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase mb-4 tracking-tight leading-tight">
            Interested in joining {dept.shortName}?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-medium">
            Learn more about admissions criteria, seat reservation schedules, or connect with our academic advisors.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/admissions"
              className="bg-blue-royal hover:bg-blue-bright text-white font-bold text-xs uppercase px-6 py-3.5 rounded-lg shadow-md transition-colors"
            >
              Start Admission Process
            </Link>
            <Link
              href="/contact?subject=Branch%20Enquiry"
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-lg transition-colors"
            >
              Enquire Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
