'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
  TechnologyBadge,
} from '@/components/ui';

export interface ServicesProps {
  className?: string;
}

const services = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Roadmapping',
    shortDescription:
      'Strategic planning for enterprise AI transformation with measurable ROI',
    description:
      'Develop comprehensive AI strategies that align with business objectives and deliver measurable value.',
    icon: '📊',
    features: [
      'AI Readiness Assessment',
      'Strategic Roadmap Development',
      'ROI Framework Design',
      'Change Management Planning',
    ],
    technologies: ['Strategy Framework', 'ROI Modeling', 'Change Management'],
    stats: {
      roi: '340%',
      timeToValue: '3-6 months',
      successRate: '98%',
    },
    color: 'from-primary-navy to-midnight-blue',
  },
  {
    id: 'llm-implementation',
    title: 'Large Language Model Implementation',
    shortDescription:
      'Custom LLM solutions and enterprise ChatGPT integrations',
    description:
      'Deploy powerful language models tailored to your business needs, driving productivity and innovation.',
    icon: '🤖',
    features: [
      'Custom Model Fine-tuning',
      'Enterprise ChatGPT Integration',
      'Document Processing & RAG',
      'API Development',
    ],
    technologies: ['GPT-4', 'Claude', 'Llama 2', 'LangChain', 'OpenAI API'],
    stats: {
      roi: '250%',
      timeToValue: '6-12 weeks',
      successRate: '95%',
    },
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Solutions',
    shortDescription:
      'Advanced image and video analysis for automation and insights',
    description:
      'Transform visual data into actionable insights with advanced computer vision solutions.',
    icon: '👁️',
    features: [
      'Object Detection & Classification',
      'Quality Control Automation',
      'Real-time Video Analysis',
      'Medical Image Analysis',
    ],
    technologies: [
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'YOLO',
      'AWS Rekognition',
    ],
    stats: {
      roi: '280%',
      timeToValue: '8-16 weeks',
      successRate: '92%',
    },
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics & ML',
    shortDescription:
      'Data-driven forecasting and machine learning model development',
    description:
      'Build ML models that forecast trends, optimize operations, and drive data-driven decisions.',
    icon: '📊',
    features: [
      'Demand Forecasting',
      'Risk Assessment Models',
      'Customer Behavior Analysis',
      'Anomaly Detection',
    ],
    technologies: ['Python', 'R', 'Scikit-learn', 'XGBoost', 'Apache Spark'],
    stats: {
      roi: '320%',
      timeToValue: '10-20 weeks',
      successRate: '94%',
    },
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'process-automation',
    title: 'Process Automation & RPA',
    shortDescription:
      'Intelligent automation for streamlined business processes',
    description:
      'Automate workflows with intelligent process automation combining RPA and AI.',
    icon: '⚙️',
    features: [
      'Workflow Automation',
      'Document Processing',
      'Legacy System Integration',
      'Process Mining',
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Power Automate', 'Python'],
    stats: {
      roi: '400%',
      timeToValue: '4-8 weeks',
      successRate: '96%',
    },
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'ai-governance',
    title: 'AI Governance & Ethics',
    shortDescription: 'Responsible AI framework development and compliance',
    description:
      'Establish governance frameworks that balance AI innovation with ethical responsibility.',
    icon: '🛡️',
    features: [
      'AI Ethics Framework',
      'Bias Detection & Mitigation',
      'Regulatory Compliance',
      'Model Explainability',
    ],
    technologies: ['MLflow', 'Evidently AI', 'Fairlearn', 'LIME', 'SHAP'],
    stats: {
      roi: '180%',
      timeToValue: '8-12 weeks',
      successRate: '99%',
    },
    color: 'from-teal-500 to-cyan-500',
  },
];

