import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectCardVisual } from './ProjectCardVisual';
import { Github, ExternalLink, ArrowRight, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Frontend Engineering',
    'Data Analysis & Python',
    'Administrative & PM',
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
              02 — PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-semibold text-[#F5F7FA] leading-[1.1] tracking-[-0.03em]">
              Featured Applications & Operations
            </h2>
            <p className="text-base sm:text-lg text-[#A7ADB7] leading-[1.6]">
              Real-world responsive React applications, Python data analytics, and administrative management workflows delivered for clients.
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

        {/* Project Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-[16px] bg-[#0D0F12] border border-[#232730] p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#303540] hover:shadow-[0_20px_60px_rgba(124,92,252,0.08)] cursor-pointer"
              onClick={() => onSelectProject(project)}
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
                    <span className="text-xs font-mono text-[#4ADE80] font-normal hidden sm:inline">
                      {project.metrics[0].label}: {project.metrics[0].value}
                    </span>
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
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#A7ADB7] hover:text-[#F5F7FA] transition-colors"
                    title="View GitHub repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#A7ADB7] hover:text-[#F5F7FA] transition-colors"
                    title="Live demonstration"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#7C5CFC] hover:text-[#9278FF] transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
