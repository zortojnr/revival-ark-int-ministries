import { Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import SearchContent from './SearchContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search | Revival Ark International Ministries',
  description: 'Search for ministries, resources, and information about Revival Ark International Ministries.',
};

export default function SearchPage() {
  return (
    <Layout>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mb-4"></div>
            <p className="text-secondary-600">Loading search...</p>
          </div>
        </div>
      }>
        <SearchContent />
      </Suspense>
    </Layout>
  );
}
