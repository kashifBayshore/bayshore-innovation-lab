import React from "react";
import { figmaColors } from "@/tokens/figma-design";

interface LineProps {
  width?: string;
  height?: string;
  gradient?: boolean;
  decorative?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Line: React.FC<LineProps> = ({
  width = "100%",
  height = "2px",
  gradient = false,
  decorative = false,
  className = "",
  style,
}) => {
  const baseStyle: React.CSSProperties = {
    width,
    height,
    ...style,
  };

  const gradientStyle = gradient
    ? {
        background: `linear-gradient(90deg, ${figmaColors.accentOrange} 25%, ${figmaColors.accentCyan} 100%)`,
      }
    : {};

  const decorativeStyle = decorative
    ? {
        position: "absolute" as const,
        opacity: 0.1,
      }
    : {};

  const finalStyle: React.CSSProperties = {
    ...baseStyle,
    ...gradientStyle,
    ...decorativeStyle,
  };

  return <div style={finalStyle} className={className} />;
};
