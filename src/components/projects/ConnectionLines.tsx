import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { ConnectionLink, ConnectionMode } from './types';

interface ConnectionLinesProps {
  connections: ConnectionLink[];
  boardRef: React.RefObject<HTMLDivElement | null>;
  hoveredId: string | null;
  selectedProjectId: string | null;
  connectionMode: ConnectionMode;
  dragOffsets: Record<string, { x: number; y: number }>;
}

interface PathData {
  id: string;
  d: string;
  fromPoint: { x: number; y: number };
  toPoint: { x: number; y: number };
  midPoint: { x: number; y: number };
  color: string;
  label?: string;
  isHighlighted: boolean;
  isDimmed: boolean;
}

export const ConnectionLines: React.FC<ConnectionLinesProps> = ({
  connections,
  boardRef,
  hoveredId,
  selectedProjectId,
  connectionMode,
  dragOffsets,
}) => {
  const [paths, setPaths] = useState<PathData[]>([]);
  const [boardDimensions, setBoardDimensions] = useState({ width: 0, height: 0 });

  const activeFocusId = hoveredId || selectedProjectId;

  const updatePaths = useCallback(() => {
    if (!boardRef.current) return;

    const boardEl = boardRef.current;
    const boardRect = boardEl.getBoundingClientRect();
    const unscaledWidth = boardEl.offsetWidth || boardRect.width;
    const unscaledHeight = boardEl.offsetHeight || boardRect.height;
    const scale = boardRect.width / unscaledWidth || 1;

    setBoardDimensions({ width: unscaledWidth, height: unscaledHeight });

    const newPaths: PathData[] = [];

    connections.forEach((conn) => {
      // In simplified mode, hide cross-project threads to keep clean
      if (connectionMode === 'simplified' && conn.fromType === 'project' && conn.toType === 'project') {
        return;
      }

      const fromEl = document.getElementById(`pin-${conn.fromId}`);
      const toEl = document.getElementById(`pin-${conn.toId}`);

      if (!fromEl || !toEl) return;

      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      const fromPoint = {
        x: (fromRect.left + fromRect.width / 2 - boardRect.left) / scale,
        y: (fromRect.top + fromRect.height / 2 - boardRect.top) / scale,
      };

      const toPoint = {
        x: (toRect.left + toRect.width / 2 - boardRect.left) / scale,
        y: (toRect.top + toRect.height / 2 - boardRect.top) / scale,
      };

      // Calculate realistic gravitational hanging sag
      const dx = toPoint.x - fromPoint.x;
      const dy = toPoint.y - fromPoint.y;
      const dist = Math.hypot(dx, dy);
      const sag = Math.min(48, Math.max(14, dist * 0.08));

      const midPoint = {
        x: (fromPoint.x + toPoint.x) / 2,
        y: (fromPoint.y + toPoint.y) / 2 + sag,
      };

      // Quadratic curve simulating loose hanging string
      const d = `M ${fromPoint.x} ${fromPoint.y} Q ${midPoint.x} ${midPoint.y} ${toPoint.x} ${toPoint.y}`;

      const isConnectedToActive =
        activeFocusId !== null &&
        (conn.fromId === activeFocusId || conn.toId === activeFocusId);

      const isDimmed = activeFocusId !== null && !isConnectedToActive;

      newPaths.push({
        id: conn.id,
        d,
        fromPoint,
        toPoint,
        midPoint,
        color: conn.color || '#D85B68',
        label: conn.label,
        isHighlighted: isConnectedToActive,
        isDimmed,
      });
    });

    setPaths(newPaths);
  }, [connections, boardRef, activeFocusId, connectionMode]);

  // Recalculate on mount, drag changes, and window resize
  useEffect(() => {
    updatePaths();

    const handleResize = () => {
      requestAnimationFrame(updatePaths);
    };

    window.addEventListener('resize', handleResize);
    // Double trigger after initial layout settlement
    const timer = setTimeout(updatePaths, 150);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [updatePaths, dragOffsets]);

  if (connectionMode === 'all' && paths.length === 0) {
    // initial frame
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-15 overflow-visible"
      width={boardDimensions.width || '100%'}
      height={boardDimensions.height || '100%'}
      aria-hidden="true"
    >
      <defs>
        {/* Glow filters for active investigation threads */}
        <filter id="string-glow-red" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ff6b7a" floodOpacity="0.85" />
        </filter>
        <filter id="string-glow-violet" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#a78bfa" floodOpacity="0.85" />
        </filter>
      </defs>

      {paths.map((p) => {
        const isViolet = p.color.toLowerCase().includes('7c5cfc');
        const filter = p.isHighlighted
          ? isViolet
            ? 'url(#string-glow-violet)'
            : 'url(#string-glow-red)'
          : undefined;

        const strokeColor = p.isHighlighted
          ? isViolet
            ? '#a78bfa'
            : '#ff6b7a'
          : p.color;

        const strokeWidth = p.isHighlighted ? 2.5 : 1.4;
        const opacity = p.isHighlighted ? 1 : p.isDimmed ? 0.12 : 0.65;

        return (
          <g key={p.id} className="transition-opacity duration-300">
            {/* Soft shadow line under the string for tactile depth */}
            <path
              d={p.d}
              fill="none"
              stroke="rgba(0, 0, 0, 0.45)"
              strokeWidth={strokeWidth + 1}
              strokeLinecap="round"
              transform="translate(1, 2)"
            />

            {/* Main Investigation Red String with animated drawing */}
            <motion.path
              d={p.d}
              fill="none"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={p.isDimmed ? '4 3' : undefined}
              filter={filter}
              style={{ opacity }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, opacity }}
              transition={{
                pathLength: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.25 },
              }}
            />

            {/* Small circular string knot anchors at end points */}
            <circle
              cx={p.fromPoint.x}
              cy={p.fromPoint.y}
              r={p.isHighlighted ? 3.5 : 2.5}
              fill={strokeColor}
              opacity={opacity}
            />
            <circle
              cx={p.toPoint.x}
              cy={p.toPoint.y}
              r={p.isHighlighted ? 3.5 : 2.5}
              fill={strokeColor}
              opacity={opacity}
            />

            {/* Optional Investigation Thread Label on highlighted string */}
            {p.isHighlighted && p.label && (
              <g
                transform={`translate(${p.midPoint.x}, ${p.midPoint.y})`}
                className="select-none pointer-events-none"
              >
                <rect
                  x="-60"
                  y="-11"
                  width="120"
                  height="20"
                  rx="4"
                  fill="#0d0f14"
                  stroke={strokeColor}
                  strokeWidth="1"
                  opacity="0.95"
                />
                <text
                  x="0"
                  y="2"
                  textAnchor="middle"
                  fill="#f5f7fa"
                  fontSize="9.5"
                  fontFamily="Space Grotesk, monospace"
                  fontWeight="600"
                  letterSpacing="0.04em"
                >
                  {p.label}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
};
