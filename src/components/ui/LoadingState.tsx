'use client';

import { cn } from '@/lib/utils';

export interface LoadingStateProps {
  variant?: 'default' | 'card' | 'text' | 'image' | 'section';
  className?: string;
  height?: string | number;
  width?: string | number;
  lines?: number;
}

export function LoadingState({
  variant = 'default',
  className,
  height,
  width,
  lines = 3,
}: LoadingStateProps) {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';

  switch (variant) {
    case 'card':
      return (
        <div className={cn('p-6 border border-gray-200 rounded-lg bg-white', className)}>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="space-y-2">
              {Array.from({ length: lines }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'h-3 bg-gray-200 rounded animate-pulse',
                    i === lines - 1 ? 'w-1/2' : 'w-full'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      );

    case 'text':
      return (
        <div className={cn('space-y-2', className)}>
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className={cn(
                'h-4 bg-gray-200 rounded animate-pulse',
                i === 0 ? 'w-full' : i === lines - 1 ? 'w-3/4' : 'w-5/6'
              )}
            />
          ))}
        </div>
      );

    case 'image':
      return (
        <div
          className={cn(
            'bg-gray-200 rounded animate-pulse flex items-center justify-center',
            className
          )}
          style={{ height, width }}
        >
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      );

    case 'section':
      return (
        <div className={cn('py-16 px-6', className)}>
          <div className="container mx-auto max-w-7xl">
            <div className="space-y-8">
              {/* Header skeleton */}
              <div className="text-center space-y-4">
                <div className="h-6 bg-gray-200 rounded w-24 mx-auto animate-pulse" />
                <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto animate-pulse" />
              </div>

              {/* Content skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="p-6 border border-gray-200 rounded-lg">
                    <div className="space-y-4">
                      <div className="h-32 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-full animate-pulse" />
                        <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div
          className={cn(baseClasses, className)}
          style={{ height, width }}
        />
      );
  }
}

export default LoadingState;