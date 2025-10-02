import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRightIcon, 
  HeartIcon, 
  HandRaisedIcon, 
  UserGroupIcon,
  GiftIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  BookOpenIcon,
  MegaphoneIcon,
  CameraIcon
} from '@heroicons/react/24/outline';

export default function GetInvolvedPage() {
  const involvementOptions = [
    {
      title: 'Volunteer Ministry',
      description: 'Join our team of dedicated volunteers serving in various capacities.',
      icon: HandRaisedIcon,
      href: '/get-involved/volunteer',
      color: 'primary'
    },
    {
      title: 'Prayer Partner',
      description: 'Become a prayer warrior interceding for souls and ministry needs.',
      icon: HeartIcon,
      href: '/get-involved/prayer-partner',
      color: 'accent'
    },
    {
      title: 'Mission Trips',
      description: 'Join us on evangelistic missions to reach the unreached.',
      icon: GlobeAltIcon,
      href: '/get-involved/mission-trips',
      color: 'secondary'
    },
    {
      title: 'Youth Leadership',
      description: 'Lead and mentor the next generation in their faith journey.',
      icon: UserGroupIcon,
      href: '/ministries/youth-ministry',
      color: 'primary'
    },
    {
      title: 'Children\'s Ministry',
      description: 'Help nurture children in the love and knowledge of Jesus.',
      icon: AcademicCapIcon,
      href: '/ministries/children-ministry',
      color: 'accent'
    },
    {
      title: 'Creative Media',
      description: 'Use your creative talents for photography, videography, and design.',
      icon: CameraIcon,
      href: '/get-involved/creative-media',
      color: 'secondary'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/2.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-primary text-white mb-6">
            Get Involved
          </h1>
          <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
          <p className="text-xl-enhanced text-white/90 max-w-3xl mx-auto mb-12">
            Discover your calling and make a lasting impact in the Kingdom of God. 
            Join us in reaching souls, transforming lives, and building God&apos;s Kingdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#opportunities"
              className="btn-primary text-lg px-8 py-4"
            >
              Explore Opportunities
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-lg px-8 py-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Get Involved Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6 font-bold">
              Why Get Involved?
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg-enhanced text-secondary-600 max-w-3xl mx-auto">
              When you serve with Revival Ark International Ministries, you&apos;re not just volunteering—
              you&apos;re answering God&apos;s call to be part of something eternal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="icon-container-lg bg-primary-100 mx-auto mb-6">
                <HeartIcon className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl-enhanced font-bold text-secondary-900 mb-4">
                Fulfill Your Purpose
              </h3>
              <p className="text-body text-secondary-600">
                Discover and walk in the unique calling God has placed on your life through meaningful service.
              </p>
            </div>

            <div className="text-center">
              <div className="icon-container-lg bg-accent-100 mx-auto mb-6">
                <UserGroupIcon className="h-10 w-10 text-accent-600" />
              </div>
              <h3 className="text-xl-enhanced font-bold text-secondary-900 mb-4">
                Build Community
              </h3>
              <p className="text-body text-secondary-600">
                Connect with like-minded believers and build lasting relationships centered on Christ.
              </p>
            </div>

            <div className="text-center">
              <div className="icon-container-lg bg-secondary-100 mx-auto mb-6">
                <GlobeAltIcon className="h-10 w-10 text-secondary-600" />
              </div>
              <h3 className="text-xl-enhanced font-bold text-secondary-900 mb-4">
                Make Eternal Impact
              </h3>
              <p className="text-body text-secondary-600">
                Be part of reaching souls for Christ and making a difference that lasts for eternity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Involvement Opportunities Section */}
      <section id="opportunities" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6 font-bold">
              Ways to Get Involved
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg-enhanced text-secondary-600 max-w-3xl mx-auto">
              Choose from various ministry opportunities that match your passion, 
              gifts, and availability. Every role is vital to our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {involvementOptions.map((option, index) => (
              <div key={index} className="card-elevated group hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className={`icon-container-lg bg-${option.color}-100 mb-6`}>
                    <option.icon className={`h-8 w-8 text-${option.color}-600`} />
                  </div>
                  <h3 className="text-xl-enhanced font-bold text-secondary-900 mb-4">
                    {option.title}
                  </h3>
                  <p className="text-body text-secondary-600 mb-6">
                    {option.description}
                  </p>
                  <Link
                    href={option.href}
                    className={`inline-flex items-center text-${option.color}-600 hover:text-${option.color}-700 font-semibold group-hover:translate-x-1 transition-all`}
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-white mb-6 font-bold">
            Ready to Make a Difference?
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg-enhanced text-primary-100 mb-12 max-w-2xl mx-auto">
            Your journey of purpose and impact starts here. Join our community of believers 
            committed to advancing God&apos;s Kingdom through service and love.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/get-involved/volunteer"
              className="inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-colors transform hover:scale-105"
              style={{ backgroundColor: '#50C878', color: 'white' }}
            >
              Start Volunteering
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}