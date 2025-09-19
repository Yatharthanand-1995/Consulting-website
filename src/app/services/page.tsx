'use client';

import { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import {
  Button,
  Badge,
  InteractiveCard,
  InteractiveButton,
  LoadingState,
  PageHero,
  CTASection,
} from '@/components/ui';
import { cn } from '@/lib/utils';

const serviceCategories = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Implementation',
    description: 'End-to-end AI transformation strategy with proven methodologies',
    icon: '🎯',
    services: [
      'AI Strategy Development',
      'Digital Transformation Roadmaps',
      'Technology Assessment',
      'Implementation Planning',
    ],
    stats: { roi: '340%', successRate: '98%', timeline: '6 months' },
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Solutions',
    description: 'Custom LLM implementations and AI-powered automation',
    icon: '⚡',
    services: [
      'Custom LLM Development',
      'AI Content Generation',
      'Process Automation',
      'Intelligent Document Processing',
    ],
    stats: { roi: '280%', successRate: '95%', timeline: '4 months' },
  },
  {
    id: 'data-intelligence',
    title: 'Data Intelligence & Analytics',
    description: 'Advanced analytics and computer vision solutions',
    icon: '📈',
    services: [
      'Predictive Analytics',
      'Computer Vision Systems',
      'Real-time Analytics',
      'Business Intelligence',
    ],
    stats: { roi: '250%', successRate: '92%', timeline: '5 months' },
  },
  {
    id: 'automation',
    title: 'Intelligent Automation',
    description: 'Process automation and workflow optimization',
    icon: '🤖',
    services: [
      'RPA Implementation',
      'Workflow Automation',
      'Decision Support Systems',
      'Quality Assurance Automation',
    ],
    stats: { roi: '220%', successRate: '94%', timeline: '3 months' },
  },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          badge={{ text: 'Our Services' }}
          title={
            <>
              <span className="text-gray-900">
                Enterprise AI solutions that drive{' '}
              </span>
              <span className="text-blue-700">measurable results</span>
            </>
          }
          description="From strategy to implementation, we deliver comprehensive AI consulting services that transform how Fortune 500 companies operate and compete."
          actions={[
            {
              text: 'Schedule Consultation',
              variant: 'primary',
              className: 'pulse-glow',
              effects: { ripple: true, glow: true }
            },
            {
              text: 'View Case Studies',
              variant: 'secondary',
              effects: { ripple: true, lift: true }
            }
          ]}
        />

        {/* Services Portfolio */}
        <section className="section-professional section-optimize">
          <div className="container-professional">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Comprehensive AI Services Portfolio
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our integrated approach ensures successful AI transformation across
                all aspects of your business.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 stagger-animation">
              {serviceCategories.map((category, index) => (
                <InteractiveCard
                  key={category.id}
                  className="p-8"
                  tilt
                  lift
                  onClick={() => setSelectedCategory(
                    selectedCategory === category.id ? null : category.id
                  )}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="text-4xl">{category.icon}</div>
                      <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                        {category.stats.successRate} Success
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Service List */}
                      <div className="space-y-2">
                        {category.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                            <span className="text-sm text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-700">
                            {category.stats.roi}
                          </div>
                          <div className="text-xs text-gray-500">Avg ROI</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-700">
                            {category.stats.successRate}
                          </div>
                          <div className="text-xs text-gray-500">Success</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-700">
                            {category.stats.timeline}
                          </div>
                          <div className="text-xs text-gray-500">Timeline</div>
                        </div>
                      </div>
                    </div>

                    {/* Expand indicator */}
                    <div className="flex justify-center pt-2">
                      <div className={cn(
                        "w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 transition-transform duration-200",
                        selectedCategory === category.id && "rotate-180"
                      )}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-professional bg-gray-50">
          <div className="container-professional">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Our Proven Implementation Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A systematic approach that ensures successful AI transformation
                with measurable business outcomes.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description: 'Comprehensive analysis of current state and AI readiness',
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Develop tailored AI strategy aligned with business goals',
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Execute AI solutions with proven methodologies',
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description: 'Continuous improvement and value maximization',
                },
              ].map((phase, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          variant="gradient"
          title="Ready to transform your business with AI?"
          description="Schedule a consultation with our AI experts to discuss your specific transformation objectives and timeline."
          actions={[
            {
              text: 'Schedule Consultation',
              effects: { ripple: true }
            },
            {
              text: 'Download Service Guide',
              effects: { ripple: true }
            }
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}