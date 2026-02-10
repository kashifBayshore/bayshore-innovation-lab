import React from "react";
import { figmaColors, figmaTypography } from "@/tokens/figma-design";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  style,
}) => {
  const baseStyles: React.CSSProperties = {
    fontFamily: figmaTypography.fontFamily.openSans.join(", "),
    fontWeight: figmaTypography.fontWeight.semibold,
    borderRadius: "8px",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
    border: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    textDecoration: "none",
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: figmaColors.buttonGradient,
      color: figmaColors.textWhite,
      boxShadow: "none",
    },
    secondary: {
      background: figmaColors.backgroundWhite,
      color: figmaColors.textPrimary,
      border: `1px solid ${figmaColors.borderCyan}`,
      boxShadow: "none",
    },
    outline: {
      background: "transparent",
      color: figmaColors.textPrimary,
      border: `1px solid ${figmaColors.borderLight}`,
      boxShadow: "none",
    },
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: "8px 16px",
      fontSize: figmaTypography.fontSize.xs,
    },
    md: {
      padding: "12px 24px",
      fontSize: figmaTypography.fontSize.sm,
    },
    lg: {
      padding: "16px 32px",
      fontSize: figmaTypography.fontSize.sm,
    },
  };

  const finalStyles: React.CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    opacity: disabled ? 0.5 : 1,
    ...style,
  };

  return (
    <button
      style={finalStyles}
      className={className}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};
