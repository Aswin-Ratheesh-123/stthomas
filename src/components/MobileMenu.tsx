'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { mainNav, utilityNav, footerNav } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export default function MobileMenu({ isOpen, onClose, onOpenSearch }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 120 } },
  };

  const combinedLinks = [
    ...mainNav,
    { label: 'NEWS & ANNOUNCEMENTS', href: '/news' },
    { label: 'UPCOMING EVENTS', href: '/events' },
    { label: 'FACULTY REGISTRY', href: '/faculty' },
    { label: 'PHOTO GALLERY', href: '/gallery' },
    { label: 'CONTACT ENQUIRY', href: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-navy-dark text-white z-150 flex flex-col p-6 overflow-y-auto"
        >
          {/* Header row in mobile menu */}
          <div className="flex justify-between items-center pb-6 border-b border-white/10">
            <span className="font-bold text-sm tracking-widest text-blue-bright">ST. THOMAS</span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/15 rounded-full transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Quick Search */}
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5 text-gray-400 mt-6 cursor-pointer"
          >
            <Search size={18} />
            <span className="text-sm">Search programs, news...</span>
          </button>

          {/* Navigation Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col justify-center gap-4 py-8"
          >
            {combinedLinks.map((item, idx) => {
              const dropdownItems = footerNav.find((n) => n.label === item.label)?.items || [];
              const hasDropdown = dropdownItems.length > 0;
              const isSectionOpen = openSection === item.label;

              return (
                <motion.div key={idx} variants={itemVariants} className="flex flex-col">
                  {hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => setOpenSection(isSectionOpen ? null : item.label)}
                      className="flex justify-between items-center w-full text-left text-lg sm:text-xl font-bold tracking-wide hover:text-blue-bright transition-colors uppercase py-2 cursor-pointer group text-white border-none bg-transparent"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={20}
                        className={`text-gray-400 transition-transform duration-300 ${
                          isSectionOpen ? 'rotate-180 text-blue-bright' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex justify-between items-center text-lg sm:text-xl font-bold tracking-wide hover:text-blue-bright transition-colors uppercase py-2 cursor-pointer group"
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={18} className="text-gray-500 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}

                  {hasDropdown && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isSectionOpen ? 'auto' : 0,
                        opacity: isSectionOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden pl-4 flex flex-col gap-2.5 border-l border-white/10 mt-1 mb-2"
                    >
                      {dropdownItems.map((subItem, sIdx) => (
                        <Link
                          key={sIdx}
                          href={subItem.href}
                          onClick={onClose}
                          className="flex justify-between items-center py-1.5 text-sm font-semibold tracking-wider text-gray-300 hover:text-white uppercase"
                        >
                          <span>{subItem.label}</span>
                          <ChevronRight size={14} className="text-gray-600" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Utility Drawer links */}
          <div className="mt-auto border-t border-white/10 pt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
              {utilityNav.slice(2).map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Link
              href="/admissions"
              onClick={onClose}
              className="block w-full text-center bg-blue-royal hover:bg-blue-bright text-white font-bold py-3.5 rounded-xl uppercase tracking-wider text-xs transition-colors"
            >
              Apply Now 2026
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
