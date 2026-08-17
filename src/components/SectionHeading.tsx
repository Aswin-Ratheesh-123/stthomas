'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  darkTheme?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  darkTheme = false,
}: SectionHeadingProps) {
  const isLeft = align === 'left';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${isLeft ? 'mr-auto text-left' : 'mx-auto text-center'}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-xs font-black tracking-widest mb-3.5 block ${
          darkTheme ? 'text-blue-bright' : 'text-blue-royal'
        }`}
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight  leading-tight font-sans ${
          darkTheme ? 'text-white' : 'text-navy-deep'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-sm sm:text-base leading-relaxed mt-4 ${
            darkTheme ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`h-[3px] w-20 mt-6 rounded ${isLeft ? 'origin-left' : 'mx-auto origin-center'} ${
          darkTheme ? 'bg-blue-bright' : 'bg-blue-royal'
        }`}
      />
    </div>
  );
}
