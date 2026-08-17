'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import FacultyCard from '@/components/FacultyCard';
import { facultyList } from '@/data/faculty';
import { Search, ArrowRight } from 'lucide-react';

function FacultyRegistry() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [query, setQuery] = useState(initialSearch);
  const [selectedDept, setSelectedDept] = useState('ALL');

  const departmentsList = [
    'ALL',
    'Computer Science & Engineering',
    'Electronics & Communication Engineering',
    'Mechanical Engineering',
    'Civil Engineering'
  ];

  // Filter list based on search parameters
  const filteredFaculty = facultyList.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(query.toLowerCase()) ||
      member.specialization.toLowerCase().includes(query.toLowerCase()) ||
      member.qualification.toLowerCase().includes(query.toLowerCase());

    const matchesDept = selectedDept === 'ALL' || member.department === selectedDept;

    return matchesSearch && matchesDept;
  });

  return (
    <div className="flex flex-col w-full text-navy-dark">
      {/* Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest uppercase text-blue-bright mb-3 block">
            Academic Directory
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            Faculty Directory
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Search our directory of professors, HODs, research guides, and technical educators across departments.
          </p>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Registry Search"
            title="Search Faculty Profiles"
            subtitle="Search by name, specialization subject, or filter down by engineering branch."
            align="center"
          />

          {/* Link to Administrative Office Staff */}
          <div className="mb-8 max-w-2xl mx-auto bg-blue-royal/5 border border-blue-royal/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-navy-deep text-center sm:text-left">
            <span className="text-gray-500 font-medium leading-relaxed">Looking for central administration, accounts, examination cell, or IT support staff?</span>
            <Link href="/about/office" className="text-blue-royal hover:text-blue-bright transition-colors uppercase font-black shrink-0 tracking-wider flex items-center gap-1 cursor-pointer">
              <span>Office Directory</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Search Controls Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 select-none">
            {/* Search Input */}
            <div className="md:col-span-2 relative flex items-center bg-gray-50 border border-gray-200/50 rounded-xl px-4 py-3 focus-within:border-blue-bright focus-within:bg-white transition-all">
              <Search size={18} className="text-gray-400 shrink-0 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search faculty by name or subject..."
                className="w-full bg-transparent text-sm font-semibold outline-none text-navy-dark placeholder-gray-400"
              />
            </div>

            {/* Department Dropdown Filter */}
            <div className="relative bg-gray-50 border border-gray-200/50 rounded-xl px-4 py-3 focus-within:border-blue-bright focus-within:bg-white transition-all flex items-center">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold outline-none text-navy-dark cursor-pointer"
              >
                {departmentsList.map((dept, idx) => (
                  <option key={idx} value={dept}>
                    {dept === 'ALL' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid listing */}
          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredFaculty.map((member) => (
                <FacultyCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 text-sm">
              No faculty members found matching your search.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function FacultyRegistryPage() {
  return (
    <Suspense fallback={
      <div className="flex-grow flex flex-col justify-center items-center py-32 text-center text-gray-500">
        Loading directory...
      </div>
    }>
      <FacultyRegistry />
    </Suspense>
  );
}
