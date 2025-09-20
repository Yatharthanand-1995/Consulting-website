'use client';

import { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/layout';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
} from '@/components/ui';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  role?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
  submittedAt: string;
}

export default function ContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/contact-submissions');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch submissions');
      }

      setSubmissions(data.submissions || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getBudgetColor = (budget: string) => {
    const budgetRanges = {
      '50k-100k': 'default',
      '100k-250k': 'secondary',
      '250k-500k': 'gradient',
      '500k-1m': 'success',
      '1m+': 'premium',
    };
    return budgetRanges[budget as keyof typeof budgetRanges] || 'default';
  };

  if (loading) {
    return (
      <div className="bg-background text-foreground min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading submissions...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-background text-foreground min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="mb-4 text-xl text-red-600">Error: {error}</div>
            <button
              onClick={fetchSubmissions}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-bold">
                Contact Form Submissions
              </h1>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  Total submissions: <strong>{submissions.length}</strong>
                </p>
                <button
                  onClick={fetchSubmissions}
                  className="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                >
                  🔄 Refresh
                </button>
              </div>
            </div>

            {submissions.length === 0 ? (
              <Card variant="outlined" padding="lg">
                <CardContent>
                  <div className="py-8 text-center">
                    <div className="mb-4 text-4xl">📭</div>
                    <h3 className="mb-2 text-xl font-semibold">
                      No submissions yet
                    </h3>
                    <p className="text-gray-600">
                      Contact form submissions will appear here once people
                      start using the form.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {submissions.map(submission => (
                  <Card key={submission.id} variant="elevated" padding="lg">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="mb-2 text-xl">
                            {submission.name} - {submission.company}
                          </CardTitle>
                          <div className="mb-2 flex flex-wrap gap-2">
                            <Badge variant="outline">
                              📧 {submission.email}
                            </Badge>
                            {submission.phone && (
                              <Badge variant="outline">
                                📞 {submission.phone}
                              </Badge>
                            )}
                            {submission.role && (
                              <Badge variant="secondary">
                                👤 {submission.role}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div>{formatDate(submission.submittedAt)}</div>
                          <div className="mt-1 text-xs">
                            ID: {submission.id}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {submission.projectType && (
                          <div>
                            <strong className="text-sm text-gray-600">
                              Project Type:
                            </strong>
                            <div className="mt-1">
                              <Badge variant="gradient">
                                {submission.projectType
                                  .replace('-', ' ')
                                  .replace(/\b\w/g, l => l.toUpperCase())}
                              </Badge>
                            </div>
                          </div>
                        )}

                        {submission.budget && (
                          <div>
                            <strong className="text-sm text-gray-600">
                              Budget:
                            </strong>
                            <div className="mt-1">
                              <Badge
                                variant={getBudgetColor(submission.budget)}
                              >
                                {submission.budget === '1m+'
                                  ? '$1M+'
                                  : submission.budget
                                      .replace('k', 'K')
                                      .replace('-', ' - $')}
                              </Badge>
                            </div>
                          </div>
                        )}

                        {submission.timeline && (
                          <div>
                            <strong className="text-sm text-gray-600">
                              Timeline:
                            </strong>
                            <div className="mt-1">
                              <Badge variant="outline">
                                ⏱️{' '}
                                {submission.timeline
                                  .replace('-', ' - ')
                                  .replace('+', '+')}
                              </Badge>
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <strong className="text-sm text-gray-600">
                          Message:
                        </strong>
                        <div className="mt-2 rounded-lg bg-gray-50 p-4">
                          <p className="whitespace-pre-wrap">
                            {submission.message}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
