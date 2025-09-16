'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button, Badge } from '@/components/ui';
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

export function Header({ className, transparent = false, fixed = true }: HeaderProps) {
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
        'w-full z-50 transition-all duration-300',
        fixed && 'fixed top-0 left-0 right-0',
        transparent && !isScrolled
          ? 'bg-transparent'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-200',
        isScrolled && 'shadow-sm',
        className
      )}
    >
      <div className="container-professional">
        <div className="flex-between" style={{ height: 'var(--layout-header)' }}>
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-semibold text-slate-800">
                GenAI Consulting
              </h1>
              <div className="hidden sm:block h-6 w-px bg-slate-300"></div>
              <p className="text-sm text-slate-600 hidden sm:block">
                Fortune 500 AI Transformation
              </p>
            </div>
          </div>

          {/* Desktop Navigation - McKinsey Style Tabs */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigationTabs.map((tab) => (
              <button
                key={tab.href}
                onClick={() => handleNavClick(tab.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 group",
                  pathname === tab.href || (tab.href === '/' && pathname === '/')
                    ? "text-slate-900 border-b-2 border-secondary"
                    : "text-slate-600 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-300"
                )}
              >
                {tab.label}
                {/* Active indicator */}
                <span className={cn(
                  "absolute inset-x-0 -bottom-px h-0.5 bg-secondary transition-all duration-300",
                  pathname === tab.href || (tab.href === '/' && pathname === '/')
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-50"
                )} />
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex-professional">
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
          <div className="lg:hidden flex-professional">
            <button
              data-mobile-menu
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="component-button hover:bg-slate-100"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center" style={{ gap: 'var(--space-1)' }}>
                <span
                  className={cn(
                    'block h-0.5 bg-foreground transition-all duration-300 transform origin-center',
                    isMobileMenuOpen && 'rotate-45 translate-y-1'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 bg-foreground transition-all duration-300',
                    isMobileMenuOpen && 'opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 bg-foreground transition-all duration-300 transform origin-center',
                    isMobileMenuOpen && '-rotate-45 -translate-y-1'
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
            'lg:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300 transform origin-top',
            isMobileMenuOpen
              ? 'scale-y-100 opacity-100'
              : 'scale-y-0 opacity-0 pointer-events-none'
          )}
        >
          <div className="container-professional section-content">
            {/* Mobile Navigation - McKinsey Style */}
            <nav className="space-y-2 mb-6">
              {mainNavigationTabs.map((tab) => (
                <button
                  key={tab.href}
                  onClick={() => handleNavClick(tab.href)}
                  className={cn(
                    "block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200",
                    pathname === tab.href || (tab.href === '/' && pathname === '/')
                      ? "bg-secondary text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="space-y-lg pt-4 border-t border-slate-200">
              <div className="flex-center">
                <Badge variant="gradient" className="animate-neon-pulse">Live Demo Available</Badge>
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
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm"
          style={{ top: fixed ? '64px' : '0' }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;