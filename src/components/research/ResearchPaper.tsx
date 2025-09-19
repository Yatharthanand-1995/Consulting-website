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

  const renderContent = (content: string, references: Citation[]): JSX.Element => {
    // Simple citation replacement - in a real implementation, you'd parse more sophisticated citation formats
    let processedContent = content;
    let citationCounter = 1;

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
          return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
        })}
      </div>
    );
  };

  const tableOfContents = [
    { id: 'abstract', title: 'Abstract' },
    ...paper.sections.map(section => ({ id: section.id, title: section.title })),
    { id: 'references', title: 'References' }
  ];

  return (
    <div className={cn("max-w-6xl mx-auto", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents - Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Contents</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                      activeSection === item.id
                        ? "bg-blue-100 text-blue-900 font-medium"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    )}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>

              {paper.downloadUrl && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a
                    href={paper.downloadUrl}
                    download
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {paper.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{paper.readTime}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{paper.publishDate}</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {paper.title}
                </h1>

                <div className="space-y-2 mb-6">
                  {paper.authors.map((author, index) => (
                    <div key={index} className="text-gray-700">
                      <span className="font-medium">{author.name}</span>
                      <span className="text-gray-500 ml-2">{author.affiliation}</span>
                      {author.orcid && (
                        <a
                          href={`https://orcid.org/${author.orcid}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 text-xs"
                        >
                          ORCID: {author.orcid}
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {paper.doi && (
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>DOI:</strong>{' '}
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
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
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Abstract</h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">{paper.abstract}</p>
                    </div>
                  </section>
                )}

                {/* Main Sections */}
                {paper.sections.map((section) => (
                  activeSection === section.id && (
                    <section key={section.id}>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                        {section.title}
                      </h2>
                      {renderContent(section.content, paper.references)}

                      {section.subsections && (
                        <div className="mt-6 space-y-6">
                          {section.subsections.map((subsection) => (
                            <div key={subsection.id}>
                              <h3 className="text-xl font-medium text-gray-900 mb-3">
                                {subsection.title}
                              </h3>
                              {renderContent(subsection.content, paper.references)}
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  )
                ))}

                {/* References */}
                {activeSection === 'references' && (
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">References</h2>
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
                  <section className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Acknowledgments</h3>
                    <p className="text-gray-700 leading-relaxed">{paper.acknowledgments}</p>
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