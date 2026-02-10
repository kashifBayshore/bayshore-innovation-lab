import React from 'react';
import { figmaColors, figmaTypography } from '@/tokens/figma-design';

interface IconProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({
  children,
  size = 'md',
  className = '',
  style,
}) => {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style,
  };

  const sizeStyles = {
    sm: { width: '24px', height: '24px' },
    md: { width: '50px', height: '50px' },
    lg: { width: '64px', height: '64px' },
  };

  const finalStyle = {
    ...baseStyle,
    ...sizeStyles[size],
  };

  return (
    <div style={finalStyle} className={className}>
      {children}
    </div>
  );
};
