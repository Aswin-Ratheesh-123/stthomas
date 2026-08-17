'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, School, Calendar, FileText, User, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { departments } from '@/data/departments';
import { programs } from '@/data/programs';
import { events } from '@/data/events';
import { news } from '@/data/news';
import { facultyList } from '@/data/faculty';

interface SearchResult {
  title: string;
  category: 'Department' | 'Program' | 'Event' | 'News' | 'Faculty';
  href: string;
  description: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const tempResults: SearchResult[] = [];

    // Search Departments
    departments.forEach((d) => {
      if (d.name.toLowerCase().includes(q) || d.shortName.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)) {
        tempResults.push({
          title: d.name,
          category: 'Department',
          href: `/academics/departments/${d.slug}`,
          description: d.description,
        });
      }
    });

    // Search Programs
    const allProgs = [...programs.ug, ...programs.certificate];
    allProgs.forEach((p) => {
      if (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
        tempResults.push({
          title: p.name,
          category: 'Program',
          href: '/academics/programs',
          description: p.description,
        });
      }
    });

    // Search Events
    events.forEach((e) => {
      if (e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)) {
        tempResults.push({
          title: e.title,
          category: 'Event',
          href: '/events',
          description: `${e.date} • ${e.location}`,
        });
      }
    });

    // Search News
    news.forEach((n) => {
      if (n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q)) {
        tempResults.push({
          title: n.title,
          category: 'News',
          href: '/news',
          description: n.summary,
        });
      }
    });

    // Search Faculty
    facultyList.forEach((f) => {
      if (f.name.toLowerCase().includes(q) || f.department.toLowerCase().includes(q) || f.specialization.toLowerCase().includes(q)) {
        tempResults.push({
          title: f.name,
          category: 'Faculty',
          href: `/faculty?search=${encodeURIComponent(f.name)}`,
          description: `${f.designation} • ${f.department} • ${f.specialization}`,
        });
      }
    });

    setResults(tempResults.slice(0, 8)); // limit to 8 results
  }, [query]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-navy-dark/95 backdrop-blur-md z-200 flex flex-col justify-start items-center p-4 sm:p-10 text-white">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-white/80 hover:text-white"
        aria-label="Close search"
      >
        <X size={24} />
      </button>

      <div className="w-full max-w-2xl mt-12 sm:mt-20 flex flex-col gap-6">
        {/* Search Bar */}
        <div className="relative w-full border-b-2 border-white/20 focus-within:border-blue-bright transition-colors pb-3 flex items-center gap-4">
          <Search size={28} className="text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search programs, departments, faculty, news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-xl sm:text-2xl font-semibold outline-none placeholder-gray-500 text-white"
          />
        </div>

        {/* Search Results */}
        <div className="mt-4 overflow-y-auto max-h-[60vh] space-y-3 pr-2">
          {query.trim() === '' ? (
            <div className="text-center py-10 text-gray-400 text-sm">
              Type above to search the STCET directory.
            </div>
          ) : results.length > 0 ? (
            results.map((r, idx) => (
              <Link
                key={idx}
                href={r.href}
                onClick={onClose}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-colors border border-white/5 bg-white/5 cursor-pointer group"
              >
                <div className="p-2.5 bg-white/10 rounded-lg text-blue-bright">
                  {r.category === 'Department' && <School size={20} />}
                  {r.category === 'Program' && <BookOpen size={20} />}
                  {r.category === 'Event' && <Calendar size={20} />}
                  {r.category === 'News' && <FileText size={20} />}
                  {r.category === 'Faculty' && <User size={20} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-blue-bright">
                      {r.category}
                    </span>
                    <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-blue-bright mt-0.5 truncate">
                    {r.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 line-clamp-2">
                    {r.description}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-10 text-gray-400 text-sm">
              No results found for &ldquo;{query}&rdquo;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
