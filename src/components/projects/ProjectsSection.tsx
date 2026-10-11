import React, { useState, useMemo, useCallback } from 'react';
import { PORTFOLIO_DATA, Project } from '../../data/portfolioData';
import { RESEARCH_NOTES, BOARD_CONNECTIONS } from '../../data/projectsBoardData';
import { ConnectionMode } from './types';
import { BoardControls } from './BoardControls';
import { ResearchBoard } from './ResearchBoard';
import { ProjectDossier } from './ProjectDossier';
import { FolderKanban } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [connectionMode, setConnectionMode] = useState<ConnectionMode>('all');
  const [spotlightEnabled, setSpotlightEnabled] = useState<boolean>(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [dragOffsets, setDragOffsets] = useState<Record<string, { x: number; y: number }>>({});
  const [dossierProject, setDossierProject] = useState<Project | null>(null);

  // Categories derived from data
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(PORTFOLIO_DATA.projects.map((p) => p.category)))];
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PORTFOLIO_DATA.projects;
    return PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Case count derived dynamically from project data
  const caseCountFormatted = String(filteredProjects.length).padStart(2, '0');

  // Handle dossier selection
  const handleOpenDossier = useCallback(
    (project: Project) => {
      if (onSelectProject) {
        onSelectProject(project);
      } else {
        setDossierProject(project);
      }
    },
    [onSelectProject]
  );

  // Check if any card has been dragged away from initial position
  const hasMovedCards = useMemo(() => {
    return Object.values(dragOffsets).some((offset) => offset.x !== 0 || offset.y !== 0);
  }, [dragOffsets]);

  // Reset layout handler
  const handleResetLayout = useCallback(() => {
    setDragOffsets({});
  }, []);

  return (
    <section
      id="projects"
      className="relative py-28 lg:py-40 border-t border-black/[0.05] bg-[#FAFAF9] text-[#0f172a] overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-[#b45309]/[0.02] via-[#d97706]/[0.02] to-transparent blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        {/* ============================================================== */}
        {/* 3. SECTION HEADER                                              */}
        {/* ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-black/[0.05]">
          <div className="max-w-2xl space-y-3">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.16em] text-[#b45309] font-semibold uppercase">
              <span className="w-2 h-2 rounded-full bg-[#d97706]" />
              <span>FIELD NOTES / 01</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-bold text-[#0f172a] leading-[1.1] tracking-[-0.03em]">
              Projects Under Investigation
            </h2>

            {/* Supporting Text */}
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-base sm:text-lg text-[#475569] leading-[1.7]">
                A closer look at the ideas, systems and experiments I've been building.
              </p>
              <span className="font-handwriting text-lg text-[#b45309] font-semibold -rotate-1 hidden sm:inline-block">
                ~ handwritten case files & research wall ~
              </span>
            </div>
          </div>

          {/* Dynamic Case Status Indicator */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="px-4 py-2 rounded-[12px] bg-white border border-black/[0.08] flex items-center gap-2.5 text-xs font-mono shadow-sm">
              <FolderKanban className="w-4 h-4 text-[#b45309]" />
              <span className="text-[#64748b]">STATUS:</span>
              <span className="text-[#0f172a] font-bold">CASE FILES: {caseCountFormatted}</span>
            </div>

            <div className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-[12px] bg-white border border-black/[0.08] text-[11px] font-mono text-[#475569] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
              <span>EVIDENCE WALL ONLINE</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BOARD CONTROLS                                                 */}
        {/* ============================================================== */}
        <BoardControls
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          connectionMode={connectionMode}
          onChangeConnectionMode={setConnectionMode}
          spotlightEnabled={spotlightEnabled}
          onToggleSpotlight={() => setSpotlightEnabled((prev) => !prev)}
          onResetLayout={handleResetLayout}
          hasMovedCards={hasMovedCards}
        />

        {/* ============================================================== */}
        {/* 4. INTERACTIVE RESEARCH BOARD                                  */}
        {/* ============================================================== */}
        <ResearchBoard
          projects={filteredProjects}
          notes={RESEARCH_NOTES}
          connections={BOARD_CONNECTIONS}
          connectionMode={connectionMode}
          spotlightEnabled={spotlightEnabled}
          onSelectProject={handleOpenDossier}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
          dragOffsets={dragOffsets}
          setDragOffsets={setDragOffsets}
        />
      </div>

      {/* ============================================================== */}
      {/* PROJECT DOSSIER DETAIL MODAL (WHEN USED STANDALONE)            */}
      {/* ============================================================== */}
      {!onSelectProject && (
        <ProjectDossier
          project={dossierProject}
          onClose={() => setDossierProject(null)}
        />
      )}
    </section>
  );
};
