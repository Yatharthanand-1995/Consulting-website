import { Metadata } from 'next';
import {
  PageHero,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Case Studies | Stratex AI',
  description:
    'Explore detailed case studies showcasing our AI transformation success stories across Fortune 500 companies.',
  keywords: [
    'AI case studies',
    'enterprise AI success',
    'AI transformation results',
    'Fortune 500 AI',
  ],
};

const breadcrumbItems = [
  { label: 'Our Work', href: '/our-work' },
  { label: 'Case Studies', current: true },
];

const caseStudies = [
  {
    id: 'global-bank-ai-automation',
    title: 'Global Bank Achieves 340% ROI Through AI Automation',
    client: 'Top 5 US Financial Institution',
    industry: 'Financial Services',
    projectDuration: '8 months',
    teamSize: '12 consultants',
    challenge:
      'Manual loan processing bottlenecks and rising fraud losses impacting customer experience and profitability.',
    solution:
      'Implemented intelligent automation for loan processing and advanced fraud detection algorithms with real-time decisioning.',
    results: {
      roi: '340%',
      timeToValue: '4 months',
      accuracyImprovement: '99.2%',
      processingSpeedUp: '80%',
      fraudReduction: '60%',
      costSavings: '$18.5M annually',
    },
    metrics: [
      {
        label: 'ROI',
        value: '340%',
        improvement: '+340%',
        description: 'Return on investment within 18 months',
      },
      {
        label: 'Processing Speed',
        value: '80%',
        improvement: '+80%',
        description: 'Faster loan approval times',
      },
      {
        label: 'Fraud Reduction',
        value: '60%',
        improvement: '-60%',
        description: 'Decrease in fraud losses',
      },
      {
        label: 'Accuracy',
        value: '99.2%',
        improvement: '+15%',
        description: 'Decision accuracy rate',
      },
      {
        label: 'Cost Savings',
        value: '$18.5M',
        improvement: 'Annual',
        description: 'Operational cost reduction',
      },
      {
        label: 'Customer Satisfaction',
        value: '94%',
        improvement: '+22%',
        description: 'NPS improvement score',
      },
    ],
    technologies: [
      'NLP',
      'Machine Learning',
      'Anomaly Detection',
      'Process Automation',
      'Risk Analytics',
    ],
    testimonial: {
      quote:
        'Stratex AI transformed our loan processing from a multi-week manual process to real-time automated decisions. The fraud detection capabilities have exceeded our expectations.',
      author: 'Chief Digital Officer',
      company: 'Major US Bank',
    },
    timeline: [
      {
        phase: 'Discovery & Assessment',
        duration: '4 weeks',
        description:
          'Analyzed existing processes and identified automation opportunities',
      },
      {
        phase: 'Solution Design',
        duration: '6 weeks',
        description: 'Designed AI architecture and integration approach',
      },
      {
        phase: 'Development & Testing',
        duration: '16 weeks',
        description: 'Built and tested AI models with extensive validation',
      },
      {
        phase: 'Deployment & Training',
        duration: '4 weeks',
        description: 'Rolled out solution and trained staff',
      },
      {
        phase: 'Optimization',
        duration: '2 weeks',
        description: 'Fine-tuned performance and documented learnings',
      },
    ],
  },
  {
    id: 'manufacturing-predictive-maintenance',
    title: 'Fortune 100 Manufacturer Saves $50M with Predictive AI',
    client: 'Global Manufacturing Leader',
    industry: 'Manufacturing',
    projectDuration: '10 months',
    teamSize: '15 consultants',
    challenge:
      'Unplanned equipment downtime across 50+ facilities causing supply chain disruptions and quality issues.',
    solution:
      'Deployed IoT sensors and AI-powered predictive maintenance system with computer vision quality control.',
    results: {
      roi: '480%',
      timeToValue: '6 months',
      downtimeReduction: '75%',
      qualityImprovement: '35%',
      maintenanceCostSaving: '40%',
      costSavings: '$50M annually',
    },
    metrics: [
      {
        label: 'ROI',
        value: '480%',
        improvement: '+480%',
        description: 'Return on investment within 24 months',
      },
      {
        label: 'Downtime Reduction',
        value: '75%',
        improvement: '-75%',
        description: 'Unplanned equipment downtime',
      },
      {
        label: 'Quality Improvement',
        value: '35%',
        improvement: '+35%',
        description: 'Product quality scores',
      },
      {
        label: 'Maintenance Savings',
        value: '40%',
        improvement: '-40%',
        description: 'Maintenance cost reduction',
      },
      {
        label: 'Cost Savings',
        value: '$50M',
        improvement: 'Annual',
        description: 'Total operational savings',
      },
      {
        label: 'Efficiency Gain',
        value: '28%',
        improvement: '+28%',
        description: 'Overall equipment effectiveness',
      },
    ],
    technologies: [
      'IoT Analytics',
      'Predictive Modeling',
      'Computer Vision',
      'Edge Computing',
      'Digital Twins',
    ],
    testimonial: {
      quote:
        'The predictive maintenance system has revolutionized our operations. We now prevent failures before they happen and our quality has never been better.',
      author: 'VP of Operations',
      company: 'Fortune 100 Manufacturer',
    },
    timeline: [
      {
        phase: 'Infrastructure Assessment',
        duration: '5 weeks',
        description: 'Evaluated existing systems and IoT readiness',
      },
      {
        phase: 'Sensor Deployment',
        duration: '8 weeks',
        description: 'Installed IoT sensors across facilities',
      },
      {
        phase: 'AI Model Development',
        duration: '20 weeks',
        description: 'Built predictive models and computer vision systems',
      },
      {
        phase: 'Integration & Testing',
        duration: '6 weeks',
        description: 'Integrated with existing systems and tested',
      },
      {
        phase: 'Rollout & Training',
        duration: '3 weeks',
        description: 'Deployed across all facilities with training',
      },
    ],
  },
  {
    id: 'healthcare-ai-diagnostics',
    title: 'Healthcare System Improves Diagnostic Accuracy by 45%',
    client: 'Leading Healthcare Network',
    industry: 'Healthcare',
    projectDuration: '12 months',
    teamSize: '18 consultants',
    challenge:
      'Inconsistent diagnostic accuracy across multiple hospitals and lengthy image analysis causing treatment delays.',
    solution:
      'Implemented AI-powered medical imaging analysis and clinical decision support system with federated learning.',
    results: {
      roi: '280%',
      timeToValue: '8 months',
      diagnosticAccuracy: '45%',
      diagnosisSpeed: '70%',
      patientSatisfaction: '32%',
      costSavings: '$25M annually',
    },
    metrics: [
      {
        label: 'ROI',
        value: '280%',
        improvement: '+280%',
        description: 'Return on investment within 24 months',
      },
      {
        label: 'Diagnostic Accuracy',
        value: '45%',
        improvement: '+45%',
        description: 'Improvement in diagnostic precision',
      },
      {
        label: 'Diagnosis Speed',
        value: '70%',
        improvement: '+70%',
        description: 'Faster image analysis time',
      },
      {
        label: 'Patient Satisfaction',
        value: '32%',
        improvement: '+32%',
        description: 'Patient experience scores',
      },
      {
        label: 'Cost Savings',
        value: '$25M',
        improvement: 'Annual',
        description: 'Healthcare delivery cost reduction',
      },
      {
        label: 'Treatment Efficiency',
        value: '38%',
        improvement: '+38%',
        description: 'Earlier treatment initiation',
      },
    ],
    technologies: [
      'Deep Learning',
      'Computer Vision',
      'Federated Learning',
      'Clinical NLP',
      'DICOM Processing',
    ],
    testimonial: {
      quote:
        "The AI diagnostic system has enhanced our radiologists' capabilities significantly. We're catching conditions earlier and treating patients more effectively.",
      author: 'Chief Medical Officer',
      company: 'Regional Healthcare Network',
    },
    timeline: [
      {
        phase: 'HIPAA Compliance Setup',
        duration: '6 weeks',
        description: 'Ensured full healthcare data compliance',
      },
      {
        phase: 'Data Integration',
        duration: '8 weeks',
        description: 'Integrated medical imaging and EHR systems',
      },
      {
        phase: 'AI Model Training',
        duration: '24 weeks',
        description: 'Trained models on medical imaging data',
      },
      {
        phase: 'Clinical Validation',
        duration: '8 weeks',
        description: 'Validated with clinical experts and trials',
      },
      {
        phase: 'Deployment & Adoption',
        duration: '6 weeks',
        description: 'Rolled out with physician training',
      },
    ],
  },
];

