/**
 * Calculate estimated reading time for content
 * Based on average reading speed of 200-250 words per minute
 */

interface ReadingTimeResult {
  minutes: number;
  text: string;
  words: number;
}

export function calculateReadingTime(
  content: string,
  wordsPerMinute: number = 225
): ReadingTimeResult {
  // Remove HTML tags and extra whitespace
  const cleanContent = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();

  // Count words (split by space and filter out empty strings)
  const words = cleanContent.split(' ').filter(word => word.length > 0).length;

  // Calculate reading time in minutes
  const minutes = Math.ceil(words / wordsPerMinute);

  // Format the reading time text
  let text: string;
  if (minutes === 1) {
    text = '1 min read';
  } else if (minutes < 60) {
    text = `${minutes} min read`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) {
      text = hours === 1 ? '1 hour read' : `${hours} hours read`;
    } else {
      text = `${hours}h ${remainingMinutes}m read`;
    }
  }

  return {
    minutes,
    text,
    words,
  };
}

/**
 * Format a date for publication display
 */
export function formatPublicationDate(
  date: string | Date,
  options: {
    includeTime?: boolean;
    format?: 'short' | 'medium' | 'long';
  } = {}
): string {
  const { includeTime = false, format = 'medium' } = options;

  const dateObj = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    return 'Invalid date';
  }

  const now = new Date();
  const diffInMs = now.getTime() - dateObj.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  // Show relative time for recent content
  if (diffInDays === 0) {
    return 'Today';
  } else if (diffInDays === 1) {
    return 'Yesterday';
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return months === 1 ? '1 month ago' : `${months} months ago`;
  }

  // For older content, show formatted date
  const formatOptions: Intl.DateTimeFormatOptions = {};

  switch (format) {
    case 'short':
      formatOptions.month = 'short';
      formatOptions.day = 'numeric';
      formatOptions.year = 'numeric';
      break;
    case 'long':
      formatOptions.weekday = 'long';
      formatOptions.year = 'numeric';
      formatOptions.month = 'long';
      formatOptions.day = 'numeric';
      break;
    default: // medium
      formatOptions.year = 'numeric';
      formatOptions.month = 'long';
      formatOptions.day = 'numeric';
      break;
  }

  if (includeTime) {
    formatOptions.hour = '2-digit';
    formatOptions.minute = '2-digit';
  }

  return dateObj.toLocaleDateString('en-US', formatOptions);
}

/**
 * Get relative time string (e.g., "2 hours ago", "3 days ago")
 */
export function getRelativeTime(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInMs = now.getTime() - dateObj.getTime();

  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  if (diffInMs < minute) {
    return 'Just now';
  } else if (diffInMs < hour) {
    const minutes = Math.floor(diffInMs / minute);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (diffInMs < day) {
    const hours = Math.floor(diffInMs / hour);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (diffInMs < week) {
    const days = Math.floor(diffInMs / day);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (diffInMs < month) {
    const weeks = Math.floor(diffInMs / week);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (diffInMs < year) {
    const months = Math.floor(diffInMs / month);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(diffInMs / year);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
}
