'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';

interface Slide {
  id: number;
  label: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    label: 'St. Thomas College of Engineering and Technology',
    title: 'Engineering Tomorrow, Today.',
    description:
      'Empowering future leaders through industry-driven education, advanced research labs, and holistic professional development.',
    ctaText: 'Explore Academics',
    ctaLink: '/academics',
  },
  {
    id: 2,
    label: 'Research & Innovation Centers',
    title: 'Innovation Beyond Classrooms.',
    description:
      'Fostering deep-tech research, smart EV charging protocols, diagnostic agrobots, and AI applications funded by leading science councils.',
    ctaText: 'Research Division',
    ctaLink: '/research',
  },
  {
    id: 3,
    label: 'Placements & Career Development Cell',
    title: 'Learn. Build. Lead.',
    description:
      'Securing global technical placements and engineering leadership roles in top-tier corporate giants like TCS, Bosch, and Wipro.',
    ctaText: 'Our Placements',
    ctaLink: '/placements',
  },
  {
    id: 4,
    label: 'Vibrant Campus Life',
    title: 'Where Ideas Become Impact.',
    description:
      'Engage with hackathons, sports meets, cultural fests, and tech clubs in a lively and inclusive academic community.',
    ctaText: 'Student Life',
    ctaLink: '/campus-life',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto transition slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen bg-navy-dark overflow-hidden flex items-center justify-center">

      {/* =========================================================
          BACKGROUND VIDEO
          File: public/videos/video1.mp4
          ========================================================= */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 " />

        {/* Additional dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* =========================================================
          SLIDE CONTENT
          ========================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-white mt-12 sm:mt-16">
        <div className="max-w-3xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                },
              }}
            >

              {/* Slide Label */}
              <motion.span
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 15,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                className="text-blue-bright font-black tracking-widest text-[10px] sm:text-xs  mb-3.5 block"
              >
                {slides[current].label}
              </motion.span>

              {/* Slide Title */}
              <motion.h1
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      damping: 20,
                    },
                  },
                }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6 font-sans select-none"
              >
                {slides[current].title}
              </motion.h1>

              {/* Slide Description */}
              <motion.p
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                    },
                  },
                }}
                className="text-sm sm:text-lg text-gray-300 mb-8 leading-relaxed font-medium"
              >
                {slides[current].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.95,
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                className="flex flex-wrap gap-4 items-center"
              >

                {/* Primary CTA */}
                <Link
                  href={slides[current].ctaLink}
                  className="bg-blue-royal hover:bg-blue-bright text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-lg shadow-blue-royal/20 transition-all tracking-wider flex items-center gap-2 group cursor-pointer active:scale-95"
                >
                  {slides[current].ctaText}

                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                {/* Admissions CTA */}
                <Link
                  href="/admissions"
                  className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-wider flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <GraduationCap size={15} />

                  Apply Online
                </Link>

              </motion.div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* =========================================================
          MANUAL LEFT / RIGHT CONTROLS
          ========================================================= */}
      <div className="absolute bottom-10 right-6 sm:right-12 z-20 flex gap-3.5">

        <button
          onClick={prevSlide}
          className="p-3 bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/25 rounded-xl transition-colors cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={nextSlide}
          className="p-3 bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/25 rounded-xl transition-colors cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight size={18} />
        </button>

      </div>

      {/* =========================================================
          SCROLL INDICATOR
          ========================================================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none select-none text-white/50 text-[9px] font-black uppercase tracking-widest">

        <span>Scroll to Explore</span>

        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-1.5 bg-blue-bright rounded-full"
          />
        </div>

      </div>

    </section>
  );
}