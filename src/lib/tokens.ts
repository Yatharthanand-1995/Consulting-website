/**
 * Design System Tokens for GenAI Consulting Website
 * Based on requirements in genai-consulting-website-prompt.md
 */

export const colors = {
  // Brand Colors
  primary: '#0A0E27', // Deep Navy
  secondary: '#4A7FFF', // Electric Blue
  accent: '#00D4FF', // Cyan
  success: '#10B981', // Emerald

  // Neutral Scale
  neutral: {
    100: '#F7F8FA',
    200: '#E5E7EB',
    900: '#111827',
  },

  // Semantic Colors
  background: 'var(--color-background)',
  foreground: 'var(--color-foreground)',
  card: 'var(--color-card)',
  'card-foreground': 'var(--color-card-foreground)',
  muted: 'var(--color-muted)',
  'muted-foreground': 'var(--color-muted-foreground)',
  border: 'var(--color-border)',
} as const;

export const gradients = {
  1: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  2: 'linear-gradient(135deg, #00D4FF 0%, #4A7FFF 100%)',
  neural: 'linear-gradient(45deg, #0A0E27 0%, #4A7FFF 50%, #00D4FF 100%)',
  glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
} as const;

export const typography = {
  fonts: {
    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },

  sizes: {
    // Hero Text
    hero: {
      mobile: '2.5rem', // 40px
      tablet: '4rem', // 64px
      desktop: '6rem', // 96px
    },

    // Section Headers
    h1: {
      mobile: '2rem', // 32px
      tablet: '2.5rem', // 40px
      desktop: '3.5rem', // 56px
    },

    h2: {
      mobile: '1.75rem', // 28px
      tablet: '2rem', // 32px
      desktop: '3rem', // 48px
    },

    h3: {
      mobile: '1.5rem', // 24px
      tablet: '1.75rem', // 28px
      desktop: '2rem', // 32px
    },

    // Body Text
    body: {
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
    },
  },

  weights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.6,
    loose: 2,
  },
} as const;

export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '5rem', // 80px
  '5xl': '6rem', // 96px

  // Section spacing
  section: {
    mobile: '3rem', // 48px
    tablet: '4rem', // 64px
    desktop: '6rem', // 96px
  },
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem', // 4px
  md: '0.5rem', // 8px
  lg: '0.75rem', // 12px
  xl: '1rem', // 16px
  '2xl': '1.5rem', // 24px
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',

  // Special shadows for AI elements
  glow: '0 0 20px rgba(74, 127, 255, 0.3)',
  'glow-accent': '0 0 30px rgba(0, 212, 255, 0.4)',
  neural: '0 8px 32px rgba(10, 14, 39, 0.3)',
} as const;

export const animation = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '800ms',
  },

  easing: {
    linear: 'linear',
    out: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  dropdown: 10,
  sticky: 20,
  banner: 30,
  overlay: 40,
  modal: 50,
  popover: 60,
  skipLink: 70,
  toast: 80,
  tooltip: 90,
} as const;

// Component-specific tokens
export const components = {
  button: {
    height: {
      sm: '2rem', // 32px
      md: '2.5rem', // 40px
      lg: '3rem', // 48px
      xl: '3.5rem', // 56px
    },
    padding: {
      sm: '0.5rem 1rem',
      md: '0.75rem 1.5rem',
      lg: '1rem 2rem',
      xl: '1.25rem 2.5rem',
    },
  },

  card: {
    padding: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
    },
    radius: borderRadius.xl,
  },

  modal: {
    backdrop: 'rgba(10, 14, 39, 0.8)',
    maxWidth: {
      sm: '28rem', // 448px
      md: '32rem', // 512px
      lg: '42rem', // 672px
      xl: '48rem', // 768px
    },
  },
} as const;

// Export all tokens as a single object for easy access
export const tokens = {
  colors,
  gradients,
  typography,
  spacing,
  borderRadius,
  shadows,
  animation,
  breakpoints,
  zIndex,
  components,
} as const;

export default tokens;