export function Services({ className }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const router = useRouter();

  return (
    <section className={cn('section-professional', className)}>
      <div className="container-professional">
        {/* Professional Section Header */}
        <div className="space-y-6 text-center">
          <Badge
            variant="outline"
            className="border-primary-navy text-primary-navy"
          >
            Core Capabilities
          </Badge>
          <h2 className="text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
            <span className="text-ink-black">
              AI Implementation That Delivers Results
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-600">
            From strategy to implementation, we provide end-to-end AI consulting
            services that transform Fortune 500 operations and drive measurable
            ROI.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="grid-6 mb-16 gap-6"
          style={{ marginTop: 'var(--layout-content)' }}
        >
          {services.map((service, index) => (
            <Card
              key={service.id}
              variant={selectedService === service.id ? 'neural' : 'elevated'}
              hover="lift"
              className={cn(
                'group component-card relative col-span-2 cursor-pointer overflow-hidden transition-all duration-300',
                selectedService === service.id && 'ring-secondary ring-2',
                hoveredService === service.id && 'hover-lift'
              )}
              onClick={() =>
                setSelectedService(
                  selectedService === service.id ? null : service.id
                )
              }
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service-Specific Tech Background */}
              <div className="absolute inset-0 opacity-5 transition-opacity group-hover:opacity-10">
                {service.id === 'ai-strategy' && (
                  <div className="relative h-full w-full bg-gradient-to-br from-blue-500 to-indigo-600">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                        linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.3) 50%, transparent 70%),
                        radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.2) 2px, transparent 2px),
                        radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.2) 1px, transparent 1px)
                      `,
                        backgroundSize: '60px 60px, 40px 40px, 30px 30px',
                      }}
                    />
                  </div>
                )}
                {service.id === 'llm-implementation' && (
                  <div className="relative h-full w-full bg-gradient-to-br from-purple-500 to-pink-600">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                        repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(168, 85, 247, 0.1) 10px, rgba(168, 85, 247, 0.1) 20px),
                        radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
                      `,
                        backgroundSize: '40px 40px, 25px 25px',
                      }}
                    />
                  </div>
                )}
                {service.id === 'computer-vision' && (
                  <div className="relative h-full w-full bg-gradient-to-br from-green-500 to-emerald-600">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                        conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(34, 197, 94, 0.2) 90deg, transparent 180deg),
                        radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 20%, transparent 21%)
                      `,
                        backgroundSize: '50px 50px, 30px 30px',
                      }}
                    />
                  </div>
                )}
                {service.id === 'predictive-analytics' && (
                  <div className="relative h-full w-full bg-gradient-to-br from-orange-500 to-red-600">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                        linear-gradient(90deg, transparent 0%, rgba(249, 115, 22, 0.3) 50%, transparent 100%),
                        repeating-linear-gradient(0deg, transparent, transparent 15px, rgba(249, 115, 22, 0.1) 15px, rgba(249, 115, 22, 0.1) 30px)
                      `,
                        backgroundSize: '80px 80px, 35px 35px',
                      }}
                    />
                  </div>
                )}
                {service.id === 'process-automation' && (
                  <div className="relative h-full w-full bg-gradient-to-br from-indigo-500 to-purple-600">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                        radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.3) 2px, transparent 2px),
                        radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.3) 3px, transparent 3px),
                        linear-gradient(45deg, transparent 40%, rgba(99, 102, 241, 0.1) 50%, transparent 60%)
                      `,
                        backgroundSize: '45px 45px, 60px 60px, 35px 35px',
                      }}
                    />
                  </div>
                )}
                {service.id === 'ai-governance' && (
                  <div className="relative h-full w-full bg-gradient-to-br from-teal-500 to-cyan-600">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                        repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(20, 184, 166, 0.2) 60deg, transparent 120deg),
                        radial-gradient(circle at 70% 30%, rgba(20, 184, 166, 0.1) 2px, transparent 2px)
                      `,
                        backgroundSize: '40px 40px, 25px 25px',
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Animated Tech Elements */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-20">
                {service.id === 'ai-strategy' && (
                  <>
                    <div
                      className="absolute top-4 right-4 h-8 w-8 rotate-45 animate-spin rounded border border-blue-400"
                      style={{ animationDuration: '8s' }}
                    />
                    <div className="absolute bottom-6 left-6 h-3 w-3 animate-pulse rounded-full bg-blue-400" />
                  </>
                )}
                {service.id === 'llm-implementation' && (
                  <>
                    <div className="absolute top-6 left-8 h-1 w-12 animate-pulse bg-purple-400" />
                    <div className="absolute right-8 bottom-8 h-2 w-2 animate-bounce rounded-full bg-purple-400" />
                  </>
                )}
                {service.id === 'computer-vision' && (
                  <>
                    <div className="absolute top-6 right-6 h-6 w-6 animate-ping rounded-full border-2 border-green-400" />
                    <div className="absolute bottom-4 left-8 h-4 w-4 rotate-45 animate-pulse bg-green-400" />
                  </>
                )}
              </div>

              <CardHeader className="space-y-md">
                <div className="flex-between">
                  <div className="text-4xl">{service.icon}</div>
                  <Badge variant="outline" size="sm" className="text-xs">
                    {service.stats.successRate} Success Rate
                  </Badge>
                </div>
                <div className="space-y-sm">
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-slate-600">
                    {service.shortDescription}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-lg">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-xs text-center">
                    <div className="text-secondary text-lg font-bold">
                      {service.stats.roi}
                    </div>
                    <div className="text-xs text-slate-600">Average ROI</div>
                  </div>
                  <div className="space-y-xs text-center">
                    <div className="text-accent text-lg font-bold">
                      {service.stats.timeToValue}
                    </div>
                    <div className="text-xs text-slate-600">Time to Value</div>
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 3).map(tech => (
                    <TechnologyBadge
                      key={tech}
                      technology={tech}
                      className="text-xs"
                    />
                  ))}
                </div>

                {/* Expand/Collapse Indicator */}
                <div className="flex-center">
                  <Button
                    variant="ghost"
                    className="component-button text-secondary hover:text-accent"
                  >
                    {selectedService === service.id
                      ? 'Show Less'
                      : 'Learn More'}
                    <svg
                      className={cn(
                        'ml-2 h-4 w-4 transition-transform',
                        selectedService === service.id && 'rotate-180'
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Button>
                </div>
              </CardContent>

              {/* Expanded Content */}
              {selectedService === service.id && (
                <CardContent className="section-content border-t border-slate-200">
                  <div className="space-y-lg animate-fade-in">
                    <div className="space-y-md">
                      <h4 className="text-base font-semibold">
                        What&apos;s Included:
                      </h4>
                      <ul className="space-y-sm">
                        {service.features?.map(feature => (
                          <li
                            key={feature}
                            className="flex-professional text-sm text-slate-600"
                          >
                            <svg
                              className="text-success h-4 w-4 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-md">
                      <h4 className="text-base font-semibold">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map(tech => (
                          <TechnologyBadge
                            key={tech}
                            technology={tech}
                            className="text-xs"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex-professional">
                      <Link href={`/services/${service.id}`} className="flex-1">
                        <Button
                          variant="secondary"
                          className="component-button w-full"
                        >
                          Learn More
                        </Button>
                      </Link>
                      <Button
                        variant="gradient"
                        className="component-button flex-1"
                      >
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
        <div className="component-card from-secondary/10 to-accent/10 border-secondary/20 space-y-lg bg-gradient-to-r text-center">
          <h3 className="text-fluid-md text-neural text-balance">
            Ready to Transform Your Business?
          </h3>
          <p className="container-narrow mx-auto text-lg leading-relaxed text-slate-600">
            Our team of AI experts is ready to help you identify the perfect
            solution for your unique challenges. Schedule a free consultation to
            discuss your project.
          </p>
          <div className="flex-professional flex-wrap justify-center">
            <Button
              variant="gradient"
              className="component-button group shadow-neural"
              onClick={() => router.push('/contact')}
            >
              Schedule Free Consultation
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
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
