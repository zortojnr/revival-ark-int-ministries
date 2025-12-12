'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { BookOpenIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function SwordInstitutePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Students%20studying%20in%20a%20modern%20bible%20college%20library%2C%20open%20bibles%2C%20group%20discussion%2C%20serious%20and%20academic%20atmosphere%2C%20realistic&image_size=landscape_16_9"
            alt="Sword Institute"
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
              Sword Institute
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              Equipping believers with the Word of Truth for effective ministry and leadership.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="min-h-screen bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-secondary-700 mb-12 text-center max-w-2xl mx-auto">
            The Sword Institute is our ministry's Bible School, dedicated to raising disciples who are grounded in Scripture and empowered by the Spirit.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
                <BookOpenIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Biblical Studies</h3>
              <p className="text-secondary-700">In-depth study of the Old and New Testaments, theology, and doctrine.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-6 text-secondary-600">
                <AcademicCapIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Ministry Training</h3>
              <p className="text-secondary-700">Practical training in preaching, teaching, counseling, and leadership.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-6 text-accent-600">
                <UserGroupIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Spiritual Formation</h3>
              <p className="text-secondary-700">Character development and spiritual disciplines for a life of godliness.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
