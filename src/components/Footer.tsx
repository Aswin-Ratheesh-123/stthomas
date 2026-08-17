'use client';

import Link from 'next/link';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { footerNav } from '@/data/navigation';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-royal text-white rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                ST
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-wider uppercase leading-none">
                  ST. THOMAS
                </span>
                <span className="text-[9px] font-bold tracking-widest text-blue-bright uppercase mt-1">
                  College of Engineering & Technology
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Established with a commitment to academic excellence, St. Thomas College of Engineering and Technology, Mattannur trains technical pioneers to innovate, build, and lead.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-royal text-gray-300 hover:text-white flex items-center justify-center transition-all shadow-inner"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-royal text-gray-300 hover:text-white flex items-center justify-center transition-all shadow-inner"
                aria-label="Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-royal text-gray-300 hover:text-white flex items-center justify-center transition-all shadow-inner"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-royal text-gray-300 hover:text-white flex items-center justify-center transition-all shadow-inner"
                aria-label="Linkedin"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-royal text-gray-300 hover:text-white flex items-center justify-center transition-all shadow-inner"
                aria-label="Youtube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          {footerNav.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-extrabold text-xs tracking-wider uppercase text-blue-bright">
                {group.label}
              </h4>
              <ul className="space-y-2.5">
                {group.items.map((item, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-xs tracking-wider uppercase text-blue-bright">
              STCET CAMPUS
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-royal shrink-0 mt-0.5" />
                <span>Mattannur, Kannur District, Kerala, PIN - 670702</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-royal shrink-0" />
                <span>+91 490 2401700</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-royal shrink-0" />
                <a href="mailto:info@stcet.ac.in" className="hover:text-white">
                  info@stcet.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-500 gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-gray-400">
              St. Thomas College of Engineering and Technology, Mattannur
            </p>
            <p className="mt-1">
              &copy; {new Date().getFullYear()} St. Thomas College of Engineering and Technology. All rights reserved.
            </p>
          </div>
          {/* Scroll to Top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-white/5 hover:bg-blue-royal text-gray-300 hover:text-white px-4 py-2.5 rounded-lg border border-white/10 hover:border-white/20 transition-all font-semibold uppercase tracking-wider text-[10px] cursor-pointer group"
            aria-label="Back to top"
          >
            Back to top{' '}
            <ArrowUp
              size={13}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
