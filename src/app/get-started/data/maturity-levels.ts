import { MaturityLevel } from '../types/assessment';

export const maturityLevels: MaturityLevel[] = [
  {
    level: 'Exploring',
    range: [0, 25],
    description:
      'Beginning your AI journey with basic awareness and initial exploration',
    color: 'red',
    icon: '🔍',
    recommendations: [
      'Develop comprehensive AI strategy and vision',
      'Assess and improve current data infrastructure',
      'Build executive alignment and sponsorship',
      'Start with small pilot projects to build experience',
      'Invest in basic AI education for leadership team',
    ],
    nextSteps: [
      'Schedule AI strategy workshop with leadership',
      'Conduct detailed data readiness assessment',
      'Identify high-impact, low-risk pilot opportunities',
      'Establish AI transformation budget',
    ],
  },
  {
    level: 'Planning',
    range: [26, 45],
    description:
      'Strategy defined and actively planning implementation with clear roadmap',
    color: 'orange',
    icon: '📋',
    recommendations: [
      'Prioritize high-impact AI use cases',
      'Invest in data quality and governance systems',
      'Build foundational AI capabilities and skills',
      'Establish success metrics and KPIs',
      'Create change management strategy',
    ],
    nextSteps: [
      'Design pilot project implementation plan',
      'Secure technical infrastructure requirements',
      'Begin AI skills training program',
      'Establish AI governance framework',
    ],
  },
  {
    level: 'Implementing',
    range: [46, 65],
    description: 'Actively deploying AI solutions with proven pilot successes',
    color: 'yellow',
    icon: '⚡',
    recommendations: [
      'Scale successful pilot projects across organization',
      'Strengthen technical infrastructure and capabilities',
      'Expand AI team and skill development',
      'Implement robust governance and ethics frameworks',
      'Optimize data pipelines for AI workloads',
    ],
    nextSteps: [
      'Plan enterprise-wide AI deployment',
      'Enhance data science and ML operations',
      'Develop AI center of excellence',
      'Implement advanced monitoring and optimization',
    ],
  },
  {
    level: 'Scaling',
    range: [66, 85],
    description:
      'Successfully expanding AI across organization with measurable business impact',
    color: 'blue',
    icon: '📈',
    recommendations: [
      'Optimize existing AI implementations for maximum ROI',
      'Drive organization-wide AI adoption and integration',
      'Implement advanced analytics and automation',
      'Measure and demonstrate business value',
      'Share AI best practices across business units',
    ],
    nextSteps: [
      'Pursue advanced AI technologies (LLMs, Computer Vision)',
      'Develop AI-powered products and services',
      'Establish innovation partnerships',
      'Create industry thought leadership',
    ],
  },
  {
    level: 'Optimizing',
    range: [86, 100],
    description:
      'AI-driven organization with continuous innovation and industry leadership',
    color: 'green',
    icon: '🏆',
    recommendations: [
      'Lead industry innovation in AI applications',
      'Explore cutting-edge AI technologies and research',
      'Share best practices and insights with ecosystem',
      'Drive AI innovation through strategic partnerships',
      'Mentor other organizations in AI transformation',
    ],
    nextSteps: [
      'Invest in AI research and development',
      'Create AI-first products and business models',
      'Establish innovation labs and accelerators',
      'Become recognized AI industry leader',
    ],
  },
];
