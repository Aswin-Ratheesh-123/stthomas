'use client';

import SectionHeading from '@/components/SectionHeading';
import { Cpu, Award, FileText, Bookmark, CheckCircle2 } from 'lucide-react';
import { researchCenters, publicationsList, patentsList } from '@/data/research';

export default function ResearchPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Granted': return 'bg-green-600/10 text-green-600';
      case 'Published': return 'bg-blue-bright/10 text-blue-bright';
      default: return 'bg-yellow-600/10 text-yellow-600';
    }
  };

  return (
    <div className="flex flex-col w-full text-navy-dark">
      {/* Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest  text-blue-bright mb-3 block">
            Scientific Advancements
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none">
            Research & Innovation
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Explore our research centers, patent registry, and peer-reviewed journals published by academic staff and students.
          </p>
        </div>
      </section>

      {/* 2. Research Centers */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Research facilities"
            title="Institutional Research Centers"
            subtitle="STCET hosts dedicated labs targeting clean energy, microelectronics, and AI diagnostic modules."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchCenters.map((center, idx) => (
              <div
                key={idx}
                className="bg-blue-light/35 border border-gray-100 p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-blue-royal/5 text-blue-royal rounded-lg flex items-center justify-center">
                    <Cpu size={20} />
                  </div>
                  <h3 className="font-extrabold text-navy-deep text-base sm:text-lg uppercase leading-snug">
                    {center.name}
                  </h3>
                  <p className="text-[10px] uppercase font-black tracking-wider text-blue-royal">
                    Dept: {center.department}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                    {center.focusArea}
                  </p>
                </div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-6 border-t border-gray-200/50 pt-4">
                  <strong>Partner:</strong> {center.collaborators}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Patents list */}
      <section className="py-20 bg-blue-light/10 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Patents Registry"
            title="Engineering Patent Portfolio"
            subtitle="Explore research outputs developed on campus and patented by our departments."
            align="center"
          />

          <div className="space-y-4">
            {patentsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left shadow-sm"
              >
                <div className="space-y-1.5 min-w-0">
                  <span className={`inline-block text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${getStatusColor(item.status)}`}>
                    Patent {item.status} ({item.year})
                  </span>
                  <h4 className="font-extrabold text-sm sm:text-base text-navy-deep uppercase leading-tight truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-semibold">
                    Inventors: {item.inventors} | Application: {item.applicationNumber}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Journal Publications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Scientific Papers"
            title="Peer-Reviewed Publications"
            subtitle="Summary of recent research papers published by our faculty in prestigious SCI, Springer, and IEEE journals."
            align="center"
          />

          <div className="space-y-6">
            {publicationsList.map((paper, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 border border-gray-100 rounded-xl flex gap-4 text-left hover:border-blue-bright/10 hover:shadow-md transition-all duration-300"
              >
                <div className="p-2.5 bg-blue-royal/5 text-blue-royal rounded-lg shrink-0 h-fit">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-navy-deep leading-snug mb-2">
                    &ldquo;{paper.title}&rdquo;
                  </h4>
                  <p className="text-xs text-gray-500 font-semibold">
                    Authors: {paper.authors}
                  </p>
                  <p className="text-[10px] text-blue-royal uppercase font-bold tracking-widest mt-1">
                    Journal: {paper.journal} ({paper.year})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
