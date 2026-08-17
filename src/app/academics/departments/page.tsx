'use client';

import SectionHeading from '@/components/SectionHeading';
import DepartmentCard from '@/components/DepartmentCard';
import { departments } from '@/data/departments';

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest uppercase text-blue-bright mb-3 block">
            Academic Fields
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            Engineering Branches
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Meet the academic departments directing research projects, laboratory practices, and student innovations.
          </p>
        </div>
      </section>

      {/* Grid listing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Branches"
            title="Explore our Departments"
            subtitle="Each department features custom curriculum electives, dedicated labs, and academic mentorship."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <DepartmentCard key={dept.slug} dept={dept} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
