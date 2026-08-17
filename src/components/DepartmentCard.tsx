'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, BrainCircuit, Radio, Zap, Settings, Building, HelpCircle } from 'lucide-react';
import { Department } from '@/data/departments';

interface DepartmentCardProps {
  dept: Department;
}

export function getLocalIcon(iconName: string, size = 22) {
  switch (iconName) {
    case 'Cpu': return <Cpu size={size} />;
    case 'BrainCircuit': return <BrainCircuit size={size} />;
    case 'Radio': return <Radio size={size} />;
    case 'Zap': return <Zap size={size} />;
    case 'Settings': return <Settings size={size} />;
    case 'Building': return <Building size={size} />;
    default: return <HelpCircle size={size} />;
  }
}

export default function DepartmentCard({ dept }: DepartmentCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-blue-bright/20 hover:glow-subtle transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      {/* Background Subtle Logo */}
      <div className="absolute -bottom-8 -right-8 text-gray-50 opacity-20 pointer-events-none transition-transform duration-500 group-hover:scale-110">
        {getLocalIcon(dept.icon, 140)}
      </div>

      <div>
        {/* Icon Header */}
        <div className="w-12 h-12 bg-blue-light text-blue-royal rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-royal group-hover:text-white transition-all duration-300 shadow-sm">
          {getLocalIcon(dept.icon, 22)}
        </div>

        {/* Header Title */}
        <h3 className="font-extrabold text-navy-deep text-lg sm:text-xl uppercase mb-3 leading-snug group-hover:text-blue-royal transition-colors">
          {dept.name}
        </h3>

        {/* Short description */}
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
          {dept.description}
        </p>
      </div>

      {/* Details Footer */}
      <div>
        <div className="flex gap-4 mb-5 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-t border-gray-50 pt-4">
          <span className="bg-blue-royal/5 text-blue-royal px-2.5 py-1 rounded">
            Intake: {dept.intake} Students
          </span>
          <span className="bg-gray-100 px-2.5 py-1 rounded">
            {dept.duration}
          </span>
        </div>

        <Link
          href={`/academics/departments/${dept.slug}`}
          className="inline-flex items-center gap-2 font-bold text-xs uppercase text-blue-royal tracking-widest group-hover:text-blue-bright transition-colors"
        >
          Explore Department{' '}
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
