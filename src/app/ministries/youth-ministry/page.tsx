'use client';

import { useState, useEffect, useRef } from 'react';
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

  const testimonials: { name: string; age?: number; testimony: string; role?: string }[] = [];

  const leaders: { name: string; role: string; bio?: string; image?: string }[] = [];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-20">
          {/* Mobile-only background image with primary overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
            style={{ backgroundImage: "url('/images/logo.jpg')" }}
          />
          <div className="absolute inset-0 bg-emerald-900/50 sm:hidden" />
          {/* Desktop/tablet subtle overlay */}
          <div className="absolute inset-0 bg-black/10 hidden sm:block"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold heading-primary mb-6">
                  Youth Network
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  &quot;Don&apos;t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.&quot;
                </p>
                <p className="text-base text-white/80 mb-8">
                  1 Timothy 4:12 (NIV)
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#join"
                    className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors text-center border border-neutral-200"
                  >
                    Join Our Youth
                  </Link>
                  <Link
                    href="#programs"
                    className="bg-amber-300 text-black px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors text-center border border-amber-400"
                  >
                    View Programs
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white mb-2"><AnimatedCounter start={500} speedPerSecond={0.8} suffix="+" /></div>
                      <div className="text-primary-200">Active Youth</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2"><AnimatedCounter start={15} speedPerSecond={0.2} /></div>
                      <div className="text-primary-200">Programs</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2"><AnimatedCounter start={50} speedPerSecond={0.5} suffix="+" /></div>
                      <div className="text-primary-200">Leaders Trained</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-2"><AnimatedCounter start={8} speedPerSecond={0.1} /></div>
                      <div className="text-primary-200">Years Impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section id="mission" className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold heading-primary text-secondary-900 mb-6 text-center">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-secondary-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              To empower young people to discover their identity in Christ, develop authentic relationships, 
              and make a lasting impact in their communities and beyond.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Passionate Worship */}
              <div className="group relative rounded-2xl bg-white border border-emerald-200 shadow-lg transition-all duration-300 motion-safe:hover:shadow-xl motion-safe:hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-emerald-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                      <HeartIcon className="h-6 w-6 text-emerald-700" />
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold heading-primary text-secondary-900">Passionate Worship</h3>
                  </div>
                  <p className="text-secondary-700">Cultivating hearts that worship God in spirit and truth.</p>
                </div>
              </div>

              {/* Card 2: Biblical Foundation */}
              <div className="group relative rounded-2xl bg-white border border-emerald-200 shadow-lg transition-all duration-300 motion-safe:hover:shadow-xl motion-safe:hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-emerald-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                      <AcademicCapIcon className="h-6 w-6 text-emerald-700" />
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold heading-primary text-secondary-900">Biblical Foundation</h3>
                  </div>
                  <p className="text-secondary-700">Building lives on the solid foundation of God&apos;s Word.</p>
                </div>
              </div>

              {/* Card 3: Community Impact */}
              <div className="group relative rounded-2xl bg-white border border-emerald-200 shadow-lg transition-all duration-300 motion-safe:hover:shadow-xl motion-safe:hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-emerald-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                      <UserGroupIcon className="h-6 w-6 text-emerald-700" />
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold heading-primary text-secondary-900">Community Impact</h3>
                  </div>
                  <p className="text-secondary-700">Empowering youth to make a difference in their communities.</p>
                </div>
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
                      ? 'bg-primary-600 text-black'
                      : 'text-black hover:text-primary-700'
                  }`}
                >
                  Programs
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={`px-7 py-2.5 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    activeTab === 'events'
                      ? 'bg-emerald-600 text-black shadow ring-2 ring-emerald-300'
                      : 'bg-emerald-500 text-black border border-emerald-800 hover:bg-emerald-600'
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
                    <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border-4 border-black">
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
              <div className="space-y-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-secondary-900">Upcoming Events</h3>
                  <p className="text-secondary-600">Discover what’s happening and how to participate. Each card shows When and Where; use the button to view full details and registration.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  {events.map((event, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border-4 border-black">
                      <h3 className="text-xl font-semibold text-secondary-900 mb-3">{event.title}</h3>
                      <p className="text-secondary-700 mb-4">{event.description}</p>
                      <div className="mt-2 space-y-2 text-sm text-secondary-700">
                        <div className="flex items-center gap-2">
                          <CalendarDaysIcon className="w-4 h-4 text-secondary-900" />
                          <span><span className="font-medium text-secondary-900">When:</span> {event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="w-4 h-4 text-secondary-900" />
                          <span><span className="font-medium text-secondary-900">Where:</span> {event.location}</span>
                        </div>
                      </div>
                      <button
                        className="mt-6 inline-flex items-center gap-1 px-4 py-2 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                        aria-label={`View details and registration for ${event.title}`}
                      >
                        View details & registration
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
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

            {leaders.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-neutral-200">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Leadership profiles coming soon</h3>
                <p className="text-secondary-600">We’re updating this section. Please check back later or contact us for more information.</p>
              </div>
            ) : (
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
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-primary-100">
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
            {testimonials.length === 0 ? (
               <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-neutral-200">
                 <h3 className="text-xl font-semibold text-secondary-900 mb-2">Testimonials coming soon</h3>
                 <p className="text-secondary-600">We’re updating this section. Please check back later or contact us to share your story.</p>
               </div>
            ) : (
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
            )}
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join" className="py-20 bg-secondary-800 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold heading-primary mb-8 text-black">
              Join Youth Network
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-2">Join Youth Network information coming soon</h3>
              <p className="text-black">We’re preparing this section. Please check back later or contact us if you’d like to get involved now.</p>
            </div>
          </div>
        </section>
      </div>
      </Layout>
      );
}

// Animated counter that continuously increments
function AnimatedCounter({
  start = 0,
  speedPerSecond = 0.5,
  className = '',
  suffix = ''
}: {
  start?: number;
  speedPerSecond?: number; // units per second
  className?: string;
  suffix?: string;
}) {
  const [value, setValue] = useState<number>(start);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = timestamp;
      }
      const delta = (timestamp - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = timestamp;
      setValue((prev) => prev + speedPerSecond * delta);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [speedPerSecond]);

  const display = Math.floor(value).toLocaleString();
  return <span className={className}>{display}{suffix}</span>;
}