'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { GalleryItem } from '@/data/gallery';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const isOpen = currentIndex !== null;

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Key listeners for arrow navigation and closing
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose]);

  if (!isOpen || currentIndex === null) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-navy-dark/95 backdrop-blur-md z-250 flex items-center justify-center p-4 select-none">
        {/* Backdrop Close Click */}
        <div className="absolute inset-0 z-0" onClick={onClose} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-white/80 hover:text-white z-20"
          aria-label="Close Lightbox"
        >
          <X size={24} />
        </button>

        {/* Main Panel Content */}
        <div className="relative max-w-5xl w-full flex flex-col items-center justify-center z-10">
          {/* Navigation Controls */}
          <button
            onClick={onPrev}
            className="absolute left-0 sm:left-4 p-3.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-full transition-all cursor-pointer z-20"
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-0 sm:right-4 p-3.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-full transition-all cursor-pointer z-20"
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Active Visual with scale transitions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl border border-white/5 shadow-2xl"
          >
            <img
              src={currentItem.imageUrl}
              alt={currentItem.title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl"
            />
          </motion.div>

          {/* Caption Details */}
          <div className="mt-5 text-center text-white max-w-2xl px-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-bright bg-blue-bright/10 border border-blue-bright/20 px-3 py-1 rounded-md inline-block mb-2">
              {currentItem.category}
            </span>
            <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide">
              {currentItem.title}
            </h3>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1.5">
              Image {currentIndex + 1} of {items.length}
            </p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
