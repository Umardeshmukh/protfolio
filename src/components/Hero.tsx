import React from 'react';
import { ArrowRight, ChevronRight, Terminal, Sparkles } from 'lucide-react';
import { InteractiveMeshCanvas } from './InteractiveMeshCanvas';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-[90px] pb-16 lg:py-24 bg-hero-glow bg-grid-pattern overflow-hidden">
      {/* Background subtle radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#7C5CFC]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status / Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12151A] border border-[#232730] text-xs text-[#A7ADB7]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]" />
              </span>
              <span>{PORTFOLIO_DATA.personal.status}</span>
            </div>

            {/* Main Display Heading */}
            <h1 className="text-[44px] sm:text-[56px] lg:text-[68px] xl:text-[72px] font-display font-semibold text-[#F5F7FA] tracking-[-0.04em] leading-[1.05] sm:leading-[1.0] text-balance">
              Building <span className="text-[#7C5CFC]">responsive web apps</span> & orchestrating client success.
            </h1>

            {/* Body Large Description */}
            <p className="text-base sm:text-lg lg:text-[18px] text-[#A7ADB7] leading-[1.7] max-w-2xl font-normal">
              Frontend Developer & Project Coordinator with 2+ years of experience delivering responsive React.js and Tailwind CSS applications, managing client communications, executive calendars, and remote cross-functional workflows.
            </p>

            {/* CTAs matching exact design system buttons */}
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
                className="text-sm font-medium text-[#A7ADB7] hover:text-[#F5F7FA] transition-colors duration-200 px-2 py-3"
              >
                Read Curriculum Vitae →
              </button>
            </div>

            {/* Quick Proof Metrics strip */}
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

          {/* Right Column: Interactive Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <InteractiveMeshCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};
