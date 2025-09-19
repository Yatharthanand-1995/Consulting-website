'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui';

export interface ServicesTeaserProps {
  className?: string;
}

const featuredServices = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Implementation',
    shortDescription:
      'End-to-end AI transformation strategy with proven methodologies and measurable outcomes',
    icon: '🎯',
    stats: {
      roi: '340%',
      successRate: '98%',
    },
    benefit: 'Strategic advantage through AI-driven decision making',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Solutions',
    shortDescription:
      'Custom LLM implementations and AI-powered automation for enterprise operations',
    icon: '⚡',
    stats: {
      roi: '280%',
      successRate: '95%',
    },
    benefit: 'Accelerated productivity and innovation',
  },
  {
    id: 'data-intelligence',
    title: 'Data Intelligence & Analytics',
    shortDescription:
      'Advanced analytics and computer vision solutions for operational excellence',
    icon: '📈',
    stats: {
      roi: '250%',
      successRate: '92%',
    },
    benefit: 'Data-driven insights for competitive advantage',
  },
];

export function ServicesTeaser({ className }: ServicesTeaserProps) {
  return (
    <section className={cn('section-professional', className)}>
      <div className="container-professional">
        {/* Section Header */}
        <div className="space-y-6 text-center">
          <Badge
            variant="outline"
            className="border-blue-600 bg-blue-50 text-blue-700"
          >
            Our Expertise
          </Badge>
          <h2 className="text-3xl font-semibold text-balance text-gray-900 md:text-4xl lg:text-5xl">
            Proven AI solutions for enterprise transformation
          </h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-600">
            We deliver strategic AI implementations that create sustainable
            competitive advantages and measurable business value for Fortune 500
            companies.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div
          className="mb-12 grid gap-8 lg:grid-cols-3"
          style={{ marginTop: 'var(--layout-content)' }}
        >
          {featuredServices.map(service => (
            <Card
              key={service.id}
              className="group relative border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="text-3xl">{service.icon}</div>
                  <Badge
                    variant="outline"
                    className="border-green-200 bg-green-50 text-xs text-green-700"
                  >
                    {service.stats.successRate} Success
                  </Badge>
                </div>
                <div className="space-y-3">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-gray-600">
                    {service.shortDescription}
                  </CardDescription>
                  <p className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    {service.benefit}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700">
                      {service.stats.roi}
                    </div>
                    <div className="text-xs text-gray-500">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">
                      {service.stats.successRate}
                    </div>
                    <div className="text-xs text-gray-500">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-gray-50 p-8 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Ready to accelerate your AI transformation?
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Explore our comprehensive AI consulting services and discover how
              we can help your organization achieve measurable results in 6
              months or less.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/our-work">
                <Button variant="primary" className="font-semibold">
                  View All Services
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" className="font-semibold">
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
