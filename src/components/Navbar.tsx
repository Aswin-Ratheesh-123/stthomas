'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, GraduationCap, ChevronDown, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { utilityNav, mainNav, footerNav } from '@/data/navigation';
import SearchModal from './SearchModal';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-[120]
          transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200'
              : isHome
              ? 'bg-gradient-to-b from-navy-dark/70 to-transparent'
              : 'bg-navy-deep'
          }
        `}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* ============================================================
              TOP UTILITY BAR
          ============================================================ */}
          <div
            className={`
              hidden lg:flex
              justify-between items-center
              min-h-[36px]
              border-b
              text-xs font-medium
              transition-colors duration-300
              ${
                isScrolled
                  ? 'border-navy-deep/10 text-navy-deep/80'
                  : 'border-white/15 text-white/80'
              }
            `}
          >
            {/* Left Utility Information */}
            <div className="flex items-center gap-5">
              <span>
                Admissions Call: +91 490 2401700
              </span>

              <span className="w-1 h-1 bg-current rounded-full" />

              <span>
                KTU Affiliated & AICTE Approved
              </span>
            </div>

            {/* Right Utility Navigation */}
            <div className="flex items-center gap-5">
              {utilityNav.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="
                    hover:text-blue-bright
                    hover:underline
                    transition-colors
                    duration-200
                  "
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="
                  flex items-center gap-1.5
                  hover:text-blue-bright
                  transition-colors
                  duration-200
                  cursor-pointer
                "
                aria-label="Open search dialog"
              >
                <Search size={14} />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* ============================================================
              MAIN NAVIGATION
          ============================================================ */}
          <div
            className={`
              flex items-center justify-between
              gap-4
              transition-all duration-300
              ${
                isScrolled
                  ? 'py-2'
                  : 'py-3'
              }
            `}
          >

            {/* ==========================================================
                COLLEGE BRANDING IMAGE
            ========================================================== */}
            <Link
              href="/"
              aria-label="St. Thomas College of Engineering & Technology"
              className="
                relative
                flex items-center
                shrink-0
                select-none
                group
                overflow-hidden

                /* Move logo right ONLY on desktop */
                lg:ml-0
              "
            >
              <Image
                src="/images/img1.png"
                alt="St. Thomas College of Engineering & Technology"
                width={2048}
                height={682}
                priority
                quality={90}
                sizes="
                  (max-width: 640px) 280px,
                  (max-width: 1024px) 380px,
                  560px
                "
                className={`
                  w-auto
                  object-contain
                  transition-all
                  duration-300
                  ease-in-out

                  ${
                    isScrolled
                      ? 'h-[72px] sm:h-[78px] lg:h-[82px]'
                      : 'h-[82px] sm:h-[90px] lg:h-[100px]'
                  }
                `}
              />
            </Link>

            {/* ==========================================================
                DESKTOP NAVIGATION
            ========================================================== */}
            <nav
              className="
                hidden lg:flex
                items-center
                gap-6 xl:gap-7
                ml-auto
                self-stretch
              "
              aria-label="Main navigation"
            >
              {mainNav.map((item, idx) => {
                const isActive = pathname === item.href;
                const dropdownItems = footerNav.find((n) => n.label === item.label)?.items || [];
                const hasDropdown = dropdownItems.length > 0;

                return (
                  <div
                    key={idx}
                    className="relative py-4 flex items-center h-full group"
                    onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                    onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-1
                        py-2
                        whitespace-nowrap
                        text-[11px] xl:text-xs
                        font-bold
                        tracking-[0.12em]
                        uppercase
                        transition-colors
                        duration-200
                        ${
                          isActive
                            ? 'text-blue-royal'
                            : isScrolled
                            ? 'text-navy-deep hover:text-blue-bright'
                            : 'text-white hover:text-blue-bright'
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      {hasDropdown && (
                        <ChevronDown
                          size={12}
                          className={`
                            transition-transform duration-300
                            ${openDropdown === item.label ? 'rotate-180 text-blue-royal' : ''}
                          `}
                        />
                      )}

                      {isActive && (
                        <span
                          className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-1.5
                            h-1.5
                            rounded-full
                            bg-blue-royal
                          "
                        />
                      )}
                    </Link>

                    {/* Desktop Dropdown Panel */}
                    <AnimatePresence>
                      {hasDropdown && openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className={`
                            absolute
                            top-[80%]
                            left-1/2
                            -translate-x-1/2
                            mt-1
                            w-64
                            p-2
                            rounded-xl
                            shadow-xl
                            backdrop-blur-md
                            z-50
                            flex
                            flex-col
                            gap-0.5
                            border
                            ${
                              isScrolled
                                ? 'bg-white/95 border-gray-200 text-navy-deep'
                                : 'bg-navy-dark/95 border-white/10 text-white'
                            }
                          `}
                        >
                          {dropdownItems.map((subItem, sIdx) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={sIdx}
                                href={subItem.href}
                                onClick={() => setOpenDropdown(null)}
                                className={`
                                  flex
                                  items-center
                                  justify-between
                                  px-3
                                  py-2.5
                                  rounded-lg
                                  text-[11px]
                                  font-semibold
                                  tracking-wider
                                  uppercase
                                  transition-all
                                  duration-200
                                  group/item
                                  ${
                                    isSubActive
                                      ? 'text-blue-royal bg-blue-royal/5 font-bold'
                                      : isScrolled
                                      ? 'text-navy-deep/80 hover:text-blue-royal hover:bg-navy-deep/5'
                                      : 'text-white/80 hover:text-blue-bright hover:bg-white/5'
                                  }
                                `}
                              >
                                <span>{subItem.label}</span>
                                <ChevronRight
                                  size={12}
                                  className={`
                                    opacity-0 -translate-x-1
                                    transition-all duration-200
                                    group-hover/item:opacity-100 group-hover/item:translate-x-0
                                    ${
                                      isSubActive
                                        ? 'text-blue-royal'
                                        : isScrolled
                                        ? 'text-blue-royal'
                                        : 'text-blue-bright'
                                    }
                                  `}
                                />
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* ==========================================================
                ACTION BUTTONS
            ========================================================== */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">

              {/* Mobile Search */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className={`
                  lg:hidden
                  p-2
                  rounded-full
                  transition-colors
                  duration-200
                  cursor-pointer
                  ${
                    isScrolled
                      ? 'hover:bg-gray-100 text-navy-deep'
                      : 'hover:bg-white/10 text-white'
                  }
                `}
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Apply Now */}
              <Link
                href="/admissions"
                className="
                  hidden sm:flex
                  items-center
                  gap-2
                  bg-blue-royal
                  hover:bg-blue-bright
                  text-white
                  text-xs
                  font-bold
                  px-4 lg:px-5
                  py-2.5
                  rounded-lg
                  shadow-lg
                  hover:shadow-blue-royal/20
                  transition-all
                  duration-200
                  uppercase
                  tracking-wider
                  whitespace-nowrap
                  active:scale-95
                "
              >
                <GraduationCap size={15} />
                <span>Apply Now</span>
              </Link>

              {/* Mobile Menu */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className={`
                  lg:hidden
                  p-2
                  rounded-full
                  transition-colors
                  duration-200
                  cursor-pointer
                  ${
                    isScrolled
                      ? 'hover:bg-gray-100 text-navy-deep'
                      : 'hover:bg-white/10 text-white'
                  }
                `}
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
              >
                <Menu size={22} />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* ================================================================
          SEARCH MODAL
      ================================================================ */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* ================================================================
          MOBILE MENU
      ================================================================ */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
    </>
  );
}