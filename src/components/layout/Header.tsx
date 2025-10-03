'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    submenu: [
      { name: 'Who We Are', href: '/about/who-we-are' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'Doctrinal Beliefs', href: '/about/beliefs' },
    ]
  },
  { 
    name: 'Ministries', 
    href: '/ministries',
    submenu: [
      { name: 'Revival Crusades', href: '/ministries/revival-crusades' },
      { name: 'Youth Network', href: '/ministries/youth-network' },
      { name: "Women's Ministry", href: '/ministries/womens-ministry' },
      { name: 'Ark Kids', href: '/ministries/ark-kids' },
      { name: 'Ark of Hope (Orphans)', href: '/ministries/ark-of-hope' },
      { name: 'Media Ministry', href: '/ministries/media' },
      { name: 'Missions', href: '/ministries/missions' },
      { name: 'Prayer Ministry', href: '/ministries/prayer' },
      { name: 'Leadership Development', href: '/ministries/leadership' },
      { name: 'Revival Academy', href: '/ministries/academy' },
    ]
  },
  { name: 'Bible School', href: '/sword-institute' },
  { name: 'Resources', href: '/resources' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-primary-100">
      {/* Skip Link for Accessibility */}
      <Link href="#main-content" className="skip-link">
        Skip to main content
      </Link>

      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Revival Ark International Logo"
                  width={48}
                  height={48}
                  className="rounded-full object-cover block"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-lg font-bold text-secondary-800 leading-tight">
                  Revival Ark International Ministries
                </h1>
              </div>
              <div className="sm:hidden">
                <h1 className="font-heading text-base font-bold text-secondary-800 leading-tight">
                  Revival Ark
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="font-body text-secondary-800 hover:text-secondary-600 font-medium transition-colors duration-200 py-2 text-sm inline-flex items-center"
                >
                  <span className="inline-flex items-center">
                    {item.name}
                    {item.submenu && (
                      <ChevronDownIcon className="w-4 h-4 ml-1 text-secondary-600 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </span>
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50 border border-gray-200">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 font-body text-sm text-secondary-700 hover:bg-gray-50 hover:text-secondary-800 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-secondary-600 hover:text-secondary-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between text-secondary-700 hover:text-secondary-800 font-medium py-2 px-3 rounded-md hover:bg-gray-50 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronRightIcon className="w-4 h-4 text-secondary-500" />
                  )}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-sm text-secondary-600 hover:text-secondary-800 py-1 px-3 rounded-md hover:bg-gray-50 transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}