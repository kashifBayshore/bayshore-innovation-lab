import React from "react";
import { figmaColors, figmaSpacing } from "@/tokens/figma-design";

interface SectionProps {
  children: React.ReactNode;
  background?: string;
  className?: string;
  style?: React.CSSProperties;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  background = figmaColors.backgroundWhite,
  className = "",
  style,
  noPadding = false,
}) => {
  return (
    <section
      className={className}
      style={{
        backgroundColor: background,
        width: "100%",
        padding: noPadding ? 0 : `${figmaSpacing.section.lg} 0`,
        ...style,
      }}
    >
      {children}
    </section>
  );
};
