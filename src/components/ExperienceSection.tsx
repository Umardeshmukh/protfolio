import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ExperienceSection: React.FC = () => {
  // Store expanded state per experience item (opened by default)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    PORTFOLIO_DATA.experience.forEach((item) => {
      initial[item.id] = true;
    });
    return initial;
  });

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-40 border-t border-black/[0.05] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-[#b45309] font-semibold font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d97706]" />
            <span>03 — EXPERIENCE</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[48px] font-display font-bold text-[#0f172a] leading-[1.15] sm:leading-[1.1] tracking-[-0.03em]">
            Professional Experience & Milestones
          </h2>
          <p className="text-sm sm:text-lg text-[#475569] leading-[1.7] font-sans">
            Track record of developing responsive web applications and managing cross-functional remote project operations at iTUX Technologies.
          </p>
        </div>

        {/* Timeline Stack with Accordion Cards */}
        <div className="mt-10 sm:mt-16 space-y-4 sm:space-y-6">
          {PORTFOLIO_DATA.experience.map((item) => {
            const isExpanded = !!expandedItems[item.id];

            return (
              <div
                key={item.id}
                className="rounded-[18px] sm:rounded-[22px] bg-white border border-black/[0.06] transition-all duration-300 hover:border-black/[0.14] hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] shadow-[0_2px_18px_rgba(0,0,0,0.02)] relative overflow-hidden"
              >
                {/* Accordion Header Trigger */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-5 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] focus-visible:ring-offset-2"
                >
                  <div className="flex-1 space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#b45309] flex-wrap">
                      <div className="flex items-center gap-1.5 font-semibold">
                        <Briefcase className="w-3.5 h-3.5 text-[#d97706]" />
                        <span>{item.company}</span>
                      </div>
                      <span className="text-[#cbd5e1]">·</span>
                      <span className="text-[#64748b] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#b45309]" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-display font-bold text-[#0f172a] tracking-tight group-hover:text-[#b45309] transition-colors leading-snug">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2.5 self-start md:self-center shrink-0">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-[#475569] bg-[#f8fafc] border border-black/[0.08] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-sm">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#d97706]" />
                      <span>{item.period}</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#f8fafc] border border-black/[0.08] text-xs font-mono text-[#64748b] group-hover:text-[#0f172a] group-hover:border-black/[0.15] transition-all">
                      <span className="hidden sm:inline text-[11px] font-sans font-medium">
                        {isExpanded ? 'Collapse' : 'Expand'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 text-[#d97706] ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`content-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-10 sm:pb-10 pt-2 border-t border-black/[0.05]">
                        {/* Summary */}
                        <p className="text-xs sm:text-base text-[#475569] leading-[1.7] sm:leading-[1.75] font-sans">
                          {item.summary}
                        </p>

                        {/* Key Achievements */}
                        <div className="mt-5 space-y-3">
                          {item.achievements.map((ach, aIdx) => (
                            <div
                              key={aIdx}
                              className="flex items-start gap-3 text-xs sm:text-sm text-[#334155] font-sans"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{ach}</span>
                            </div>
                          ))}
                        </div>

                        {/* Stack Pills */}
                        <div className="mt-6 pt-5 border-t border-black/[0.05] flex flex-wrap gap-2">
                          {item.stack.map((st) => (
                            <span
                              key={st}
                              className="bg-white border border-black/[0.08] text-[#475569] rounded-full px-3 py-1 text-xs font-mono font-medium transition-all hover:border-[#0f172a] hover:text-[#0f172a] shadow-sm"
                            >
                              {st}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
