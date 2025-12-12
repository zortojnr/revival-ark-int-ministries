'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { HandRaisedIcon, HeartIcon, GlobeAltIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function GetInvolvedPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/get-involved/volunteer.jpg"
            alt="Get Involved - Volunteer"
            fill
            className="object-cover"
            priority
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
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              Join us in our mission to spread the Gospel and serve our communities. There is a place for you here.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Ways to Serve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Ways You Can Serve</h2>
            <div className="w-20 h-1.5 bg-primary-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600">
              We believe every believer has a part to play in the Great Commission. Whether through your time, talents, or resources, you can make an eternal impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Volunteer */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
                <HandRaisedIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Serve on our ministry teams during crusades, conferences, and weekly services. From ushering to media, there's a role for you.
              </p>
              <Link href="/contact?subject=Volunteer" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center">
                Sign Up to Serve <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Outreach */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6 text-secondary-600">
                <GlobeAltIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outreach & Missions</h3>
              <p className="text-gray-600 mb-6">
                Join us as we take the Gospel to the streets, villages, and nations. Participate in medical outreaches, evangelism, and more.
              </p>
              <Link href="/contact?subject=Missions" className="text-secondary-600 font-semibold hover:text-secondary-700 flex items-center">
                Join an Outreach <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Prayer Partner */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6 text-accent-600">
                <HeartIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prayer Partner</h3>
              <p className="text-gray-600 mb-6">
                Commit to praying for the ministry, our leaders, and the nations. Prayer is the fuel for revival.
              </p>
              <Link href="/contact?subject=Prayer Partner" className="text-accent-600 font-semibold hover:text-accent-700 flex items-center">
                Join Prayer Team <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Image Section */}
      <section className="py-16 md:py-24 bg-white text-secondary-900 relative overflow-hidden border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900">Building Kingdom Communities</h2>
              <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                When you get involved, you become part of a family that is passionate about Jesus and people. We grow together, serve together, and rejoice together in what God is doing.
              </p>
              <p className="text-lg text-secondary-700 mb-8 leading-relaxed font-medium italic">
                "Two are better than one, because they have a good return for their labor." - Ecclesiastes 4:9
              </p>
              <Link
                href="/ministries/revival-crusades"
                className="inline-flex items-center px-8 py-3 bg-white text-secondary-900 font-bold rounded-lg border-2 border-secondary-900 hover:bg-secondary-50 transition-colors shadow-lg"
              >
                See Upcoming Events
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <Image
                  src="/images/get-involved/volunteer.jpg"
                  alt="Volunteers serving together"
                  fill
                  className="object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-6">Ready to Take the Next Step?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you. Let us know how you'd like to get involved, and we'll get you connected to the right team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-secondary-900 border-2 border-secondary-900 font-bold rounded-full hover:bg-secondary-50 transition-colors shadow-lg"
          >
            <EnvelopeIcon className="w-5 h-5 mr-2" />
            Contact Us Today
          </Link>
        </div>
      </section>
    </Layout>
  );
}
