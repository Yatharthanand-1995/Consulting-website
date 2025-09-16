'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  // Base styles - Enhanced with professional styling
  'rounded-lg transition-all duration-300 group backdrop-blur-sm',
  {
    variants: {
      variant: {
        default:
          'bg-card border border-border hover:shadow-brand hover:border-secondary/20 hover:bg-gradient-subtle',
        glass:
          'backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:shadow-brand',
        outlined:
          'bg-transparent border border-border hover:border-secondary/30 hover:shadow-md hover:bg-gradient-subtle',
        elevated:
          'bg-card shadow-lg hover:shadow-brand border border-border/50 hover:border-secondary/20',
        gradient:
          'bg-gradient-subtle border border-secondary/10 hover:shadow-brand hover:border-secondary/20',
        neural:
          'bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/15 hover:shadow-brand hover:border-secondary/30 hover:from-secondary/8 hover:to-accent/8',
        premium:
          'bg-gradient-to-br from-white via-white to-neutral-50 border border-neutral-200/80 hover:shadow-brand hover:border-secondary/30 hover:from-neutral-50/80 hover:to-white',
        executive:
          'bg-white border border-neutral-200/60 shadow-sm hover:shadow-brand hover:border-secondary/20 hover:bg-gradient-subtle',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-2 hover:shadow-xl',
        scale: 'hover:scale-[1.02] hover:shadow-lg',
        glow: 'hover:shadow-glow hover:-translate-y-1',
        tilt: 'hover:rotate-1 hover:-translate-y-1 transition-transform duration-500',
        float: 'hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.01]',
        professional: 'hover:-translate-y-1 hover:shadow-brand hover:border-secondary/25',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: 'none',
    },
  }
);

const cardHeaderVariants = cva(
  'flex flex-col space-y-1.5',
  {
    variants: {
      padding: {
        none: 'p-0',
        sm: 'p-4 pb-2',
        md: 'p-6 pb-3',
        lg: 'p-8 pb-4',
        xl: 'p-10 pb-5',
      },
    },
    defaultVariants: {
      padding: 'md',
    },
  }
);

const cardContentVariants = cva('', {
  variants: {
    padding: {
      none: 'p-0',
      sm: 'p-4 pt-0',
      md: 'p-6 pt-0',
      lg: 'p-8 pt-0',
      xl: 'p-10 pt-0',
    },
  },
  defaultVariants: {
    padding: 'md',
  },
});

const cardFooterVariants = cva(
  'flex items-center',
  {
    variants: {
      padding: {
        none: 'p-0',
        sm: 'p-4 pt-2',
        md: 'p-6 pt-3',
        lg: 'p-8 pt-4',
        xl: 'p-10 pt-5',
      },
    },
    defaultVariants: {
      padding: 'md',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, hover }), className)}
      {...props}
    />
  )
);

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardHeaderVariants({ padding }), className)}
      {...props}
    />
  )
);

const CardTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight text-foreground',
      className
    )}
    {...props}
  />
));

const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardContentVariants({ padding }), className)}
      {...props}
    />
  )
);

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFooterVariants({ padding }), className)}
      {...props}
    />
  )
);

// Enhanced Card variants for specific use cases
const FeatureCard = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <Card
      ref={ref}
      variant="neural"
      hover="lift"
      className={cn('cursor-pointer', className)}
      {...props}
    >
      {children}
    </Card>
  )
);

const TestimonialCard = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <Card
      ref={ref}
      variant="glass"
      hover="scale"
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 pointer-events-none" />
      <div className="relative">{children}</div>
    </Card>
  )
);

const CaseStudyCard = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <Card
      ref={ref}
      variant="elevated"
      hover="lift"
      className={cn(
        'cursor-pointer overflow-hidden border-l-4 border-l-secondary',
        className
      )}
      {...props}
    >
      {children}
    </Card>
  )
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';
FeatureCard.displayName = 'FeatureCard';
TestimonialCard.displayName = 'TestimonialCard';
CaseStudyCard.displayName = 'CaseStudyCard';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  FeatureCard,
  TestimonialCard,
  CaseStudyCard,
};