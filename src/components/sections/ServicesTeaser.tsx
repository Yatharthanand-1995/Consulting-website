'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, TechnologyBadge } from '@/components/ui';

export interface ServicesTeaserProps {
  className?: string;
}

const featuredServices = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Roadmapping',
    shortDescription: 'Strategic planning for enterprise AI transformation with measurable ROI',
    icon: '📊',
    stats: {
      roi: '340%',
      successRate: '98%'
    },
    color: 'from-primary-navy to-midnight-blue'
  },
  {
    id: 'llm-implementation',
    title: 'Large Language Model Implementation',
    shortDescription: 'Custom LLM solutions and enterprise ChatGPT integrations',
    icon: '🤖',
    stats: {
      roi: '250%',
      successRate: '95%'
    },
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Solutions',
    shortDescription: 'Advanced image and video analysis for automation and insights',
    icon: '👁️',
    stats: {
      roi: '280%',
      successRate: '92%'
    },
    color: 'from-green-500 to-emerald-500'
  },
];

export function ServicesTeaser({ className }: ServicesTeaserProps) {
  return (
    <section className={cn('section-professional', className)}>
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-primary-navy text-primary-navy">
            Core Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            <span className="text-ink-black">
              AI Solutions That Drive Results
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center leading-relaxed">
            From strategy to implementation, we deliver end-to-end AI consulting services
            that transform operations and drive measurable ROI.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12" style={{ marginTop: 'var(--layout-content)' }}>
          {featuredServices.map((service) => (
            <Card
              key={service.id}
              variant="elevated"
              hover="lift"
              className="relative overflow-hidden group component-card"
            >
              {/* Gradient Background */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-5 transition-opacity group-hover:opacity-10',
                  service.color
                )}
              />

              <CardHeader className="space-y-md">
                <div className="flex-between">
                  <div className="text-4xl">{service.icon}</div>
                  <Badge variant="outline" size="sm" className="text-xs">
                    {service.stats.successRate} Success Rate
                  </Badge>
                </div>
                <div className="space-y-sm">
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-slate-600">
                    {service.shortDescription}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-lg">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center space-y-xs">
                    <div className="text-lg font-bold text-secondary">{service.stats.roi}</div>
                    <div className="text-xs text-slate-600">Average ROI</div>
                  </div>
                  <div className="text-center space-y-xs">
                    <div className="text-lg font-bold text-accent">{service.stats.successRate}</div>
                    <div className="text-xs text-slate-600">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900">Ready to explore our full service portfolio?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover all our AI consulting services, industry expertise, and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/our-work">
                <Button variant="gradient" className="component-button shadow-lg">
                  View All Services
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="component-button">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesTeaser;