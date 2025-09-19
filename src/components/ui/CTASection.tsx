'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { InteractiveButton, Button } from '@/components/ui';

export interface CTASectionProps {
  className?: string;
  title: string | ReactNode;
  description?: string;
  actions?: Array<{
    text: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    href?: string;
    onClick?: () => void;
    className?: string;
    effects?: {
      ripple?: boolean;
      glow?: boolean;
      lift?: boolean;
    };
  }>;
  variant?: 'default' | 'gradient' | 'bordered' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  textColor?: 'dark' | 'light';
}

const variantStyles = {
  default: {
    container: 'rounded-lg bg-gray-50 p-8',
    text: 'text-gray-900',
    description: 'text-gray-600',
  },
  gradient: {
    container: 'rounded-lg bg-gradient-to-r from-blue-700 to-blue-800 p-12',
    text: 'text-white',
    description: 'text-blue-100',
  },
  bordered: {
    container: 'rounded-2xl border border-secondary/20 bg-gradient-to-r from-secondary/10 to-accent/10 p-12',
    text: 'text-gray-900',
    description: 'text-muted-foreground',
  },
  minimal: {
    container: 'p-8',
    text: 'text-gray-900',
    description: 'text-gray-600',
  },
};

const sizeStyles = {
  sm: 'p-6',
  md: 'p-8',
  lg: 'p-12',
};

export function CTASection({
  className,
  title,
  description,
  actions = [],
  variant = 'default',
  size = 'md',
  textColor,
}: CTASectionProps) {
  const styles = variantStyles[variant];
  const actualTextColor = textColor || (variant === 'gradient' ? 'light' : 'dark');

  // Override container padding with size if provided
  const containerClass = variant === 'gradient' || variant === 'bordered' ?
    cn(styles.container.replace(/p-\d+/, ''), sizeStyles[size]) :
    cn(styles.container.replace(/p-\d+/, ''), sizeStyles[size]);

  return (
    <section className={cn('section-professional', className)}>
      <div className="container-professional">
        <div className={cn('text-center', containerClass)}>
          <div className="space-y-6">
            {/* Title */}
            <h2 className={cn(
              'text-3xl md:text-4xl font-semibold',
              actualTextColor === 'light' ? 'text-white' : styles.text
            )}>
              {title}
            </h2>

            {/* Description */}
            {description && (
              <p className={cn(
                'mx-auto max-w-2xl text-xl',
                actualTextColor === 'light' ? 'text-blue-100' : styles.description
              )}>
                {description}
              </p>
            )}

            {/* Actions */}
            {actions.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {actions.map((action, index) => {
                  // Adjust button variants based on CTA variant
                  let buttonVariant = action.variant;
                  let buttonClassName = action.className;

                  if (variant === 'gradient' && !action.variant) {
                    buttonVariant = index === 0 ? 'secondary' : 'outline';
                    if (index === 0) {
                      buttonClassName = cn('bg-white text-blue-700 hover:bg-gray-50', action.className);
                    } else {
                      buttonClassName = cn('border-white text-white hover:bg-white/10', action.className);
                    }
                  }

                  return (
                    <InteractiveButton
                      key={index}
                      variant={buttonVariant || 'primary'}
                      size={action.size || 'lg'}
                      className={cn('font-semibold', buttonClassName)}
                      onClick={action.onClick}
                      ripple={action.effects?.ripple}
                      glow={action.effects?.glow}
                      {...(action.effects?.lift && { className: cn(buttonClassName, 'hover-lift') })}
                    >
                      {action.text}
                    </InteractiveButton>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;