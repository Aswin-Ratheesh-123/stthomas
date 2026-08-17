'use client';

import SectionHeading from '@/components/SectionHeading';
import { Sparkles, Trophy, Home, UserCheck, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function CampusLifePage() {
  return (
    <div className="flex flex-col w-full text-navy-dark">
      {/* Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest text-blue-bright mb-3 block">
            Lively Campus
          </span>
          <h1 className="text-4xl sm:text-5xl font-black  tracking-tight leading-none">
            Campus Life
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Discover student clubs, athletic events, hostels, and cultural programs at St. Thomas College.
          </p>
        </div>
      </section>

      {/* 2. Campus features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Activities"
            title="Beyond The Classrooms"
            subtitle="Engage with vibrant clubs and sports meets that shape teamwork and leadership qualities."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tech clubs */}
            <div className="p-6 bg-blue-light/35 border border-gray-100 rounded-2xl flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="p-3 bg-blue-royal text-white rounded-lg w-fit">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-extrabold text-navy-deep text-lg uppercase">Tech Clubs & Hackathons</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                  We host developer circles, coding camps, and robotics societies. Students build agrobots and coordinate smart IoT solutions for SIH competitions.
                </p>
              </div>
            </div>

            {/* Sports */}
            <div className="p-6 bg-blue-light/35 border border-gray-100 rounded-2xl flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="p-3 bg-blue-royal text-white rounded-lg w-fit">
                  <Trophy size={20} />
                </div>
                <h3 className="font-extrabold text-navy-deep text-lg uppercase">Athletics & Sports</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                  The campus features a sports playground, indoor stadium complexes, basketball courts, and annual athletic meets to boost physical fitness.
                </p>
              </div>
            </div>

            {/* Hostels */}
            <div className="p-6 bg-blue-light/35 border border-gray-100 rounded-2xl flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="p-3 bg-blue-royal text-white rounded-lg w-fit">
                  <Home size={20} />
                </div>
                <h3 className="font-extrabold text-navy-deep text-lg uppercase">Hostels & Dining</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                  Comfortable, separate male and female boarding blocks with round-the-clock power, warden security, WiFi setups, and mess services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cultural fests */}
      <section className="py-20 bg-blue-light/10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Left Collage */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-navy-dark">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
                alt="STCET Cultural Fest"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Right info */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <SectionHeading label="Cultural Festivals" title="Xtacy" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our annual inter-college cultural festival Dhwani represents the artistic pinnacle of campus life. Drawing colleges from across the state, it hosts competitive events in dance, vocal groups, stage dramas, and visual arts over 3 days.
              </p>
              <div className="pt-4">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 bg-navy-deep hover:bg-blue-royal text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg shadow-md transition-colors"
                >
                  View Cultural Photos
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
