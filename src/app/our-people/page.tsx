'use client';

import { Header, Footer } from '@/components/layout';
import { Button, Badge, Card, CardContent } from '@/components/ui';

const leadership = [
  {
    name: 'Himanshu Chauhan',
    role: 'Chief AI Engineer',
    bio: 'Leading AI engineer with deep expertise in machine learning systems and enterprise AI solutions.',
    expertise: ['AI Architecture', 'Machine Learning', 'System Design'],
    experience: '12+ years',
    education: 'IIT Delhi BTech, Stanford MS',
    image: '/img/team/himanshu-chauhan.jpg',
  },
  {
    name: 'Dr. Saurabh Gupta',
    role: 'Chief AI Engineer',
    bio: 'Renowned AI researcher with extensive experience in deep learning and neural networks.',
    expertise: ['Deep Learning', 'AI Research', 'Neural Networks'],
    experience: '15+ years',
    education: 'IIT Bombay PhD, MIT Post-doc',
    image: '/img/team/saurabh-gupta.jpg',
  },
  {
    name: 'Hitesh Gautam',
    role: 'Chief AI Engineer',
    bio: 'Expert in AI implementation and scalable machine learning solutions for enterprise clients.',
    expertise: ['AI Implementation', 'Scalable ML', 'Enterprise Solutions'],
    experience: '10+ years',
    education: 'NIT Kurukshetra BTech, IIM Ahmedabad MBA',
    image: '/img/team/hitesh-gautam.jpg',
  },
  {
    name: 'Yatharth Anand',
    role: 'Chief AI Engineer',
    bio: 'Visionary AI engineer specializing in cutting-edge AI applications and business transformation.',
    expertise: ['AI Strategy', 'Business Transformation', 'Innovation'],
    experience: '8+ years',
    education: 'Delhi University BTech, ISB Hyderabad MBA',
    image: '/img/team/yatharth-anand.jpg',
  },
];

const experts = [
  {
    name: 'David Kim',
    role: 'Principal, Healthcare AI',
    expertise: ['Medical AI', 'Drug Discovery', 'Clinical Analytics'],
    projects: '25+ healthcare projects',
  },
  {
    name: 'Maria Santos',
    role: 'Senior Manager, Automation',
    expertise: ['RPA', 'Process Mining', 'Workflow Optimization'],
    projects: '40+ automation projects',
  },
  {
    name: 'James Thompson',
    role: 'Principal, Manufacturing',
    expertise: ['Industry 4.0', 'Predictive Maintenance', 'Supply Chain'],
    projects: '30+ manufacturing projects',
  },
  {
    name: 'Priya Sharma',
    role: 'Senior Manager, Ethics AI',
    expertise: ['AI Governance', 'Bias Detection', 'Regulatory Compliance'],
    projects: '20+ governance projects',
  },
  {
    name: 'Robert Chen',
    role: 'Principal, Computer Vision',
    expertise: ['Image Recognition', 'Video Analytics', 'Edge AI'],
    projects: '35+ vision projects',
  },
  {
    name: 'Emily Davis',
    role: 'Senior Manager, NLP',
    expertise: ['Conversational AI', 'Document Processing', 'Language Models'],
    projects: '28+ NLP projects',
  },
];

const values = [
  {
    title: 'Excellence',
    description:
      'We deliver world-class AI solutions that exceed client expectations',
    icon: '🎯',
  },
  {
    title: 'Innovation',
    description:
      'We push the boundaries of what&apos;s possible with cutting-edge AI research and breakthrough solutions',
    icon: '💡',
  },
  {
    title: 'Integrity',
    description: 'We build trust through transparent, ethical AI practices',
    icon: '🤝',
  },
  {
    title: 'Impact',
    description:
      'We create measurable value for our clients and their stakeholders',
    icon: '📈',
  },
];

const culture = [
  {
    title: 'Continuous Learning',
    description:
      'Stay ahead with $50K annual learning budget per consultant, covering conferences, certifications, and advanced courses',
    stats: '$50K learning budget',
    icon: '📚',
    details: 'Industry conferences, AI certifications, executive education',
  },
  {
    title: 'Global Collaboration',
    description:
      'Work with diverse teams across 15+ countries and time zones on cutting-edge AI projects',
    stats: '15+ countries',
    icon: '🌍',
    details: 'Remote-first culture, cross-cultural expertise exchange',
  },
  {
    title: 'Work-Life Balance',
    description:
      'Flexible work arrangements with 4-day work week options and unlimited PTO policy',
    stats: '4-day work week',
    icon: '⚖️',
    details: 'Flexible hours, wellness programs, mental health support',
  },
  {
    title: 'Career Growth',
    description:
      'Fast-track career progression with mentorship programs and leadership development paths',
    stats: '2.5 years avg promotion',
    icon: '🚀',
    details:
      'Structured mentorship, leadership training, ownership opportunities',
  },
];

