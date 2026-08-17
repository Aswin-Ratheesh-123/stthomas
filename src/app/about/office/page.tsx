'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { officeUnits, officeStaffList } from '@/data/office';
import {
  Search,
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Briefcase,
  ArrowLeft,
  ChevronRight,
  Info
} from 'lucide-react';

function OfficeDirectoryContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [query, setQuery] = useState(initialSearch);
  const [selectedOffice, setSelectedOffice] = useState('ALL');

  // Filter staff based on search query and office selection
  const filteredStaff = officeStaffList.filter((staff) => {
    const matchesSearch =
      staff.name.toLowerCase().includes(query.toLowerCase()) ||
      staff.designation.toLowerCase().includes(query.toLowerCase());

    const matchesOffice = selectedOffice === 'ALL' || staff.officeUnitId === selectedOffice;

    return matchesSearch && matchesOffice;
  });

  const defaultPortrait = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80';

  return (
    <div className="flex flex-col w-full text-navy-dark">
      {/* 1. Header Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        {/* Background Subtle mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-blue-bright mb-3">
            <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1">
              About
            </Link>
            <ChevronRight size={12} className="text-gray-500" />
            <span>Administrative Office</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            Administrative Office & Staff
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Get in touch with central coordinators, accounting supervisors, examination officials, and technical support staff.
          </p>
        </div>
      </section>

      {/* 2. Office Units section */}
      <section className="py-20 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="College Departments"
            title="Administrative Divisions"
            subtitle="Our dedicated office sections managing admissions, student finances, KTU compliance, and campus networks."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {officeUnits.map((unit) => (
              <div
                key={unit.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-bright/10 hover:glow-subtle transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="p-3.5 bg-blue-royal/5 text-blue-royal rounded-xl w-fit group-hover:bg-blue-royal group-hover:text-white transition-colors duration-300">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-navy-deep text-lg uppercase tracking-tight leading-none">
                      {unit.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-wider">
                      Unit ID: {unit.id}
                    </p>
                  </div>
                  <p className="text-sm text-gray-550 leading-relaxed font-normal">
                    {unit.focus}
                  </p>
                </div>

                <div className="border-t border-gray-50 pt-5 mt-6 space-y-3 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-2.5">
                    <MapPin size={14} className="text-gray-400 shrink-0" />
                    <span>{unit.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={14} className="text-gray-400 shrink-0" />
                    <span>Office Ext: {unit.extension}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={14} className="text-gray-400 shrink-0" />
                    <a href={`mailto:${unit.email}`} className="text-blue-royal hover:underline font-semibold">
                      {unit.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock size={14} className="text-gray-400 shrink-0" />
                    <span>{unit.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Staff Registry Section */}
      <section className="py-20 bg-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Staff Registry"
            title="Search Administrative Staff"
            subtitle="Look up personnel details, designations, and direct communications extension coordinates."
            align="center"
          />

          {/* Search Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 select-none">
            {/* Search Input */}
            <div className="md:col-span-2 relative flex items-center bg-white border border-gray-200/50 rounded-xl px-4 py-3 focus-within:border-blue-bright focus-within:shadow-md transition-all">
              <Search size={18} className="text-gray-400 shrink-0 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search staff by name or designation..."
                className="w-full bg-transparent text-sm font-semibold outline-none text-navy-dark placeholder-gray-400"
              />
            </div>

            {/* Department Dropdown Filter */}
            <div className="relative bg-white border border-gray-200/50 rounded-xl px-4 py-3 focus-within:border-blue-bright focus-within:shadow-md transition-all flex items-center">
              <select
                value={selectedOffice}
                onChange={(e) => setSelectedOffice(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold outline-none text-navy-dark cursor-pointer"
              >
                <option value="ALL">All Sections</option>
                {officeUnits.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid listing */}
          {filteredStaff.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredStaff.map((staff) => {
                const staffUnit = officeUnits.find((u) => u.id === staff.officeUnitId);
                return (
                  <div
                    key={staff.id}
                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-bright/10 hover:glow-subtle transition-all duration-300 flex flex-col group"
                  >
                    {/* Portrait Photo */}
                    <div className="relative aspect-[3/4] bg-navy-dark overflow-hidden">
                      <img
                        src={staff.imageUrl || defaultPortrait}
                        alt={staff.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      {/* Office unit label */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-[9px] uppercase font-bold tracking-widest text-blue-bright bg-navy-dark/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/5 inline-block">
                          {staffUnit ? staffUnit.name.replace(' Office', '').replace(' Section', '').replace(' Unit', '').replace(' Cell', '') : 'Office Staff'}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-extrabold text-navy-deep text-base uppercase leading-snug group-hover:text-blue-royal transition-colors">
                          {staff.name}
                        </h3>
                        <p className="text-xs font-semibold text-blue-royal uppercase tracking-wider mt-1 mb-4">
                          {staff.designation}
                        </p>

                        <div className="space-y-2 text-xs text-gray-500 font-medium border-t border-gray-50 pt-4">
                          <div className="flex items-center gap-2">
                            <Building2 size={13} className="text-gray-400 shrink-0" />
                            <span className="truncate">{staffUnit ? staffUnit.name : 'Central Admin'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={13} className="text-gray-400 shrink-0" />
                            <span>Intercom Ext: {staff.extension}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-gray-50">
                        <a
                          href={`mailto:${staff.email}`}
                          className="flex items-center justify-center gap-2 bg-blue-light hover:bg-blue-royal hover:text-white text-blue-royal font-bold text-xs uppercase py-2.5 rounded-lg tracking-wider transition-all duration-300 w-full cursor-pointer shadow-sm active:scale-95"
                        >
                          <Mail size={13} />
                          <span>Send Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 text-sm">
              No administrative staff members found matching your search.
            </div>
          )}

          {/* Quick Disclaimer */}
          <div className="mt-16 bg-blue-royal/5 border border-blue-royal/10 rounded-2xl p-5 sm:p-6 flex items-start gap-4 max-w-3xl mx-auto text-left">
            <Info size={20} className="text-blue-royal shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-extrabold text-sm text-navy-deep uppercase">General Office Timings</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                All administrative staff are available for queries between 9:00 AM and 4:30 PM on standard working days. For admissions assistance outside normal hours, kindly reach out directly through our contact portal or submit an online query form.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function OfficeDirectoryPage() {
  return (
    <Suspense fallback={
      <div className="flex-grow flex flex-col justify-center items-center py-32 text-center text-gray-500">
        Loading directory...
      </div>
    }>
      <OfficeDirectoryContent />
    </Suspense>
  );
}
