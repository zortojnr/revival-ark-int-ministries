'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { UserGroupIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function WomensMinistryPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Christian%20women%20praying%20together%20in%20a%20circle%2C%20warm%20lighting%2C%20diverse%20group%2C%20spiritual%20atmosphere%2C%20professional%20photography&image_size=landscape_16_9"
            alt="Women's Ministry"
            fill
            className="object-cover"
            priority
            unoptimized
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
              Women's Ministry
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              Empowering women to grow in faith, build meaningful relationships, and serve with purpose.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="min-h-screen bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-secondary-700 mb-12 text-center max-w-2xl mx-auto">
            Our Women's Ministry is dedicated to empowering women of all ages to grow in their faith, 
            build meaningful relationships, and serve their community with purpose and passion.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
                <HeartIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Bible Study & Prayer</h2>
              <p className="text-secondary-700 leading-relaxed">
                Join us for weekly Bible studies where we dive deep into God's Word, share insights, 
                and support each other through prayer. Our studies are designed to strengthen your 
                relationship with Christ and provide practical wisdom for daily living.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-6 text-secondary-600">
                <UserGroupIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Community Outreach</h2>
              <p className="text-secondary-700 leading-relaxed">
                We believe in making a difference in our community. From organizing food drives to 
                supporting local shelters, our women actively participate in outreach programs that 
                reflect Christ's love and compassion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 md:col-span-2">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-6 text-accent-600">
                <SparklesIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Events & Activities</h2>
              <ul className="grid md:grid-cols-2 gap-4 text-secondary-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Monthly women's fellowship meetings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Annual women's retreat
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Mother's Day celebrations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Community service projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Mentorship programs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
