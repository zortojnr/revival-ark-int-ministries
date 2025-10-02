'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, easeOut } from 'framer-motion';
import { HeartIcon, GlobeAltIcon, AcademicCapIcon, UserGroupIcon, SparklesIcon, StarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface ImpactStat {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  suffix?: string;
  description: string;
}

interface Testimony {
  id: number;
  name: string;
  location: string;
  testimony: string;
  image: string;
}

const impactStats: ImpactStat[] = [
  {
    id: 1,
    icon: HeartIcon,
    value: 2500,
    suffix: '+',
    label: 'Orphans Helped',
    description: 'Children provided with care, education, and hope through our Ark of Hope ministry'
  },
  {
    id: 2,
    icon: GlobeAltIcon,
    value: 15,
    label: 'Nations Reached',
    description: 'Countries where our missions and outreach programs have made an impact'
  },
  {
    id: 3,
    icon: AcademicCapIcon,
    value: 1200,
    suffix: '+',
    label: 'Students Trained',
    description: 'Individuals equipped through our Sword Institute Bible School programs'
  },
  {
    id: 4,
    icon: UserGroupIcon,
    value: 50000,
    suffix: '+',
    label: 'Lives Touched',
    description: 'People reached through crusades, conferences, and ministry events'
  }
];

const testimonies: Testimony[] = [
  {
    id: 3,
    name: 'Grace Adebayo',
    location: 'Ibadan, Nigeria',
    testimony: 'Through the women\'s ministry, I found healing from past hurts and discovered my calling. I now lead a support group for women in my community.',
    image: '/images/testimonies/grace-adebayo.jpg'
  }
];

export default function ImpactSection() {
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const [animatedStats, setAnimatedStats] = useState<{ [key: number]: number }>({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Auto-rotate testimonies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimony((prev) => (prev + 1) % testimonies.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);

  // Animate stats when section comes into view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      controls.start("visible");
      
      // Animate each stat
      impactStats.forEach((stat) => {
        let current = 0;
        const increment = stat.value / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({
            ...prev,
            [stat.id]: Math.floor(current)
          }));
        }, 20);
      });
    }
  }, [isInView, hasAnimated, controls]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K';
    }
    return num.toString();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef} 
      className="section-padding bg-gradient-to-br from-primary-50/20 via-white to-secondary-50/30 overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden z-background">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-primary-200/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-secondary-200/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-primary-100/30 to-secondary-100/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-content">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6 shadow-lg border border-primary-400/20">
            <SparklesIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="heading-1 mb-6">
            Our Impact Across <span className="text-white font-bold">Nations</span>
          </h2>
          <p className="body-large max-w-4xl mx-auto">
            By God&apos;s grace, Revival Ark International Ministries continues to touch lives, 
            transform communities, and advance the Kingdom of God across the globe.
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20"
          variants={containerVariants}
        >
          {impactStats.map((stat) => {
            const IconComponent = stat.icon;
            const animatedValue = animatedStats[stat.id] || 0;
            
            return (
              <motion.div
                key={stat.id}
                className="text-center group"
                variants={statVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:from-primary-600 group-hover:to-primary-700 border border-primary-400/20">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  {/* Floating decoration */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <StarIcon className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-secondary-900 to-primary-700 bg-clip-text text-transparent mb-2">
                  {formatNumber(animatedValue)}{stat.suffix}
                </div>
                <div className="text-lg font-semibold text-primary-600 mb-3">
                  {stat.label}
                </div>
                <p className="body-small px-2">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonies Section */}
        <motion.div 
          className="rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/30 relative"
          style={{ backgroundColor: '#50C878' }}
          variants={itemVariants}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-3xl z-background"></div>
          <div className="absolute top-6 right-6 w-20 h-20 bg-white/20 rounded-full blur-xl z-background"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/20 rounded-full blur-lg z-background"></div>
          
          <div className="relative text-center mb-12 z-content">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-lg border border-white/30">
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="heading-2 text-white font-bold mb-6">
              Lives <span className="text-white font-bold">Transformed</span>
            </h3>
            <p className="body-large text-white font-semibold max-w-3xl mx-auto">
              Hear from those whose lives have been touched by God&apos;s love through our ministry.
            </p>
          </div>

          {/* Testimony Carousel */}
          <div className="relative max-w-4xl mx-auto z-content">
            <div className="overflow-hidden rounded-2xl">
              <motion.div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimony * 100}%)` }}
                animate={{ x: -currentTestimony * 100 + '%' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {testimonies.map((testimony) => (
                  <div key={testimony.id} className="w-full flex-shrink-0">
                    <motion.div 
                      className="rounded-2xl p-8 lg:p-12 shadow-lg mx-4 border border-white/30"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                        <div className="relative w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0">
                          <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/30">
                            <UserGroupIcon className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
                          </div>
                          {/* Decorative ring */}
                          <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse"></div>
                        </div>
                        <div className="flex-1 text-center lg:text-left">
                          <blockquote className="body-large mb-6 italic relative text-white font-semibold">
                            <span className="text-4xl text-white absolute -top-2 -left-2">&quot;</span>
                            {testimony.testimony}
                            <span className="text-4xl text-white absolute -bottom-4 -right-2">&quot;</span>
                          </blockquote>
                          <div className="flex items-center justify-center lg:justify-start space-x-2">
                            <div>
                              <div className="font-bold text-white text-lg">
                                {testimony.name}
                              </div>
                              <div className="text-white font-semibold">
                                {testimony.location}
                              </div>
                            </div>
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Testimony Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonies.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimony(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimony
                      ? 'bg-white scale-125 shadow-lg'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View testimony ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-lg border border-white/30">
            <HeartIcon className="h-8 w-8 text-white" />
          </div>
          <h3 className="heading-3 mb-4 text-white font-bold">
            Be Part of the <span className="text-white font-bold">Story</span>
          </h3>
          <p className="body-large mb-8 max-w-2xl mx-auto text-white font-semibold">
            Your support helps us continue reaching the lost, caring for orphans, 
            and training the next generation of kingdom leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/give"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ backgroundColor: '#50C878' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <HeartIcon className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Support Our Mission
            </motion.a>
            <motion.a
              href="/get-involved/volunteer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-white border-2 border-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <UserGroupIcon className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Volunteer With Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}