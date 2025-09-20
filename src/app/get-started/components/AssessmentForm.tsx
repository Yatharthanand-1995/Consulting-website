'use client';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import {
  AssessmentCategory,
  AssessmentQuestion,
  AssessmentAnswer,
} from '../types/assessment';

interface AssessmentFormProps {
  category: AssessmentCategory;
  questions: AssessmentQuestion[];
  answers: Record<string, AssessmentAnswer>;
  onAnswerChange: (questionId: string, value: string | number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onComplete: () => void;
  canProceed: boolean;
  isLastStep: boolean;
}

export function AssessmentForm({
  category,
  questions,
  answers,
  onAnswerChange,
  onNext,
  onPrevious,
  onComplete,
  canProceed,
  isLastStep,
}: AssessmentFormProps) {
  const getCategoryColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-200 text-blue-700',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
      purple: 'bg-purple-50 border-purple-200 text-purple-700',
      green: 'bg-green-50 border-green-200 text-green-700',
      orange: 'bg-orange-50 border-orange-200 text-orange-700',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getOptionValue = (
    questionIndex: number,
    optionIndex: number
  ): string => {
    return optionIndex.toString();
  };

  const handleOptionSelect = (
    question: AssessmentQuestion,
    optionIndex: number
  ) => {
    onAnswerChange(question.id, optionIndex.toString());
  };

  const getSelectedOption = (questionId: string): number | null => {
    const answer = answers[questionId];
    if (!answer) return null;
    const value = parseInt(answer.value.toString());
    return isNaN(value) ? null : value;
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Category Header */}
      <div className="mb-8 text-center">
        <div
          className={cn(
            'mb-6 inline-flex items-center space-x-3 rounded-full border-2 px-6 py-3',
            getCategoryColorClasses(category.color)
          )}
        >
          <span className="text-2xl">{category.icon}</span>
          <span className="text-lg font-semibold">{category.name}</span>
        </div>

        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          {category.name}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          {category.description}
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {questions.map((question, questionIndex) => {
          const selectedOption = getSelectedOption(question.id);

          return (
            <Card key={question.id} className="p-6">
              <CardHeader className="mb-6 p-0">
                <CardTitle className="text-lg leading-relaxed text-gray-900">
                  {questionIndex + 1}. {question.question}
                </CardTitle>
                {question.description && (
                  <p className="mt-2 text-sm text-gray-600">
                    {question.description}
                  </p>
                )}
              </CardHeader>

              <CardContent className="p-0">
                {question.type === 'multiple-choice' && question.options && (
                  <div className="space-y-3">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() =>
                          handleOptionSelect(question, optionIndex)
                        }
                        className={cn(
                          'w-full rounded-lg border-2 p-4 text-left transition-all duration-200',
                          'hover:border-blue-300 hover:bg-blue-50',
                          selectedOption === optionIndex
                            ? 'border-blue-600 bg-blue-50 shadow-md'
                            : 'border-gray-200 bg-white'
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={cn(
                              'flex h-5 w-5 items-center justify-center rounded-full border-2',
                              selectedOption === optionIndex
                                ? 'border-blue-600 bg-blue-600'
                                : 'border-gray-300'
                            )}
                          >
                            {selectedOption === optionIndex && (
                              <div className="h-2 w-2 rounded-full bg-white" />
                            )}
                          </div>
                          <span
                            className={cn(
                              'text-sm leading-relaxed',
                              selectedOption === optionIndex
                                ? 'font-medium text-blue-900'
                                : 'text-gray-700'
                            )}
                          >
                            {option}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
        <Button variant="outline" onClick={onPrevious} className="px-6">
          ← Previous
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            {questions.filter(q => answers[q.id]).length} of {questions.length}{' '}
            questions answered
          </p>
        </div>

        <Button
          variant="gradient"
          onClick={isLastStep ? onComplete : onNext}
          disabled={!canProceed}
          className={cn(
            'px-8 font-semibold',
            canProceed
              ? 'transform hover:scale-[1.02] hover:shadow-lg'
              : 'cursor-not-allowed opacity-50'
          )}
        >
          {isLastStep ? 'Complete Assessment' : 'Next →'}
        </Button>
      </div>

      {/* Help Text */}
      {!canProceed && (
        <div className="mt-4 text-center">
          <p className="text-sm text-orange-600">
            Please answer all questions to continue
          </p>
        </div>
      )}
    </div>
  );
}
