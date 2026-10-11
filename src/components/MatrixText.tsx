import React from 'react';

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

export const MatrixText: React.FC<MatrixTextProps> = ({
  text = '',
  className = '',
  as: Component = 'span',
  style,
  ...rest
}) => {
  const DynamicTag = Component as any;
  return (
    <DynamicTag className={className} style={style} {...rest}>
      {text}
    </DynamicTag>
  );
};

export default MatrixText;
