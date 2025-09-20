'use client';

import { Badge } from '@/components/ui';
import {
  calculateReadingTime,
  formatPublicationDate,
  getRelativeTime,
} from '@/lib/reading-time';
import { cn } from '@/lib/utils';

interface ArticleMetaProps {
  publishedAt?: string | Date;
  updatedAt?: string | Date;
  content?: string;
  author?: {
    name: string;
    title?: string;
    avatar?: string;
  };
  category?: string;
  tags?: string[];
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
  showReadingTime?: boolean;
  showRelativeTime?: boolean;
}

export function ArticleMeta({
  publishedAt,
  updatedAt,
  content,
  author,
  category,
  tags = [],
  variant = 'default',
  className,
  showReadingTime = true,
  showRelativeTime = false,
}: ArticleMetaProps) {
  const readingTime = content ? calculateReadingTime(content) : null;
  const publishDate = publishedAt ? new Date(publishedAt) : null;
  const updateDate = updatedAt ? new Date(updatedAt) : null;

  const formatDate = (date: Date) => {
    if (showRelativeTime) {
      return getRelativeTime(date);
    }
    return formatPublicationDate(date, { format: 'medium' });
  };

  switch (variant) {
    case 'compact':
      return (
        <div
          className={cn(
            'flex items-center space-x-2 text-sm text-gray-600',
            className
          )}
        >
          {publishDate && <span>{formatDate(publishDate)}</span>}
          {readingTime && showReadingTime && (
            <>
              <span>•</span>
              <span>{readingTime.text}</span>
            </>
          )}
          {category && (
            <>
              <span>•</span>
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
            </>
          )}
        </div>
      );

    case 'detailed':
      return (
        <div className={cn('space-y-4', className)}>
          {/* Author and Date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {author?.avatar && (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              )}
              <div>
                <div className="font-medium text-gray-900">
                  {author?.name || 'Stratex AI Team'}
                </div>
                {author?.title && (
                  <div className="text-sm text-gray-600">{author.title}</div>
                )}
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              {publishDate && <div>{formatDate(publishDate)}</div>}
              {readingTime && showReadingTime && <div>{readingTime.text}</div>}
            </div>
          </div>

          {/* Category and Tags */}
          {(category || tags.length > 0) && (
            <div className="flex flex-wrap items-center gap-2">
              {category && (
                <Badge
                  variant="outline"
                  className="border-blue-200 bg-blue-50 text-blue-700"
                >
                  {category}
                </Badge>
              )}
              {tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Update Information */}
          {updateDate && updateDate.getTime() !== publishDate?.getTime() && (
            <div className="border-t pt-2 text-xs text-gray-500">
              Last updated: {formatPublicationDate(updateDate)}
            </div>
          )}
        </div>
      );

    default:
      return (
        <div className={cn('space-y-3', className)}>
          {/* Main meta info */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            {publishDate && (
              <time dateTime={publishDate.toISOString()}>
                {formatDate(publishDate)}
              </time>
            )}
            {readingTime && showReadingTime && (
              <>
                <span>•</span>
                <span>{readingTime.text}</span>
                <span className="text-gray-400">
                  ({readingTime.words} words)
                </span>
              </>
            )}
          </div>

          {/* Author info */}
          {author && (
            <div className="flex items-center space-x-2">
              {author.avatar && (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-6 w-6 rounded-full object-cover"
                />
              )}
              <span className="text-sm text-gray-700">
                By <span className="font-medium">{author.name}</span>
                {author.title && (
                  <span className="text-gray-500"> • {author.title}</span>
                )}
              </span>
            </div>
          )}

          {/* Category and Tags */}
          {(category || tags.length > 0) && (
            <div className="flex flex-wrap items-center gap-2">
              {category && (
                <Badge
                  variant="outline"
                  className="border-blue-200 bg-blue-50 text-blue-700"
                >
                  {category}
                </Badge>
              )}
              {tags.slice(0, 3).map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      );
  }
}

export default ArticleMeta;
