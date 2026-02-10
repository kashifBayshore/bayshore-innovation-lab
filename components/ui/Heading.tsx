import React from "react";
import { figmaColors, figmaTypography } from "@/tokens/figma-design";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  centered?: boolean;
  style?: React.CSSProperties;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = "",
  gradient = false,
  centered = false,
  style: propStyle,
}) => {
  // Using figmaTypography directly for exact matches
  const baseStyle: React.CSSProperties = {
    fontFamily: figmaTypography.fontFamily.openSans.join(", "),
    fontWeight: figmaTypography.fontWeight.bold,
    lineHeight: figmaTypography.lineHeight.normal,
    fontVariationSettings: figmaTypography.fontFeatureSettings.wdth100,
    marginTop: 0,
    marginBottom: 0,
    textAlign: centered ? "center" : "left",
    ...propStyle,
  };

  const sizeStyles = {
    1: { fontSize: figmaTypography.fontSize["4xl"] },
    2: { fontSize: figmaTypography.fontSize.xl },
    3: { fontSize: figmaTypography.fontSize["2xl"] }, // Note: In page.tsx level 3 was 2xl (32px)
    4: { fontSize: figmaTypography.fontSize.lg },
    5: { fontSize: figmaTypography.fontSize.base },
    6: { fontSize: figmaTypography.fontSize.sm },
  };

  const gradientStyle: React.CSSProperties = gradient
    ? {
        background: figmaColors.primaryGradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }
    : {
        color: figmaColors.textPrimary,
      };

  const finalStyle: React.CSSProperties = {
    ...baseStyle,
    ...sizeStyles[level],
    ...gradientStyle,
    ...propStyle, // Allow override
  };

  const Tag = `h${level}` as React.ElementType;

  return (
    <Tag className={className} style={finalStyle}>
      {children}
    </Tag>
  );
};
