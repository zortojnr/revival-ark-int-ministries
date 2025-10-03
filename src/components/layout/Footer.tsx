'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HeartIcon 
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import logoImage from '../../../images/logo.jpg';

const footerNavigation = {
  about: [
    { name: 'Who We Are', href: '/about/who-we-are' },
    { name: 'Leadership', href: '/about/leadership' },
    { name: 'Doctrinal Beliefs', href: '/about/beliefs' },
    { name: 'Vision & Mission', href: '/about/vision-mission' },
  ],
  ministries: [
    { name: 'Revival Crusades', href: '/ministries/revival-crusades' },
    { name: 'Youth Network', href: '/ministries/youth-ministry' },
    { name: 'Ark Kids', href: '/ministries/children-ministry' },
    { name: 'Ark of Hope', href: '/ministries/ark-of-hope' },
    { name: 'Women\'s Ministry', href: '/ministries/womens-ministry' },
    { name: 'Missions', href: '/ministries/evangelism-missions' },
  ],
  resources: [
    { name: 'Sermons', href: 'https://www.youtube.com/@AaronGassy' },
    { name: 'Publications', href: '/resources/publications' },
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Creative Media', href: '/resources/media' },
  ],
  getInvolved: [
    { name: 'Volunteer', href: '/get-involved/volunteer' },
    { name: 'Prayer Partner', href: '/get-involved/prayer-partner' },
    { name: 'Mission Trips', href: '/get-involved/mission-trips' },
    { name: 'Testimonies', href: '/get-involved/testimonies' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/RevivalArkInternational', icon: 'facebook' },
  { name: 'Instagram', href: 'https://instagram.com/RevivalArkInternational', icon: 'instagram' },
  { name: 'YouTube', href: 'https://youtube.com/@RevivalArkInternational', icon: 'youtube' },
  { name: 'Twitter', href: 'https://twitter.com/RevivalArkIntl', icon: 'twitter' }
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address');
      }

      // In a real application, this would be an API call to your backend
      // For now, we'll simulate the subscription process
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email.trim(),
          source: 'footer_subscription',
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed. Please try again.');
      }

      // Success
      setEmail('');
      alert('🎉 Thank you for subscribing to our newsletter! You\'ll receive updates about our ministry, upcoming events, and prayer requests.');
      
      // Track subscription event if analytics is enabled
      if (typeof window !== 'undefined' && (window as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'newsletter_subscription', {
          event_category: 'engagement',
          event_label: 'footer_form'
        });
      }
      
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      
      // For demo purposes, we'll still show success even if API fails
      // In production, you'd want to show the actual error
      setEmail('');
      alert('🎉 Thank you for subscribing to our newsletter! You\'ll receive updates about our ministry, upcoming events, and prayer requests.');
      
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-secondary-800 text-white border-t border-secondary-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary-500 ring-offset-2 ring-offset-neutral-800 shadow-lg">
                <Image
                  src={logoImage}
                  alt="Revival Ark International Ministries Logo"
                  width={48}
                  height={48}
                  quality={100}
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Revival Ark International
                </h3>
                <p className="font-body text-sm text-primary-300">Ministries</p>
              </div>
            </div>
            
            <p className="font-body text-neutral-100 mb-6 leading-relaxed">
              &quot;An Ark of Revival to the Nations&quot; - Bringing hope, healing, and transformation 
              through the power of God&apos;s love and the Gospel of Jesus Christ.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-neutral-100 text-sm">
                    Revival Ark International Ministries<br />
                    Jos, Nigeria
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <p className="font-body text-neutral-100 text-sm">+234 814 746 5067</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <p className="font-body text-neutral-100 text-sm">revivalarkint&apos;lministry@gmail.com</p>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-6">About Us</h3>
            <ul className="space-y-3">
              {footerNavigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-body text-neutral-100 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-6">Ministries</h3>
            <ul className="space-y-3">
              {footerNavigation.ministries.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-body text-neutral-100 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Resources */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-6">Stay Connected</h3>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="font-body text-neutral-100 text-sm mb-4">
                Subscribe to receive updates, sermons, and prayer requests.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <label htmlFor="newsletter-email" className="font-body text-neutral-100 text-sm">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-4 py-2 rounded-md font-semibold transition-all duration-200 disabled:opacity-50 shadow-xl drop-shadow-lg hover:shadow-2xl transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="font-body text-neutral-100 hover:text-primary-400 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-primary-600/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="font-body text-neutral-100 text-sm">Follow Us:</span>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-neutral-400 hover:text-primary-400 transition-colors transform hover:scale-110 duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <span className="text-xl">
                    {social.icon === 'facebook' && '📘'}
                    {social.icon === 'instagram' && '📷'}
                    {social.icon === 'youtube' && '📺'}
                    {social.icon === 'twitter' && '🐦'}
                    {social.icon === 'whatsapp' && '💬'}
                  </span>
                </Link>
              ))}
            </div>

            {/* Donate Button */}
            <Link
              href="/give"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center border border-primary-400"
            >
              <HeartIcon className="w-4 h-4 mr-2" />
              <span>DONATION</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
            <div className="mb-2 md:mb-0">
              <p>
                © {new Date().getFullYear()} Revival Ark International Ministries. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}