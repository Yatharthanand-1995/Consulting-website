'use client';

import { cn } from '@/lib/utils';

export interface LoadingStateProps {
  variant?:
    | 'default'
    | 'card'
    | 'text'
    | 'image'
    | 'section'
    | 'list'
    | 'table'
    | 'avatar';
  className?: string;
  height?: string | number;
  width?: string | number;
  lines?: number;
  rows?: number;
}

export function LoadingState({
  variant = 'default',
  className,
  height,
  width,
  lines = 3,
  rows = 5,
}: LoadingStateProps) {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';

  switch (variant) {
    case 'card':
      return (
        <div
          className={cn(
            'rounded-lg border border-gray-200 bg-white p-6',
            className
          )}
        >
          <div className="space-y-4">
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="space-y-2">
              {Array.from({ length: lines }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'h-3 animate-pulse rounded bg-gray-200',
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
                'h-4 animate-pulse rounded bg-gray-200',
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
            'flex animate-pulse items-center justify-center rounded bg-gray-200',
            className
          )}
          style={{ height, width }}
        >
          <svg
            className="h-8 w-8 text-gray-400"
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
        <div className={cn('px-6 py-16', className)}>
          <div className="container mx-auto max-w-7xl">
            <div className="space-y-8">
              {/* Header skeleton */}
              <div className="space-y-4 text-center">
                <div className="mx-auto h-6 w-24 animate-pulse rounded bg-gray-200" />
                <div className="mx-auto h-10 w-3/4 animate-pulse rounded bg-gray-200" />
                <div className="mx-auto h-4 w-1/2 animate-pulse rounded bg-gray-200" />
              </div>

              {/* Content skeleton */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-gray-200 p-6"
                  >
                    <div className="space-y-4">
                      <div className="h-32 animate-pulse rounded bg-gray-200" />
                      <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                      <div className="space-y-2">
                        <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
                        <div className="h-3 w-5/6 animate-pulse rounded bg-gray-200" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case 'list':
      return (
        <div className={cn('space-y-3', className)}>
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <div className="h-10 w-10 flex-shrink-0 animate-pulse rounded-full bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      );

    case 'table':
      return (
        <div
          className={cn(
            'overflow-hidden rounded-lg border border-gray-200',
            className
          )}
        >
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-3">
            <div className="flex space-x-4">
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {Array.from({ length: rows }).map((_, i) => (
              <div key={i} className="px-6 py-4">
                <div className="flex space-x-4">
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-48 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'avatar':
      return (
        <div className={cn('flex items-center space-x-4', className)}>
          <div className="h-12 w-12 flex-shrink-0 animate-pulse rounded-full bg-gray-200" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      );

    default:
      return (
        <div className={cn(baseClasses, className)} style={{ height, width }} />
      );
  }
}

export default LoadingState;
