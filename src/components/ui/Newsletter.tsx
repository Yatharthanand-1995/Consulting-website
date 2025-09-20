'use client';

import { useState } from 'react';
import { Button, Badge } from '@/components/ui';
import { cn } from '@/lib/utils';

interface NewsletterProps {
  variant?: 'default' | 'compact' | 'sidebar';
  className?: string;
  title?: string;
  description?: string;
  placeholder?: string;
}

export function Newsletter({
  variant = 'default',
  className,
  title,
  description,
  placeholder = 'Enter your email address',
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would integrate with your email service
      // For now, we'll simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubscribed(true);
      setEmail('');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubscribed(false);
    setError('');
  };

  if (isSubscribed) {
    return (
      <div className={cn('text-center', className)}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <Badge
          variant="outline"
          className="mb-3 border-green-200 bg-green-50 text-green-700"
        >
          Subscribed!
        </Badge>
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          Welcome to our community
        </h3>
        <p className="mb-4 text-gray-600">
          You&apos;ll receive our latest insights on AI transformation and
          industry trends.
        </p>
        <button
          onClick={handleReset}
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  switch (variant) {
    case 'compact':
      return (
        <div className={cn('', className)}>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              variant="primary"
              size="sm"
              disabled={isSubmitting}
              className="px-6"
            >
              {isSubmitting ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>
          {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
        </div>
      );

    case 'sidebar':
      return (
        <div
          className={cn(
            'rounded-lg border border-blue-200 bg-blue-50 p-6',
            className
          )}
        >
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-semibold text-blue-900">
              {title || 'Stay Updated'}
            </h3>
            <p className="text-sm text-blue-700">
              {description ||
                'Get the latest AI insights delivered to your inbox.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={placeholder}
              className="w-full rounded-lg border border-blue-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              variant="primary"
              size="sm"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Subscribing...
                </div>
              ) : (
                'Subscribe to Insights'
              )}
            </Button>
          </form>

          {error && <p className="mt-2 text-xs text-red-600">{error}</p>}

          <p className="mt-3 text-xs text-blue-600">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      );

    default:
      return (
        <div className={cn('mx-auto max-w-md text-center', className)}>
          <div className="mb-6">
            <Badge
              variant="outline"
              className="mb-4 border-blue-200 bg-blue-50 text-blue-700"
            >
              Newsletter
            </Badge>
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              {title || 'Stay ahead of the AI curve'}
            </h3>
            <p className="text-gray-600">
              {description ||
                'Get exclusive insights, case studies, and industry trends delivered to your inbox weekly.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              />
              {error && (
                <p className="mt-1 text-left text-sm text-red-600">{error}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full font-semibold"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Subscribing...
                </div>
              ) : (
                'Get AI Insights'
              )}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Join 10,000+ executives getting weekly AI insights. No spam,
              unsubscribe anytime.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-gray-400">
            <div className="flex items-center">
              <svg
                className="mr-1 h-3 w-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              GDPR Compliant
            </div>
            <div className="flex items-center">
              <svg
                className="mr-1 h-3 w-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              Secure
            </div>
          </div>
        </div>
      );
  }
}

export default Newsletter;
