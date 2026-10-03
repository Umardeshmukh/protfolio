import React, { useState } from 'react';
import { ArrowRight, FileText, CheckCircle2, MapPin, Mail, Phone, Code2, Briefcase, User } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { MatrixText } from './MatrixText';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-[90px] pb-16 lg:py-24 bg-hero-glow bg-grid-pattern overflow-hidden">
      {/* Background subtle radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#7C5CFC]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Main Editorial Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status / Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12151A] border border-[#232730] text-xs text-[#A7ADB7]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]" />
              </span>
              <MatrixText text={PORTFOLIO_DATA.personal.status} trigger="both" revealSpeed={0.4} />
            </div>

            {/* Main Display Heading (Space Grotesk, 72px scale, controlled accent) */}
            <h1 className="text-[42px] sm:text-[56px] lg:text-[66px] xl:text-[72px] font-display font-semibold text-[#F5F7FA] tracking-[-0.04em] leading-[1.05] sm:leading-[1.0] text-balance">
              Building{' '}
              <MatrixText
                text="responsive web apps"
                trigger="view"
                scrambleClassName="text-[#A996FF]"
                className="text-[#7C5CFC]"
                revealSpeed={0.35}
              />{' '}
              & orchestrating client success.
            </h1>

            {/* Body Large Description (18px, 1.7 line-height) */}
            <p className="text-base sm:text-lg lg:text-[18px] text-[#A7ADB7] leading-[1.7] max-w-2xl font-normal">
              Frontend Developer & Project Coordinator with 2+ years of experience delivering responsive React.js and Tailwind CSS applications, managing client communications, executive calendars, and remote cross-functional workflows.
            </p>

            {/* Primary & Secondary Action Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#7C5CFC] px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9278FF]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-[10px] border border-[#303540] bg-transparent px-5 py-3 text-sm font-medium text-[#F5F7FA] transition-all duration-200 hover:bg-[#12151A] hover:border-[#454B55]"
              >
                <span>About & Core Skills</span>
              </a>

              <button
                onClick={onOpenResume}
                className="text-sm font-medium text-[#A7ADB7] hover:text-[#F5F7FA] transition-colors duration-200 px-2 py-3 inline-flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4" />
                <span>Read Curriculum Vitae →</span>
              </button>
            </div>

            {/* Proof Metrics Strip */}
            <div className="pt-8 border-t border-[#191C22] grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PORTFOLIO_DATA.metrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-display font-semibold text-xl sm:text-2xl text-[#F5F7FA] tabular-nums tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs text-[#6F7682] leading-tight">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Portrait Blended into the Dark Visual System */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] group">
              {/* Dual-layer ambient purple/indigo glow backlights behind the portrait */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#7C5CFC]/30 via-[#4F46E5]/20 to-[#2563EB]/10 rounded-[30px] blur-3xl opacity-70 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-700 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#7C5CFC]/15 rounded-full blur-[80px] pointer-events-none" />

              {/* Portrait Container with dark border & technical surface */}
              <div className="relative rounded-[24px] bg-[#0D0F12] border border-[#232730] p-3 sm:p-4 overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#303540] hover:shadow-[0_24px_80px_rgba(124,92,252,0.14)]">
                
                {/* HUD Corner Reticles for High-Tech Aesthetic */}
                <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#7C5CFC]/60 rounded-tl pointer-events-none z-20" />
                <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#7C5CFC]/60 rounded-tr pointer-events-none z-20" />
                <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#7C5CFC]/60 rounded-bl pointer-events-none z-20" />
                <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#7C5CFC]/60 rounded-br pointer-events-none z-20" />

                {/* Image Frame with gradient blend overlays */}
                <div className="relative w-full aspect-[4/5] rounded-[18px] overflow-hidden bg-[#08090B]">
                  {!imageError ? (
                    <img
                      src="/heroimg.jpg"
                      alt="Mohammed Umer Deshmukh - Frontend Developer & Project Coordinator"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[center_14%] filter contrast-[1.08] brightness-[0.98] saturate-[1.05] transition-all duration-700 ease-out group-hover:scale-[1.03]"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Stylized fallback portrait container if image fails to load */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#12151A] via-[#0D0F12] to-[#08090B] text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
                      <div className="w-24 h-24 rounded-full bg-[#171A20] border-2 border-[#7C5CFC] flex items-center justify-center text-[#7C5CFC] mb-4 shadow-[0_0_30px_rgba(124,92,252,0.3)]">
                        <span className="font-display font-bold text-3xl text-[#F5F7FA]">MD</span>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-[#F5F7FA]">
                        Mohammed Umer Deshmukh
                      </h3>
                      <p className="text-xs text-[#7C5CFC] font-mono mt-1">
                        Frontend Developer & Project Coordinator
                      </p>
                      <p className="text-xs text-[#A7ADB7] mt-3 max-w-[260px] leading-relaxed">
                        2+ years experience in React.js, Tailwind CSS, Python & Administrative Management
                      </p>
                    </div>
                  )}

                  {/* Seamless gradient blending overlays that integrate the photo into the dark palette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#08090B]/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#08090B] via-[#08090B]/85 to-transparent pointer-events-none" />

                  {/* Top Floating Glass Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#08090B]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#F5F7FA] shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                      <MatrixText text="Available for Hire" trigger="hover" />
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#08090B]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#A7ADB7] shadow-md cursor-pointer hover:border-[#7C5CFC]/50 transition-colors">
                      <Code2 className="w-3 h-3 text-[#7C5CFC]" />
                      <MatrixText text="React · TS" trigger="hover" />
                    </div>
                  </div>

                  {/* Floating Bottom Glass Card Overlaid on Image */}
                  <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-[14px] bg-[#0D0F12]/85 backdrop-blur-md border border-[#232730] space-y-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-display font-semibold text-[#F5F7FA] text-[13px] tracking-tight flex items-center gap-1.5">
                        <MatrixText text="Mohammed Umer Deshmukh" trigger="hover" revealSpeed={0.4} />
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7C5CFC]" />
                      </span>
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/20 font-medium">
                        Active
                      </span>
                    </div>

                    <p className="text-[11px] text-[#A7ADB7] leading-tight">
                      <MatrixText text="Frontend Developer & Project Coordinator · iTUX Tech" trigger="hover" revealSpeed={0.4} />
                    </p>

                    <div className="pt-1 border-t border-[#191C22] flex items-center justify-between text-[10px] font-mono text-[#6F7682]">
                      <span className="flex items-center gap-1 text-[#A7ADB7]">
                        <span className="text-[#7C5CFC]">📍</span>
                        <span>Aurangabad, IN</span>
                      </span>
                      <span className="text-[#A7ADB7]">
                        2+ Yrs Experience
                      </span>
                    </div>
                  </div>
                </div>

                {/* Under-Card Quick Highlights Strip */}
                <div className="mt-3 px-1.5 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[#A7ADB7]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC]" />
                    <span>B.Tech CS (2024)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#4ADE80]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span>100% Delivery Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
