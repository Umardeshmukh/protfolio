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
    <div className="relative min-h-screen bg-[#08090B] text-[#F5F7FA] font-sans antialiased selection:bg-[#7C5CFC]/30 selection:text-[#FFFFFF] flex flex-col overflow-x-hidden">
      {/* Super smooth & subtle global animated ambient gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Soft floating accent gradient orbs with deep blur */}
        <div className="absolute -top-[10%] left-[15%] w-[680px] h-[680px] rounded-full bg-gradient-to-tr from-[#7C5CFC]/[0.09] to-[#4F46E5]/[0.06] blur-[140px] animate-ambient-1" />
        <div className="absolute top-[35%] -right-[12%] w-[620px] h-[620px] rounded-full bg-gradient-to-bl from-[#4F46E5]/[0.08] to-[#7C5CFC]/[0.05] blur-[150px] animate-ambient-2" />
        <div className="absolute top-[65%] -left-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#2563EB]/[0.06] to-[#7C5CFC]/[0.06] blur-[160px] animate-ambient-3" />
        <div className="absolute -bottom-[10%] right-[15%] w-[700px] h-[700px] rounded-full bg-gradient-to-t from-[#7C5CFC]/[0.07] to-transparent blur-[150px] animate-ambient-1" />

        {/* Global technical subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* Fixed Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
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