const overallMetrics = [
  {
    label: 'Total Value Generated',
    value: '$2.3B+',
    description: 'Cumulative value across all implementations',
  },
  {
    label: 'Average ROI',
    value: '340%',
    description: 'Median return on investment within 18 months',
  },
  {
    label: 'Success Rate',
    value: '97%',
    description: 'Projects meeting or exceeding success criteria',
  },
  {
    label: 'Time to Value',
    value: '6 months',
    description: 'Average time from start to measurable results',
  },
  {
    label: 'Client Satisfaction',
    value: '96%',
    description: 'Net Promoter Score from completed projects',
  },
  {
    label: 'Fortune 500 Clients',
    value: '150+',
    description: 'Enterprise clients successfully served',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <PageHero
          title="Enterprise AI Success Stories"
          description="Detailed case studies showcasing measurable business impact from our AI transformations"
        />

        <section className="section-professional">
          <div className="container-professional">
            {/* Overall Impact Metrics */}
            <div className="mb-16">
              <div className="mb-12 text-center">
                <Badge
                  variant="outline"
                  className="mb-4 border-blue-200 bg-blue-50 text-blue-700"
                >
                  Proven Impact
                </Badge>
                <h2 className="mb-4 text-3xl font-semibold text-gray-900">
                  Results That Matter to Your Board
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600">
                  Independently verified outcomes from Fortune 500 AI
                  implementations. All metrics based on post-deployment audits
                  conducted 12-18 months after project completion.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
                {overallMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                  >
                    <div className="mb-2 text-2xl font-bold text-blue-600">
                      {metric.value}
                    </div>
                    <div className="mb-1 text-sm font-medium text-gray-900">
                      {metric.label}
                    </div>
                    <div className="text-xs text-gray-600">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="mx-auto max-w-6xl">
                  <Card className="overflow-hidden">
                    <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50">
                      <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                        <div>
                          <div className="mb-2 flex items-center space-x-3">
                            <Badge
                              variant="outline"
                              className="border-blue-200 bg-blue-50 text-blue-700"
                            >
                              {study.industry}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              Case Study #{index + 1}
                            </span>
                          </div>
                          <CardTitle className="mb-2 text-2xl text-gray-900">
                            {study.title}
                          </CardTitle>
                          <p className="text-gray-600">{study.client}</p>
                        </div>
                        <div className="mt-4 text-right lg:mt-0">
                          <div className="space-y-1 text-sm text-gray-500">
                            <div>Duration: {study.projectDuration}</div>
                            <div>Team: {study.teamSize}</div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-8">
                      <Tabs defaultValue="overview" variant="underline">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="overview">Overview</TabsTrigger>
                          <TabsTrigger value="metrics">Metrics</TabsTrigger>
                          <TabsTrigger value="timeline">Timeline</TabsTrigger>
                          <TabsTrigger value="technology">
                            Technology
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="space-y-6">
                          <div className="grid gap-8 lg:grid-cols-2">
                            <div>
                              <h4 className="mb-3 font-semibold text-gray-900">
                                Challenge
                              </h4>
                              <p className="mb-6 text-gray-600">
                                {study.challenge}
                              </p>

                              <h4 className="mb-3 font-semibold text-gray-900">
                                Solution
                              </h4>
                              <p className="text-gray-600">{study.solution}</p>
                            </div>

                            <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                              <h4 className="mb-4 font-semibold text-green-900">
                                Key Results
                              </h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-green-700">
                                    {study.results.roi}
                                  </div>
                                  <div className="text-sm text-green-600">
                                    ROI
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-green-700">
                                    {study.results.timeToValue}
                                  </div>
                                  <div className="text-sm text-green-600">
                                    Time to Value
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-green-700">
                                    {study.results.costSavings}
                                  </div>
                                  <div className="text-sm text-green-600">
                                    Annual Savings
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-green-700">
                                    {Object.values(study.results)[2]}
                                  </div>
                                  <div className="text-sm text-green-600">
                                    Primary KPI
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Testimonial */}
                          <div className="rounded-r-lg border-l-4 border-blue-600 bg-blue-50 p-6">
                            <blockquote className="mb-4 text-lg text-blue-900 italic">
                              &quot;{study.testimonial.quote}&quot;
                            </blockquote>
                            <div className="font-medium text-blue-700">
                              — {study.testimonial.author},{' '}
                              {study.testimonial.company}
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="metrics">
                          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {study.metrics.map((metric, metricIndex) => (
                              <div
                                key={metricIndex}
                                className="rounded-lg border border-gray-200 p-6 text-center"
                              >
                                <div className="mb-2 text-3xl font-bold text-blue-600">
                                  {metric.value}
                                </div>
                                <div className="mb-1 text-sm font-medium text-gray-900">
                                  {metric.label}
                                </div>
                                <div
                                  className={`mb-2 text-sm font-medium ${
                                    metric.improvement.startsWith('+')
                                      ? 'text-green-600'
                                      : metric.improvement.startsWith('-')
                                        ? 'text-red-600'
                                        : 'text-blue-600'
                                  }`}
                                >
                                  {metric.improvement}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {metric.description}
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="timeline">
                          <div className="space-y-6">
                            {study.timeline.map((phase, phaseIndex) => (
                              <div
                                key={phaseIndex}
                                className="flex items-start space-x-4"
                              >
                                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                                  {phaseIndex + 1}
                                </div>
                                <div className="flex-1">
                                  <div className="mb-2 flex items-center justify-between">
                                    <h4 className="font-semibold text-gray-900">
                                      {phase.phase}
                                    </h4>
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {phase.duration}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    {phase.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="technology">
                          <div className="space-y-6">
                            <div>
                              <h4 className="mb-4 font-semibold text-gray-900">
                                Technologies Implemented
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {study.technologies.map((tech, techIndex) => (
                                  <Badge
                                    key={techIndex}
                                    variant="outline"
                                    className="border-blue-200 bg-blue-50 text-blue-700"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="rounded-lg bg-gray-50 p-6">
                              <h4 className="mb-3 font-semibold text-gray-900">
                                Implementation Approach
                              </h4>
                              <div className="grid gap-6 text-sm md:grid-cols-3">
                                <div>
                                  <h5 className="mb-2 font-medium text-gray-900">
                                    Discovery
                                  </h5>
                                  <p className="text-gray-600">
                                    Comprehensive analysis of existing systems
                                    and processes
                                  </p>
                                </div>
                                <div>
                                  <h5 className="mb-2 font-medium text-gray-900">
                                    Development
                                  </h5>
                                  <p className="text-gray-600">
                                    Agile development with continuous
                                    stakeholder feedback
                                  </p>
                                </div>
                                <div>
                                  <h5 className="mb-2 font-medium text-gray-900">
                                    Deployment
                                  </h5>
                                  <p className="text-gray-600">
                                    Phased rollout with comprehensive training
                                    and support
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Ready to Achieve Similar Results?
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                Discover how we can help your organization unlock measurable
                value through strategic AI implementation. Schedule a
                consultation to discuss your specific challenges and
                opportunities.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
                >
                  Schedule Consultation
                </a>
                <a
                  href="/our-insights"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  Download Case Study PDF
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
