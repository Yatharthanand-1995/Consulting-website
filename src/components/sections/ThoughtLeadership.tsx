'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

export interface ThoughtLeadershipProps {
  className?: string;
}

const insights = [
  {
    id: 1,
    title: 'The State of Enterprise AI 2025',
    type: 'Research Report',
    readTime: '12 min read',
    publishDate: 'January 2025',
    excerpt: 'Our analysis of 500+ AI implementations reveals the factors that separate successful transformations from failures. Key insights from Fortune 500 deployments.',
    keyMetric: '89% of enterprises struggle with AI ROI measurement',
    downloadable: true,
    category: 'Market Intelligence',
    author: 'Strategic Research Team'
  },
  {
    id: 2,
    title: 'GenAI Governance: A Framework for Risk Management',
    type: 'Methodology',
    readTime: '8 min read',
    publishDate: 'December 2024',
    excerpt: 'A comprehensive approach to managing AI risks while maximizing business value. Developed from 150+ client implementations.',
    keyMetric: '67% reduction in AI compliance issues',
    downloadable: true,
    category: 'Governance',
    author: 'AI Ethics Practice Lead'
  },
  {
    id: 3,
    title: 'ROI Measurement Framework for AI Investments',
    type: 'Executive Guide',
    readTime: '15 min read',
    publishDate: 'November 2024',
    excerpt: 'A practical guide for measuring and optimizing AI investment returns. Includes benchmarks from 200+ successful implementations.',
    keyMetric: '$2.3B total value measured across portfolio',
    downloadable: true,
    category: 'Strategy',
    author: 'Value Realization Team'
  },
  {
    id: 4,
    title: 'AI Transformation Lessons from the Frontlines',
    type: 'Case Study Collection',
    readTime: '20 min read',
    publishDate: 'October 2024',
    excerpt: 'Real-world insights from Fortune 500 AI transformations. Implementation best practices from confidential client engagements.',
    keyMetric: '97% client satisfaction across implementations',
    downloadable: false,
    category: 'Implementation',
    author: 'Client Delivery Teams'
  }
];

const categories = ['All', 'Market Intelligence', 'Governance', 'Strategy', 'Implementation'];

export function ThoughtLeadership({ className }: ThoughtLeadershipProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredInsight, setHoveredInsight] = useState<number | null>(null);

  const filteredInsights = selectedCategory === 'All'
    ? insights
    : insights.filter(insight => insight.category === selectedCategory);

  return (
    <section className={cn('py-20 bg-slate-50', className)}>
      <div className="container mx-auto max-w-7xl px-6">
        {/* Professional Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-slate-900 text-slate-900">
            Latest Intelligence
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            <span className="text-slate-800">
              Insights That Drive Decision Making
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Research-backed perspectives on AI transformation, governance, and value creation.
            Based on real implementation experience across Fortune 500 companies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filteredInsights.map((insight, index) => (
            <Card
              key={insight.id}
              className={cn(
                'cursor-pointer transition-all duration-300 hover:shadow-lg',
                hoveredInsight === insight.id && 'transform -translate-y-1'
              )}
              onMouseEnter={() => setHoveredInsight(insight.id)}
              onMouseLeave={() => setHoveredInsight(null)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" size="sm" className="text-xs">
                    {insight.type}
                  </Badge>
                  {insight.downloadable && (
                    <div className="flex items-center space-x-1 text-xs text-slate-900">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17h6" />
                      </svg>
                      <span>Download</span>
                    </div>
                  )}
                </div>

                <CardTitle className="text-xl leading-tight mb-2">
                  {insight.title}
                </CardTitle>

                <div className="flex items-center space-x-4 text-xs text-slate-600">
                  <span>{insight.publishDate}</span>
                  <span>•</span>
                  <span>{insight.readTime}</span>
                  <span>•</span>
                  <span>{insight.author}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed mb-4">
                  {insight.excerpt}
                </CardDescription>

                {/* Key Metric Highlight */}
                <div className="bg-slate-100 border-l-2 border-slate-900 pl-4 py-2 mb-4">
                  <p className="text-sm font-medium text-slate-900">
                    {insight.keyMetric}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-sm font-medium"
                  >
                    Read full analysis →
                  </Button>

                  {insight.downloadable && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-900 hover:bg-slate-100"
                    >
                      Download PDF
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white border border-border rounded-lg p-6 sm:p-8 text-center">
          <h3 className="text-2xl font-semibold text-ink-black mb-3">
            Stay Ahead of AI Trends
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Get our latest research and insights delivered monthly. Join 25,000+ executives
            who rely on our intelligence to make informed AI decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto items-center justify-center">
            <input
              type="email"
              placeholder="Enter your business email"
              className="flex-1 px-4 py-3 text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-navy focus:border-transparent min-w-0 sm:min-w-[300px] h-12 text-center sm:text-left"
            />
            <Button variant="primary" size="lg" className="h-12 shrink-0">
              Subscribe
            </Button>
          </div>

          <p className="text-xs text-slate-600 mt-4">
            No spam. Unsubscribe anytime. SOC 2 compliant.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThoughtLeadership;