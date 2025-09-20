'use client';

import { cn } from '@/lib/utils';

export interface StratexLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?:
    | 'default'
    | 'white'
    | 'gradient'
    | 'minimal'
    | 'premium'
    | 'executive'
    | 'contact';
  animated?: boolean;
  showText?: boolean;
}

export function StratexLogo({
  className,
  size = 'md',
  variant = 'default',
  animated = false,
  showText = true,
}: StratexLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl',
  };

  const LogoIcon = () => (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden',
        sizeClasses[size],
        variant === 'premium' || variant === 'executive'
          ? 'rounded-xl'
          : 'rounded-lg',
        animated &&
          'transition-all duration-500 group-hover:scale-110 group-hover:rotate-2'
      )}
    >
      {/* Professional Background with Depth */}
      <div
        className={cn(
          'absolute inset-0',
          variant === 'gradient' &&
            'bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800',
          variant === 'default' &&
            'bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900',
          variant === 'white' && 'border-2 border-slate-200 bg-white shadow-sm',
          variant === 'minimal' &&
            'bg-gradient-to-br from-slate-50 to-slate-100',
          variant === 'premium' &&
            'border border-blue-800/20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 shadow-2xl',
          variant === 'executive' &&
            'border-2 border-blue-200/50 bg-gradient-to-br from-white via-blue-50 to-indigo-50 shadow-xl',
          variant === 'contact' &&
            'border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 shadow-lg'
        )}
      />

      {/* Neural Network Background Pattern */}
      <div
        className={cn(
          'absolute inset-0 opacity-20',
          animated && 'animate-pulse'
        )}
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(45deg, transparent 48%, rgba(147, 197, 253, 0.2) 50%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(165, 180, 252, 0.2) 50%, transparent 52%)
          `,
          backgroundSize: '12px 12px, 16px 16px, 24px 24px, 24px 24px',
        }}
      />

      {/* Logo Symbol - Professional Hexagonal Design */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {/* Hexagonal Frame */}
        <div className="relative">
          {/* Outer Hexagon Ring */}
          <div
            className={cn(
              'absolute inset-0 rotate-12 transform',
              size === 'sm' && 'h-6 w-6',
              size === 'md' && 'h-8 w-8',
              size === 'lg' && 'h-12 w-12',
              size === 'xl' && 'h-16 w-16'
            )}
            style={{
              background:
                variant === 'white' ||
                variant === 'executive' ||
                variant === 'contact'
                  ? 'linear-gradient(45deg, #3b82f6, #6366f1)'
                  : 'linear-gradient(45deg, rgba(255,255,255,0.3), rgba(147,197,253,0.5))',
              clipPath:
                'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              opacity: animated ? '0.8' : '0.6',
            }}
          />

          {/* Central Neural Node */}
          <div className="relative flex items-center justify-center">
            {/* Strategic "S" with Enhanced Typography */}
            <div
              className={cn(
                'relative z-20 flex flex-col items-center justify-center font-bold',
                variant === 'white' ||
                  variant === 'executive' ||
                  variant === 'contact'
                  ? 'text-blue-700'
                  : 'text-white',
                size === 'sm' && 'text-xs',
                size === 'md' && 'text-sm',
                size === 'lg' && 'text-lg',
                size === 'xl' && 'text-2xl'
              )}
            >
              {/* Enhanced "S" with Professional Styling */}
              <div className="relative">
                <span
                  className="relative z-10 font-black tracking-tighter"
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    textShadow:
                      variant === 'white' ||
                      variant === 'executive' ||
                      variant === 'contact'
                        ? 'none'
                        : '0 1px 2px rgba(0,0,0,0.3)',
                  }}
                >
                  S
                </span>

                {/* Neural Connection Points */}
                <div
                  className={cn(
                    'absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full',
                    variant === 'white' ||
                      variant === 'executive' ||
                      variant === 'contact'
                      ? 'bg-blue-600'
                      : 'bg-cyan-400',
                    animated && 'animate-pulse'
                  )}
                  style={{ animationDelay: '0s' }}
                />
                <div
                  className={cn(
                    'absolute -bottom-1 -left-1 h-1.5 w-1.5 rounded-full',
                    variant === 'white' ||
                      variant === 'executive' ||
                      variant === 'contact'
                      ? 'bg-indigo-600'
                      : 'bg-violet-400',
                    animated && 'animate-pulse'
                  )}
                  style={{ animationDelay: '0.7s' }}
                />
                <div
                  className={cn(
                    'absolute top-1/2 -right-1 h-1 w-1 rounded-full',
                    variant === 'white' ||
                      variant === 'executive' ||
                      variant === 'contact'
                      ? 'bg-purple-600'
                      : 'bg-emerald-400',
                    animated && 'animate-ping'
                  )}
                  style={{ animationDelay: '1.4s' }}
                />
              </div>

              {/* Enhanced AI Indicator */}
              <div className="mt-1 flex items-center space-x-0.5">
                <div
                  className={cn(
                    'h-0.5 w-2',
                    variant === 'white' ||
                      variant === 'executive' ||
                      variant === 'contact'
                      ? 'bg-indigo-600'
                      : 'bg-blue-300',
                    animated && 'animate-pulse'
                  )}
                  style={{ animationDelay: '0.3s' }}
                />
                <div
                  className={cn(
                    'h-1 w-1 rounded-full',
                    variant === 'white' ||
                      variant === 'executive' ||
                      variant === 'contact'
                      ? 'bg-blue-600'
                      : 'bg-cyan-300',
                    animated && 'animate-pulse'
                  )}
                  style={{ animationDelay: '0.6s' }}
                />
                <div
                  className={cn(
                    'h-0.5 w-2',
                    variant === 'white' ||
                      variant === 'executive' ||
                      variant === 'contact'
                      ? 'bg-indigo-600'
                      : 'bg-blue-300',
                    animated && 'animate-pulse'
                  )}
                  style={{ animationDelay: '0.9s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Border Effects */}
      {(variant === 'premium' || variant === 'gradient') && (
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-20 blur-sm" />
      )}

      {variant === 'executive' && (
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 opacity-40 blur-sm" />
      )}
    </div>
  );

  if (!showText) {
    return (
      <div className={cn('group', className)}>
        <LogoIcon />
      </div>
    );
  }

  return (
    <div className={cn('group flex items-center space-x-3', className)}>
      <LogoIcon />
      <div className="flex items-center">
        <h1
          className={cn(
            'leading-none font-bold tracking-tight',
            textSizeClasses[size],
            variant === 'white'
              ? 'text-white'
              : variant === 'executive' || variant === 'contact'
                ? 'text-blue-700'
                : 'text-slate-800',
            // Enhanced typography
            'relative'
          )}
          style={{
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '700',
            letterSpacing: '-0.025em',
          }}
        >
          <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text font-black text-transparent">
            Stratex
          </span>
          <span className="ml-1 font-semibold text-blue-600">AI</span>
        </h1>
      </div>
    </div>
  );
}

export default StratexLogo;
