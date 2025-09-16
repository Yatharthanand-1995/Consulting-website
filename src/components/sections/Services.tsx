'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, TechnologyBadge } from '@/components/ui';

export interface ServicesProps {
  className?: string;
}

const services = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Roadmapping',
    shortDescription: 'Strategic planning for enterprise AI transformation with measurable ROI',
    description: 'We help Fortune 500 organizations develop comprehensive AI strategies that align with business objectives and deliver measurable value. Our methodology has generated $50M+ average value creation per engagement.',
    icon: '📊',
    outcomes: [
      '$50M average value creation per engagement',
      '340% average return on AI investment',
      '3-6 month strategy-to-value timeline',
      '98% client satisfaction rate'
    ],
    caseExample: 'Global manufacturer: $50M cost reduction through AI-driven supply chain optimization',
    technologies: ['Strategy Framework', 'ROI Modeling', 'Change Management'],
    stats: {
      roi: '340%',
      timeToValue: '3-6 months',
      successRate: '98%'
    },
    color: 'from-primary-navy to-midnight-blue'
  },
  {
    id: 'llm-implementation',
    title: 'Large Language Model Implementation',
    shortDescription: 'Custom LLM solutions and enterprise ChatGPT integrations',
    description: 'Deploy powerful language models tailored to your business needs. From fine-tuning to full custom implementations, we deliver LLM solutions that drive productivity and innovation.',
    icon: '🤖',
    features: [
      'Custom Model Fine-tuning',
      'Enterprise ChatGPT Integration',
      'Document Processing & RAG Systems',
      'Multi-language Support',
      'API Development & Integration',
      'Performance Optimization',
    ],
    technologies: ['GPT-4', 'Claude', 'Llama 2', 'LangChain', 'OpenAI API'],
    stats: {
      roi: '250%',
      timeToValue: '6-12 weeks',
      successRate: '95%'
    },
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Solutions',
    shortDescription: 'Advanced image and video analysis for automation and insights',
    description: 'Transform your visual data into actionable insights with state-of-the-art computer vision solutions. From quality control to automated monitoring, we deliver precision and scale.',
    icon: '👁️',
    features: [
      'Object Detection & Classification',
      'Quality Control Automation',
      'Facial Recognition Systems',
      'Real-time Video Analysis',
      'Medical Image Analysis',
      'Drone & Satellite Imagery',
    ],
    technologies: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLO', 'AWS Rekognition'],
    stats: {
      roi: '280%',
      timeToValue: '8-16 weeks',
      successRate: '92%'
    },
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics & ML',
    shortDescription: 'Data-driven forecasting and machine learning model development',
    description: 'Unlock the power of your data with advanced predictive analytics. We build ML models that forecast trends, optimize operations, and drive data-driven decision making.',
    icon: '📊',
    features: [
      'Demand Forecasting',
      'Risk Assessment Models',
      'Customer Behavior Analysis',
      'Anomaly Detection',
      'Optimization Algorithms',
      'Real-time Analytics Dashboards',
    ],
    technologies: ['Python', 'R', 'Scikit-learn', 'XGBoost', 'Apache Spark'],
    stats: {
      roi: '320%',
      timeToValue: '10-20 weeks',
      successRate: '94%'
    },
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'process-automation',
    title: 'Process Automation & RPA',
    shortDescription: 'Intelligent automation for streamlined business processes',
    description: 'Automate repetitive tasks and complex workflows with intelligent process automation. We combine RPA with AI to create efficient, scalable automation solutions.',
    icon: '⚙️',
    features: [
      'Workflow Automation',
      'Document Processing',
      'Data Entry Automation',
      'Legacy System Integration',
      'Exception Handling',
      'Process Mining & Optimization',
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Power Automate', 'Python'],
    stats: {
      roi: '400%',
      timeToValue: '4-8 weeks',
      successRate: '96%'
    },
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'ai-governance',
    title: 'AI Governance & Ethics',
    shortDescription: 'Responsible AI framework development and compliance',
    description: 'Ensure your AI initiatives are ethical, compliant, and sustainable. We help establish governance frameworks that balance innovation with responsibility.',
    icon: '🛡️',
    features: [
      'AI Ethics Framework Development',
      'Bias Detection & Mitigation',
      'Regulatory Compliance',
      'Model Explainability',
      'Risk Management',
      'Audit & Monitoring Systems',
    ],
    technologies: ['MLflow', 'Evidently AI', 'Fairlearn', 'LIME', 'SHAP'],
    stats: {
      roi: '180%',
      timeToValue: '8-12 weeks',
      successRate: '99%'
    },
    color: 'from-teal-500 to-cyan-500'
  },
];

