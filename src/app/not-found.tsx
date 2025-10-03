'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Silent failure: redirect users to homepage without showing a 404 screen
    router.replace('/');
  }, [router]);

  // Render nothing to avoid UI changes; navigation will occur immediately
  return null;
}