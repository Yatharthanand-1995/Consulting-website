'use client';

import { Header, Footer } from '@/components/layout';
import { ThoughtLeadership } from '@/components/sections';
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, AITechnologyVisualization } from '@/components/ui';
import { cn } from '@/lib/utils';

const featuredInsights = [
  {
    title: 'The Future of AI in Financial Services: A 2024 Perspective',
    excerpt: 'Our comprehensive analysis of AI adoption trends across 150+ financial institutions reveals key opportunities and challenges ahead.',
    category: 'Industry Report',
    readTime: '15 min read',
    publishDate: 'March 2024',
    image: '/img/insights/ai-financial-services.jpg',
    featured: true,
  },
  {
    title: 'Building Responsible AI: A Practical Framework for Enterprise',
    excerpt: 'A step-by-step guide to implementing ethical AI practices that balance innovation with responsibility.',
    category: 'White Paper',
    readTime: '20 min read',
    publishDate: 'February 2024',
    image: '/img/insights/responsible-ai.jpg',
    featured: true,
  },
  {
    title: 'ROI Measurement in AI Projects: Beyond the Hype',
    excerpt: 'Data-driven insights from 200+ AI implementations showing how to measure and maximize AI project returns.',
    category: 'Research',
    readTime: '12 min read',
    publishDate: 'January 2024',
    image: '/img/insights/ai-roi.jpg',
    featured: true,
  },
];

const recentInsights = [
  {
    title: 'Generative AI in Manufacturing: Use Cases and Implementation',
    excerpt: 'Exploring how GenAI is transforming manufacturing operations across quality control, design, and maintenance.',
    category: 'Case Study',
    readTime: '8 min read',
    publishDate: 'March 2024',
  },
  {
    title: 'The Economics of AI Automation: Cost-Benefit Analysis Framework',
    excerpt: 'A comprehensive framework for evaluating the economic impact of AI-driven automation initiatives.',
    category: 'Methodology',
    readTime: '10 min read',
    publishDate: 'March 2024',
  },
  {
    title: 'Healthcare AI Regulation: Navigating Compliance in 2024',
    excerpt: 'Understanding the evolving regulatory landscape for AI in healthcare and strategies for compliance.',
    category: 'Regulatory',
    readTime: '6 min read',
    publishDate: 'February 2024',
  },
  {
    title: 'Computer Vision in Retail: Customer Experience Revolution',
    excerpt: 'How leading retailers are using computer vision to enhance customer experience and operational efficiency.',
    category: 'Technology',
    readTime: '9 min read',
    publishDate: 'February 2024',
  },
  {
    title: 'Natural Language Processing: Enterprise Applications and ROI',
    excerpt: 'Real-world applications of NLP in enterprise settings and measured business impact across industries.',
    category: 'Analysis',
    readTime: '11 min read',
    publishDate: 'January 2024',
  },
  {
    title: 'AI Workforce Transformation: Reskilling for the Future',
    excerpt: 'Strategic approaches to workforce development and reskilling in the age of AI automation.',
    category: 'Strategy',
    readTime: '7 min read',
    publishDate: 'January 2024',
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
    description: 'Join industry leaders for two days of AI strategy insights and networking.',
  },
  {
    title: 'Responsible AI Workshop',
    date: 'April 22, 2024',
    location: 'Virtual',
    type: 'Workshop',
    description: 'Hands-on workshop on implementing ethical AI practices in your organization.',
  },
  {
    title: 'Manufacturing AI Deep Dive',
    date: 'May 8, 2024',
    location: 'Chicago',
    type: 'Seminar',
    description: 'Technical seminar on AI applications in manufacturing and Industry 4.0.',
  },
];

