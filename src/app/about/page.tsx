'use client';

import { Header, Footer } from '@/components/layout';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui';

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
      description:
        'We push the boundaries of what&apos;s possible with AI, delivering cutting-edge solutions that drive real business impact.',
      icon: '⚡',
    },
    {
      title: 'Ethical AI',
      description:
        'We believe in responsible AI development that respects privacy, ensures fairness, and maintains human oversight.',
      icon: '🛡️',
    },
    {
      title: 'Client Success',
      description:
        'Your success is our mission. We work as partners to ensure sustainable transformation and measurable results.',
      icon: '🎯',
    },
    {
      title: 'Continuous Learning',
      description:
        'We stay at the forefront of AI advancement, constantly evolving our expertise to serve our clients better.',
      icon: '🚀',
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="from-background via-background to-muted/20 bg-gradient-to-br py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="gradient" className="mb-6">
              About Stratex AI
            </Badge>
            <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
              <span className="from-secondary to-accent bg-gradient-to-r bg-clip-text text-transparent">
                Transforming Enterprises Through Intelligent Innovation
              </span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed lg:text-2xl">
              We are the premier strategic AI consulting firm, helping Fortune
              500 companies navigate the AI revolution with strategic insight,
              technical excellence, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 text-4xl">{stat.icon}</div>
                <div className="text-secondary mb-2 text-3xl font-bold lg:text-4xl">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
                  Our Story
                </h2>
                <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
                  <p>
                    Founded in 2019 by a team of AI researchers and former
                    McKinsey consultants, Stratex AI was born from a simple
                    observation: while AI technology was advancing rapidly, most
                    enterprises struggled to harness its transformative power.
                  </p>
                  <p>
                    We bridged this gap by combining deep technical expertise
                    with strategic business acumen, creating a unique approach
                    that ensures AI implementations deliver measurable business
                    value, not just technological novelty.
                  </p>
                  <p>
                    Today, we&apos;ve helped over 150 Fortune 500 companies
                    successfully implement AI solutions, generating over $2.3
                    billion in business value while maintaining our commitment
                    to ethical and responsible AI practices.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="from-secondary/10 to-accent/10 flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br">
                  <div className="text-center">
                    <div className="mb-4 text-6xl">🚀</div>
                    <h3 className="mb-2 text-2xl font-bold">Our Mission</h3>
                    <p className="text-muted-foreground max-w-md">
                      To democratize AI transformation, making cutting-edge
                      artificial intelligence accessible and valuable for
                      enterprises worldwide.
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
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
                Our Values
              </h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                These core principles guide everything we do and ensure we
                deliver exceptional value to our clients and society.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value, index) => (
                <Card key={index} variant="elevated" hover="lift" padding="lg">
                  <CardHeader>
                    <div className="mb-4 text-4xl">{value.icon}</div>
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
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
                Leadership Team
              </h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                Meet the experts who lead our mission to transform enterprises
                through AI innovation.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <Card key={index} variant="neural" hover="lift" padding="lg">
                  <CardContent>
                    <div className="from-secondary/10 to-accent/10 mb-6 flex aspect-[3/4] items-center justify-center rounded-lg bg-gradient-to-br">
                      <div className="text-6xl">👤</div>
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{member.name}</h3>
                    <p className="text-secondary mb-2 font-medium">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {member.expertise}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {member.background}
                    </p>
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
          <div className="from-secondary/10 to-accent/10 border-secondary/20 mx-auto max-w-4xl rounded-2xl border bg-gradient-to-r p-12 text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
              Join the ranks of Fortune 500 companies who have successfully
              implemented AI with our proven methodology and expert guidance.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
