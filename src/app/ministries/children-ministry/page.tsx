'use client';

import { useState } from 'react';
// Removed unused Image import
import Link from 'next/link';
import { 
  UserGroupIcon, 
  AcademicCapIcon,
  SparklesIcon,
  CalendarDaysIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  GiftIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/layout/Layout';

export default function ChildrenMinistryPage() {
  const [activeTab, setActiveTab] = useState('programs');

  const programs = [
    {
      name: 'Sunday School',
      description: 'Age-appropriate Bible lessons with fun activities and crafts',
      schedule: 'Sundays 9:00 AM',
      ageGroup: '3-12 years',
      icon: BookOpenIcon
    },
    {
      name: 'Children\'s Church',
      description: 'Worship service designed specifically for children',
      schedule: 'Sundays 10:30 AM',
      ageGroup: '5-12 years',
      icon: SparklesIcon
    },
    {
      name: 'Kids Club',
      description: 'Midweek program with games, stories, and character building',
      schedule: 'Wednesdays 4:00 PM',
      ageGroup: '6-12 years',
      icon: GiftIcon
    },
    {
      name: 'Vacation Bible School',
      description: 'Annual week-long summer program with themes and activities',
      schedule: 'Annual (July)',
      ageGroup: '4-12 years',
      icon: AcademicCapIcon
    }
  ];

  const events = [
    {
      title: 'Children\'s Easter Celebration',
      date: 'March 31, 2024',
      location: 'Revival Ark Center',
      description: 'Special Easter program with drama, songs, and egg hunt'
    },
    {
      title: 'Kids Summer Camp',
      date: 'July 15-19, 2024',
      location: 'Camp Galilee',
      description: 'Five days of outdoor activities, Bible lessons, and fun'
    },
    {
      title: 'Children\'s Harvest Festival',
      date: 'October 31, 2024',
      location: 'Revival Ark Center',
      description: 'Alternative Halloween celebration with games and treats'
    },
    {
      title: 'Christmas Pageant',
      date: 'December 22, 2024',
      location: 'Revival Ark Center',
      description: 'Children present the nativity story through drama and song'
    }
  ];

  const ageGroups = [
    {
      name: 'Nursery',
      age: '0-2 years',
      description: 'Safe, loving care for infants and toddlers during services',
      features: ['Professional childcare', 'Age-appropriate toys', 'Diaper changing', 'Bottle feeding']
    },
    {
      name: 'Preschool',
      age: '3-4 years',
      description: 'Simple Bible stories with songs, crafts, and play time',
      features: ['Bible story time', 'Worship songs', 'Creative crafts', 'Snack time']
    },
    {
      name: 'Elementary',
      age: '5-8 years',
      description: 'Interactive lessons teaching foundational Bible truths',
      features: ['Interactive lessons', 'Memory verses', 'Group activities', 'Character building']
    },
    {
      name: 'Preteens',
      age: '9-12 years',
      description: 'Deeper Bible study preparing for youth ministry',
      features: ['Bible study', 'Leadership training', 'Service projects', 'Mentorship']
    }
  ];

  const testimonials = [
    {
      parent: 'Mrs. Adebayo',
      child: 'Timmy (age 7)',
      testimony: 'My son loves coming to church now. He comes home singing the songs and telling us Bible stories.',
      program: 'Sunday School'
    },
    {
      parent: 'Mr. & Mrs. Okafor',
      child: 'Grace (age 5)',
      testimony: 'The children\'s ministry has helped our daughter develop a love for Jesus and His Word.',
      program: 'Children\'s Church'
    },
    {
      parent: 'Mrs. Emeka',
      child: 'Samuel (age 10)',
      testimony: 'The character lessons have really helped my son make better choices at school.',
      program: 'Kids Club'
    }
  ];

  const leaders = [
    {
      name: 'Sister Ruth Adeyemi',
      role: 'Children\'s Pastor',
      bio: 'Passionate about nurturing young hearts for over 10 years',
      image: '/images/leaders/children-pastor.svg'
    },
    {
      name: 'Brother John Eze',
      role: 'Kids Club Leader',
      bio: 'Creative storyteller and children\'s activities coordinator',
      image: '/images/leaders/kids-leader.svg'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-accent-50 to-primary-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-accent-500 to-primary-500 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold heading-primary mb-6">
                  Children&apos;s Ministry
                </h1>
                <p className="text-lg md:text-xl text-accent-100 mb-8">
                  &quot;Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.&quot;
                </p>
                <p className="text-base text-accent-200 mb-8">
                  Matthew 19:14 (NIV)
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold hover:bg-accent-50 transition-colors text-center"
                  >
                    Join Children&apos;s Ministry
                  </Link>
                  <Link
                    href="/events"
                    className="bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-colors border border-accent-400 text-center"
                  >
                    View Events
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">200+</div>
                      <div className="text-accent-200">Children Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">25+</div>
                      <div className="text-accent-200">Volunteers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">8</div>
                      <div className="text-accent-200">Age Groups</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">12</div>
                      <div className="text-accent-200">Years Ministry</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        {/* Mission Statement */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold heading-primary text-secondary-900 mb-8">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-secondary-600 leading-relaxed mb-8">
              To partner with parents in raising children who know, love, and serve Jesus Christ. 
              We create a safe, fun, and engaging environment where children can discover God&apos;s love, 
              learn biblical truths, and develop lasting friendships.
            </p>
            <div className="bg-primary-100 rounded-xl p-8 border-l-4 border-primary-500">
              <p className="text-lg text-primary-700 italic">
                &quot;Train up a child in the way he should go; even when he is old he will not depart from it.&quot; 
                - Proverbs 22:6
              </p>
            </div>
          </div>
        </section>
    
        {/* Age Groups */}
        <section className="py-20 bg-primary-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold heading-primary text-secondary-900 mb-6">
                Age Groups
              </h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-lg text-secondary-600">
                Age-appropriate programs designed for every stage of childhood
              </p>
            </div>
    
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {ageGroups.map((group, index) => (
                <div key={index} className="bg-primary-50 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border border-primary-200">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">{group.name}</h3>
                    <p className="text-primary-600 font-medium">{group.age}</p>
                  </div>
                  <p className="text-secondary-600 mb-4 text-sm">{group.description}</p>
                  <ul className="space-y-1">
                    {group.features.map((feature: string, idx: number) => (
                      <li key={idx} className="text-sm text-secondary-500 flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
    
        {/* Programs */}
        <section id="programs" className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold heading-primary text-secondary-900 mb-6">
                Our Programs
              </h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-lg text-secondary-600">
                Engaging activities and programs designed to help children grow in their faith
              </p>
            </div>
    
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-primary-100 rounded-lg p-1 shadow-md">
                <button
                  onClick={() => setActiveTab('programs')}
                  className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                    activeTab === 'programs'
                      ? 'bg-primary-500 text-white'
                      : 'text-secondary-600 hover:text-primary-600'
                  }`}
                >
                  Programs
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                    activeTab === 'events'
                      ? 'bg-primary-500 text-white'
                      : 'text-secondary-600 hover:text-primary-600'
                  }`}
                >
                  Events
                </button>
              </div>
            </div>
    
            {/* Programs Tab */}
            {activeTab === 'programs' && (
              <div className="grid md:grid-cols-2 gap-10">
                {programs.map((program, index) => {
                  const IconComponent = program.icon;
                  return (
                    <div key={index} className="bg-neutral-50 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-accent-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-charcoal mb-2">{program.name}</h3>
                          <p className="text-secondary-600 mb-4">{program.description}</p>
                          <div className="space-y-2 text-sm text-secondary-500">
                            <div className="flex items-center gap-2">
                              <ClockIcon className="w-4 h-4" />
                              <span>{program.schedule}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <UserGroupIcon className="w-4 h-4" />
                              <span>{program.ageGroup}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
    
            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="grid md:grid-cols-2 gap-10">
                {events.map((event, index) => (
                  <div key={index} className="bg-neutral-50 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-charcoal mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <CalendarDaysIcon className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <button className="mt-4 text-accent-600 font-semibold hover:text-accent-700 flex items-center gap-1">
                        Learn More
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
    
        {/* Leadership Team */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold heading-primary text-secondary-900 mb-6">
                Our Leadership Team
              </h2>
              <p className="text-xl text-secondary-600">
                Dedicated leaders committed to nurturing your child&apos;s spiritual growth
              </p>
            </div>
    
            <div className="grid md:grid-cols-3 gap-10">
              {leaders.map((leader, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-8 shadow-md">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <UserGroupIcon className="w-16 h-16 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{leader.name}</h3>
                  <p className="text-accent-600 font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    
        {/* Parent Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold heading-primary text-secondary-900 mb-6">
                Parent Testimonials
              </h2>
              <p className="text-lg text-secondary-600">
                Hear from parents about their children&apos;s experience in our ministry
              </p>
            </div>
    
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md p-8">
                  <p className="text-gray-600 mb-4 italic">&quot;{testimonial.testimony}&quot;</p>
                  <div className="border-t border-orange-200 pt-4">
                    <h4 className="font-semibold text-charcoal">{testimonial.parent}</h4>
                    <p className="text-sm text-gray-500">Parent of {testimonial.child}</p>
                    <p className="text-sm text-accent-600 font-medium">{testimonial.program}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    
        {/* Registration Section */}
        <section id="register" className="py-20 bg-gradient-to-r from-accent-500 to-primary-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold heading-primary mb-8">
              Join Our Children&apos;s Ministry
            </h2>
            <p className="text-lg text-accent-100 mb-12">
              We would love to welcome your child into our ministry family. 
              Contact us today to learn more about our programs and how to get involved.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4">What to Expect</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">Safe Environment</h4>
                  <p className="text-accent-100">Background-checked volunteers and secure facilities</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Age-Appropriate Learning</h4>
                  <p className="text-accent-100">Curriculum designed for each developmental stage</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fun Activities</h4>
                  <p className="text-accent-100">Games, crafts, music, and interactive lessons</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Spiritual Growth</h4>
                  <p className="text-accent-100">Building a foundation of faith and character</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold hover:bg-accent-50 transition-colors"
              >
                Contact Children&apos;s Pastor
              </Link>
              <Link
                href="/events"
                className="bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-colors border border-accent-400"
              >
                View Upcoming Events
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}