export default function OurInsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-professional bg-gradient-to-br from-slate-50 to-white">
          <div className="container-professional">
            <div className="text-center space-y-8">
              <Badge variant="outline" className="border-secondary text-secondary">
                Our Insights
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance">
                <span className="text-slate-900">
                  Leading the Conversation on AI Innovation
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto text-balance">
                Cutting-edge research, practical frameworks, and industry insights from our team of AI experts.
                Stay ahead of the curve with data-driven perspectives on AI transformation.
              </p>

              {/* Content Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">150+</div>
                  <div className="text-sm text-slate-600 mt-1">Published Insights</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">500K+</div>
                  <div className="text-sm text-slate-600 mt-1">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">25+</div>
                  <div className="text-sm text-slate-600 mt-1">Industry Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-slate-600 mt-1">Speaking Events</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="section-professional">
          <div className="container-professional">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center mb-16">
              {/* Left Column - Content */}
              <div className="lg:col-span-2 text-center lg:text-left space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                  Featured Insights
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
                  Our latest research and thought leadership on AI trends, implementation strategies, and industry transformations
                  from our team of experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="outline" size="sm" className="text-slate-900">
                    Subscribe to Newsletter
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-900">
                    Download Research Reports →
                  </Button>
                </div>
              </div>

              {/* Right Column - AI Research Visualization */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="ai-research-card bg-white border border-slate-200 rounded-lg p-6 lg:p-8 shadow-lg w-full max-w-md min-w-fit">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2 whitespace-nowrap">AI Research Focus</h3>
                    <p className="text-sm text-slate-600 whitespace-nowrap">Key technology areas</p>
                  </div>

                  <div className="ai-viz-container mb-6">
                    <AITechnologyVisualization variant="compact" showLabels={false} />
                  </div>

                  <div className="pt-4 border-t border-slate-200 text-center">
                    <p className="text-xs text-slate-600 leading-relaxed">500K+ monthly readers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredInsights.map((insight, index) => (
                <Card key={insight.title} variant="elevated" hover="lift" className={cn(
                  "h-full",
                  index === 0 && "lg:col-span-2 lg:row-span-2"
                )}>
                  <div className={cn(
                    "aspect-video bg-gradient-to-br from-slate-100 to-slate-200",
                    index === 0 && "lg:aspect-[2/1]"
                  )} />
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" size="sm">{insight.category}</Badge>
                      <span className="text-xs text-slate-500">{insight.readTime}</span>
                    </div>
                    <CardTitle className={cn(
                      "line-clamp-2",
                      index === 0 ? "text-2xl" : "text-lg"
                    )}>
                      {insight.title}
                    </CardTitle>
                    <CardDescription className={cn(
                      "line-clamp-3",
                      index === 0 && "text-base"
                    )}>
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
          </div>
        </section>

        {/* Content Categories & Recent Insights */}
        <section className="section-professional bg-slate-50">
          <div className="container-professional">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all",
                        category.active
                          ? "bg-secondary text-white shadow-sm"
                          : "text-slate-700 hover:bg-white hover:shadow-sm"
                      )}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className={cn(
                        "text-sm",
                        category.active ? "text-blue-100" : "text-slate-500"
                      )}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Insights */}
              <div className="lg:col-span-3">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Recent Insights</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {recentInsights.map((insight) => (
                    <Card key={insight.title} variant="clean" hover="lift" className="h-full">
                      <CardHeader className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" size="sm">{insight.category}</Badge>
                          <span className="text-xs text-slate-500">{insight.readTime}</span>
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{insight.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{insight.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-500">{insight.publishDate}</span>
                          <Button variant="ghost" size="sm">
                            Read →
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
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
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Upcoming Events
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Join our experts at industry events, workshops, and conferences around the world.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.title} variant="clean" className="text-center h-full">
                  <CardContent className="p-8 space-y-6">
                    <Badge variant="gradient">{event.type}</Badge>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-slate-900">{event.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{event.description}</p>
                    </div>
                    <div className="space-y-2 text-sm text-slate-500">
                      <div className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-professional bg-gradient-to-r from-accent/10 to-secondary/10 border-y border-accent/20" id="newsletter">
          <div className="container-professional text-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="gradient">AI Intelligence Newsletter</Badge>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                  Stay Ahead of the AI Curve
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Get our latest research and insights delivered monthly. Join 25,000+ executives
                  who rely on our intelligence to make informed AI decisions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto items-center justify-center">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-4 py-3 text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent min-w-0 sm:min-w-[300px] h-12 text-center sm:text-left"
                />
                <Button variant="gradient" size="lg" className="h-12 shrink-0">
                  Subscribe
                </Button>
              </div>

              <p className="text-xs text-slate-600">
                No spam. Unsubscribe anytime. SOC 2 compliant.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-professional bg-gradient-to-r from-secondary/10 to-accent/10 border-y border-secondary/20">
          <div className="container-professional text-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Have Questions About AI Strategy?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our experts are available for strategic discussions about AI implementation,
                regulatory compliance, and digital transformation initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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