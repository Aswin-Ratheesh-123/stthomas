'use client';

import SectionHeading from '@/components/SectionHeading';
import { BookOpen, Award, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { programs } from '@/data/programs';

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest uppercase text-blue-bright mb-3 block">
            Academic Degrees
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            Academic Programs
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Undergraduate, Postgraduate, and short-term certification courses offered at St. Thomas College of Engineering and Technology.
          </p>
        </div>
      </section>

      

    

      {/* Certificates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Specialist Skills"
            title="Short-Term Certifications"
            subtitle="Equipping ongoing students and engineering graduates with practical certifications in artificial intelligence and automation models."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.certificate.map((p) => (
              <div
                key={p.id}
                className="bg-gray-50/50 border border-gray-100 p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="flex gap-4 text-xs font-bold uppercase tracking-wider text-blue-royal">
                    <span className="bg-blue-royal/5 px-2.5 py-1 rounded">{p.duration}</span>
                    <span className="bg-blue-royal/5 px-2.5 py-1 rounded">{p.degree}</span>
                  </div>
                  <h3 className="font-extrabold text-navy-deep text-lg sm:text-xl uppercase leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {p.description}
                  </p>
                  <p className="text-[11px] text-gray-400 font-semibold leading-relaxed border-t border-gray-100 pt-4">
                    <strong>Eligibility:</strong> {p.eligibility}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    href="/contact?subject=Short-term%20Certificates"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-royal uppercase tracking-widest hover:text-blue-bright transition-colors"
                  >
                    Enquire Certificate Course <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
