'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FounderSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/images/founder.jpg', '/images/2.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-revival-gradient opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Founder Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl group">
                {images.map((image, index) => (
                  <Image
                    key={image}
                    src={image}
                    alt="Haruna A&apos;aron Saleh - Founder of Revival Ark International"
                    fill
                    className={`object-cover transition-all duration-1000 group-hover:scale-105 ${
                      index === currentImageIndex 
                        ? 'opacity-100 z-10' 
                        : 'opacity-0 z-0'
                    }`}
                    priority={index === 0}
                  />
                ))}
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-revival-gradient rounded-full opacity-20 -z-10 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent-500 rounded-full opacity-30 -z-10 animate-bounce"></div>
            </div>
          </motion.div>

          {/* Founder Biography */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-6 py-3 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                  Leadership
                </span>
                <h2 className="heading-primary text-4xl lg:text-5xl text-secondary-800 mb-4 leading-tight">
                  Meet Our <span className="text-revival-gradient">Founder</span>
                </h2>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-600 mb-2">
                  Haruna A&apos;aron Saleh
                </h3>
                <p className="text-lg text-primary-500 font-medium">
                  Founder & Visionary Leader
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="space-y-6 text-secondary-700 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl leading-relaxed">
                Haruna A&apos;aron Saleh is the visionary founder of Revival Ark International Ministries. 
                A servant of God with a passion for prayer, revival, and discipleship, he carries a 
                strong prophetic and teaching grace with a mandate to awaken hearts and raise a 
                generation that is aflame with the fire of the Holy Spirit.
              </p>
              
              <p>
                With years of ministry experience, Haruna A&apos;aron Saleh is committed to proclaiming 
                the uncompromising truth of God&apos;s Word, mentoring believers into maturity, and 
                equipping leaders for kingdom impact. His heart beats for global revival, campus 
                transformation, and raising disciples who will carry Christ&apos;s light into every 
                sphere of life.
              </p>

              <p>
                Through teaching, preaching, writing, and mentorship, he continues to inspire many 
                to walk in holiness, pursue God passionately, and fulfill their divine calling.
              </p>
            </motion.div>

            {/* Enhanced Call to Action */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="absolute inset-0 bg-revival-gradient opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary-800 mb-4">
                        Ministry Leadership
                      </h3>
                      <p className="text-lg text-primary-700 leading-relaxed">
                        Leading Revival Ark International Ministries with passion, 
                        integrity, and a heart for global transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ministry Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-300">20+</div>
                <div className="text-sm text-secondary-600 font-medium">Years of Ministry</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-300">1000+</div>
                <div className="text-sm text-secondary-600 font-medium">Lives Transformed</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-300">10+</div>
                <div className="text-sm text-secondary-600 font-medium">Ministry Arms</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}