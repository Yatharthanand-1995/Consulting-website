'use client';

import { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import { AssessmentWelcome } from './components/AssessmentWelcome';
import { AssessmentForm } from './components/AssessmentForm';
import { ResultsDashboard } from './components/ResultsDashboard';
import { ProgressTracker } from './components/ProgressTracker';
import { AssessmentState, AssessmentAnswer } from './types/assessment';
import { calculateScore, getRecommendationsForScore } from './data/scoring';
import { assessmentQuestions } from './data/questions';
import { assessmentCategories } from './data/categories';

export default function GetStartedPage() {
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    currentStep: 0, // 0 = welcome, 1+ = questions, final = results
    totalSteps: assessmentCategories.length + 2, // welcome + categories + results
    answers: {},
    userInfo: {
      name: '',
      email: '',
      company: '',
      role: '',
    },
    isComplete: false,
  });

  const handleStartAssessment = (userInfo: AssessmentState['userInfo']) => {
    setAssessmentState(prev => ({
      ...prev,
      userInfo,
      currentStep: 1,
    }));
  };

  const handleAnswerChange = (questionId: string, value: string | number) => {
    const question = assessmentQuestions.find(q => q.id === questionId);
    if (!question) return;

    const answer: AssessmentAnswer = {
      questionId,
      value,
      score: 0, // Will be calculated in scoring
    };

    setAssessmentState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer,
      },
    }));
  };

  const handleNextStep = () => {
    setAssessmentState(prev => ({
      ...prev,
      currentStep: prev.currentStep + 1,
    }));
  };

  const handlePreviousStep = () => {
    setAssessmentState(prev => ({
      ...prev,
      currentStep: Math.max(0, prev.currentStep - 1),
    }));
  };

  const handleCompleteAssessment = () => {
    setAssessmentState(prev => ({
      ...prev,
      isComplete: true,
      currentStep: prev.totalSteps - 1,
    }));
  };

  const getProgress = () => {
    const totalQuestions = assessmentQuestions.length;
    const answeredQuestions = Object.keys(assessmentState.answers).length;

    return {
      currentCategory:
        assessmentState.currentStep > 0 &&
        assessmentState.currentStep <= assessmentCategories.length
          ? assessmentCategories[assessmentState.currentStep - 1]?.name || ''
          : '',
      completedCategories: assessmentCategories
        .slice(0, Math.max(0, assessmentState.currentStep - 1))
        .map(cat => cat.name),
      questionsAnswered: answeredQuestions,
      totalQuestions,
      percentage: Math.round(
        (assessmentState.currentStep / (assessmentState.totalSteps - 1)) * 100
      ),
    };
  };

  const getCurrentCategoryQuestions = () => {
    if (
      assessmentState.currentStep === 0 ||
      assessmentState.currentStep >= assessmentState.totalSteps - 1
    ) {
      return [];
    }

    const currentCategory =
      assessmentCategories[assessmentState.currentStep - 1];
    return assessmentQuestions.filter(q => q.categoryId === currentCategory.id);
  };

  const isCurrentStepComplete = () => {
    const currentQuestions = getCurrentCategoryQuestions();
    return currentQuestions.every(
      q => assessmentState.answers[q.id] !== undefined
    );
  };

  const score = assessmentState.isComplete
    ? calculateScore(assessmentState.answers)
    : null;
  const recommendations = score ? getRecommendationsForScore(score) : [];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Progress Tracker - Show after welcome */}
        {assessmentState.currentStep > 0 && !assessmentState.isComplete && (
          <section className="border-b border-blue-200 bg-blue-50 py-4">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
              <ProgressTracker progress={getProgress()} />
            </div>
          </section>
        )}

        <section className="py-12">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            {/* Welcome Step */}
            {assessmentState.currentStep === 0 && (
              <AssessmentWelcome onStart={handleStartAssessment} />
            )}

            {/* Assessment Form Steps */}
            {assessmentState.currentStep > 0 &&
              assessmentState.currentStep <= assessmentCategories.length &&
              !assessmentState.isComplete && (
                <AssessmentForm
                  category={
                    assessmentCategories[assessmentState.currentStep - 1]
                  }
                  questions={getCurrentCategoryQuestions()}
                  answers={assessmentState.answers}
                  onAnswerChange={handleAnswerChange}
                  onNext={handleNextStep}
                  onPrevious={handlePreviousStep}
                  onComplete={handleCompleteAssessment}
                  canProceed={isCurrentStepComplete()}
                  isLastStep={
                    assessmentState.currentStep === assessmentCategories.length
                  }
                />
              )}

            {/* Results Dashboard */}
            {assessmentState.isComplete && score && (
              <ResultsDashboard
                score={score}
                recommendations={recommendations}
                userInfo={assessmentState.userInfo}
              />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
