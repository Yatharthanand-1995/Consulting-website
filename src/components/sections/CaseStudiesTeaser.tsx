'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

export interface CaseStudiesTeaserProps {
  className?: string;
}

const featuredCases = [
  {
    id: 'global-manufacturer',
    title: 'Global Manufacturing Giant: $50M Cost Reduction',
    company: 'Fortune 100 Manufacturer',
    industry: 'Manufacturing',
    challenge: 'Supply chain inefficiencies and quality control issues',
    solution: 'AI-driven supply chain optimization and computer vision quality control',
    results: {
      costReduction: '$50M',
      timeToValue: '6 months',
      efficiency: '35%'
    },
    technologies: ['Machine Learning', 'Computer Vision', 'Predictive Analytics'],
    icon: '🏭',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'financial-services',
    title: 'Leading Bank: 340% ROI on AI Investment',
    company: 'Top 5 US Bank',
    industry: 'Financial Services',
    challenge: 'Manual processes and fraud detection inefficiencies',
    solution: 'Automated loan processing and advanced fraud detection systems',
    results: {
      roi: '340%',
      timeToValue: '4 months',
      accuracy: '99.2%'
    },
    technologies: ['Natural Language Processing', 'Anomaly Detection', 'RPA'],
    icon: '🏦',
    color: 'from-green-500 to-emerald-500'
  },
];

export function CaseStudiesTeaser({ className }: CaseStudiesTeaserProps) {
  return (
    <section className={cn('section-professional bg-slate-50', className)}>
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-secondary text-secondary">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            <span className="text-ink-black">
              Transforming Businesses with AI
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center leading-relaxed">
            Real results from Fortune 500 companies that trusted us to lead their AI transformation.
            Discover how we've generated billions in value across industries.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12" style={{ marginTop: 'var(--layout-content)' }}>
          {featuredCases.map((caseStudy) => (
            <Card
              key={caseStudy.id}
              variant="elevated"
              hover="lift"
              className="relative overflow-hidden group component-card h-full"
            >
              {/* Gradient Background */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-5 transition-opacity group-hover:opacity-10',
                  caseStudy.color
                )}
              />

              <CardHeader className="space-y-md">
                <div className="flex-between">
                  <div className="text-3xl">{caseStudy.icon}</div>
                  <Badge variant="outline" size="sm">{caseStudy.industry}</Badge>
                </div>
                <div className="space-y-sm">
                  <CardTitle className="text-xl font-semibold line-clamp-2">{caseStudy.title}</CardTitle>
                  <CardDescription className="text-sm text-slate-600 font-medium">
                    {caseStudy.company}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Challenge:</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Solution:</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200">
                  {Object.entries(caseStudy.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-secondary">{value}</div>
                      <div className="text-xs text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-900">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="outline" size="sm" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {caseStudy.technologies.length > 2 && (
                      <Badge variant="outline" size="sm" className="text-xs">
                        +{caseStudy.technologies.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Metrics Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">$2.3B</div>
            <div className="text-sm text-slate-600 mt-1">Total Value Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">150+</div>
            <div className="text-sm text-slate-600 mt-1">Client Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">97%</div>
            <div className="text-sm text-slate-600 mt-1">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">6 Months</div>
            <div className="text-sm text-slate-600 mt-1">Avg. ROI Timeline</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900">Want to see how we can transform your business?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our complete portfolio of client success stories across industries and use cases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/our-work">
                <Button variant="gradient" className="component-button shadow-lg">
                  View All Case Studies
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="component-button">
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