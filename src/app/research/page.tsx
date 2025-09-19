'use client';

import { useState } from 'react';
import { Badge, Card, CardContent, CardHeader, CardTitle, InteractiveButton } from '@/components/ui';
import { cn } from '@/lib/utils';

const researchCategories = [
  { id: 'all', label: 'All Research', count: 9 },
  { id: 'Industry Report', label: 'Industry Reports', count: 3 },
  { id: 'White Paper', label: 'White Papers', count: 2 },
  { id: 'Technical Paper', label: 'Technical Papers', count: 3 },
  { id: 'Case Study', label: 'Case Studies', count: 1 },
];

const featuredResearch = [
  {
    id: 'enterprise-ai-strategy-2024',
    title: 'Enterprise AI Strategy Implementation: A Systematic Review',
    authors: ['Dr. Saurabh Gupta', 'Himanshu Chauhan', 'Research Team'],
    abstract: 'This comprehensive meta-analysis examines 200+ enterprise AI implementations across Fortune 500 companies, identifying key success factors, implementation patterns, and ROI drivers in AI transformation initiatives.',
    category: 'Industry Report',
    publishDate: 'December 2024',
    readTime: '25 min read',
    tags: ['AI Strategy', 'Enterprise', 'Implementation', 'ROI'],
    featured: true,
    citationCount: 47,
    downloadCount: '2.3k',
  },
  {
    id: 'generative-ai-enterprise-benchmarks',
    title: 'Generative AI in Enterprise: Performance Benchmarks and Best Practices',
    authors: ['Hitesh Gautam', 'Yatharth Anand', 'Dr. Saurabh Gupta'],
    abstract: 'An empirical study comparing LLM performance across enterprise use cases, featuring original benchmarks, cost-benefit analysis, and implementation guidelines for generative AI deployment.',
    category: 'Technical Paper',
    publishDate: 'November 2024',
    readTime: '30 min read',
    tags: ['Generative AI', 'LLM', 'Benchmarks', 'Enterprise'],
    featured: true,
    citationCount: 23,
    downloadCount: '1.8k',
  },
  {
    id: 'responsible-ai-governance-framework',
    title: 'Responsible AI Governance: A Practical Framework for Enterprise Implementation',
    authors: ['Research Team', 'Dr. Saurabh Gupta'],
    abstract: 'A comprehensive framework for implementing ethical AI practices in enterprise environments, based on analysis of regulatory requirements and industry best practices across 50+ organizations.',
    category: 'White Paper',
    publishDate: 'October 2024',
    readTime: '22 min read',
    tags: ['AI Ethics', 'Governance', 'Compliance', 'Framework'],
    featured: true,
    citationCount: 34,
    downloadCount: '3.1k',
  },
];

