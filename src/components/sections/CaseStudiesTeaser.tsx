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

export interface CaseStudiesTeaserProps {
  className?: string;
}

const featuredCases = [
  {
    id: 'global-manufacturer',
    title: 'Fortune 100 Manufacturer Achieves $50M Annual Savings',
    company: 'Global Manufacturing Leader',
    industry: 'Manufacturing',
    challenge:
      'Complex supply chain inefficiencies and inconsistent quality control across 50+ facilities',
    solution:
      'Implemented AI-powered supply chain optimization and computer vision quality assurance system',
    results: {
      savings: '$50M',
      implementation: '6 months',
      improvement: '35%',
    },
    impact:
      'Transformed global operations with predictive maintenance and automated quality control',
    technologies: [
      'Machine Learning',
      'Computer Vision',
      'Predictive Analytics',
    ],
    icon: '🏭',
  },
  {
    id: 'financial-services',
    title: 'Major Bank Delivers 340% ROI Through AI Automation',
    company: 'Top 5 US Financial Institution',
    industry: 'Financial Services',
    challenge:
      'Manual loan processing bottlenecks and rising fraud losses impacting customer experience',
    solution:
      'Deployed intelligent automation for loan processing and advanced fraud detection algorithms',
    results: {
      roi: '340%',
      deployment: '4 months',
      accuracy: '99.2%',
    },
    impact:
      'Accelerated loan approval times by 80% while reducing fraud losses by 60%',
    technologies: ['NLP', 'Anomaly Detection', 'Process Automation'],
    icon: '🏦',
  },
];

export function CaseStudiesTeaser({ className }: CaseStudiesTeaserProps) {
  return (
    <section className={cn('section-professional section-optimize', className)}>
      <div className="container-professional">
        {/* Section Header */}
        <div className="space-y-6 text-center">
          <Badge
            variant="outline"
            className="border-blue-600 bg-blue-50 text-blue-700"
          >
            Proven Results
          </Badge>
          <h2 className="text-3xl font-semibold text-balance text-gray-900 md:text-4xl lg:text-5xl">
            Transforming businesses with measurable impact
          </h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-600">
            Real results from Fortune 500 companies who partnered with us for AI
            transformation. See how we&apos;ve delivered billions in value
            across industries.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="mt-16 mb-12 grid gap-8 lg:grid-cols-2">
          {featuredCases.map(caseStudy => (
            <Card
              key={caseStudy.id}
              className="border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="text-3xl">{caseStudy.icon}</div>
                  <Badge
                    variant="outline"
                    className="border-gray-200 bg-gray-50 text-gray-700"
                  >
                    {caseStudy.industry}
                  </Badge>
                </div>
                <div className="space-y-3">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {caseStudy.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-gray-600">
                    {caseStudy.company}
                  </CardDescription>
                  <p className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                    {caseStudy.impact}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-gray-900">
                      Challenge
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {caseStudy.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-gray-900">
                      Solution
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4">
                  {Object.entries(caseStudy.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-700">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Key Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map(tech => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-gray-200 bg-gray-50 text-xs text-gray-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Metrics Summary */}
        <div className="mb-12 rounded-lg bg-gray-50 p-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">$2.3B+</div>
              <div className="mt-1 text-sm text-gray-600">Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">150+</div>
              <div className="mt-1 text-sm text-gray-600">
                Enterprise Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">97%</div>
              <div className="mt-1 text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">6 Months</div>
              <div className="mt-1 text-sm text-gray-600">Average ROI</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Ready to achieve similar results?
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Discover how we can help your organization unlock value through
              strategic AI implementation.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/our-work">
                <Button variant="primary" className="font-semibold">
                  View All Case Studies
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
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesTeaser;