export function Services({ className }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className={cn('section-professional', className)}>
      <div className="container-professional">
        {/* Professional Section Header */}
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-primary-navy text-primary-navy">
            Core Capabilities
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            <span className="text-ink-black">
              AI Implementation That Delivers Results
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center leading-relaxed">
            From strategy to implementation, we provide end-to-end AI consulting services
            that transform Fortune 500 operations and drive measurable ROI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-6 gap-6 mb-16" style={{ marginTop: 'var(--layout-content)' }}>
          {services.map((service, index) => (
            <Card
              key={service.id}
              variant={selectedService === service.id ? 'neural' : 'elevated'}
              hover="lift"
              className={cn(
                'col-span-2 cursor-pointer transition-all duration-300 relative overflow-hidden group component-card',
                selectedService === service.id && 'ring-2 ring-secondary',
                hoveredService === service.id && 'hover-lift'
              )}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Gradient Background */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-5 transition-opacity group-hover:opacity-10',
                  service.color
                )}
              />

              <CardHeader className="space-y-md">
                <div className="flex-between">
                  <div className="text-4xl">{service.icon}</div>
                  <Badge variant="outline" size="sm" className="text-xs">
                    {service.stats.successRate} Success Rate
                  </Badge>
                </div>
                <div className="space-y-sm">
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-slate-600">
                    {service.shortDescription}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-lg">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center space-y-xs">
                    <div className="text-lg font-bold text-secondary">{service.stats.roi}</div>
                    <div className="text-xs text-slate-600">Average ROI</div>
                  </div>
                  <div className="text-center space-y-xs">
                    <div className="text-lg font-bold text-accent">{service.stats.timeToValue}</div>
                    <div className="text-xs text-slate-600">Time to Value</div>
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <TechnologyBadge key={tech} technology={tech} className="text-xs" />
                  ))}
                </div>

                {/* Expand/Collapse Indicator */}
                <div className="flex-center">
                  <Button
                    variant="ghost"
                    className="component-button text-secondary hover:text-accent"
                  >
                    {selectedService === service.id ? 'Show Less' : 'Learn More'}
                    <svg
                      className={cn('ml-2 w-4 h-4 transition-transform',
                        selectedService === service.id && 'rotate-180'
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>
                </div>
              </CardContent>

              {/* Expanded Content */}
              {selectedService === service.id && (
                <CardContent className="border-t border-slate-200 section-content">
                  <div className="space-y-lg animate-fade-in">
                    <div className="space-y-md">
                      <h4 className="font-semibold text-base">What's Included:</h4>
                      <ul className="space-y-sm">
                        {service.features?.map((feature) => (
                          <li key={feature} className="flex-professional text-sm text-slate-600">
                            <svg className="w-4 h-4 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-md">
                      <h4 className="font-semibold text-base">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <TechnologyBadge key={tech} technology={tech} className="text-xs" />
                        ))}
                      </div>
                    </div>

                    <div className="flex-professional">
                      <Link href={`/services/${service.id}`} className="flex-1">
                        <Button variant="secondary" className="component-button w-full">
                          Learn More
                        </Button>
                      </Link>
                      <Button variant="gradient" className="component-button flex-1">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center component-card bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/20 space-y-lg">
          <h3 className="text-fluid-md text-balance text-neural">Ready to Transform Your Business?</h3>
          <p className="text-lg text-slate-600 container-narrow mx-auto leading-relaxed">
            Our team of AI experts is ready to help you identify the perfect solution for your unique challenges.
            Schedule a free consultation to discuss your project.
          </p>
          <div className="flex-professional justify-center flex-wrap">
            <Button variant="gradient" className="component-button group shadow-neural">
              Schedule Free Consultation
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Button>
            <Button variant="outline" className="component-button hover-lift">
              Download Service Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;