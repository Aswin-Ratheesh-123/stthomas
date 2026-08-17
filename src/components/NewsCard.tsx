'use client';

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { NewsItem } from '@/data/news';

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  // Use a fallback Unsplash image if no local news image exists
  const defaultImage = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80';

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-bright/10 hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
      {/* Cover Image */}
      <div className="relative aspect-video overflow-hidden bg-navy-dark">
        <img
          src={item.imageUrl || defaultImage}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category Badge overlay */}
        <span className="absolute top-4 left-4 bg-navy-deep text-white font-bold text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md border border-white/10">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Date Row */}
        <div className="flex items-center gap-1.5 text-gray-400 text-xs font-semibold mb-3">
          <Calendar size={13} />
          <span>{item.date}</span>
        </div>

        {/* Title */}
        <h3 className="font-extrabold text-navy-deep text-base sm:text-lg mb-3 line-clamp-2 leading-snug group-hover:text-blue-royal transition-colors">
          {item.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
          {item.summary}
        </p>

        {/* Read More Link */}
        <Link
          href={`/news`}
          className="text-xs font-bold text-blue-royal uppercase tracking-widest flex items-center gap-1.5 mt-auto group-hover:text-blue-bright transition-colors"
        >
          Read More{' '}
          <ArrowRight
            size={13}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </article>
  );
}
