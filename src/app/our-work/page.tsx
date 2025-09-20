'use client';

import { useRouter } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { Services, CaseStudies } from '@/components/sections';
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

const industries = [
  {
    name: 'Financial Services',
    description: 'Banking, Insurance, FinTech',
    projects: '45+ projects',
    icon: '🏦',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Healthcare & Life Sciences',
    description: 'Pharma, MedTech, Digital Health',
    projects: '32+ projects',
    icon: '🏥',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Manufacturing',
    description: 'Automotive, Industrial, Consumer Goods',
    projects: '28+ projects',
    icon: '🏭',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Technology',
    description: 'Software, Hardware, Telecommunications',
    projects: '38+ projects',
    icon: '💻',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Energy & Utilities',
    description: 'Oil & Gas, Renewable Energy, Power',
    projects: '22+ projects',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Retail & Consumer',
    description: 'E-commerce, CPG, Hospitality',
    projects: '35+ projects',
    icon: '🛍️',
    color: 'from-teal-500 to-cyan-500',
  },
];

const capabilities = [
  {
    title: 'AI Strategy & Transformation',
    description:
      'End-to-end AI strategy development and organizational transformation',
    deliverables: [
      'AI Readiness Assessment',
      'Strategic Roadmap',
      'ROI Framework',
      'Change Management',
    ],
    engagement: '12-16 weeks',
  },
  {
    title: 'Advanced Analytics',
    description:
      'Data science, machine learning, and predictive analytics solutions',
    deliverables: [
      'ML Model Development',
      'Data Pipeline Setup',
      'Dashboard Creation',
      'Model Monitoring',
    ],
    engagement: '8-12 weeks',
  },
  {
    title: 'Process Automation',
    description:
      'Intelligent automation using RPA, AI, and workflow optimization',
    deliverables: [
      'Process Analysis',
      'Automation Design',
      'Bot Development',
      'Training & Support',
    ],
    engagement: '6-10 weeks',
  },
  {
    title: 'AI Governance',
    description: 'Responsible AI frameworks, ethics, and regulatory compliance',
    deliverables: [
      'Governance Framework',
      'Risk Assessment',
      'Compliance Audit',
      'Policy Development',
    ],
    engagement: '8-12 weeks',
  },
];

