'use client';

import React, { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from 'motion/react';

const SPRING_CONFIG: SpringOptions = { damping: 26, stiffness: 150, mass: 0.5 };

export type MagneticProps = {
  children: React.ReactNode;
  intensity?: number;
  range?: number;
  actionArea?: 'parent' | 'self' | 'global';
  springOptions?: SpringOptions;
  as?: React.ElementType;
  className?: string;
};

export function Magnetic({
  children,
  intensity = 0.6,
  range = 100,
  actionArea = 'self',
  springOptions = SPRING_CONFIG,
  className = '',
}: MagneticProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.hypot(clientX - centerX, clientY - centerY);

      if (actionArea === 'self') {
        if (
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
        ) {
          const moveX = (clientX - centerX) * intensity;
          const moveY = (clientY - centerY) * intensity;
          x.set(moveX);
          y.set(moveY);
        } else {
          x.set(0);
          y.set(0);
        }
      } else if (actionArea === 'parent') {
        const parent = element.parentElement;
        if (!parent) return;
        const parentRect = parent.getBoundingClientRect();

        if (
          clientX >= parentRect.left &&
          clientX <= parentRect.right &&
          clientY >= parentRect.top &&
          clientY <= parentRect.bottom
        ) {
          const moveX = (clientX - centerX) * intensity;
          const moveY = (clientY - centerY) * intensity;
          x.set(moveX);
          y.set(moveY);
        } else {
          x.set(0);
          y.set(0);
        }
      } else if (actionArea === 'global') {
        if (distance <= range) {
          const moveX = (clientX - centerX) * intensity;
          const moveY = (clientY - centerY) * intensity;
          x.set(moveX);
          y.set(moveY);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity, range, actionArea, x, y]);

  return (
    <motion.div
      ref={elementRef}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;
