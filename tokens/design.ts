export const colors = {
  primary: {
    orange: '#ff8d02',
    cyan: '#03c5ce',
    gradient: 'linear-gradient(90deg, #ff8d02 44.667%, #03c5ce 100%)',
    buttonGradient: 'linear-gradient(-90deg, rgb(78, 194, 193) 0%, rgb(58, 180, 205) 100%)',
  },
  background: {
    primary: '#f7f9fa',
    white: '#ffffff',
    lightGray: '#f7f8f8',
  },
  text: {
    primary: '#313131',
    secondary: '#7b868f',
    white: '#ffffff',
    muted: '#7b868f',
  },
  border: {
    light: '#e3e3e3',
    primary: '#03c5ce',
  },
  shadow: {
    card: '0px 6px 24px 0px rgba(0,0,0,0.08)',
  },
} as const;

export const typography = {
  fontFamily: {
    openSans: ['Open Sans', 'sans-serif'],
    raleway: ['Raleway', 'sans-serif'],
    roboto: ['Roboto', 'sans-serif'],
    inter: ['Inter', 'sans-serif'],
  },
  fontSize: {
    xs: '14px',
    sm: '16px',
    base: '18px',
    lg: '24px',
    xl: '30px',
    '2xl': '32px',
    '3xl': '36px',
    '4xl': '58px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.5',
    normal: 'normal',
    relaxed: '40px',
  },
} as const;

export const spacing = {
  container: {
    full: '1440px',
    content: '1272px',
  },
  section: {
    sm: '60px',
    md: '84px',
    lg: '120px',
    xl: '160px',
  },
} as const;

export const borderRadius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  full: '50%',
} as const;
