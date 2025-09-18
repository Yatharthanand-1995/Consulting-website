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

export interface InsightsTeaserProps {
  className?: string;
}

interface FeaturedInsight {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  featured: boolean;
  image: string;
}

const featuredInsights: FeaturedInsight[] = [
  {
    id: 'ai-financial-services-2024',
    title: 'The Future of AI in Financial Services: A 2024 Perspective',
    excerpt:
      'Our comprehensive analysis of AI adoption trends across 150+ financial institutions.',
    category: 'Industry Report',
    readTime: '15 min read',
    publishDate: 'March 2024',
    featured: true,
    image: '/img/insights/ai-financial-services.svg',
  },
  {
    id: 'responsible-ai-framework',
    title: 'Building Responsible AI: A Practical Framework',
    excerpt:
      'Step-by-step guide to implementing ethical AI practices in enterprise environments.',
    category: 'White Paper',
    readTime: '20 min read',
    publishDate: 'February 2024',
    featured: true,
    image: '/img/insights/responsible-ai.svg',
  },
  {
    id: 'ai-roi-measurement',
    title: 'ROI Measurement in AI Projects: Beyond the Hype',
    excerpt:
      'Data-driven insights from 200+ AI implementations on measuring and maximizing returns.',
    category: 'Research',
    readTime: '12 min read',
    publishDate: 'January 2024',
    featured: true,
    image: '/img/insights/ai-roi.svg',
  },
];

export function InsightsTeaser({ className }: InsightsTeaserProps) {
  return (
    <section className={cn('section-professional', className)}>
      <div className="container-professional">
        {/* Section Header */}
        <div className="space-y-6 text-center">
          <Badge variant="outline" className="border-accent text-accent">
            Latest Insights
          </Badge>
          <h2 className="text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
            <span className="text-ink-black">Leading the AI Conversation</span>
          </h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-600">
            Stay ahead with cutting-edge research, practical frameworks, and
            industry insights from our team of AI experts.
          </p>
        </div>

        {/* Content Stats */}
        <div
          className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4"
          style={{ marginTop: 'var(--layout-content)' }}
        >
          <div className="text-center">
            <div className="text-accent text-3xl font-bold">150+</div>
            <div className="mt-1 text-sm text-slate-600">
              Published Insights
            </div>
          </div>
          <div className="text-center">
            <div className="text-accent text-3xl font-bold">500K+</div>
            <div className="mt-1 text-sm text-slate-600">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-accent text-3xl font-bold">25+</div>
            <div className="mt-1 text-sm text-slate-600">Industry Awards</div>
          </div>
          <div className="text-center">
            <div className="text-accent text-3xl font-bold">50+</div>
            <div className="mt-1 text-sm text-slate-600">Speaking Events</div>
          </div>
        </div>

        {/* Featured Insights */}
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {featuredInsights.map((insight, index) => (
            <Card
              key={insight.id}
              variant="elevated"
              hover="lift"
              className="h-full"
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              </div>
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" size="sm">
                    {insight.category}
                  </Badge>
                  <span className="text-xs text-slate-500">
                    {insight.readTime}
                  </span>
                </div>
                <CardTitle className="line-clamp-2 text-lg">
                  {insight.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {insight.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {insight.publishDate}
                  </span>
                  <Button variant="ghost" size="sm">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Preview */}
        <div className="component-card from-accent/10 to-secondary/10 border-accent/20 space-y-6 bg-gradient-to-r text-center">
          <div>
            <h3 className="mb-3 text-2xl font-semibold text-slate-900">
              Stay Updated with AI Intelligence
            </h3>
            <p className="mx-auto max-w-2xl leading-relaxed text-slate-600">
              Get our latest research and insights delivered monthly. Join
              25,000+ executives who rely on our intelligence to make informed
              AI decisions.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/our-insights">
              <Button variant="gradient" className="component-button shadow-lg">
                Explore All Insights
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
