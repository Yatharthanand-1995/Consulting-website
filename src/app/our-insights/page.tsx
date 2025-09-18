'use client';

import { Header, Footer } from '@/components/layout';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  AITechnologyVisualization,
} from '@/components/ui';
import { cn } from '@/lib/utils';

const featuredInsights = [
  {
    title: 'The Future of AI in Financial Services: A 2024 Perspective',
    excerpt:
      'Our comprehensive analysis of AI adoption trends across 150+ financial institutions reveals key opportunities and challenges ahead.',
    category: 'Industry Report',
    readTime: '15 min read',
    publishDate: 'March 2024',
    image: '/img/insights/ai-financial-services.svg',
    featured: true,
  },
  {
    title: 'Building Responsible AI: A Practical Framework for Enterprise',
    excerpt:
      'A step-by-step guide to implementing ethical AI practices that balance innovation with responsibility.',
    category: 'White Paper',
    readTime: '20 min read',
    publishDate: 'February 2024',
    image: '/img/insights/responsible-ai.svg',
    featured: true,
  },
  {
    title: 'ROI Measurement in AI Projects: Beyond the Hype',
    excerpt:
      'Data-driven insights from 200+ AI implementations showing how to measure and maximize AI project returns.',
    category: 'Research',
    readTime: '12 min read',
    publishDate: 'January 2024',
    image: '/img/insights/ai-roi.svg',
    featured: true,
  },
];

const recentInsights = [
  {
    title: 'Generative AI in Manufacturing: Use Cases and Implementation',
    excerpt:
      'Exploring how GenAI is transforming manufacturing operations across quality control, design, and maintenance.',
    category: 'Case Study',
    readTime: '8 min read',
    publishDate: 'March 2024',
    image: '/img/insights/manufacturing-ai.svg',
  },
  {
    title: 'The Economics of AI Automation: Cost-Benefit Analysis Framework',
    excerpt:
      'A comprehensive framework for evaluating the economic impact of AI-driven automation initiatives.',
    category: 'Methodology',
    readTime: '10 min read',
    publishDate: 'March 2024',
    image: '/img/insights/ai-roi.svg',
  },
  {
    title: 'Healthcare AI Regulation: Navigating Compliance in 2024',
    excerpt:
      'Understanding the evolving regulatory landscape for AI in healthcare and strategies for compliance.',
    category: 'Regulatory',
    readTime: '6 min read',
    publishDate: 'February 2024',
    image: '/img/insights/healthcare-ai.svg',
  },
  {
    title: 'Computer Vision in Retail: Customer Experience Revolution',
    excerpt:
      'How leading retailers are using computer vision to enhance customer experience and operational efficiency.',
    category: 'Technology',
    readTime: '9 min read',
    publishDate: 'February 2024',
    image: '/img/insights/retail-ai.svg',
  },
  {
    title: 'Natural Language Processing: Enterprise Applications and ROI',
    excerpt:
      'Real-world applications of NLP in enterprise settings and measured business impact across industries.',
    category: 'Analysis',
    readTime: '11 min read',
    publishDate: 'January 2024',
    image: '/img/insights/ai-financial-services.svg',
  },
  {
    title: 'AI Workforce Transformation: Reskilling for the Future',
    excerpt:
      'Strategic approaches to workforce development and reskilling in the age of AI automation.',
    category: 'Strategy',
    readTime: '7 min read',
    publishDate: 'January 2024',
    image: '/img/insights/responsible-ai.svg',
  },
];

const categories = [
  { name: 'All Insights', count: 150, active: true },
  { name: 'Industry Reports', count: 25 },
  { name: 'White Papers', count: 18 },
  { name: 'Case Studies', count: 45 },
  { name: 'Research', count: 30 },
  { name: 'Technology', count: 32 },
];

const upcomingEvents = [
  {
    title: 'AI Strategy Summit 2024',
    date: 'April 15-16, 2024',
    location: 'New York City',
    type: 'Conference',
    description:
      'Join industry leaders for two days of AI strategy insights and networking.',
  },
  {
    title: 'Responsible AI Workshop',
    date: 'April 22, 2024',
    location: 'Virtual',
    type: 'Workshop',
    description:
      'Hands-on workshop on implementing ethical AI practices in your organization.',
  },
  {
    title: 'Manufacturing AI Deep Dive',
    date: 'May 8, 2024',
    location: 'Chicago',
    type: 'Seminar',
    description:
      'Technical seminar on AI applications in manufacturing and Industry 4.0.',
  },
];

