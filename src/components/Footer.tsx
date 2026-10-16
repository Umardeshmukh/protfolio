import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/[0.05] bg-[#FAFAF9] py-12 sm:py-16 text-[#64748b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity and copyright */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-sm font-bold text-[#0f172a] font-display flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d97706]" />
            <span>Mohammed Umer Deshmukh</span>
            <span className="text-xs text-[#94a3b8] font-normal font-sans">
              — Frontend Developer & Project Coordinator
            </span>
          </div>
        </div>

        {/* Center: Clean links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium font-mono">
          <a href="#about" className="text-[#64748b] hover:text-[#0f172a] transition-colors py-1">
            About
          </a>
          <a href="#projects" className="text-[#64748b] hover:text-[#0f172a] transition-colors py-1">
            Projects
          </a>
          <a href="#architecture" className="text-[#64748b] hover:text-[#0f172a] transition-colors py-1">
            Architecture
          </a>
          <a href="#experience" className="text-[#64748b] hover:text-[#0f172a] transition-colors py-1">
            Experience
          </a>
          <a href="#contact" className="text-[#64748b] hover:text-[#0f172a] transition-colors py-1">
            Contact
          </a>
        </div>

        {/* Right: Social & Back to top */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2.5">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#0f172a] transition-colors p-2 rounded-lg hover:bg-black/[0.03]"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#0a66c2] transition-colors p-2 rounded-lg hover:bg-black/[0.03]"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="text-[#64748b] hover:text-[#0f172a] transition-colors"
              aria-label="Email"
            >
              <span className="text-xs font-mono">{PORTFOLIO_DATA.personal.email}</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 sm:p-2.5 rounded-[10px] bg-white border border-black/[0.08] text-[#475569] hover:text-[#0f172a] hover:border-black/[0.15] transition-colors shadow-sm"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
