'use client';

import { Header, Footer } from '@/components/layout';
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';

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
    description: 'We deliver world-class AI solutions that exceed client expectations',
    icon: '🎯',
  },
  {
    title: 'Innovation',
    description: 'We push the boundaries of what\'s possible with cutting-edge AI research and breakthrough solutions',
    icon: '💡',
  },
  {
    title: 'Integrity',
    description: 'We build trust through transparent, ethical AI practices',
    icon: '🤝',
  },
  {
    title: 'Impact',
    description: 'We create measurable value for our clients and their stakeholders',
    icon: '📈',
  },
];

const culture = [
  {
    title: 'Continuous Learning',
    description: 'Stay ahead with $50K annual learning budget per consultant',
    stats: '$50K learning budget',
  },
  {
    title: 'Global Collaboration',
    description: 'Work with diverse teams across 15+ countries and time zones',
    stats: '15+ countries',
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible work arrangements with 4-day work week options',
    stats: '4-day work week',
  },
  {
    title: 'Career Growth',
    description: 'Fast-track career progression with mentorship programs',
    stats: '2.5 years avg promotion',
  },
];

export default function OurPeoplePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-professional bg-gradient-to-br from-slate-50 to-white">
          <div className="container-professional">
            <div className="text-center space-y-8">
              <Badge variant="outline" className="border-secondary text-secondary">
                Our People
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance">
                <span className="text-slate-900">
                  World-Class AI Experts Driving Innovation
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto text-balance">
                Our team of 250+ AI experts combines deep technical expertise with strategic business acumen.
                Former leaders from McKinsey, BCG, Google, and Microsoft, united by a passion for transformative AI.
              </p>

              {/* Team Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">250+</div>
                  <div className="text-sm text-slate-600 mt-1">AI Experts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">85%</div>
                  <div className="text-sm text-slate-600 mt-1">Advanced Degrees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">15+</div>
                  <div className="text-sm text-slate-600 mt-1">Years Avg Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">40+</div>
                  <div className="text-sm text-slate-600 mt-1">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section-professional">
          <div className="container-professional">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Leadership Team
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Seasoned executives from top-tier consulting firms and technology companies,
                leading the AI transformation across industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {leadership.map((leader) => (
                <Card key={leader.name} variant="elevated" hover="lift" className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-secondary">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">{leader.name}</h3>
                          <p className="text-secondary font-medium">{leader.role}</p>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
                        <div className="space-y-3">
                          <div>
                            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Expertise:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {leader.expertise.map((skill) => (
                                <Badge key={skill} variant="outline" size="sm">{skill}</Badge>
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
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Expert Consultants
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Specialized practitioners with deep domain expertise across AI technologies and industry verticals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experts.map((expert) => (
                <Card key={expert.name} variant="clean" className="text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-lg font-bold text-secondary">
                        {expert.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{expert.name}</h3>
                      <p className="text-sm text-secondary">{expert.role}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {expert.expertise.map((skill) => (
                          <Badge key={skill} variant="outline" size="sm" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-slate-500">{expert.projects}</p>
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
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Our Values
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                The principles that guide our work and define our culture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center space-y-4 flex flex-col items-center">
                  <div className="text-4xl mb-2">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-center">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="section-professional bg-slate-50">
          <div className="container-professional">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Why Join Us?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We invest in our people because exceptional talent drives exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {culture.map((item) => (
                <Card key={item.title} variant="clean" className="h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                      <Badge variant="gradient">{item.stats}</Badge>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-professional bg-gradient-to-r from-secondary/10 to-accent/10 border-y border-secondary/20">
          <div className="container-professional text-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Join Our World-Class Team
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We're always looking for exceptional talent to join our mission of transforming businesses through AI.
                Explore opportunities to work on cutting-edge projects with industry leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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