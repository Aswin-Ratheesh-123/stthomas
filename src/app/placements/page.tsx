'use client';

import SectionHeading from '@/components/SectionHeading';
import { Award, Briefcase, GraduationCap, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { recruiters, placementHistory, trainingModules } from '@/data/placements';

export default function PlacementsPage() {
  return (
    <div className="flex flex-col w-full text-navy-dark">
      {/* Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest  text-blue-bright mb-3 block">
            Career Developments
          </span>
          <h1 className="text-4xl sm:text-5xl font-black  tracking-tight leading-none">
            Placements & Training
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            See our annual hiring percentages, training programs modules, and top recruiter partners.
          </p>
        </div>
      </section>

      {/* 2. Placements Stats table and details */}
      <section id="records" className="py-20 bg-white border-b border-gray-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            
            {/* Left: Summary and details */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <SectionHeading label="Placements Records" title="Outstanding Career Stats" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                The Training and Placement cell of STCET is committed to placing every eligible student. Through partnerships, continuous hackathons, and mock coding series, our candidates are prepared for complex technical selection rounds.
              </p>
              <div className="p-6 bg-blue-light/40 border border-gray-100 rounded-xl space-y-3">
                <h4 className="font-extrabold text-xs text-blue-royal  tracking-widest">Hiring Benchmarks</h4>
                <div className="flex justify-between text-xs sm:text-sm font-semibold border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Highest Salary Tier</span>
                  <span className="font-bold text-navy-deep">12.5 LPA</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Average Salary Tier</span>
                  <span className="font-bold text-navy-deep">4.8 LPA</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold pb-1">
                  <span className="text-gray-500">Corporate Partners</span>
                  <span className="font-bold text-navy-deep">100+ Recruiter Links</span>
                </div>
              </div>
            </div>

            {/* Right: Placements timeline grid */}
            <div className="lg:col-span-7 bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 text-left">
              <h3 className="font-extrabold text-xs tracking-widest uppercase text-blue-bright mb-6">
                Year-on-Year Placement Percentage
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left text-gray-500">
                  <thead className="text-[10px] sm:text-xs font-black uppercase text-navy-deep border-b border-gray-200 tracking-wider">
                    <tr>
                      <th scope="col" className="pb-3.5 pr-2">Academic Year</th>
                      <th scope="col" className="pb-3.5 px-2">Placement Rate</th>
                      <th scope="col" className="pb-3.5 px-2">Highest Offer</th>
                      <th scope="col" className="pb-3.5 pl-2 text-right">Avg Package</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {placementHistory.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/40 transition-colors">
                        <td className="py-3.5 font-bold text-navy-deep pr-2">{row.year}</td>
                        <td className="py-3.5 font-black text-blue-royal px-2">{row.percentage}% Placed</td>
                        <td className="py-3.5 font-semibold text-gray-600 px-2">{row.highestPackage}</td>
                        <td className="py-3.5 font-black text-navy-deep pl-2 text-right">{row.averagePackage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Placements Training modules */}
      <section id="training" className="py-20 bg-blue-light/10 border-b border-gray-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Training Modules"
            title="Syllabus for Placement Readiness"
            subtitle="Explore our structured modules preparing engineering candidates starting from pre-final year."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingModules.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl flex gap-4 text-left"
              >
                <div className="p-3 bg-blue-royal/5 text-blue-royal rounded-lg shrink-0 h-fit">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-navy-deep uppercase mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Top Recruiters Listing */}
      <section id="recruiters" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Recruiter Networks"
            title="Our Prime Hiring Partners"
            subtitle="STCET graduates work across software systems, design engineering, consultancy, and core electrical fields."
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {recruiters.map((rec, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 border border-gray-100 rounded-xl hover:border-blue-bright/10 hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center text-center group"
              >
                <span className="font-black text-navy-deep text-lg tracking-widest group-hover:text-blue-royal transition-colors">
                  {rec.name}
                </span>
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                  {rec.industry}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/contact?subject=Placements%20Enquiry"
              className="inline-flex items-center gap-2 bg-navy-deep hover:bg-blue-royal text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-md transition-colors"
            >
              Enquire Recruitments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
