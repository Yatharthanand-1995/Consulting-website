'use client';

import { cn } from '@/lib/utils';

export interface TechDividerProps {
  className?: string;
  variant?: 'blue' | 'teal' | 'purple';
  pattern?: 'diagonal' | 'radial' | 'mixed';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles = {
  blue: {
    background: 'from-blue-900/10 via-indigo-900/20 to-purple-900/10',
    elements: {
      primary: 'border-blue-400 bg-blue-400',
      secondary: 'via-blue-400',
      tertiary: 'via-indigo-400',
      accent: 'bg-purple-400',
    },
  },
  teal: {
    background: 'from-emerald-900/10 via-teal-900/20 to-blue-900/10',
    elements: {
      primary: 'border-teal-400 bg-teal-400',
      secondary: 'via-emerald-400',
      tertiary: 'via-emerald-400',
      accent: 'bg-teal-400',
    },
  },
  purple: {
    background: 'from-purple-900/10 via-violet-900/20 to-indigo-900/10',
    elements: {
      primary: 'border-purple-400 bg-purple-400',
      secondary: 'via-purple-400',
      tertiary: 'via-violet-400',
      accent: 'bg-indigo-400',
    },
  },
};

const patternStyles = {
  diagonal: {
    backgroundImage: `
      linear-gradient(45deg, transparent 49%, rgba(59, 130, 246, 0.1) 50%, transparent 51%),
      linear-gradient(-45deg, transparent 49%, rgba(99, 102, 241, 0.1) 50%, transparent 51%)
    `,
    backgroundSize: '40px 40px',
  },
  radial: {
    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.1) 1px, transparent 1px)`,
    backgroundSize: '30px 30px',
  },
  mixed: {
    backgroundImage: `
      radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px, 80px 80px',
  },
};

const sizeStyles = {
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
};

export function TechDivider({
  className,
  variant = 'blue',
  pattern = 'diagonal',
  size = 'md',
}: TechDividerProps) {
  const variantConfig = variantStyles[variant];
  const patternConfig = patternStyles[pattern];

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        sizeStyles[size],
        className
      )}
      aria-hidden="true"
    >
      {/* Background Gradient */}
      <div className={cn('absolute inset-0 bg-gradient-to-r', variantConfig.background)} />

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0"
        style={patternConfig}
      />

      {/* Animated Elements Container */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex items-center justify-center space-x-4 opacity-60">
          {/* Animated Line */}
          <div
            className={cn(
              'h-px w-12 animate-pulse bg-gradient-to-r from-transparent to-transparent',
              variantConfig.elements.secondary
            )}
          />

          {/* Rotating Element */}
          <div
            className={cn(
              'h-3 w-3 rotate-45 animate-spin rounded border',
              variantConfig.elements.primary
            )}
            style={{ animationDuration: '6s' }}
          />

          {/* Medium Line */}
          <div
            className={cn(
              'h-px w-20 animate-pulse bg-gradient-to-r from-transparent to-transparent',
              variantConfig.elements.tertiary
            )}
            style={{ animationDelay: '1s' }}
          />

          {/* Pulsing Dot */}
          <div
            className={cn(
              'h-2 w-2 animate-pulse rounded-full',
              variantConfig.elements.accent
            )}
            style={{ animationDelay: '0.5s' }}
          />

          {/* Final Line */}
          <div
            className={cn(
              'h-px w-12 animate-pulse bg-gradient-to-r from-transparent to-transparent',
              variantConfig.elements.secondary
            )}
            style={{ animationDelay: '1.5s' }}
          />
        </div>
      </div>
    </section>
  );
}

export default TechDivider;