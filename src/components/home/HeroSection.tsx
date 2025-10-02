'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, HeartIcon, GlobeAltIcon, UserGroupIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: "Global Outreach",
      subtitle: "Reaching Nations for Christ",
      description: "Join us as we spread the Gospel across continents, establishing churches, training leaders, and transforming communities worldwide through the power of God's love.",
      icon: GlobeAltIcon,
      gradient: "from-slate-900/60 via-slate-800/60 to-slate-700/60",
      backgroundImage: "/images/56.jpg",
      buttonText: "Join Our Mission",
      buttonLink: "/ministries/evangelism-missions"
    },
    {
      id: 2,
      title: "Community Impact",
      subtitle: "Building Stronger Communities",
      description: "Experience how faith transforms neighborhoods through our orphan care, educational programs, and community development initiatives that bring hope and practical support.",
      icon: UserGroupIcon,
      gradient: "from-slate-900/60 via-slate-800/60 to-slate-700/60",
      backgroundImage: "/images/57.jpg",
      buttonText: "Get Involved",
      buttonLink: "/get-involved"
    },
    {
      id: 3,
      title: "Spiritual Growth",
      subtitle: "Deepening Your Faith Journey",
      description: "Discover your purpose through our Bible school, discipleship programs, and revival meetings designed to nurture believers in their relationship with God.",
      icon: HeartIcon,
      gradient: "from-slate-900/60 via-slate-800/60 to-slate-700/60",
      backgroundImage: "/images/55.jpg",
      buttonText: "Grow With Us",
      buttonLink: "/ministries"
    }
  ];



  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <section 
      id="main-content" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Revival Ark International Ministries - Welcome"
    >
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `url(${currentSlideData.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </AnimatePresence>

      {/* Animated Background with Gradient Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Optimized Dark Overlay for Better Image Clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-5"></div>

      {/* Minimal Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 z-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      </div>

      {/* Floating Elements - Minimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/15 rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      {/* Navigation Arrows - Optimized Positioning */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full transition-all duration-300 group shadow-xl border border-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-5 w-5 text-slate-800 group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full transition-all duration-300 group shadow-xl border border-white/30"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-5 w-5 text-slate-800 group-hover:scale-110 transition-transform" />
      </button>

      {/* Main Content - Carousel with Optimized Spacing */}
      <div className="relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatePresence mode="wait" custom={currentSlide}>
            <motion.div
              key={currentSlide}
              custom={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="text-center pt-8"
            >
              {/* Ministry Badge - Repositioned */}
              <motion.div 
                className="inline-flex items-center px-5 py-2 bg-white/95 backdrop-blur-sm border border-white/50 rounded-full mb-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <HeartIcon className="h-4 w-4 text-slate-700 mr-2" />
                <span className="text-slate-700 font-semibold text-xs tracking-wide">REVIVAL ARK INTERNATIONAL MINISTRIES</span>
              </motion.div>

              {/* Icon - Optimized */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <div className="p-4 bg-white/95 backdrop-blur-sm rounded-full border border-white/50 shadow-lg">
                  <IconComponent className="h-12 w-12 text-slate-700" />
                </div>
              </motion.div>

              {/* Main Heading - Better Spacing */}
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-6xl font-heading font-black text-white mb-3 leading-tight drop-shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {currentSlideData.title}
              </motion.h1>

              {/* Subtitle - Optimized */}
              <motion.h2 
                className="text-xl sm:text-2xl lg:text-3xl font-body text-white/95 mb-6 leading-relaxed drop-shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {currentSlideData.subtitle}
              </motion.h2>

              {/* Description - Better Positioning */}
              <motion.p 
                className="text-base sm:text-lg lg:text-xl font-body text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {currentSlideData.description}
              </motion.p>

              {/* Call to Action Button - Enhanced Visibility and Positioning */}
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={currentSlideData.buttonLink}
                    className="inline-flex items-center justify-center px-10 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg border-2 border-white group"
                  >
                    {currentSlideData.buttonText}
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>



      {/* Interactive Buttons for Each Slide - Repositioned */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-wrap justify-center gap-3">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 backdrop-blur-sm border shadow-lg ${
                index === currentSlide
                  ? 'bg-white text-slate-800 border-white shadow-xl'
                  : 'bg-white/20 text-white border-white/30 hover:bg-white/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {slide.title}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Progress Bar - Minimal Design */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10 z-20">
        <motion.div
          className="h-full bg-white/80 shadow-sm"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Scroll Indicator - Repositioned */}
      <motion.div 
        className="absolute bottom-32 right-6 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center text-white/80 bg-white/10 backdrop-blur-sm rounded-full p-2">
          <span className="text-xs font-medium mb-1 rotate-90 origin-center">Scroll</span>
          <ChevronDownIcon className="h-4 w-4" />
        </div>
      </motion.div>
    </section>
  );
}