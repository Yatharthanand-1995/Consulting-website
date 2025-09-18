'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  AILoader,
} from '@/components/ui';

export interface InteractiveDemoProps {
  className?: string;
}

interface DemoScenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  inputPlaceholder: string;
  processingText: string;
  sampleInputs: string[];
  mockResults: {
    accuracy: string;
    processingTime: string;
    confidenceScore: string;
    insights: string[];
  };
}

const demoScenarios: DemoScenario[] = [
  {
    id: 'document-analysis',
    title: 'Document Analysis AI',
    description: 'Extract key insights and summarize business documents',
    icon: '📄',
    inputPlaceholder: 'Enter or upload a document excerpt...',
    processingText: 'Analyzing document structure and content...',
    sampleInputs: [
      'This quarterly report shows revenue growth of 15% with strong performance in the technology sector.',
      'The contract terms specify a 24-month engagement with optional renewal clauses and performance milestones.',
      'Our market research indicates significant opportunity in the emerging AI consulting space.',
    ],
    mockResults: {
      accuracy: '94.7%',
      processingTime: '1.2s',
      confidenceScore: '96.3%',
      insights: [
        'Document type: Business Report',
        'Key metric: 15% revenue growth',
        'Sector focus: Technology',
        'Sentiment: Positive',
        'Action items: 2 identified',
      ],
    },
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics Engine',
    description: 'Forecast trends and predict business outcomes',
    icon: '📊',
    inputPlaceholder: 'Enter your business data or metrics...',
    processingText: 'Running predictive models and trend analysis...',
    sampleInputs: [
      'Sales data: Jan: $100k, Feb: $120k, Mar: $135k, Apr: $145k',
      'Customer churn rate has been 5%, 7%, 6%, 8% over the last 4 months',
      'Website traffic: 10k, 12k, 15k, 18k visitors monthly',
    ],
    mockResults: {
      accuracy: '91.2%',
      processingTime: '2.8s',
      confidenceScore: '88.7%',
      insights: [
        'Trend: Consistent upward growth pattern',
        'Forecast: 12% growth expected next month',
        'Risk factor: Seasonal variations detected',
        'Recommendation: Increase inventory by 15%',
        'Confidence interval: ±3.2%',
      ],
    },
  },
  {
    id: 'sentiment-analysis',
    title: 'Customer Sentiment AI',
    description: 'Analyze customer feedback and sentiment in real-time',
    icon: '💬',
    inputPlaceholder: 'Enter customer feedback or reviews...',
    processingText: 'Analyzing sentiment and emotional indicators...',
    sampleInputs: [
      'The customer service team was incredibly helpful and resolved my issue quickly.',
      'The product quality has declined recently and shipping was delayed.',
      'Amazing experience! The AI features are exactly what our business needed.',
    ],
    mockResults: {
      accuracy: '97.1%',
      processingTime: '0.8s',
      confidenceScore: '94.5%',
      insights: [
        'Overall sentiment: Positive (0.85)',
        'Key emotions: Satisfaction, Trust',
        'Topics mentioned: Service, Product Quality',
        'Urgency level: Low',
        'Recommended action: Follow-up appreciated',
      ],
    },
  },
];

