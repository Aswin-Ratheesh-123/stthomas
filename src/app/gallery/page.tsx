'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import Lightbox from '@/components/Lightbox';
import { galleryItems, GalleryItem } from '@/data/gallery';

type CategoryFilter = 'ALL' | 'CAMPUS' | 'EVENTS' | 'SPORTS' | 'CULTURAL' | 'TECHNICAL' | 'LABS';

export default function GalleryPage() {
  const [filter, setFilter] = useState<CategoryFilter>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items based on selection
  const filteredItems = filter === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  const openLightbox = (item: GalleryItem) => {
    // Find index of item within the FILTERED list to allow correct next/prev cycling
    const idx = filteredItems.findIndex((fi) => fi.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev as number) + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev as number) - 1 + filteredItems.length) % filteredItems.length);
  };

  const filterTabs: CategoryFilter[] = [
    'ALL',
    'CAMPUS',
    'EVENTS',
    'SPORTS',
    'CULTURAL',
    'TECHNICAL',
    'LABS'
  ];

  return (
    <div className="flex flex-col w-full text-navy-dark">
      {/* Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest text-blue-bright mb-3 block">
            Media Showcases
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none">
            Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Browse high-resolution photographs representing academic engineering laboratories, sports fests, hackathons, and campus life.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Visual Library"
            title="Campus In Pictures"
            subtitle="Filter gallery categories to check laboratory equipment, sports accomplishments, and student fests."
            align="center"
          />

          {/* Categories Sub-nav Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 select-none">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setFilter(tab);
                  setLightboxIndex(null);
                }}
                className={`text-[10px] font-black uppercase tracking-wider px-5 py-2.5 rounded-lg border transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-blue-royal text-white border-blue-royal shadow-md'
                    : 'bg-gray-50 text-gray-500 border-gray-200/50 hover:bg-gray-100 hover:text-navy-deep'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl group border border-gray-100 cursor-pointer bg-navy-dark"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                  {/* Backdrop blur details on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white text-left" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-5 left-5 right-5 text-white transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
                    <span className="text-[9px] font-black uppercase tracking-widest text-blue-bright">
                      {item.category}
                    </span>
                    <h4 className="font-bold text-sm uppercase mt-1 truncate">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 text-sm">
              No photos currently matching category &ldquo;{filter}&rdquo;.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal overlay */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
