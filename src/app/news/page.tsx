'use client';

import SectionHeading from '@/components/SectionHeading';
import NewsCard from '@/components/NewsCard';
import { news } from '@/data/news';

export default function NewsArchivePage() {
  return (
    <div className="flex flex-col w-full text-navy-dark">
      {/* Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest uppercase text-blue-bright mb-3 block">
            Press Releases
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            News & Announcements
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            See recent campus updates, B.Tech admissions bulletins, research MoUs, and student success milestones.
          </p>
        </div>
      </section>

      {/* Grid listing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Bulletins Feed"
            title="Latest Announcements"
            subtitle="Catch up on active student milestones and campus administration updates."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
