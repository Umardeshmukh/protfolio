import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ShieldCheck, Zap, Cpu, Terminal, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 lg:py-40 border-t border-black/[0.05] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header with Luxurious Airiness */}
        <div className="max-w-3xl space-y-4">
          <div className="text-[12px] uppercase tracking-[0.16em] text-[#b45309] font-semibold font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d97706]" />
            <span>01 — ABOUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-bold text-[#0f172a] leading-[1.1] tracking-[-0.03em]">
            Bridging Frontend Code & Operational Delivery
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-[1.7] font-sans">
            Experienced in building responsive React.js and Tailwind CSS interfaces while coordinating complex client milestones, managing documentation, and ensuring frictionless remote teamwork.
          </p>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Approach */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-[22px] bg-white border border-black/[0.06] hover:border-black/[0.12] shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300 relative overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0f172a] mb-5 tracking-tight">
                Dual Expertise in Development & Project Coordination
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-[1.75] font-sans">
                <p>
                  At iTUX Technologies, I operate at the intersection of frontend web engineering and administrative management. I develop responsive, accessible user interfaces using React.js, JavaScript, and Tailwind CSS while simultaneously steering multiple client projects toward on-time completion.
                </p>
                <p>
                  My background spans client communication, requirement gathering, calendar operations, CRM updates, advanced Excel reporting, and authoring Standard Operating Procedures (SOPs). I believe great digital products require not just clean components, but also crystal-clear communication and operational discipline.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-black/[0.05] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#64748b]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
                  <span>Aurangabad, India</span>
                </div>
                <div className="flex items-center gap-2 text-[#64748b]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
                  <span>2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-[#64748b]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                  <span>B.Tech in Computer Science (2024)</span>
                </div>
              </div>
            </div>

            {/* Invariants Bar - Luxury Crystal Card */}
            <div className="p-6 rounded-[20px] bg-white border border-black/[0.06] shadow-[0_2px_16px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-[14px] bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0f172a] font-display">Development & Coordination Ethos</div>
                  <div className="text-xs text-[#64748b] font-sans mt-0.5">Responsive design, clear SOPs & proactive client engagement</div>
                </div>
              </div>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f172a] hover:text-[#7c3aed] transition-colors whitespace-nowrap font-sans"
              >
                <span>Inspect Projects</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Architectural Ethos Cards */}
          <div className="lg:col-span-5 space-y-4">
            {PORTFOLIO_DATA.architectureEthos.map((ethos, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-[20px] bg-white border border-black/[0.06] hover:border-black/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-mono text-xs text-[#b45309] font-semibold tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
                    ETHOS {ethos.number}
                  </span>
                  {index === 0 && <ShieldCheck className="w-4 h-4 text-[#d97706]" />}
                  {index === 1 && <Zap className="w-4 h-4 text-[#7c3aed]" />}
                  {index === 2 && <Cpu className="w-4 h-4 text-[#0284c7]" />}
                </div>
                <h4 className="text-base sm:text-lg font-display font-bold text-[#0f172a] mb-2 tracking-tight">
                  {ethos.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                  {ethos.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
