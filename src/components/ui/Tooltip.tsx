'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tooltipVariants = cva(
  'absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm whitespace-nowrap pointer-events-none transform transition-all duration-200',
  {
    variants: {
      position: {
        top: '-translate-y-full -top-2 left-1/2 -translate-x-1/2',
        bottom: 'translate-y-full -bottom-2 left-1/2 -translate-x-1/2',
        left: '-translate-x-full -left-2 top-1/2 -translate-y-1/2',
        right: 'translate-x-full -right-2 top-1/2 -translate-y-1/2',
        'top-left': '-translate-y-full -top-2 left-0',
        'top-right': '-translate-y-full -top-2 right-0',
        'bottom-left': 'translate-y-full -bottom-2 left-0',
        'bottom-right': 'translate-y-full -bottom-2 right-0',
      },
      variant: {
        default: 'bg-gray-900 text-white',
        light: 'bg-white text-gray-900 border border-gray-200',
        error: 'bg-red-600 text-white',
        warning: 'bg-yellow-600 text-white',
        success: 'bg-green-600 text-white',
        info: 'bg-blue-600 text-white',
      },
      size: {
        sm: 'px-2 py-1 text-xs',
        default: 'px-3 py-2 text-sm',
        lg: 'px-4 py-3 text-base',
      },
    },
    defaultVariants: {
      position: 'top',
      variant: 'default',
      size: 'default',
    },
  }
);

const arrowVariants = cva('absolute w-2 h-2 transform rotate-45', {
  variants: {
    position: {
      top: 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2',
      bottom: 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2',
      left: 'left-full top-1/2 -translate-y-1/2 -translate-x-1/2',
      right: 'right-full top-1/2 -translate-y-1/2 translate-x-1/2',
      'top-left': 'top-full left-4 -translate-y-1/2',
      'top-right': 'top-full right-4 -translate-y-1/2',
      'bottom-left': 'bottom-full left-4 translate-y-1/2',
      'bottom-right': 'bottom-full right-4 translate-y-1/2',
    },
    variant: {
      default: 'bg-gray-900',
      light: 'bg-white border-l border-b border-gray-200',
      error: 'bg-red-600',
      warning: 'bg-yellow-600',
      success: 'bg-green-600',
      info: 'bg-blue-600',
    },
  },
  defaultVariants: {
    position: 'top',
    variant: 'default',
  },
});

export interface TooltipProps extends VariantProps<typeof tooltipVariants> {
  children: ReactNode;
  content: ReactNode;
  className?: string;
  contentClassName?: string;
  disabled?: boolean;
  delay?: number;
  showArrow?: boolean;
  trigger?: 'hover' | 'click' | 'focus';
}

export function Tooltip({
  children,
  content,
  position,
  variant,
  size,
  className,
  contentClassName,
  disabled = false,
  delay = 500,
  showArrow = true,
  trigger = 'hover',
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDelayComplete, setIsDelayComplete] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (disabled) return;

    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsDelayComplete(true);
        setIsVisible(true);
      }, delay);
    } else {
      setIsDelayComplete(true);
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
    setIsDelayComplete(false);
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      showTooltip();
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      hideTooltip();
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      if (isVisible) {
        hideTooltip();
      } else {
        showTooltip();
      }
    }
  };

  const handleFocus = () => {
    if (trigger === 'focus') {
      showTooltip();
    }
  };

  const handleBlur = () => {
    if (trigger === 'focus') {
      hideTooltip();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isVisible) {
      hideTooltip();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        trigger === 'click' &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        hideTooltip();
      }
    };

    if (isVisible && trigger === 'click') {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible, trigger]);

  const shouldShowTooltip = isVisible && isDelayComplete && !disabled;

  return (
    <div
      ref={containerRef}
      className={cn('relative inline-block', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {children}

      {shouldShowTooltip && (
        <div
          className={cn(
            tooltipVariants({ position, variant, size }),
            'scale-95 opacity-0',
            shouldShowTooltip && 'scale-100 opacity-100',
            contentClassName
          )}
          role="tooltip"
          aria-hidden={!shouldShowTooltip}
        >
          {content}
          {showArrow && (
            <div className={cn(arrowVariants({ position, variant }))} />
          )}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
