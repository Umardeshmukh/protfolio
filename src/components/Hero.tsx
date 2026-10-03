import React, { useState } from 'react';
import { ArrowRight, FileText, CheckCircle2, MapPin, Mail, Phone, Code2, Briefcase, User } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

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
              <span>{PORTFOLIO_DATA.personal.status}</span>
            </div>

            {/* Main Display Heading (Space Grotesk, 72px scale, controlled accent) */}
            <h1 className="text-[42px] sm:text-[56px] lg:text-[66px] xl:text-[72px] font-display font-semibold text-[#F5F7FA] tracking-[-0.04em] leading-[1.05] sm:leading-[1.0] text-balance">
              Building <span className="text-[#7C5CFC]">responsive web apps</span> & orchestrating client success.
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
            <div className="relative w-full max-w-[400px] group">
              {/* Subtle ambient purple glow backlight behind the portrait */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#7C5CFC]/25 via-[#9278FF]/15 to-transparent rounded-[26px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Portrait Container with dark border & surface */}
              <div className="relative rounded-[22px] bg-[#0D0F12] border border-[#232730] p-3 sm:p-3.5 overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
                {/* Image Frame with gradient blend overlays */}
                <div className="relative w-full aspect-[3/4] rounded-[16px] overflow-hidden bg-[#08090B]">
                  {!imageError ? (
                    <img
                      src="IMG_20230818_000832_0929.jpg"
                      alt="Mohammed Umer Deshmukh - Frontend Developer & Project Coordinator"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.98] transition-all duration-700 ease-out group-hover:scale-[1.02]"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Stylized fallback portrait container if direct blob is unavailable */
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

                  {/* Seamless gradient blending overlays that fade the photo edges into the #0D0F12 card background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/35 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#08090B]/30 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/90 to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090B]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#F5F7FA]">
                    <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span>iTUX Technologies</span>
                  </div>

                  {/* Floating Bottom Card Overlaid on Image */}
                  <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-[12px] bg-[#08090B]/90 backdrop-blur-md border border-[#232730] space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-display font-semibold text-[#F5F7FA]">
                        Mohammed Umer Deshmukh
                      </span>
                      <span className="font-mono text-[10px] text-[#4ADE80]">Active</span>
                    </div>
                    <p className="text-[11px] text-[#A7ADB7] leading-tight">
                      Frontend Developer & Project Coordinator · Remote
                    </p>
                  </div>
                </div>

                {/* Under-Card Quick Facts Strip */}
                <div className="mt-3 px-2 flex items-center justify-between text-xs font-mono text-[#6F7682]">
                  <span className="flex items-center gap-1 text-[#A7ADB7]">
                    <span className="text-[#7C5CFC]">📍</span>
                    <span>Aurangabad, India</span>
                  </span>
                  <span className="text-[#4ADE80]">● Open to Remote Roles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
