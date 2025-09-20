'use client';

import { useState, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

const testimonialsVariants = cva('w-full', {
  variants: {
    variant: {
      default: 'space-y-8',
      carousel: 'relative overflow-hidden',
      grid: 'grid gap-6',
      compact: 'space-y-4',
    },
    layout: {
      single: '',
      double: 'md:grid-cols-2',
      triple: 'md:grid-cols-2 lg:grid-cols-3',
      quad: 'md:grid-cols-2 lg:grid-cols-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    layout: 'single',
  },
});

export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
    linkedin?: string;
  };
  project?: {
    industry: string;
    duration: string;
    results: string;
  };
  rating?: number;
  verified?: boolean;
  featured?: boolean;
}

export interface TestimonialsProps
  extends VariantProps<typeof testimonialsVariants> {
  testimonials: Testimonial[];
  className?: string;
  showRatings?: boolean;
  showProjects?: boolean;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Stratex AI transformed our loan processing from a multi-week manual process to real-time automated decisions. The fraud detection capabilities have exceeded our expectations, reducing losses by 60% while improving customer satisfaction.',
    author: {
      name: 'Sarah Chen',
      title: 'Chief Digital Officer',
      company: 'Major US Bank',
      avatar: '/img/testimonials/sarah-chen.jpg',
    },
    project: {
      industry: 'Financial Services',
      duration: '8 months',
      results: '340% ROI, 80% faster processing',
    },
    rating: 5,
    verified: true,
    featured: true,
  },
  {
    id: 'testimonial-2',
    quote:
      'The predictive maintenance system has revolutionized our operations. We now prevent failures before they happen, reducing downtime by 75% and our quality has never been better. The ROI exceeded all expectations.',
    author: {
      name: 'Michael Rodriguez',
      title: 'VP of Operations',
      company: 'Fortune 100 Manufacturer',
      avatar: '/img/testimonials/michael-rodriguez.jpg',
    },
    project: {
      industry: 'Manufacturing',
      duration: '10 months',
      results: '$50M annual savings, 75% downtime reduction',
    },
    rating: 5,
    verified: true,
    featured: true,
  },
  {
    id: 'testimonial-3',
    quote:
      "The AI diagnostic system has enhanced our radiologists' capabilities significantly. We're catching conditions earlier and treating patients more effectively. The federated learning approach maintained perfect privacy compliance.",
    author: {
      name: 'Dr. Jennifer Walsh',
      title: 'Chief Medical Officer',
      company: 'Regional Healthcare Network',
      avatar: '/img/testimonials/jennifer-walsh.jpg',
    },
    project: {
      industry: 'Healthcare',
      duration: '12 months',
      results: '45% diagnostic accuracy improvement',
    },
    rating: 5,
    verified: true,
    featured: true,
  },
  {
    id: 'testimonial-4',
    quote:
      "Stratex AI's approach to AI strategy was comprehensive and practical. They didn't just deliver technology—they transformed our entire organization's relationship with data and AI. The change management was flawless.",
    author: {
      name: 'David Thompson',
      title: 'Chief Technology Officer',
      company: 'Global Retail Chain',
      avatar: '/img/testimonials/david-thompson.jpg',
    },
    project: {
      industry: 'Retail',
      duration: '14 months',
      results: '280% ROI, enterprise-wide AI adoption',
    },
    rating: 5,
    verified: true,
  },
  {
    id: 'testimonial-5',
    quote:
      "The team's expertise in both AI technology and business strategy is unmatched. They understood our industry challenges and delivered solutions that created immediate value while building long-term competitive advantage.",
    author: {
      name: 'Lisa Patel',
      title: 'Chief Strategy Officer',
      company: 'Energy Corporation',
      avatar: '/img/testimonials/lisa-patel.jpg',
    },
    project: {
      industry: 'Energy',
      duration: '9 months',
      results: '35% operational efficiency gain',
    },
    rating: 5,
    verified: true,
  },
  {
    id: 'testimonial-6',
    quote:
      'Working with Stratex AI was a game-changer for our investment strategies. Their quantitative models and risk management systems have consistently outperformed traditional approaches while maintaining strict compliance.',
    author: {
      name: 'Ahmed Hassan',
      title: 'Managing Director',
      company: 'Investment Management Firm',
      avatar: '/img/testimonials/ahmed-hassan.jpg',
    },
    project: {
      industry: 'Financial Services',
      duration: '6 months',
      results: '22% alpha generation improvement',
    },
    rating: 5,
    verified: true,
  },
];

