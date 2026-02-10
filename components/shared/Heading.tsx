import React from "react";
import { colors, typography } from "@/tokens/design";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  color?: string;
  style?: React.CSSProperties;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = "",
  gradient = false,
  color,
  style,
}) => {
  const baseStyles = {
    fontFamily: typography.fontFamily.openSans.join(", "),
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.normal,
    margin: 0,
  };

  const sizeStyles = {
    1: { fontSize: typography.fontSize["4xl"] },
    2: { fontSize: typography.fontSize["2xl"] },
    3: { fontSize: typography.fontSize.xl },
    4: { fontSize: typography.fontSize.lg },
    5: { fontSize: typography.fontSize.base },
    6: { fontSize: typography.fontSize.sm },
  };

  const styles = {
    ...baseStyles,
    ...sizeStyles[level],
    ...(gradient && {
      background: colors.primary.gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }),
    ...(color && { color }),
    ...(gradient || color ? {} : { color: colors.text.primary }),
    ...style,
  };

  if (level === 1) {
    return (
      <h1 style={styles} className={className}>
        {children}
      </h1>
    );
  } else if (level === 2) {
    return (
      <h2 style={styles} className={className}>
        {children}
      </h2>
    );
  } else if (level === 3) {
    return (
      <h3 style={styles} className={className}>
        {children}
      </h3>
    );
  } else if (level === 4) {
    return (
      <h4 style={styles} className={className}>
        {children}
      </h4>
    );
  } else if (level === 5) {
    return (
      <h5 style={styles} className={className}>
        {children}
      </h5>
    );
  } else {
    return (
      <h6 style={styles} className={className}>
        {children}
      </h6>
    );
  }
};
