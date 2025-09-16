'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button, Badge, Card, CardHeader, CardTitle, CardContent, TechnologyBadge, MetricBadge, IndustryBadge } from '@/components/ui';

export interface CaseStudiesProps {
  className?: string;
}

const caseStudies = [
  {
    id: 'retail-ai-transformation',
    title: 'Fortune 500 Retailer: AI-Powered Demand Forecasting',
    client: 'Global Fashion Retailer',
    industry: 'Retail',
    challenge: 'Inventory management inefficiencies causing $50M annual losses',
    solution: 'Machine learning demand forecasting with real-time inventory optimization',
    imageUrl: '/api/placeholder/600/400',
    featured: true,
    results: [
      { metric: 'Inventory Reduction', value: '35%', improvement: true },
      { metric: 'Forecast Accuracy', value: '94%', improvement: true },
      { metric: 'Cost Savings', value: '$45M', improvement: true },
      { metric: 'Implementation Time', value: '12 weeks', improvement: false },
    ],
    technologies: ['TensorFlow', 'Python', 'AWS SageMaker', 'Apache Kafka', 'PostgreSQL'],
    testimonial: {
      quote: 'GenAI Consulting transformed our inventory management completely. The ROI was evident within the first quarter.',
      author: 'Sarah Johnson',
      role: 'VP of Operations',
      company: 'Global Fashion Retailer',
    },
    timeline: '3 months',
    teamSize: 8,
    stats: {
      roi: '450%',
      timeToValue: '12 weeks',
      successMetric: '94% accuracy'
    }
  },
  {
    id: 'healthcare-diagnostic-ai',
    title: 'Hospital Network: AI-Enhanced Medical Diagnostics',
    client: 'Regional Healthcare System',
    industry: 'Healthcare',
    challenge: 'Radiologist shortage affecting diagnostic speed and accuracy',
    solution: 'Computer vision system for automated medical image analysis',
    imageUrl: '/api/placeholder/600/400',
    featured: true,
    results: [
      { metric: 'Diagnostic Speed', value: '75%', improvement: true },
      { metric: 'Accuracy Rate', value: '97.8%', improvement: true },
      { metric: 'Patient Throughput', value: '60%', improvement: true },
      { metric: 'Radiologist Time Saved', value: '40 hrs/week', improvement: true },
    ],
    technologies: ['PyTorch', 'MONAI', 'DICOM', 'Docker', 'Kubernetes'],
    testimonial: {
      quote: 'The AI diagnostic system has revolutionized our radiology department. We can now serve more patients with higher accuracy.',
      author: 'Dr. Michael Chen',
      role: 'Chief of Radiology',
      company: 'Regional Healthcare System',
    },
    timeline: '6 months',
    teamSize: 12,
    stats: {
      roi: '320%',
      timeToValue: '24 weeks',
      successMetric: '97.8% accuracy'
    }
  },
  {
    id: 'fintech-fraud-detection',
    title: 'Fintech Startup: Real-time Fraud Detection System',
    client: 'Digital Payment Platform',
    industry: 'Financial Services',
    challenge: 'Rising fraud rates threatening user trust and regulatory compliance',
    solution: 'ML-powered real-time fraud detection with behavioral analysis',
    imageUrl: '/api/placeholder/600/400',
    featured: false,
    results: [
      { metric: 'Fraud Detection Rate', value: '99.2%', improvement: true },
      { metric: 'False Positives', value: '85%', improvement: true },
      { metric: 'Processing Time', value: '<100ms', improvement: true },
      { metric: 'Annual Savings', value: '$12M', improvement: true },
    ],
    technologies: ['Apache Spark', 'Kafka', 'Redis', 'XGBoost', 'Elasticsearch'],
    testimonial: {
      quote: 'The fraud detection system has been a game-changer for our platform security and user confidence.',
      author: 'Alex Rodriguez',
      role: 'CTO',
      company: 'Digital Payment Platform',
    },
    timeline: '4 months',
    teamSize: 6,
    stats: {
      roi: '380%',
      timeToValue: '16 weeks',
      successMetric: '99.2% detection'
    }
  },
  {
    id: 'manufacturing-predictive-maintenance',
    title: 'Manufacturing Giant: Predictive Maintenance Platform',
    client: 'Automotive Manufacturer',
    industry: 'Manufacturing',
    challenge: 'Unplanned downtime costing $2M per hour in production losses',
    solution: 'IoT and AI-powered predictive maintenance system',
    imageUrl: '/api/placeholder/600/400',
    featured: false,
    results: [
      { metric: 'Downtime Reduction', value: '70%', improvement: true },
      { metric: 'Maintenance Costs', value: '45%', improvement: true },
      { metric: 'Equipment Lifespan', value: '25%', improvement: true },
      { metric: 'Production Efficiency', value: '18%', improvement: true },
    ],
    technologies: ['Azure IoT', 'Time Series Analysis', 'Prophet', 'Power BI', 'SQL Server'],
    testimonial: {
      quote: 'Predictive maintenance has transformed our operations. We now prevent failures before they happen.',
      author: 'Maria Lopez',
      role: 'Plant Director',
      company: 'Automotive Manufacturer',
    },
    timeline: '8 months',
    teamSize: 10,
    stats: {
      roi: '520%',
      timeToValue: '32 weeks',
      successMetric: '70% downtime reduction'
    }
  },
];