export default function OurPeoplePage() {
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
                Our People
              </Badge>
              <h1 className="text-4xl font-semibold text-balance md:text-5xl lg:text-6xl">
                <span className="text-slate-900">
                  World-Class AI Experts Driving Innovation
                </span>
              </h1>
              <p className="mx-auto max-w-4xl text-xl text-balance text-slate-600">
                Our team of 250+ AI experts combines deep technical expertise
                with strategic business acumen. Former leaders from McKinsey,
                BCG, Google, and Microsoft, united by a passion for
                transformative AI.
              </p>

              {/* Team Stats */}
              <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold">250+</div>
                  <div className="mt-1 text-sm text-slate-600">AI Experts</div>
                </div>
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold">85%</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Advanced Degrees
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold">15+</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Years Avg Experience
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

        {/* Leadership Team */}
        <section className="section-professional">
          <div className="container-professional">
            <div className="mb-16 space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Leadership Team
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                Seasoned executives from top-tier consulting firms and
                technology companies, leading the AI transformation across
                industries.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {leadership.map(leader => (
                <Card
                  key={leader.name}
                  variant="elevated"
                  hover="lift"
                  className="h-full"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="from-secondary/20 to-accent/20 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br">
                        <span className="text-secondary text-2xl font-bold">
                          {leader.name
                            .split(' ')
                            .map(n => n[0])
                            .join('')}
                        </span>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">
                            {leader.name}
                          </h3>
                          <p className="text-secondary font-medium">
                            {leader.role}
                          </p>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                          {leader.bio}
                        </p>
                        <div className="space-y-3">
                          <div>
                            <span className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                              Expertise:
                            </span>
                            <div className="mt-1 flex flex-wrap gap-2">
                              {leader.expertise.map(skill => (
                                <Badge key={skill} variant="outline" size="sm">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>{leader.experience}</span>
                            <span>{leader.education}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Team */}
        <section className="section-professional bg-slate-50">
          <div className="container-professional">
            <div className="mb-16 space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Expert Consultants
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                Specialized practitioners with deep domain expertise across AI
                technologies and industry verticals.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {experts.map(expert => (
                <Card
                  key={expert.name}
                  variant="default"
                  className="text-center"
                >
                  <CardContent className="space-y-4 p-6">
                    <div className="from-secondary/10 to-accent/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
                      <span className="text-secondary text-lg font-bold">
                        {expert.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {expert.name}
                      </h3>
                      <p className="text-secondary text-sm">{expert.role}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap justify-center gap-1">
                        {expert.expertise.map(skill => (
                          <Badge
                            key={skill}
                            variant="outline"
                            size="sm"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-slate-500">
                        {expert.projects}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-professional">
          <div className="container-professional">
            <div className="mb-16 space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Our Values
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                The principles that guide our work and define our culture.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map(value => (
                <div
                  key={value.title}
                  className="flex flex-col items-center space-y-4 text-center"
                >
                  <div className="mb-2 text-4xl">{value.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="text-center text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="section-professional bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="container-professional">
            <div className="mb-16 space-y-6 text-center">
              <Badge
                variant="outline"
                className="border-slate-600 bg-slate-100/80 font-medium text-slate-700 backdrop-blur-sm"
              >
                Career Benefits
              </Badge>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Why Join Our Team?
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                We invest in our people because exceptional talent drives
                exceptional results. Join a culture of continuous learning,
                innovation, and professional growth.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {culture.map(item => (
                <Card
                  key={item.title}
                  variant="elevated"
                  className="group h-full border-0 bg-white transition-all duration-300 hover:shadow-xl"
                >
                  <CardContent className="space-y-6 p-8">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 text-3xl">{item.icon}</div>
                      <div className="flex-1">
                        <h3 className="mb-1 text-xl font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <div className="inline-block rounded-full bg-gradient-to-r from-slate-800 to-slate-900 px-3 py-1 text-xs font-medium text-white shadow-md">
                          {item.stats}
                        </div>
                      </div>
                    </div>

                    <p className="leading-relaxed text-slate-600">
                      {item.description}
                    </p>

                    {/* Additional Details */}
                    <div className="space-y-3 border-t border-slate-100 pt-4">
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <div className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></div>
                        <span className="italic">{item.details}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-medium text-emerald-600">
                        <div className="h-1 w-1 rounded-full bg-emerald-500"></div>
                        <span>Available to all team members</span>
                      </div>
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
                Join Our World-Class Team
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                We&apos;re always looking for exceptional talent to join our
                mission of transforming businesses through AI. Explore
                opportunities to work on cutting-edge projects with industry
                leaders.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button variant="gradient" size="lg" className="shadow-lg">
                  View Open Positions
                </Button>
                <Button variant="outline" size="lg">
                  Submit Resume
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
