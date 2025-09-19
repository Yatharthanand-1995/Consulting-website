'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { InteractiveButton } from './InteractiveButton';

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface ContentFilterProps {
  className?: string;
  filters: FilterOption[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  layout?: 'tabs' | 'pills' | 'buttons';
  showCounts?: boolean;
}

export function ContentFilter({
  className,
  filters,
  selectedFilter,
  onFilterChange,
  layout = 'tabs',
  showCounts = true,
}: ContentFilterProps) {
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  const renderTabs = () => (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            onMouseEnter={() => setHoveredFilter(filter.value)}
            onMouseLeave={() => setHoveredFilter(null)}
            className={cn(
              'relative py-2 px-1 border-b-2 font-medium text-sm transition-all duration-200',
              selectedFilter === filter.value
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            )}
          >
            {filter.label}
            {showCounts && filter.count !== undefined && (
              <span
                className={cn(
                  'ml-2 px-2 py-0.5 text-xs rounded-full transition-colors duration-200',
                  selectedFilter === filter.value
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-500'
                )}
              >
                {filter.count}
              </span>
            )}

            {/* Animated underline */}
            <span
              className={cn(
                'absolute inset-x-0 -bottom-px h-0.5 bg-blue-600 transition-all duration-200',
                selectedFilter === filter.value
                  ? 'opacity-100 scale-x-100'
                  : hoveredFilter === filter.value
                  ? 'opacity-50 scale-x-100'
                  : 'opacity-0 scale-x-0'
              )}
            />
          </button>
        ))}
      </nav>
    </div>
  );

  const renderPills = () => (
    <div className="flex flex-wrap gap-2">
      {filters.map(filter => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            'px-4 py-2 text-sm rounded-full border transition-all duration-200',
            'hover:scale-105 active:scale-95 transform',
            selectedFilter === filter.value
              ? 'bg-blue-600 text-white border-blue-600 shadow-md'
              : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
          )}
        >
          {filter.label}
          {showCounts && filter.count !== undefined && (
            <span
              className={cn(
                'ml-2 px-1.5 py-0.5 text-xs rounded-full',
                selectedFilter === filter.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              )}
            >
              {filter.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );

  const renderButtons = () => (
    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filters.map(filter => (
        <InteractiveButton
          key={filter.value}
          variant={selectedFilter === filter.value ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            'justify-between',
            selectedFilter === filter.value && 'ring-2 ring-blue-500 ring-offset-2'
          )}
          ripple
        >
          <span>{filter.label}</span>
          {showCounts && filter.count !== undefined && (
            <span
              className={cn(
                'ml-2 px-1.5 py-0.5 text-xs rounded-full',
                selectedFilter === filter.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              )}
            >
              {filter.count}
            </span>
          )}
        </InteractiveButton>
      ))}
    </div>
  );

  return (
    <div className={cn('w-full', className)}>
      {layout === 'tabs' && renderTabs()}
      {layout === 'pills' && renderPills()}
      {layout === 'buttons' && renderButtons()}
    </div>
  );
}

export default ContentFilter;