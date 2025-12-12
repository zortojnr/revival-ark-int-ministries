'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { GlobeAltIcon, HeartIcon, TruckIcon } from '@heroicons/react/24/outline';

export default function MissionsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Missionaries%20helping%20people%20in%20a%20rural%20african%20village%2C%20distributing%20food%2C%20smiling%20children%2C%20warm%20lighting%2C%20realistic&image_size=landscape_16_9"
            alt="Global Missions"
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
              Global Missions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              Go therefore and make disciples of all nations.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="min-h-screen bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-secondary-700 mb-12 text-center max-w-2xl mx-auto">
            We are committed to taking the love of Christ to the unreached and underserved communities around the world.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
                <GlobeAltIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Church Planting</h3>
              <p className="text-secondary-700">Establishing new communities of faith in unreached areas.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-6 text-secondary-600">
                <HeartIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Humanitarian Aid</h3>
              <p className="text-secondary-700">Providing food, water, medical care, and education to those in need.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-6 text-accent-600">
                <TruckIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Rural Outreach</h3>
              <p className="text-secondary-700">Reaching remote villages with the message of hope and salvation.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
