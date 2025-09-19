'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import {
  Badge,
  InteractiveCard,
  InteractiveButton,
  SmartSearch,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import type { SearchResult } from '@/components/ui/SmartSearch';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Get initial query from URL params
  useEffect(() => {
    const initialQuery = searchParams.get('q') || '';
    setQuery(initialQuery);
  }, [searchParams]);

  const handleSearch = (searchQuery: string, searchResults: SearchResult[]) => {
    setResults(searchResults);
    setIsLoading(false);

    // Update URL with search query
    const url = new URL(window.location.href);
    if (searchQuery) {
      url.searchParams.set('q', searchQuery);
    } else {
      url.searchParams.delete('q');
    }
    window.history.replaceState({}, '', url.toString());
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return '🎯';
      case 'industry': return '🏢';
      case 'insight': return '💡';
      case 'case-study': return '📊';
      case 'page': return '📄';
      default: return '🔍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service': return 'border-blue-200 bg-blue-50 text-blue-700';
      case 'industry': return 'border-green-200 bg-green-50 text-green-700';
      case 'insight': return 'border-purple-200 bg-purple-50 text-purple-700';
      case 'case-study': return 'border-orange-200 bg-orange-50 text-orange-700';
      case 'page': return 'border-gray-200 bg-gray-50 text-gray-700';
      default: return 'border-gray-200 bg-gray-50 text-gray-700';
    }
  };

  const filterTypes = [
    { value: 'all', label: 'All Results' },
    { value: 'service', label: 'Services' },
    { value: 'industry', label: 'Industries' },
    { value: 'insight', label: 'Insights' },
    { value: 'page', label: 'Pages' },
  ];

  const filteredResults = selectedFilter === 'all'
    ? results
    : results.filter(result => result.type === selectedFilter);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* Search Header */}
        <section className="section-professional critical-section bg-gray-50">
          <div className="container-professional">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <Badge variant="outline" className="border-blue-600 bg-blue-50 text-blue-700">
                  Search Results
                </Badge>
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                  Find exactly what you're looking for
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Search across our services, industries, insights, and resources
                  to discover AI solutions tailored to your needs.
                </p>
              </div>

              {/* Enhanced Search Bar */}
              <div className="max-w-3xl mx-auto">
                <SmartSearch
                  className="w-full"
                  placeholder="Search services, industries, insights, and more..."
                  showFilters={true}
                  maxResults={20}
                  onSearch={handleSearch}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Search Results */}
        {(query || results.length > 0) && (
          <section className="section-professional section-optimize">
            <div className="container-professional">
              {/* Results Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {query ? `Search Results for "${query}"` : 'Search Results'}
                  </h2>
                  <p className="text-gray-600">
                    {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
                    {selectedFilter !== 'all' && ` in ${filterTypes.find(f => f.value === selectedFilter)?.label}`}
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  {filterTypes.map(filter => (
                    <button
                      key={filter.value}
                      onClick={() => setSelectedFilter(filter.value)}
                      className={cn(
                        'px-4 py-2 text-sm rounded-lg border transition-all duration-200',
                        selectedFilter === filter.value
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                      )}
                    >
                      {filter.label}
                      {filter.value === 'all' && results.length > 0 && ` (${results.length})`}
                      {filter.value !== 'all' && results.filter(r => r.type === filter.value).length > 0 &&
                        ` (${results.filter(r => r.type === filter.value).length})`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Grid */}
              {filteredResults.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
                  {filteredResults.map((result, index) => (
                    <InteractiveCard
                      key={result.id}
                      className="p-6"
                      lift
                      href={result.url}
                    >
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="text-2xl">{getTypeIcon(result.type)}</div>
                          <Badge
                            variant="outline"
                            className={cn('text-xs', getTypeColor(result.type))}
                          >
                            {result.category || result.type}
                          </Badge>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                            {result.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            {result.description}
                          </p>

                          {/* Tags */}
                          {result.tags && result.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {result.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                              {result.tags.length > 3 && (
                                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                                  +{result.tags.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* CTA */}
                        <div className="pt-2">
                          <InteractiveButton
                            variant="outline"
                            size="sm"
                            className="w-full"
                            ripple
                          >
                            View Details →
                          </InteractiveButton>
                        </div>
                      </div>
                    </InteractiveCard>
                  ))}
                </div>
              ) : (
                query && (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.886-6.181-2.343"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      We couldn't find anything matching "{query}". Try different keywords or browse our services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <InteractiveButton
                        variant="primary"
                        onClick={() => setQuery('')}
                        ripple
                      >
                        Clear Search
                      </InteractiveButton>
                      <InteractiveButton
                        variant="outline"
                        href="/services"
                        ripple
                      >
                        Browse Services
                      </InteractiveButton>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {/* Popular Searches */}
        {!query && results.length === 0 && (
          <section className="section-professional">
            <div className="container-professional">
              <div className="text-center space-y-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Popular Searches
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'AI Strategy',
                    'Healthcare AI',
                    'Financial Services',
                    'Manufacturing',
                    'Generative AI',
                    'Data Analytics',
                    'Process Automation',
                    'Computer Vision',
                  ].map((term, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}