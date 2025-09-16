'use client';

import { Header, Footer } from '@/components/layout';
import { Button, Badge, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: '🤖' },
    { number: '97%', label: 'Client Success Rate', icon: '📈' },
    { number: '$2.3B', label: 'Value Generated', icon: '💰' },
    { number: '150+', label: 'Fortune 500 Clients', icon: '🏢' },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & CEO',
      expertise: 'AI Strategy & Machine Learning',
      background: 'Former Google AI Research, MIT PhD',
      image: '/api/placeholder/300/400',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      expertise: 'Enterprise Architecture & LLM Implementation',
      background: 'Ex-Microsoft Azure AI, Stanford MS',
      image: '/api/placeholder/300/400',
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Head of AI Ethics',
      expertise: 'Responsible AI & Governance',
      background: 'Former IBM Watson Ethics Board, PhD Ethics',
      image: '/api/placeholder/300/400',
    },
    {
      name: 'James Thompson',
      role: 'Director of Strategy',
      expertise: 'Business Transformation & Change Management',
      background: 'Ex-McKinsey Partner, Harvard MBA',
      image: '/api/placeholder/300/400',
    },
  ];

  const values = [
    {
      title: 'Innovation Excellence',
      description: 'We push the boundaries of what\'s possible with AI, delivering cutting-edge solutions that drive real business impact.',
      icon: '⚡',
    },
    {
      title: 'Ethical AI',
      description: 'We believe in responsible AI development that respects privacy, ensures fairness, and maintains human oversight.',
      icon: '🛡️',
    },
    {
      title: 'Client Success',
      description: 'Your success is our mission. We work as partners to ensure sustainable transformation and measurable results.',
      icon: '🎯',
    },
    {
      title: 'Continuous Learning',
      description: 'We stay at the forefront of AI advancement, constantly evolving our expertise to serve our clients better.',
      icon: '🚀',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gradient" className="mb-6">
              About GenAI Consulting
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Transforming Enterprises Through Intelligent Innovation
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              We are the premier GenAI consulting firm, helping Fortune 500 companies navigate
              the AI revolution with strategic insight, technical excellence, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2019 by a team of AI researchers and former McKinsey consultants,
                    GenAI Consulting was born from a simple observation: while AI technology was
                    advancing rapidly, most enterprises struggled to harness its transformative power.
                  </p>
                  <p>
                    We bridged this gap by combining deep technical expertise with strategic
                    business acumen, creating a unique approach that ensures AI implementations
                    deliver measurable business value, not just technological novelty.
                  </p>
                  <p>
                    Today, we've helped over 150 Fortune 500 companies successfully implement
                    AI solutions, generating over $2.3 billion in business value while maintaining
                    our commitment to ethical and responsible AI practices.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground max-w-md">
                      To democratize AI transformation, making cutting-edge artificial intelligence
                      accessible and valuable for enterprises worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core principles guide everything we do and ensure we deliver
                exceptional value to our clients and society.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} variant="elevated" hover="lift" padding="lg">
                  <CardHeader>
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the experts who lead our mission to transform enterprises through AI innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} variant="neural" hover="lift" padding="lg">
                  <CardContent>
                    <div className="aspect-[3/4] bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg mb-6 flex items-center justify-center">
                      <div className="text-6xl">👤</div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                    <p className="text-secondary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.expertise}</p>
                    <p className="text-xs text-muted-foreground">{member.background}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-12 border border-secondary/20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the ranks of Fortune 500 companies who have successfully implemented AI
              with our proven methodology and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="xl">
                Schedule Strategy Session
              </Button>
              <Button variant="outline" size="xl">
                Download Company Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer className="mt-0" />
    </div>
  );
}