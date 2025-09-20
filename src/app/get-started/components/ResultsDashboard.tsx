'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { AssessmentScore, AssessmentState } from '../types/assessment';
import { assessmentCategories } from '../data/categories';

interface ResultsDashboardProps {
  score: AssessmentScore;
  recommendations: string[];
  userInfo: AssessmentState['userInfo'];
}

export function ResultsDashboard({
  score,
  recommendations,
  userInfo,
}: ResultsDashboardProps) {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'categories' | 'recommendations'
  >('overview');

  const getMaturityLevelColor = (level: string) => {
    const colorMap = {
      Exploring: 'bg-red-100 text-red-800 border-red-200',
      Planning: 'bg-orange-100 text-orange-800 border-orange-200',
      Implementing: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      Scaling: 'bg-blue-100 text-blue-800 border-blue-200',
      Optimizing: 'bg-green-100 text-green-800 border-green-200',
    };
    return colorMap[level as keyof typeof colorMap] || colorMap.Exploring;
  };

  const getCategoryColorClasses = (color: string, percentage: number) => {
    const intensity =
      percentage >= 80
        ? '600'
        : percentage >= 60
          ? '500'
          : percentage >= 40
            ? '400'
            : '300';
    const bgIntensity =
      percentage >= 80 ? '100' : percentage >= 60 ? '50' : '25';

    const colorMap = {
      blue: `text-blue-${intensity} bg-blue-${bgIntensity}`,
      indigo: `text-indigo-${intensity} bg-indigo-${bgIntensity}`,
      purple: `text-purple-${intensity} bg-purple-${bgIntensity}`,
      green: `text-green-${intensity} bg-green-${bgIntensity}`,
      orange: `text-orange-${intensity} bg-orange-${bgIntensity}`,
      yellow: `text-yellow-${intensity} bg-yellow-${bgIntensity}`,
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Success Header */}
      <div className="mb-12 text-center">
        <div className="mb-6 text-6xl">🎉</div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Assessment Complete!
        </h1>
        <p className="mb-6 text-xl text-gray-600">
          Thank you, {userInfo.name}. Here are your personalized AI readiness
          insights.
        </p>

        {/* Overall Score Card */}
        <Card className="mx-auto max-w-md border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
          <CardContent className="p-0 text-center">
            <div className="mb-4">
              <div className="mb-2 text-5xl font-bold text-blue-700">
                {score.percentage}%
              </div>
              <div className="text-sm font-medium tracking-wide text-blue-600 uppercase">
                AI Readiness Score
              </div>
            </div>

            <Badge
              className={cn(
                'border-2 px-4 py-2 text-sm font-semibold',
                getMaturityLevelColor(score.maturityLevel.level)
              )}
            >
              <span className="mr-2 text-lg">{score.maturityLevel.icon}</span>
              {score.maturityLevel.level}
            </Badge>

            <p className="mt-4 text-sm text-gray-600">
              {score.maturityLevel.description}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8 flex justify-center">
        <div className="flex rounded-lg bg-gray-100 p-1">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'categories', label: 'Category Breakdown', icon: '📈' },
            { id: 'recommendations', label: 'Recommendations', icon: '💡' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(
                  tab.id as 'overview' | 'categories' | 'recommendations'
                )
              }
              className={cn(
                'flex items-center space-x-2 rounded-md px-6 py-3 text-sm font-medium transition-all duration-200',
                activeTab === tab.id
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Key Insights */}
          <Card className="p-6">
            <CardHeader className="mb-6 p-0">
              <CardTitle className="text-xl">Key Insights</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 text-3xl font-bold text-green-600">
                    {
                      Object.values(score.byCategory).filter(
                        cat => cat.percentage >= 70
                      ).length
                    }
                  </div>
                  <div className="text-sm text-gray-600">Strong Categories</div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 text-3xl font-bold text-orange-600">
                    {
                      Object.values(score.byCategory).filter(
                        cat => cat.percentage < 50
                      ).length
                    }
                  </div>
                  <div className="text-sm text-gray-600">
                    Areas for Improvement
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 text-3xl font-bold text-blue-600">
                    {Math.round(score.percentage / 20) + 1}
                  </div>
                  <div className="text-sm text-gray-600">
                    Months to Next Level
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Categories Overview */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assessmentCategories.map(category => {
              const categoryScore = score.byCategory[category.id];
              return (
                <Card key={category.id} className="p-4">
                  <CardContent className="p-0">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{category.icon}</span>
                        <span className="text-sm font-semibold text-gray-900">
                          {category.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">
                          {Math.round(categoryScore.percentage)}%
                        </div>
                      </div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className={cn(
                          'h-2 rounded-full transition-all duration-500',
                          categoryScore.percentage >= 70
                            ? 'bg-green-500'
                            : categoryScore.percentage >= 50
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                        )}
                        style={{ width: `${categoryScore.percentage}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Categories Tab */}
      {activeTab === 'categories' && (
        <div className="space-y-6">
          {assessmentCategories.map(category => {
            const categoryScore = score.byCategory[category.id];
            return (
              <Card key={category.id} className="p-6">
                <CardHeader className="mb-4 p-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <CardTitle className="text-lg">
                          {category.name}
                        </CardTitle>
                        <p className="text-sm text-gray-600">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {Math.round(categoryScore.percentage)}%
                      </div>
                      <div className="text-xs text-gray-500">
                        {categoryScore.score} / {categoryScore.maxScore} points
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-3 w-full rounded-full bg-gray-200">
                    <div
                      className={cn(
                        'h-3 rounded-full transition-all duration-700',
                        categoryScore.percentage >= 80
                          ? 'bg-green-500'
                          : categoryScore.percentage >= 60
                            ? 'bg-blue-500'
                            : categoryScore.percentage >= 40
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                      )}
                      style={{ width: `${categoryScore.percentage}%` }}
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-600">
                      {categoryScore.percentage >= 80
                        ? 'Excellent! This is a strong foundation for AI transformation.'
                        : categoryScore.percentage >= 60
                          ? 'Good progress. Some enhancements will accelerate your AI journey.'
                          : categoryScore.percentage >= 40
                            ? 'Moderate readiness. Focused improvements needed.'
                            : 'Significant opportunity for improvement. Priority area for investment.'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Recommendations Tab */}
      {activeTab === 'recommendations' && (
        <div className="space-y-6">
          <Card className="p-6">
            <CardHeader className="mb-6 p-0">
              <CardTitle className="text-xl">
                Strategic Recommendations
              </CardTitle>
              <p className="text-gray-600">
                Personalized action items to accelerate your AI transformation
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4">
                {recommendations.map((recommendation, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 rounded-lg border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="leading-relaxed text-gray-800">
                      {recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="mb-6 p-0">
              <CardTitle className="text-xl">Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4">
                {score.maturityLevel.nextSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 rounded-lg border border-green-200 bg-green-50 p-4"
                  >
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                      ✓
                    </div>
                    <p className="leading-relaxed text-gray-800">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <Card className="mx-auto max-w-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <CardContent className="p-0">
            <h3 className="mb-4 text-2xl font-bold">
              Ready to Transform Your Business?
            </h3>
            <p className="mb-6 leading-relaxed text-blue-100">
              Schedule a free 30-minute strategy call with our AI experts to
              discuss your assessment results and create a personalized
              transformation roadmap.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="secondary"
                size="lg"
                className="w-full font-semibold sm:w-auto"
              >
                📅 Schedule Strategy Call
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-white text-white hover:bg-white hover:text-blue-600 sm:w-auto"
              >
                📄 Download Full Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
