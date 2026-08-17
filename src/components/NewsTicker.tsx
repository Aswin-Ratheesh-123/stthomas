'use client';

import { Megaphone } from 'lucide-react';
import { tickerNews } from '@/data/news';

export default function NewsTicker() {
  return (
    <div className="-mt-10 bg-navy-deep text-white border-y border-white/10 flex items-center relative overflow-hidden z-10 select-none">
      {/* Fixed Label on Left */}
      <div className="bg-blue-royal px-5 py-3.5 flex items-center gap-2 font-bold text-xs uppercase tracking-widest z-20 shadow-lg shrink-0">
        <Megaphone size={14} className="animate-pulse" /> Latest Updates
      </div>

      {/* Scrolling Text Wrapper */}
      <div className="flex-grow overflow-hidden flex items-center">
        <div className="animate-marquee whitespace-nowrap py-3 text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-16">
          {/* Render updates twice to support infinite scrolling loop */}
          {tickerNews.map((newsText, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-blue-bright rounded-full" />
              {newsText}
            </span>
          ))}
          {tickerNews.map((newsText, idx) => (
            <span key={`dup-${idx}`} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-blue-bright rounded-full" />
              {newsText}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
