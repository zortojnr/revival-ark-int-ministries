'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { SparklesIcon, MusicalNoteIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function YouthNetworkPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Energetic%20Christian%20youth%20worship%20concert%2C%20young%20adults%20singing%2C%20modern%20band%2C%20stage%20lights%2C%20joyful%20atmosphere%2C%20realistic&image_size=landscape_16_9"
            alt="Youth Network"
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
              Youth Network
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              A generation rising up to take their place in God's Kingdom. Passionate, purposeful, and powered by the Holy Spirit.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="min-h-screen bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-secondary-700 mb-12 text-center max-w-2xl mx-auto">
            Our Youth Network is a vibrant community where young people can encounter God, find belonging, and be equipped to impact their world.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
                <SparklesIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Discipleship</h3>
              <p className="text-secondary-700">Growing deep roots in faith through mentorship and study.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-6 text-secondary-600">
                <MusicalNoteIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Worship</h3>
              <p className="text-secondary-700">Expressing our love for God through dynamic and spirit-filled worship.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-6 text-accent-600">
                <AcademicCapIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Leadership</h3>
              <p className="text-secondary-700">Training the next generation of leaders for the church and marketplace.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
