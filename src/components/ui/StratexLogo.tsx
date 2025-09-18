'use client';

import { cn } from '@/lib/utils';

export interface StratexLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'gradient' | 'minimal';
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
        'relative flex items-center justify-center overflow-hidden rounded-lg',
        sizeClasses[size],
        animated && 'transition-transform duration-300 group-hover:scale-110'
      )}
    >
      {/* Background Gradient */}
      <div
        className={cn(
          'absolute inset-0',
          variant === 'gradient' &&
            'bg-gradient-to-br from-indigo-600 via-purple-700 to-violet-800',
          variant === 'default' &&
            'bg-gradient-to-br from-slate-800 via-indigo-700 to-purple-800',
          variant === 'white' && 'border border-slate-200 bg-white',
          variant === 'minimal' && 'bg-slate-100'
        )}
      />

      {/* Animated Background Pattern */}
      {animated && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.4) 2px, transparent 2px),
            linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.3) 50%, transparent 70%)
          `,
            backgroundSize: '20px 20px, 40px 40px',
            animation: animated ? 'pulse 3s ease-in-out infinite' : 'none',
          }}
        />
      )}

      {/* Logo Elements */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {/* Strategic "S" with AI Circuit Pattern */}
        <div
          className={cn(
            'flex flex-col items-center justify-center font-bold',
            variant === 'white' ? 'text-slate-800' : 'text-white',
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-sm',
            size === 'lg' && 'text-lg',
            size === 'xl' && 'text-2xl'
          )}
        >
          {/* Main "S" */}
          <div className="relative">
            <span className="font-extrabold tracking-tighter">S</span>
            {/* Circuit dots */}
            <div
              className={cn(
                'absolute -top-0.5 -right-0.5 h-1 w-1 rounded-full',
                variant === 'white' ? 'bg-violet-600' : 'bg-emerald-300',
                animated && 'animate-pulse'
              )}
            />
            <div
              className={cn(
                'absolute -bottom-0.5 -left-0.5 h-1 w-1 rounded-full',
                variant === 'white' ? 'bg-purple-600' : 'bg-cyan-300',
                animated && 'animate-ping'
              )}
              style={{ animationDelay: '0.5s' }}
            />
          </div>

          {/* AI indicator line */}
          <div
            className={cn(
              'mt-0.5 h-0.5 w-3',
              variant === 'white' ? 'bg-indigo-600' : 'bg-violet-300',
              animated && 'animate-pulse'
            )}
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>

      {/* Subtle border glow */}
      {variant === 'gradient' && (
        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-sm" />
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
      <div className="flex flex-col">
        <h1
          className={cn(
            'font-bold tracking-tight',
            textSizeClasses[size],
            variant === 'white' ? 'text-white' : 'text-slate-800'
          )}
        >
          Stratex AI
        </h1>
        {size !== 'sm' && (
          <p
            className={cn(
              'text-xs font-medium tracking-wide uppercase opacity-75',
              variant === 'white' ? 'text-white/80' : 'text-slate-600',
              animated &&
                'transition-opacity duration-300 group-hover:opacity-100'
            )}
          >
            Where Strategy Meets Intelligence
          </p>
        )}
      </div>
    </div>
  );
}

export default StratexLogo;
