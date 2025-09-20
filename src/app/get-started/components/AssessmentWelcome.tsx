'use client';

import { useState } from 'react';
import { Button, Badge, Card, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';
import { AssessmentState } from '../types/assessment';

interface AssessmentWelcomeProps {
  onStart: (userInfo: AssessmentState['userInfo']) => void;
}

export function AssessmentWelcome({ onStart }: AssessmentWelcomeProps) {
  const [userInfo, setUserInfo] = useState<AssessmentState['userInfo']>({
    name: '',
    email: '',
    company: '',
    role: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (
    field: keyof AssessmentState['userInfo'],
    value: string
  ) => {
    const newUserInfo = { ...userInfo, [field]: value };
    setUserInfo(newUserInfo);

    // Check if required fields are filled
    const isValid =
      newUserInfo.name.trim() !== '' &&
      newUserInfo.email.trim() !== '' &&
      newUserInfo.company.trim() !== '';
    setIsFormValid(isValid);
  };

  const handleStart = () => {
    if (isFormValid) {
      onStart(userInfo);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <Badge
          variant="outline"
          className="mb-6 border-blue-200 bg-blue-50 text-blue-700"
        >
          AI Readiness Assessment
        </Badge>

        <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl">
          Discover Your <span className="text-blue-700">AI Transformation</span>{' '}
          Readiness
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">
          Get personalized insights and strategic recommendations to accelerate
          your organization&apos;s AI transformation journey with our
          comprehensive readiness assessment.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-8 text-2xl font-semibold text-gray-900">
            What You&apos;ll Get
          </h2>

          <div className="space-y-6">
            {[
              {
                icon: '📊',
                title: 'Comprehensive Score',
                description:
                  'AI readiness score across 6 critical dimensions with detailed breakdown',
              },
              {
                icon: '🎯',
                title: 'Maturity Assessment',
                description:
                  'Your current AI maturity level and clear path to advancement',
              },
              {
                icon: '💡',
                title: 'Personalized Recommendations',
                description:
                  'Strategic insights tailored to your organization&apos;s specific needs',
              },
              {
                icon: '📈',
                title: 'Industry Benchmarking',
                description:
                  'Compare your readiness against industry leaders and peers',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-2xl">{benefit.icon}</div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-2xl font-semibold text-gray-900">
            Assessment Details
          </h2>

          <Card className="mb-6 border-blue-200 bg-blue-50 p-6">
            <CardContent className="p-0">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-700">
                    Duration
                  </span>
                  <span className="text-sm text-blue-600">10-15 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-700">
                    Questions
                  </span>
                  <span className="text-sm text-blue-600">
                    25 strategic questions
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-700">
                    Categories
                  </span>
                  <span className="text-sm text-blue-600">6 key areas</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-700">
                    Results
                  </span>
                  <span className="text-sm text-blue-600">
                    Instant insights
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 text-lg text-green-600">✓</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-green-800">
                  Free Assessment & Consultation
                </p>
                <p className="mt-1 text-xs text-green-700">
                  Includes 30-minute strategy call with our AI experts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Form */}
      <Card className="mx-auto max-w-4xl p-8">
        <CardContent className="p-0">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Get Started with Your Assessment
            </h3>
            <p className="text-sm text-gray-600">
              Please provide your information to receive personalized results
            </p>
          </div>

          <div className="space-y-6">
            {/* Row 1: Name and Email */}
            <div className="flex flex-col space-y-6 lg:flex-row lg:gap-6 lg:space-y-0">
              <div className="flex-1">
                <label className="mb-3 block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={e => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="mb-3 block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                  placeholder="your.email@company.com"
                  className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Row 2: Company and Role */}
            <div className="flex flex-col space-y-6 lg:flex-row lg:gap-6 lg:space-y-0">
              <div className="flex-1">
                <label className="mb-3 block text-sm font-medium text-gray-700">
                  Company *
                </label>
                <input
                  type="text"
                  value={userInfo.company}
                  onChange={e => handleInputChange('company', e.target.value)}
                  placeholder="Your company name"
                  className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="mb-3 block text-sm font-medium text-gray-700">
                  Role
                </label>
                <input
                  type="text"
                  value={userInfo.role}
                  onChange={e => handleInputChange('role', e.target.value)}
                  placeholder="CEO, CTO, Director, etc."
                  className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={handleStart}
                disabled={!isFormValid}
                variant="gradient"
                size="lg"
                className={cn(
                  'w-full font-semibold transition-all duration-200',
                  isFormValid
                    ? 'transform hover:scale-[1.02] hover:shadow-lg'
                    : 'cursor-not-allowed opacity-50'
                )}
              >
                Start AI Readiness Assessment
              </Button>

              <p className="mt-3 text-center text-xs text-gray-500">
                By proceeding, you agree to our Privacy Policy. Results will be
                emailed to you instantly.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
