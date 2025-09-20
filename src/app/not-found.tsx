'use client';

import { useRouter } from 'next/navigation';
import { Button, Badge } from '@/components/ui';
import { Header, Footer } from '@/components/layout';

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  const handleGoBack = () => {
    router.back();
  };

  const popularPages = [
    { name: 'AI Strategy Consulting', href: '/services/ai-strategy' },
    { name: 'Machine Learning Solutions', href: '/services/machine-learning' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Industries Overview', href: '/industries' },
    { name: 'Research & Insights', href: '/research' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Error Code */}
          <div className="mb-8">
            <div className="mb-4 text-8xl font-bold text-blue-600 md:text-9xl">
              404
            </div>
            <Badge
              variant="outline"
              className="mb-6 border-blue-200 bg-blue-50 text-blue-700"
            >
              Page Not Found
            </Badge>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              We can&apos;t find that page
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
              Sorry, the page you are looking for doesn&apos;t exist or has been
              moved. Let&apos;s get you back on track to exploring our AI
              consulting solutions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGoHome}
              className="font-semibold"
            >
              Go to Homepage
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleGoBack}
              className="font-semibold"
            >
              ← Go Back
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Popular Pages
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {popularPages.map(page => (
                <button
                  key={page.href}
                  onClick={() => router.push(page.href)}
                  className="group rounded-lg border border-gray-200 p-4 text-left transition-all duration-200 hover:border-blue-300 hover:bg-blue-50"
                >
                  <div className="font-medium text-blue-600 group-hover:text-blue-700">
                    {page.name}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">{page.href}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="mx-auto mt-16 max-w-2xl rounded-lg bg-gray-50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Need Help?
            </h3>
            <p className="mb-4 text-gray-600">
              If you believe this is an error, please contact our support team.
            </p>
            <Button
              variant="outline"
              onClick={() => router.push('/contact')}
              className="font-medium"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
