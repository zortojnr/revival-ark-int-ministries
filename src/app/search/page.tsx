'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Mock search data - in a real app, this would come from a database or API
const searchableContent = [
  {
    type: 'page',
    title: 'About Us - Who We Are',
    description: 'Learn about Revival Ark International Ministries, our history, and our mission to spread the Gospel.',
    url: '/about/who-we-are',
    keywords: ['about', 'history', 'mission', 'vision', 'ministry']
  },
  {
    type: 'page',
    title: 'Leadership Team',
    description: 'Meet our dedicated leadership team led by Pastor Haruna A\'aron Gassy.',
    url: '/about/leadership',
    keywords: ['leadership', 'pastor', 'team', 'haruna', 'gassy']
  },
  {
    type: 'ministry',
    title: 'Revival Crusades',
    description: 'Join us for powerful revival crusades that transform lives and communities.',
    url: '/ministries/revival-crusades',
    keywords: ['revival', 'crusades', 'evangelism', 'outreach']
  },
  {
    type: 'ministry',
    title: 'Youth Network',
    description: 'Empowering young people to live for Christ and impact their generation.',
    url: '/ministries/youth-network',
    keywords: ['youth', 'young', 'people', 'teenagers', 'students']
  },
  {
    type: 'ministry',
    title: 'Women\'s Ministry',
    description: 'Supporting and empowering women in their faith journey and life purpose.',
    url: '/ministries/womens-ministry',
    keywords: ['women', 'ladies', 'mothers', 'wives', 'sisters']
  },
  {
    type: 'ministry',
    title: 'Ark Kids',
    description: 'Nurturing children in the love and knowledge of Jesus Christ.',
    url: '/ministries/ark-kids',
    keywords: ['children', 'kids', 'sunday school', 'young ones']
  },
  {
    type: 'ministry',
    title: 'Ark of Hope (Orphans)',
    description: 'Caring for orphans and vulnerable children with love and support.',
    url: '/ministries/ark-of-hope',
    keywords: ['orphans', 'children', 'hope', 'care', 'support']
  },
  {
    type: 'page',
    title: 'Bible School - Sword Institute',
    description: 'Equipping believers with solid biblical foundation and ministry skills.',
    url: '/sword-institute',
    keywords: ['bible', 'school', 'training', 'education', 'sword', 'institute']
  },
  {
    type: 'page',
    title: 'Events',
    description: 'Stay updated with our upcoming events, conferences, and special programs.',
    url: '/events',
    keywords: ['events', 'conferences', 'programs', 'meetings']
  },
  {
    type: 'page',
    title: 'Get Involved',
    description: 'Discover ways to get involved in our ministry and make a difference.',
    url: '/get-involved',
    keywords: ['volunteer', 'serve', 'participate', 'join', 'help']
  }
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<typeof searchableContent>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const performSearch = () => {
      setIsLoading(true);
      
      if (!query.trim()) {
        setSearchResults([]);
        setIsLoading(false);
        return;
      }

      // Simulate API delay
      setTimeout(() => {
        const results = searchableContent.filter(item => {
          const searchTerm = query.toLowerCase();
          return (
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
          );
        });

        setSearchResults(results);
        setIsLoading(false);
      }, 300);
    };

    performSearch();
  }, [query]);

  return (
    <Layout>
      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MagnifyingGlassIcon className="h-12 w-12 text-primary-500" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Search Results
            </h1>
            {query && (
              <p className="text-lg text-secondary-600">
                Showing results for: <span className="font-semibold text-primary-600">"{query}"</span>
              </p>
            )}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
              <p className="mt-4 text-secondary-600">Searching...</p>
            </div>
          )}

          {/* No Query */}
          {!query && !isLoading && (
            <div className="text-center py-12">
              <p className="text-lg text-secondary-600 mb-6">
                Please enter a search term to find content on our website.
              </p>
              <a
                href="/"
                className="btn-primary"
              >
                Return to Home
              </a>
            </div>
          )}

          {/* Search Results */}
          {!isLoading && query && (
            <>
              <div className="mb-6">
                <p className="text-secondary-600">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                </p>
              </div>

              {searchResults.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-secondary-600 mb-6">
                    No results found for "{query}". Try different keywords or browse our main sections.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                      href="/about"
                      className="btn-primary"
                    >
                      About Us
                    </a>
                    <a
                      href="/ministries"
                      className="btn-secondary"
                    >
                      Ministries
                    </a>
                    <a
                      href="/resources"
                      className="btn-accent"
                    >
                      Resources
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {searchResults.map((result, index) => (
                    <div key={index} className="card-elevated p-8 hover:shadow-xl">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-block px-6 py-3 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                            {result.type === 'ministry' ? 'Ministry' : 'Page'}
                          </span>
                          <h3 className="font-heading text-xl font-bold text-secondary-900 hover:text-primary-600 transition-colors">
                            <a href={result.url}>{result.title}</a>
                          </h3>
                        </div>
                      </div>
                      <p className="font-body text-secondary-700 mb-6">
                        {result.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {result.keywords.slice(0, 3).map((keyword, idx) => (
                            <span key={idx} className="px-3 py-2 bg-neutral-100 text-neutral-700 text-xs rounded-md font-body">
                              {keyword}
                            </span>
                          ))}
                        </div>
                        <a
                          href={result.url}
                          className="inline-flex items-center font-body text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                        >
                          View Page →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}