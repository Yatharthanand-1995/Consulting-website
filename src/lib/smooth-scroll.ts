/**
 * Smooth scroll utility functions
 */

export interface ScrollOptions {
  duration?: number;
  easing?: 'easeInOut' | 'easeIn' | 'easeOut' | 'linear';
  offset?: number;
}

const easingFunctions = {
  linear: (t: number) => t,
  easeIn: (t: number) => t * t,
  easeOut: (t: number) => t * (2 - t),
  easeInOut: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
};

/**
 * Smooth scroll to an element by ID
 */
export function smoothScrollToElement(
  elementId: string,
  options: ScrollOptions = {}
): void {
  const { duration = 800, easing = 'easeInOut', offset = 0 } = options;

  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easingFunctions[easing](progress);

    window.scrollTo(0, startPosition + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}

/**
 * Smooth scroll to a specific Y position
 */
export function smoothScrollToPosition(
  targetY: number,
  options: ScrollOptions = {}
): void {
  const { duration = 800, easing = 'easeInOut' } = options;

  const startPosition = window.pageYOffset;
  const distance = targetY - startPosition;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easingFunctions[easing](progress);

    window.scrollTo(0, startPosition + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}

/**
 * Scroll to top of page
 */
export function scrollToTop(options: ScrollOptions = {}): void {
  smoothScrollToPosition(0, options);
}

/**
 * Get current scroll position percentage
 */
export function getScrollProgress(): number {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  return scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
}

/**
 * Debounced scroll event handler
 */
export function debounceScroll(callback: () => void, delay: number = 16): () => void {
  let timeoutId: NodeJS.Timeout;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}

/**
 * Add smooth scroll behavior to navigation links
 */
export function initializeSmoothScroll(options: ScrollOptions = {}): void {
  const { offset = 80 } = options; // Account for fixed header

  // Find all anchor links that point to elements on the same page
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href && href.length > 1) {
        const targetId = href.substring(1);
        smoothScrollToElement(targetId, { ...options, offset });
      }
    });
  });
}

/**
 * Navigation sections configuration
 */
export const navigationSections = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'case-studies', label: 'Case Studies', href: '#case-studies' },
  { id: 'interactive-demo', label: 'AI Demo', href: '#interactive-demo' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

/**
 * Hook to detect current section in viewport
 */
export function useActiveSection(): string {
  if (typeof window === 'undefined') return 'hero';

  const sections = navigationSections.map(section => section.id);
  const currentSection = sections.find(sectionId => {
    const element = document.getElementById(sectionId);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const offset = 100; // Trigger when section is 100px from top

    return rect.top <= offset && rect.bottom > offset;
  });

  return currentSection || 'hero';
}