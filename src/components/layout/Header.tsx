'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button, Badge, StratexLogo, SmartSearch } from '@/components/ui';
import { smoothScrollToElement, navigationSections } from '@/lib/smooth-scroll';
import type { NavigationItem } from '@/types';

export interface HeaderProps {
  className?: string;
  transparent?: boolean;
  fixed?: boolean;
}

// Simplified professional navigation (BCG/McKinsey style)
const mainNavigationTabs: NavigationItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Research', href: '/research' },
  { label: 'Insights', href: '/our-insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header({
  className,
  transparent = false,
  fixed = true,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const router = useRouter();
  const pathname = usePathname();

  // Determine if we're on the home page
  const isHomePage = pathname === '/';

  // Handle scroll detection and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section when on home page
      if (isHomePage) {
        const sections = navigationSections.map(section => section.id);
        const currentSection = sections.find(sectionId => {
          const element = document.getElementById(sectionId);
          if (!element) return false;

          const rect = element.getBoundingClientRect();
          const offset = 120; // Trigger when section is 120px from top

          return rect.top <= offset && rect.bottom > offset;
        });

        if (currentSection && currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage, activeSection]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('[data-mobile-menu]')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle navigation clicks
  const handleNavClick = (href: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);

    if (sectionId && isHomePage) {
      // Smooth scroll to section on current page
      smoothScrollToElement(sectionId, { offset: 80 });
    } else if (sectionId && !isHomePage) {
      // Navigate to home page and then scroll to section
      router.push(`/${href}`);
    } else {
      // Regular navigation
      router.push(href);
    }
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd+K (Mac) or Ctrl+K (Windows/Linux) to open search
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
      // Escape to close search
      if (event.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  return (
    <header
      className={cn(
        'z-50 w-full transition-all duration-300',
        fixed && 'fixed top-0 right-0 left-0',
        transparent && !isScrolled
          ? 'bg-transparent'
          : 'border-b border-slate-200 bg-white/80 backdrop-blur-md',
        isScrolled && 'shadow-sm',
        className
      )}
    >
      <div className="container-professional">
        <div
          className="flex-between"
          style={{ height: 'var(--layout-header)' }}
        >
          {/* Logo */}
          <div
            className="flex items-center"
            onClick={() => handleNavClick('/')}
          >
            <StratexLogo
              size="md"
              variant="default"
              animated={true}
              showText={true}
              className="cursor-pointer"
            />
          </div>

          {/* Desktop Navigation - McKinsey Style Tabs */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {mainNavigationTabs.map(tab => (
              <button
                key={tab.href}
                onClick={() => handleNavClick(tab.href)}
                className={cn(
                  'group relative px-4 py-2 text-sm font-medium transition-all duration-200',
                  pathname === tab.href
                    ? 'border-b-2 border-blue-600 text-blue-700'
                    : 'border-b-2 border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900'
                )}
              >
                {tab.label}
                {/* Active indicator */}
                <span
                  className={cn(
                    'absolute inset-x-0 -bottom-px h-0.5 bg-blue-600 transition-all duration-200',
                    pathname === tab.href
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-50'
                  )}
                />
              </button>
            ))}
          </nav>

          {/* Desktop Actions - Simplified */}
          <div className="hidden items-center space-x-4 lg:flex">
            {/* Search Button */}
            <div className="relative group">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="hidden xl:inline text-sm">Search</span>
                <kbd className="hidden xl:inline-flex items-center px-1.5 py-0.5 text-xs bg-gray-100 border border-gray-200 rounded">
                  ⌘K
                </kbd>
              </button>
            </div>

            <Button variant="secondary" size="md" className="font-medium">
              Schedule Consultation
            </Button>
            <Button
              variant="primary"
              size="md"
              className="font-medium shadow-sm"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex-professional lg:hidden">
            <button
              data-mobile-menu
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="component-button hover:bg-slate-100"
              aria-label="Toggle mobile menu"
            >
              <div
                className="flex h-6 w-6 flex-col justify-center"
                style={{ gap: 'var(--space-1)' }}
              >
                <span
                  className={cn(
                    'bg-foreground block h-0.5 origin-center transform transition-all duration-300',
                    isMobileMenuOpen && 'translate-y-1 rotate-45'
                  )}
                />
                <span
                  className={cn(
                    'bg-foreground block h-0.5 transition-all duration-300',
                    isMobileMenuOpen && 'opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'bg-foreground block h-0.5 origin-center transform transition-all duration-300',
                    isMobileMenuOpen && '-translate-y-1 -rotate-45'
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          data-mobile-menu
          className={cn(
            'absolute top-full right-0 left-0 origin-top transform border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all duration-300 lg:hidden',
            isMobileMenuOpen
              ? 'scale-y-100 opacity-100'
              : 'pointer-events-none scale-y-0 opacity-0'
          )}
        >
          <div className="container-professional section-content">
            {/* Mobile Navigation - McKinsey Style */}
            <nav className="mb-6 space-y-2">
              {mainNavigationTabs.map(tab => (
                <button
                  key={tab.href}
                  onClick={() => handleNavClick(tab.href)}
                  className={cn(
                    'block w-full rounded-lg px-4 py-3 text-left font-medium transition-all duration-200',
                    pathname === tab.href
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Mobile Actions - Simplified */}
            <div className="space-y-4 border-t border-slate-200 pt-4">
              <Button
                variant="secondary"
                className="w-full font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule Consultation
              </Button>
              <Button
                variant="primary"
                className="w-full font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
          style={{ top: fixed ? '64px' : '0' }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsSearchOpen(false)}
          />

          {/* Modal Content */}
          <div className="flex min-h-full items-start justify-center p-4 pt-16">
            <div className="relative w-full max-w-2xl">
              {/* Search Component */}
              <div className="rounded-lg bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Search Stratex AI
                  </h2>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close search"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <SmartSearch
                  className="w-full"
                  placeholder="Search services, industries, insights, and more..."
                  showFilters={true}
                  maxResults={10}
                  autoFocus={true}
                  onSearch={(query, results) => {
                    console.log(`Search: "${query}" returned ${results.length} results`);
                  }}
                />

                {/* Search Tips */}
                <div className="mt-6 text-xs text-gray-500">
                  <p className="mb-2 font-medium">Search Tips:</p>
                  <ul className="space-y-1">
                    <li>• Try "AI strategy" to find strategic consulting services</li>
                    <li>• Search "healthcare" to see industry-specific solutions</li>
                    <li>• Use arrow keys to navigate results, Enter to select</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
