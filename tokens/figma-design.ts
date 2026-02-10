// EXACT FIGMA DESIGN TOKENS - Pixel Perfect Implementation

export const figmaColors = {
  // Primary Gradients
  primaryGradient: 'linear-gradient(90deg, #ff8d02 44.667%, #03c5ce 100%)',
  buttonGradient: 'linear-gradient(-90deg, rgb(78, 194, 193) 0%, rgb(58, 180, 205) 100%)',
  
  // Background Colors
  backgroundPrimary: '#f7f9fa',
  backgroundWhite: '#ffffff',
  
  // Text Colors
  textPrimary: '#313131',
  textSecondary: '#7b868f',
  textWhite: '#ffffff',
  textMuted: '#7b868f',
  
  // Accent Colors
  accentCyan: '#03c5ce',
  accentOrange: '#ff8d02',
  
  // Border Colors
  borderLight: '#e3e3e3',
  borderCyan: '#03c5ce',
  
  // Shadow
  cardShadow: '0px 6px 24px 0px rgba(0,0,0,0.08)',
} as const;

export const figmaTypography = {
  fontFamily: {
    openSans: ['Open Sans', 'sans-serif'],
    raleway: ['Raleway', 'sans-serif'],
    roboto: ['Roboto', 'sans-serif'],
    inter: ['Inter', 'sans-serif'],
  },
  fontSize: {
    xs: '14px',      // Roboto Regular
    sm: '16px',      // Open Sans Regular, Roboto Regular
    base: '18px',     // Raleway Bold
    lg: '24px',       // Open Sans Semibold
    xl: '30px',       // Open Sans Bold
    '2xl': '32px',    // Open Sans Bold
    '3xl': '36px',    // Open Sans Bold
    '4xl': '58px',     // Open Sans Bold (Hero)
  },
  fontWeight: {
    normal: '400',     // Open Sans Regular, Roboto Regular
    medium: '500',     // Inter Medium
    semibold: '600',   // Open Sans Semibold
    bold: '700',       // Open Sans Bold, Raleway Bold
  },
  lineHeight: {
    tight: '1.5',      // Roboto Regular
    normal: 'normal',    // Open Sans Bold, Raleway Bold
    relaxed: '40px',     // Open Sans Regular (Hero)
  },
  fontFeatureSettings: {
    lnumPnum: "'lnum' 1, 'pnum' 1", // Raleway Bold
    wdth100: "'wdth' 100",          // Open Sans
  },
} as const;

export const figmaSpacing = {
  // Exact pixel values from Figma
  container: {
    full: '1440px',
    content: '1272px',
  },
  section: {
    heroTop: '60px',
    md: '84px',
    lg: '120px',
    xl: '160px',
  },
  positioning: {
    // Hero Section
    logoLeft: '84px',
    logoTop: '60px',
    logoWidth: '205px',
    logoHeight: '72px',
    
    headingLeft: 'calc(50% - 636px)', // Centered with 636px offset
    headingTop: '264px',
    
    subtitleLeft: 'calc(50% - 636px)',
    subtitleTop: '356px',
    
    buttonLeft: '84px',
    buttonTop: '478px',
    buttonWidth: '126px',
    buttonHeight: '42px',
    
    vectorLeft: '935px',
    vectorTop: '162px',
    vectorWidth: '313px',
    vectorHeight: '344px',
    
    // Background Elements
    ellipseLeft: '755px',
    ellipseTop: '12px',
    ellipseSize: '673px',
    
    // Mission Section
    missionTop: '2387px',
    
    // Innovation Initiatives
    innovationTop: '2568px',
    innovationHeadingLeft: 'calc(50% - 312px)',
    innovationContentLeft: '479px',
    
    // Research Areas
    researchTop: '2833px',
    
    // Join Innovation Journey
    joinTop: '3885px',
    
    // Footer
    footerTop: '3868px',
    footerHeight: '354px',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
  },
} as const;

export const figmaAssets = {
  // All Figma assets - Updated to local paths
  bayshoreLogo: '/bayshore-logo.png',
  ellipse2: '/ellipse-bg.png',
  vector1: '/vector-hero.png',
  group421: '/Group 421.svg',
  ellipse16: '/Ellipse 17.svg',
  ellipse17: '/Ellipse 17.svg',
  ellipse18: '/Ellipse 18.svg',
  ellipse19: '/Ellipse 19.svg',
  ellipse20: '/Ellipse 20.svg',
  ellipse21: '/Ellipse 21.svg',
  ellipse22: '/Ellipse 21.svg', // Placeholder if missing
  ellipse23: '/Ellipse 21.svg', 
  ellipse24: '/Ellipse 21.svg', 
  ellipse25: '/Ellipse 21.svg', 
  ellipse26: '/Ellipse 21.svg', 
  ellipse27: '/Ellipse 21.svg', 
  layer1: '/vector-hero.png',
  vector: '/Vector.svg',
  vector2: '/Vector 7.svg',
  divider: '/Rectangle 35.svg',
  youtube: '/globe.svg', // Placeholder
  youtube1: '/globe.svg', 
  vector11: '/Vector 8.svg',
} as const;
