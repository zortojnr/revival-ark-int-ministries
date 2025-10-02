'use client';

import { Suspense } from 'react';
import SearchClient from './SearchClient';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen py-12 text-center">Loading search...</div>}>
      <SearchClient />
    </Suspense>
  );
}