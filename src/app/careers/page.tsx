'use client';

import { Header, Footer } from '@/components/layout';
import { Button, Badge, Card, CardContent } from '@/components/ui';

const openPositions = [
  {
    title: 'Senior AI Consultant',
    department: 'Consulting',
    location: 'New York, London, Singapore',
    type: 'Full-time',
    experience: '5+ years',
    description:
      'Lead AI strategy engagements for Fortune 500 clients across multiple industries.',
    requirements: [
      'MBA from top-tier school or equivalent experience',
      '5+ years in management consulting or AI strategy',
      'Deep understanding of AI/ML technologies',
      'Strong client-facing and presentation skills',
    ],
    posted: '2 days ago',
  },
  {
    title: 'Principal Data Scientist',
    department: 'Technology',
    location: 'San Francisco, Austin, Remote',
    type: 'Full-time',
    experience: '8+ years',
    description:
      'Drive technical delivery of complex ML projects and mentor junior data scientists.',
    requirements: [
      'PhD in Computer Science, Statistics, or related field',
      '8+ years of industry ML experience',
      'Expertise in deep learning frameworks (PyTorch, TensorFlow)',
      'Experience with cloud ML platforms (AWS, GCP, Azure)',
    ],
    posted: '1 week ago',
  },
  {
    title: 'AI Ethics Specialist',
    department: 'Governance',
    location: 'Washington DC, Brussels, Toronto',
    type: 'Full-time',
    experience: '4+ years',
    description:
      'Develop responsible AI frameworks and ensure compliance across client engagements.',
    requirements: [
      'JD, PhD, or Master&apos;s in relevant field',
      '4+ years in AI ethics, policy, or governance',
      'Understanding of global AI regulations',
      'Strong analytical and communication skills',
    ],
    posted: '3 days ago',
  },
  {
    title: 'Computer Vision Engineer',
    department: 'Technology',
    location: 'Boston, Seattle, Remote',
    type: 'Full-time',
    experience: '3+ years',
    description:
      'Build and deploy computer vision solutions for manufacturing and healthcare clients.',
    requirements: [
      'MS/PhD in Computer Science or Engineering',
      '3+ years in computer vision/image processing',
      'Proficiency in OpenCV, PyTorch, cloud platforms',
      'Experience with edge deployment and optimization',
    ],
    posted: '5 days ago',
  },
  {
    title: 'Business Analyst - AI Strategy',
    department: 'Consulting',
    location: 'Chicago, Dallas, Miami',
    type: 'Full-time',
    experience: '2+ years',
    description:
      'Support senior consultants in AI transformation projects and client research.',
    requirements: [
      'Bachelor&apos;s degree from top university',
      '2+ years in consulting or analytics',
      'Strong Excel, SQL, and presentation skills',
      'Interest in AI/technology applications',
    ],
    posted: '1 week ago',
  },
  {
    title: 'DevOps Engineer - ML Infrastructure',
    department: 'Technology',
    location: 'Denver, Atlanta, Remote',
    type: 'Full-time',
    experience: '4+ years',
    description:
      'Build and maintain ML infrastructure and deployment pipelines for client projects.',
    requirements: [
      'Bachelor&apos;s in Computer Science or Engineering',
      '4+ years in DevOps/Infrastructure',
      'Experience with Kubernetes, Docker, CI/CD',
      'Knowledge of ML model deployment and monitoring',
    ],
    posted: '4 days ago',
  },
];

const benefits = [
  {
    title: 'Compensation',
    items: [
      'Competitive base salary + performance bonuses',
      'Equity participation in company growth',
      'Annual salary reviews and promotions',
      '401(k) matching up to 6%',
    ],
    icon: '💰',
  },
  {
    title: 'Learning & Development',
    items: [
      '$50,000 annual learning budget per employee',
      'Conference attendance and speaking opportunities',
      'Internal training programs and certifications',
      'Mentorship from industry leaders',
    ],
    icon: '📚',
  },
  {
    title: 'Work-Life Balance',
    items: [
      'Flexible work arrangements and remote options',
      'Unlimited PTO policy',
      '4-day work week pilot program',
      'Sabbatical opportunities after 5 years',
    ],
    icon: '⚖️',
  },
  {
    title: 'Health & Wellness',
    items: [
      'Premium health, dental, and vision insurance',
      'Mental health support and counseling',
      'Fitness memberships and wellness stipends',
      'Annual health and wellness retreats',
    ],
    icon: '🏥',
  },
];

const careerPaths = [
  {
    level: 'Associate',
    experience: '0-2 years',
    focus: 'Learning fundamentals, supporting senior team members',
    nextStep: 'Senior Associate (18-24 months)',
  },
  {
    level: 'Senior Associate',
    experience: '2-4 years',
    focus: 'Leading workstreams, client interaction, project management',
    nextStep: 'Principal (2-3 years)',
  },
  {
    level: 'Principal',
    experience: '4-7 years',
    focus: 'End-to-end project leadership, business development',
    nextStep: 'Partner (3-5 years)',
  },
  {
    level: 'Partner',
    experience: '7+ years',
    focus: 'P&L responsibility, client relationships, firm strategy',
    nextStep: 'Managing Partner/Practice Lead',
  },
];

