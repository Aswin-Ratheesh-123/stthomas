'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, BrainCircuit, Radio, Zap, Settings, Building, ChevronRight, School } from 'lucide-react';
import Link from 'next/link';
import { departments } from '@/data/departments';

// Helper to map icon names to Lucide icons
export function getDepartmentIcon(iconName: string, size = 20) {
  switch (iconName) {
    case 'Cpu':
      return <Cpu size={size} className="text-blue-bright" />;
    case 'BrainCircuit':
      return <BrainCircuit size={size} className="text-blue-bright" />;
    case 'Radio':
      return <Radio size={size} className="text-blue-bright" />;
    case 'Zap':
      return <Zap size={size} className="text-blue-bright" />;
    case 'Settings':
      return <Settings size={size} className="text-blue-bright" />;
    case 'Building':
      return <Building size={size} className="text-blue-bright" />;
    default:
      return <School size={size} className="text-blue-bright" />;
  }
}

export default function FloatingDepartmentsTab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Vertical Tab */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 bg-navy-deep hover:bg-blue-royal text-white py-4 px-3 rounded-l-2xl shadow-xl z-[200] items-center justify-center cursor-pointer transition-colors duration-300 select-none border-y border-l border-white/20"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)' }}
      >
        <span className="font-semibold tracking-widest text-xs uppercase flex items-center gap-2">
          <School size={16} /> DEPARTMENTS
        </span>
      </button>

      {/* Mobile Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 bg-navy-deep text-white p-4 rounded-full shadow-2xl z-[200] flex items-center justify-center hover:bg-blue-royal transition-colors active:scale-95"
        aria-label="Open Departments Drawer"
      >
        <School size={24} />
      </button>

      {/* Drawer Overlay & Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-navy-dark/40 backdrop-blur-sm z-[250]"
            />

            {/* Right Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85vw] sm:w-[450px] bg-white shadow-2xl z-[250] overflow-y-auto flex flex-col border-l border-gray-100 text-navy-dark"
            >
              {/* Drawer Header */}
              <div className="p-6 bg-navy-deep text-white flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <School size={28} className="text-blue-bright" />
                  <div>
                    <h2 className="font-bold text-lg tracking-wide uppercase">Engineering Departments</h2>
                    <p className="text-xs text-blue-light/80">St. Thomas College, Mattannur</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 flex-1 space-y-4">
                {departments.map((dept) => (
                  <Link
                    key={dept.slug}
                    href={`/academics/departments/${dept.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-bright bg-gray-50/50 hover:bg-blue-light transition-all duration-300 group hover:shadow-md cursor-pointer"
                  >
                    <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                      {getDepartmentIcon(dept.icon, 22)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-navy-deep group-hover:text-blue-royal truncate">
                          {dept.name}
                        </h4>
                        <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                        {dept.description}
                      </p>
                      <div className="flex gap-4 mt-2">
                        <span className="text-[10px] font-bold text-blue-royal uppercase bg-blue-royal/5 px-2 py-0.5 rounded">
                          Intake: {dept.intake}
                        </span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase">
                          {dept.duration}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 sticky bottom-0 z-10">
                <Link
                  href="/academics/departments"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-navy-deep hover:bg-navy-dark text-white py-3.5 rounded-lg font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  View All Departments
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
