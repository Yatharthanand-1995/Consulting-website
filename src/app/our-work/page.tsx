'use client';

import { Header, Footer } from '@/components/layout';
import { Services, CaseStudies } from '@/components/sections';
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, AITechnologyVisualization } from '@/components/ui';
import { cn } from '@/lib/utils';

const industries = [
  {
    name: 'Financial Services',
    description: 'Banking, Insurance, FinTech',
    projects: '45+ projects',
    icon: '🏦',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Healthcare & Life Sciences',
    description: 'Pharma, MedTech, Digital Health',
    projects: '32+ projects',
    icon: '🏥',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Manufacturing',
    description: 'Automotive, Industrial, Consumer Goods',
    projects: '28+ projects',
    icon: '🏭',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Technology',
    description: 'Software, Hardware, Telecommunications',
    projects: '38+ projects',
    icon: '💻',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Energy & Utilities',
    description: 'Oil & Gas, Renewable Energy, Power',
    projects: '22+ projects',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Retail & Consumer',
    description: 'E-commerce, CPG, Hospitality',
    projects: '35+ projects',
    icon: '🛍️',
    color: 'from-teal-500 to-cyan-500'
  },
];

const capabilities = [
  {
    title: 'AI Strategy & Transformation',
    description: 'End-to-end AI strategy development and organizational transformation',
    deliverables: ['AI Readiness Assessment', 'Strategic Roadmap', 'ROI Framework', 'Change Management'],
    engagement: '12-16 weeks',
  },
  {
    title: 'Advanced Analytics',
    description: 'Data science, machine learning, and predictive analytics solutions',
    deliverables: ['ML Model Development', 'Data Pipeline Setup', 'Dashboard Creation', 'Model Monitoring'],
    engagement: '8-12 weeks',
  },
  {
    title: 'Process Automation',
    description: 'Intelligent automation using RPA, AI, and workflow optimization',
    deliverables: ['Process Analysis', 'Automation Design', 'Bot Development', 'Training & Support'],
    engagement: '6-10 weeks',
  },
  {
    title: 'AI Governance',
    description: 'Responsible AI frameworks, ethics, and regulatory compliance',
    deliverables: ['Governance Framework', 'Risk Assessment', 'Compliance Audit', 'Policy Development'],
    engagement: '8-12 weeks',
  },
];

export default function OurWorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-professional bg-gradient-to-br from-slate-50 to-white">
          <div className="container-professional">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left space-y-8">
                <Badge variant="outline" className="border-secondary text-secondary">
                  Our Work
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance">
                  <span className="text-slate-900">
                    Transforming Industries Through AI Innovation
                  </span>
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto lg:mx-0 text-balance">
                  We've delivered AI solutions across 150+ Fortune 500 companies, generating $2.3B in measurable value.
                  Our expertise spans industries and use cases, with a proven methodology that delivers results.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-secondary">150+</div>
                    <div className="text-sm text-slate-600 mt-1">Client Projects</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-secondary">$2.3B</div>
                    <div className="text-sm text-slate-600 mt-1">Value Generated</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-secondary">97%</div>
                    <div className="text-sm text-slate-600 mt-1">Client Satisfaction</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-secondary">6 Months</div>
                    <div className="text-sm text-slate-600 mt-1">Avg. ROI Timeline</div>
                  </div>
                </div>
              </div>

              {/* Right Column - AI Technology Showcase */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-xl">
                  <div className="bg-white border border-slate-200 rounded-lg p-8 lg:p-10 shadow-lg relative overflow-hidden">
                    {/* Background AI Visualization */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                      <AITechnologyVisualization variant="background" showLabels={false} />
                    </div>

                    <div className="relative z-10">
                      <div className="text-center mb-8">
                        <h3 className="text-xl lg:text-2xl font-semibold text-slate-800 mb-3">Our Technology Stack</h3>
                        <p className="text-sm text-slate-600">Enterprise-grade AI capabilities</p>
                      </div>

                      {/* AI Technology Visualization */}
                      <div className="mb-8 flex justify-center">
                        <AITechnologyVisualization variant="compact" showLabels={false} />
                      </div>

                      {/* Professional Metrics */}
                      <div className="space-y-6">
                        {[
                          { value: '6 Industries', label: 'Proven Across', description: 'Financial, Healthcare, Manufacturing' },
                          { value: '150+ Projects', label: 'Client Implementations', description: 'Fortune 500 companies' },
                          { value: '97% Success Rate', label: 'Project Delivery', description: 'On-time and on-budget' }
                        ].map((metric, index) => (
                          <div
                            key={metric.label}
                            className="border-l-2 border-slate-900 pl-4"
                          >
                            <div className="text-xl font-bold text-slate-900 font-mono">{metric.value}</div>
                            <div className="text-sm font-medium text-ink-black">{metric.label}</div>
                            <div className="text-xs text-muted-foreground">{metric.description}</div>
                          </div>
                        ))}
                      </div>

                      {/* Professional CTA */}
                      <div className="mt-8 pt-6 border-t border-border text-center">
                        <Button variant="ghost" size="sm" className="text-slate-900">
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
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Industries We Serve
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our deep industry expertise ensures AI solutions that understand your unique challenges and opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Card key={industry.name} variant="elevated" hover="lift" className="relative overflow-hidden">
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-5',
                    industry.color
                  )} />
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl">{industry.icon}</div>
                      <Badge variant="outline" size="sm">{industry.projects}</Badge>
                    </div>
                    <CardTitle className="text-xl">{industry.name}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="section-professional bg-slate-50">
          <div className="container-professional">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Core Capabilities
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive AI consulting services designed to drive transformation across your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((capability) => (
                <Card key={capability.title} variant="clean" className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">{capability.title}</CardTitle>
                    <CardDescription className="text-slate-600">{capability.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {capability.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-center text-sm text-slate-600">
                            <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <span className="text-sm text-slate-500">Typical Engagement:</span>
                      <Badge variant="outline">{capability.engagement}</Badge>
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
        <section className="section-professional bg-gradient-to-r from-secondary/10 to-accent/10 border-y border-secondary/20">
          <div className="container-professional text-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Ready to Transform Your Organization?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Join the ranks of Fortune 500 companies that have successfully transformed their operations with our AI solutions.
                Let's discuss how we can deliver similar results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" className="shadow-lg">
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