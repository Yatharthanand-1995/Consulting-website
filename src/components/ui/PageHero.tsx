'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Badge, InteractiveButton } from '@/components/ui';

export interface PageHeroProps {
  className?: string;
  badge?: {
    text: string;
    variant?: 'outline' | 'gradient';
    className?: string;
  };
  title: string | ReactNode;
  description?: string;
  actions?: Array<{
    text: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    effects?: {
      ripple?: boolean;
      glow?: boolean;
      lift?: boolean;
    };
  }>;
  background?: 'default' | 'gradient' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  alignment?: 'left' | 'center';
}

const backgroundStyles = {
  default: 'bg-background',
  gradient: 'bg-gradient-to-br from-background via-background to-muted/20',
  minimal: 'bg-gray-50',
};

const sizeStyles = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20',
};

export function PageHero({
  className,
  badge,
  title,
  description,
  actions = [],
  background = 'default',
  size = 'lg',
  alignment = 'center',
}: PageHeroProps) {
  const isCenter = alignment === 'center';

  return (
    <section className={cn(
      'section-professional critical-section',
      backgroundStyles[background],
      sizeStyles[size],
      className
    )}>
      <div className="container-professional">
        <div className={cn(
          'space-y-8',
          isCenter ? 'text-center' : 'text-left'
        )}>
          {/* Badge */}
          {badge && (
            <div className={cn(isCenter ? 'flex justify-center' : '')}>
              <Badge
                variant={badge.variant || 'outline'}
                className={cn(
                  badge.variant === 'gradient'
                    ? ''
                    : 'border-blue-600 bg-blue-50 text-blue-700',
                  badge.className
                )}
              >
                {badge.text}
              </Badge>
            </div>
          )}

          {/* Title */}
          <h1 className={cn(
            'text-4xl md:text-5xl lg:text-6xl font-semibold text-balance',
            isCenter ? 'mx-auto' : ''
          )}>
            {typeof title === 'string' ? (
              <span className="text-gray-900">{title}</span>
            ) : (
              title
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className={cn(
              'text-xl text-gray-600 leading-relaxed',
              isCenter ? 'max-w-3xl mx-auto' : 'max-w-3xl'
            )}>
              {description}
            </p>
          )}

          {/* Actions */}
          {actions.length > 0 && (
            <div className={cn(
              'flex flex-col sm:flex-row gap-4',
              isCenter ? 'justify-center' : 'justify-start'
            )}>
              {actions.map((action, index) => (
                <InteractiveButton
                  key={index}
                  variant={action.variant || 'primary'}
                  size={action.size || 'lg'}
                  className={cn('font-semibold', action.className)}
                  onClick={action.onClick}
                  ripple={action.effects?.ripple}
                  glow={action.effects?.glow}
                  {...(action.effects?.lift && { className: cn(action.className, 'hover-lift') })}
                >
                  {action.text}
                </InteractiveButton>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;