import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ShieldCheck, Zap, Cpu, Terminal, ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AboutSection: React.FC = () => {
  // Accordion state for the main story card
  const [isStoryExpanded, setIsStoryExpanded] = useState<boolean>(false);

  // Accordion state for individual architectural ethos cards
  const [expandedEthos, setExpandedEthos] = useState<Record<number, boolean>>({});

  const toggleEthos = (index: number) => {
    setExpandedEthos((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-40 border-t border-black/[0.05] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Luxurious Airiness */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-[#b45309] font-semibold font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d97706]" />
            <span>01 — ABOUT</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[48px] font-display font-bold text-[#0f172a] leading-[1.15] sm:leading-[1.1] tracking-[-0.03em]">
            Bridging Frontend Code & Operational Delivery
          </h2>
          <p className="text-sm sm:text-lg text-[#475569] leading-[1.7] font-sans">
            Experienced in building responsive React.js and Tailwind CSS interfaces while coordinating complex client milestones, managing documentation, and ensuring frictionless remote teamwork.
          </p>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Main Story & Approach (Accordion) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="rounded-[20px] sm:rounded-[22px] bg-white border border-black/[0.06] hover:border-black/[0.12] shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300 relative overflow-hidden">
              {/* Accordion Header Trigger */}
              <button
                type="button"
                onClick={() => setIsStoryExpanded(!isStoryExpanded)}
                aria-expanded={isStoryExpanded}
                className="w-full text-left p-5 sm:p-8 md:p-10 flex items-start justify-between gap-3 sm:gap-4 cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] focus-visible:ring-offset-2"
              >
                <div className="space-y-1.5 sm:space-y-2 flex-1">
                  <div className="text-[11px] sm:text-xs font-mono text-[#b45309] font-medium tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
                    <span>BACKGROUND & EXPERTISE</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-display font-bold text-[#0f172a] tracking-tight group-hover:text-[#b45309] transition-colors leading-snug">
                    Dual Expertise in Development & Project Coordination
                  </h3>
                  {!isStoryExpanded && (
                    <p className="text-xs sm:text-sm text-[#64748b] font-sans line-clamp-2 pt-1">
                      Operating at the intersection of responsive UI engineering, administrative operations, and client communication.
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#f8fafc] border border-black/[0.08] text-xs font-mono text-[#64748b] group-hover:text-[#0f172a] group-hover:border-black/[0.15] shrink-0 mt-1 transition-all">
                  <span className="hidden sm:inline text-[11px] font-sans font-medium">
                    {isStoryExpanded ? 'Collapse' : 'Expand'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 text-[#d97706] ${
                      isStoryExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Collapsible Story Content */}
              <AnimatePresence initial={false}>
                {isStoryExpanded && (
                  <motion.div
                    key="story-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 sm:px-10 sm:pb-10 pt-2 border-t border-black/[0.05]">
                      <div className="space-y-3 sm:space-y-4 text-xs sm:text-base text-[#475569] leading-[1.7] sm:leading-[1.75] font-sans">
                        <p>
                          At iTUX Technologies, I operate at the intersection of frontend web engineering and administrative management. I develop responsive, accessible user interfaces using React.js, JavaScript, and Tailwind CSS while simultaneously steering multiple client projects toward on-time completion.
                        </p>
                        <p>
                          My background spans client communication, requirement gathering, calendar operations, CRM updates, advanced Excel reporting, and authoring Standard Operating Procedures (SOPs). I believe great digital products require not just clean components, but also crystal-clear communication and operational discipline.
                        </p>
                      </div>

                      <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-black/[0.05] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                        <div className="flex items-center gap-2 text-[#64748b]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
                          <span>Aurangabad, India</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#64748b]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#b45309]" />
                          <span>2+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#64748b]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                          <span>B.Tech in Computer Science (2024)</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Invariants Bar - Luxury Crystal Card */}
            <div className="p-4 sm:p-6 rounded-[18px] sm:rounded-[20px] bg-white border border-black/[0.06] shadow-[0_2px_16px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-3.5">
                <div className="p-2.5 sm:p-3 rounded-[12px] sm:rounded-[14px] bg-[#b45309]/10 text-[#b45309] border border-[#b45309]/20 shrink-0">
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[#0f172a] font-display">Development & Coordination Ethos</div>
                  <div className="text-[11px] sm:text-xs text-[#64748b] font-sans mt-0.5">Responsive design, clear SOPs & proactive client engagement</div>
                </div>
              </div>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f172a] hover:text-[#b45309] transition-colors whitespace-nowrap font-sans pt-1 sm:pt-0 self-end sm:self-auto"
              >
                <span>Inspect Projects</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Architectural Ethos Cards (Accordions) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            {PORTFOLIO_DATA.architectureEthos.map((ethos, index) => {
              const isExpanded = !!expandedEthos[index];

              return (
                <div
                  key={index}
                  className="rounded-[18px] sm:rounded-[20px] bg-white border border-black/[0.06] hover:border-black/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Ethos Accordion Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleEthos(index)}
                    aria-expanded={isExpanded}
                    className="w-full text-left p-4 sm:p-6 md:p-7 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] focus-visible:ring-offset-2"
                  >
                    <div className="flex-1 space-y-1 sm:space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#b45309] font-semibold tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
                        <span>ETHOS {ethos.number}</span>
                        {index === 0 && <ShieldCheck className="w-3.5 h-3.5 text-[#d97706] ml-1" />}
                        {index === 1 && <Zap className="w-3.5 h-3.5 text-[#b45309] ml-1" />}
                        {index === 2 && <Cpu className="w-3.5 h-3.5 text-[#0284c7] ml-1" />}
                      </div>
                      <h4 className="text-sm sm:text-lg font-display font-bold text-[#0f172a] tracking-tight group-hover:text-[#b45309] transition-colors">
                        {ethos.title}
                      </h4>
                    </div>

                    <div className="p-1.5 rounded-full bg-[#f8fafc] border border-black/[0.08] text-[#64748b] group-hover:text-[#0f172a] shrink-0 transition-all">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 text-[#d97706] ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Collapsible Ethos Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key={`ethos-content-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-7 sm:pb-7 pt-1 border-t border-black/[0.05]">
                          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                            {ethos.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
