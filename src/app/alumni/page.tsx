'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Calendar, Briefcase, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { alumniProfiles } from '@/data/alumni';

export default function AlumniPage() {
  return (
    <div className="flex flex-col w-full text-navy-dark">
      {/* 1. Header Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest text-blue-bright mb-3 block">
            STCET Network
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none ">
            Alumni Association
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Reconnecting graduates, fostering professional mentorship, and driving institutional excellence across global engineering frontiers.
          </p>
        </div>
      </section>

      {/* 2. Mission & Core Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Empowering the Alumni-Student Bridge"
            subtitle="The STCET Alumni Association is committed to creating networking opportunities, mentoring current engineering students, and supporting career growth."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Professional Networking */}
            <div className="p-8 bg-blue-light/35 border border-gray-100 rounded-2xl flex flex-col justify-between text-left hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="p-3 bg-blue-royal text-white rounded-lg w-fit">
                  <Users size={20} />
                </div>
                <h3 className="font-extrabold text-navy-deep text-lg ">Global Networking</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                  Connect with over 4,500+ STCET graduates located worldwide. Join regional alumni chapters and professional industry subgroups to expand your network.
                </p>
              </div>
            </div>

            {/* Mentorship & Career Guidance */}
            <div className="p-8 bg-blue-light/35 border border-gray-100 rounded-2xl flex flex-col justify-between text-left hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="p-3 bg-blue-royal text-white rounded-lg w-fit">
                  <GraduationCap size={20} />
                </div>
                <h3 className="font-extrabold text-navy-deep text-lg uppercase">Student Mentorship</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                  Share your expertise by mentoring final-year students, hosting mock interviews, reviewing portfolios, and guiding junior peers through career path definitions.
                </p>
              </div>
            </div>

            {/* Referral & Placements */}
            <div className="p-8 bg-blue-light/35 border border-gray-100 rounded-2xl flex flex-col justify-between text-left hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="p-3 bg-blue-royal text-white rounded-lg w-fit">
                  <Briefcase size={20} />
                </div>
                <h3 className="font-extrabold text-navy-deep text-lg uppercase">Career Referrals</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                  Contribute to our placement drives by sharing job openings, coordinating core industry visits, and providing reference pathways for deserving graduates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Reunions & Events */}
      <section className="py-20 bg-blue-light/20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Block */}
            <div className="lg:col-span-6 relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-navy-dark">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Alumni Meetup"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Info Block */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <SectionHeading 
                label="Annual Meet" 
                title="Homecoming & Reunions" 
                subtitle="Every year, we welcome back our alumni to the campus. Relive old memories, reconnect with professors, and witness the growth of your alma mater."
              />
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 font-semibold">
                  <CheckCircle2 className="text-blue-royal shrink-0" size={16} /> Annual Global Alumni Meet (typically in December)
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 font-semibold">
                  <CheckCircle2 className="text-blue-royal shrink-0" size={16} /> Batch-wise Silver/Golden Jubilees & Get-Togethers
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 font-semibold">
                  <CheckCircle2 className="text-blue-royal shrink-0" size={16} /> Guest Lecture invites & technical panel forums
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 bg-navy-deep hover:bg-blue-royal text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg transition-colors cursor-pointer"
                >
                  View Event Schedule <Calendar className="ml-1" size={14} />
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. Distinguished Alumni Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Spotlight"
            title="Alumni Making An Impact"
            subtitle="Read about some of our prominent graduates who are leading innovations across various engineering domains."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {alumniProfiles.map((alumnus) => (
              <div key={alumnus.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-light mb-4">
                    <Image
                      src={alumnus.imageUrl}
                      alt={alumnus.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-extrabold text-navy-deep text-base">{alumnus.name}</h3>
                  <p className="text-xs text-blue-royal font-semibold mt-1">{alumnus.role}</p>
                  <p className="text-xs text-gray-400 font-medium">{alumnus.company}</p>
                  <span className="inline-block mt-3 text-[10px] bg-blue-light text-blue-royal px-2.5 py-1 rounded-full font-black uppercase tracking-wider">
                    {alumnus.department.split(' & ')[0]} ({alumnus.batch})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Registry CTA */}
      <section className="py-20 bg-navy-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1677ff_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-black tracking-widest text-blue-bright uppercase mb-3 block">
            Register Today
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Become an Active Member
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed mb-8">
            Stay connected, keep updated with latest STCET newsletters, support student internship programs, and contribute back to the academic ecosystem.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/alumni/register"
              className="bg-blue-royal hover:bg-blue-bright text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg transition-colors cursor-pointer active:scale-95"
            >
              Online Registration
            </Link>
            <Link
              href="/contact"
              className="bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-colors cursor-pointer active:scale-95"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
