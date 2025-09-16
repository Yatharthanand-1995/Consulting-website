'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button, Badge, Card, CardHeader, CardTitle, CardContent, AILoader } from '@/components/ui';

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
      'Our market research indicates significant opportunity in the emerging AI consulting space.'
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
        'Action items: 2 identified'
      ]
    }
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
      'Website traffic: 10k, 12k, 15k, 18k visitors monthly'
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
        'Confidence interval: ±3.2%'
      ]
    }
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
      'Amazing experience! The AI features are exactly what our business needed.'
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
        'Recommended action: Follow-up appreciated'
      ]
    }
  }
];

export function InteractiveDemo({ className }: InteractiveDemoProps) {
  const [selectedDemo, setSelectedDemo] = useState<string>(demoScenarios[0].id);
  const [userInput, setUserInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [animatedMetrics, setAnimatedMetrics] = useState<any>({});

  const currentDemo = demoScenarios.find(demo => demo.id === selectedDemo) || demoScenarios[0];

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
    <section className={cn('py-20 bg-muted/10', className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="gradient" className="mb-4">
              🔬 Interactive AI Demo
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Experience AI in Action
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Test our AI capabilities with real-time demonstrations.
              See how our solutions can transform your business processes.
            </p>
          </div>

          {/* Demo Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {demoScenarios.map((demo) => (
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
                <span className="text-lg mr-2">{demo.icon}</span>
                {demo.title}
              </Button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card variant="elevated" padding="lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="text-2xl mr-3">{currentDemo.icon}</span>
                  {currentDemo.title}
                </CardTitle>
                <p className="text-muted-foreground">{currentDemo.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Text Input */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Input Data</label>
                    <textarea
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder={currentDemo.inputPlaceholder}
                      className="w-full h-32 p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-secondary"
                      disabled={isProcessing}
                    />
                  </div>

                  {/* Sample Inputs */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Try Sample Data:</label>
                    <div className="flex flex-wrap gap-2">
                      {currentDemo.sampleInputs.map((sample, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          size="sm"
                          onClick={() => handleUseSample(sample)}
                          className="text-xs text-left h-auto p-2 whitespace-normal"
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
                  {isProcessing ? 'Processing your request...' : 'Real-time analysis and insights'}
                </p>
              </CardHeader>

              <CardContent>
                {isProcessing ? (
                  <div className="text-center py-12">
                    <AILoader text={currentDemo.processingText} />
                  </div>
                ) : showResults ? (
                  <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-lg font-bold text-success">
                          {animatedMetrics.accuracy || '0%'}
                        </div>
                        <div className="text-xs text-muted-foreground">Accuracy</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-lg font-bold text-secondary">
                          {animatedMetrics.processingTime || '0s'}
                        </div>
                        <div className="text-xs text-muted-foreground">Processing Time</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-lg font-bold text-accent">
                          {animatedMetrics.confidenceScore || '0%'}
                        </div>
                        <div className="text-xs text-muted-foreground">Confidence</div>
                      </div>
                    </div>

                    {/* AI Insights */}
                    <div>
                      <h4 className="font-semibold mb-3 text-secondary">AI-Generated Insights</h4>
                      <div className="space-y-2">
                        {(animatedMetrics.insights || []).map((insight: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-start space-x-2 p-2 bg-muted/30 rounded-lg text-sm"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                            <span>{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="border-t border-border pt-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-3">
                          Impressed with the results? Let's discuss your custom solution.
                        </p>
                        <Button variant="gradient" size="sm">
                          Schedule Consultation
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <div className="text-4xl mb-4">🤖</div>
                    <p>Enter your data above and click "Run AI Analysis" to see results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Demo Features */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Why Our AI Demos Matter</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-3xl">⚡</div>
                <h4 className="text-lg font-semibold">Real-Time Processing</h4>
                <p className="text-sm text-muted-foreground">
                  Experience the speed and efficiency of our production-ready AI systems
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl">🎯</div>
                <h4 className="text-lg font-semibold">Industry-Specific Models</h4>
                <p className="text-sm text-muted-foreground">
                  Tailored AI solutions trained on relevant data for your business domain
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl">📊</div>
                <h4 className="text-lg font-semibold">Transparent Results</h4>
                <p className="text-sm text-muted-foreground">
                  Clear metrics and explainable AI outputs you can trust and understand
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