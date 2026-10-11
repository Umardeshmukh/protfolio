import React, { useRef, useCallback } from 'react';

export interface TorchCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  torchColor?: string;
  borderGlowColor?: string;
  torchRadius?: number;
  showSubgrid?: boolean;
}

/**
 * TorchCard: Confined cursor hover flashlight effect in Luxury Light mode.
 */
export const TorchCard: React.FC<TorchCardProps> = ({
  children,
  className = '',
  torchColor = 'rgba(124, 58, 237, 0.04)',
  borderGlowColor = 'rgba(124, 58, 237, 0.25)',
  torchRadius = 320,
  showSubgrid = true,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  style,
  ...rest
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--torch-x', `${x}px`);
        cardRef.current.style.setProperty('--torch-y', `${y}px`);
      }
      if (onMouseMove) {
        onMouseMove(e);
      }
    },
    [onMouseMove]
  );

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
        cardRef.current.style.setProperty('--torch-opacity', '1');
      }
      if (onMouseEnter) {
        onMouseEnter(e);
      }
    },
    [onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
        cardRef.current.style.setProperty('--torch-opacity', '0');
      }
      if (onMouseLeave) {
        onMouseLeave(e);
      }
    },
    [onMouseLeave]
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group/torch relative rounded-[20px] bg-white border border-black/[0.08] overflow-hidden transition-all duration-300 hover:border-[#7c3aed]/35 hover:shadow-[0_16px_40px_-10px_rgba(124,58,237,0.08)] shadow-[0_4px_24px_rgba(0,0,0,0.02)] ${className}`.trim()}
      style={
        {
          '--torch-x': '150px',
          '--torch-y': '150px',
          '--torch-opacity': '0',
          '--torch-radius': `${torchRadius}px`,
          '--torch-color': torchColor,
          '--border-glow': borderGlowColor,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {/* 1. Dynamic Torch Border Highlight */}
      <div
        className="absolute -inset-px rounded-[inherit] pointer-events-none transition-opacity duration-300 z-20"
        style={{
          opacity: 'var(--torch-opacity)',
          background: `radial-gradient(var(--torch-radius) circle at var(--torch-x) var(--torch-y), var(--border-glow), transparent 70%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
        aria-hidden="true"
      />

      {/* 2. Soft Ambient Torch Light Beam on the Surface */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: 'var(--torch-opacity)',
          background: `radial-gradient(var(--torch-radius) circle at var(--torch-x) var(--torch-y), var(--torch-color), transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* 3. Subtle Dot Subgrid under the Torch Beam */}
      {showSubgrid && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 z-10 opacity-30"
          style={{
            opacity: 'calc(var(--torch-opacity) * 0.35)',
            backgroundImage: `radial-gradient(rgba(124, 58, 237, 0.4) 1px, transparent 1px)`,
            backgroundSize: '18px 18px',
            maskImage: `radial-gradient(calc(var(--torch-radius) * 0.75) circle at var(--torch-x) var(--torch-y), black, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(calc(var(--torch-radius) * 0.75) circle at var(--torch-x) var(--torch-y), black, transparent 80%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* 4. Child Content */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

export default TorchCard;
