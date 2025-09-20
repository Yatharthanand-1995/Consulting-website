'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { InteractiveButton } from './InteractiveButton';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'service' | 'industry' | 'insight' | 'case-study' | 'page';
  category?: string;
  tags?: string[];
  relevanceScore?: number;
}

export interface SmartSearchProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string, results: SearchResult[]) => void;
  showFilters?: boolean;
  maxResults?: number;
  autoFocus?: boolean;
}

// Mock search data - in a real app, this would come from an API
const searchData: SearchResult[] = [
  // Services
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Implementation',
    description:
      'End-to-end AI transformation strategy with proven methodologies',
    url: '/services#ai-strategy',
    type: 'service',
    category: 'AI Services',
    tags: ['strategy', 'ai', 'transformation', 'implementation'],
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Solutions',
    description: 'Custom LLM implementations and AI-powered automation',
    url: '/services#generative-ai',
    type: 'service',
    category: 'AI Services',
    tags: ['generative', 'llm', 'automation', 'ai'],
  },
  {
    id: 'data-intelligence',
    title: 'Data Intelligence & Analytics',
    description: 'Advanced analytics and computer vision solutions',
    url: '/services#data-intelligence',
    type: 'service',
    category: 'AI Services',
    tags: ['analytics', 'data', 'computer vision', 'intelligence'],
  },
  // Industries
  {
    id: 'financial-services',
    title: 'Financial Services',
    description:
      'AI-powered solutions for banking, insurance, and investment management',
    url: '/industries#financial-services',
    type: 'industry',
    category: 'Industries',
    tags: ['banking', 'finance', 'insurance', 'investment'],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description:
      'Smart manufacturing and Industry 4.0 transformation solutions',
    url: '/industries#manufacturing',
    type: 'industry',
    category: 'Industries',
    tags: ['manufacturing', 'industry 4.0', 'smart factory', 'automation'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description:
      'AI solutions for patient care, diagnostics, and operational efficiency',
    url: '/industries#healthcare',
    type: 'industry',
    category: 'Industries',
    tags: ['healthcare', 'medical', 'diagnostics', 'patient care'],
  },
  // Insights
  {
    id: 'ai-financial-2024',
    title: 'The Future of AI in Financial Services: A 2024 Perspective',
    description:
      'Comprehensive analysis of AI adoption trends across 150+ financial institutions',
    url: '/our-insights#ai-financial-2024',
    type: 'insight',
    category: 'Insights',
    tags: ['ai', 'financial services', 'trends', 'analysis'],
  },
  {
    id: 'responsible-ai',
    title: 'Building Responsible AI: A Practical Framework',
    description:
      'Step-by-step guide to implementing ethical AI practices in enterprise environments',
    url: '/our-insights#responsible-ai',
    type: 'insight',
    category: 'Insights',
    tags: ['responsible ai', 'ethics', 'framework', 'enterprise'],
  },
  // Pages
  {
    id: 'about',
    title: 'About Stratex AI',
    description:
      'Learn about our team, mission, and approach to AI transformation',
    url: '/about',
    type: 'page',
    category: 'Company',
    tags: ['about', 'team', 'mission', 'company'],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    description: 'Get in touch with our AI experts for a consultation',
    url: '/contact',
    type: 'page',
    category: 'Company',
    tags: ['contact', 'consultation', 'experts'],
  },
];

const filterTypes = [
  { value: 'all', label: 'All Results', count: searchData.length },
  {
    value: 'service',
    label: 'Services',
    count: searchData.filter(item => item.type === 'service').length,
  },
  {
    value: 'industry',
    label: 'Industries',
    count: searchData.filter(item => item.type === 'industry').length,
  },
  {
    value: 'insight',
    label: 'Insights',
    count: searchData.filter(item => item.type === 'insight').length,
  },
  {
    value: 'page',
    label: 'Pages',
    count: searchData.filter(item => item.type === 'page').length,
  },
];

