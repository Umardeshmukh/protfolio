import React, { useState, useEffect, useRef, useCallback } from 'react';

export interface MatrixTextProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
  characters?: string;
  speed?: number;
  revealSpeed?: number;
  trigger?: 'hover' | 'mount' | 'view' | 'both' | 'none';
  preserveSpaces?: boolean;
  as?: React.ElementType;
  scrambleColor?: string;
  scrambleClassName?: string;
  onComplete?: () => void;
  disabled?: boolean;
}

const DEFAULT_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>/[]{}+=-_';

export const MatrixText: React.FC<MatrixTextProps> = ({
  text = '',
  characters = DEFAULT_CHARACTERS,
  speed = 8,
  revealSpeed = 0.35,
  trigger = 'hover',
  preserveSpaces = true,
  className = '',
  style = {},
  as: Component = 'span',
  scrambleColor,
  scrambleClassName = 'text-[#9278FF]',
  onComplete,
  disabled = false,
  ...rest
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const [resolvedIndex, setResolvedIndex] = useState<number>(text.length);

  const intervalRef = useRef<number | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);
  const hasTriggeredOnView = useRef<boolean>(false);

  // Check if reduced motion is requested
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const stopAnimation = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsScrambling(false);
    setDisplayText(text);
    setResolvedIndex(text.length);
  }, [text]);

  const startAnimation = useCallback(() => {
    if (disabled || prefersReducedMotion || !text) {
      setDisplayText(text);
      setResolvedIndex(text.length);
      return;
    }

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    setIsScrambling(true);
    let iteration = 0;

    intervalRef.current = window.setInterval(() => {
      const currentResolved = Math.floor(iteration);
      setResolvedIndex(currentResolved);

      const scrambled = text
        .split('')
        .map((char, index) => {
          if (preserveSpaces && char === ' ') {
            return ' ';
          }
          if (index < iteration) {
            return text[index];
          }
          const randomIndex = Math.floor(Math.random() * characters.length);
          return characters[randomIndex];
        })
        .join('');

      setDisplayText(scrambled);
      iteration += revealSpeed;

      if (iteration >= text.length) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setDisplayText(text);
        setResolvedIndex(text.length);
        setIsScrambling(false);
        if (onComplete) onComplete();
      }
    }, speed);
  }, [text, characters, speed, revealSpeed, preserveSpaces, onComplete, disabled, prefersReducedMotion]);

  // Handle mount trigger
  useEffect(() => {
    if (trigger === 'mount') {
      startAnimation();
    } else {
      setDisplayText(text);
      setResolvedIndex(text.length);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, trigger, startAnimation]);

  // Handle scroll / view trigger with IntersectionObserver
  useEffect(() => {
    if (trigger !== 'view' && trigger !== 'both') return;
    const el = elementRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredOnView.current) {
            hasTriggeredOnView.current = true;
            startAnimation();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [trigger, startAnimation]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (trigger === 'hover' || trigger === 'both') {
      startAnimation();
    }
    if (rest.onMouseEnter) {
      rest.onMouseEnter(e);
    }
  };

  // Render contents
  const renderContent = () => {
    if (!isScrambling || resolvedIndex >= text.length) {
      return text;
    }

    const resolvedPart = displayText.slice(0, resolvedIndex);
    const scrambledPart = displayText.slice(resolvedIndex);

    return (
      <>
        <span>{resolvedPart}</span>
        <span
          className={`matrix-scramble-char ${scrambleClassName}`}
          style={scrambleColor ? { color: scrambleColor } : undefined}
        >
          {scrambledPart}
        </span>
      </>
    );
  };

  const isInteractive = trigger === 'hover' || trigger === 'both';
  const DynamicTag = Component as any;

  return (
    <DynamicTag
      ref={elementRef}
      className={`matrix-text inline-block transition-opacity duration-150 ${className}`.trim()}
      style={{
        cursor: isInteractive ? 'pointer' : undefined,
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      {...rest}
    >
      {renderContent()}
    </DynamicTag>
  );
};

export default MatrixText;
