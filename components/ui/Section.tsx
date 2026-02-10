import React from "react";
import { figmaColors, figmaSpacing } from "@/tokens/figma-design";

interface SectionProps {
  children: React.ReactNode;
  background?: string;
  className?: string;
  style?: React.CSSProperties;
  noPadding?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Section: React.FC<SectionProps> = ({
  children,
  background = figmaColors.backgroundWhite,
  className = "",
  style,
  noPadding = false,
  size = 'lg',
}) => {
  const paddingMap = {
    sm: "py-4 md:py-6 lg:py-8",
    md: "py-8 md:py-10 lg:py-12",
    lg: "py-12 md:py-16 lg:py-20",
    xl: "py-16 md:py-24 lg:py-28",
  };

  return (
    <section
      className={`${noPadding ? "" : paddingMap[size]} ${className}`}
      style={{
        backgroundColor: background,
        width: "100%",
        ...style,
      }}
    >
      {children}
    </section>
  );
};
