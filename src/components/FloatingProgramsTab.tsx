"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  GraduationCap,
  ChevronRight,
  BookOpen,
  Award,
} from "lucide-react";
import Link from "next/link";
import { programs } from "@/data/programs";

export default function FloatingProgramsTab() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =========================================================
          DESKTOP FLOATING PROGRAMS TAB
          ========================================================= */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Academic Programs"
        aria-expanded={isOpen}
        className="
          hidden lg:flex

          fixed
          left-0
          top-[46%]
          -translate-y-1/2

          z-[200]

          h-44
          w-[48px]

          items-center
          justify-center

          bg-navy-deep
          hover:bg-blue-royal

          text-white

          border-y
          border-r
          border-white/20

          border-l-0

          rounded-r-[22px]

          shadow-[4px_8px_25px_rgba(0,0,0,0.18)]

          transition-colors
          duration-300

          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-bright
          focus-visible:ring-offset-2

          cursor-pointer
          select-none
        "
      >
        <div
          className="
            flex
            items-center
            justify-center
            gap-3

            whitespace-nowrap

            rotate-180
          "
          style={{
            writingMode: "vertical-rl",
          }}
        >
          <GraduationCap
            size={17}
            strokeWidth={2}
          />

          <span
            className="
              text-[11px]
              font-bold
              tracking-[0.22em]
              uppercase
            "
          >
            Programs
          </span>
        </div>
      </button>

      {/* =========================================================
          MOBILE FLOATING BUTTON
          ========================================================= */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Academic Programs"
        aria-expanded={isOpen}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
        className="
          lg:hidden

          fixed
          bottom-6
          left-6

          z-[200]

          h-14
          w-14

          rounded-full

          bg-navy-deep
          text-white

          shadow-[0_10px_30px_rgba(0,0,0,0.25)]

          flex
          items-center
          justify-center

          border
          border-white/20

          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-bright
          focus-visible:ring-offset-2

          transition-colors
          duration-300

          hover:bg-blue-royal
        "
      >
        <GraduationCap
          size={24}
          strokeWidth={2}
        />
      </motion.button>

      {/* =========================================================
          DRAWER
          ========================================================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* =====================================================
                BACKDROP
                ===================================================== */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeDrawer}
              className="
                fixed
                inset-0
                z-[250]

                bg-navy-dark/50
                backdrop-blur-md
              "
            />

            {/* =====================================================
                LEFT DRAWER
                ===================================================== */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 260,
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Academic Programs"
              className="
                fixed
                top-0
                left-0

                z-[260]

                h-[100dvh]
                w-[88vw]
                max-w-[480px]

                bg-white

                shadow-[15px_0_50px_rgba(0,0,0,0.20)]

                flex
                flex-col

                overflow-hidden

                border-r
                border-gray-200

                text-navy-dark
              "
            >
              {/* =================================================
                  DRAWER HEADER
                  ================================================= */}
              <div
                className="
                  shrink-0
                  sticky
                  top-0
                  z-20

                  px-5
                  sm:px-6
                  py-5

                  bg-navy-deep
                  text-white

                  border-b
                  border-white/10
                "
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">

                    {/* Icon */}
                    <div
                      className="
                        shrink-0
                        h-11
                        w-11

                        rounded-xl

                        bg-blue-bright/15
                        border
                        border-blue-bright/30

                        flex
                        items-center
                        justify-center
                      "
                    >
                      <GraduationCap
                        size={24}
                        className="text-blue-bright"
                      />
                    </div>

                    {/* Heading */}
                    <div className="min-w-0">
                      <h2
                        className="
                          font-bold
                          text-base
                          sm:text-lg
                          tracking-wide
                          uppercase
                          truncate
                        "
                      >
                        Academic Programs
                      </h2>

                      <p className="text-[11px] sm:text-xs text-blue-light/80 mt-0.5">
                        St. Thomas College, Mattannur
                      </p>
                    </div>
                  </div>

                  {/* Close */}
                  <button
                    type="button"
                    onClick={closeDrawer}
                    aria-label="Close Academic Programs"
                    className="
                      shrink-0
                      h-10
                      w-10

                      rounded-full

                      flex
                      items-center
                      justify-center

                      text-white/80

                      hover:text-white
                      hover:bg-white/10

                      transition-all
                      duration-200

                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-bright
                    "
                  >
                    <X size={21} />
                  </button>
                </div>
              </div>

              {/* =================================================
                  DRAWER CONTENT
                  ================================================= */}
              <div
                className="
                  flex-1
                  overflow-y-auto

                  px-5
                  sm:px-6
                  py-6

                  space-y-8

                  scrollbar-thin
                  scrollbar-thumb-gray-300
                  scrollbar-track-transparent
                "
              >
                {/* =================================================
                    UNDERGRADUATE
                    ================================================= */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="
                        h-8
                        w-8
                        rounded-lg
                        bg-blue-royal/10
                        text-blue-royal

                        flex
                        items-center
                        justify-center
                      "
                    >
                      <BookOpen size={15} />
                    </div>

                    <div>
                      <h3
                        className="
                          text-[11px]
                          font-bold
                          text-blue-royal
                          uppercase
                          tracking-[0.18em]
                        "
                      >
                        Undergraduate
                      </h3>

                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                        UG Programs
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {programs.ug.map((p) => (
                      <motion.div
                        key={p.id}
                        whileHover={{ x: 3 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className="
                          group

                          p-4

                          bg-gray-50
                          hover:bg-blue-50

                          rounded-xl

                          border
                          border-gray-100
                          hover:border-blue-200

                          transition-colors
                          duration-200
                        "
                      >
                        <Link
                          href="/academics/programs"
                          onClick={closeDrawer}
                          className="block"
                        >
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-3
                            "
                          >
                            <span
                              className="
                                font-bold
                                text-sm
                                text-navy-deep
                                group-hover:text-blue-royal
                                transition-colors
                                duration-200
                              "
                            >
                              {p.name}
                            </span>

                            <ChevronRight
                              size={17}
                              className="
                                shrink-0
                                text-gray-400
                                group-hover:text-blue-royal
                                group-hover:translate-x-1
                                transition-all
                                duration-200
                              "
                            />
                          </div>
                        </Link>

                        {p.branches && p.branches.length > 0 && (
                          <div
                            className="
                              mt-3
                              ml-1
                              pl-3

                              border-l-2
                              border-blue-bright/30

                              space-y-1.5
                            "
                          >
                            {p.branches.map((branch, index) => (
                              <span
                                key={index}
                                className="
                                  block
                                  text-xs
                                  text-gray-500
                                  font-medium
                                "
                              >
                                <span className="text-blue-bright mr-1">
                                  •
                                </span>

                                {branch}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </section>

                

                {/* =================================================
                    CERTIFICATIONS
                    ================================================= */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="
                        h-8
                        w-8
                        rounded-lg
                        bg-blue-royal/10
                        text-blue-royal

                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Award size={15} />
                    </div>

                    <div>
                      <h3
                        className="
                          text-[11px]
                          font-bold
                          text-blue-royal
                          uppercase
                          tracking-[0.18em]
                        "
                      >
                        Certifications
                      </h3>

                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                        Short-Term Programs
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {programs.certificate.map((p) => (
                      <motion.div
                        key={p.id}
                        whileHover={{ x: 3 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        <Link
                          href="/academics/programs"
                          onClick={closeDrawer}
                          className="
                            group
                            block

                            p-4

                            bg-gray-50
                            hover:bg-blue-50

                            rounded-xl

                            border
                            border-gray-100
                            hover:border-blue-200

                            transition-all
                            duration-200
                          "
                        >
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-3
                            "
                          >
                            <span
                              className="
                                font-bold
                                text-sm
                                text-navy-deep
                                group-hover:text-blue-royal
                                transition-colors
                              "
                            >
                              {p.name}
                            </span>

                            <ChevronRight
                              size={17}
                              className="
                                shrink-0
                                text-gray-400
                                group-hover:text-blue-royal
                                group-hover:translate-x-1
                                transition-all
                              "
                            />
                          </div>

                          <p className="text-xs text-gray-500 mt-1.5">
                            {p.duration} • {p.degree}
                          </p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>

              {/* =================================================
                  DRAWER FOOTER
                  ================================================= */}
              <div
                className="
                  shrink-0

                  px-5
                  sm:px-6
                  py-4

                  bg-white

                  border-t
                  border-gray-200

                  flex
                  gap-3
                "
              >
                <Link
                  href="/admissions"
                  onClick={closeDrawer}
                  className="
                    flex-1

                    text-center

                    bg-blue-royal
                    hover:bg-blue-bright

                    text-white

                    py-3

                    rounded-xl

                    font-semibold
                    text-[11px]
                    tracking-[0.12em]
                    uppercase

                    transition-all
                    duration-200

                    hover:shadow-lg
                    hover:shadow-blue-royal/20

                    active:scale-[0.98]
                  "
                >
                  Apply Online
                </Link>

                <Link
                  href="/academics/programs"
                  onClick={closeDrawer}
                  className="
                    flex-1

                    text-center

                    bg-navy-deep
                    hover:bg-navy-dark

                    text-white

                    py-3

                    rounded-xl

                    font-semibold
                    text-[11px]
                    tracking-[0.12em]
                    uppercase

                    transition-all
                    duration-200

                    hover:shadow-lg
                    hover:shadow-navy-deep/20

                    active:scale-[0.98]
                  "
                >
                  View Details
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}