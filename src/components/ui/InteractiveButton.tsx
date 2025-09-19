'use client';

import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface InteractiveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  ripple?: boolean;
  pulse?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

export function InteractiveButton({
  variant = 'primary',
  size = 'md',
  ripple = true,
  pulse = false,
  glow = false,
  className,
  children,
  disabled,
  onMouseEnter,
  onMouseLeave,
  onClick,
  ...props
}: InteractiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  let rippleTimeout: NodeJS.Timeout;

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(false);
    onMouseLeave?.(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();

      setRipples(prev => [...prev, { x, y, id }]);

      rippleTimeout = setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 600);
    }

    onClick?.(e);
  };

  const baseClasses = cn(
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    'active:scale-95 select-none overflow-hidden',
    'will-change-transform',
    {
      'cursor-not-allowed opacity-50': disabled,
      'transform hover:scale-105 active:scale-95': !disabled,
      'animate-pulse': pulse && !disabled,
    }
  );

  const variantClasses = {
    primary: cn(
      'bg-blue-700 text-white border-2 border-transparent',
      'hover:bg-blue-800 active:bg-blue-900',
      'shadow-md hover:shadow-lg active:shadow-sm',
      {
        'shadow-blue-500/25 hover:shadow-blue-500/40': glow && !disabled,
      }
    ),
    secondary: cn(
      'bg-gray-100 text-gray-900 border-2 border-gray-200',
      'hover:bg-gray-200 hover:border-gray-300 active:bg-gray-300',
      'shadow-sm hover:shadow-md active:shadow-sm'
    ),
    outline: cn(
      'bg-transparent text-blue-700 border-2 border-blue-700',
      'hover:bg-blue-50 hover:border-blue-800 active:bg-blue-100',
      'shadow-sm hover:shadow-md active:shadow-sm'
    ),
    ghost: cn(
      'bg-transparent text-gray-700 border-2 border-transparent',
      'hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200',
      'hover:shadow-sm'
    ),
    link: cn(
      'bg-transparent text-blue-700 border-2 border-transparent underline-offset-4',
      'hover:underline hover:text-blue-800 active:text-blue-900'
    ),
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-lg',
    xl: 'px-8 py-4 text-xl rounded-xl',
  };

  return (
    <button
      ref={buttonRef}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {/* Ripple effects */}
      {ripple && ripples.map(({ x, y, id }) => (
        <span
          key={id}
          className="absolute pointer-events-none rounded-full bg-white/30 animate-ping"
          style={{
            left: x - 10,
            top: y - 10,
            width: 20,
            height: 20,
            animationDuration: '0.6s',
          }}
        />
      ))}

      {/* Hover glow effect */}
      {glow && isHovered && !disabled && (
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse" />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Hover shimmer effect */}
      {isHovered && !disabled && variant === 'primary' && (
        <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      )}
    </button>
  );
}

export default InteractiveButton;