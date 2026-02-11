import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./tokens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Enterprise Color System - Integrating Figma tokens
      colors: {
        // Semantic color tokens
        background: {
          ...figmaColors,
          primary: figmaColors.backgroundPrimary,
          white: figmaColors.backgroundWhite,
        },
        foreground: figmaColors.textPrimary,
        primary: {
          DEFAULT: figmaColors.accentCyan,
          orange: figmaColors.accentOrange,
          cyan: figmaColors.accentCyan,
          gradient: figmaColors.primaryGradient,
          buttonGradient: figmaColors.buttonGradient,
        },
        text: {
          primary: figmaColors.textPrimary,
          secondary: figmaColors.textSecondary,
          white: figmaColors.textWhite,
          muted: figmaColors.textMuted,
        },
        border: {
          light: figmaColors.borderLight,
          primary: figmaColors.borderCyan,
          cyan: figmaColors.borderCyan,
        },
        // Enterprise status colors
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        info: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },

      // Enterprise Typography System
      fontFamily: {
        ...figmaTypography.fontFamily,
        sans: figmaTypography.fontFamily.openSans,
        display: figmaTypography.fontFamily.raleway,
        body: figmaTypography.fontFamily.roboto,
        ui: figmaTypography.fontFamily.inter,
      },
      fontSize: {
        ...figmaTypography.fontSize,
        xs: [
          figmaTypography.fontSize.xs,
          { lineHeight: figmaTypography.lineHeight.tight },
        ],
        sm: [
          figmaTypography.fontSize.sm,
          { lineHeight: figmaTypography.lineHeight.tight },
        ],
        base: [
          figmaTypography.fontSize.base,
          { lineHeight: figmaTypography.lineHeight.normal },
        ],
        lg: [
          figmaTypography.fontSize.lg,
          { lineHeight: figmaTypography.lineHeight.relaxed },
        ],
        xl: [
          figmaTypography.fontSize.xl,
          { lineHeight: figmaTypography.lineHeight.normal },
        ],
        "2xl": [
          figmaTypography.fontSize["2xl"],
          { lineHeight: figmaTypography.lineHeight.normal },
        ],
        "3xl": [
          figmaTypography.fontSize["3xl"],
          { lineHeight: figmaTypography.lineHeight.normal },
        ],
        "4xl": [
          figmaTypography.fontSize["4xl"],
          { lineHeight: figmaTypography.lineHeight.relaxed },
        ],
        "5xl": ["64px", { lineHeight: "1.2" }],
        "6xl": ["72px", { lineHeight: "1.1" }],
      },
      fontWeight: figmaTypography.fontWeight,
      lineHeight: {
        ...figmaTypography.lineHeight,
        tight: figmaTypography.lineHeight.tight,
        normal: figmaTypography.lineHeight.normal,
        relaxed: figmaTypography.lineHeight.relaxed,
        loose: "1.75",
      },

      // Enterprise Spacing System
      spacing: {
        ...figmaSpacing.section,
        px: "1px",
        0.5: "2px",
        1: "4px",
        1.5: "6px",
        2.5: "10px",
        3.5: "14px",
        4.5: "18px",
        5.5: "22px",
        6.5: "26px",
        7.5: "30px",
        8.5: "34px",
        9.5: "38px",
        10.5: "42px",
        11.5: "46px",
        12.5: "50px",
        13.5: "54px",
        14.5: "58px",
        15.5: "62px",
        16.5: "66px",
        17.5: "70px",
        18.5: "74px",
        19.5: "78px",
        20.5: "82px",
        21.5: "86px",
        22.5: "90px",
        23.5: "94px",
        24.5: "98px",
        25.5: "102px",
        26.5: "106px",
        27.5: "110px",
        28.5: "114px",
        29.5: "118px",
        30.5: "122px",
        // Container-specific spacing
        container: figmaSpacing.container.content,
        "container-full": figmaSpacing.container.full,
      },

      // Enterprise Border Radius System
      borderRadius: {
        ...figmaSpacing.borderRadius,
        none: "0",
        full: "9999px",
      },

      // Enterprise Shadow System
      boxShadow: {
        card: figmaColors.cardShadow,
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        glow: "0 0 20px rgba(3, 197, 206, 0.3)",
        "glow-lg": "0 0 40px rgba(3, 197, 206, 0.4)",
      },

      // Enterprise Animation System
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-out": "fadeOut 0.5s ease-in-out",
        "slide-in": "slideIn 0.3s ease-out",
        "slide-out": "slideOut 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "scale-out": "scaleOut 0.2s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scaleOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.9)", opacity: "0" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(3, 197, 206, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(3, 197, 206, 0.6)" },
        },
      },

      // Enterprise Transition System
      transitionDuration: {
        DEFAULT: "150ms",
        0: "0ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        easeIn: "cubic-bezier(0.42, 0, 1, 1)",
        easeOut: "cubic-bezier(0, 0, 0.58, 1)",
        easeInOut: "cubic-bezier(0.42, 0, 0.58, 1)",
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "bounce-out": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },

      // Enterprise Z-Index System
      zIndex: {
        hide: -1,
        auto: "auto",
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
        max: 9999,
      },

      // Enterprise Container System
      maxWidth: {
        ...figmaSpacing.container,
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        prose: "65ch",
        "screen-sm": "640px",
        "screen-md": "768px",
        "screen-lg": "1024px",
        "screen-xl": "1280px",
        "screen-2xl": "1536px",
      },

      // Enterprise Grid System
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },

      // Enterprise Aspect Ratio System
      aspectRatio: {
        square: "1 / 1",
        video: "16 / 9",
        cinematic: "21 / 9",
        portrait: "4 / 5",
        golden: "1.618 / 1",
      },

      // Enterprise Backdrop Filters
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
    },
  },

  // Enterprise Plugins
  plugins: [
    // Add any enterprise plugins here
    // Example: require('@tailwindcss/forms'),
    // Example: require('@tailwindcss/typography'),
    // Example: require('@tailwindcss/aspect-ratio'),
  ],

  // Enterprise Prefix Configuration
  prefix: "",

  // Enterprise Important Configuration
  important: false,

  // Dark Mode Configuration (ready for future implementation)
  darkMode: "class",
};

export default config;