const testimonials = [
  {
    name: 'Sarah Kim',
    role: 'Principal Consultant',
    quote:
      'The learning opportunities here are unmatched. I&apos;ve worked on AI projects across 5 industries in just 2 years.',
    tenure: '2.5 years',
  },
  {
    name: 'Michael Chen',
    role: 'Senior Data Scientist',
    quote:
      'The technical challenges and impact of our work make every day exciting. Plus, the team is incredible.',
    tenure: '1.5 years',
  },
  {
    name: 'Elena Rodriguez',
    role: 'AI Ethics Specialist',
    quote:
      'I love that we&apos;re building responsible AI solutions that make a real difference in the world.',
    tenure: '3 years',
  },
];

export default function CareersPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-professional bg-gradient-to-br from-slate-50 to-white">
          <div className="container-professional">
            <div className="space-y-8 text-center">
              <Badge
                variant="outline"
                className="border-secondary text-secondary"
              >
                Careers
              </Badge>
              <h1 className="text-4xl font-semibold text-balance md:text-5xl lg:text-6xl">
                <span className="text-slate-900">
                  Shape the Future of AI Consulting
                </span>
              </h1>
              <p className="mx-auto max-w-4xl text-xl text-balance text-slate-600">
                Join a world-class team of AI experts working on transformative
                projects for Fortune 500 companies. Build your career while
                building the future of business through artificial intelligence.
              </p>

              {/* Company Stats */}
              <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold">250+</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Team Members
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold">95%</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Employee Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold">
                    2.5 Years
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Avg. Promotion Time
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold">40+</div>
                  <div className="mt-1 text-sm text-slate-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-professional">
          <div className="container-professional">
            <div className="mb-16 space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Open Positions
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                We&apos;re looking for exceptional talent to join our growing
                team. Explore opportunities across consulting, technology, and
                specialized practice areas.
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map(position => (
                <Card key={position.title} variant="elevated" hover="lift">
                  <CardContent className="p-8">
                    <div className="grid items-start gap-8 lg:grid-cols-3">
                      <div className="space-y-4 lg:col-span-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-semibold text-slate-900">
                            {position.title}
                          </h3>
                          <Badge variant="outline">{position.department}</Badge>
                          <Badge variant="outline">{position.type}</Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                          <div className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                            </svg>
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2z"
                              />
                            </svg>
                            {position.experience}
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Posted {position.posted}
                          </div>
                        </div>
                        <p className="leading-relaxed text-slate-600">
                          {position.description}
                        </p>
                        <div>
                          <h4 className="mb-2 font-medium text-slate-900">
                            Key Requirements:
                          </h4>
                          <ul className="space-y-1">
                            {position.requirements.map((req, index) => (
                              <li
                                key={index}
                                className="flex items-start text-sm text-slate-600"
                              >
                                <svg
                                  className="mt-0.5 mr-2 h-3 w-3 flex-shrink-0 text-green-500"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-4">
                        <Button variant="gradient" className="w-full">
                          Apply Now
                        </Button>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mb-4 text-slate-600">
                Don&apos;t see the perfect role? We&apos;re always looking for
                exceptional talent.
              </p>
              <Button variant="outline" size="lg">
                Submit General Application
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits & Perks */}
        <section className="section-professional bg-slate-50">
          <div className="container-professional">
            <div className="mb-16 space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Benefits & Perks
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                We invest in our people because exceptional talent drives
                exceptional results.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {benefits.map(benefit => (
                <Card key={benefit.title} variant="default" className="h-full">
                  <CardContent className="space-y-6 p-8">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{benefit.icon}</div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {benefit.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {benefit.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start text-slate-600"
                        >
                          <svg
                            className="mt-0.5 mr-3 h-4 w-4 flex-shrink-0 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Career Progression */}
        <section className="section-professional">
          <div className="container-professional">
            <div className="mb-16 space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Career Progression
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                Clear advancement paths with accelerated progression for high
                performers.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {careerPaths.map((path, index) => (
                <div key={path.level} className="relative">
                  <Card variant="default" className="h-full text-center">
                    <CardContent className="space-y-4 p-8">
                      <div className="from-secondary/20 to-accent/20 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br">
                        <span className="text-secondary text-lg font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {path.level}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {path.experience}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {path.focus}
                      </p>
                      <div className="border-t border-slate-200 pt-4">
                        <p className="text-xs text-slate-500">
                          {path.nextStep}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  {index < careerPaths.length - 1 && (
                    <div className="absolute top-1/2 -right-3 hidden h-6 w-6 text-slate-400 lg:block">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="section-professional bg-slate-50">
          <div className="container-professional">
            <div className="mb-16 space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                What Our Team Says
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                Hear from our team members about their experience and growth at
                our company.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map(testimonial => (
                <Card
                  key={testimonial.name}
                  variant="default"
                  className="h-full text-center"
                >
                  <CardContent className="space-y-6 p-8">
                    <div className="from-secondary/20 to-accent/20 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
                      <span className="text-secondary text-lg font-bold">
                        {testimonial.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </span>
                    </div>
                    <blockquote className="leading-relaxed text-slate-600 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600">
                        {testimonial.role}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {testimonial.tenure} at company
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-professional from-secondary/10 to-accent/10 border-secondary/20 border-y bg-gradient-to-r">
          <div className="container-professional text-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Ready to Join Our Mission?
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                Take the next step in your career and help shape the future of
                AI consulting. We&apos;re looking for passionate individuals who
                want to make a meaningful impact.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button variant="gradient" size="lg" className="shadow-lg">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Learn About Our Culture
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
