'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button, Badge } from '@/components/ui';

export interface HeroProps {
  className?: string;
}

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
        'relative flex min-h-[80vh] items-center justify-center px-6 py-20 md:min-h-[90vh]',
        className
      )}
    >
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      {/* Minimal Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #1f2937 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(80vh-8rem)] items-center gap-12 md:grid-cols-2 lg:min-h-[calc(90vh-8rem)] lg:gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center md:text-left lg:space-y-10">
            {/* Authority Badge - Simplified */}
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
                className="border-blue-200 bg-blue-50 font-medium text-blue-700"
              >
                Enterprise AI Solutions
              </Badge>
            </div>

            {/* Main Headline - McKinsey Style */}
            <div
              className={cn(
                'transition-all delay-200 duration-500',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
            >
              <h1 className="text-4xl leading-tight font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Strategic AI transformation for{' '}
                <span className="text-blue-700">enterprise leaders</span>
              </h1>
            </div>

            {/* Clear Value Proposition */}
            <div
              className={cn(
                'transition-all delay-300 duration-500',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
            >
              <div className="mx-auto md:mx-0">
                <p className="hero-subtitle text-xl leading-relaxed text-gray-600">
                  We help Fortune 500 companies implement AI solutions that
                  drive{' '}
                  <strong className="text-gray-900">
                    measurable business value
                  </strong>{' '}
                  with proven methodology and{' '}
                  <strong className="text-gray-900">6-month ROI</strong>.
                </p>
              </div>
            </div>

            {/* Clear CTA Buttons */}
            <div
              className={cn(
                'flex flex-col gap-4 transition-all delay-400 duration-500 sm:flex-row md:justify-start',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
            >
              <Button
                variant="primary"
                size="lg"
                className="font-semibold"
                aria-label="Schedule consultation call"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="font-semibold"
                aria-label="View our insights"
              >
                View Our Insights
              </Button>
            </div>
          </div>

          {/* Right Column - Clean Metrics Card */}
          <div className="relative flex items-center justify-center">
            <div
              className={cn(
                'w-full max-w-lg transition-all delay-300 duration-500',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
            >
              {/* Clean Professional Metrics Card */}
              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-8 text-center">
                  <h2 className="mb-2 text-2xl font-semibold text-gray-900">
                    Proven Results
                  </h2>
                  <p className="text-gray-600">
                    Enterprise AI transformation outcomes
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="space-y-6">
                  {[
                    {
                      value: '$2.3B+',
                      label: 'Value Generated',
                      description: 'Across Fortune 500 clients',
                    },
                    {
                      value: '97%',
                      label: 'Client Satisfaction',
                      description: 'Project success rate',
                    },
                    {
                      value: '6 months',
                      label: 'Average ROI',
                      description: 'Time to measurable results',
                    },
                  ].map((metric, index) => (
                    <div
                      key={metric.label}
                      className={cn(
                        'border-l-4 border-blue-600 pl-4 transition-all duration-500',
                        showMetrics
                          ? 'translate-x-0 opacity-100'
                          : 'translate-x-4 opacity-0'
                      )}
                      style={{ transitionDelay: `${index * 0.2}s` }}
                    >
                      <div className="text-3xl font-bold text-gray-900">
                        {metric.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-700">
                        {metric.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {metric.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Trust Indicators */}
        <div
          className={cn(
            'mt-16 transition-all delay-600 duration-500 lg:mt-20',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <div className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row lg:gap-12">
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">
                SOC 2 Type II Certified
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">
                150+ Fortune 500 Clients
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">
                Global Delivery Network
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
