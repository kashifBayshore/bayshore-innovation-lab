import React from 'react';
import { colors, typography, borderRadius } from '@/tokens/design';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
}) => {
  const baseStyles = {
    fontFamily: typography.fontFamily.openSans.join(', '),
    fontWeight: typography.fontWeight.semibold,
    borderRadius: borderRadius.sm,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const variantStyles = {
    primary: {
      background: colors.primary.buttonGradient,
      color: colors.text.white,
    },
    secondary: {
      background: colors.background.white,
      color: colors.text.primary,
      border: `1px solid ${colors.border.primary}`,
    },
    outline: {
      background: 'transparent',
      color: colors.text.primary,
      border: `1px solid ${colors.border.light}`,
    },
  };

  const sizeStyles = {
    sm: {
      padding: '8px 16px',
      fontSize: typography.fontSize.sm,
    },
    md: {
      padding: '12px 24px',
      fontSize: typography.fontSize.base,
    },
    lg: {
      padding: '16px 32px',
      fontSize: typography.fontSize.lg,
    },
  };

  const styles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <button
      style={styles}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
