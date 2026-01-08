'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { WrenchScrewdriverIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function UnderConstruction() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-8">
          <WrenchScrewdriverIcon className="h-10 w-10 text-primary-600" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Coming Soon
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          We are currently working on this page. Please check back later for updates as we continue to build our online presence.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
