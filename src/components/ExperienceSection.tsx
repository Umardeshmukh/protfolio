import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-28 lg:py-40 border-t border-black/[0.05] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-[12px] uppercase tracking-[0.16em] text-[#b45309] font-semibold font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d97706]" />
            <span>03 — EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-bold text-[#0f172a] leading-[1.1] tracking-[-0.03em]">
            Professional Experience & Milestones
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-[1.7] font-sans">
            Track record of developing responsive web applications and managing cross-functional remote project operations at iTUX Technologies.
          </p>
        </div>

        {/* Timeline Stack with Royal White Space */}
        <div className="mt-16 space-y-8">
          {PORTFOLIO_DATA.experience.map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-10 rounded-[22px] bg-white border border-black/[0.06] transition-all duration-300 hover:border-black/[0.14] hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] shadow-[0_2px_18px_rgba(0,0,0,0.02)] relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-black/[0.05] pb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#b45309]">
                    <Briefcase className="w-3.5 h-3.5 text-[#d97706]" />
                    <span className="font-semibold">{item.company}</span>
                    <span className="text-[#cbd5e1]">·</span>
                    <span className="text-[#64748b] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#7c3aed]" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0f172a] mt-2 tracking-tight">
                    {item.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-[#475569] bg-[#f8fafc] border border-black/[0.08] px-3.5 py-1.5 rounded-full self-start shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-5 text-sm sm:text-base text-[#475569] leading-[1.75] font-sans">
                {item.summary}
              </p>

              {/* Key Achievements */}
              <div className="mt-5 space-y-3">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#334155] font-sans">
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
                    className="bg-white border border-black/[0.08] text-[#475569] rounded-full px-3 py-1 text-xs font-mono font-medium transition-all hover:border-[#7c3aed] hover:text-[#7c3aed] shadow-sm"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
