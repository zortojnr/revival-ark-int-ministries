'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ChevronDownIcon, HeartIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline';

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

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="main-content" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#50C878' }}
      role="banner"
      aria-label="Revival Ark International Ministries - Welcome"
    >
      {/* Background Pattern - Emerald Green Theme */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(80,200,120,0.4),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(80,200,120,0.1)_25%,rgba(80,200,120,0.1)_50%,transparent_50%,transparent_75%,rgba(80,200,120,0.1)_75%)] bg-[length:80px_80px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full opacity-60"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary-400 rounded-full opacity-40"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/6 w-1 h-1 bg-primary-300 rounded-full opacity-80"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-primary-300 rounded-full opacity-50"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 3 }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Ministry Badge */}
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-8"
            variants={itemVariants}
          >
            <HeartIcon className="h-5 w-5 text-white mr-2" />
            <span className="text-white font-bold text-sm tracking-wide">REVIVAL ARK INTERNATIONAL MINISTRIES</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Experience the
            <span className="block text-white font-black">
              Fire of Revival
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl font-body text-white mb-12 leading-relaxed max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Join us as we witness God's transforming power in our communities and experience spiritual awakening together
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/ministries/revival-crusades"
                className="inline-flex items-center justify-center px-10 py-5 bg-white hover:bg-gray-100 text-black font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg border border-white"
              >
                Join Revival
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/give"
                className="inline-flex items-center justify-center px-10 py-5 bg-white hover:bg-gray-100 text-black font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg border border-white"
              >
                Give
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-10 py-5 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300 border-2 border-white hover:border-white text-lg backdrop-blur-sm"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Ministry Highlights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
            variants={itemVariants}
          >
            <motion.div 
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <GlobeAltIcon className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Global Outreach</h3>
              <p className="text-black font-semibold text-sm">Spreading the Gospel across nations and transforming communities worldwide</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <UserGroupIcon className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Community Impact</h3>
              <p className="text-black font-semibold text-sm">Building stronger communities through faith, hope, and practical support</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <HeartIcon className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Spiritual Growth</h3>
              <p className="text-black font-semibold text-sm">Nurturing believers in their faith journey and relationship with God</p>
            </motion.div>
          </motion.div>

          {/* Location Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full"
            variants={itemVariants}
          >
            <span className="text-white font-bold text-sm">📍 Jos, Nigeria</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDownIcon className="h-8 w-8 text-white" />
      </motion.div>
    </section>
  );
}