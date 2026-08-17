'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statistics } from '@/data/statistics';

interface CounterProps {
  value: number;
  durationMs?: number;
}

function AnimateCounter({ value, durationMs = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalSteps = 40;
    const stepDuration = durationMs / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value, durationMs]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatisticsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-royal rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-bright rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {statistics.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-blue-light/40 border border-gray-100 rounded-2xl flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:border-blue-bright/10 transition-all duration-300"
            >
              {/* Stat number value */}
              <div className="text-4xl sm:text-5xl font-black text-navy-deep tracking-tight flex items-baseline gap-0.5 mb-2 select-none">
                <AnimateCounter value={stat.value} />
                <span className="text-blue-royal font-bold">{stat.suffix}</span>
              </div>
              
              {/* Label */}
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-blue-bright mb-2">
                {stat.label}
              </h4>
              
              {/* Short description */}
              <p className="text-xs text-gray-500 font-medium leading-relaxed mt-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
