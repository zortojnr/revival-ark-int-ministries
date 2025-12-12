'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { UserGroupIcon, StarIcon, SparklesIcon, BookOpenIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';

export default function ArkKidsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/ministries/children/hero.jpg"
            alt="Ark Kids Ministry"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ark Kids Ministry
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              Catching them young for Christ. Nurturing the next generation of Kingdom giants.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                 <Image
                    src="/images/ministries/children/1.jpg"
                    alt="Children learning"
                    fill
                    className="object-cover"
                  />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
                 <Image
                    src="/images/ministries/children/2.jpg"
                    alt="Children worshiping"
                    fill
                    className="object-cover"
                  />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Raising Champions for Jesus
              </h2>
              <div className="w-20 h-1.5 bg-primary-500 mb-8 rounded-full"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Ark Kids, we believe that children are not just the church of tomorrow, but the church of today. Our "Catch Them Young" initiative is designed to introduce children to the love of Jesus early in life, laying a solid biblical foundation for their future.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We create a fun, safe, and spiritually enriching environment where children can encounter God, learn His Word, and discover their unique gifts and purpose.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <StarIcon className="w-6 h-6 text-primary-500 mr-3" />
                  <span className="text-gray-700 font-medium">Biblically-based curriculum</span>
                </li>
                <li className="flex items-center">
                  <SparklesIcon className="w-6 h-6 text-primary-500 mr-3" />
                  <span className="text-gray-700 font-medium">Engaging worship and activities</span>
                </li>
                <li className="flex items-center">
                  <UserGroupIcon className="w-6 h-6 text-primary-500 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated and caring teachers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Our Activities</h2>
            <p className="text-lg text-gray-600">
              We offer a variety of programs tailored to different age groups to help them grow in faith and character.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
              <div className="h-48 bg-primary-200 flex items-center justify-center">
                <BookOpenIcon className="w-20 h-20 text-primary-600 opacity-80" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Bible Stories & Study</h3>
                <p className="text-gray-600">
                  Interactive lessons that bring the Bible to life, helping children understand and apply God's Word.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
              <div className="h-48 bg-secondary-200 flex items-center justify-center">
                <MusicalNoteIcon className="w-20 h-20 text-secondary-600 opacity-80" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Worship & Arts</h3>
                <p className="text-gray-600">
                  Teaching children to express their love for God through singing, dance, and creative arts.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
              <div className="h-48 bg-accent-200 flex items-center justify-center">
                <UserGroupIcon className="w-20 h-20 text-accent-600 opacity-80" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Fun & Fellowship</h3>
                <p className="text-gray-600">
                  Games, outings, and events that build friendships and teach the value of Christian community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent's Corner / CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-secondary-900 rounded-3xl p-10 md:p-16 relative overflow-hidden">
             {/* Abstract shapes */}
             <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bring Your Kids This Sunday!
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                We would love to welcome your children to the Ark Kids family. Join us for a service filled with fun, faith, and friends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-secondary-900 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Plan a Visit
                </Link>
                <Link
                  href="/get-involved"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                >
                  Serve in Ark Kids
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
