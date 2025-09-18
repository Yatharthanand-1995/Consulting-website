'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  Button,
  Badge,
  AILoader,
  AITechnologyVisualization,
} from '@/components/ui';

export interface HeroProps {
  className?: string;
}

// Typewriter effect hook
function useTypewriter(text: string, speed: number = 100) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
}

// Animated metrics data
const metrics = [
  { label: 'AI Models Deployed', value: '500+', icon: '🤖' },
  { label: 'Client Retention', value: '97%', icon: '📈' },
  { label: 'Value Generated', value: '$2.3B', icon: '💰' },
  { label: 'Fortune 500 Clients', value: '150+', icon: '🏢' },
];

const floatingElements = [
  { id: 1, delay: 0, x: 10, y: 20 },
  { id: 2, delay: 2, x: 80, y: 10 },
  { id: 3, delay: 4, x: 60, y: 80 },
  { id: 4, delay: 1, x: 20, y: 70 },
  { id: 5, delay: 3, x: 90, y: 60 },
];

export function Hero({ className }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setShowMetrics(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={cn(
        'relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-20 md:min-h-[90vh]',
        className
      )}
    >
      {/* Professional Consulting Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-100/50 to-slate-200/30" />

      {/* Sophisticated Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          radial-gradient(circle at 25% 25%, #1e293b 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, #334155 0.5px, transparent 0.5px),
          linear-gradient(45deg, transparent 49%, rgba(30, 41, 59, 0.05) 50%, transparent 51%)
        `,
          backgroundSize: '80px 80px, 40px 40px, 120px 120px',
        }}
        aria-hidden="true"
      />

      {/* Elegant Geometric Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        <div className="absolute top-2/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-slate-400 to-transparent" />
        <div className="absolute top-0 right-1/4 h-full w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
      </div>

      {/* Subtle Professional Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/6 h-2 w-2 rounded-full bg-slate-400 opacity-20" />
        <div className="absolute top-3/4 right-1/6 h-1 w-1 rounded-full bg-slate-500 opacity-30" />
        <div className="absolute bottom-1/4 left-1/2 h-3 w-3 rotate-45 rounded border border-slate-400 opacity-15" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(80vh-8rem)] items-center gap-12 md:grid-cols-2 lg:min-h-[calc(90vh-8rem)] lg:gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center md:text-left lg:space-y-10">
            {/* Authority Badge */}
            <div
              className={cn(
                'transition-all duration-500',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
            >
              <Badge
                variant="outline"
                className="border-slate-600 bg-slate-100/80 font-medium text-slate-700 backdrop-blur-sm"
              >
                Fortune 500 AI Transformation
              </Badge>
            </div>

            {/* Authority Statement */}
            <div
              className={cn(
                'transition-all delay-200 duration-500',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
            >
              <h1 className="text-3xl leading-[1.2] font-semibold tracking-tight text-balance text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Transforming enterprises through{' '}
                <span className="relative text-slate-700">
                  <span className="relative z-10">intelligent automation</span>
                  <span className="absolute bottom-2 left-0 -z-10 h-3 w-full bg-gradient-to-r from-slate-200 to-slate-300 opacity-60"></span>
                </span>
              </h1>
            </div>

            {/* Professional Subtitle */}
            <div
              className={cn(
                'transition-all delay-300 duration-500',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
            >
              <div className="mx-auto max-w-none md:mx-0 md:max-w-lg">
                <p className="text-lg leading-relaxed text-pretty text-slate-600">
                  We deliver enterprise AI solutions that generate measurable
                  value. Our methodology has created{' '}
                  <span className="font-semibold text-slate-900">
                    $2.3B in value
                  </span>{' '}
                  with{' '}
                  <span className="font-semibold text-slate-900">
                    97% client satisfaction
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Professional CTA */}
            <div
              className={cn(
                'flex flex-col justify-center gap-3 transition-all delay-400 duration-500 sm:flex-row sm:gap-4 md:justify-start',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
            >
              <Button
                size="lg"
                className="rounded-md bg-slate-900 px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:-translate-y-px hover:transform hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/25"
                aria-label="Explore our thought leadership"
              >
                Explore our thinking
                <svg
                  className="ml-2 h-4 w-4"
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
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-md border-2 border-slate-300 px-8 py-4 text-base font-medium text-slate-900 transition-all duration-200 hover:-translate-y-px hover:transform hover:border-slate-400 hover:bg-slate-100 hover:shadow-lg"
                aria-label="Schedule consultation"
              >
                Schedule consultation
              </Button>
            </div>
          </div>

          {/* Right Column - AI Technology Visualization & Metrics */}
          <div className="relative flex items-center justify-center">
            <div
              className={cn(
                'w-full max-w-xl transition-all delay-300 duration-500',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
            >
              {/* Executive Metrics Card with AI Visualization */}
              <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-lg lg:p-10">
                {/* Background AI Visualization */}
                <div className="pointer-events-none absolute inset-0 opacity-5">
                  <AITechnologyVisualization
                    variant="background"
                    showLabels={false}
                  />
                </div>

                <div className="relative z-10">
                  <div className="mb-8 text-center">
                    <h2 className="mb-3 text-xl font-semibold text-slate-800 lg:text-2xl">
                      AI Technology Stack
                    </h2>
                    <p className="text-sm text-slate-600">
                      Enterprise-grade AI implementations
                    </p>
                  </div>

                  {/* AI Technology Visualization */}
                  <div className="mb-8 flex justify-center">
                    <AITechnologyVisualization
                      variant="compact"
                      showLabels={false}
                    />
                  </div>

                  {/* Professional Metrics */}
                  <div className="space-y-6">
                    {[
                      {
                        value: '$2.3B',
                        label: 'Value Generated',
                        description: 'Across Fortune 500 clients',
                      },
                      {
                        value: '97%',
                        label: 'Client Satisfaction',
                        description: 'Based on project outcomes',
                      },
                      {
                        value: '6 months',
                        label: 'Average ROI Timeline',
                        description: 'Strategy to measurable results',
                      },
                    ].map((metric, index) => (
                      <div
                        key={metric.label}
                        className={cn(
                          'border-l-2 border-slate-900 pl-4 transition-all duration-500',
                          showMetrics
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-4 opacity-0'
                        )}
                        style={{ transitionDelay: `${index * 0.2}s` }}
                      >
                        <div className="font-mono text-xl font-bold text-slate-900">
                          {metric.value}
                        </div>
                        <div className="text-ink-black text-sm font-medium">
                          {metric.label}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {metric.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Professional CTA */}
                  <div className="border-border mt-8 border-t pt-6 text-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-900"
                    >
                      View our technology capabilities →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Professional Assurance */}
        <div
          className={cn(
            'mt-16 transition-all delay-600 duration-500 lg:mt-20',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <div className="flex flex-col items-center justify-center gap-8 text-center sm:flex-row lg:gap-12">
            <div className="flex items-center space-x-3 text-slate-600">
              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></div>
              <span className="text-sm font-medium lg:text-base">
                SOC 2 Type II Certified
              </span>
            </div>
            <div className="flex items-center space-x-3 text-slate-600">
              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></div>
              <span className="text-sm font-medium lg:text-base">
                Average 6-month ROI
              </span>
            </div>
            <div className="flex items-center space-x-3 text-slate-600">
              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></div>
              <span className="text-sm font-medium lg:text-base">
                Global delivery capability
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