export function SmartSearch({
  className,
  placeholder = 'Search services, industries, insights...',
  onSearch,
  showFilters = true,
  maxResults = 8,
  autoFocus = false,
}: SmartSearchProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus if requested
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Search logic with debouncing
  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      if (query.trim().length > 0) {
        setIsLoading(true);
        performSearch(query, selectedFilter);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 150);

    return () => clearTimeout(searchTimeout);
  }, [query, selectedFilter]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const performSearch = (searchQuery: string, filter: string) => {
    const normalizedQuery = searchQuery.toLowerCase().trim();

    // Filter data based on type filter
    const filteredData =
      filter === 'all'
        ? searchData
        : searchData.filter(item => item.type === filter);

    // Search across title, description, and tags
    const searchResults = filteredData
      .map(item => {
        let score = 0;
        const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
        const descMatch = item.description
          .toLowerCase()
          .includes(normalizedQuery);
        const tagMatch = item.tags?.some(tag =>
          tag.toLowerCase().includes(normalizedQuery)
        );

        // Score calculation for relevance
        if (titleMatch) score += 3;
        if (descMatch) score += 2;
        if (tagMatch) score += 1;

        // Exact matches get higher scores
        if (item.title.toLowerCase() === normalizedQuery) score += 5;
        if (item.tags?.some(tag => tag.toLowerCase() === normalizedQuery))
          score += 3;

        return { ...item, relevanceScore: score };
      })
      .filter(item => item.relevanceScore! > 0)
      .sort((a, b) => b.relevanceScore! - a.relevanceScore!)
      .slice(0, maxResults);

    setResults(searchResults);
    setIsOpen(searchResults.length > 0);
    setSelectedIndex(-1);
    setIsLoading(false);

    onSearch?.(searchQuery, searchResults);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleResultClick(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setQuery(result.title);
    setIsOpen(false);
    setSelectedIndex(-1);

    // Navigate to the result
    window.location.href = result.url;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return '🎯';
      case 'industry':
        return '🏢';
      case 'insight':
        return '💡';
      case 'case-study':
        return '📊';
      case 'page':
        return '📄';
      default:
        return '🔍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'text-blue-600 bg-blue-50';
      case 'industry':
        return 'text-green-600 bg-green-50';
      case 'insight':
        return 'text-purple-600 bg-purple-50';
      case 'case-study':
        return 'text-orange-600 bg-orange-50';
      case 'page':
        return 'text-gray-600 bg-gray-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div ref={searchRef} className={cn('relative', className)}>
      {/* Search Input */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          className={cn(
            'w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10',
            'bg-white text-gray-900 placeholder-gray-500',
            'focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none',
            'transition-all duration-200',
            isOpen && 'rounded-b-none border-b-0'
          )}
          placeholder={placeholder}
        />

        {isLoading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
          </div>
        )}
      </div>

      {/* Filters */}
      {showFilters && isOpen && (
        <div className="absolute top-full right-0 left-0 z-50 border-r border-l border-gray-300 bg-white px-4 py-2">
          <div className="flex flex-wrap gap-2">
            {filterTypes.map(filter => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={cn(
                  'rounded-full border px-3 py-1 text-xs transition-all duration-200',
                  selectedFilter === filter.value
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
                )}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {isOpen && results.length > 0 && (
        <div
          className={cn(
            'absolute top-full right-0 left-0 z-40 max-h-96 overflow-y-auto rounded-b-lg border border-gray-300 bg-white shadow-lg',
            showFilters && 'rounded-t-none border-t-0'
          )}
        >
          {results.map((result, index) => (
            <button
              key={result.id}
              onClick={() => handleResultClick(result)}
              className={cn(
                'w-full border-b border-gray-100 p-4 text-left transition-colors duration-150 last:border-b-0 hover:bg-gray-50',
                selectedIndex === index && 'bg-blue-50'
              )}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <span className="text-lg">{getTypeIcon(result.type)}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center space-x-2">
                    <h3 className="truncate text-sm font-semibold text-gray-900">
                      {result.title}
                    </h3>
                    <span
                      className={cn(
                        'rounded-full px-2 py-0.5 text-xs',
                        getTypeColor(result.type)
                      )}
                    >
                      {result.category || result.type}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-sm text-gray-600">
                    {result.description}
                  </p>
                  {result.tags && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {result.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}

          {/* Search Footer */}
          <div className="border-t border-gray-200 bg-gray-50 p-3 text-center">
            <p className="text-xs text-gray-500">
              {results.length} result{results.length !== 1 ? 's' : ''} found
              {selectedFilter !== 'all' &&
                ` in ${filterTypes.find(f => f.value === selectedFilter)?.label}`}
            </p>
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query.length > 0 && results.length === 0 && !isLoading && (
        <div className="absolute top-full right-0 left-0 z-40 rounded-b-lg border border-gray-300 bg-white p-6 text-center shadow-lg">
          <div className="mb-2 text-gray-400">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.886-6.181-2.343"
              />
            </svg>
          </div>
          <h3 className="mb-1 text-sm font-medium text-gray-900">
            No results found
          </h3>
          <p className="mb-4 text-xs text-gray-500">
            Try adjusting your search terms or filters
          </p>
          <InteractiveButton
            variant="outline"
            size="sm"
            onClick={() => setQuery('')}
            ripple
          >
            Clear Search
          </InteractiveButton>
        </div>
      )}
    </div>
  );
}

export default SmartSearch;
