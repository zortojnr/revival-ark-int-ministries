'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer, useToast } from '../ui/ToastNotification';
import CookieConsent from '../ui/CookieConsent';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { toasts, removeToast } = useToast();

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