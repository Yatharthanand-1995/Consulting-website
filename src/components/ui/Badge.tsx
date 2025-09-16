'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 tracking-wide',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-gradient-primary text-white hover:shadow-sm hover:scale-105',
        secondary:
          'border-transparent bg-secondary text-white hover:bg-secondary/90 hover:shadow-sm hover:scale-105',
        accent:
          'border-transparent bg-gradient-secondary text-white hover:shadow-sm hover:scale-105',
        success:
          'border-transparent bg-success text-white hover:bg-success/90 hover:shadow-sm hover:scale-105',
        destructive:
          'border-transparent bg-warning text-white hover:bg-warning/90 hover:shadow-sm hover:scale-105',
        warning:
          'border-transparent bg-brand-gold text-white hover:bg-brand-gold/90 hover:shadow-sm hover:scale-105',
        outline:
          'text-secondary border-secondary/30 bg-transparent hover:bg-secondary/5 hover:border-secondary/50 hover:scale-105',
        ghost:
          'border-transparent bg-secondary/10 text-secondary hover:bg-secondary/15 hover:scale-105',
        gradient:
          'border-transparent bg-gradient-brand text-white hover:shadow-brand hover:scale-105',
        premium:
          'border-transparent bg-gradient-to-r from-brand-blue to-brand-purple text-white hover:shadow-sm hover:scale-105',
        executive:
          'border border-neutral-200 bg-white text-neutral-700 hover:bg-gradient-subtle hover:border-secondary/30 hover:text-secondary hover:scale-105',
        neural:
          'border-transparent bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary hover:from-secondary/30 hover:to-accent/30 hover:scale-105',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, icon, removable, onRemove, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {icon && <span className="mr-1 flex items-center">{icon}</span>}
      <span>{children}</span>
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1 flex items-center hover:bg-black/10 rounded-full p-0.5 transition-colors"
          type="button"
        >
          <svg
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  )
);

// Specialized badge components for different use cases
const TechnologyBadge = forwardRef<
  HTMLDivElement,
  BadgeProps & { technology: string; category?: 'ai' | 'cloud' | 'frontend' | 'backend' }
>(({ technology, category, className, ...props }, ref) => {
  const categoryColors = {
    ai: 'bg-purple-500 text-white',
    cloud: 'bg-blue-500 text-white',
    frontend: 'bg-green-500 text-white',
    backend: 'bg-orange-500 text-white',
  };

  return (
    <Badge
      ref={ref}
      className={cn(
        category && categoryColors[category],
        'font-medium',
        className
      )}
      {...props}
    >
      {technology}
    </Badge>
  );
});

const IndustryBadge = forwardRef<
  HTMLDivElement,
  BadgeProps & { industry: string }
>(({ industry, className, ...props }, ref) => (
  <Badge
    ref={ref}
    variant="outline"
    className={cn('border-secondary/50 text-secondary', className)}
    {...props}
  >
    {industry}
  </Badge>
));

const StatusBadge = forwardRef<
  HTMLDivElement,
  BadgeProps & { status: 'active' | 'inactive' | 'pending' | 'completed' }
>(({ status, className, ...props }, ref) => {
  const statusVariants = {
    active: 'bg-green-500 text-white',
    inactive: 'bg-gray-500 text-white',
    pending: 'bg-yellow-500 text-white',
    completed: 'bg-blue-500 text-white',
  };

  return (
    <Badge
      ref={ref}
      className={cn(statusVariants[status], className)}
      {...props}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
});

const MetricBadge = forwardRef<
  HTMLDivElement,
  BadgeProps & {
    value: string | number;
    unit?: string;
    trend?: 'up' | 'down' | 'stable';
    improvement?: boolean;
  }
>(({ value, unit, trend, improvement, className, ...props }, ref) => {
  const trendIcon = {
    up: '↗',
    down: '↘',
    stable: '→',
  };

  const trendColor = improvement
    ? trend === 'up'
      ? 'text-green-600'
      : trend === 'down'
        ? 'text-red-600'
        : 'text-gray-600'
    : trend === 'up'
      ? 'text-red-600'
      : trend === 'down'
        ? 'text-green-600'
        : 'text-gray-600';

  return (
    <Badge
      ref={ref}
      variant="outline"
      className={cn('font-mono', className)}
      {...props}
    >
      <span className="flex items-center space-x-1">
        <span>{value}{unit}</span>
        {trend && <span className={cn('text-sm', trendColor)}>{trendIcon[trend]}</span>}
      </span>
    </Badge>
  );
});

Badge.displayName = 'Badge';
TechnologyBadge.displayName = 'TechnologyBadge';
IndustryBadge.displayName = 'IndustryBadge';
StatusBadge.displayName = 'StatusBadge';
MetricBadge.displayName = 'MetricBadge';

export {
  Badge,
  badgeVariants,
  TechnologyBadge,
  IndustryBadge,
  StatusBadge,
  MetricBadge,
};