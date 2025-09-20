import { AssessmentAnswer, AssessmentScore } from '../types/assessment';
import { assessmentCategories } from './categories';
import { assessmentQuestions } from './questions';
import { maturityLevels } from './maturity-levels';

export function calculateScore(
  answers: Record<string, AssessmentAnswer>
): AssessmentScore {
  // Calculate total score and by category
  let totalScore = 0;
  const categoryScores: Record<
    string,
    { score: number; maxScore: number; percentage: number }
  > = {};

  // Initialize category scores
  assessmentCategories.forEach(category => {
    categoryScores[category.id] = {
      score: 0,
      maxScore: category.maxScore,
      percentage: 0,
    };
  });

  // Calculate scores for each answer
  Object.values(answers).forEach(answer => {
    const question = assessmentQuestions.find(q => q.id === answer.questionId);
    if (question) {
      const score = calculateQuestionScore(answer.value, question.weight);
      totalScore += score;
      categoryScores[question.categoryId].score += score;
    }
  });

  // Calculate category percentages
  Object.keys(categoryScores).forEach(categoryId => {
    const category = categoryScores[categoryId];
    category.percentage =
      category.maxScore > 0 ? (category.score / category.maxScore) * 100 : 0;
  });

  // Calculate overall percentage
  const maxTotalScore = assessmentCategories.reduce(
    (sum, cat) => sum + cat.maxScore,
    0
  );
  const percentage = maxTotalScore > 0 ? (totalScore / maxTotalScore) * 100 : 0;

  // Determine maturity level
  const maturityLevel =
    maturityLevels.find(
      level => percentage >= level.range[0] && percentage <= level.range[1]
    ) || maturityLevels[0];

  return {
    total: totalScore,
    percentage: Math.round(percentage),
    byCategory: categoryScores,
    maturityLevel,
  };
}

function calculateQuestionScore(
  value: string | number,
  weight: number
): number {
  // For multiple choice questions, value is the index (0-4)
  // Convert to score: 0 = 0 points, 1 = 25%, 2 = 50%, 3 = 75%, 4 = 100%
  if (typeof value === 'string') {
    const index = parseInt(value);
    if (isNaN(index)) return 0;
    return (index / 4) * weight;
  }

  // For rating questions, value is already a percentage
  if (typeof value === 'number') {
    return (value / 100) * weight;
  }

  return 0;
}

export function getRecommendationsForScore(score: AssessmentScore): string[] {
  const recommendations: string[] = [];

  // Add maturity level recommendations
  recommendations.push(...score.maturityLevel.recommendations);

  // Add category-specific recommendations for low-scoring areas
  Object.entries(score.byCategory).forEach(([categoryId, categoryScore]) => {
    const category = assessmentCategories.find(cat => cat.id === categoryId);
    if (category && categoryScore.percentage < 60) {
      switch (categoryId) {
        case 'strategy':
          recommendations.push(
            'Develop a comprehensive AI strategy with executive sponsorship'
          );
          break;
        case 'data':
          recommendations.push(
            'Improve data quality and implement governance frameworks'
          );
          break;
        case 'technical':
          recommendations.push(
            'Invest in technical infrastructure and AI capabilities'
          );
          break;
        case 'organizational':
          recommendations.push(
            'Build AI skills and change management capabilities'
          );
          break;
        case 'governance':
          recommendations.push('Establish AI ethics and compliance frameworks');
          break;
        case 'culture':
          recommendations.push('Foster innovation culture and AI acceptance');
          break;
      }
    }
  });

  return [...new Set(recommendations)]; // Remove duplicates
}
