'use client';

import { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import {
  Button,
  Badge,
  InteractiveCard,
  InteractiveButton,
  OptimizedImage,
} from '@/components/ui';
import { cn } from '@/lib/utils';

const industries = [
  {
    id: 'financial-services',
    title: 'Financial Services',
    description: 'AI-powered solutions for banking, insurance, and investment management',
    icon: '🏦',
    image: '/img/industries/financial-services.svg',
    challenges: [
      'Regulatory compliance automation',
      'Fraud detection and prevention',
      'Risk assessment optimization',
      'Customer experience personalization',
    ],
    solutions: [
      'Intelligent document processing',
      'Real-time fraud detection',
      'Automated risk modeling',
      'Conversational AI for customer service',
    ],
    results: {
      costReduction: '40%',
      efficiencyGain: '60%',
      accuracyImprovement: '95%',
    },
    clientCount: '25+ clients',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Smart manufacturing and Industry 4.0 transformation solutions',
    icon: '🏭',
    image: '/img/industries/manufacturing.svg',
    challenges: [
      'Equipment maintenance optimization',
      'Quality control automation',
      'Supply chain visibility',
      'Production planning optimization',
    ],
    solutions: [
      'Predictive maintenance systems',
      'Computer vision quality inspection',
      'AI-powered supply chain optimization',
      'Intelligent production scheduling',
    ],
    results: {
      costReduction: '35%',
      efficiencyGain: '45%',
      accuracyImprovement: '92%',
    },
    clientCount: '30+ clients',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'AI solutions for patient care, diagnostics, and operational efficiency',
    icon: '🏥',
    image: '/img/industries/healthcare.svg',
    challenges: [
      'Clinical decision support',
      'Medical imaging analysis',
      'Patient flow optimization',
      'Drug discovery acceleration',
    ],
    solutions: [
      'AI-powered diagnostic assistance',
      'Computer vision for medical imaging',
      'Predictive patient analytics',
      'Intelligent clinical workflows',
    ],
    results: {
      costReduction: '25%',
      efficiencyGain: '50%',
      accuracyImprovement: '88%',
    },
    clientCount: '20+ clients',
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    description: 'Customer experience and operational optimization through AI',
    icon: '🛍️',
    image: '/img/industries/retail.svg',
    challenges: [
      'Demand forecasting accuracy',
      'Personalized customer experiences',
      'Inventory optimization',
      'Price optimization strategies',
    ],
    solutions: [
      'AI-powered demand planning',
      'Recommendation engines',
      'Intelligent inventory management',
      'Dynamic pricing algorithms',
    ],
    results: {
      costReduction: '30%',
      efficiencyGain: '55%',
      accuracyImprovement: '90%',
    },
    clientCount: '35+ clients',
  },
  {
    id: 'energy',
    title: 'Energy & Utilities',
    description: 'Smart grid optimization and renewable energy management',
    icon: '⚡',
    image: '/img/industries/energy.svg',
    challenges: [
      'Grid stability and optimization',
      'Renewable energy integration',
      'Predictive asset maintenance',
      'Energy consumption forecasting',
    ],
    solutions: [
      'Smart grid management systems',
      'AI-powered energy forecasting',
      'Predictive maintenance for assets',
      'Demand response optimization',
    ],
    results: {
      costReduction: '45%',
      efficiencyGain: '40%',
      accuracyImprovement: '94%',
    },
    clientCount: '15+ clients',
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'AI solutions for software development and tech operations',
    icon: '💻',
    image: '/img/industries/technology.svg',
    challenges: [
      'Code quality and security',
      'Customer support automation',
      'Performance optimization',
      'User experience personalization',
    ],
    solutions: [
      'AI-powered code review',
      'Intelligent customer support',
      'Performance monitoring AI',
      'Personalization engines',
    ],
    results: {
      costReduction: '50%',
      efficiencyGain: '70%',
      accuracyImprovement: '96%',
    },
    clientCount: '40+ clients',
  },
];

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-professional critical-section">
          <div className="container-professional">
            <div className="text-center space-y-8">
              <Badge variant="outline" className="border-blue-600 bg-blue-50 text-blue-700">
                Industries We Serve
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance">
                <span className="text-gray-900">
                  Industry-specific AI solutions for{' '}
                </span>
                <span className="text-blue-700">every sector</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Deep industry expertise combined with cutting-edge AI technology
                to solve your most complex business challenges and drive measurable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InteractiveButton
                  variant="primary"
                  size="lg"
                  className="font-semibold pulse-glow"
                  ripple
                  glow
                >
                  Explore Your Industry
                </InteractiveButton>
                <InteractiveButton
                  variant="secondary"
                  size="lg"
                  className="font-semibold hover-lift"
                  ripple
                >
                  View All Case Studies
                </InteractiveButton>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Overview Stats */}
        <section className="section-professional bg-gray-50">
          <div className="container-professional">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '165+', label: 'Enterprise Clients', description: 'Across all industries' },
                { value: '6', label: 'Core Industries', description: 'Deep specialization' },
                { value: '$2.3B+', label: 'Value Generated', description: 'Measurable business impact' },
                { value: '97%', label: 'Success Rate', description: 'Project completion' },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-3xl font-bold text-blue-700">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-900">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="section-professional section-optimize">
          <div className="container-professional">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Industry Expertise & Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tailored AI solutions that address the unique challenges and
                opportunities in your specific industry.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
              {industries.map((industry, index) => (
                <InteractiveCard
                  key={industry.id}
                  className="p-0 overflow-hidden"
                  tilt
                  lift
                  onClick={() => setSelectedIndustry(
                    selectedIndustry === industry.id ? null : industry.id
                  )}
                >
                  <div className="space-y-0">
                    {/* Industry Image */}
                    <div
                      className={cn(
                        "relative h-48 border-b border-blue-100 industry-card-header",
                        industry.id === 'financial-services' && 'industry-gradient-financial',
                        industry.id === 'manufacturing' && 'industry-gradient-manufacturing',
                        industry.id === 'healthcare' && 'industry-gradient-healthcare',
                        industry.id === 'retail' && 'industry-gradient-retail',
                        industry.id === 'energy' && 'industry-gradient-energy',
                        industry.id === 'technology' && 'industry-gradient-technology'
                      )}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl drop-shadow-sm">{industry.icon}</div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className={cn(
                          "bg-white/90 shadow-sm",
                          industry.id === 'financial-services' && "border-blue-200 text-blue-700",
                          industry.id === 'manufacturing' && "border-cyan-200 text-cyan-700",
                          industry.id === 'healthcare' && "border-pink-200 text-pink-700",
                          industry.id === 'retail' && "border-purple-200 text-purple-700",
                          industry.id === 'energy' && "border-orange-200 text-orange-700",
                          industry.id === 'technology' && "border-green-200 text-green-700"
                        )}>
                          {industry.clientCount}
                        </Badge>
                      </div>
                      {/* Pattern overlay */}
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4) 1px, transparent 1px)`,
                          backgroundSize: '20px 20px',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {industry.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {industry.description}
                        </p>
                      </div>

                      {/* Key Results */}
                      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-700">
                            {industry.results.costReduction}
                          </div>
                          <div className="text-xs text-gray-500">Cost Reduction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-700">
                            {industry.results.efficiencyGain}
                          </div>
                          <div className="text-xs text-gray-500">Efficiency Gain</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-700">
                            {industry.results.accuracyImprovement}
                          </div>
                          <div className="text-xs text-gray-500">Accuracy</div>
                        </div>
                      </div>

                      {/* Expand indicator */}
                      <div className="flex justify-center pt-2">
                        <div className={cn(
                          "w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 transition-transform duration-200",
                          selectedIndustry === industry.id && "rotate-180"
                        )}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      {selectedIndustry === industry.id && (
                        <div className="pt-4 border-t border-gray-100 space-y-4 animate-fadeInUp">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Challenges</h4>
                            <ul className="space-y-1">
                              {industry.challenges.map((challenge, i) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm text-gray-600">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Our Solutions</h4>
                            <ul className="space-y-1">
                              {industry.solutions.map((solution, i) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm text-gray-600">{solution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <InteractiveButton
                            variant="primary"
                            size="sm"
                            className="w-full font-medium"
                            ripple
                          >
                            View {industry.title} Case Studies
                          </InteractiveButton>
                        </div>
                      )}
                    </div>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-professional bg-gradient-to-r from-blue-700 to-blue-800 text-white">
          <div className="container-professional">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Ready to transform your industry with AI?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Connect with our industry experts to discuss your specific
                challenges and explore tailored AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InteractiveButton
                  variant="secondary"
                  size="lg"
                  className="font-semibold bg-white text-blue-700 hover:bg-gray-50"
                  ripple
                >
                  Schedule Industry Consultation
                </InteractiveButton>
                <InteractiveButton
                  variant="outline"
                  size="lg"
                  className="font-semibold border-white text-white hover:bg-white/10"
                  ripple
                >
                  Download Industry Guide
                </InteractiveButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}