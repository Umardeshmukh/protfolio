import React, { useRef, useState, useCallback } from 'react';
import { Project } from '../../data/portfolioData';
import { EvidenceNote, ConnectionLink, ConnectionMode } from './types';
import { ProjectStickyNote } from './ProjectStickyNote';
import { ResearchNote } from './ResearchNote';
import { ConnectionLines } from './ConnectionLines';
import { DEFAULT_PROJECT_POSITIONS } from '../../data/projectsBoardData';
import { Compass } from 'lucide-react';

interface ResearchBoardProps {
  projects: Project[];
  notes: EvidenceNote[];
  connections: ConnectionLink[];
  connectionMode: ConnectionMode;
  spotlightEnabled: boolean;
  onSelectProject: (project: Project) => void;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  dragOffsets: Record<string, { x: number; y: number }>;
  setDragOffsets: React.Dispatch<React.SetStateAction<Record<string, { x: number; y: number }>>>;
}

export const ResearchBoard: React.FC<ResearchBoardProps> = ({
  projects,
  notes,
  connections,
  connectionMode,
  spotlightEnabled,
  onSelectProject,
  hoveredId,
  setHoveredId,
  dragOffsets,
  setDragOffsets,
}) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Spotlight flashlight coordinates
  const [spotlightPos, setSpotlightPos] = useState({ x: 500, y: 380 });
  const [isMouseOverBoard, setIsMouseOverBoard] = useState(false);

  // Track cursor movement for interactive flashlight / spotlight effect
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlightPos({ x, y });
  }, []);

  // Update drag offset for a specific card or note
  const handleDragEnd = useCallback(
    (id: string, offset: { x: number; y: number }) => {
      setDragOffsets((prev) => ({
        ...prev,
        [id]: offset,
      }));
    },
    [setDragOffsets]
  );

  // Check if an item is connected to the currently hovered item
  const isRelatedToHovered = useCallback(
    (itemId: string) => {
      if (!hoveredId || hoveredId === itemId) return false;
      return connections.some(
        (c) =>
          (c.fromId === hoveredId && c.toId === itemId) ||
          (c.toId === hoveredId && c.fromId === itemId)
      );
    },
    [hoveredId, connections]
  );

  // Sticky note color and rotation profiles for projects
  const stickyThemes: Array<{ theme: 'canary' | 'cyan' | 'rose' | 'cream'; rotation: number }> = [
    { theme: 'canary', rotation: -2.2 },
    { theme: 'cyan', rotation: 1.8 },
    { theme: 'rose', rotation: -1.5 },
    { theme: 'cream', rotation: 2.1 },
  ];

  return (
    <div className="relative w-full">
      {/* ============================================================== */}
      {/* DESKTOP INTERACTIVE STORYBOARD (1024px and above)              */}
      {/* ============================================================== */}
      <div
        ref={boardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsMouseOverBoard(true)}
        onMouseLeave={() => setIsMouseOverBoard(false)}
        className="hidden lg:block relative w-full h-[880px] rounded-[24px] bg-[#f9f9f8] border border-black/[0.08] overflow-hidden select-none shadow-[0_16px_45px_rgba(0,0,0,0.03)]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      >
        {/* Subtle Linen / Atelier Micro-Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
          aria-hidden="true"
        />

        {/* Investigative Blueprint Crosshairs & Grid Coordinate Watermarks */}
        <div
          className="absolute inset-0 pointer-events-none z-5 overflow-hidden text-[#78716c]/60 font-mono text-[10px]"
          aria-hidden="true"
        >
          {/* Top ruler marks */}
          <div className="absolute top-3.5 left-6 flex items-center gap-2 text-[#78716c]">
            <Compass className="w-3.5 h-3.5 text-[#b45309]" />
            <span>ATELIER INVESTIGATION WALL // COORD [19.876°N / 75.343°E]</span>
          </div>

          <div className="absolute top-3.5 right-6 flex items-center gap-2 text-[#78716c]">
            <span className="w-2 h-2 rounded-full bg-[#c53030]" />
            <span>ROYAL DOSSIER NETWORK</span>
          </div>

          <div className="absolute bottom-3.5 left-6 text-[#78716c]">
            <span>MOHAMMED UMER DESHMUKH // STICKY NOTE ARCHIVE</span>
          </div>

          <div className="absolute bottom-3.5 right-6 text-[#78716c]">
            <span>CLICK PROJECT NAME TO OPEN INVESTIGATION DOSSIER</span>
          </div>

          {/* Crosshairs watermark */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-lg text-black/5 font-light">
            +
          </div>
          <div className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 text-lg text-black/5 font-light">
            +
          </div>
          <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-lg text-black/5 font-light">
            +
          </div>
          <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 text-lg text-black/5 font-light">
            +
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-black/5 font-light">
            +
          </div>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE SPOTLIGHT EFFECT                                   */}
        {/* ============================================================== */}
        {spotlightEnabled && (
          <div
            className="absolute inset-0 pointer-events-none z-15 transition-opacity duration-300"
            style={{
              opacity: isMouseOverBoard ? 1 : 0.65,
              background: `
                radial-gradient(
                  520px circle at ${spotlightPos.x}px ${spotlightPos.y}px,
                  rgba(217, 119, 6, 0.08) 0%,
                  rgba(124, 58, 237, 0.05) 35%,
                  rgba(255, 255, 255, 0.5) 65%,
                  transparent 85%
                ),
                radial-gradient(
                  220px circle at ${spotlightPos.x}px ${spotlightPos.y}px,
                  rgba(255, 255, 255, 0.7) 0%,
                  transparent 70%
                )
              `,
            }}
            aria-hidden="true"
          />
        )}

        {/* Ambient Warm Pearl Backing */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(circle at 20% 25%, rgba(124, 58, 237, 0.035) 0%, transparent 45%),
              radial-gradient(circle at 80% 75%, rgba(217, 119, 6, 0.03) 0%, transparent 45%)
            `,
          }}
          aria-hidden="true"
        />

        {/* ============================================================== */}
        {/* CANVAS CONTAINER (NATURAL UNZOOMED BOARD)                      */}
        {/* ============================================================== */}
        <div
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        >
          {/* SVG Investigation Connection Threads */}
          <ConnectionLines
            connections={connections}
            boardRef={canvasRef}
            hoveredId={hoveredId}
            selectedProjectId={null}
            connectionMode={connectionMode}
            dragOffsets={dragOffsets}
          />

          {/* ALL PROJECTS IN STICKY NOTES FORM */}
          {projects.map((project, index) => {
            const defaultPos =
              DEFAULT_PROJECT_POSITIONS[project.id] || {
                x: 18 + (index % 2) * 38,
                y: 6 + Math.floor(index / 2) * 46,
              };
            const offset = dragOffsets[project.id] || { x: 0, y: 0 };
            const themeConfig = stickyThemes[index % stickyThemes.length];

            return (
              <ProjectStickyNote
                key={project.id}
                project={project}
                caseNumber={index + 1}
                colorTheme={themeConfig.theme}
                rotation={themeConfig.rotation}
                isHovered={hoveredId === project.id}
                isRelatedToHovered={isRelatedToHovered(project.id)}
                onHover={setHoveredId}
                onSelect={onSelectProject}
                onDragEnd={handleDragEnd}
                isDraggable={true}
                currentOffset={offset}
                defaultPosition={defaultPos}
              />
            );
          })}

          {/* RESEARCH EVIDENCE NOTES */}
          {notes.map((note) => {
            const isProjectVisible = projects.some((p) => p.id === note.projectId);
            if (!isProjectVisible) return null;

            const offset = dragOffsets[note.id] || { x: 0, y: 0 };

            return (
              <ResearchNote
                key={note.id}
                note={note}
                isHovered={hoveredId === note.id}
                isRelatedToHovered={isRelatedToHovered(note.id)}
                onHover={setHoveredId}
                onClick={() => {
                  const targetProject = projects.find((p) => p.id === note.projectId);
                  if (targetProject) onSelectProject(targetProject);
                }}
                onDragEnd={handleDragEnd}
                isDraggable={true}
                currentOffset={offset}
              />
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* TABLET & MOBILE VIEW: RESPONSIVE EVIDENCE TRAIL WITH STICKY    */}
      {/* ============================================================== */}
      <div className="lg:hidden relative space-y-8">
        <div className="p-4 rounded-[16px] bg-white border border-black/[0.08] flex items-center justify-between text-xs font-mono shadow-sm">
          <div className="flex items-center gap-2 text-[#475569]">
            <span className="w-2 h-2 rounded-full bg-[#c53030] animate-pulse" />
            <span>INVESTIGATION LOG: {projects.length} STICKY DOSSIERS</span>
          </div>
          <span className="text-[#7c3aed] font-semibold">TAP TITLE TO INSPECT</span>
        </div>

        {/* Vertical Evidence Trail */}
        <div className="relative pl-6 sm:pl-8 space-y-8">
          <div
            className="absolute left-2.5 sm:left-3 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#c53030] via-[#7c3aed] to-[#c53030]"
            aria-hidden="true"
          />

          {projects.map((project, index) => {
            const relatedNote = notes.find((n) => n.projectId === project.id);
            const themeConfig = stickyThemes[index % stickyThemes.length];

            const bgClass =
              themeConfig.theme === 'canary'
                ? 'bg-[#fff9c2] text-[#1c1917] border-[#f2e796]'
                : themeConfig.theme === 'cyan'
                ? 'bg-[#e0f2fe] text-[#082f49] border-[#bae6fd]'
                : themeConfig.theme === 'rose'
                ? 'bg-[#ffe4e6] text-[#4c0519] border-[#fecdd3]'
                : 'bg-[#fef3c7] text-[#451a03] border-[#fde68a]';

            return (
              <div key={project.id} className="relative space-y-4">
                {/* Node Pin Marker */}
                <div
                  className="absolute -left-[23px] sm:-left-[25px] top-6 w-4 h-4 rounded-full bg-[#c53030] border-2 border-white shadow-sm flex items-center justify-center z-10"
                  aria-hidden="true"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                {/* Mobile Sticky Note Container */}
                <div className={`rounded-[10px] border p-5 shadow-md font-handwriting ${bgClass}`}>
                  <div className="flex items-center justify-between pb-2 border-b border-black/10 text-[13px]">
                    <span className="font-bold opacity-80">
                      CASE FILE #{String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-black/10 uppercase">
                      Projects
                    </span>
                  </div>

                  {/* Clickable Project Name */}
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-left group block w-full focus:outline-none"
                    >
                      <h3 className="text-2xl font-handwriting font-bold tracking-tight leading-snug underline decoration-2 decoration-black/30 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-[12px] font-handwriting font-bold text-black/70 block mt-1">
                        👉 Tap name to view case file
                      </span>
                    </button>
                    <p className="text-[15px] font-handwriting mt-2 leading-relaxed opacity-90">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-black/10 text-[12px] font-handwriting font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="mt-3 pt-2.5 border-t border-black/10 flex items-center justify-between text-[13px] font-handwriting">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="font-bold text-[#7c3aed] underline"
                    >
                      Open Case File Details →
                    </button>
                    {project.metrics?.[0] && (
                      <span className="font-bold text-black/80 text-[13px]">
                        {project.metrics[0].value}
                      </span>
                    )}
                  </div>
                </div>

                {/* Attached Research Note on Mobile */}
                {relatedNote && (
                  <div className="ml-2 sm:ml-4 p-4 rounded-[8px] bg-[#fdfbf7] text-[#1c1c1f] border border-[#d8d0bf] shadow-sm font-handwriting text-sm">
                    <div className="flex items-center justify-between pb-1.5 border-b border-black/10 text-[12px]">
                      <span className="font-bold text-black/75 uppercase">
                        {relatedNote.codeName}
                      </span>
                      <span className="text-[#b91c1c] font-black uppercase tracking-wider text-[11px]">
                        {relatedNote.stamp}
                      </span>
                    </div>
                    <div className="font-bold text-[16px] text-black/90 mt-1.5">
                      {relatedNote.title}
                    </div>
                    <div className="text-[13px] text-black/80 mt-1 leading-snug">
                      {relatedNote.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
