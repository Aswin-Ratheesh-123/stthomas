'use client';

import SectionHeading from '@/components/SectionHeading';
import EventCard from '@/components/EventCard';
import { events } from '@/data/events';

export default function EventsArchivePage() {
  return (
    <div className="flex flex-col w-full text-navy-dark">
      {/* Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest uppercase text-blue-bright mb-3 block">
            Calendar Archives
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            College Events
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Browse our list of academic conferences, technical symposium fests, cultural nights, and athletic competitions.
          </p>
        </div>
      </section>

      {/* Events listing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Schedule Timeline"
            title="All Upcoming Events"
            subtitle="Secure registration deadlines and track schedules for ongoing college programs."
            align="center"
          />

          <div className="grid grid-cols-1 gap-6">
            {events.map((item) => (
              <EventCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
