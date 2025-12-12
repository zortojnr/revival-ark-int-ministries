'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { HandRaisedIcon, FireIcon } from '@heroicons/react/24/outline';

export default function PrayerMinistryPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Group%20of%20people%20praying%20intensely%20in%20a%20church%2C%20spiritual%20atmosphere%2C%20light%20beams%2C%20diverse%20group%2C%20kneeling%2C%20realistic&image_size=landscape_16_9"
            alt="Prayer Ministry"
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
              Prayer Ministry
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              "My house shall be called a house of prayer for all nations." - Mark 11:17
            </p>
          </motion.div>
        </div>
      </div>

      <div className="min-h-screen bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-secondary-700 mb-12 text-center max-w-2xl mx-auto">
            We believe that prayer is the engine room of the ministry. Join us as we intercede for our families, our city, our nation, and the world.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
                <HandRaisedIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Intercession</h2>
              <p className="text-secondary-700 leading-relaxed">
                Standing in the gap for the lost, the sick, and the brokenhearted. We host regular intercessory prayer meetings to seek God's face.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-6 text-accent-600">
                <FireIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Revival Prayer</h2>
              <p className="text-secondary-700 leading-relaxed">
                Crying out for a fresh outpouring of the Holy Spirit and a mighty move of God in our generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
