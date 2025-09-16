'use client';

import { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import { Button, Badge, Card, CardHeader, CardTitle, CardContent, TechnologyBadge } from '@/components/ui';
import { cn } from '@/lib/utils';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'whitepapers', label: 'Whitepapers' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'guides', label: 'Implementation Guides' },
    { id: 'reports', label: 'Industry Reports' },
    { id: 'tools', label: 'Assessment Tools' },
  ];

  const resources = [
    {
      id: 1,
      title: 'The Enterprise AI Transformation Playbook',
      description: 'A comprehensive guide to successfully implementing AI across large organizations, based on 500+ successful deployments.',
      type: 'whitepapers',
      category: 'Strategy',
      readTime: '45 min',
      downloadCount: '12,500+',
      featured: true,
      tags: ['AI Strategy', 'Digital Transformation', 'Enterprise'],
    },
    {
      id: 2,
      title: 'ROI Analysis: Measuring AI Success in Fortune 500',
      description: 'Data-driven insights from real AI implementations showing average ROI of 340% within 18 months.',
      type: 'reports',
      category: 'Analytics',
      readTime: '30 min',
      downloadCount: '8,200+',
      featured: true,
      tags: ['ROI Analysis', 'Metrics', 'Business Value'],
    },
    {
      id: 3,
      title: 'AI Ethics Framework for Responsible Implementation',
      description: 'Best practices for ethical AI deployment, including bias detection, fairness metrics, and governance structures.',
      type: 'whitepapers',
      category: 'Governance',
      readTime: '35 min',
      downloadCount: '15,300+',
      featured: false,
      tags: ['AI Ethics', 'Governance', 'Compliance'],
    },
    {
      id: 4,
      title: 'Retail AI Success Story: 35% Inventory Reduction',
      description: 'How a Fortune 500 retailer used AI-powered demand forecasting to reduce inventory costs by $45M annually.',
      type: 'case-studies',
      category: 'Retail',
      readTime: '20 min',
      downloadCount: '6,700+',
      featured: false,
      tags: ['Retail', 'Inventory Management', 'Machine Learning'],
    },
    {
      id: 5,
      title: 'LLM Implementation Guide for Enterprise',
      description: 'Step-by-step methodology for implementing Large Language Models in enterprise environments.',
      type: 'guides',
      category: 'Implementation',
      readTime: '60 min',
      downloadCount: '9,400+',
      featured: true,
      tags: ['LLM', 'Implementation', 'Enterprise'],
    },
    {
      id: 6,
      title: 'AI Readiness Assessment Tool',
      description: 'Interactive assessment to evaluate your organization\'s readiness for AI transformation across 12 key dimensions.',
      type: 'tools',
      category: 'Assessment',
      readTime: '15 min',
      downloadCount: '22,100+',
      featured: false,
      tags: ['Assessment', 'Readiness', 'Strategic Planning'],
    },
    {
      id: 7,
      title: 'Healthcare AI: Diagnostic Accuracy Report',
      description: 'Analysis of AI-powered medical diagnostics showing 97.8% accuracy rates across 50,000+ cases.',
      type: 'case-studies',
      category: 'Healthcare',
      readTime: '25 min',
      downloadCount: '4,500+',
      featured: false,
      tags: ['Healthcare', 'Computer Vision', 'Diagnostics'],
    },
    {
      id: 8,
      title: 'Manufacturing AI: Predictive Maintenance ROI',
      description: 'How predictive maintenance AI reduced downtime by 70% and saved $100M annually for automotive manufacturer.',
      type: 'case-studies',
      category: 'Manufacturing',
      readTime: '30 min',
      downloadCount: '7,800+',
      featured: false,
      tags: ['Manufacturing', 'Predictive Maintenance', 'IoT'],
    },
    {
      id: 9,
      title: '2024 AI Trends: What Enterprise Leaders Need to Know',
      description: 'Comprehensive analysis of emerging AI trends and their business implications for the next 3 years.',
      type: 'reports',
      category: 'Trends',
      readTime: '40 min',
      downloadCount: '18,600+',
      featured: true,
      tags: ['AI Trends', 'Market Analysis', 'Future of AI'],
    },
  ];

  const filteredResources = selectedCategory === 'all'
    ? resources
    : resources.filter(resource => resource.type === selectedCategory);

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gradient" className="mb-6">
              Knowledge Center
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Expert Insights & Resources
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Access our comprehensive library of research, case studies, and implementation guides
              to accelerate your AI transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Research Papers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">25+</div>
              <div className="text-muted-foreground">Case Studies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">100K+</div>
              <div className="text-muted-foreground">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">15+</div>
              <div className="text-muted-foreground">Assessment Tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Featured Resources</h2>
              <p className="text-xl text-muted-foreground">
                Our most popular and impactful resources for AI transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <Card key={resource.id} variant="neural" hover="lift" padding="lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="gradient" size="sm">
                        ⭐ Featured
                      </Badge>
                      <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.slice(0, 2).map((tag, index) => (
                        <TechnologyBadge key={index} technology={tag} className="text-xs" />
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {resource.downloadCount} downloads
                      </span>
                      <Button variant="secondary" size="sm">
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Complete Resource Library</h2>
              <p className="text-xl text-muted-foreground">
                Browse our full collection of research, insights, and practical tools
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap gap-2 p-1 bg-background rounded-lg border border-border">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
                      selectedCategory === category.id
                        ? 'bg-secondary text-white shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Resources Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} variant="elevated" hover="lift" padding="lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" size="sm">
                        {resource.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.map((tag, index) => (
                        <TechnologyBadge key={index} technology={tag} className="text-xs" />
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {resource.downloadCount} downloads
                      </span>
                      <Button variant="secondary" size="sm">
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card variant="neural" padding="lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get the latest AI insights, research findings, and implementation guides
                  delivered directly to your inbox every month.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto items-center justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 text-base border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-secondary min-w-0 sm:min-w-[300px] h-12 text-center sm:text-left"
                  />
                  <Button variant="gradient" size="lg" className="h-12 shrink-0">
                    Subscribe
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  Join 25,000+ AI leaders. Unsubscribe anytime.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Custom Research?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Looking for industry-specific insights or custom analysis for your AI initiative?
              Our research team can create tailored reports for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="xl">
                Request Custom Research
              </Button>
              <Button variant="outline" size="xl">
                Schedule Research Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer className="mt-0" />
    </div>
  );
}