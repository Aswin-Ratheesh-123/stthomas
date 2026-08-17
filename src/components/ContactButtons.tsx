'use client';

import { Phone, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  colorClass: string;
}

function FloatingItem({ href, icon, label, colorClass }: ContactButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer z-50 ${colorClass}`}
      aria-label={label}
    >
      {icon}
      {/* Tooltip */}
      <span
        className={`absolute right-14 bg-navy-dark text-white text-[10px] tracking-wider uppercase font-bold py-1.5 px-3 rounded-lg shadow-md transition-all duration-300 whitespace-nowrap pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        {label}
      </span>
    </a>
  );
}

export default function ContactButtons() {
  return (
    <div className="fixed right-6 bottom-36 flex flex-col gap-3 z-45">
      <FloatingItem
        href="tel:+914902401700"
        icon={<Phone size={20} className="transition-transform duration-300" />}
        label="Call Admissions"
        colorClass="bg-blue-royal border border-white/20"
      />
      <FloatingItem
        href="mailto:info@stcet.ac.in"
        icon={<Mail size={20} className="transition-transform duration-300" />}
        label="Email Enquiry"
        colorClass="bg-navy-deep border border-white/20"
      />
      <FloatingItem
        href="https://wa.me/914902401700"
        icon={<MessageSquare size={20} className="transition-transform duration-300" />}
        label="WhatsApp Chat"
        colorClass="bg-green-600 border border-white/20"
      />
    </div>
  );
}
