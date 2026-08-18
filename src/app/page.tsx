'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Award, CheckCircle2, ChevronRight, Quote, Shield } from 'lucide-react';

import HeroCarousel from '@/components/HeroCarousel';
import NewsTicker from '@/components/NewsTicker';
import SectionHeading from '@/components/SectionHeading';
import StatisticsSection from '@/components/StatisticsSection';
import DepartmentCard from '@/components/DepartmentCard';
import EventCard from '@/components/EventCard';
import NewsCard from '@/components/NewsCard';
import AdmissionCTA from '@/components/AdmissionCTA';
import AlumniSection from '@/components/AlumniSection';

import { departments } from '@/data/departments';
import { events } from '@/data/events';
import { news } from '@/data/news';
import { recruiters } from '@/data/placements';
import { galleryItems } from '@/data/gallery';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Cinematic Hero Carousel */}
      <HeroCarousel />

      {/* 2. Breaking News Announcement Bar */}
      <NewsTicker />

      {/* 3. Institutional About Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            {/* Left Column: Heading and info */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                label="About Us"
                title="Education That Builds More Than Engineers."
              />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                St. Thomas College of Engineering and Technology, Mattannur, is a premier seat of learning in Northern Kerala. Affiliated with APJ Abdul Kalam Technological University and approved by AICTE, the college stands as a beacon of academic rigor and tech innovation.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We bridge classroom theory with core industrial demands. Through modernized laboratory layouts, research centers, and career mentoring, our students build solutions that impact society.
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-navy-deep hover:bg-blue-royal text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg transition-colors cursor-pointer shadow-md"
                >
                  Our Philosophy <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-navy-deep/20 text-navy-deep hover:bg-navy-deep hover:text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all cursor-pointer"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Image Collage */}
            <div className="lg:col-span-7 relative h-[380px] sm:h-[480px]">
              {/* Backing structural shape */}
              <div className="absolute top-10 right-10 w-[80%] h-[80%] border-4 border-dashed border-blue-royal/15 rounded-2xl -z-0 pointer-events-none" />
              
              {/* Big primary photo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-[65%] h-[75%] rounded-2xl overflow-hidden shadow-2xl z-10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80"
                  alt="STCET Main Campus Block"
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Smaller overlay photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 right-0 w-[45%] h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80"
                  alt="Engineering Laboratory Collaboration"
                  fill
                  sizes="(max-w-768px) 100vw, 30vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Tiny graphic card badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-12 left-8 bg-blue-royal text-white p-5 rounded-2xl shadow-xl z-30 hidden sm:flex items-center gap-3 border border-white/10"
              >
                <Shield size={24} className="text-blue-bright shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-sm uppercase leading-tight">ISO Certified</span>
                  <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">Quality Engineering</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Live Statistics Section */}
      <StatisticsSection />

      {/* 5. Explore Our Academics Showcase */}
<section className="relative overflow-hidden bg-blue-light/30 py-20 sm:py-24">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

    <SectionHeading
      label="Explore Our Academics"
      title="A Curriculum Built For Technological Leadership"
      subtitle="Explore our range of rigorous engineering degree programs, certificate schedules, and industry partnerships."
      align="center"
    />

    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">

      {/* Undergraduate */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2 }}
        className="
          group
          flex h-full flex-col justify-between
          rounded-2xl
          border border-gray-200
          bg-white
          p-7 sm:p-8
          shadow-sm
          transition-shadow duration-300
          hover:border-blue-royal/20
          hover:shadow-xl
        "
      >
        <div>
          <div
            className="
              mb-6 flex h-12 w-12
              items-center justify-center
              rounded-xl
              bg-blue-royal/5
              text-blue-royal
              transition-colors duration-300
              group-hover:bg-blue-royal
              group-hover:text-white
            "
          >
            <GraduationCap size={23} strokeWidth={2} />
          </div>

          <h3 className="mb-3 text-lg font-black uppercase tracking-tight text-navy-deep">
            Undergraduate (UG)
          </h3>

          <p className="mb-6 text-sm leading-6 text-gray-500">
            Four-year Bachelor of Technology (B.Tech) courses across key
            engineering sectors combining coding practices, physical
            diagnostics, and core theory.
          </p>

          <ul className="space-y-3 text-sm font-semibold text-gray-600">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-royal" />
              <span>Computer Science & Engineering</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-royal" />
              <span>Electronics & Communication</span>
            </li>
          </ul>
        </div>

        <Link
          href="/academics/programs"
          className="
            mt-8 inline-flex w-fit
            items-center gap-2
            text-xs font-bold uppercase
            tracking-[0.12em]
            text-blue-royal
            transition-all duration-200
            hover:gap-3
            hover:text-blue-bright
          "
        >
          UG Course Structure
          <ChevronRight size={15} />
        </Link>
      </motion.div>

      {/* Professional Certifications */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2 }}
        className="
          group
          flex h-full flex-col justify-between
          rounded-2xl
          border border-gray-200
          bg-white
          p-7 sm:p-8
          shadow-sm
          transition-shadow duration-300
          hover:border-blue-royal/20
          hover:shadow-xl
        "
      >
        <div>
          <div
            className="
              mb-6 flex h-12 w-12
              items-center justify-center
              rounded-xl
              bg-blue-royal/5
              text-blue-royal
              transition-colors duration-300
              group-hover:bg-blue-royal
              group-hover:text-white
            "
          >
            <Award size={23} strokeWidth={2} />
          </div>

          <h3 className="mb-3 text-lg font-black uppercase tracking-tight text-navy-deep">
            Certifications
          </h3>

          <p className="mb-6 text-sm leading-6 text-gray-500">
            Short-term specialist programs focusing on applied machine
            learning, neural networks, and industrial robotics automations.
          </p>

          <ul className="space-y-3 text-sm font-semibold text-gray-600">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-royal" />
              <span>Applied Machine Learning Certificate</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-royal" />
              <span>Industrial Robotics & PLC Automation</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-royal" />
              <span>Continuous Industry Bootcamps</span>
            </li>
          </ul>
        </div>

        <Link
          href="/academics/programs"
          className="
            mt-8 inline-flex w-fit
            items-center gap-2
            text-xs font-bold uppercase
            tracking-[0.12em]
            text-blue-royal
            transition-all duration-200
            hover:gap-3
            hover:text-blue-bright
          "
        >
          Certification Details
          <ChevronRight size={15} />
        </Link>
      </motion.div>

    </div>
  </div>
