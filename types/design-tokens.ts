export const colors = {
  // Primary colors from Figma
  primary: {
    orange: '#ff8d02',
    cyan: '#03c5ce',
    gradient: 'linear-gradient(90deg, #ff8d02 44.667%, #03c5ce 100%)',
  },
  // Background colors
  background: {
    primary: '#f7f9fa',
    white: '#ffffff',
    lightGray: '#f7f8f8',
  },
  // Text colors
  text: {
    primary: '#313131',
    secondary: '#7b868f',
    white: '#ffffff',
    muted: '#7b868f',
  },
  // Border colors
  border: {
    light: '#e3e3e3',
    primary: '#03c5ce',
  },
  // Button gradient
  buttonGradient: 'linear-gradient(-90deg, rgb(78, 194, 193) 0%, rgb(58, 180, 205) 100%)',
} as const;

export const typography = {
  // Font families from Figma
  fontFamily: {
    openSans: ['Open Sans', 'sans-serif'],
    raleway: ['Raleway', 'sans-serif'],
    roboto: ['Roboto', 'sans-serif'],
    inter: ['Inter', 'sans-serif'],
  },
  // Font sizes from Figma
  fontSize: {
    xs: '14px',
    sm: '16px',
    base: '18px',
    lg: '24px',
    xl: '30px',
    '2xl': '32px',
    '3xl': '58px',
  },
  // Font weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  // Line heights
  lineHeight: {
    tight: '1.5',
    normal: 'normal',
    relaxed: '1.5',
  },
} as const;

export const spacing = {
  // Container widths
  container: {
    full: '1440px',
    content: '1272px', // 1440px - 84px left - 84px right
  },
  // Spacing values from Figma
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '60px',
  '4xl': '84px',
} as const;

export const borderRadius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  full: '50%',
} as const;

export const shadows = {
  card: '0px 6px 24px 0px rgba(0,0,0,0.08)',
} as const;