export default function OurWorkPage() {
  const router = useRouter();

  return (
    <div className="bg-background min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-professional bg-gradient-to-br from-slate-50 to-white">
          <div className="container-professional">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Column - Content */}
              <div className="space-y-8 text-center lg:text-left">
                <Badge
                  variant="outline"
                  className="border-secondary text-secondary"
                >
                  Our Work
                </Badge>
                <h1 className="text-4xl font-semibold text-balance md:text-5xl lg:text-6xl">
                  <span className="text-slate-900">
                    Transforming Industries Through AI Innovation
                  </span>
                </h1>
                <p className="mx-auto max-w-3xl text-xl text-balance text-slate-600 lg:mx-0">
                  We&apos;ve delivered AI solutions across 150+ Fortune 500
                  companies, generating $2.3B in measurable value. Our expertise
                  spans industries and use cases, with a proven methodology that
                  delivers results.
                </p>

                {/* Key Metrics */}
                <div className="mx-auto grid max-w-lg grid-cols-2 gap-6 lg:mx-0">
                  <div className="text-center lg:text-left">
                    <div className="text-secondary text-3xl font-bold">
                      150+
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Client Projects
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-secondary text-3xl font-bold">
                      $2.3B
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Value Generated
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-secondary text-3xl font-bold">97%</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-secondary text-3xl font-bold">
                      6 Months
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Avg. ROI Timeline
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - AI Technology Showcase */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-xl">
                  <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-lg lg:p-10">
                    {/* Background AI Visualization */}
                    <div className="pointer-events-none absolute inset-0 opacity-5">
                      <AITechnologyVisualization
                        variant="background"
                        showLabels={false}
                      />
                    </div>

                    <div className="relative z-10">
                      <div className="mb-8 text-center">
                        <h3 className="mb-3 text-xl font-semibold text-slate-800 lg:text-2xl">
                          Our Technology Stack
                        </h3>
                        <p className="text-sm text-slate-600">
                          Enterprise-grade AI capabilities
                        </p>
                      </div>

                      {/* AI Technology Visualization */}
                      <div className="mb-8 flex justify-center">
                        <AITechnologyVisualization
                          variant="compact"
                          showLabels={false}
                        />
                      </div>

                      {/* Professional Metrics */}
                      <div className="space-y-6">
                        {[
                          {
                            value: '6 Industries',
                            label: 'Proven Across',
                            description: 'Financial, Healthcare, Manufacturing',
                          },
                          {
                            value: '150+ Projects',
                            label: 'Client Implementations',
                            description: 'Fortune 500 companies',
                          },
                          {
                            value: '97% Success Rate',
                            label: 'Project Delivery',
                            description: 'On-time and on-budget',
                          },
                        ].map((metric, index) => (
                          <div
                            key={metric.label}
                            className="border-l-2 border-slate-900 pl-4"
                          >
                            <div className="font-mono text-xl font-bold text-slate-900">
                              {metric.value}
                            </div>
                            <div className="text-ink-black text-sm font-medium">
                              {metric.label}
                            </div>
                            <div className="text-muted-foreground text-xs">
                              {metric.description}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Professional CTA */}
                      <div className="border-border mt-8 border-t pt-6 text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-slate-900"
                        >
                          Explore detailed case studies →
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="section-professional">
          <div className="container-professional">
            <div className="mb-16 space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Industries We Serve
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                Our deep industry expertise ensures AI solutions that understand
                your unique challenges and opportunities.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map(industry => (
                <Card
                  key={industry.name}
                  variant="elevated"
                  hover="lift"
                  className="relative flex h-full flex-col overflow-hidden"
                >
                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-br opacity-5',
                      industry.color
                    )}
                  />
                  <CardHeader className="flex flex-1 flex-col justify-between p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex-shrink-0 text-3xl">
                        {industry.icon}
                      </div>
                      <Badge
                        variant="outline"
                        size="sm"
                        className="flex-shrink-0"
                      >
                        {industry.projects}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-left text-xl">
                        {industry.name}
                      </CardTitle>
                      <CardDescription className="text-left">
                        {industry.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="section-professional bg-slate-50">
          <div className="container-professional">
            <div className="mb-16 space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Core Capabilities
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                Comprehensive AI consulting services designed to drive
                transformation across your organization.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {capabilities.map(capability => (
                <Card
                  key={capability.title}
                  variant="default"
                  className="flex h-full flex-col"
                >
                  <CardHeader className="flex-shrink-0 px-6 py-6 pb-3">
                    <CardTitle className="text-xl text-slate-900">
                      {capability.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {capability.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between space-y-6 px-6 pt-0 pb-6">
                    <div className="w-full">
                      <h4 className="mb-3 text-left font-medium text-slate-900">
                        Key Deliverables:
                      </h4>
                      <ul className="space-y-2">
                        {capability.deliverables.map(deliverable => (
                          <li
                            key={deliverable}
                            className="flex items-center text-sm text-slate-600"
                          >
                            <svg
                              className="mr-3 h-4 w-4 flex-shrink-0 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4">
                      <span className="text-sm text-slate-500">
                        Typical Engagement:
                      </span>
                      <Badge variant="outline" className="flex-shrink-0">
                        {capability.engagement}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <Services />

        {/* Case Studies Section */}
        <CaseStudies />

        {/* CTA Section */}
        <section className="section-professional from-secondary/10 to-accent/10 border-secondary/20 border-y bg-gradient-to-r">
          <div className="container-professional text-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Ready to Transform Your Organization?
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                Join the ranks of Fortune 500 companies that have successfully
                transformed their operations with our AI solutions. Let&apos;s
                discuss how we can deliver similar results for your
                organization.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  variant="gradient"
                  size="lg"
                  className="shadow-lg"
                  onClick={() => router.push('/contact')}
                >
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg">
                  Download Case Studies
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