export function InteractiveDemo({ className }: InteractiveDemoProps) {
  const [selectedDemo, setSelectedDemo] = useState<string>(demoScenarios[0].id);
  const [userInput, setUserInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [animatedMetrics, setAnimatedMetrics] = useState<{
    accuracy?: string;
    processingTime?: string;
    confidenceScore?: string;
    insights?: string[];
  }>({});

  const currentDemo =
    demoScenarios.find(demo => demo.id === selectedDemo) || demoScenarios[0];

  // Animate metrics when results are shown
  useEffect(() => {
    if (showResults) {
      const timer = setTimeout(() => {
        setAnimatedMetrics(currentDemo.mockResults);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [showResults, currentDemo]);

  const handleRunDemo = () => {
    if (!userInput.trim()) return;

    setIsProcessing(true);
    setShowResults(false);
    setAnimatedMetrics({});

    // Simulate AI processing time
    setTimeout(() => {
      setIsProcessing(false);
      setShowResults(true);
    }, 3000);
  };

  const handleUseSample = (sample: string) => {
    setUserInput(sample);
    setShowResults(false);
  };

  const handleReset = () => {
    setUserInput('');
    setIsProcessing(false);
    setShowResults(false);
    setAnimatedMetrics({});
  };

  return (
    <section className={cn('bg-muted/10 py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <Badge variant="gradient" className="mb-4">
              🔬 Interactive AI Demo
            </Badge>
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              <span className="from-secondary to-accent bg-gradient-to-r bg-clip-text text-transparent">
                Experience AI in Action
              </span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Test our AI capabilities with real-time demonstrations. See how
              our solutions can transform your business processes.
            </p>
          </div>

          {/* Demo Selection */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {demoScenarios.map(demo => (
              <Button
                key={demo.id}
                variant={selectedDemo === demo.id ? 'gradient' : 'outline'}
                size="lg"
                onClick={() => {
                  setSelectedDemo(demo.id);
                  handleReset();
                }}
                className="group"
              >
                <span className="mr-2 text-lg">{demo.icon}</span>
                {demo.title}
              </Button>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Input Section */}
            <Card variant="elevated" padding="lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="mr-3 text-2xl">{currentDemo.icon}</span>
                  {currentDemo.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {currentDemo.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Text Input */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Input Data
                    </label>
                    <textarea
                      value={userInput}
                      onChange={e => setUserInput(e.target.value)}
                      placeholder={currentDemo.inputPlaceholder}
                      className="border-border bg-background focus:ring-secondary h-32 w-full resize-none rounded-lg border p-3 focus:ring-2 focus:outline-none"
                      disabled={isProcessing}
                    />
                  </div>

                  {/* Sample Inputs */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Try Sample Data:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {currentDemo.sampleInputs.map((sample, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          size="sm"
                          onClick={() => handleUseSample(sample)}
                          className="h-auto p-2 text-left text-xs whitespace-normal"
                          disabled={isProcessing}
                        >
                          Sample {index + 1}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button
                      variant="gradient"
                      size="lg"
                      onClick={handleRunDemo}
                      disabled={!userInput.trim() || isProcessing}
                      className="flex-1"
                    >
                      {isProcessing ? 'Processing...' : 'Run AI Analysis'}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleReset}
                      disabled={isProcessing}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card variant={showResults ? 'neural' : 'default'} padding="lg">
              <CardHeader>
                <CardTitle className="text-xl">AI Analysis Results</CardTitle>
                <p className="text-muted-foreground">
                  {isProcessing
                    ? 'Processing your request...'
                    : 'Real-time analysis and insights'}
                </p>
              </CardHeader>

              <CardContent>
                {isProcessing ? (
                  <div className="py-12 text-center">
                    <AILoader text={currentDemo.processingText} />
                  </div>
                ) : showResults ? (
                  <div className="animate-in slide-in-from-bottom space-y-6 duration-500">
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-lg p-3 text-center">
                        <div className="text-success text-lg font-bold">
                          {animatedMetrics.accuracy || '0%'}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Accuracy
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3 text-center">
                        <div className="text-secondary text-lg font-bold">
                          {animatedMetrics.processingTime || '0s'}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Processing Time
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3 text-center">
                        <div className="text-accent text-lg font-bold">
                          {animatedMetrics.confidenceScore || '0%'}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Confidence
                        </div>
                      </div>
                    </div>

                    {/* AI Insights */}
                    <div>
                      <h4 className="text-secondary mb-3 font-semibold">
                        AI-Generated Insights
                      </h4>
                      <div className="space-y-2">
                        {(animatedMetrics.insights || []).map(
                          (insight: string, index: number) => (
                            <div
                              key={index}
                              className="bg-muted/30 flex items-start space-x-2 rounded-lg p-2 text-sm"
                              style={{ animationDelay: `${index * 0.1}s` }}
                            >
                              <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                              <span>{insight}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="border-border border-t pt-4">
                      <div className="text-center">
                        <p className="text-muted-foreground mb-3 text-sm">
                          Impressed with the results? Let&apos;s discuss your
                          custom solution.
                        </p>
                        <Button variant="gradient" size="sm">
                          Schedule Consultation
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-muted-foreground py-12 text-center">
                    <div className="mb-4 text-4xl">🤖</div>
                    <p>
                      Enter your data above and click &ldquo;Run AI
                      Analysis&rdquo; to see results
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Demo Features */}
          <div className="mt-16 text-center">
            <h3 className="mb-8 text-2xl font-bold">Why Our AI Demos Matter</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <div className="text-3xl">⚡</div>
                <h4 className="text-lg font-semibold">Real-Time Processing</h4>
                <p className="text-muted-foreground text-sm">
                  Experience the speed and efficiency of our production-ready AI
                  systems
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl">🎯</div>
                <h4 className="text-lg font-semibold">
                  Industry-Specific Models
                </h4>
                <p className="text-muted-foreground text-sm">
                  Tailored AI solutions trained on relevant data for your
                  business domain
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl">📊</div>
                <h4 className="text-lg font-semibold">Transparent Results</h4>
                <p className="text-muted-foreground text-sm">
                  Clear metrics and explainable AI outputs you can trust and
                  understand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveDemo;
