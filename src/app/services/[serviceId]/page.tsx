'use client';

import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  TechnologyBadge,
  MetricBadge,
  IndustryBadge
} from '@/components/ui';
import { cn } from '@/lib/utils';

interface ServicePageProps {
  params: {
    serviceId: string;
  };
}

// Service data (this would typically come from a CMS or API)
const servicesData = {
  'ai-strategy': {
    id: 'ai-strategy',
    title: 'AI Strategy & Roadmapping',
    subtitle: 'Strategic planning and roadmap development for enterprise AI transformation',
    description: 'Transform your business with a comprehensive AI strategy that aligns with your corporate objectives. Our expert strategists work closely with your leadership team to identify high-impact AI opportunities, assess technical feasibility, and create actionable roadmaps for successful implementation.',
    hero: {
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🎯',
      stats: {
        roi: '340%',
        timeToValue: '3-6 months',
        successRate: '98%',
        clientsSserved: '200+'
      }
    },
    overview: {
      challenge: 'Organizations struggle to identify where AI can create the most value, often leading to scattered initiatives with poor ROI and limited business impact.',
      approach: 'We conduct comprehensive assessments of your business processes, technology infrastructure, and market position to develop a tailored AI strategy that maximizes impact and minimizes risk.',
      outcome: 'A clear, actionable roadmap with prioritized AI initiatives, expected ROI projections, and implementation timelines that align with your business goals.'
    },
    capabilities: [
      {
        name: 'AI Maturity Assessment',
        description: 'Comprehensive evaluation of your organization\'s current AI readiness across people, processes, and technology',
        icon: '📊'
      },
      {
        name: 'Use Case Identification',
        description: 'Systematic discovery and prioritization of AI opportunities across your business functions',
        icon: '🔍'
      },
      {
        name: 'ROI Analysis & Business Case',
        description: 'Detailed financial modeling and business case development for each AI initiative',
        icon: '💰'
      },
      {
        name: 'Technology Stack Design',
        description: 'Architecture recommendations and technology selection for scalable AI implementation',
        icon: '🏗️'
      },
      {
        name: 'Implementation Roadmap',
        description: 'Phased approach with clear milestones, resource requirements, and success metrics',
        icon: '🗺️'
      },
      {
        name: 'Risk Assessment & Governance',
        description: 'Comprehensive risk analysis and governance framework for responsible AI deployment',
        icon: '🛡️'
      }
    ],
    process: [
      {
        phase: 'Discovery & Assessment',
        duration: '2-3 weeks',
        activities: ['Current state analysis', 'Stakeholder interviews', 'Technology audit', 'Data assessment'],
        deliverables: ['Maturity assessment report', 'Gap analysis', 'Opportunity inventory']
      },
      {
        phase: 'Strategy Development',
        duration: '3-4 weeks',
        activities: ['Use case prioritization', 'ROI modeling', 'Technology selection', 'Roadmap creation'],
        deliverables: ['AI strategy document', 'Business cases', 'Technology architecture', 'Implementation roadmap']
      },
      {
        phase: 'Implementation Planning',
        duration: '1-2 weeks',
        activities: ['Resource planning', 'Risk assessment', 'Governance framework', 'Success metrics'],
        deliverables: ['Implementation plan', 'Governance framework', 'Success metrics dashboard']
      }
    ],
    technologies: [
      { name: 'Strategic Planning', category: 'methodology' },
      { name: 'Business Analysis', category: 'methodology' },
      { name: 'AI Assessment', category: 'methodology' },
      { name: 'Data Architecture', category: 'technical' },
      { name: 'Cloud Platforms', category: 'infrastructure' },
      { name: 'MLOps', category: 'technical' }
    ],
    caseStudies: [
      {
        title: 'Fortune 500 Financial Services',
        challenge: '$50M annual fraud losses with manual detection processes',
        solution: 'AI-powered fraud detection strategy with phased implementation',
        results: ['85% fraud detection improvement', '$45M annual savings', '6-month ROI'],
        industry: 'Financial Services'
      },
      {
        title: 'Global Manufacturing Leader',
        challenge: 'Unplanned downtime costing $2M per hour',
        solution: 'Predictive maintenance strategy across 50+ facilities',
        results: ['70% downtime reduction', '$100M cost savings', '4-month payback'],
        industry: 'Manufacturing'
      }
    ],
    pricing: {
      starting: '$25,000',
      typical: '$50,000 - $150,000',
      enterprise: 'Custom pricing for Fortune 500'
    },
    faqs: [
      {
        question: 'How long does an AI strategy project typically take?',
        answer: 'Most AI strategy engagements are completed within 6-10 weeks, depending on the scope and complexity of your organization.'
      },
      {
        question: 'What deliverables can we expect?',
        answer: 'You\'ll receive a comprehensive AI strategy document, prioritized roadmap, business cases for each initiative, technology recommendations, and implementation guidelines.'
      },
      {
        question: 'Do you provide ongoing support after strategy delivery?',
        answer: 'Yes, we offer various ongoing support options including quarterly strategy reviews, implementation assistance, and advisory services.'
      }
    ]
  },
  'llm-implementation': {
    id: 'llm-implementation',
    title: 'Large Language Model Implementation',
    subtitle: 'Custom LLM solutions and enterprise ChatGPT integrations',
    description: 'Deploy powerful language models that transform how your organization processes information, communicates, and automates knowledge work. From fine-tuning existing models to building custom LLM solutions, we deliver production-ready implementations that scale.',
    hero: {
      gradient: 'from-purple-500 to-pink-500',
      icon: '🤖',
      stats: {
        roi: '250%',
        timeToValue: '6-12 weeks',
        successRate: '95%',
        clientsSaved: '40M hours'
      }
    },
    overview: {
      challenge: 'Organizations need to harness the power of large language models for document processing, customer service, content generation, and knowledge management, but lack the expertise to implement and scale these solutions effectively.',
      approach: 'We design and implement custom LLM solutions tailored to your specific use cases, integrating seamlessly with your existing systems while ensuring security, compliance, and optimal performance.',
      outcome: 'Production-ready LLM applications that automate knowledge work, enhance customer experiences, and unlock new capabilities across your organization.'
    },
    capabilities: [
      {
        name: 'Custom Model Fine-tuning',
        description: 'Fine-tune leading LLMs on your proprietary data to create specialized models for your domain',
        icon: '⚙️'
      },
      {
        name: 'Enterprise ChatGPT Integration',
        description: 'Secure, compliant integration of ChatGPT and GPT-4 APIs into your business workflows',
        icon: '🔗'
      },
      {
        name: 'RAG Systems Development',
        description: 'Retrieval-Augmented Generation systems that combine LLMs with your knowledge base',
        icon: '📚'
      },
      {
        name: 'Multi-language Support',
        description: 'Deploy LLMs that work across multiple languages and cultural contexts',
        icon: '🌍'
      },
      {
        name: 'API Development & Integration',
        description: 'Custom APIs and microservices for seamless LLM integration across your tech stack',
        icon: '🔌'
      },
      {
        name: 'Performance Optimization',
        description: 'Model optimization for speed, cost-efficiency, and scalability in production environments',
        icon: '🚀'
      }
    ],
    process: [
      {
        phase: 'Requirements & Planning',
        duration: '1-2 weeks',
        activities: ['Use case definition', 'Data assessment', 'Architecture design', 'Model selection'],
        deliverables: ['Technical specification', 'Architecture document', 'Data preparation plan']
      },
      {
        phase: 'Development & Training',
        duration: '4-8 weeks',
        activities: ['Data preparation', 'Model fine-tuning', 'API development', 'Integration testing'],
        deliverables: ['Custom LLM model', 'API endpoints', 'Integration components', 'Testing results']
      },
      {
        phase: 'Deployment & Optimization',
        duration: '2-3 weeks',
        activities: ['Production deployment', 'Performance tuning', 'Security hardening', 'Monitoring setup'],
        deliverables: ['Production system', 'Monitoring dashboard', 'Performance reports', 'User training']
      }
    ],
    technologies: [
      { name: 'GPT-4', category: 'ai' },
      { name: 'Claude', category: 'ai' },
      { name: 'Llama 2', category: 'ai' },
      { name: 'LangChain', category: 'framework' },
      { name: 'OpenAI API', category: 'api' },
      { name: 'Hugging Face', category: 'platform' },
      { name: 'Vector Databases', category: 'database' },
      { name: 'FastAPI', category: 'backend' }
    ],
    caseStudies: [
      {
        title: 'Legal Firm Document Analysis',
        challenge: 'Lawyers spending 60% of time on document review and analysis',
        solution: 'Custom legal LLM for contract analysis and due diligence automation',
        results: ['75% time reduction', '$2M annual savings', '99.2% accuracy rate'],
        industry: 'Legal Services'
      },
      {
        title: 'Healthcare Documentation',
        challenge: 'Physicians spending hours on clinical documentation',
        solution: 'Medical LLM for automated clinical note generation and coding',
        results: ['50% documentation time saved', '95% physician satisfaction', 'HIPAA compliant'],
        industry: 'Healthcare'
      }
    ],
    pricing: {
      starting: '$35,000',
      typical: '$75,000 - $200,000',
      enterprise: 'Custom pricing for large-scale deployments'
    },
    faqs: [
      {
        question: 'How do you ensure data privacy and security?',
        answer: 'We implement enterprise-grade security including data encryption, access controls, and can deploy models on-premises or in your private cloud to maintain data sovereignty.'
      },
      {
        question: 'Can you work with our existing data and systems?',
        answer: 'Yes, we specialize in integrating LLMs with existing enterprise systems including CRMs, ERPs, knowledge bases, and custom applications.'
      },
      {
        question: 'What ongoing maintenance is required?',
        answer: 'We provide model monitoring, performance optimization, and regular updates to ensure your LLM solutions continue to perform optimally as your business evolves.'
      }
    ]
  }
  // Additional services would be added here...
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData[params.serviceId as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-10',
          service.hero.gradient
        )} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gradient" className="mb-4">
              {service.hero.icon} Premium Service
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                {service.title}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {service.subtitle}
            </p>

            {/* Key Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {Object.entries(service.hero.stats).map(([key, value]) => (
                <div key={key} className="bg-card/50 rounded-lg p-4 border border-border/50">
                  <div className="text-2xl font-bold text-secondary mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="xl">
                Get Started Today
              </Button>
              <Button variant="outline" size="xl">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Our {service.title}?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {service.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card variant="elevated" padding="lg">
                <CardHeader>
                  <CardTitle className="text-xl text-red-500">The Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.overview.challenge}</p>
                </CardContent>
              </Card>

              <Card variant="elevated" padding="lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-500">Our Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.overview.approach}</p>
                </CardContent>
              </Card>

              <Card variant="elevated" padding="lg">
                <CardHeader>
                  <CardTitle className="text-xl text-green-500">The Outcome</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.overview.outcome}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Core Capabilities</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.capabilities.map((capability, index) => (
                <Card key={index} variant="neural" hover="lift" padding="lg">
                  <CardHeader>
                    <div className="text-3xl mb-4">{capability.icon}</div>
                    <CardTitle className="text-lg">{capability.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Process</h2>
              <p className="text-xl text-muted-foreground">
                A proven methodology for successful implementation
              </p>
            </div>

            <div className="space-y-8">
              {service.process.map((phase, index) => (
                <Card key={index} variant="outlined" padding="lg">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{phase.phase}</h3>
                          <p className="text-sm text-muted-foreground">{phase.duration}</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <h4 className="font-semibold mb-2 text-secondary">Key Activities</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex}>• {activity}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-2">
                      <h4 className="font-semibold mb-2 text-accent">Deliverables</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <Badge key={delIndex} variant="outline" size="sm">
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Technology Stack</h2>
            <p className="text-xl text-muted-foreground mb-12">
              We leverage cutting-edge tools and platforms for optimal results
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {service.technologies.map((tech, index) => (
                <TechnologyBadge
                  key={index}
                  technology={tech.name}
                  category={tech.category as any}
                  className="text-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Success Stories</h2>
              <p className="text-xl text-muted-foreground">
                See how we've delivered results for clients like you
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {service.caseStudies.map((caseStudy, index) => (
                <Card key={index} variant="elevated" hover="lift" padding="lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <IndustryBadge industry={caseStudy.industry} />
                    </div>
                    <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      <strong>Challenge:</strong> {caseStudy.challenge}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <strong className="text-secondary">Solution:</strong>
                        <p className="text-sm text-muted-foreground mt-1">{caseStudy.solution}</p>
                      </div>

                      <div>
                        <strong className="text-success">Key Results:</strong>
                        <div className="grid grid-cols-1 gap-2 mt-2">
                          {caseStudy.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center text-sm">
                              <svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Investment & Pricing</h2>
              <p className="text-xl text-muted-foreground">
                Flexible options to match your budget and requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card variant="outlined" padding="lg">
                <CardHeader>
                  <CardTitle className="text-lg">Starter</CardTitle>
                  <div className="text-3xl font-bold text-secondary">{service.pricing.starting}</div>
                  <CardDescription>Perfect for small to medium projects</CardDescription>
                </CardHeader>
              </Card>

              <Card variant="neural" padding="lg">
                <CardHeader>
                  <Badge variant="gradient" className="mb-4">Most Popular</Badge>
                  <CardTitle className="text-lg">Professional</CardTitle>
                  <div className="text-3xl font-bold text-secondary">{service.pricing.typical}</div>
                  <CardDescription>Comprehensive solutions for growing businesses</CardDescription>
                </CardHeader>
              </Card>

              <Card variant="outlined" padding="lg">
                <CardHeader>
                  <CardTitle className="text-lg">Enterprise</CardTitle>
                  <div className="text-3xl font-bold text-secondary">Custom</div>
                  <CardDescription>{service.pricing.enterprise}</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="gradient" size="lg">
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Get answers to common questions about our {service.title} service
              </p>
            </div>

            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <Card key={index} variant="default" padding="lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-12 border border-secondary/20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your business with our expert {service.title} services.
              Let's discuss your specific requirements and create a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="xl">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="xl">
                Download Service Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer className="mt-0" />
    </div>
  );
}