const industries = ['All', 'Retail', 'Healthcare', 'Financial Services', 'Manufacturing'];

export function CaseStudies({ className }: CaseStudiesProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const filteredCases = selectedIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const featuredCases = filteredCases.filter(study => study.featured);
  const regularCases = filteredCases.filter(study => !study.featured);

  return (
    <section className={cn('py-20 bg-muted/20', className)}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="gradient" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Proven Results Across Industries
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped leading organizations achieve breakthrough results with AI.
            Real clients, real outcomes, measurable impact.
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-muted rounded-lg">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
                  selectedIndustry === industry
                    ? 'bg-secondary text-white shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background'
                )}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Studies */}
        {featuredCases.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Case Studies</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredCases.map((study) => (
                <Card
                  key={study.id}
                  variant="elevated"
                  hover="lift"
                  className="cursor-pointer group relative overflow-hidden"
                  onClick={() => setSelectedCase(selectedCase === study.id ? null : study.id)}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="gradient" size="sm">
                      ⭐ Featured
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <IndustryBadge industry={study.industry} />
                      <MetricBadge
                        value={study.stats.roi}
                        unit=""
                        trend="up"
                        improvement={true}
                        className="text-xs"
                      />
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-secondary transition-colors">
                      {study.title}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground mb-4">
                      <strong>Challenge:</strong> {study.challenge}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Solution:</strong> {study.solution}
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.slice(0, 4).map((result) => (
                        <div key={result.metric} className="text-center">
                          <div className={cn(
                            'text-lg font-bold',
                            result.improvement ? 'text-success' : 'text-secondary'
                          )}>
                            {result.improvement && '+'}
                            {result.value}
                          </div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {study.technologies.slice(0, 4).map((tech) => (
                        <TechnologyBadge key={tech} technology={tech} className="text-xs" />
                      ))}
                      {study.technologies.length > 4 && (
                        <Badge variant="outline" size="sm" className="text-xs">
                          +{study.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Expand Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-secondary hover:text-accent"
                    >
                      {selectedCase === study.id ? 'Show Less' : 'View Full Case Study'}
                      <svg
                        className={cn('ml-1 w-4 h-4 transition-transform',
                          selectedCase === study.id && 'rotate-180'
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>

                    {/* Expanded Content */}
                    {selectedCase === study.id && (
                      <div className="border-t border-border mt-4 pt-4 animate-in slide-in-from-top duration-300">
                        <div className="space-y-4">
                          {/* Project Details */}
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <strong className="text-foreground">Timeline:</strong>
                              <p className="text-muted-foreground">{study.timeline}</p>
                            </div>
                            <div>
                              <strong className="text-foreground">Team Size:</strong>
                              <p className="text-muted-foreground">{study.teamSize} specialists</p>
                            </div>
                            <div>
                              <strong className="text-foreground">Time to Value:</strong>
                              <p className="text-muted-foreground">{study.stats.timeToValue}</p>
                            </div>
                          </div>

                          {/* Testimonial */}
                          <div className="bg-muted/50 rounded-lg p-4">
                            <blockquote className="text-sm italic mb-2">
                              &ldquo;{study.testimonial.quote}&rdquo;
                            </blockquote>
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gradient-2 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <div className="text-sm font-medium">{study.testimonial.author}</div>
                                <div className="text-xs text-muted-foreground">
                                  {study.testimonial.role}, {study.testimonial.company}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* All Technologies */}
                          <div>
                            <strong className="text-sm text-foreground mb-2 block">Full Technology Stack:</strong>
                            <div className="flex flex-wrap gap-1">
                              {study.technologies.map((tech) => (
                                <TechnologyBadge key={tech} technology={tech} className="text-xs" />
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-2">
                            <Button variant="secondary" size="sm" className="flex-1">
                              Download Case Study
                            </Button>
                            <Button variant="gradient" size="sm" className="flex-1">
                              Similar Project Quote
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Case Studies */}
        {regularCases.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">More Success Stories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularCases.map((study) => (
                <Card
                  key={study.id}
                  variant="default"
                  hover="lift"
                  className="cursor-pointer group"
                  onClick={() => setSelectedCase(selectedCase === study.id ? null : study.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <IndustryBadge industry={study.industry} />
                      <MetricBadge
                        value={study.stats.roi}
                        unit=""
                        trend="up"
                        improvement={true}
                        className="text-xs"
                      />
                    </div>
                    <CardTitle className="text-lg group-hover:text-secondary transition-colors">
                      {study.client}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {study.challenge}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {study.results.slice(0, 2).map((result) => (
                        <div key={result.metric} className="text-center">
                          <div className={cn(
                            'text-sm font-bold',
                            result.improvement ? 'text-success' : 'text-secondary'
                          )}>
                            {result.improvement && '+'}
                            {result.value}
                          </div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <TechnologyBadge key={tech} technology={tech} className="text-xs" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 border border-secondary/20">
          <h3 className="text-2xl font-bold mb-4">Ready to Be Our Next Success Story?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the ranks of industry leaders who have transformed their businesses with our AI solutions.
            Let's discuss how we can achieve similar results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg">
              Start Your AI Journey
            </Button>
            <Button variant="outline" size="lg">
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;