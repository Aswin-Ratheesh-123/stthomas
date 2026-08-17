'use client';

import { Calendar, MapPin, Clock } from 'lucide-react';
import { CollegeEvent } from '@/data/events';

interface EventCardProps {
  item: CollegeEvent;
}

export default function EventCard({ item }: EventCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'technical':
        return 'bg-blue-bright/10 text-blue-bright';
      case 'sports':
        return 'bg-green-600/10 text-green-600';
      case 'cultural':
        return 'bg-purple-600/10 text-purple-600';
      default:
        return 'bg-blue-royal/10 text-blue-royal';
    }
  };

  return (
    <div className="flex gap-4 sm:gap-6 p-5 sm:p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-blue-bright/10 transition-all duration-300 group">
      {/* Date Block */}
      <div className="flex flex-col items-center justify-center bg-blue-light/50 group-hover:bg-navy-deep group-hover:text-white transition-colors duration-300 rounded-xl px-4 py-3 sm:py-5 min-w-[70px] sm:min-w-[85px] border border-gray-100/50 group-hover:border-navy-deep text-center select-none shadow-sm">
        <span className="text-2xl sm:text-3xl font-black tracking-tight leading-none">
          {item.day}
        </span>
        <span className="text-[10px] font-black tracking-widest uppercase mt-1 text-blue-royal group-hover:text-blue-bright transition-colors">
          {item.month}
        </span>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          {/* Category Tag */}
          <span
            className={`inline-block text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mb-2 ${getCategoryColor(
              item.category
            )}`}
          >
            {item.category}
          </span>
          {/* Title */}
          <h3 className="font-extrabold text-navy-deep text-sm sm:text-base group-hover:text-blue-royal transition-colors line-clamp-2 leading-snug">
            {item.title}
          </h3>
        </div>

        {/* Timings and Venue Row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-500 font-semibold mt-3 pt-3 border-t border-gray-50">
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-gray-400" />
            <span className="truncate">{item.time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-gray-400" />
            <span className="truncate">{item.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
