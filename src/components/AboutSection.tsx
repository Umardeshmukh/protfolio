import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ShieldCheck, Zap, Cpu, Terminal, ArrowUpRight } from 'lucide-react';
import { MatrixText } from './MatrixText';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-36 border-t border-[#191C22] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-[12px] uppercase tracking-[0.12em] text-[#7C5CFC] font-medium font-mono">
            <MatrixText text="01 — ABOUT" trigger="view" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-semibold text-[#F5F7FA] leading-[1.1] tracking-[-0.03em]">
            Bridging Frontend Code & Operational Delivery
          </h2>
          <p className="text-base sm:text-lg text-[#A7ADB7] leading-[1.6]">
            Experienced in building responsive React.js and Tailwind CSS interfaces while coordinating complex client milestones, managing documentation, and ensuring frictionless remote teamwork.
          </p>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Approach */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-[16px] bg-[#0D0F12] border border-[#232730] hover:-translate-y-1 hover:border-[#303540] hover:shadow-[0_20px_60px_rgba(124,92,252,0.08)] transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#F5F7FA] mb-4">
                Dual Expertise in Development & Project Coordination
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-[#A7ADB7] leading-[1.7]">
                <p>
                  At iTUX Technologies, I operate at the intersection of frontend web engineering and administrative management. I develop responsive, accessible user interfaces using React.js, JavaScript, and Tailwind CSS while simultaneously steering multiple client projects toward on-time completion.
                </p>
                <p>
                  My background spans client communication, requirement gathering, calendar operations, CRM updates, advanced Excel reporting, and authoring Standard Operating Procedures (SOPs). I believe great digital products require not just clean components, but also crystal-clear communication and operational discipline.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#191C22] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#A7ADB7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC]" />
                  <span>Aurangabad, India</span>
                </div>
                <div className="flex items-center gap-2 text-[#A7ADB7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                  <span>2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-[#A7ADB7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                  <span>B.Tech in Computer Science (2024)</span>
                </div>
              </div>
            </div>

            {/* Invariants Bar */}
            <div className="p-6 rounded-[16px] bg-[#0D0F12] border border-[#232730] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-[10px] bg-[#12151A] text-[#7C5CFC] border border-[#232730]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#F5F7FA]">Development & Coordination Ethos</div>
                  <div className="text-xs text-[#6F7682]">Responsive design, clear SOPs & proactive client engagement</div>
                </div>
              </div>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7C5CFC] hover:text-[#9278FF] transition-colors whitespace-nowrap"
              >
                <span>Inspect Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Architectural Ethos Cards */}
          <div className="lg:col-span-5 space-y-4">
            {PORTFOLIO_DATA.architectureEthos.map((ethos, index) => (
              <div
                key={index}
                className="p-6 rounded-[16px] bg-[#0D0F12] border border-[#232730] hover:-translate-y-1 hover:border-[#303540] hover:shadow-[0_20px_60px_rgba(124,92,252,0.08)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#7C5CFC] font-semibold tracking-wider">
                    ETHOS {ethos.number}
                  </span>
                  {index === 0 && <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />}
                  {index === 1 && <Zap className="w-4 h-4 text-[#FBBF24]" />}
                  {index === 2 && <Cpu className="w-4 h-4 text-[#9278FF]" />}
                </div>
                <h4 className="text-base sm:text-lg font-display font-semibold text-[#F5F7FA] mb-2">
                  {ethos.title}
                </h4>
                <p className="text-sm text-[#A7ADB7] leading-[1.6]">
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
