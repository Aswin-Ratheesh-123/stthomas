'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { footerNav } from '@/data/navigation';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-navy-dark text-white border-t border-white/5 relative z-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            MAIN FOOTER
            ===================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-12 py-14 lg:py-16">

          {/* =====================================================
              BRAND
              ===================================================== */}
          <div className="sm:col-span-2 lg:col-span-2">

            <Link
              href="/"
              className="inline-flex items-center group"
              aria-label="St. Thomas College of Engineering and Technology"
            >

              <Image
                src="/images/img1.png"
                alt="St. Thomas College of Engineering and Technology"
                width={240}
                height={90}
                className="w-auto h-36 sm:h-30 object-contain"
                priority={false}
              />

            </Link>


            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
              Established with a commitment to academic excellence,
              St. Thomas College of Engineering and Technology, Mattannur
              trains technical pioneers to innovate, build, and lead.
            </p>


            {/* Social Media */}
            <div className="flex items-center gap-3 mt-7">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  w-9 h-9
                  rounded-lg
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:bg-blue-royal
                  hover:border-blue-royal
                  transition-all duration-200
                "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>


              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter"
                className="
                  w-9 h-9
                  rounded-lg
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:bg-blue-royal
                  hover:border-blue-royal
                  transition-all duration-200
                "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>


              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  w-9 h-9
                  rounded-lg
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:bg-blue-royal
                  hover:border-blue-royal
                  transition-all duration-200
                "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                  />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                  />
                </svg>
              </a>


              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  w-9 h-9
                  rounded-lg
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:bg-blue-royal
                  hover:border-blue-royal
                  transition-all duration-200
                "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect
                    width="4"
                    height="12"
                    x="2"
                    y="9"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                  />
                </svg>
              </a>


              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="
                  w-9 h-9
                  rounded-lg
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:bg-blue-royal
                  hover:border-blue-royal
                  transition-all duration-200
                "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                  <polygon points="10 15 15 12 10 9 10 15" />
                </svg>
              </a>

            </div>
          </div>


          {/* =====================================================
              QUICK LINKS
              ===================================================== */}
          {footerNav.map((group, idx) => (
            <div
              key={idx}
              className="space-y-4"
            >

              <h4 className="
                text-[10px]
                font-black
                tracking-[0.2em]
                uppercase
                text-blue-bright
              ">
                {group.label}
              </h4>

              <ul className="space-y-2.5">

                {group.items.map((item, linkIdx) => (
                  <li key={linkIdx}>

                    <Link
                      href={item.href}
                      className="
                        inline-flex
                        text-sm
                        text-gray-400
                        hover:text-white
                        transition-colors
                        duration-200
                      "
                    >
                      {item.label}
                    </Link>

                  </li>
                ))}

              </ul>

            </div>
          ))}


          {/* =====================================================
              CONTACT
              ===================================================== */}
          <div className="space-y-4">

            <h4 className="
              text-[10px]
              font-black
              tracking-[0.2em]
              uppercase
              text-blue-bright
            ">
              STCET Campus
            </h4>

            <ul className="space-y-4 text-sm text-gray-400">

              {/* Address */}
              <li className="flex items-start gap-3">

                <MapPin
                  size={16}
                  className="text-blue-bright shrink-0 mt-0.5"
                />

                <span className="leading-6">
                  Mattannur, Kannur District,
                  Kerala, PIN - 670702
                </span>

              </li>


              {/* Phone */}
              <li>

                <a
                  href="tel:+914902401700"
                  className="
                    flex items-center gap-3
                    hover:text-white
                    transition-colors
                  "
                >

                  <Phone
                    size={16}
                    className="text-blue-bright shrink-0"
                  />

                  <span>
                    +91 490 2401700
                  </span>

                </a>

              </li>


              {/* Email */}
              <li>

                <a
                  href="mailto:info@stcet.ac.in"
                  className="
                    flex items-center gap-3
                    hover:text-white
                    transition-colors
                  "
                >

                  <Mail
                    size={16}
                    className="text-blue-bright shrink-0"
                  />

                  <span>
                    info@stcet.ac.in
                  </span>

                </a>

              </li>

            </ul>

          </div>

        </div>


        {/* =====================================================
            FOOTER BOTTOM
            ===================================================== */}
        <div className="
          border-t
          border-white/10
          py-7
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-5
        ">

          <div className="text-center md:text-left">

            <p className="text-xs font-semibold text-gray-400">
              St. Thomas College of Engineering and Technology, Mattannur
            </p>

            <p className="mt-1.5 text-[11px] text-gray-600">
              &copy; {new Date().getFullYear()} St. Thomas College of
              Engineering and Technology. All rights reserved.
            </p>

          </div>


          {/* Back To Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              self-center
              md:self-auto
              inline-flex
              items-center
              gap-2
              px-4
              py-2.5
              rounded-lg
              bg-white/5
              border
              border-white/10
              text-gray-400
              hover:text-white
              hover:bg-blue-royal
              hover:border-blue-royal
              transition-all
              duration-200
              text-[10px]
              font-bold
              uppercase
              tracking-widest
              cursor-pointer
            "
          >
            Back to top

            <ArrowUp
              size={13}
            />

          </button>

        </div>

      </div>
    </footer>
  );
}














