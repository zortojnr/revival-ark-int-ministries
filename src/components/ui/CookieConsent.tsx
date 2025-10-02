'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from './Button';

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: unknown;
    _fbq: unknown;
    Tawk_API: unknown;
    Tawk_LoadStart: Date;
  }
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  functional: false,
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowPreferences(false);
    
    // Initialize analytics and other services
    initializeServices(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    
    setPreferences(onlyNecessary);
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
    
    // Initialize services based on preferences
    initializeServices(preferences);
  };

  const initializeServices = (prefs: CookiePreferences) => {
    // Initialize Google Analytics if analytics cookies are accepted
    if (prefs.analytics) {
      initializeGoogleAnalytics();
    }
    
    // Initialize marketing tools if marketing cookies are accepted
    if (prefs.marketing) {
      initializeMarketingTools();
    }
    
    // Initialize functional tools if functional cookies are accepted
    if (prefs.functional) {
      initializeFunctionalTools();
    }
  };

  const initializeGoogleAnalytics = () => {
    // Google Analytics 4 implementation
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Make gtag globally available
    (window as unknown as { gtag: typeof gtag }).gtag = gtag;
    
    console.log('Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
  };

  const initializeMarketingTools = () => {
    // Facebook Pixel implementation
    const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    
    if (FACEBOOK_PIXEL_ID) {
      // Load Facebook Pixel with proper type safety
      const loadFacebookPixel = () => {
        if (window.fbq) return;
        
        const fbq = (function (...args: unknown[]) {
          const self = fbq as unknown as {
            callMethod?: (...a: unknown[]) => void;
            queue: unknown[];
          };
          if (self.callMethod) {
            // Use spread operator instead of .apply to satisfy lint rule
            self.callMethod(...args);
          } else {
            self.queue.push(args);
          }
        } as unknown) as {
          (...a: unknown[]): void;
          callMethod?: (...a: unknown[]) => void;
          push: (...a: unknown[]) => void;
          loaded: boolean;
          version: string;
          queue: unknown[];
        };
        
        if (!(window as unknown as { _fbq?: typeof fbq })._fbq) {
          (window as unknown as { _fbq?: typeof fbq })._fbq = fbq;
        }
        fbq.push = fbq;
        fbq.loaded = true;
        fbq.version = '2.0';
        fbq.queue = [];
        
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://connect.facebook.net/en_US/fbevents.js';
        
        const firstScript = document.getElementsByTagName('script')[0];
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript);
        }
        
        // Assign to window so global calls can reference it safely
        (window as unknown as { fbq?: typeof fbq }).fbq = fbq;
      };
      
      loadFacebookPixel();
      // Safely reference fbq via window with optional chaining
      (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.('init', FACEBOOK_PIXEL_ID as unknown as string);
      (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.('track', 'PageView');
      
      console.log('Facebook Pixel initialized with ID:', FACEBOOK_PIXEL_ID);
    }
    
    console.log('Marketing tools initialized');
  };

  const initializeFunctionalTools = () => {
    // Tawk.to Chat Widget implementation
    const TAWK_PROPERTY_ID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
    const TAWK_WIDGET_ID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;
    
    if (TAWK_PROPERTY_ID && TAWK_WIDGET_ID) {
      // Initialize Tawk.to
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
      
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.head.appendChild(script);
      
      console.log('Tawk.to chat widget initialized');
    }
    
    // Other functional tools can be added here
    console.log('Functional tools initialized');
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-modal bg-white border-t border-neutral-200 shadow-xl p-6">
        <div className="container-fluid max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-4">
                <div>
                  <h3 className="heading-4 text-secondary-900 mb-2">
                    We value your privacy
                  </h3>
                  <p className="body-small text-secondary-600 max-w-2xl">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
                    You can manage your preferences or learn more in our{' '}
                    <Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreferences(true)}
                className="w-full sm:w-auto"
              >
                Customize
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
                className="w-full sm:w-auto"
              >
                Reject All
              </Button>
              
              <Button
                variant="primary"
                size="sm"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-modal bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <h2 className="heading-3 text-secondary-900">
                Cookie Preferences
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPreferences(false)}
                className="text-secondary-400 hover:text-secondary-600"
              >
                <XMarkIcon className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <p className="body-small text-secondary-600 mb-6">
                Manage your cookie preferences below. You can enable or disable different types of cookies 
                except for essential cookies which are required for the website to function properly.
              </p>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="heading-6 text-secondary-900">
                      Essential Cookies
                    </h4>
                    <div className="flex items-center">
                      <span className="body-small text-secondary-500 mr-3">Always Active</span>
                      <div className="w-11 h-6 bg-primary-600 rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="body-small text-secondary-600">
                    These cookies are necessary for the website to function and cannot be switched off. 
                    They are usually only set in response to actions made by you which amount to a request for services.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="heading-6 text-secondary-900">
                      Analytics Cookies
                    </h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  <p className="body-small text-secondary-600">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="heading-6 text-secondary-900">
                      Marketing Cookies
                    </h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  <p className="body-small text-secondary-600">
                    These cookies are used to deliver advertisements more relevant to you and your interests.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="heading-6 text-secondary-900">
                      Functional Cookies
                    </h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) => setPreferences(prev => ({ ...prev, functional: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  <p className="body-small text-secondary-600">
                    These cookies enable the website to provide enhanced functionality and personalization.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-neutral-200 bg-neutral-50">
              <Button
                variant="ghost"
                onClick={handleRejectAll}
                className="w-full sm:w-auto"
              >
                Reject All
              </Button>
              
              <div className="flex gap-3 ml-auto">
                <Button
                  variant="outline"
                  onClick={handleSavePreferences}
                  className="w-full sm:w-auto"
                >
                  Save Preferences
                </Button>
                
                <Button
                  variant="primary"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}