</section>

      {/* 6. Featured Department Split-Screen */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            {/* Left visual panel */}
            <div className="lg:col-span-6 relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-navy-dark group">
              <Image
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80"
                alt="Computer Science Laboratories"
                fill
                sizes="(max-w-768px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              {/* Blur mask details on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-bright mb-1">Highlight Branch</span>
                <h4 className="font-extrabold text-xl sm:text-2xl uppercase tracking-tight">CSE Laboratory Facility</h4>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">Configured with NVIDIA GPU workstations, GPU compilers, and server racks for research.</p>
              </div>
            </div>

            {/* Right Information panel */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black tracking-widest  text-blue-royal block">Featured Department</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-deep leading-tight font-sans">
                Computer Science & Engineering
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                The Department of CSE at STCET is committed to nurturing computing skills. Supported by highly qualified faculty, our branch maintains state-of-the-art coding hubs.
              </p>
              <div className="grid grid-cols-2 gap-4 pb-6">
                <div className="flex items-start gap-2.5 text-xs text-gray-500 font-semibold">
                  <CheckCircle2 size={16} className="text-blue-bright shrink-0" />
                  <span>NVIDIA GPU Computing Labs</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-500 font-semibold">
                  <CheckCircle2 size={16} className="text-blue-bright shrink-0" />
                  <span>100% Core IT Placement Track</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-500 font-semibold">
                  <CheckCircle2 size={16} className="text-blue-bright shrink-0" />
                  <span>Industry-Partnered Projects</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-500 font-semibold">
                  <CheckCircle2 size={16} className="text-blue-bright shrink-0" />
                  <span>Active Hackathon Clubs</span>
                </div>
              </div>
              <Link
                href="/academics/departments/computer-science-engineering"
                className="inline-flex items-center gap-2 bg-navy-deep hover:bg-blue-royal text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Explore CSE Branch <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Departments Showcase Grid */}
      <section className="py-24 bg-blue-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Departments"
            title="Five Pillars of Modern Engineering"
            subtitle="Discover our academic branches, equipped with specialized labs, dedicated classrooms, and experienced academic mentors."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <DepartmentCard key={dept.slug} dept={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Placement & Career Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            {/* Placement highlights */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                label="Launch Your Career"
                title="Stellar Placement track record."
              />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our active Training and Placement Cell coordinates round-the-year training bootcamps. We prepare candidates across aptitude, data structures, coding, and interview behaviors.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Highest Salary Package</span>
                  <span className="text-sm font-black text-navy-deep uppercase">12.5 LPA</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Average Salary Package</span>
                  <span className="text-sm font-black text-navy-deep uppercase">4.8 LPA</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Active Placement Partners</span>
                  <span className="text-sm font-black text-navy-deep uppercase">100+ Recruiter Networks</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/placements"
                  className="inline-flex items-center gap-2 bg-blue-royal hover:bg-blue-bright text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Explore Career Placements <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Recruiter Logos Marquee */}
            <div className="lg:col-span-7 bg-blue-light/50 border border-gray-100 p-8 rounded-2xl space-y-6 overflow-hidden">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-center text-blue-bright">
                Featured Hiring Partners
              </h4>
              
              {/* Marquee Row 1 */}
              <div className="w-full flex items-center relative overflow-hidden select-none">
                <div className="animate-marquee whitespace-nowrap py-1 text-sm font-black tracking-widest text-navy-deep flex items-center gap-14">
                  {recruiters.map((rec, idx) => (
                    <span key={idx} className="bg-white border border-gray-100 px-5 py-3 rounded-lg shadow-sm">
                      {rec.name}
                    </span>
                  ))}
                  {recruiters.map((rec, idx) => (
                    <span key={`dup-${idx}`} className="bg-white border border-gray-100 px-5 py-3 rounded-lg shadow-sm">
                      {rec.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Marquee Row 2 (Reversed / Alternate) */}
              <div className="w-full flex items-center relative overflow-hidden select-none">
                <div className="animate-marquee whitespace-nowrap py-1 text-sm font-black tracking-widest text-navy-deep flex items-center gap-14 [animation-direction:reverse]">
                  {recruiters.slice(5).concat(recruiters.slice(0, 5)).map((rec, idx) => (
                    <span key={`alt-${idx}`} className="bg-white border border-gray-100 px-5 py-3 rounded-lg shadow-sm">
                      {rec.name}
                    </span>
                  ))}
                  {recruiters.slice(5).concat(recruiters.slice(0, 5)).map((rec, idx) => (
                    <span key={`altdup-${idx}`} className="bg-white border border-gray-100 px-5 py-3 rounded-lg shadow-sm">
                      {rec.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Research & Innovation Section */}
      <section className="py-24 bg-navy-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            {/* Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black tracking-widest  text-blue-bright block">Research and Innovation</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white  leading-tight font-sans">
                Research. Innovate. Impact.
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                St. Thomas College promotes an active research ecosystem. We encourage faculty-led research projects, academic publications in Q1 journals, and state-funded patents development.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                  <h4 className="font-extrabold text-blue-bright text-lg uppercase">03+</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Research Centers</p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                  <h4 className="font-extrabold text-blue-bright text-lg uppercase">03+</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Patents Granted</p>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 bg-blue-royal hover:bg-blue-bright text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Explore Research Projects <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Research Visual Cards */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                <span className="text-[9px] font-black tracking-wider uppercase text-blue-bright bg-blue-bright/10 px-2 py-0.5 rounded">Patent</span>
                <h4 className="font-bold text-sm sm:text-base text-white uppercase mt-2">Smart IoT Agricultural Water Management</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">Patented smart sensing grid designed by our ECE research cell.</p>
              </div>
              <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                <span className="text-[9px] font-black tracking-wider uppercase text-blue-bright bg-blue-bright/10 px-2 py-0.5 rounded">Incubator Project</span>
                <h4 className="font-bold text-sm sm:text-base text-white uppercase mt-2">Autonomous Agrobot diagnostics</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">Pre-final year B.Tech diagnostic bot selected for DST-Nidhi funding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* 10. Leadership Messages */}
<section className="py-24 bg-navy-dark text-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-blue-bright">
        Leadership
      </span>

      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
        Guided by Vision
      </h2>

      <p className="mt-5 text-sm sm:text-base text-gray-400 leading-relaxed">
        The vision and leadership that continue to shape our institution,
        our students, and our future.
      </p>

    </div>


    {/* Leadership Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0
                    rounded-3xl overflow-hidden
                    border border-white/10">

      {/* ===================================== */}
      {/* PRINCIPAL */}
      {/* ===================================== */}

      <div className="relative bg-white text-navy-deep p-8 sm:p-10 lg:p-12">

        {/* Number */}
        <div className="absolute top-8 right-8 text-6xl font-black text-gray-100">
          01
        </div>

        {/* Profile */}
        <div className="relative flex items-center gap-5 mb-10">

          <div className="relative w-20 h-20 rounded-full overflow-hidden
                          border-4 border-blue-light shrink-0">

            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
              alt="Principal"
              fill
              sizes="80px"
              className="object-cover object-top"
            />

          </div>

          <div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-royal">
              Principal
            </span>

            <h3 className="mt-1 text-xl font-extrabold">
              Dr. Shaji Sen
            </h3>

            <p className="text-[10px] uppercase tracking-widest
                          font-bold text-gray-400 mt-1">
              Principal & Professor
            </p>
          </div>

        </div>


        {/* Quote */}
        <div className="relative">

          <Quote
            size={38}
            className="text-blue-royal/15 mb-5"
          />

          <h4 className="text-sm font-black uppercase tracking-[0.18em] mb-5">
            Message from the Principal
          </h4>

          <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-700">
            &ldquo;Engineering is not merely a system of mathematical
            codes and designs, but a powerful mechanism to construct a
            sustainable, progressive civilization.&rdquo;
          </p>

          <p className="mt-6 text-sm text-gray-500 leading-relaxed">
            At St. Thomas College of Engineering and Technology, our
            pedagogical vision is to shape technical engineers who can
            solve global challenges with analytical clarity and strong
            ethics.
          </p>

        </div>


        {/* Signature */}
        <div className="mt-10 pt-6 border-t border-gray-100">

          <span className="font-serif italic text-lg">
            Dr. Shaji Sen
          </span>

          <span className="block text-[9px] font-bold uppercase
                           tracking-[0.2em] text-gray-400 mt-1">
            Principal, STCET
          </span>

        </div>

      </div>


      {/* ===================================== */}
      {/* FOUNDER */}
      {/* ===================================== */}

      <div className="relative bg-blue-royal text-white p-8 sm:p-10 lg:p-12">

        {/* Number */}
        <div className="absolute top-8 right-8 text-6xl font-black text-white/10">
          02
        </div>

        {/* Profile */}
        <div className="relative flex items-center gap-5 mb-10">

          <div className="relative w-20 h-20 rounded-full overflow-hidden
                          border-4 border-white/20 shrink-0">

            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
              alt="Founder"
              fill
              sizes="80px"
              className="object-cover object-top"
            />

          </div>

          <div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-bright">
              Founder
            </span>

            <h3 className="mt-1 text-xl font-extrabold">
              Founder Name
            </h3>

            <p className="text-[10px] uppercase tracking-widest
                          font-bold text-white/50 mt-1">
              Founder, STCET
            </p>
          </div>

        </div>


        {/* Quote */}
        <div className="relative">

          <Quote
            size={38}
            className="text-white/15 mb-5"
          />

          <h4 className="text-sm font-black uppercase tracking-[0.18em] mb-5 text-white">
            Message from the Founder
          </h4>

          <p className="text-lg sm:text-xl font-medium leading-relaxed text-white/90">
            &ldquo;Our vision is to create an institution where education
            goes beyond textbooks and examinations.&rdquo;
          </p>

          <p className="mt-6 text-sm text-white/60 leading-relaxed">
            We strive to develop responsible professionals, innovative
            thinkers, and compassionate leaders who can contribute
            meaningfully to society. Through academic excellence,
            innovation, discipline, and strong values, we aim to provide
            every student with the knowledge and opportunities required
            to build a successful future.
          </p>

        </div>


        {/* Signature */}
        <div className="mt-10 pt-6 border-t border-white/10">

          <span className="font-serif italic text-lg">
            Founder Name
          </span>

          <span className="block text-[9px] font-bold uppercase
                           tracking-[0.2em] text-white/50 mt-1">
            Founder, STCET
          </span>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* 11. News & Events Section */}
      <section className="py-24 bg-blue-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 gap-4">
            <SectionHeading
              label="What's Happening"
              title="Campus News & Upcoming Events"
            />
            <div className="flex gap-4 shrink-0">
              <Link
                href="/news"
                className="text-xs font-bold text-blue-royal uppercase tracking-widest hover:text-blue-bright transition-colors"
              >
                View News Archive
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/events"
                className="text-xs font-bold text-blue-royal uppercase tracking-widest hover:text-blue-bright transition-colors"
              >
                View Events Calendar
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left columns: News Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {news.slice(0, 2).map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>

            {/* Right column: Events list */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="font-extrabold text-xs tracking-widest uppercase text-blue-bright mb-4">
                Upcoming Events Calendar
              </h3>
              <div className="space-y-4">
                {events.slice(0, 3).map((item) => (
                  <EventCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Campus Life Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 gap-4">
            <SectionHeading
              label="Campus Showcase"
              title="Life Beyond The Classroom"
            />
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-navy-deep hover:bg-blue-royal text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg transition-colors cursor-pointer"
            >
              Browse Gallery <ArrowRight size={14} />
            </Link>
          </div>

          {/* Grid Collage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl group border border-gray-100"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white" />
                {/* Title Card Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
                  <span className="text-[9px] font-black uppercase tracking-widest text-blue-bright">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-sm uppercase mt-1 truncate">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <AlumniSection />

      {/* 13. Admissions CTA Timeline */}
      <AdmissionCTA />
    </div>
  );
}
