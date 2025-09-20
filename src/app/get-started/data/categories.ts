import { AssessmentCategory } from '../types/assessment';

export const assessmentCategories: AssessmentCategory[] = [
  {
    id: 'strategy',
    name: 'AI Strategy & Leadership',
    description:
      'Strategic vision, executive commitment, and transformation roadmap',
    maxScore: 25,
    icon: '🎯',
    color: 'blue',
  },
  {
    id: 'data',
    name: 'Data Infrastructure',
    description: 'Data quality, governance, accessibility, and cloud readiness',
    maxScore: 25,
    icon: '🗄️',
    color: 'indigo',
  },
  {
    id: 'technical',
    name: 'Technical Capabilities',
    description:
      'AI/ML experience, integration readiness, and computing resources',
    maxScore: 20,
    icon: '⚙️',
    color: 'purple',
  },
  {
    id: 'organizational',
    name: 'Organizational Readiness',
    description: 'Skills, talent, change management, and training capabilities',
    maxScore: 15,
    icon: '👥',
    color: 'green',
  },
  {
    id: 'governance',
    name: 'Governance & Ethics',
    description:
      'AI ethics framework, compliance readiness, and risk management',
    maxScore: 10,
    icon: '🛡️',
    color: 'orange',
  },
  {
    id: 'culture',
    name: 'Culture & Innovation',
    description: 'Innovation mindset, AI acceptance, and learning culture',
    maxScore: 5,
    icon: '💡',
    color: 'yellow',
  },
];
