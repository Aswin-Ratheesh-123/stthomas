'use client';

import SectionHeading from '@/components/SectionHeading';
import { Calendar, BookOpen, Clock, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AcademicsPage() {
  const calendarItems = [
    { date: 'Sep 01, 2026', title: 'Odd Semester Classes Commence', desc: 'B.Tech S3, S5, and S7 sessions start.' },
    { date: 'Sep 15, 2026', title: 'B.Tech S1 Induction Program', desc: 'Orientation for newly enrolled freshmen.' },
    { date: 'Oct 12, 2026', title: 'First Series Internal Examination', desc: 'Continuous internal assessment exams over 3 days.' },
    { date: 'Nov 23, 2026', title: 'Second Series Internal Examination', desc: 'Pre-semester assessments and internal review evaluation.' },
    { date: 'Dec 18, 2026', title: 'Odd Semester End Practical Exams', desc: 'Practical lab assessments and project reviews.' }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest  text-blue-bright mb-3 block">
            Academic Pedagogy
          </span>
          <h1 className="text-4xl sm:text-5xl font-black  tracking-tight leading-none">
            Academics Overview
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Discover our outcome-based learning methodologies, rigorous B.Tech curriculum mapping, and comprehensive student support frameworks.
          </p>
        </div>
      </section>

      {/* Learning Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                label="Learning Framework"
                title="Outcome-Based Education (OBE)"
              />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                St. Thomas College follows an Outcome-Based Education model, aligning our instruction to build specific student competencies. We emphasize analytical modeling, physical laboratory prototyping, and core coding skills.
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-gray-600 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-royal shrink-0" />
                  <span>Program Outcomes (POs) mapped to international standards.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-royal shrink-0" />
                  <span>Continuous Internal Evaluation (CIE) system.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-royal shrink-0" />
                  <span>Emphasis on physical mini-projects and internships.</span>
                </div>
              </div>
            </div>

            {/* Showcase Boxes */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-light/30 border border-gray-100 rounded-xl flex items-start gap-4">
                <div className="p-2.5 bg-blue-royal text-white rounded-lg shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-navy-deep uppercase">Curriculum Design</h4>
                  <p className="text-xs text-gray-500 mt-1">Syllabus structure defined by KTU incorporating core math, engineering sciences, and electives.</p>
                </div>
              </div>

              <div className="p-6 bg-blue-light/30 border border-gray-100 rounded-xl flex items-start gap-4">
                <div className="p-2.5 bg-blue-royal text-white rounded-lg shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-navy-deep uppercase">Industry Add-ons</h4>
                  <p className="text-xs text-gray-500 mt-1">Special credit workshops, developer bootcamps, and core hardware design classes.</p>
                </div>
              </div>

              <div className="p-6 bg-blue-light/30 border border-gray-100 rounded-xl flex items-start gap-4">
                <div className="p-2.5 bg-blue-royal text-white rounded-lg shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-navy-deep uppercase">Academic Advising</h4>
                  <p className="text-xs text-gray-500 mt-1">Each batch is assigned a dedicated faculty advisor tracking marks, attendance, and welfare.</p>
                </div>
              </div>

              <div className="p-6 bg-blue-light/30 border border-gray-100 rounded-xl flex items-start gap-4">
                <div className="p-2.5 bg-blue-royal text-white rounded-lg shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-navy-deep uppercase">Seminars & Guest talks</h4>
                  <p className="text-xs text-gray-500 mt-1">Weekly guest inputs from IIT professors, industry consultants, and hiring managers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section id="calendar" className="py-20 bg-blue-light/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Schedule Timeline"
            title="Academic Calendar 2026"
            subtitle="Plan your term events with our semester timelines, exams schedule, and internal dates."
            align="center"
          />

          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {calendarItems.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 sm:gap-6 p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors"
              >
                <div className="font-black text-xs sm:text-sm text-blue-royal shrink-0 w-24 sm:w-32 uppercase tracking-wider select-none">
                  {item.date}
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-extrabold text-navy-deep text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/academics/programs"
              className="inline-flex items-center gap-2 bg-navy-deep hover:bg-blue-royal text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg transition-colors cursor-pointer shadow-md"
            >
              Explore Academic Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
