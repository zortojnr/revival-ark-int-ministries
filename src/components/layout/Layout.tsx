'use client';

import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer, useToast } from '../ui/ToastNotification';
import CookieConsent from '../ui/CookieConsent';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { toasts, removeToast, showInfo } = useToast();

  // Route allowlist based on current app routes
  const allowedPaths = [
    '/',
    '/about',
    '/about/who-we-are',
    '/about/doctrinal-beliefs',
    '/about/leadership',
    '/get-involved',
    '/give',
    '/ministries',
    '/ministries/ark-of-hope',
    '/ministries/children-ministry',
    '/ministries/evangelism-missions',
    '/ministries/womens-ministry',
    '/ministries/youth-ministry',
    '/search'
  ];

  useEffect(() => {
    // Ensure proper viewport on modern mobile devices without changing UI
    const metaViewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
    if (!metaViewport) {
      const m = document.createElement('meta');
      m.setAttribute('name', 'viewport');
      m.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover');
      document.head.appendChild(m);
    } else {
      const current = metaViewport.getAttribute('content') || '';
      if (!current.includes('viewport-fit=cover')) {
        metaViewport.setAttribute('content', current ? `${current}, viewport-fit=cover` : 'width=device-width, initial-scale=1, viewport-fit=cover');
      }
    }
  }, []);

  useEffect(() => {
    // Intercept anchor clicks to enforce silent failure on inactive routes
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find nearest anchor
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Ignore external links, hash, mailto, tel
      const isExternal = /^(https?:)?\/\//.test(href);
      if (isExternal || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      // Normalize path: strip query, hash, and trailing slash
      const normalizedPath = (() => {
        try {
          const u = new URL(href, window.location.origin);
          return u.pathname.replace(/\/$/, '');
        } catch {
          return href.replace(/\/$/, '');
        }
      })();

      const pathToCheck = normalizedPath === '' ? '/' : normalizedPath;

      if (!allowedPaths.includes(pathToCheck)) {
        // Block navigation silently to maintain flow (no 404)
        e.preventDefault();
        // Optional light feedback on mobile only
        if (window.innerWidth <= 640) {
          showInfo('Coming soon', 'This page is not yet available.');
        }
      }
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true } as any);
  }, []);

  useEffect(() => {
    // Improve touch target hit areas subtly without UI changes by adding CSS variables
    const root = document.documentElement;
    root.style.setProperty('--tap-target-min', '44px');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main id="main-content" className="flex-1 pt-20">
        {children}
      </main>
      
      <Footer />
      
      {/* Global UI Components */}
      <ToastContainer toasts={toasts} onClose={removeToast} />
      <CookieConsent />
    </div>
  );
}