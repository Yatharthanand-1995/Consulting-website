export interface AssessmentQuestion {
  id: string;
  categoryId: string;
  question: string;
  type: 'multiple-choice' | 'rating' | 'text';
  options?: string[];
  weight: number;
  description?: string;
}

export interface AssessmentCategory {
  id: string;
  name: string;
  description: string;
  maxScore: number;
  icon: string;
  color: string;
}

export interface AssessmentAnswer {
  questionId: string;
  value: string | number;
  score: number;
}

export interface AssessmentState {
  currentStep: number;
  totalSteps: number;
  answers: Record<string, AssessmentAnswer>;
  userInfo: {
    name: string;
    email: string;
    company: string;
    role: string;
  };
  isComplete: boolean;
}

export interface AssessmentScore {
  total: number;
  percentage: number;
  byCategory: Record<
    string,
    {
      score: number;
      maxScore: number;
      percentage: number;
    }
  >;
  maturityLevel: MaturityLevel;
}

export interface MaturityLevel {
  level: string;
  range: [number, number];
  description: string;
  color: string;
  icon: string;
  recommendations: string[];
  nextSteps: string[];
}

export interface AssessmentSubmission {
  id: string;
  submittedAt: string;
  userInfo: {
    name: string;
    email: string;
    company: string;
    role: string;
  };
  responses: Record<string, AssessmentAnswer>;
  scores: AssessmentScore;
  recommendations: string[];
}

export interface AssessmentProgress {
  currentCategory: string;
  completedCategories: string[];
  questionsAnswered: number;
  totalQuestions: number;
  percentage: number;
}
