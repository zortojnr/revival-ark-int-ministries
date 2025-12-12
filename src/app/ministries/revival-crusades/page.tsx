'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { UserGroupIcon, FireIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function RevivalCrusadesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Large%20outdoor%20Christian%20revival%20crusade%2C%20crowd%20worshipping%20with%20hands%20raised%2C%20stage%20with%20lights%2C%20night%20time%2C%20spiritual%20atmosphere%2C%20realistic&image_size=landscape_16_9"
            alt="Revival Crusades"
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
              Revival Crusades
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              Igniting the fire of revival in cities and nations through mass evangelism and power-packed crusades.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="min-h-screen bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <FireIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Holy Spirit Fire</h3>
              <p className="text-gray-600">Experiencing the raw power and presence of God.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <UserGroupIcon className="w-12 h-12 text-accent-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Mass Salvation</h3>
              <p className="text-gray-600">Winning souls for the Kingdom in great numbers.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <GlobeAltIcon className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">City Transformation</h3>
              <p className="text-gray-600">Impacting communities with the Gospel of Jesus Christ.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Upcoming Crusades</h2>
            <p className="text-lg text-gray-600">
              Stay tuned for updates on our next crusade location and dates.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
