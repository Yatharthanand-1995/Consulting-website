'use client';

import {
  Breadcrumb,
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

const breadcrumbItems = [
  { label: 'About', href: '/about' },
  { label: 'Our Team', current: true },
];

const leadership = [
  {
    name: 'Dr. Alexandra Chen',
    role: 'CEO & Founder',
    bio: 'Former VP of AI at Google, led the team that developed breakthrough language models. PhD in Computer Science from Stanford with 15+ years in enterprise AI.',
    credentials: [
      'PhD Computer Science, Stanford University',
      'Former VP of AI, Google',
      'Former Head of AI Research, DeepMind',
      '50+ peer-reviewed publications',
      'IEEE Fellow',
      'MIT Technology Review Innovator Under 35',
    ],
    expertise: [
      'Strategic AI Leadership',
      'Large Language Models',
      'Neural Architecture',
      'AI Ethics',
    ],
    avatar: '/img/team/alexandra-chen.jpg',
    linkedin: 'https://linkedin.com/in/alexandra-chen-ai',
    publications: 'https://scholar.google.com/alexandra-chen',
    achievements: [
      'Led development of GPT-3 precursor at Google',
      'Advised 20+ Fortune 500 CEOs on AI strategy',
      '$500M+ in AI value creation',
      'Keynote speaker at 100+ conferences',
    ],
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Former Principal Engineer at Microsoft Azure AI, architect of enterprise-scale AI platforms serving billions of users. MS Computer Science from MIT.',
    credentials: [
      'MS Computer Science, MIT',
      'Former Principal Engineer, Microsoft Azure AI',
      'Former Senior Director, Amazon Web Services',
      '20+ years in distributed systems',
      'Cloud Native Computing Foundation Member',
      'Microsoft MVP for AI',
    ],
    expertise: [
      'AI Platform Architecture',
      'Cloud Computing',
      'MLOps',
      'Distributed Systems',
    ],
    avatar: '/img/team/michael-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/michael-rodriguez-cto',
    github: 'https://github.com/mrodriguez-ai',
    achievements: [
      'Architected Azure AI platform serving 1B+ users',
      'Led 200+ person engineering organization',
      'Built ML platforms processing 10PB+ daily',
      'Holds 15 AI/ML patents',
    ],
  },
  {
    name: 'Dr. Sarah Kim',
    role: 'Chief Data Officer',
    bio: 'Former Head of Data Science at JPMorgan Chase, specialized in financial AI and risk modeling. PhD in Statistics from Harvard with expertise in financial ML.',
    credentials: [
      'PhD Statistics, Harvard University',
      'Former Head of Data Science, JPMorgan Chase',
      'Former VP Analytics, Goldman Sachs',
      'CFA Charterholder',
      'Fellow of the Royal Statistical Society',
      'Board Member, Data Science Institute',
    ],
    expertise: [
      'Financial AI',
      'Risk Modeling',
      'Quantitative Analytics',
      'Regulatory Compliance',
    ],
    avatar: '/img/team/sarah-kim.jpg',
    linkedin: 'https://linkedin.com/in/sarah-kim-cdo',
    achievements: [
      'Built $1B+ trading algorithms at Goldman',
      'Led 150+ data scientists at JPMorgan',
      'Reduced bank risk exposure by 40%',
      'Regulatory expert for Fed AI guidelines',
    ],
  },
  {
    name: 'Dr. David Thompson',
    role: 'Chief AI Officer',
    bio: 'Former AI Research Director at OpenAI, pioneer in reinforcement learning and multi-agent systems. PhD in Machine Learning from Carnegie Mellon.',
    credentials: [
      'PhD Machine Learning, Carnegie Mellon',
      'Former AI Research Director, OpenAI',
      'Former Research Scientist, DeepMind',
      '100+ publications in top-tier venues',
      'AAAI Fellow',
      'NeurIPS Program Committee Member',
    ],
    expertise: [
      'Reinforcement Learning',
      'Multi-Agent Systems',
      'AI Safety',
      'Model Training',
    ],
    avatar: '/img/team/david-thompson.jpg',
    linkedin: 'https://linkedin.com/in/david-thompson-ai',
    publications: 'https://scholar.google.com/david-thompson',
    achievements: [
      'Co-author of foundational RL papers',
      'Led AGI safety research at OpenAI',
      'Developed training methods for GPT models',
      'Advisor to White House AI Council',
    ],
  },
];

const seniorConsultants = [
  {
    name: 'Jennifer Walsh',
    role: 'Senior Director, Strategy',
    bio: 'Former McKinsey Partner with 12+ years in AI strategy for Fortune 500. MBA from Wharton, specializes in AI transformation roadmaps.',
    credentials: [
      'MBA, Wharton School',
      'Former Partner, McKinsey & Company',
      'CPA',
      'Six Sigma Black Belt',
    ],
    expertise: [
      'AI Strategy',
      'Digital Transformation',
      'Change Management',
      'Executive Advisory',
    ],
    avatar: '/img/team/jennifer-walsh.jpg',
    experience: '12+ years consulting',
  },
  {
    name: 'Dr. Raj Patel',
    role: 'Principal Consultant, Healthcare AI',
    bio: 'Former Chief Medical Officer at Cerner, expert in healthcare AI and medical informatics. MD from Johns Hopkins, PhD in Biomedical Informatics.',
    credentials: [
      'MD, Johns Hopkins',
      'PhD Biomedical Informatics, Stanford',
      'Board Certified Radiologist',
      'HIMSS Fellow',
    ],
    expertise: [
      'Healthcare AI',
      'Medical Imaging',
      'Clinical Decision Support',
      'HIPAA Compliance',
    ],
    avatar: '/img/team/raj-patel.jpg',
    experience: '15+ years healthcare tech',
  },
  {
    name: 'Lisa Chen',
    role: 'Principal Consultant, Manufacturing',
    bio: 'Former VP of Operations at Tesla, expert in smart manufacturing and Industry 4.0. MS Industrial Engineering from Georgia Tech.',
    credentials: [
      'MS Industrial Engineering, Georgia Tech',
      'Former VP Operations, Tesla',
      'Lean Six Sigma Master Black Belt',
      'ISA Certified',
    ],
    expertise: [
      'Smart Manufacturing',
      'IoT Analytics',
      'Supply Chain AI',
      'Quality Systems',
    ],
    avatar: '/img/team/lisa-chen.jpg',
    experience: '18+ years manufacturing',
  },
  {
    name: 'Dr. Ahmed Hassan',
    role: 'Principal Consultant, NLP',
    bio: 'Former Senior Research Scientist at Facebook AI, expert in natural language processing and conversational AI. PhD in Computational Linguistics.',
    credentials: [
      'PhD Computational Linguistics, MIT',
      'Former Senior Research Scientist, Meta AI',
      'ACL Fellowship',
      'Google Research Award',
    ],
    expertise: [
      'Natural Language Processing',
      'Conversational AI',
      'Information Extraction',
      'Multilingual AI',
    ],
    avatar: '/img/team/ahmed-hassan.jpg',
    experience: '10+ years NLP research',
  },
  {
    name: 'Maria Gonzalez',
    role: 'Principal Consultant, Computer Vision',
    bio: 'Former Lead Computer Vision Engineer at Uber, expert in autonomous systems and visual AI. MS Computer Science from Berkeley.',
    credentials: [
      'MS Computer Science, UC Berkeley',
      'Former Lead Engineer, Uber ATG',
      'NVIDIA Deep Learning Institute Certified',
      'IEEE Senior Member',
    ],
    expertise: [
      'Computer Vision',
      'Autonomous Systems',
      'Object Detection',
      'Edge AI',
    ],
    avatar: '/img/team/maria-gonzalez.jpg',
    experience: '12+ years computer vision',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Principal Consultant, Financial AI',
    bio: 'Former Quantitative Researcher at Two Sigma, expert in algorithmic trading and financial ML. PhD in Financial Engineering from Stanford.',
    credentials: [
      'PhD Financial Engineering, Stanford',
      'Former Quant Researcher, Two Sigma',
      'CQF Designation',
      'FRM Certified',
    ],
    expertise: [
      'Algorithmic Trading',
      'Risk Management',
      'Portfolio Optimization',
      'Market Microstructure',
    ],
    avatar: '/img/team/james-wilson.jpg',
    experience: '14+ years fintech',
  },
];

const advisors = [
  {
    name: 'Dr. Andrew Ng',
    role: 'Strategic Advisor',
    bio: 'Co-founder of Coursera, former Director of Stanford AI Lab, former Chief Scientist at Baidu. Leading voice in AI education and democratization.',
    credentials: [
      'PhD Computer Science, UC Berkeley',
      'Former Chief Scientist, Baidu',
      'Co-founder, Coursera',
      'Adjunct Professor, Stanford',
    ],
  },
  {
    name: 'Satya Nadella',
    role: 'Board Advisor',
    bio: 'CEO of Microsoft, champion of AI-first business transformation. Under his leadership, Microsoft became a leader in enterprise AI.',
    credentials: [
      'CEO, Microsoft',
      'MS Computer Science, University of Wisconsin',
      'MBA, University of Chicago',
    ],
  },
  {
    name: 'Dr. Fei-Fei Li',
    role: 'AI Ethics Advisor',
    bio: 'Co-Director of Stanford Human-Centered AI Institute, former Chief Scientist at Google Cloud. Leading researcher in computer vision and AI ethics.',
    credentials: [
      'PhD Computer Science, Caltech',
      'Professor, Stanford University',
      'Former Chief Scientist, Google Cloud',
      'MacArthur Fellow',
    ],
  },
];

const teamStats = [
  {
    label: 'PhD Scientists',
    value: '45+',
    description: 'Advanced degrees in AI/ML',
  },
  {
    label: 'Former Fortune 500 Executives',
    value: '25+',
    description: 'C-suite and VP-level experience',
  },
  {
    label: 'Years Combined Experience',
    value: '400+',
    description: 'In enterprise AI and consulting',
  },
  {
    label: 'Published Papers',
    value: '500+',
    description: 'Peer-reviewed research publications',
  },
  {
    label: 'Patents Held',
    value: '150+',
    description: 'AI and ML patent portfolio',
  },
  {
    label: 'Conferences Spoken',
    value: '1000+',
    description: 'Industry speaking engagements',
  },
];

export default function TeamPage() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <PageHero
          title="World-Class AI Expertise"
          description="Meet the team of former Fortune 500 executives and leading AI researchers transforming enterprises"
        />

        <section className="section-professional">
          <div className="container-professional">
            {/* Team Statistics */}
            <div className="mb-16">
              <div className="mb-12 text-center">
                <Badge
                  variant="outline"
                  className="mb-4 border-blue-200 bg-blue-50 text-blue-700"
                >
                  Proven Expertise
                </Badge>
                <h2 className="mb-4 text-3xl font-semibold text-gray-900">
                  Unmatched Depth of Experience
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600">
                  Our team combines cutting-edge AI research with deep
                  enterprise experience, bringing both technical excellence and
                  business acumen to every engagement.
                </p>
              </div>

              <div className="mb-12 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
                {teamStats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                  >
                    <div className="mb-2 text-2xl font-bold text-blue-600">
                      {stat.value}
                    </div>
                    <div className="mb-1 text-sm font-medium text-gray-900">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Team */}
            <div className="mb-16">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-semibold text-gray-900">
                  Leadership Team
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600">
                  Our executive team brings together the best minds from leading
                  technology companies, top-tier consulting firms, and
                  world-renowned research institutions.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {leadership.map((leader, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <img
                            src={leader.avatar}
                            alt={leader.name}
                            className="h-24 w-24 rounded-full border-4 border-blue-100 object-cover"
                            onError={e => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&size=96&background=3b82f6&color=ffffff&bold=true`;
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {leader.name}
                            </h3>
                            <p className="font-medium text-blue-600">
                              {leader.role}
                            </p>
                          </div>
                          <p className="mb-4 text-gray-600">{leader.bio}</p>

                          <Tabs
                            defaultValue="credentials"
                            variant="pills"
                            size="sm"
                          >
                            <TabsList className="mb-4">
                              <TabsTrigger value="credentials">
                                Credentials
                              </TabsTrigger>
                              <TabsTrigger value="expertise">
                                Expertise
                              </TabsTrigger>
                              <TabsTrigger value="achievements">
                                Achievements
                              </TabsTrigger>
                            </TabsList>

                            <TabsContent value="credentials">
                              <ul className="space-y-1 text-sm text-gray-600">
                                {leader.credentials.map(
                                  (credential, credIndex) => (
                                    <li
                                      key={credIndex}
                                      className="flex items-start"
                                    >
                                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                                      <span>{credential}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </TabsContent>

                            <TabsContent value="expertise">
                              <div className="flex flex-wrap gap-2">
                                {leader.expertise.map((skill, skillIndex) => (
                                  <Badge
                                    key={skillIndex}
                                    variant="outline"
                                    className="border-blue-200 bg-blue-50 text-xs text-blue-700"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </TabsContent>

                            <TabsContent value="achievements">
                              <ul className="space-y-1 text-sm text-gray-600">
                                {leader.achievements.map(
                                  (achievement, achIndex) => (
                                    <li
                                      key={achIndex}
                                      className="flex items-start"
                                    >
                                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-600"></span>
                                      <span>{achievement}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </TabsContent>
                          </Tabs>

                          <div className="mt-4 flex space-x-3">
                            {leader.linkedin && (
                              <a
                                href={leader.linkedin}
                                className="text-blue-600 hover:text-blue-700"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  className="h-5 w-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            )}
                            {leader.publications && (
                              <a
                                href={leader.publications}
                                className="text-gray-600 hover:text-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  className="h-5 w-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </a>
                            )}
                            {leader.github && (
                              <a
                                href={leader.github}
                                className="text-gray-600 hover:text-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  className="h-5 w-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Senior Consultants */}
            <div className="mb-16">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-semibold text-gray-900">
                  Senior Consultants
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600">
                  Our senior consulting team brings specialized expertise across
                  industries and AI domains, with proven track records of
                  delivering transformational results for enterprise clients.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {seniorConsultants.map((consultant, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 text-center">
                        <img
                          src={consultant.avatar}
                          alt={consultant.name}
                          className="mx-auto mb-4 h-20 w-20 rounded-full border-2 border-gray-200 object-cover"
                          onError={e => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(consultant.name)}&size=80&background=6b7280&color=ffffff&bold=true`;
                          }}
                        />
                        <h3 className="text-lg font-semibold text-gray-900">
                          {consultant.name}
                        </h3>
                        <p className="text-sm font-medium text-blue-600">
                          {consultant.role}
                        </p>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {consultant.experience}
                        </Badge>
                      </div>

                      <p className="mb-4 text-sm text-gray-600">
                        {consultant.bio}
                      </p>

                      <div className="space-y-3">
                        <div>
                          <h4 className="mb-2 text-sm font-medium text-gray-900">
                            Credentials
                          </h4>
                          <ul className="space-y-1">
                            {consultant.credentials.map(
                              (credential, credIndex) => (
                                <li
                                  key={credIndex}
                                  className="flex items-start text-xs text-gray-600"
                                >
                                  <span className="mt-1.5 mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></span>
                                  <span>{credential}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="mb-2 text-sm font-medium text-gray-900">
                            Expertise
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {consultant.expertise.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="outline"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Strategic Advisors */}
            <div className="mb-16">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-semibold text-gray-900">
                  Strategic Advisors
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600">
                  We are privileged to work with some of the most influential
                  leaders in AI and technology, who provide strategic guidance
                  and ensure we stay at the forefront of innovation.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {advisors.map((advisor, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4">
                      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100">
                        <span className="text-2xl font-bold text-blue-600">
                          {advisor.name
                            .split(' ')
                            .map(n => n[0])
                            .join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {advisor.name}
                      </h3>
                      <p className="font-medium text-blue-600">
                        {advisor.role}
                      </p>
                    </div>
                    <p className="mb-4 text-gray-600">{advisor.bio}</p>
                    <div className="space-y-1">
                      {advisor.credentials.map((credential, credIndex) => (
                        <div key={credIndex} className="text-sm text-gray-500">
                          {credential}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Join Our Team CTA */}
            <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Join Our World-Class Team
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                We&apos;re always looking for exceptional AI talent to join our
                mission of transforming enterprises through strategic AI
                implementation. If you&apos;re passionate about applying
                cutting-edge AI to solve real-world business challenges,
                we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="/careers"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
                >
                  View Open Positions
                </a>
                <a
                  href="mailto:careers@stratex-ai.com"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  Send Us Your Resume
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
