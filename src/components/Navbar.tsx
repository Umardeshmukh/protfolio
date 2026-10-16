import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { Magnetic } from '@/components/core/magnetic';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track horizontal scroll progress through entire page
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      } else {
        setScrollProgress(0);
      }

      const sections = ['about', 'projects', 'architecture', 'experience', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Luxurious Regal Progress Bar at the very top of the viewport */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#b45309] via-[#d97706] to-[#f59e0b] transition-[width] duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-40 h-[72px] transition-all duration-300">
        {/* Crystal Glass Panel Surface */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[20px] border-b border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.02)]" />
        
        {/* Top subtle luxury specular line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/[0.04] to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          {/* Wordmark with Royal Indicator */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-display font-bold tracking-tight text-[#0f172a] hover:text-black flex items-center gap-2.5 transition-colors group"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97706] opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-[#b45309] to-[#d97706]" />
            </span>
            <span className="tracking-[-0.02em]">Mohammed Umer</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-all py-1 relative ${
                    isActive
                      ? 'text-[#0f172a] font-semibold'
                      : 'text-[#64748b] hover:text-[#0f172a]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#b45309] to-[#d97706] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions with Minimalist Royal Style */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 rounded-[12px] bg-white border border-black/[0.08] px-3.5 py-2 text-xs font-medium text-[#334155] transition-all duration-200 hover:bg-[#f8fafc] hover:border-black/[0.15] shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#b45309]" />
              <span>Resume</span>
            </button>

            <Magnetic
              intensity={0.2}
              springOptions={{ bounce: 0.1 }}
              actionArea="global"
              range={200}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="inline-flex items-center gap-1.5 rounded-[12px] bg-[#0f172a] hover:bg-[#1e293b] px-4 py-2 text-xs font-semibold text-white transition-all duration-200 shadow-[0_4px_14px_rgba(15,23,42,0.15)]"
              >
                <Magnetic
                  intensity={0.1}
                  springOptions={{ bounce: 0.1 }}
                  actionArea="global"
                  range={200}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span>Contact</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </Magnetic>
              </a>
            </Magnetic>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#475569] hover:text-[#0f172a] rounded-[10px] bg-white border border-black/[0.08] shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#b45309]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Backdrop & Drawer with White Crystal Surface */}
        {mobileMenuOpen && (
          <>
            <div
              className="md:hidden fixed inset-0 top-[72px] bg-black/20 backdrop-blur-xs z-30"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="md:hidden fixed inset-x-0 top-[72px] z-40 bg-white/98 backdrop-blur-[24px] border-b border-black/[0.08] p-6 space-y-4 shadow-[0_24px_60px_rgba(0,0,0,0.12)] max-h-[calc(100vh-80px)] overflow-y-auto">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-base text-[#475569] hover:text-[#0f172a] py-3 px-1 border-b border-black/[0.04] flex items-center justify-between font-medium active:bg-[#f8fafc] rounded-md transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#b45309] text-xs font-mono">→</span>
                  </a>
                ))}
              </nav>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full justify-center inline-flex items-center gap-2 rounded-[12px] bg-[#f8fafc] hover:bg-[#f1f5f9] border border-black/[0.08] py-3 text-sm font-medium text-[#0f172a] transition-colors active:scale-[0.99]"
                >
                  <FileText className="w-4 h-4 text-[#b45309]" />
                  <span>View Resume</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="w-full justify-center inline-flex items-center gap-2 rounded-[12px] bg-[#0f172a] hover:bg-[#1e293b] py-3 text-sm font-semibold text-white shadow-sm transition-colors active:scale-[0.99]"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};
