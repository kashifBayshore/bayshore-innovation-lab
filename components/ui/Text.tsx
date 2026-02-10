import React from 'react';
import { figmaColors, figmaTypography } from '@/tokens/figma-design';

interface TextProps {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'white' | 'muted';
  className?: string;
  centered?: boolean;
  maxWidth?: string;
  as?: 'p' | 'span' | 'div';
  style?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = ({
  children,
  size = 'base',
  weight = 'normal',
  color = 'primary',
  className = '',
  centered = false,
  maxWidth,
  as = 'p',
  style: propStyle,
}) => {
  // Map size props to figmaTypography.fontSize keys
  // Note: key mismatch handling
  // xs -> xs
  // sm -> sm
  // base -> base
  // lg -> lg
  // xl -> xl
  const fontSizeMap = {
    xs: figmaTypography.fontSize.xs,
    sm: figmaTypography.fontSize.sm,
    base: figmaTypography.fontSize.base,
    lg: figmaTypography.fontSize.lg,
    xl: figmaTypography.fontSize.xl,
  };

  const colorMap = {
    primary: figmaColors.textPrimary,
    secondary: figmaColors.textSecondary,
    white: figmaColors.textWhite,
    muted: figmaColors.textMuted,
  };

  const style: React.CSSProperties = {
    fontFamily: figmaTypography.fontFamily.openSans.join(', '),
    fontWeight: figmaTypography.fontWeight[weight],
    fontSize: fontSizeMap[size],
    color: colorMap[color],
    textAlign: centered ? 'center' : 'left',
    maxWidth: maxWidth,
    lineHeight: size === 'lg' ? figmaTypography.lineHeight.relaxed : figmaTypography.lineHeight.tight,
    fontVariationSettings: figmaTypography.fontFeatureSettings.wdth100,
    marginTop: 0,
    marginBottom: 0,
    ...propStyle,
  };

  const Component = as;

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
};
