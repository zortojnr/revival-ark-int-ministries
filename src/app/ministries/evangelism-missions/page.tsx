'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { GlobeAltIcon, UserGroupIcon, MegaphoneIcon } from '@heroicons/react/24/outline';

export default function EvangelismMissionsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=People%20sharing%20the%20gospel%20outdoors%2C%20holding%20bibles%2C%20praying%20for%20others%20in%20a%20city%20street%2C%20sunset%2C%20hope%20and%20compassion%2C%20realistic%20style&image_size=landscape_16_9"
            alt="Evangelism and Missions"
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
              Evangelism & Missions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              Taking the Gospel to the ends of the earth, one soul at a time.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="min-h-screen bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-secondary-700 mb-12 text-center max-w-2xl mx-auto">
            Our Evangelism & Missions ministry is committed to sharing the Gospel both locally and globally. 
            We believe in the Great Commission and actively work to spread God's love to all nations.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
                <MegaphoneIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Local Evangelism</h2>
              <p className="text-secondary-700 leading-relaxed">
                We organize community outreach events, street evangelism, and door-to-door ministry 
                to share the Gospel with our neighbors and build relationships within our local community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-6 text-secondary-600">
                <GlobeAltIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Global Missions</h2>
              <p className="text-secondary-700 leading-relaxed">
                Through partnerships with missionaries worldwide, we support church planting, 
                humanitarian aid, and Gospel outreach in various countries across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
