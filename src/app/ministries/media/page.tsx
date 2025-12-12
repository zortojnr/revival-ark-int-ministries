'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { VideoCameraIcon, ComputerDesktopIcon, SignalIcon } from '@heroicons/react/24/outline';

export default function MediaMinistryPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20video%20production%20team%20filming%20a%20church%20service%2C%20cameras%2C%20mixing%20console%2C%20computers%2C%20modern%20technology%20in%20ministry%2C%20realistic&image_size=landscape_16_9"
            alt="Media Ministry"
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
              Media Ministry
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              Amplifying the Gospel through technology, creativity, and excellence.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="min-h-screen bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-secondary-700 mb-12 text-center max-w-2xl mx-auto">
            Our Media Ministry is responsible for capturing, producing, and broadcasting the life-transforming message of Jesus Christ to the world.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
                <VideoCameraIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Production</h3>
              <p className="text-secondary-700">Video recording, editing, and production for services and events.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-6 text-secondary-600">
                <SignalIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Live Streaming</h3>
              <p className="text-secondary-700">Broadcasting our services to a global audience online.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-6 text-accent-600">
                <ComputerDesktopIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Social Media</h3>
              <p className="text-secondary-700">Engaging with our community through digital platforms and content.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
