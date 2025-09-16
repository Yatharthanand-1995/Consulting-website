/**
 * Global TypeScript types for GenAI Consulting Website
 */

// Base types
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
  external?: boolean;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  slug: string;
  features: string[];
  benefits: string[];
  technologies: Technology[];
  caseStudyIds: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

// Case Study types
export interface CaseStudy extends BaseEntity {
  title: string;
  client: Client;
  industry: Industry;
  challenge: string;
  solution: string;
  results: Result[];
  technologies: Technology[];
  timeline: string;
  teamSize: number;
  featured: boolean;
  slug: string;
  excerpt: string;
  content: string;
  images: ImageAsset[];
  testimonial?: Testimonial;
  metrics: Metric[];
}

export interface Client {
  name: string;
  logo: string;
  website?: string;
  industry: string;
  size: 'startup' | 'mid-market' | 'enterprise' | 'fortune500';
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface Result {
  metric: string;
  value: string;
  description: string;
  improvement: number; // percentage
}

export interface Technology {
  id: string;
  name: string;
  category: 'ai' | 'ml' | 'cloud' | 'frontend' | 'backend' | 'database' | 'devops';
  icon: string;
  color: string;
}

export interface Metric {
  label: string;
  value: number;
  unit: string;
  format: 'number' | 'percentage' | 'currency' | 'duration';
  trend?: 'up' | 'down' | 'stable';
  previousValue?: number;
}

// Team types
export interface TeamMember extends BaseEntity {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  expertise: string[];
  socialLinks: SocialLink[];
  featured: boolean;
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github' | 'email';
  url: string;
}

// Blog/Content types
export interface BlogPost extends BaseEntity {
  title: string;
  excerpt: string;
  content: string;
  author: TeamMember;
  featuredImage: ImageAsset;
  tags: Tag[];
  category: BlogCategory;
  published: boolean;
  publishedAt: Date;
  slug: string;
  readTime: number; // minutes
  seoTitle?: string;
  seoDescription?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  color: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

// Testimonial types
export interface Testimonial extends BaseEntity {
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar?: string;
  };
  rating?: number; // 1-5
  featured: boolean;
  caseStudyId?: string;
}

// Contact/Lead types
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
  services: string[];
  budget?: BudgetRange;
  timeline?: TimelineRange;
  source?: string;
}

export type BudgetRange =
  | 'under-50k'
  | '50k-100k'
  | '100k-250k'
  | '250k-500k'
  | '500k-1m'
  | 'over-1m';

export type TimelineRange =
  | 'asap'
  | '1-3-months'
  | '3-6-months'
  | '6-12-months'
  | 'over-year';

// AI Demo types
export interface DemoResult {
  id: string;
  type: 'sentiment' | 'document' | 'vision' | 'prediction';
  input: unknown;
  output: unknown;
  confidence: number;
  processingTime: number;
  timestamp: Date;
}

export interface SentimentAnalysis {
  text: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  confidence: number;
  emotions: {
    joy: number;
    anger: number;
    fear: number;
    sadness: number;
    surprise: number;
    disgust: number;
  };
}

export interface DocumentIntelligence {
  fileName: string;
  fileType: string;
  entities: ExtractedEntity[];
  summary: string;
  keyPhrases: string[];
  language: string;
  confidence: number;
}

export interface ExtractedEntity {
  text: string;
  type: 'person' | 'organization' | 'location' | 'date' | 'money' | 'custom';
  confidence: number;
  startIndex: number;
  endIndex: number;
}

// Asset types
export interface ImageAsset {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  format: 'jpg' | 'png' | 'webp' | 'svg';
  size: number; // bytes
  blurhash?: string;
}

// Animation types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
  repeat?: boolean | number;
  yoyo?: boolean;
}

export interface ParticleConfig {
  count: number;
  size: {
    min: number;
    max: number;
  };
  speed: {
    min: number;
    max: number;
  };
  color: string | string[];
  opacity: {
    min: number;
    max: number;
  };
}

// Form types
export interface FormField {
  name: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  label: string;
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRule[];
  options?: SelectOption[];
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ValidationRule {
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern';
  value?: string | number;
  message: string;
}

// Chat/AI Assistant types
export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  metadata?: {
    confidence?: number;
    sources?: string[];
    suggestedActions?: string[];
  };
}

export interface ChatSession {
  id: string;
  messages: ChatMessage[];
  context: {
    userProfile?: UserProfile;
    currentPage?: string;
    intent?: string;
  };
  status: 'active' | 'ended' | 'escalated';
}

export interface UserProfile {
  id?: string;
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  industry?: string;
  interests?: string[];
  previousInteractions?: number;
}

// Analytics types
export interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
  userId?: string;
  sessionId: string;
  timestamp: Date;
  properties?: Record<string, unknown>;
}

// API types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
  metadata?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}

// Component prop types
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends ComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

export interface CardProps extends ComponentProps {
  variant?: 'default' | 'glass' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}

export interface ModalProps extends ComponentProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  statusCode?: number;
}

// Configuration types
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    url: string;
  };
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  analytics: {
    googleAnalyticsId?: string;
    hotjarId?: string;
  };
  features: {
    blog: boolean;
    newsletter: boolean;
    darkMode: boolean;
    aiChat: boolean;
  };
}

// Export utility types
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Re-export React types for convenience
export type { ComponentProps as ReactComponentProps } from 'react';