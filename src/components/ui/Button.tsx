'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // McKinsey-style professional base
  'inline-flex items-center justify-center whitespace-nowrap rounded font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-navy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-navy text-white hover:bg-midnight-blue border-2 border-transparent active:bg-primary-navy/90',
        secondary:
          'bg-transparent text-primary-navy border-2 border-primary-navy hover:bg-primary-navy hover:text-white active:bg-primary-navy/90 active:text-white',
        ghost:
          'text-primary-navy hover:bg-muted active:bg-muted/80 border-2 border-transparent',
        link:
          'text-primary-navy underline-offset-4 hover:underline hover:text-midnight-blue p-0 h-auto',
        outline:
          'border-2 border-border bg-transparent text-foreground hover:bg-muted hover:border-primary-navy/20',
        success:
          'bg-data-green text-white hover:bg-data-green/90 border-2 border-transparent',
        muted:
          'bg-muted text-muted-foreground hover:bg-border border-2 border-transparent',
        gradient:
          'bg-gradient-to-r from-primary-navy to-accent-blue text-white hover:opacity-90 border-2 border-transparent',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-10 px-6 text-sm',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
        icon: 'h-10 w-10',
        compact: 'h-8 px-3 text-xs',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      href,
      external,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    // If href is provided, render as link-like button
    if (href) {
      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={cn(
            buttonVariants({ variant, size }),
            'no-underline cursor-pointer',
            className
          )}
        >
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
          {external && (
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </a>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
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
        )}

        {!loading && leftIcon && (
          <span className="mr-2 flex items-center">{leftIcon}</span>
        )}

        <span className={loading ? 'opacity-70' : ''}>{children}</span>

        {!loading && rightIcon && (
          <span className="ml-2 flex items-center">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };