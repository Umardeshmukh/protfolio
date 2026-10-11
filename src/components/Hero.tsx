import React, { useRef, useState, useCallback } from 'react';
import { ArrowRight, FileText, CheckCircle2, Code2, Sparkles, MapPin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Magnetic } from '@/components/core/magnetic';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate subtle 3D rotational tilt (-6deg to +6deg)
    const rotateX = ((centerY - y) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({ rotateX, rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-[130px] pb-20 lg:pt-[160px] lg:pb-32 bg-[#FAFAF9] overflow-hidden">
      {/* Background Soft Royal Ambient Luminous Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[520px] h-[520px] bg-[#d97706]/[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-8 right-1/4 w-[480px] h-[480px] bg-[#d97706]/[0.035] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-[380px] h-[380px] bg-[#0ea5e9]/[0.03] rounded-full blur-[130px] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Left Column: Main Editorial Hero with Generous Whitespace */}
          <div className="lg:col-span-7 space-y-8">
            {/* Availability Indicator - Minimal Luxury Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono text-[#475569] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-black/[0.15] transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97706] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d97706]" />
              </span>
              <span className="tracking-wide">{PORTFOLIO_DATA.personal.status}</span>
            </div>

            {/* Display Heading: High-fashion, authoritative typography */}
            <h1 className="text-[44px] sm:text-[58px] lg:text-[68px] xl:text-[76px] font-display font-extrabold text-[#0f172a] tracking-[-0.035em] leading-[1.05] sm:leading-[1.0] text-balance">
              Building{' '}
              <span className="text-gradient-amber">
                responsive web apps
              </span>{' '}
              & orchestrating client success.
            </h1>

            {/* Body Description with Generous Leading */}
            <p className="text-base sm:text-lg lg:text-[19px] text-[#475569] leading-[1.75] max-w-2xl font-normal font-sans">
              Frontend Developer & Project Coordinator with 2+ years of experience delivering responsive React.js and Tailwind CSS applications, managing client communications, executive calendars, and remote cross-functional workflows.
            </p>

            {/* Primary & Secondary Action Group with Magnetic Physics */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Hire Me Button with Nested Magnetic Physics */}
              <Magnetic
                intensity={0.2}
                springOptions={{ bounce: 0.1 }}
                actionArea="global"
                range={200}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-[12px] bg-[#0f172a] hover:bg-[#1e293b] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 shadow-[0_4px_16px_rgba(15,23,42,0.15)]"
                >
                  <Magnetic
                    intensity={0.1}
                    springOptions={{ bounce: 0.1 }}
                    actionArea="global"
                    range={200}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span>Hire Me</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  </Magnetic>
                </a>
              </Magnetic>

              {/* Contact Button with Nested Magnetic Physics */}
              <Magnetic
                intensity={0.2}
                springOptions={{ bounce: 0.1 }}
                actionArea="global"
                range={200}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-[12px] bg-white border border-black/[0.08] hover:border-black/[0.18] hover:bg-[#f8fafc] px-6 py-3.5 text-sm font-medium text-[#0f172a] transition-all duration-200 shadow-sm"
                >
                  <Magnetic
                    intensity={0.1}
                    springOptions={{ bounce: 0.1 }}
                    actionArea="global"
                    range={200}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#b45309]" />
                      <span>Contact</span>
                    </span>
                  </Magnetic>
                </a>
              </Magnetic>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-[12px] bg-transparent hover:bg-black/[0.04] px-4 py-3.5 text-sm font-medium text-[#475569] hover:text-[#0f172a] transition-all duration-200"
              >
                <span>View Projects</span>
              </a>

              <button
                onClick={onOpenResume}
                className="text-sm font-medium text-[#64748b] hover:text-[#0f172a] transition-colors duration-200 px-3 py-3 inline-flex items-center gap-1.5 font-sans"
              >
                <FileText className="w-4 h-4 text-[#b45309]" />
                <span>Read Curriculum Vitae →</span>
              </button>
            </div>

            {/* Proof Metrics Strip with Luxury White Cards */}
            <div className="pt-8 border-t border-black/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
              {PORTFOLIO_DATA.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-[14px] bg-white border border-black/[0.06] space-y-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-black/[0.12] transition-colors"
                >
                  <div className="font-display font-bold text-xl sm:text-2xl text-[#0f172a] tabular-nums tracking-tight flex items-baseline gap-1">
                    <span>{m.value}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
                  </div>
                  <div className="text-[11px] font-mono text-[#64748b] leading-tight">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Animated Hero Image Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[460px] group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              {/* Soft Luminous Aura behind artwork */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#d97706]/15 via-[#f59e0b]/10 to-[#0ea5e9]/10 rounded-full blur-3xl opacity-60 group-hover:opacity-85 transition-all duration-700 animate-hero-glow pointer-events-none" />

              {/* Floating Animated Image Showcase Container */}
              <div
                className="relative transition-all duration-300 ease-out animate-hero-levitate"
                style={{
                  transform: isHovered
                    ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                    : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
                }}
              >
                {/* Floating Badge 1: Top-Left Availability */}
                <div className="absolute -top-3 left-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.08] text-xs font-mono text-[#0f172a] shadow-[0_6px_20px_rgba(0,0,0,0.06)] animate-badge-float-1 z-20">
                  <span className="w-2 h-2 rounded-full bg-[#d97706] animate-pulse" />
                  <span>Available for Remote Roles</span>
                </div>

                {/* Floating Badge 2: Top-Right Tech Stack */}
                <div className="absolute -top-3 right-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.08] text-xs font-mono text-[#475569] shadow-[0_6px_20px_rgba(0,0,0,0.06)] animate-badge-float-2 z-20 hover:text-[#0f172a] transition-colors">
                  <Code2 className="w-3.5 h-3.5 text-[#b45309]" />
                  <span>React · TS · Admin</span>
                </div>

                {/* The Clean Hero Image */}
                <div className="relative rounded-[26px] overflow-hidden drop-shadow-[0_16px_36px_rgba(0,0,0,0.1)] bg-white/40">
                  <img
                    src="/hero.png"
                    alt="Mohammed Umer Deshmukh - Frontend Developer & Project Coordinator"
                    className="w-full h-auto object-contain filter contrast-[1.02] brightness-[1.0] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Identity & Verification Bar (Clean luxury paper card) */}
                <div className="mt-3.5 p-4 rounded-[16px] bg-white border border-black/[0.07] space-y-2 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-display font-bold text-[#0f172a] text-[14px] tracking-tight flex items-center gap-1.5">
                      Mohammed Umer Deshmukh
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a]" />
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#16a34a]/10 text-[#15803d] border border-[#16a34a]/25 font-semibold">
                      Verified
                    </span>
                  </div>

                  <p className="text-xs text-[#64748b] leading-tight font-sans">
                    Frontend Developer & Project Coordinator
                  </p>

                  <div className="pt-2 border-t border-black/[0.05] flex items-center justify-between text-[11px] font-mono">
                    <span className="flex items-center gap-1 text-[#64748b]">
                      <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
                      <span>Aurangabad, India</span>
                    </span>
                    <span className="text-[#0f172a] font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#d97706]" />
                      <span>2+ Yrs Experience</span>
                    </span>
                  </div>
                </div>

                {/* Under-Card Highlights Strip */}
                <div className="mt-2.5 px-2 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[#64748b]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b45309]" />
                    <span>B.Tech CS (2024)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#0f172a]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse" />
                    <span>100% On-Time Delivery</span>
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
