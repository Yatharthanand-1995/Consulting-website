'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface Citation {
  id: string;
  type: 'journal' | 'conference' | 'book' | 'website' | 'report';
  authors: string[];
  title: string;
  publication: string;
  year: number;
  doi?: string;
  url?: string;
  pages?: string;
  volume?: string;
  issue?: string;
  impactFactor?: number;
}

interface AcademicCitationProps {
  citation: Citation;
  citationNumber: number;
  inline?: boolean;
  className?: string;
}

export function AcademicCitation({
  citation,
  citationNumber,
  inline = false,
  className
}: AcademicCitationProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const formatAuthors = (authors: string[]): string => {
    if (authors.length === 1) return authors[0];
    if (authors.length === 2) return `${authors[0]} & ${authors[1]}`;
    if (authors.length <= 3) return `${authors.slice(0, -1).join(', ')}, & ${authors[authors.length - 1]}`;
    return `${authors[0]} et al.`;
  };

  const formatCitation = (): string => {
    const authorsStr = formatAuthors(citation.authors);
    const year = citation.year;
    const title = citation.title;
    const publication = citation.publication;

    switch (citation.type) {
      case 'journal':
        return `${authorsStr} (${year}). ${title}. ${publication}${citation.volume ? `, ${citation.volume}` : ''}${citation.issue ? `(${citation.issue})` : ''}${citation.pages ? `, ${citation.pages}` : ''}.`;
      case 'conference':
        return `${authorsStr} (${year}). ${title}. In ${publication}${citation.pages ? ` (pp. ${citation.pages})` : ''}.`;
      case 'book':
        return `${authorsStr} (${year}). ${title}. ${publication}.`;
      case 'report':
        return `${authorsStr} (${year}). ${title}. ${publication}.`;
      case 'website':
        return `${authorsStr} (${year}). ${title}. Retrieved from ${citation.url}`;
      default:
        return `${authorsStr} (${year}). ${title}. ${publication}.`;
    }
  };

  if (inline) {
    return (
      <span className="relative">
        <sup
          className={cn(
            "text-blue-600 hover:text-blue-800 cursor-pointer text-xs font-medium transition-colors",
            "hover:bg-blue-50 px-1 py-0.5 rounded",
            className
          )}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowTooltip(!showTooltip)}
        >
          [{citationNumber}]
        </sup>

        {showTooltip && (
          <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="text-sm space-y-2">
              <div className="font-medium text-gray-900">{citation.title}</div>
              <div className="text-gray-600">
                {formatAuthors(citation.authors)} ({citation.year})
              </div>
              <div className="text-gray-600 italic">{citation.publication}</div>
              {citation.impactFactor && (
                <div className="text-xs text-green-600 font-medium">
                  Impact Factor: {citation.impactFactor}
                </div>
              )}
              {(citation.doi || citation.url) && (
                <div className="pt-2 border-t border-gray-100">
                  {citation.doi && (
                    <a
                      href={`https://doi.org/${citation.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-xs block"
                    >
                      DOI: {citation.doi}
                    </a>
                  )}
                  {citation.url && !citation.doi && (
                    <a
                      href={citation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-xs block"
                    >
                      View Source
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45"></div>
          </div>
        )}
      </span>
    );
  }

  // Full citation format for references section
  return (
    <div className={cn("mb-4 text-sm leading-relaxed", className)}>
      <span className="font-medium text-gray-900 mr-2">[{citationNumber}]</span>
      <span className="text-gray-700">{formatCitation()}</span>
      {citation.doi && (
        <span className="ml-2">
          <a
            href={`https://doi.org/${citation.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            DOI: {citation.doi}
          </a>
        </span>
      )}
      {citation.url && !citation.doi && (
        <span className="ml-2">
          <a
            href={citation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Available at: {citation.url}
          </a>
        </span>
      )}
      {citation.impactFactor && (
        <div className="mt-1 text-xs text-green-600 font-medium">
          Impact Factor: {citation.impactFactor}
        </div>
      )}
    </div>
  );
}