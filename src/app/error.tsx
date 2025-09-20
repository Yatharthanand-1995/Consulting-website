'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Badge } from '@/components/ui';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  const handleGoHome = () => {
    router.push('/');
  };

  const handleTryAgain = () => {
    reset();
  };

  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-6 py-12">
      <div className="mx-auto max-w-2xl text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-12 w-12 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <Badge
            variant="outline"
            className="border-red-200 bg-red-50 text-red-700"
          >
            Application Error
          </Badge>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Something went wrong
          </h1>
          <p className="mb-6 text-xl leading-relaxed text-gray-600">
            We apologize for the inconvenience. An unexpected error has
            occurred. Our team has been notified and is working to resolve the
            issue.
          </p>

          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-6 rounded-lg bg-gray-50 p-4 text-left">
              <h3 className="mb-2 text-sm font-medium text-gray-900">
                Error Details:
              </h3>
              <pre className="overflow-auto text-xs text-red-600">
                {error.message}
              </pre>
              {error.digest && (
                <p className="mt-2 text-xs text-gray-500">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            variant="primary"
            size="lg"
            onClick={handleTryAgain}
            className="font-semibold"
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleGoHome}
            className="font-semibold"
          >
            Go to Homepage
          </Button>
        </div>

        {/* Help Section */}
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-2 text-lg font-semibold text-blue-900">
            Need Immediate Assistance?
          </h3>
          <p className="mb-4 text-blue-700">
            If this error persists, please contact our support team with the
            error details.
          </p>
          <Button
            variant="outline"
            onClick={() => router.push('/contact')}
            className="border-blue-300 font-medium text-blue-700 hover:bg-blue-100"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
