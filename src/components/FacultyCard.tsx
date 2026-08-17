'use client';

import { Mail, GraduationCap, Briefcase } from 'lucide-react';
import { FacultyMember } from '@/data/faculty';

interface FacultyCardProps {
  member: FacultyMember;
}

export default function FacultyCard({ member }: FacultyCardProps) {
  // Use a stable, professional portrait placeholder from Unsplash
  const defaultPortrait = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80';

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-bright/10 hover:glow-subtle transition-all duration-300 flex flex-col group">
      {/* Profile Photo */}
      <div className="relative aspect-[3/4] bg-navy-dark overflow-hidden">
        <img
          src={member.imageUrl || defaultPortrait}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle Gradient Over Picture */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        {/* Department Name Overlay on bottom of photo */}
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-blue-bright bg-navy-dark/70 backdrop-blur-sm px-2.5 py-1 rounded border border-white/5 inline-block">
            {member.department}
          </span>
        </div>
      </div>

      {/* Info Content */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          {/* Name */}
          <h3 className="font-extrabold text-navy-deep text-base uppercase leading-snug group-hover:text-blue-royal transition-colors">
            {member.name}
          </h3>
          {/* Designation */}
          <p className="text-xs font-semibold text-blue-royal uppercase tracking-wider mt-1 mb-4">
            {member.designation}
          </p>

          <div className="space-y-2 text-xs text-gray-500 font-medium border-t border-gray-50 pt-4">
            {/* Qualification */}
            <div className="flex items-start gap-2.5">
              <GraduationCap size={14} className="text-gray-400 shrink-0 mt-0.5" />
              <span>{member.qualification}</span>
            </div>
            {/* Specialization */}
            <div className="flex items-start gap-2.5">
              <Briefcase size={14} className="text-gray-400 shrink-0 mt-0.5" />
              <span>Spec: {member.specialization}</span>
            </div>
          </div>
        </div>

        {/* Email button */}
        <div className="mt-5 pt-3 border-t border-gray-50">
          <a
            href={`mailto:${member.email}`}
            className="flex items-center justify-center gap-2 bg-blue-light hover:bg-blue-royal hover:text-white text-blue-royal font-bold text-xs uppercase py-2.5 rounded-lg tracking-wider transition-all duration-300 w-full cursor-pointer shadow-sm active:scale-95"
          >
            <Mail size={13} />
            <span>Contact Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
