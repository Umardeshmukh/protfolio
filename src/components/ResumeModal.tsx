import React, { useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Download, Printer, Mail, MapPin, Phone, Github, Award, BookOpen, Briefcase, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#08090B]/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#0D0F12] border border-[#232730] rounded-[24px] shadow-[0_24px_80px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#191C22]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7C5CFC]" />
            <h3 className="text-base font-semibold text-[#F5F7FA]">Curriculum Vitae — {PORTFOLIO_DATA.personal.name}</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-[#303540] bg-[#12151A] text-xs text-[#A7ADB7] hover:text-[#F5F7FA] hover:border-[#454B55] transition-colors"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-[8px] text-[#A7ADB7] hover:text-[#F5F7FA] hover:bg-[#12151A] transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-7 bg-[#0D0F12] text-[#F5F7FA]">
          {/* Header Contact Block */}
          <div className="border-b border-[#191C22] pb-6 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F7FA]">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <span className="text-xs font-mono text-[#7C5CFC]">
                {PORTFOLIO_DATA.personal.role}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#A7ADB7]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#7C5CFC]" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#7C5CFC]" />
                {PORTFOLIO_DATA.personal.phone}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#7C5CFC]" />
                {PORTFOLIO_DATA.personal.email}
              </span>
              <span>·</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#F5F7FA] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#7C5CFC]" />
                github.com/umardesh
              </a>
            </div>

            {/* Professional Summary */}
            <div className="pt-3">
              <h2 className="text-xs font-mono text-[#7C5CFC] uppercase tracking-wider font-semibold mb-1.5">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB7] leading-relaxed">
                {PORTFOLIO_DATA.personal.bio}
              </p>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-mono text-[#7C5CFC] uppercase tracking-wider font-semibold">
              Core Competencies
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'Project Coordination',
                'Administrative Management',
                'Executive Assistance',
                'Client Communication',
                'Calendar & Documentation Management',
                'CRM & Lead Management',
                'Advanced Excel & MIS Reporting',
                'Online Research',
                'React.js',
                'JavaScript',
                'Remote Collaboration',
              ].map((comp) => (
                <span
                  key={comp}
                  className="bg-[#12151A] border border-[#232730] text-[#A7ADB7] rounded-full px-3 py-1 text-xs"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-[#7C5CFC] uppercase tracking-wider font-semibold">
              Professional Experience
            </h2>
            <div className="p-5 rounded-[12px] bg-[#12151A] border border-[#232730] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                <div>
                  <span className="font-semibold text-[#F5F7FA] text-sm block">
                    iTUX Technologies
                  </span>
                  <span className="text-[#7C5CFC]">Frontend Developer & Admin Management</span>
                </div>
                <span className="font-mono text-[#6F7682] bg-[#0D0F12] px-2.5 py-1 rounded-[6px] border border-[#232730]">
                  Dec 2023 – Present
                </span>
              </div>

              <ul className="space-y-2 text-xs text-[#A7ADB7] pt-1">
                {PORTFOLIO_DATA.experience[0].achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#7C5CFC] mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-[#7C5CFC] uppercase tracking-wider font-semibold">
              Highlighted Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-[10px] bg-[#12151A] border border-[#232730] space-y-1">
                <div className="font-semibold text-[#F5F7FA] text-xs">Group Scheduler App (React.js)</div>
                <p className="text-[11px] text-[#A7ADB7]">
                  Built a responsive scheduling application with REST API integration, time-slot selection, and conflict handling.
                </p>
              </div>

              <div className="p-4 rounded-[10px] bg-[#12151A] border border-[#232730] space-y-1">
                <div className="font-semibold text-[#F5F7FA] text-xs">Unemployment Data Analysis</div>
                <p className="text-[11px] text-[#A7ADB7]">
                  Visualized unemployment trends using Python, Pandas and Matplotlib for clear demographic reporting.
                </p>
              </div>

              <div className="p-4 rounded-[10px] bg-[#12151A] border border-[#232730] space-y-1 sm:col-span-2">
                <div className="font-semibold text-[#F5F7FA] text-xs">Personal Portfolio Website</div>
                <p className="text-[11px] text-[#A7ADB7]">
                  Developed a responsive personal portfolio using React.js and Tailwind CSS with dark technical aesthetics.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-[#7C5CFC] uppercase tracking-wider font-semibold">
              Skills Breakdown
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-[10px] bg-[#12151A] border border-[#232730] space-y-1">
                <span className="font-semibold text-[#F5F7FA] block text-[11px] uppercase tracking-wide text-[#7C5CFC]">
                  Technical
                </span>
                <p className="text-[11px] text-[#A7ADB7] leading-relaxed">
                  React.js, JavaScript, Python, HTML5, CSS3, Tailwind CSS, MySQL, Git, GitHub, AWS Basics.
                </p>
              </div>

              <div className="p-3.5 rounded-[10px] bg-[#12151A] border border-[#232730] space-y-1">
                <span className="font-semibold text-[#F5F7FA] block text-[11px] uppercase tracking-wide text-[#7C5CFC]">
                  Business & PM
                </span>
                <p className="text-[11px] text-[#A7ADB7] leading-relaxed">
                  Executive Assistance, Project Coordination, CRM, Management, Online Research, Documentation, Excel, Reporting, Artificial Intelligence, Prompting.
                </p>
              </div>

              <div className="p-3.5 rounded-[10px] bg-[#12151A] border border-[#232730] space-y-1">
                <span className="font-semibold text-[#F5F7FA] block text-[11px] uppercase tracking-wide text-[#7C5CFC]">
                  Soft Skills
                </span>
                <p className="text-[11px] text-[#A7ADB7] leading-relaxed">
                  Communication, Problem Solving, Time Management, Collaboration, Conflict Resolution.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono text-[#7C5CFC] uppercase tracking-wider font-semibold">
                Education
              </h2>
              <div className="p-4 rounded-[10px] bg-[#12151A] border border-[#232730] text-xs space-y-1">
                <span className="font-semibold text-[#F5F7FA] block">
                  {PORTFOLIO_DATA.education.degree}
                </span>
                <p className="text-[#A7ADB7]">{PORTFOLIO_DATA.education.institution}</p>
                <span className="font-mono text-[#7C5CFC] text-[11px] block mt-1">
                  Graduation: {PORTFOLIO_DATA.education.year}
                </span>
              </div>
            </div>

            {/* Certifications & Languages */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono text-[#7C5CFC] uppercase tracking-wider font-semibold">
                Certifications & Languages
              </h2>
              <div className="p-4 rounded-[10px] bg-[#12151A] border border-[#232730] text-xs space-y-2">
                <div className="space-y-1">
                  {PORTFOLIO_DATA.certifications.map((cert, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-1.5 text-[11px] text-[#A7ADB7]">
                      <span className="text-[#7C5CFC]">•</span>
                      <span>{cert.title}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-[#191C22] text-[11px] text-[#6F7682]">
                  <strong className="text-[#A7ADB7]">Languages:</strong> English, Hindi
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-[#191C22] bg-[#0D0F12] flex items-center justify-between">
          <div className="text-xs text-[#6F7682] font-mono">
            {PORTFOLIO_DATA.personal.name} — Verified Curriculum Vitae
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-[10px] bg-[#7C5CFC] px-4 py-2 text-xs font-medium text-white hover:bg-[#9278FF] transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
