import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { MatrixText } from './MatrixText';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 lg:py-36 border-t border-[#191C22] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-[12px] uppercase tracking-[0.12em] text-[#7C5CFC] font-medium font-mono">
            <MatrixText text="04 — EXPERIENCE" trigger="view" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-semibold text-[#F5F7FA] leading-[1.1] tracking-[-0.03em]">
            Professional Experience & Milestones
          </h2>
          <p className="text-base sm:text-lg text-[#A7ADB7] leading-[1.6]">
            Track record of developing responsive web applications and managing cross-functional remote project operations at iTUX Technologies.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="mt-16 space-y-8">
          {PORTFOLIO_DATA.experience.map((item, index) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-[16px] bg-[#0D0F12] border border-[#232730] transition-all duration-300 hover:-translate-y-1 hover:border-[#303540] hover:shadow-[0_20px_60px_rgba(124,92,252,0.08)]"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#191C22] pb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#7C5CFC]">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{item.company}</span>
                    <span className="text-[#6F7682]">·</span>
                    <span className="text-[#A7ADB7] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#F5F7FA] mt-1.5">
                    {item.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-[#A7ADB7] bg-[#12151A] border border-[#232730] px-3 py-1.5 rounded-full self-start">
                  <Calendar className="w-3.5 h-3.5 text-[#7C5CFC]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-5 text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
                {item.summary}
              </p>

              {/* Key Achievements */}
              <div className="mt-5 space-y-2.5">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A7ADB7]">
                    <CheckCircle2 className="w-4 h-4 text-[#7C5CFC] shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Stack Pills */}
              <div className="mt-6 pt-5 border-t border-[#191C22] flex flex-wrap gap-2">
                {item.stack.map((st) => (
                  <span
                    key={st}
                    className="bg-[#12151A] border border-[#232730] text-[#A7ADB7] rounded-full px-[10px] py-[6px] text-xs font-medium"
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
