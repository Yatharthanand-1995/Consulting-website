'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const breadcrumbVariants = cva('flex items-center text-sm', {
  variants: {
    variant: {
      default: 'space-x-2',
      compact: 'space-x-1',
      expanded: 'space-x-3',
    },
    size: {
      sm: 'text-xs',
      default: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps
  extends VariantProps<typeof breadcrumbVariants> {
  items: BreadcrumbItem[];
  className?: string;
  separator?: 'chevron' | 'slash' | 'arrow' | 'dot';
  showHome?: boolean;
  homeHref?: string;
  maxItems?: number;
}

export function Breadcrumb({
  items,
  className,
  variant,
  size,
  separator = 'chevron',
  showHome = true,
  homeHref = '/',
  maxItems,
}: BreadcrumbProps) {
  const getSeparatorIcon = () => {
    switch (separator) {
      case 'slash':
        return <span className="mx-2 text-gray-400">/</span>;
      case 'arrow':
        return (
          <svg
            className="mx-2 h-4 w-4 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'dot':
        return <span className="mx-2 text-gray-400">•</span>;
      default: // chevron
        return (
          <svg
            className="mx-2 h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        );
    }
  };

  // Add home item if requested and not already present
  let allItems = [...items];
  if (showHome && items.length > 0 && items[0].href !== homeHref) {
    allItems = [
      {
        label: 'Home',
        href: homeHref,
        icon: (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        ),
      },
      ...items,
    ];
  }

  // Handle max items with collapse
  let displayItems = allItems;
  if (maxItems && allItems.length > maxItems) {
    const firstItems = allItems.slice(0, 1);
    const lastItems = allItems.slice(-(maxItems - 2));
    displayItems = [
      ...firstItems,
      { label: '...', current: false },
      ...lastItems,
    ];
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(breadcrumbVariants({ variant, size }), className)}
    >
      <ol
        className={cn(
          'flex items-center',
          variant === 'compact'
            ? 'space-x-1'
            : variant === 'expanded'
              ? 'space-x-3'
              : 'space-x-2'
        )}
      >
        {displayItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && getSeparatorIcon()}
            {item.label === '...' ? (
              <span className="px-1 text-gray-400">...</span>
            ) : item.href && !item.current ? (
              <Link
                href={item.href}
                className={cn(
                  'text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline',
                  'flex items-center space-x-1'
                )}
              >
                {item.icon && (
                  <span className="flex-shrink-0">{item.icon}</span>
                )}
                <span>{item.label}</span>
              </Link>
            ) : (
              <span
                className={cn(
                  'flex items-center space-x-1',
                  item.current ? 'font-medium text-gray-900' : 'text-gray-500'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.icon && (
                  <span className="flex-shrink-0">{item.icon}</span>
                )}
                <span>{item.label}</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
