'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

export interface InsightsTeaserProps {
  className?: string;
}

const featuredInsights = [
  {
    id: 'ai-financial-services-2024',
    title: 'The Future of AI in Financial Services: A 2024 Perspective',
    excerpt: 'Our comprehensive analysis of AI adoption trends across 150+ financial institutions.',
    category: 'Industry Report',
    readTime: '15 min read',
    publishDate: 'March 2024',
    featured: true,
  },
  {
    id: 'responsible-ai-framework',
    title: 'Building Responsible AI: A Practical Framework',
    excerpt: 'Step-by-step guide to implementing ethical AI practices in enterprise environments.',
    category: 'White Paper',
    readTime: '20 min read',
    publishDate: 'February 2024',
    featured: true,
  },
  {
    id: 'ai-roi-measurement',
    title: 'ROI Measurement in AI Projects: Beyond the Hype',
    excerpt: 'Data-driven insights from 200+ AI implementations on measuring and maximizing returns.',
    category: 'Research',
    readTime: '12 min read',
    publishDate: 'January 2024',
    featured: true,
  },
];

export function InsightsTeaser({ className }: InsightsTeaserProps) {
  return (
    <section className={cn('section-professional', className)}>
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-accent text-accent">
            Latest Insights
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            <span className="text-ink-black">
              Leading the AI Conversation
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center leading-relaxed">
            Stay ahead with cutting-edge research, practical frameworks, and industry insights
            from our team of AI experts.
          </p>
        </div>

        {/* Content Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12" style={{ marginTop: 'var(--layout-content)' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">150+</div>
            <div className="text-sm text-slate-600 mt-1">Published Insights</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">500K+</div>
            <div className="text-sm text-slate-600 mt-1">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">25+</div>
            <div className="text-sm text-slate-600 mt-1">Industry Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">50+</div>
            <div className="text-sm text-slate-600 mt-1">Speaking Events</div>
          </div>
        </div>

        {/* Featured Insights */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredInsights.map((insight, index) => (
            <Card
              key={insight.id}
              variant="elevated"
              hover="lift"
              className="h-full"
            >
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" size="sm">{insight.category}</Badge>
                  <span className="text-xs text-slate-500">{insight.readTime}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {insight.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {insight.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{insight.publishDate}</span>
                  <Button variant="ghost" size="sm">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Preview */}
        <div className="component-card bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20 text-center space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">Stay Updated with AI Intelligence</h3>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Get our latest research and insights delivered monthly. Join 25,000+ executives
              who rely on our intelligence to make informed AI decisions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/our-insights">
              <Button variant="gradient" className="component-button shadow-lg">
                Explore All Insights
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
            <Link href="/our-insights#newsletter">
              <Button variant="outline" className="component-button">
                Subscribe to Newsletter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InsightsTeaser;