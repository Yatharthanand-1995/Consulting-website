'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const dropdownVariants = cva(
  'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white shadow-md',
  {
    variants: {
      size: {
        sm: 'min-w-[6rem] text-sm',
        default: 'min-w-[8rem]',
        lg: 'min-w-[12rem]',
      },
      position: {
        'bottom-left': 'top-full left-0 mt-1',
        'bottom-right': 'top-full right-0 mt-1',
        'top-left': 'bottom-full left-0 mb-1',
        'top-right': 'bottom-full right-0 mb-1',
      },
    },
    defaultVariants: {
      size: 'default',
      position: 'bottom-left',
    },
  }
);

const dropdownItemVariants = cva(
  'relative flex cursor-pointer select-none items-center px-3 py-2 text-sm outline-none transition-colors',
  {
    variants: {
      variant: {
        default: 'hover:bg-gray-100 focus:bg-gray-100',
        destructive: 'text-red-600 hover:bg-red-50 focus:bg-red-50',
        disabled: 'pointer-events-none opacity-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface DropdownProps extends VariantProps<typeof dropdownVariants> {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  disabled?: boolean;
  closeOnClick?: boolean;
}

export interface DropdownItemProps
  extends VariantProps<typeof dropdownItemVariants> {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface DropdownSeparatorProps {
  className?: string;
}

export interface DropdownLabelProps {
  children: ReactNode;
  className?: string;
}

export function Dropdown({
  trigger,
  children,
  size,
  position,
  className,
  contentClassName,
  disabled = false,
  closeOnClick = true,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleTriggerClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = () => {
    if (closeOnClick) {
      setIsOpen(false);
    }
  };

  return (
    <div ref={dropdownRef} className={cn('relative inline-block', className)}>
      <div
        onClick={handleTriggerClick}
        className={cn(
          'cursor-pointer',
          disabled && 'cursor-not-allowed opacity-50'
        )}
      >
        {trigger}
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" />
          <div
            className={cn(
              dropdownVariants({ size, position }),
              contentClassName
            )}
          >
            <div onClick={handleItemClick}>{children}</div>
          </div>
        </>
      )}
    </div>
  );
}

export function DropdownItem({
  children,
  onClick,
  variant,
  className,
  disabled = false,
  icon,
}: DropdownItemProps) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        dropdownItemVariants({ variant: disabled ? 'disabled' : variant }),
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className="flex-1">{children}</span>
    </div>
  );
}

export function DropdownSeparator({ className }: DropdownSeparatorProps) {
  return <div className={cn('my-1 h-px bg-gray-200', className)} />;
}

export function DropdownLabel({ children, className }: DropdownLabelProps) {
  return (
    <div
      className={cn(
        'px-3 py-2 text-xs font-semibold tracking-wider text-gray-500 uppercase',
        className
      )}
    >
      {children}
    </div>
  );
}

export default Dropdown;
