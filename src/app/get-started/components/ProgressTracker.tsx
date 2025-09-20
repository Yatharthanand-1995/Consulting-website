'use client';

import { cn } from '@/lib/utils';
import { AssessmentProgress } from '../types/assessment';
import { assessmentCategories } from '../data/categories';

interface ProgressTrackerProps {
  progress: AssessmentProgress;
}

export function ProgressTracker({ progress }: ProgressTrackerProps) {
  return (
    <div className="space-y-4">
      {/* Overall Progress Bar */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-blue-900">
            AI Readiness Assessment
          </h3>
          <p className="text-sm text-blue-700">
            {progress.questionsAnswered} of {progress.totalQuestions} questions
            completed
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-700">
            {progress.percentage}%
          </div>
          <div className="text-xs text-blue-600">Complete</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-3 w-full overflow-hidden rounded-full bg-blue-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 ease-out"
          style={{ width: `${progress.percentage}%` }}
        />
      </div>

      {/* Category Steps - Simplified */}
      <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
        {assessmentCategories.map((category, index) => {
          const isCompleted = progress.completedCategories.includes(
            category.name
          );
          const isCurrent = progress.currentCategory === category.name;
          const isUpcoming = !isCompleted && !isCurrent;

          return (
            <div
              key={category.id}
              className="flex flex-col items-center text-center"
            >
              {/* Step Circle */}
              <div
                className={cn(
                  'mb-2 flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium',
                  isCompleted && 'bg-blue-700 text-white',
                  isCurrent &&
                    'border-2 border-blue-700 bg-blue-50 text-blue-700',
                  isUpcoming &&
                    'border border-gray-200 bg-gray-100 text-gray-400'
                )}
              >
                {isCompleted ? (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <span className="text-xs">{category.icon}</span>
                )}
              </div>

              {/* Step Label */}
              <div
                className={cn(
                  'text-xs font-medium',
                  isCompleted && 'text-blue-700',
                  isCurrent && 'text-blue-700',
                  isUpcoming && 'text-gray-500'
                )}
              >
                {category.name.split(' ')[0]}
              </div>
            </div>
          );
        })}
      </div>

      {/* Current Section Info */}
      {progress.currentCategory && (
        <div className="mt-6 rounded-lg border border-blue-200 bg-white p-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
              <span className="text-sm text-blue-700">
                {
                  assessmentCategories.find(
                    cat => cat.name === progress.currentCategory
                  )?.icon
                }
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                {progress.currentCategory}
              </h4>
              <p className="text-sm text-gray-600">
                {
                  assessmentCategories.find(
                    cat => cat.name === progress.currentCategory
                  )?.description
                }
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
