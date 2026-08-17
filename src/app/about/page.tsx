'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { Target, Eye, ShieldCheck, Award, Users, ChevronRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        {/* Background Subtle mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest  text-blue-bright mb-3 block">
            St. Thomas Legacy
          </span>
          <h1 className="text-4xl sm:text-5xl font-black  tracking-tight leading-none">
            About Us
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Learn about our founders, academic vision, accreditation standards, and leadership shaping the engineers of tomorrow.
          </p>
        </div>
      </section>

      {/* 2. Core Vision & Mission */}
      <section id="vision-mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="p-8 bg-blue-light/30 border border-gray-100 rounded-2xl flex flex-col items-start gap-4">
              <div className="p-3.5 bg-blue-royal text-white rounded-xl shadow-md">
                <Eye size={24} />
              </div>
              <h3 className="font-extrabold text-navy-deep text-xl uppercase tracking-tight">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To be a premier institution of engineering education and research, fostering advanced technology innovations, ethical principles, and sustainable global leadership.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 bg-blue-light/30 border border-gray-100 rounded-2xl flex flex-col items-start gap-4">
              <div className="p-3.5 bg-blue-royal text-white rounded-xl shadow-md">
                <Target size={24} />
              </div>
              <h3 className="font-extrabold text-navy-deep text-xl uppercase tracking-tight">Our Mission</h3>
              <ul className="space-y-3.5 text-gray-600 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-royal font-bold shrink-0 mt-0.5">•</span>
                  <span>To deliver top-tier engineering curriculum through modern laboratories and tech centers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-royal font-bold shrink-0 mt-0.5">•</span>
                  <span>To establish joint partnerships with industries for internships, workshops, and placement channels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-royal font-bold shrink-0 mt-0.5">•</span>
                  <span>To encourage research methodologies, journal publications, and patents with society-centric outcomes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Legacy and History */}
      <section className="py-20 bg-blue-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            {/* Collage Details */}
            <div className="lg:col-span-6 relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-navy-dark">
              <Image
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                alt="STCET Campus History"
                fill
                sizes="(max-w-768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            
            {/* Written details */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                label="Historical Legacy"
                title="Shaping Engineers Since Inception"
              />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                St. Thomas College of Engineering and Technology, Mattannur, was established with the vision of offering high-quality technical education in the region. Over the years, the institution has expanded its campus footprint, installing computing systems, testing rigs, and labs.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                With a focus on academic discipline and holistic student development, we have turned into one of the top engineering options for candidates in Northern Kerala. Our alumni work globally across software, design engineering, consultancy, and business sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Accreditations and Approvals */}
      <section id="accreditation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Quality Controls"
            title="Recognized Accreditations & Approvals"
            subtitle="STCET maintains standardized institutional audits to ensure quality engineering infrastructure."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50/50 flex items-center gap-4 group hover:border-blue-bright/10 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-blue-royal/5 text-blue-royal rounded-lg shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-navy-deep uppercase">AICTE Approved</h4>
                <p className="text-xs text-gray-500 mt-1">Approved by All India Council for Technical Education, New Delhi.</p>
              </div>
            </div>

            <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50/50 flex items-center gap-4 group hover:border-blue-bright/10 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-blue-royal/5 text-blue-royal rounded-lg shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-navy-deep uppercase">KTU Affiliation</h4>
                <p className="text-xs text-gray-500 mt-1">Affiliated with APJ Abdul Kalam Technological University, Kerala.</p>
              </div>
            </div>

            <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50/50 flex items-center gap-4 group hover:border-blue-bright/10 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-blue-royal/5 text-blue-royal rounded-lg shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-navy-deep uppercase">ISO Certified</h4>
                <p className="text-xs text-gray-500 mt-1">ISO 9001:2015 Quality Management Systems certification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. College Governing Board */}
      <section id="principal-message" className="py-20 bg-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Governance"
            title="Institutional Governance Body"
            subtitle="Meet our administrators directing academic goals and research initiatives."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Board member 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-[3/4] bg-navy-dark">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                  alt="Chairman"
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h4 className="font-black text-navy-deep text-base uppercase">Dr. Shaji Sen</h4>
                <p className="text-xs text-blue-royal uppercase font-bold tracking-wider mt-1">Principal & Academic Chair</p>
              </div>
            </div>

            {/* Board member 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-[3/4] bg-navy-dark">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                  alt="Board Director"
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h4 className="font-black text-navy-deep text-base uppercase">Dr. Ananya Nair</h4>
                <p className="text-xs text-blue-royal uppercase font-bold tracking-wider mt-1">Research Dean</p>
              </div>
            </div>

            {/* Board member 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-[3/4] bg-navy-dark">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
                  alt="Board Director"
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h4 className="font-black text-navy-deep text-base uppercase">Prof. Mathew Joseph</h4>
                <p className="text-xs text-blue-royal uppercase font-bold tracking-wider mt-1">Academic Dean</p>
              </div>
            </div>

            {/* Board member 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-[3/4] bg-navy-dark">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                  alt="Board Director"
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h4 className="font-black text-navy-deep text-base uppercase">Dr. Thomas George</h4>
                <p className="text-xs text-blue-royal uppercase font-bold tracking-wider mt-1">Dean of Placements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Administrative Office & Staff Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-black tracking-widest text-blue-bright">
              Support Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-deep tracking-tight leading-none">
              Administrative Office & Support
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Looking for direct contacts in our Admissions Cell, Accounts Section, Examination Board, or Technical Support office? Our administrative directory provides desk locations, office email addresses, and extension numbers of our office staff.
            </p>
            <div className="pt-2">
              <Link
                href="/about/office"
                className="inline-flex items-center gap-2 bg-blue-royal hover:bg-blue-bright text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>View Administrative Office & Staff</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