export function Testimonials({
  testimonials = defaultTestimonials,
  variant,
  layout,
  className,
  showRatings = true,
  showProjects = true,
  autoRotate = false,
  rotationInterval = 5000,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoRotate && variant === 'carousel') {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
      }, rotationInterval);

      return () => clearInterval(interval);
    }
  }, [autoRotate, variant, testimonials.length, rotationInterval]);

  const handlePrevious = () => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const renderTestimonial = (testimonial: Testimonial) => (
    <div
      key={testimonial.id}
      className={cn(
        'rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md',
        variant === 'compact' && 'p-4'
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={testimonial.author.avatar}
            alt={testimonial.author.name}
            className="h-12 w-12 rounded-full border-2 border-gray-200 object-cover"
            onError={e => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author.name)}&size=48&background=3b82f6&color=ffffff&bold=true`;
            }}
          />
          <div>
            <h4 className="font-semibold text-gray-900">
              {testimonial.author.name}
            </h4>
            <p className="text-sm text-gray-600">{testimonial.author.title}</p>
            <p className="text-sm font-medium text-blue-600">
              {testimonial.author.company}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {testimonial.verified && (
            <Badge variant="success" className="text-xs">
              Verified
            </Badge>
          )}
          {testimonial.featured && (
            <Badge
              variant="outline"
              className="border-yellow-200 bg-yellow-50 text-xs text-yellow-700"
            >
              Featured
            </Badge>
          )}
        </div>
      </div>

      {/* Rating */}
      {showRatings && testimonial.rating && (
        <div className="mb-4">{renderStars(testimonial.rating)}</div>
      )}

      {/* Quote */}
      <blockquote className="mb-4 leading-relaxed text-gray-700 italic">
        &quot;{testimonial.quote}&quot;
      </blockquote>

      {/* Project Details */}
      {showProjects && testimonial.project && (
        <div className="mt-4 rounded-lg bg-gray-50 p-4">
          <h5 className="mb-2 font-medium text-gray-900">Project Details</h5>
          <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
            <div>
              <span className="text-gray-500">Industry:</span>
              <p className="font-medium text-gray-900">
                {testimonial.project.industry}
              </p>
            </div>
            <div>
              <span className="text-gray-500">Duration:</span>
              <p className="font-medium text-gray-900">
                {testimonial.project.duration}
              </p>
            </div>
            <div>
              <span className="text-gray-500">Results:</span>
              <p className="font-medium text-blue-600">
                {testimonial.project.results}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  if (variant === 'carousel') {
    return (
      <div className={cn(testimonialsVariants({ variant }), className)}>
        <div className="relative">
          {/* Testimonial */}
          <div className="mb-8">
            {renderTestimonial(testimonials[currentIndex])}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              aria-label="Previous testimonial"
            >
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'h-3 w-3 rounded-full transition-colors',
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              aria-label="Next testimonial"
            >
              <svg
                className="h-5 w-5 text-gray-600"
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
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={cn(testimonialsVariants({ variant, layout }), className)}>
        {testimonials.map(testimonial => renderTestimonial(testimonial))}
      </div>
    );
  }

  return (
    <div className={cn(testimonialsVariants({ variant }), className)}>
      {testimonials.map(testimonial => renderTestimonial(testimonial))}
    </div>
  );
}

// Client Logos Component
export interface ClientLogosProps {
  clients: Array<{
    name: string;
    logo: string;
    industry: string;
  }>;
  className?: string;
  showIndustry?: boolean;
}

export function ClientLogos({
  clients,
  className,
  showIndustry = false,
}: ClientLogosProps) {
  return (
    <div className={cn('py-8', className)}>
      <div className="mb-8 text-center">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          Trusted by Leading Organizations
        </h3>
        <p className="text-gray-600">
          Join 150+ Fortune 500 companies that have transformed with our AI
          expertise
        </p>
      </div>

      <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4 lg:grid-cols-6">
        {clients.map(client => (
          <div key={client.name} className="group text-center">
            <div className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="mx-auto h-12 w-auto opacity-60 transition-opacity group-hover:opacity-100"
                onError={e => {
                  e.currentTarget.src = `https://via.placeholder.com/120x48/f3f4f6/6b7280?text=${encodeURIComponent(client.name)}`;
                }}
              />
            </div>
            {showIndustry && (
              <p className="mt-2 text-xs text-gray-500">{client.industry}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
