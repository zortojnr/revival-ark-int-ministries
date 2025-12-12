'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="main-content" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
      role="banner"
      aria-label="Revival Ark International Ministries - Welcome"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/2.jpg"
          alt="Revival Ark Ministry Worship"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Ministry Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mb-8"
            variants={itemVariants}
          >
            <span className="text-white text-xs md:text-sm font-medium tracking-widest uppercase">
              Revival Ark International Ministries
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
            variants={itemVariants}
          >
            Experience the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 pb-2">
              Fire of Revival
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Witnessing God's transforming power in our communities and experiencing spiritual awakening together.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Link
              href="/ministries/revival-crusades"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary-600/30 w-full sm:w-auto"
            >
              Join Revival
            </Link>
            <Link
              href="/give"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              Give Online
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDownIcon className="h-6 w-6 text-white/70" />
      </motion.div>
    </section>
  );
}
