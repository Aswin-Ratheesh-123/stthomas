'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote, ArrowRight, Award, Users, Globe2, Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { alumniProfiles, alumniStats } from '@/data/alumni';

export default function AlumniSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-light/50 to-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-royal/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-bright/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <SectionHeading
            label="Alumni Network"
            title="Our Graduates Rule The Tech & Corporate Frontiers"
            subtitle="STCET graduates are breaking boundaries worldwide—leading software divisions, steering global infrastructure projects, and defining academic research."
          />
          <div className="shrink-0 pt-2">
            <Link
              href="/alumni"
              className="inline-flex items-center gap-2 border-2 border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all duration-300"
            >
              Alumni Association <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {alumniStats.map((stat, index) => {
            const getIcon = (id: string) => {
              switch (id) {
                case 'graduates':
                  return <Users className="text-blue-royal shrink-0" size={24} />;
                case 'chapters':
                  return <Award className="text-blue-royal shrink-0" size={24} />;
                case 'countries':
                  return <Globe2 className="text-blue-royal shrink-0" size={24} />;
                default:
                  return <Briefcase className="text-blue-royal shrink-0" size={24} />;
              }
            };

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center shrink-0">
                  {getIcon(stat.id)}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-navy-deep leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {alumniProfiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-100/80 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between relative"
            >
              {/* Quote Mark Decoration */}
              <Quote
                size={54}
                className="absolute top-6 right-8 text-blue-royal/5 group-hover:text-blue-royal/10 transition-colors pointer-events-none"
              />

              {/* Quote Content */}
              <div className="relative z-10 mb-8">
                <p className="text-gray-600 text-sm sm:text-base italic leading-relaxed font-medium">
                  &ldquo;{profile.quote}&rdquo;
                </p>
              </div>

              {/* Alumni Metadata */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-royal/20 shrink-0">
                    <Image
                      src={profile.imageUrl}
                      alt={profile.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-deep text-base">
                      {profile.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {profile.role} at <span className="font-bold text-blue-royal">{profile.company}</span>
                    </p>
                    <span className="inline-block mt-1 text-[9px] font-black tracking-widest text-gray-400 uppercase">
                      {profile.department.split(' & ')[0]} | Batch of {profile.batch}
                    </span>
                  </div>
                </div>

                {profile.linkedInUrl && (
                  <Link
                    href={profile.linkedInUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-blue-light hover:bg-blue-royal text-blue-royal hover:text-white transition-all flex items-center justify-center shrink-0"
                    aria-label={`${profile.name}'s LinkedIn profile`}
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
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Invitation Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy-deep text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl"
        >
          {/* Background overlay patterns */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1677ff_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-black tracking-widest text-blue-bright uppercase mb-3 block">
                Stay Connected
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                Are you a Proud Alumnus of STCET?
              </h3>
              <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                Join our official network registry to re-connect with batchmates, mentor current tech students, get invitations to campus events, and share your industry achievements.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 shrink-0 justify-center">
              <Link
                href="/alumni/register"
                className="bg-blue-royal hover:bg-blue-bright text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg transition-colors cursor-pointer active:scale-95"
              >
                Register In Network
              </Link>
              <Link
                href="/alumni/portal"
                className="bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-colors cursor-pointer active:scale-95"
              >
                Alumni Portal
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
