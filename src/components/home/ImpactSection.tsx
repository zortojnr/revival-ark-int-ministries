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
}

const impactStats: ImpactStat[] = [
  {
    id: 1,
    icon: HeartIcon,
    value: 100,
    suffix: '+',
    label: 'Orphans Helped',
    description: 'Children provided with care, education, and hope through our Ark of Hope ministry'
  },
  {
    id: 3,
    icon: AcademicCapIcon,
    value: 300,
    suffix: '+',
    label: 'Students Trained',
    description: 'Individuals equipped through our Sword Institute Bible School programs'
  },
  {
    id: 4,
    icon: UserGroupIcon,
    value: 1000,
    suffix: '+',
    label: 'Lives Touched',
    description: 'People reached through crusades, conferences, and ministry events'
  }
];

const testimonies: Testimony[] = [
  {
    id: 1,
    name: 'Benedict A. W.',
    location: 'Yola, Nigeria',
    testimony: 'Grace and peace in Christ Jesus. I am deeply thankful for the man of God leading Revival Ark International Ministries. His sacrificial life and faithful mentorship have profoundly shaped my spiritual walk. From my campus days, his teachings on spiritual progress ignited my faith, guiding me to a deeper relationship with God. His selfless example continues to inspire me to live boldly for Christ. I’m forever grateful for his unwavering dedication. Blessings.'
  },
  {
    id: 2,
    name: 'Goodluck O.',
    location: 'Nigerian Army University Biu, Borno state, Nigeria',
    testimony: 'My first encounter with Pastor Haruna dates back to 2014 during my university days. As a freshman who loved God and was earnestly trusting Him for direction... His personal life of Christlikeness and disciplined spiritual routines became an enviable model we all aspired to emulate. By the Lord’s mercies, it has now been over ten years, and Papa Haruna (as I fondly call him) has continued to exemplify Christ consistently and fervently. My life remains deeply nourished, shaped, and inspired through the grace of his spiritual oversight.'
  },
  {
    id: 3,
    name: 'Johnbaba Godwin',
    location: 'Jos, Nigeria',
    testimony: 'Dear Revival Ark Ministry, Let me begin with; As a Fresher on Campus then, My work with God took a new turn when Pastor Aaron preached \'Deep calls unto deep\' at NIFES Night of Encounter, Modibbo Adama University, Yola... As a Duo, your lives have been about revival, Mirroring and charting a path for true Kingdom alignment. We are grateful for all the impact hitherto and we look forward to the mighty things the Lord will wrought through this Ministry.'
  },
  {
    id: 4,
    name: 'Joy Amana',
    location: 'Yola, Nigeria',
    testimony: 'Through Pastor Haruna Aaron Saleh and Revival Ark Ministries, I have experienced God’s goodness in every area of my life. Pastor Aaron has been a true father, leader, shepherd, and teacher... I’ve watched him love his family and the church selflessly, giving me a living example of what a true man of God should be. My life is now a testimony of his impact, proof that God’s servant has indeed mirrored Christ to me.'
  }
];

export default function ImpactSection() {
  const [animatedStats, setAnimatedStats] = useState<{ [key: number]: number }>({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

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
            Our Impact <span className="text-primary-600 font-bold">Thus Far</span>
          </h2>
          <p className="body-large max-w-4xl mx-auto">
            By God's grace, Revival Ark International Ministries continues to touch lives, 
            transform communities, and advance the Kingdom of God across the globe.
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20"
          variants={containerVariants}
        >
          {impactStats.map((stat, index) => {
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

        {/* Testimonies Section (Marquee) */}
        <motion.div 
          className="rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/30 relative overflow-hidden"
          style={{ backgroundColor: '#50C878' }}
          variants={itemVariants}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-3xl z-background"></div>
          
          <div className="relative text-center mb-12 z-content">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-lg border border-white/30">
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="heading-2 text-white font-bold mb-6">
              Lives <span className="text-white font-bold">Transformed</span>
            </h3>
            <p className="body-large text-white font-semibold max-w-3xl mx-auto">
              Hear from those whose lives have been touched by God's love through our ministry.
            </p>
          </div>

          {/* Continuous Marquee */}
          <div className="relative w-full overflow-hidden mask-linear-gradient">
            <motion.div 
              className="flex space-x-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                ease: "linear", 
                duration: 40, 
                repeat: Infinity 
              }}
            >
              {[...testimonies, ...testimonies].map((testimony, index) => (
                <div 
                  key={`${testimony.id}-${index}`} 
                  className="w-[350px] sm:w-[450px] flex-shrink-0"
                >
                  <div 
                    className="h-full rounded-2xl p-8 shadow-lg border border-white/30 flex flex-col"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}
                  >
                    <div className="mb-6 flex-grow">
                      <div className="relative">
                        <span className="text-4xl text-white/40 absolute -top-4 -left-2 font-serif">"</span>
                        <p className="text-white text-sm sm:text-base italic leading-relaxed relative z-10 pl-4">
                          {testimony.testimony.length > 200 
                            ? testimony.testimony.substring(0, 200) + '...' 
                            : testimony.testimony}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-auto border-t border-white/20 pt-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white mr-3 shrink-0">
                         <span className="font-bold text-sm">{testimony.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">
                          {testimony.name}
                        </div>
                        <div className="text-white/80 text-xs font-medium">
                          {testimony.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
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
              href="/get-involved"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-white border-2 border-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <UserGroupIcon className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Get Involved
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
