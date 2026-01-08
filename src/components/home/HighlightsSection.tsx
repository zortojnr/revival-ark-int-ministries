'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';
import { PlayIcon, ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface Sermon {
  id: number;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  thumbnail: string;
  views: string;
}

const recentSermons: Sermon[] = [
  {
    id: 1,
    title: 'The Fire of Revival',
    speaker: 'Pastor Aaron Gassy',
    date: '2024-02-25',
    duration: '45 min',
    thumbnail: '/images/sermons/11.jpg',
    views: '2.3K'
  },
  {
    id: 2,
    title: 'Walking in Divine Purpose',
    speaker: 'Pastor Aaron Gassy',
    date: '2024-02-18',
    duration: '38 min',
    thumbnail: '/images/sermons/12.jpg',
    views: '1.8K'
  },
  {
    id: 3,
    title: 'The Power of Prayer',
    speaker: 'Pastor Aaron Gassy',
    date: '2024-02-11',
    duration: '42 min',
    thumbnail: '/images/sermons/13.jpg',
    views: '3.1K'
  }
];

const visionScriptures = [
  {
    verse: 'Psalm 85:6',
    text: 'Wilt thou not revive us again: that thy people may rejoice in thee?',
    icon: '🔥'
  },
  {
    verse: 'Isaiah 40:3',
    text: 'The voice of him that crieth in the wilderness, Prepare ye the way of the LORD, make straight in the desert a highway for our God.',
    icon: '🛤️'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut
    }
  }
};

export default function HighlightsSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="section-padding bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden z-background">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200/30 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-100/10 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container relative z-content">
        {/* Vision Scriptures */}
        <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
          <motion.div variants={itemVariants} className="mb-12">
            <span className="badge badge-secondary mb-6">
              <SparklesIcon className="w-5 h-5 mr-2 text-primary-600" />
              Our Foundation
            </span>
            <h2 className="heading-2 text-secondary-800 mb-4">
              Built on God's <span className="text-primary-500 font-bold">Word</span>
            </h2>
            <p className="body-large text-secondary-600 max-w-2xl mx-auto">
              Every ministry initiative is rooted in the eternal truths of Scripture, guiding our mission to bring revival to the nations.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
          >
            {visionScriptures.map((scripture, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card group hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-overlay"></div>
                
                <div className="relative z-content">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-3xl">{scripture.icon}</div>
                    <div className="flex-1">
                      <h3 className="heading-4 text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                        {scripture.verse}
                      </h3>
                    </div>
                  </div>
                  <p className="text-secondary-700 leading-relaxed font-serif italic text-lg group-hover:text-secondary-800 transition-colors">
                    "{scripture.text}"
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {/* Recent Sermons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center justify-between mb-12">
              <div>
                <h2 className="heading-3 text-secondary-800 mb-3">
                  Recent <span className="text-primary-600 font-bold">Sermons</span>
                </h2>
                <p className="body-large text-secondary-600">Watch our latest messages of hope and transformation</p>
              </div>
              <Link
                href="https://www.youtube.com/@AaronGassy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline group text-sm"
              >
                View All Sermons
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div className="space-y-6" variants={containerVariants}>
              {recentSermons.map((sermon) => (
                <motion.div
                  key={sermon.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="card group hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
                  onClick={() => window.open('https://www.youtube.com/@AaronGassy', '_blank')}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-40 h-32 sm:h-28 flex-shrink-0 overflow-hidden rounded-lg sm:rounded-r-none">
                      <Image
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 160px"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-overlay">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <PlayIcon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded z-overlay">
                        {sermon.duration}
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="heading-4 text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {sermon.title}
                      </h3>
                      <div className="flex flex-wrap items-center text-sm text-secondary-600 gap-4">
                        <span className="font-medium">{sermon.speaker}</span>
                        <span>{formatDate(sermon.date)}</span>
                        <span className="flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {sermon.views} views
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <Link
                href="https://www.youtube.com/@AaronGassy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary group"
              >
                <PlayIcon className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Browse Sermon Library
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div className="relative overflow-hidden rounded-3xl p-8 shadow-2xl" style={{ backgroundColor: '#50C878' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 z-background">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative z-content text-center">
              <motion.h2 
                className="heading-2 mb-6 text-white font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join Us in the <span className="text-white font-bold">Revival</span>
              </motion.h2>
              <motion.p 
                className="body-large mb-10 text-white font-semibold max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Be part of what God is doing in this generation. Experience the fire of revival 
                and walk in your divine purpose.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Get Involved
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 border-2 border-white hover:border-white backdrop-blur-sm"
                >
                  Contact Us
                  <svg className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}