export default function OurInsightsPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-professional bg-gradient-to-br from-slate-50 to-white">
          <div className="container-professional">
            <div className="space-y-8 text-center">
              <Badge
                variant="outline"
                className="border-secondary text-secondary"
              >
                Our Insights
              </Badge>
              <h1 className="text-4xl font-semibold text-balance md:text-5xl lg:text-6xl">
                <span className="text-slate-900">
                  Leading the Conversation on AI Innovation
                </span>
              </h1>
              <p className="mx-auto max-w-4xl text-xl text-balance text-slate-600">
                Cutting-edge research, practical frameworks, and industry
                insights from our team of AI experts. Stay ahead of the curve
                with data-driven perspectives on AI transformation.
              </p>

              {/* Content Stats */}
              <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold">150+</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Published Insights
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold">500K+</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Monthly Readers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold">25+</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Industry Awards
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold">50+</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Speaking Events
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="section-professional">
          <div className="container-professional">
            <div className="mb-16 grid items-center gap-12 lg:grid-cols-3 lg:gap-16">
              {/* Left Column - Content */}
              <div className="space-y-6 text-center lg:col-span-2 lg:text-left">
                <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                  Featured Insights
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-slate-600 lg:mx-0">
                  Our latest research and thought leadership on AI trends,
                  implementation strategies, and industry transformations from
                  our team of experts.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-slate-900"
                  >
                    Subscribe to Newsletter
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-900">
                    Download Research Reports →
                  </Button>
                </div>
              </div>

              {/* Right Column - AI Research Visualization */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="ai-research-card w-full max-w-md min-w-fit rounded-lg border border-slate-200 bg-white p-6 shadow-lg lg:p-8">
                  <div className="mb-6 text-center">
                    <h3 className="mb-2 text-lg font-semibold whitespace-nowrap text-slate-800">
                      AI Research Focus
                    </h3>
                    <p className="text-sm whitespace-nowrap text-slate-600">
                      Key technology areas
                    </p>
                  </div>

                  <div className="ai-viz-container mb-6">
                    <AITechnologyVisualization
                      variant="compact"
                      showLabels={false}
                    />
                  </div>

                  <div className="border-t border-slate-200 pt-4 text-center">
                    <p className="text-xs leading-relaxed text-slate-600">
                      500K+ monthly readers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {featuredInsights.map((insight, index) => (
                <Card
                  key={insight.title}
                  variant="elevated"
                  hover="lift"
                  className={cn(
                    'h-full',
                    index === 0 && 'lg:col-span-2 lg:row-span-2'
                  )}
                >
                  <div
                    className={cn(
                      'relative aspect-video overflow-hidden',
                      index === 0 && 'lg:aspect-[2/1]'
                    )}
                  >
                    {/* Featured Insight Images */}
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Overlay and Text */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="rounded bg-black/20 px-2 py-1 text-xs font-medium opacity-90 backdrop-blur-sm">
                        {insight.category}
                      </div>
                      <div className="mt-1 text-sm font-semibold">
                        {insight.publishDate}
                      </div>
                    </div>

                    {/* Interactive Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
                    <CardTitle
                      className={cn(
                        'line-clamp-2',
                        index === 0 ? 'text-2xl' : 'text-lg'
                      )}
                    >
                      {insight.title}
                    </CardTitle>
                    <CardDescription
                      className={cn('line-clamp-3', index === 0 && 'text-base')}
                    >
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
          </div>
        </section>

        {/* Content Categories & Recent Insights */}
        <section className="section-professional bg-slate-50">
          <div className="container-professional">
            <div className="grid gap-12 lg:grid-cols-4">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <h3 className="mb-6 text-xl font-semibold text-slate-900">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.name}
                      className={cn(
                        'flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-all',
                        category.active
                          ? 'bg-secondary text-white shadow-sm'
                          : 'text-slate-700 hover:bg-white hover:shadow-sm'
                      )}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span
                        className={cn(
                          'text-sm',
                          category.active ? 'text-blue-100' : 'text-slate-500'
                        )}
                      >
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Insights */}
              <div className="lg:col-span-3">
                <h3 className="mb-6 text-xl font-semibold text-slate-900">
                  Recent Insights
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {recentInsights.map(insight => (
                    <Card
                      key={insight.title}
                      variant="default"
                      hover="lift"
                      className="group h-full"
                    >
                      {/* Recent Insight Images */}
                      <div className="relative aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={insight.image}
                          alt={insight.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />

                        {/* Overlay and Interactive Effects */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                        <div className="absolute bottom-3 left-3 text-white">
                          <div className="rounded bg-black/30 px-2 py-1 text-xs font-medium opacity-90 backdrop-blur-sm">
                            {insight.category}
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>

                      <CardHeader className="space-y-3">
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
                            Read →
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="mt-12 text-center">
                  <Button variant="outline" size="lg">
                    Load More Insights
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="section-professional">
          <div className="container-professional">
            <div className="mb-16 space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Upcoming Events
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                Join our experts at industry events, workshops, and conferences
                around the world.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={event.title}
                  variant="default"
                  className="group h-full overflow-hidden text-center"
                >
                  {/* Event Visual Banner */}
                  <div className="relative h-32 overflow-hidden">
                    {event.type === 'Conference' && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage: `
                            radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.4) 2px, transparent 2px),
                            repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(99, 102, 241, 0.2) 20px, rgba(99, 102, 241, 0.2) 40px),
                            linear-gradient(135deg, transparent 30%, rgba(168, 85, 247, 0.3) 50%, transparent 70%)
                          `,
                            backgroundSize: '40px 40px, 80px 80px, 100px 100px',
                          }}
                        />
                        <div className="absolute top-4 right-4 opacity-50">
                          <div className="h-6 w-6 animate-pulse rounded border-2 border-blue-300" />
                        </div>
                        <div className="absolute bottom-4 left-4 opacity-60">
                          <div className="flex space-x-1">
                            <div className="h-3 w-2 animate-bounce bg-blue-400" />
                            <div
                              className="h-5 w-2 animate-bounce bg-indigo-400"
                              style={{ animationDelay: '0.2s' }}
                            />
                            <div
                              className="h-4 w-2 animate-bounce bg-purple-400"
                              style={{ animationDelay: '0.4s' }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {event.type === 'Workshop' && (
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800">
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage: `
                            repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(20, 184, 166, 0.3) 45deg, transparent 90deg),
                            radial-gradient(circle at 70% 60%, rgba(34, 197, 94, 0.4) 2px, transparent 2px)
                          `,
                            backgroundSize: '30px 30px, 35px 35px',
                          }}
                        />
                        <div className="absolute top-4 right-4 opacity-50">
                          <div className="h-6 w-6 animate-ping rounded-full border-2 border-emerald-300" />
                        </div>
                        <div className="absolute bottom-4 left-4 opacity-60">
                          <div className="flex h-6 w-6 items-center justify-center rounded border-2 border-emerald-300 bg-teal-400/30">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                          </div>
                        </div>
                      </div>
                    )}
                    {event.type === 'Seminar' && (
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-700 to-yellow-800">
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage: `
                            repeating-linear-gradient(45deg, rgba(245, 158, 11, 0.4) 0px, rgba(245, 158, 11, 0.4) 3px, transparent 3px, transparent 15px),
                            radial-gradient(circle at 40% 70%, rgba(234, 88, 12, 0.3) 3px, transparent 3px)
                          `,
                            backgroundSize: '25px 25px, 50px 50px',
                          }}
                        />
                        <div className="absolute top-4 right-4 opacity-50">
                          <div
                            className="h-5 w-5 rotate-45 animate-spin border-2 border-yellow-400"
                            style={{ animationDuration: '6s' }}
                          />
                        </div>
                        <div className="absolute bottom-4 left-4 opacity-60">
                          <div className="flex space-x-1">
                            <div className="h-3 w-2 animate-pulse bg-amber-400" />
                            <div
                              className="h-4 w-2 animate-pulse bg-orange-400"
                              style={{ animationDelay: '0.3s' }}
                            />
                            <div
                              className="h-2 w-2 animate-pulse bg-yellow-400"
                              style={{ animationDelay: '0.6s' }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Overlay and Type Badge */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="gradient" size="sm">
                        {event.type}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <CardContent className="space-y-6 p-8">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {event.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {event.description}
                      </p>
                    </div>
                    <div className="space-y-2 text-sm text-slate-500">
                      <div className="flex items-center justify-center">
                        <svg
                          className="mr-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center justify-center">
                        <svg
                          className="mr-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:border-secondary group-hover:text-secondary w-full transition-colors"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-professional from-secondary/10 to-accent/10 border-secondary/20 border-y bg-gradient-to-r">
          <div className="container-professional text-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Have Questions About AI Strategy?
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                Our experts are available for strategic discussions about AI
                implementation, regulatory compliance, and digital
                transformation initiatives.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button variant="gradient" size="lg" className="shadow-lg">
                  Schedule Expert Consultation
                </Button>
                <Button variant="outline" size="lg">
                  Download Research Reports
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
