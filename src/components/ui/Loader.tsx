'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const loaderVariants = cva('', {
  variants: {
    variant: {
      spinner: 'animate-spin',
      dots: 'flex space-x-1',
      pulse: 'animate-pulse',
      neural: 'relative',
      gradient: 'animate-spin',
    },
    size: {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      muted: 'text-muted-foreground',
      white: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'spinner',
    size: 'md',
    color: 'secondary',
  },
});

export interface LoaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof loaderVariants> {
  text?: string;
}

const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, variant, size, color, text, ...props }, ref) => {
    const renderLoader = () => {
      switch (variant) {
        case 'spinner':
          return (
            <svg
              className={cn(loaderVariants({ variant, size, color }), className)}
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          );

        case 'dots':
          return (
            <div className={cn(loaderVariants({ variant }), className)}>
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className={cn(
                    'rounded-full animate-bounce',
                    size === 'sm' && 'w-1 h-1',
                    size === 'md' && 'w-2 h-2',
                    size === 'lg' && 'w-3 h-3',
                    size === 'xl' && 'w-4 h-4',
                    color === 'primary' && 'bg-primary',
                    color === 'secondary' && 'bg-secondary',
                    color === 'accent' && 'bg-accent',
                    color === 'muted' && 'bg-muted-foreground',
                    color === 'white' && 'bg-white'
                  )}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          );

        case 'pulse':
          return (
            <div
              className={cn(
                loaderVariants({ variant, size }),
                'bg-current rounded-full',
                className
              )}
              style={{
                color:
                  color === 'primary'
                    ? 'var(--primary)'
                    : color === 'secondary'
                      ? 'var(--secondary)'
                      : color === 'accent'
                        ? 'var(--accent)'
                        : 'currentColor',
              }}
            />
          );

        case 'neural':
          return (
            <div className={cn(loaderVariants({ size }), 'relative', className)}>
              <div className="absolute inset-0 rounded-full border-2 border-secondary/20" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-secondary animate-spin" />
              <div
                className="absolute inset-1 rounded-full border-2 border-transparent border-t-accent animate-spin"
                style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-secondary rounded-full animate-pulse" />
              </div>
            </div>
          );

        case 'gradient':
          return (
            <div
              className={cn(
                loaderVariants({ variant, size }),
                'rounded-full border-4 border-transparent',
                className
              )}
              style={{
                background: 'conic-gradient(from 0deg, var(--secondary), var(--accent), var(--secondary))',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), white calc(100% - 4px))',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), white calc(100% - 4px))',
              }}
            />
          );

        default:
          return null;
      }
    };

    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-center', text && 'flex-col space-y-2')}
        {...props}
      >
        {renderLoader()}
        {text && (
          <p className={cn('text-sm', color === 'white' ? 'text-white' : 'text-muted-foreground')}>
            {text}
          </p>
        )}
      </div>
    );
  }
);

// Specialized loading components
const PageLoader = forwardRef<HTMLDivElement, Omit<LoaderProps, 'variant'>>(
  ({ className, text = 'Loading...', size, color, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm',
        className
      )}
      {...props}
    >
      <Loader variant="neural" size={size || "xl"} color={color} text={text} />
    </div>
  )
);

const InlineLoader = forwardRef<HTMLDivElement, Omit<LoaderProps, 'variant' | 'size'>>(
  ({ className, color, text, ...props }, ref) => (
    <Loader
      ref={ref}
      variant="spinner"
      size="sm"
      color={color}
      text={text}
      className={cn('inline-block', className)}
      {...props}
    />
  )
);

const ButtonLoader = forwardRef<HTMLDivElement, Omit<LoaderProps, 'variant' | 'size'>>(
  ({ className, color = 'white' as const, text, ...props }, ref) => (
    <Loader
      ref={ref}
      variant="spinner"
      size="sm"
      color={color}
      text={text}
      className={cn('inline-block', className)}
      {...props}
    />
  )
);

const SkeletonLoader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    width?: string | number;
    height?: string | number;
    rounded?: boolean;
  }
>(({ className, width, height, rounded = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'animate-pulse bg-muted',
      rounded ? 'rounded-full' : 'rounded',
      className
    )}
    style={{
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
    }}
    {...props}
  />
));

// AI-themed loading component
const AILoader = forwardRef<HTMLDivElement, Omit<LoaderProps, 'variant'>>(
  ({ className, text = 'AI Processing...', size, color, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col items-center space-y-4', className)}
      {...props}
    >
      <div className="relative">
        <Loader variant="neural" size={size || "lg"} color={color} />
        <div className="absolute -inset-2 rounded-full border border-secondary/20 animate-ping" />
      </div>
      {text && (
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">{text}</p>
          <div className="flex space-x-1 mt-2 justify-center">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-1 h-1 bg-secondary rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
);

Loader.displayName = 'Loader';
PageLoader.displayName = 'PageLoader';
InlineLoader.displayName = 'InlineLoader';
ButtonLoader.displayName = 'ButtonLoader';
SkeletonLoader.displayName = 'SkeletonLoader';
AILoader.displayName = 'AILoader';

export {
  Loader,
  PageLoader,
  InlineLoader,
  ButtonLoader,
  SkeletonLoader,
  AILoader,
  loaderVariants,
};