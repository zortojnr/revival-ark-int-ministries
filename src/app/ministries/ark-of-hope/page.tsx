'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { HeartIcon, HandRaisedIcon, HomeIcon, GiftIcon } from '@heroicons/react/24/outline';

export default function ArkOfHopePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/ministries/orphanage/hero.jpg"
            alt="Ark of Hope Outreach"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ark of Hope
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Extending God's love to orphans and vulnerable children through care, support, and hope.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                A Home for the Heart
              </h2>
              <div className="w-20 h-1.5 bg-primary-500 mb-8 rounded-full"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Ark of Hope is the humanitarian arm of Revival Ark International Ministries, dedicated to reaching out to orphanages and providing support to vulnerable children. We believe that every child deserves to feel loved, cared for, and valued.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Guided by James 1:27, "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress," we are committed to making a tangible difference in the lives of these precious ones.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/give" 
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <GiftIcon className="w-5 h-5 mr-2" />
                  Support a Child
                </Link>
                <Link 
                  href="/get-involved" 
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold rounded-lg transition-colors"
                >
                  <HandRaisedIcon className="w-5 h-5 mr-2" />
                  Volunteer
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/ministries/orphanage/1.jpg"
                    alt="Children playing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/ministries/orphanage/2.jpg"
                    alt="Distribution of supplies"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/ministries/orphanage/hero.jpg"
                    alt="Ministry team with children"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/ministries/orphanage/1.jpg"
                    alt="Joyful moments"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Our Outreach Impact</h2>
            <p className="text-lg text-gray-600">
              Through consistent visits and support, we aim to provide holistic care that addresses physical, emotional, and spiritual needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary-500">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <GiftIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Material Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Providing food, clothing, educational materials, and toiletries to ensure basic needs are met with dignity.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-secondary-500">
              <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <HeartIcon className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emotional Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Spending quality time, playing games, and building relationships to let every child know they are seen and loved.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-accent-500">
              <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <HomeIcon className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spiritual Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Sharing the Gospel, praying with the children, and teaching them about the Father's love through biblical truths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           {/* Pattern or image overlay could go here */}
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Be a Hero to a Child</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Your partnership can transform an orphan's life. Join us in being the hands and feet of Jesus to these precious children.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/give"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white text-lg font-bold rounded-full transition-transform transform hover:scale-105 shadow-lg"
            >
              Donate Now
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white hover:text-secondary-900 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
