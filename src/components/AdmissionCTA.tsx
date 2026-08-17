'use client';

import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Step {
  num: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Explore Programs',
    description: 'Find the engineering branch aligned with your goals, whether in software systems, AI, mechanical, or civil infrastructure.',
  },
  {
    num: '02',
    title: 'Check Eligibility',
    description: 'Verify qualifying board percentage requirements, academic benchmarks, and KEAM rank guidelines.',
  },
  {
    num: '03',
    title: 'Fill Application',
    description: 'Complete our simplified digital admissions form with credentials and course preference list.',
  },
  {
    num: '04',
    title: 'Secure Admission',
    description: 'Attend seat allotment counseling rounds, complete verification, and join the STCET community.',
  },
];

export default function AdmissionCTA() {
  return (
    <section className="py-20 bg-navy-dark text-white relative overflow-hidden">
      {/* Background abstract lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 border-2 border-dashed border-blue-bright rounded-full animate-spin-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-dashed border-blue-royal rounded-full animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-black tracking-widest uppercase text-blue-bright mb-3.5 block">
            Admissions 2026-27
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight  mb-4 leading-tight font-sans">
            Your Journey Starts Here.
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Follow our structured admissions roadmap to secure your engineering seat at St. Thomas College of Engineering and Technology.
          </p>
          <div className="h-[3px] bg-blue-bright w-20 mx-auto mt-6 rounded" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-bright/20 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Step number count */}
                <div className="text-3xl font-black text-blue-bright tracking-tight group-hover:scale-105 transition-transform duration-300 select-none">
                  {step.num}
                </div>
                {/* Title */}
                <h3 className="font-extrabold text-white text-base sm:text-lg mt-4 mb-2 uppercase">
                  {step.title}
                </h3>
                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Buttons */}
        <div className="flex justify-center items-center gap-4 flex-wrap mt-8">
          <Link
            href="/admissions"
            className="bg-blue-royal hover:bg-blue-bright text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-lg transition-colors flex items-center gap-2 group cursor-pointer active:scale-95"
          >
            Start Your Application
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-colors cursor-pointer active:scale-95"
          >
            Connect with Advisor
          </Link>
        </div>
      </div>
    </section>
  );
}
