import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectCardVisual } from './ProjectCardVisual';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { MatrixText } from './MatrixText';
import { TorchCard } from './TorchCard';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    ...Array.from(new Set(PORTFOLIO_DATA.projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 lg:py-36 border-t border-[#191C22] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="text-[12px] uppercase tracking-[0.12em] text-[#7C5CFC] font-medium font-mono">
              <MatrixText text="02 — PROJECTS" trigger="view" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-semibold text-[#F5F7FA] leading-[1.1] tracking-[-0.03em]">
              Featured Applications & Platforms
            </h2>
            <p className="text-base sm:text-lg text-[#A7ADB7] leading-[1.6]">
              Real-world production web applications, geospatial discovery platforms, commercial engineering portals, and PWA systems delivered for users and businesses.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-[12px] bg-[#0D0F12] border border-[#232730] self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-[8px] text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#7C5CFC] text-white shadow-sm'
                    : 'text-[#A7ADB7] hover:text-[#F5F7FA] hover:bg-[#12151A]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with Interactive Torch Spotlight Effect */}
        {filteredProjects.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <TorchCard
                key={project.id}
                className="p-6 lg:p-8 flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
                onClick={() => onSelectProject(project)}
                torchColor="rgba(124, 92, 252, 0.16)"
                borderGlowColor="rgba(146, 120, 255, 0.45)"
                torchRadius={340}
              >
                <div className="space-y-6">
                  {/* Visual / Image Slot: Aspect 16/10 with rounded-12px and hover scale 1.03 */}
                  <div className="relative aspect-[16/10] w-full rounded-[12px] overflow-hidden border border-[#191C22] bg-[#08090B]">
                    <div className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-[1.03]">
                      <ProjectCardVisual type={project.visualType} title={project.title} />
                    </div>

                    {/* Corner Category Tag */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-[6px] bg-[#08090B]/80 backdrop-blur-md border border-[#232730] text-[11px] font-mono text-[#7C5CFC]">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#F5F7FA] tracking-tight group-hover:text-[#FFFFFF] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      {project.metrics?.[0] && (
                        <span className="text-xs font-mono text-[#4ADE80] font-normal hidden sm:inline">
                          {project.metrics[0].label}: {project.metrics[0].value}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-[#A7ADB7] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Pills matching Section 14 */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#12151A] border border-[#232730] text-[#A7ADB7] rounded-full px-[10px] py-[6px] text-xs font-medium transition-colors hover:border-[#7C5CFC] hover:text-[#F5F7FA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Action Links */}
                <div
                  className="mt-6 pt-5 border-t border-[#191C22] flex items-center justify-between"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#A7ADB7] hover:text-[#F5F7FA] transition-colors"
                    title="Live demonstration"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#7C5CFC]" />
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#7C5CFC] hover:text-[#9278FF] transition-colors"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </TorchCard>
            ))}
          </div>
        ) : (
          <div className="mt-14 p-12 lg:p-16 rounded-[16px] bg-[#0D0F12] border border-[#232730] text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#12151A] border border-[#232730] flex items-center justify-center text-[#7C5CFC]">
              <Layers className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 max-w-md">
              <h3 className="text-lg sm:text-xl font-display font-semibold text-[#F5F7FA]">
                Fresh Projects In Staging
              </h3>
              <p className="text-sm text-[#A7ADB7] leading-relaxed">
                Currently curating and preparing fresh applications and case studies. New projects will appear here once published.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12151A] border border-[#232730] text-xs font-mono text-[#A996FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              <span>AWAITING NEW RELEASES</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
