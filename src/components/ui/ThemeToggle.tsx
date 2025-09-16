'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/providers/ThemeProvider';
import { Button } from './Button';

export interface ThemeToggleProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'button' | 'icon' | 'dropdown';
  size?: 'sm' | 'md' | 'lg';
}

const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, variant = 'icon', size = 'md', ...props }, ref) => {
    const { setTheme, resolvedTheme } = useTheme();

    const toggleTheme = () => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    if (variant === 'button') {
      return (
        <Button
          ref={ref}
          variant="ghost"
          size={size}
          onClick={toggleTheme}
          className={cn('gap-2', className)}
          {...props}
        >
          {resolvedTheme === 'dark' ? (
            <>
              <SunIcon className="h-4 w-4" />
              Light Mode
            </>
          ) : (
            <>
              <MoonIcon className="h-4 w-4" />
              Dark Mode
            </>
          )}
        </Button>
      );
    }

    if (variant === 'dropdown') {
      return (
        <div className="relative">
          <Button
            ref={ref}
            variant="ghost"
            size={size}
            className={cn('gap-2', className)}
            {...props}
          >
            {resolvedTheme === 'dark' ? (
              <MoonIcon className="h-4 w-4" />
            ) : (
              <SunIcon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          {/* TODO: Add dropdown menu for system/light/dark options */}
        </div>
      );
    }

    // Default icon variant
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className={cn('relative', className)}
        {...props}
      >
        <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }
);

// Icon components
const SunIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

ThemeToggle.displayName = 'ThemeToggle';

export { ThemeToggle };