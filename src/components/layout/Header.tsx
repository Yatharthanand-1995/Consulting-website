'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button, Badge, StratexLogo } from '@/components/ui';
import { smoothScrollToElement, navigationSections } from '@/lib/smooth-scroll';
import type { NavigationItem } from '@/types';

export interface HeaderProps {
  className?: string;
  transparent?: boolean;
  fixed?: boolean;
}

// McKinsey-style main navigation tabs
const mainNavigationTabs: NavigationItem[] = [
  { label: 'Overview', href: '/' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Our People', href: '/our-people' },
  { label: 'Our Insights', href: '/our-insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

export function Header({
  className,
  transparent = false,
  fixed = true,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            className="flex items-center space-x-4"
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
                  'group relative px-4 py-2 text-sm font-medium transition-all duration-300',
                  pathname === tab.href ||
                    (tab.href === '/' && pathname === '/')
                    ? 'border-secondary border-b-2 text-slate-900'
                    : 'border-b-2 border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900'
                )}
              >
                {tab.label}
                {/* Active indicator */}
                <span
                  className={cn(
                    'bg-secondary absolute inset-x-0 -bottom-px h-0.5 transition-all duration-300',
                    pathname === tab.href ||
                      (tab.href === '/' && pathname === '/')
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-50'
                  )}
                />
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="lg:flex-professional hidden">
            <Badge variant="gradient" className="animate-neon-pulse">
              Live Demo
            </Badge>
            <Button variant="secondary" className="component-button">
              Schedule Consultation
            </Button>
            <Button variant="gradient" className="component-button">
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
                    pathname === tab.href ||
                      (tab.href === '/' && pathname === '/')
                      ? 'bg-secondary text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="space-y-lg border-t border-slate-200 pt-4">
              <div className="flex-center">
                <Badge variant="gradient" className="animate-neon-pulse">
                  Live Demo Available
                </Badge>
              </div>
              <Button
                variant="secondary"
                className="component-button w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule Consultation
              </Button>
              <Button
                variant="gradient"
                className="component-button w-full"
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
    </header>
  );
}

export default Header;
