'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Badge, Card, CardContent } from '@/components/ui';
import { AcademicCitation, type Citation } from './AcademicCitation';

export interface ResearchSection {
  id: string;
  title: string;
  content: string;
  subsections?: ResearchSection[];
}

export interface ResearchAuthor {
  name: string;
  affiliation: string;
  email?: string;
  orcid?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: ResearchAuthor[];
  abstract: string;
  keywords: string[];
  publishDate: string;
  category: string;
  readTime: string;
  downloadUrl?: string;
  doi?: string;
  sections: ResearchSection[];
  references: Citation[];
  acknowledgments?: string;
}

interface ResearchPaperProps {
  paper: ResearchPaper;
  className?: string;
}

export function ResearchPaper({ paper, className }: ResearchPaperProps) {
  const [activeSection, setActiveSection] = useState<string>('abstract');
  const [showReferences, setShowReferences] = useState(false);

  const renderContent = (
    content: string,
    references: Citation[]
  ): JSX.Element => {
    // Simple citation replacement - in a real implementation, you'd parse more sophisticated citation formats
    let processedContent = content;
    const citationCounter = 1;

    references.forEach((citation, index) => {
      const citationRegex = new RegExp(`\\[${citation.id}\\]`, 'g');
      processedContent = processedContent.replace(
        citationRegex,
        `<CITATION_${index}>`
      );
    });

    const parts = processedContent.split(/(<CITATION_\d+>)/);

    return (
      <div className="prose prose-gray max-w-none">
        {parts.map((part, index) => {
          const citationMatch = part.match(/^<CITATION_(\d+)>$/);
          if (citationMatch) {
            const citationIndex = parseInt(citationMatch[1]);
            const citation = references[citationIndex];
            return (
              <AcademicCitation
                key={`citation-${index}`}
                citation={citation}
                citationNumber={citationIndex + 1}
                inline
              />
            );
          }
          return (
            <span key={index} dangerouslySetInnerHTML={{ __html: part }} />
          );
        })}
      </div>
    );
  };

  const tableOfContents = [
    { id: 'abstract', title: 'Abstract' },
    ...paper.sections.map(section => ({
      id: section.id,
      title: section.title,
    })),
    { id: 'references', title: 'References' },
  ];

  return (
    <div className={cn('mx-auto max-w-6xl', className)}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Table of Contents - Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h3 className="mb-4 font-semibold text-gray-900">Contents</h3>
              <nav className="space-y-2">
                {tableOfContents.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      'w-full rounded-md px-3 py-2 text-left text-sm transition-colors',
                      activeSection === item.id
                        ? 'bg-blue-100 font-medium text-blue-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    )}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>

              {paper.downloadUrl && (
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <a
                    href={paper.downloadUrl}
                    download
                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download PDF
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-8">
              {/* Paper Header */}
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-blue-200 bg-blue-50 text-blue-700"
                  >
                    {paper.category}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {paper.readTime}
                  </span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">
                    {paper.publishDate}
                  </span>
                </div>

                <h1 className="mb-6 text-3xl leading-tight font-bold text-gray-900">
                  {paper.title}
                </h1>

                <div className="mb-6 space-y-2">
                  {paper.authors.map((author, index) => (
                    <div key={index} className="text-gray-700">
                      <span className="font-medium">{author.name}</span>
                      <span className="ml-2 text-gray-500">
                        {author.affiliation}
                      </span>
                      {author.orcid && (
                        <a
                          href={`https://orcid.org/${author.orcid}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-xs text-blue-600 hover:text-blue-800"
                        >
                          ORCID: {author.orcid}
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {paper.doi && (
                  <div className="mb-4 text-sm text-gray-600">
                    <strong>DOI:</strong>{' '}
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      {paper.doi}
                    </a>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content Sections */}
              <div className="space-y-8">
                {/* Abstract */}
                {activeSection === 'abstract' && (
                  <section>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                      Abstract
                    </h2>
                    <div className="rounded-lg bg-gray-50 p-6">
                      <p className="leading-relaxed text-gray-700">
                        {paper.abstract}
                      </p>
                    </div>
                  </section>
                )}

                {/* Main Sections */}
                {paper.sections.map(
                  section =>
                    activeSection === section.id && (
                      <section key={section.id}>
                        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                          {section.title}
                        </h2>
                        {renderContent(section.content, paper.references)}

                        {section.subsections && (
                          <div className="mt-6 space-y-6">
                            {section.subsections.map(subsection => (
                              <div key={subsection.id}>
                                <h3 className="mb-3 text-xl font-medium text-gray-900">
                                  {subsection.title}
                                </h3>
                                {renderContent(
                                  subsection.content,
                                  paper.references
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </section>
                    )
                )}

                {/* References */}
                {activeSection === 'references' && (
                  <section>
                    <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                      References
                    </h2>
                    <div className="space-y-4">
                      {paper.references.map((citation, index) => (
                        <AcademicCitation
                          key={citation.id}
                          citation={citation}
                          citationNumber={index + 1}
                          inline={false}
                        />
                      ))}
                    </div>
                  </section>
                )}

                {/* Acknowledgments */}
                {paper.acknowledgments && activeSection === 'references' && (
                  <section className="mt-8 border-t border-gray-200 pt-8">
                    <h3 className="mb-3 text-lg font-medium text-gray-900">
                      Acknowledgments
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      {paper.acknowledgments}
                    </p>
                  </section>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