const recentResearch = [
  {
    id: 'ai-financial-services-2024',
    title: 'AI in Financial Services: Regulatory Compliance and Risk Management',
    authors: ['Himanshu Chauhan', 'Industry Experts'],
    category: 'Industry Report',
    publishDate: 'September 2024',
    readTime: '18 min read',
    tags: ['Financial Services', 'Compliance', 'Risk Management'],
  },
  {
    id: 'manufacturing-ai-industry40',
    title: 'Manufacturing AI: Industry 4.0 Implementation Patterns',
    authors: ['Yatharth Anand', 'Manufacturing Research Group'],
    category: 'Case Study',
    publishDate: 'August 2024',
    readTime: '15 min read',
    tags: ['Manufacturing', 'Industry 4.0', 'IoT'],
  },
  {
    id: 'healthcare-ai-clinical-validation',
    title: 'Healthcare AI: Clinical Validation and Patient Outcomes',
    authors: ['Dr. Saurabh Gupta', 'Healthcare Research Team'],
    category: 'Technical Paper',
    publishDate: 'July 2024',
    readTime: '20 min read',
    tags: ['Healthcare', 'Clinical AI', 'Patient Outcomes'],
  },
  {
    id: 'ai-roi-measurement-methodologies',
    title: 'AI ROI Measurement: Methodologies and Metrics Framework',
    authors: ['Research Team', 'Hitesh Gautam'],
    category: 'White Paper',
    publishDate: 'June 2024',
    readTime: '16 min read',
    tags: ['ROI', 'Metrics', 'Business Value'],
  },
  {
    id: 'llm-performance-benchmarks',
    title: 'Large Language Model Performance: Enterprise Benchmarking Study',
    authors: ['Yatharth Anand', 'Dr. Saurabh Gupta'],
    category: 'Technical Paper',
    publishDate: 'May 2024',
    readTime: '24 min read',
    tags: ['LLM', 'Performance', 'Benchmarking'],
  },
  {
    id: 'retail-ai-transformation',
    title: 'Retail AI Transformation: Customer Experience and Operations',
    authors: ['Himanshu Chauhan', 'Retail Innovation Team'],
    category: 'Industry Report',
    publishDate: 'April 2024',
    readTime: '19 min read',
    tags: ['Retail', 'Customer Experience', 'Operations'],
  },
];

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all research papers
  const allResearch = [...featuredResearch, ...recentResearch];

  // Filter research based on selected category
  const filteredResearch = selectedCategory === 'all'
    ? allResearch
    : allResearch.filter(paper => paper.category === selectedCategory);

  // Split filtered research into featured and recent
  const filteredFeatured = featuredResearch.filter(paper =>
    selectedCategory === 'all' || paper.category === selectedCategory
  );

  const filteredRecent = recentResearch.filter(paper =>
    selectedCategory === 'all' || paper.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
          Academic Research
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Research Publications
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Peer-reviewed research, industry reports, and technical papers advancing
          the field of enterprise AI implementation with rigorous academic standards.
        </p>
      </div>

      {/* Research Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {researchCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-medium transition-all duration-200",
              selectedCategory === category.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-blue-200 hover:text-blue-600"
            )}
          >
            {category.label}
            <span className="ml-2 text-xs opacity-75">({category.count})</span>
          </button>
        ))}
      </div>

      {/* Featured Research */}
      {(selectedCategory === 'all' || filteredFeatured.length > 0) && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {selectedCategory === 'all' ? 'Featured Research' : `Featured ${researchCategories.find(cat => cat.id === selectedCategory)?.label || 'Research'}`}
          </h2>
          <div className="space-y-8">
            {(selectedCategory === 'all' ? featuredResearch : filteredFeatured).map((paper, index) => (
            <Card key={paper.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {paper.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{paper.readTime}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{paper.publishDate}</span>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                      {paper.title}
                    </h3>

                    <div className="text-gray-600 mb-3">
                      <span className="font-medium">Authors:</span> {paper.authors.join(', ')}
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      {paper.abstract}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span>📊 {paper.citationCount} citations</span>
                      <span>⬇️ {paper.downloadCount} downloads</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:min-w-[200px]">
                    <InteractiveButton
                      variant="primary"
                      size="sm"
                      className="w-full"
                      ripple
                      onClick={() => window.location.href = `/research/${paper.id}`}
                    >
                      Read Paper
                    </InteractiveButton>
                    <InteractiveButton
                      variant="outline"
                      size="sm"
                      className="w-full"
                      ripple
                    >
                      Download PDF
                    </InteractiveButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </section>
      )}

      {/* Recent Research */}
      {(selectedCategory === 'all' || filteredRecent.length > 0) && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {selectedCategory === 'all' ? 'Recent Publications' : `Recent ${researchCategories.find(cat => cat.id === selectedCategory)?.label || 'Publications'}`}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(selectedCategory === 'all' ? recentResearch : filteredRecent).map((paper) => (
            <Card key={paper.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {paper.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{paper.readTime}</span>
                </div>
                <CardTitle className="text-lg leading-tight hover:text-blue-600 cursor-pointer">
                  {paper.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Authors:</span> {paper.authors.join(', ')}
                </div>
                <div className="text-sm text-gray-500 mb-4">{paper.publishDate}</div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {paper.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <InteractiveButton
                  variant="outline"
                  size="sm"
                  className="w-full"
                  ripple
                  onClick={() => window.location.href = `/research/${paper.id}`}
                >
                  Read Paper
                </InteractiveButton>
              </CardContent>
            </Card>
            ))}
          </div>
        </section>
      )}

      {/* Research Impact */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold text-blue-600">150+</div>
            <div className="text-sm text-gray-600">Total Citations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">9</div>
            <div className="text-sm text-gray-600">Published Papers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">25k+</div>
            <div className="text-sm text-gray-600">Downloads</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">8</div>
            <div className="text-sm text-gray-600">Industry Awards</div>
          </div>
        </div>
      </section>
    </div>
  );
}