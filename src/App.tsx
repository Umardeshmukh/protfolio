/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-[#FAFAF9] text-[#0F172A] font-sans antialiased selection:bg-[#d97706]/15 selection:text-[#92400e] flex flex-col overflow-x-hidden">
      {/* Atmosphere: Ethereal silk ambient radial background with warm gold and amber tones */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-cosmic-radial" aria-hidden="true">
        {/* Soft floating luminous light orbs */}
        <div className="absolute top-[6%] left-[8%] w-[720px] h-[720px] rounded-full bg-gradient-to-tr from-[#d97706]/[0.035] via-[#f59e0b]/[0.02] to-transparent blur-[160px] animate-cosmic-1" />
        <div className="absolute top-[26%] right-[4%] w-[660px] h-[660px] rounded-full bg-gradient-to-bl from-[#d97706]/[0.04] via-[#f59e0b]/[0.02] to-transparent blur-[160px] animate-cosmic-2" />
        <div className="absolute top-[58%] -left-[6%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#0ea5e9]/[0.035] via-[#d97706]/[0.02] to-transparent blur-[170px] animate-cosmic-3" />
        <div className="absolute bottom-[2%] right-[12%] w-[740px] h-[740px] rounded-full bg-gradient-to-t from-[#ec4899]/[0.03] via-[#d97706]/[0.02] to-transparent blur-[170px] animate-cosmic-1" />

        {/* Technical subtle architectural grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      </div>

      {/* Fixed Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections with Generous Luxurious White Space */}
      <main className="relative z-10 flex-1">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <AboutSection />
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
        <ArchitectureSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
