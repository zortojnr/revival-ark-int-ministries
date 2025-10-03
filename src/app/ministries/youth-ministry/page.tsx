'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  HeartIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  SparklesIcon,
  CalendarDaysIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/layout/Layout';

export default function YouthMinistryPage() {
  const [activeTab, setActiveTab] = useState('programs');

  const programs = [
    {
      name: 'Youth Discipleship',
      description: 'Weekly discipleship classes for spiritual growth and biblical foundation',
      schedule: 'Saturdays 4:00 PM',
      ageGroup: '13-25 years',
      icon: AcademicCapIcon
    },
    {
      name: 'Youth Worship Team',
      description: 'Training young people in music ministry and worship leading',
      schedule: 'Thursdays 6:00 PM',
      ageGroup: '16-30 years',
      icon: SparklesIcon
    },
    {
      name: 'Youth Evangelism',
      description: 'Outreach programs to schools and communities',
      schedule: 'Monthly outreaches',
      ageGroup: '15-25 years',
      icon: HeartIcon
    },
    {
      name: 'Leadership Training',
      description: 'Developing the next generation of Christian leaders',
      schedule: 'Bi-weekly sessions',
      ageGroup: '18-30 years',
      icon: UserGroupIcon
    }
  ];

  const events = [
    {
      title: 'Youth Revival Conference',
      date: 'March 15-17, 2024',
      location: 'Revival Ark Center',
      description: 'Three days of powerful worship, teaching, and fellowship'
    },
    {
      title: 'Youth Missions Trip',
      date: 'July 20-27, 2024',
      location: 'Northern Nigeria',
      description: 'Evangelistic outreach and community service'
    },
    {
      title: 'Youth Leadership Summit',
      date: 'September 10-12, 2024',
      location: 'Abuja',
      description: 'Intensive leadership development program'
    },
    {
      title: 'Christmas Youth Concert',
      date: 'December 20, 2024',
      location: 'Revival Ark Center',
      description: 'Annual Christmas celebration with music and drama'
    }
  ];

  const testimonials = [
    {
      name: 'Grace Emeka',
      age: 17,
      testimony: 'The evangelism training gave me boldness to share the Gospel with my friends at school.',
      role: 'Evangelism Team'
    }
  ];

  const leaders = [
    {
      name: 'Pastor Aaron Gassy',
      role: 'Youth Pastor',
      bio: 'Leading youth ministry with passion for discipleship and spiritual growth',
      image: '/images/leaders/youth-pastor.svg'
    },
    {
      name: 'Sister Joy Okoro',
      role: 'Youth Coordinator',
      bio: 'Coordinates youth programs and mentors young ladies',
      image: '/images/leaders/youth-coordinator.svg'
    },
    {
      name: 'Brother Samuel Eze',
      role: 'Worship Leader',
      bio: 'Leads youth worship and trains upcoming musicians',
      image: '/images/leaders/worship-leader.svg'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
          {/* Mobile-only background image with primary overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
            style={{ backgroundImage: "url('/images/logo.jpg')" }}
          />
          <div className="absolute inset-0 bg-primary-900/60 sm:hidden" />
          {/* Desktop/tablet subtle overlay */}
          <div className="absolute inset-0 bg-black/20 hidden sm:block"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold heading-primary mb-6">
                  Youth Network
                </h1>
                <p className="text-lg md:text-xl text-primary-100 mb-8">
                  &quot;Don&apos;t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.&quot;
                </p>
                <p className="text-base text-primary-200 mb-8">
                  1 Timothy 4:12 (NIV)
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#join"
                    className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
                  >
                    Join Our Youth
                  </Link>
                  <Link
                    href="#programs"
                    className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border border-primary-500 text-center"
                  >
                    View Programs
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">500+</div>
                      <div className="text-primary-200">Active Youth</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">15</div>
                      <div className="text-primary-200">Programs</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">50+</div>
                      <div className="text-primary-200">Leaders Trained</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">8</div>
                      <div className="text-primary-200">Years Impact</div>
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
            <h2 className="text-2xl md:text-3xl font-bold heading-primary text-secondary-900 mb-6">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-secondary-600 leading-relaxed mb-8">
              To empower young people to discover their identity in Christ, develop authentic relationships, 
              and make a lasting impact in their communities and beyond.
            </p>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">Passionate Worship</h3>
                <p className="text-secondary-600">Cultivating hearts that worship God in spirit and truth</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">Biblical Foundation</h3>
                <p className="text-secondary-600">Building lives on the solid foundation of God&apos;s Word</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">Community Impact</h3>
                <p className="text-secondary-600">Empowering youth to make a difference in their communities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs and Events Tabs */}
        <section id="programs" className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold heading-primary text-charcoal mb-6">
                Programs & Events
              </h2>
              <p className="text-xl text-secondary-600">
                Discover the various ways to get involved in our youth ministry
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-md">
                <button
                  onClick={() => setActiveTab('programs')}
                  className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                    activeTab === 'programs'
                      ? 'bg-primary-600 text-white'
                    : 'text-secondary-600 hover:text-primary-600'
                  }`}
                >
                  Programs
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                    activeTab === 'events'
                      ? 'bg-primary-600 text-white'
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
                    <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary-600" />
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
                  <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">{event.title}</h3>
                    <p className="text-secondary-600 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-secondary-500">
                      <div className="flex items-center gap-2">
                        <CalendarDaysIcon className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <button className="mt-4 text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold heading-primary text-secondary-900 mb-6">
                Our Leadership Team
              </h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-xl text-secondary-600">
                Passionate leaders dedicated to mentoring and guiding our youth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <UserGroupIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{leader.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{leader.role}</p>
                  <p className="text-secondary-600 text-sm">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-primary-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold heading-primary text-secondary-900 mb-6">
                Youth Testimonials
              </h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-lg text-secondary-600">
                Hear from young people whose lives have been transformed
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-primary-50 rounded-lg shadow-md p-8 border border-primary-200">
                  <p className="text-secondary-600 mb-6 italic">&quot;{testimonial.testimony}&quot;</p>
                  <div className="border-t border-primary-300 pt-6">
                    <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-sm text-secondary-500">Age {testimonial.age} • {testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join" className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold heading-primary mb-8">
              Join Youth Network
            </h2>
            <p className="text-lg text-primary-100 mb-12">
              Are you ready to grow in your faith, discover your purpose, and make a difference? 
              Join hundreds of young people who are passionate about following Jesus.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-12 mb-12">
              <h3 className="text-2xl font-semibold mb-8">Next Steps</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold mb-3">1. Visit Us</h4>
                  <p className="text-primary-100">Join us for any of our weekly programs</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">2. Connect</h4>
                  <p className="text-primary-100">Meet our leaders and other youth</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">3. Get Involved</h4>
                  <p className="text-primary-100">Find your place in ministry</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">4. Grow</h4>
                  <p className="text-primary-100">Develop your relationship with God</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
              >
                Join Youth Network
              </Link>
              <Link
                href="/events"
                className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors border border-primary-500 text-center"
              >
                View Events
              </Link>
            </div>
          </div>
        </section>
      </div>
      </Layout>
      );
}