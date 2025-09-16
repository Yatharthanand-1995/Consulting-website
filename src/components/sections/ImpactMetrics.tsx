'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button, Badge, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';

export interface ImpactMetricsProps {
  className?: string;
}

const impactMetrics = [
  {
    id: 1,
    industry: 'Global Investment Banking',
    challenge: 'Document processing automation for regulatory compliance',
    outcome: '40% faster processing time, $15M annual cost savings',
    timeline: '8 weeks implementation',
    scale: 'Enterprise-wide deployment',
    metrics: [
      { label: 'Processing Speed', value: '40%', trend: 'increase' },
      { label: 'Cost Reduction', value: '$15M', trend: 'savings' },
      { label: 'Compliance Score', value: '99.8%', trend: 'accuracy' }
    ],
    technologies: ['NLP', 'Document AI', 'Compliance Framework']
  },
  {
    id: 2,
    industry: 'Fortune 100 Manufacturing',
    challenge: 'Predictive maintenance across global facilities',
    outcome: '25% reduction in downtime, $50M cost avoidance',
    timeline: '12 weeks deployment',
    scale: '200+ global facilities',
    metrics: [
      { label: 'Downtime Reduction', value: '25%', trend: 'decrease' },
      { label: 'Cost Avoidance', value: '$50M', trend: 'savings' },
      { label: 'Asset Utilization', value: '18%', trend: 'increase' }
    ],
    technologies: ['IoT Analytics', 'ML Algorithms', 'Digital Twin']
  },
  {
    id: 3,
    industry: 'Healthcare System',
    challenge: 'Clinical decision support optimization',
    outcome: '30% improvement in diagnostic accuracy, reduced readmissions',
    timeline: '16 weeks implementation',
    scale: '50+ hospitals network',
    metrics: [
      { label: 'Diagnostic Accuracy', value: '30%', trend: 'increase' },
      { label: 'Readmission Rate', value: '22%', trend: 'decrease' },
      { label: 'Clinical Efficiency', value: '35%', trend: 'increase' }
    ],
    technologies: ['Clinical AI', 'EHR Integration', 'Decision Support']
  },
  {
    id: 4,
    industry: 'Global Technology Company',
    challenge: 'Customer service automation and personalization',
    outcome: '60% reduction in response time, 85% customer satisfaction',
    timeline: '10 weeks rollout',
    scale: '24/7 global support',
    metrics: [
      { label: 'Response Time', value: '60%', trend: 'decrease' },
      { label: 'Satisfaction Score', value: '85%', trend: 'rating' },
      { label: 'Resolution Rate', value: '45%', trend: 'increase' }
    ],
    technologies: ['Conversational AI', 'Sentiment Analysis', 'Knowledge Graph']
  }
];

const portfolioStats = [
  { value: '$2.3B', label: 'Total Value Generated', description: 'Across 150+ implementations' },
  { value: '97%', label: 'Client Satisfaction', description: 'Based on project outcomes' },
  { value: '340%', label: 'Average ROI', description: 'Within 18 months' },
  { value: '6 months', label: 'Average Time to Value', description: 'Strategy to measurable results' }
];

export function ImpactMetrics({ className }: ImpactMetricsProps) {
  const [selectedMetric, setSelectedMetric] = useState<number | null>(null);

  return (
    <section className={cn('py-20 bg-white', className)}>
      <div className="container mx-auto max-w-7xl px-6">
        {/* Professional Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-primary-navy text-primary-navy">
            Proven Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            <span className="text-ink-black">
              Results That Matter to Your Board
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Measurable outcomes from AI implementations across industries. All metrics
            independently verified through our Value Realization framework.
          </p>
        </div>

        {/* Portfolio Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {portfolioStats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300 min-h-[120px] flex flex-col justify-center"
            >
              <div className="text-3xl font-bold text-slate-900 font-mono mb-2 leading-tight">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-800 mb-2 leading-snug">
                {stat.label}
              </div>
              <div className="text-xs text-slate-600 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Industry Impact Cases */}
        <div className="space-y-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-ink-black mb-3">
              Representative Implementation Outcomes
            </h3>
            <p className="text-muted-foreground">
              Anonymized results from recent Fortune 500 engagements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card
                key={metric.id}
                className={cn(
                  'cursor-pointer transition-all duration-300 border-l-4 border-l-primary-navy hover:shadow-lg',
                  selectedMetric === metric.id && 'ring-2 ring-primary-navy/20'
                )}
                onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="ghost" className="text-xs bg-primary-navy/10 text-primary-navy">
                      {metric.industry}
                    </Badge>
                    <div className="text-xs text-muted-foreground">
                      {metric.timeline}
                    </div>
                  </div>

                  <CardTitle className="text-lg leading-tight mb-2">
                    {metric.challenge}
                  </CardTitle>

                  <div className="text-sm text-muted-foreground mb-3">
                    Scale: {metric.scale}
                  </div>

                  {/* Outcome Highlight */}
                  <div className="bg-data-green/5 border-l-2 border-data-green pl-4 py-2">
                    <p className="text-sm font-medium text-data-green">
                      {metric.outcome}
                    </p>
                  </div>
                </CardHeader>

                {selectedMetric === metric.id && (
                  <CardContent className="pt-0 animate-fade-in">
                    <div className="border-t border-border pt-4">
                      <h4 className="font-medium text-sm text-ink-black mb-3">
                        Key Performance Indicators:
                      </h4>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {metric.metrics.map((kpi, kpiIndex) => (
                          <div key={kpiIndex} className="text-center">
                            <div className="text-lg font-bold text-primary-navy font-mono">
                              {kpi.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {kpi.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mb-4">
                        <h5 className="text-xs font-medium text-ink-black mb-2">Technologies Deployed:</h5>
                        <div className="flex flex-wrap gap-2">
                          {metric.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button variant="link" className="p-0 h-auto text-xs">
                        Request detailed case study →
                      </Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-muted/30 rounded-lg p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-ink-black mb-3">
            Ready to Generate Similar Results?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our Value Realization methodology ensures measurable ROI from day one.
            Schedule a consultation to discuss your specific transformation objectives.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="primary" size="lg">
              Schedule ROI Assessment
            </Button>
            <Button variant="secondary" size="lg">
              Download Methodology Guide
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            All engagements include performance guarantees and milestone-based value tracking
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImpactMetrics;