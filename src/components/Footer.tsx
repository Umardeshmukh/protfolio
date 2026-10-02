import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#191C22] bg-[#08090B] py-12 text-[#A7ADB7]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Identity and copyright */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-semibold text-[#F5F7FA] font-display flex items-center justify-center sm:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7C5CFC]" />
            <span>Mohammed Umer Deshmukh</span>
            <span className="text-xs text-[#6F7682] font-normal font-sans">
              — Frontend Developer & Project Coordinator
            </span>
          </div>
          <p className="text-xs text-[#6F7682]">
            Crafted with React.js, Tailwind CSS, Space Grotesk, and Inter.
          </p>
        </div>

        {/* Center: Clean links */}
        <div className="flex items-center gap-6 text-xs font-medium">
          <a href="#about" className="hover:text-[#F5F7FA] transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-[#F5F7FA] transition-colors">
            Projects
          </a>
          <a href="#architecture" className="hover:text-[#F5F7FA] transition-colors">
            Architecture
          </a>
          <a href="#experience" className="hover:text-[#F5F7FA] transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-[#F5F7FA] transition-colors">
            Contact
          </a>
        </div>

        {/* Right: Social & Back to top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6F7682] hover:text-[#F5F7FA] transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="text-[#6F7682] hover:text-[#F5F7FA] transition-colors"
              aria-label="Email"
            >
              <span className="text-xs font-mono">{PORTFOLIO_DATA.personal.email}</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-[8px] bg-[#0D0F12] border border-[#232730] text-[#A7ADB7] hover:text-[#F5F7FA] hover:border-[#303540] transition-colors"
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
