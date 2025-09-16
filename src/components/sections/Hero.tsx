'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button, Badge, AILoader, AITechnologyVisualization } from '@/components/ui';

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
    <section className={cn('relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center px-6 py-20', className)}>
      {/* Professional McKinsey Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />

      {/* Subtle Professional Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #003A70 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} aria-hidden="true" />

      <div className="container mx-auto relative z-10 max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(80vh-8rem)] lg:min-h-[calc(90vh-8rem)]">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:space-y-10 text-center md:text-left">
            {/* Authority Badge */}
            <div className={cn('transition-all duration-500', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
              <Badge variant="outline" className="border-slate-900 text-slate-900">
                Fortune 500 AI Transformation
              </Badge>
            </div>

            {/* Authority Statement */}
            <div className={cn('transition-all duration-500 delay-200', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.2] text-balance text-slate-800 tracking-tight">
                Transforming enterprises through intelligent automation
              </h1>
            </div>

            {/* Professional Subtitle */}
            <div className={cn('transition-all duration-500 delay-300', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
              <div className="max-w-none md:max-w-lg mx-auto md:mx-0">
                <p className="text-lg text-slate-600 leading-relaxed text-pretty">
                  We partner with Fortune 500 companies to implement enterprise AI solutions that deliver measurable business value. Our proven methodology has generated <span className="text-slate-900 font-medium">$2.3B in value</span> across our portfolio, with 97% client satisfaction and average ROI delivery within 6 months.
                </p>
              </div>
            </div>

            {/* Professional CTA */}
            <div className={cn('flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start transition-all duration-500 delay-400', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
              <Button
                size="lg"
                className="bg-slate-900 text-white hover:bg-slate-700 hover:transform hover:-translate-y-px hover:shadow-lg transition-all duration-200 px-8 py-4 text-base font-medium rounded"
                aria-label="Explore our thought leadership"
              >
                Explore our thinking
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white hover:transform hover:-translate-y-px hover:shadow-lg transition-all duration-200 px-8 py-4 text-base font-medium rounded"
                aria-label="Schedule consultation"
              >
                Schedule consultation
              </Button>
            </div>

            {/* Professional Trust Indicators */}
            <div className={cn('transition-all duration-500 delay-500', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
              <div className="bg-slate-50 rounded p-6 border border-slate-200">
                <p className="text-sm text-slate-600 mb-4 text-center md:text-left font-medium">Trusted by Global Leaders:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-bold text-slate-900 font-mono">500+</div>
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide mt-1">AI Models</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-bold text-slate-900 font-mono">150+</div>
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide mt-1">Enterprises</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-bold text-slate-900 font-mono">45</div>
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide mt-1">Countries</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-bold text-slate-900 font-mono">97%</div>
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide mt-1">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - AI Technology Visualization & Metrics */}
          <div className="relative flex items-center justify-center">
            <div className={cn('transition-all duration-500 delay-300 w-full max-w-xl', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
              {/* Executive Metrics Card with AI Visualization */}
              <div className="bg-white border border-slate-200 rounded-lg p-8 lg:p-10 shadow-lg relative overflow-hidden">
                {/* Background AI Visualization */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <AITechnologyVisualization variant="background" showLabels={false} />
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h2 className="text-xl lg:text-2xl font-semibold text-slate-800 mb-3">AI Technology Stack</h2>
                    <p className="text-sm text-slate-600">Enterprise-grade AI implementations</p>
                  </div>

                  {/* AI Technology Visualization */}
                  <div className="mb-8 flex justify-center">
                    <AITechnologyVisualization variant="compact" showLabels={false} />
                  </div>

                  {/* Professional Metrics */}
                  <div className="space-y-6">
                    {[
                      { value: '$2.3B', label: 'Value Generated', description: 'Across Fortune 500 clients' },
                      { value: '97%', label: 'Client Satisfaction', description: 'Based on project outcomes' },
                      { value: '6 months', label: 'Average ROI Timeline', description: 'Strategy to measurable results' }
                    ].map((metric, index) => (
                      <div
                        key={metric.label}
                        className={cn(
                          'border-l-2 border-slate-900 pl-4 transition-all duration-500',
                          showMetrics
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-4'
                        )}
                        style={{ transitionDelay: `${index * 0.2}s` }}
                      >
                        <div className="text-xl font-bold text-slate-900 font-mono">{metric.value}</div>
                        <div className="text-sm font-medium text-ink-black">{metric.label}</div>
                        <div className="text-xs text-muted-foreground">{metric.description}</div>
                      </div>
                    ))}
                  </div>

                  {/* Professional CTA */}
                  <div className="mt-8 pt-6 border-t border-border text-center">
                    <Button variant="ghost" size="sm" className="text-slate-900">
                      View our technology capabilities →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Professional Assurance */}
        <div className={cn('mt-16 lg:mt-20 transition-all duration-500 delay-600', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12 text-center">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="w-2 h-2 bg-data-green rounded-full flex-shrink-0"></div>
              <span className="text-sm lg:text-base font-medium">SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="w-2 h-2 bg-data-green rounded-full flex-shrink-0"></div>
              <span className="text-sm lg:text-base font-medium">Average 6-month ROI</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="w-2 h-2 bg-data-green rounded-full flex-shrink-0"></div>
              <span className="text-sm lg:text-base font-medium">Global delivery capability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;