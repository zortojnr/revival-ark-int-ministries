import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { 
  ArrowRightIcon, 
  HeartIcon, 
  GlobeAltIcon, 
  BookOpenIcon, 
  UserGroupIcon,
  FireIcon,
  HandRaisedIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Christ-Centeredness',
      description: 'Jesus Christ is the foundation and focus of everything we do.',
      icon: HeartIcon
    },
    {
      title: 'Word & Spirit Balance',
      description: 'We honor both the written Word and the Spirit\'s leading in perfect harmony.',
      icon: BookOpenIcon
    },
    {
      title: 'Prayer & Intercession',
      description: 'Prayer is the foundation of our ministry and spiritual breakthrough.',
      icon: HandRaisedIcon
    },
    {
      title: 'Holiness & Integrity',
      description: 'We pursue righteousness and maintain integrity in all our dealings.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Discipleship & Transformation',
      description: 'We are committed to making disciples who transform their communities.',
      icon: AcademicCapIcon
    },
    {
      title: 'Unity & Love',
      description: 'We foster unity in the body of Christ through genuine love.',
      icon: UserGroupIcon
    },
    {
      title: 'Excellence & Accountability',
      description: 'We strive for excellence while maintaining accountability to God and others.',
      icon: SparklesIcon
    }
  ];

  const aboutSections = [
    {
      title: 'Who We Are',
      description: 'Learn about our mission, vision, and the heart behind Revival Ark International Ministries.',
      href: '/about/who-we-are',
      icon: HeartIcon,
      color: 'bg-primary-100 text-primary-600'
    },
    {
      title: 'Leadership',
      description: 'Meet our dedicated leadership team called to serve God and His people.',
      href: '/about/leadership',
      icon: UserGroupIcon,
      color: 'bg-secondary-100 text-secondary-600'
    },
    {
      title: 'Doctrinal Beliefs',
      description: 'Discover the biblical foundations and core beliefs that guide our ministry.',
      href: '/about/doctrinal-beliefs',
      icon: BookOpenIcon,
      color: 'bg-accent-100 text-accent-600'
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Logo Background */}
      <section className="relative py-20 lg:py-32 text-white overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/about/hero.jpg)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            opacity: 0.4
          }}
        ></div>
        
        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/75 to-primary-700/85"></div>
        
        {/* Additional Dark Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              About Us
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-accent-200 drop-shadow-md">
              Revival Ark International Ministries
            </h2>
            <p className="text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-serif italic drop-shadow-md">
              "Will You not revive us again, that Your people may rejoice in You?" – Psalm 85:6
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full backdrop-blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-accent-300/50 rounded-full backdrop-blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-accent-400/60 rounded-full shadow-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white/40 rounded-full shadow-lg"></div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-6">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto leading-relaxed">
              Revival Ark International Ministries is a Christ-centered organization dedicated to 
              spreading the Gospel of Jesus Christ and bringing spiritual revival to communities 
              around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <HeartIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">Our Heart</h3>
                  <p className="text-secondary-700">
                    We are passionate about seeing lives transformed through the power of God's love 
                    and the message of salvation in Jesus Christ.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <GlobeAltIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">Our Reach</h3>
                  <p className="text-secondary-700">
                    From our base in Jos, Nigeria, we extend our ministry to communities across 
                    Africa and beyond, bringing hope and healing to those in need.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <BookOpenIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">Our Foundation</h3>
                  <p className="text-secondary-700">
                    Every aspect of our ministry is built upon the solid foundation of God's Word, 
                    ensuring biblical truth guides all we do.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary-100 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <SparklesIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-800 mb-4">Revival Ark</h3>
                  <p className="text-secondary-700 text-lg">
                    "Will You not revive us again, that Your people may rejoice in You?" 
                    <br />
                    <span className="font-semibold">- Psalm 85:6</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-16 lg:py-24 bg-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-6">
                <FireIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-secondary-700 leading-relaxed mb-8">
                To be a global ark of revival, raising a generation aflame with God's presence, rooted in truth, and transforming nations through the power of the Holy Spirit.
              </p>
              <div className="bg-primary-200 rounded-xl p-6 border border-primary-300">
                <p className="text-secondary-800 font-medium italic">
                  "For the earth will be filled with the knowledge of the glory of the Lord 
                  as the waters cover the sea." - Habakkuk 2:14
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-6">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-lg text-secondary-700 leading-relaxed">
                <p>
                  To ignite revival in cities, nations, and campuses through evangelism and prophetic gatherings.
                </p>
                <p>
                  To build communities of prayer, holiness, and kingdom service.
                </p>
                <p>
                  To train and disciple believers to walk in truth and spiritual power.
                </p>
                <p>
                  To partner with churches, ministries, and believers worldwide to expand the kingdom of God.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-6">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto leading-relaxed">
              These foundational principles guide every aspect of our ministry and mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-8 bg-primary-100 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-primary-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-secondary-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scriptural Mandate Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Our Scriptural Mandate
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <blockquote className="text-xl lg:text-2xl font-serif italic text-primary-100 leading-relaxed">
              "Will You not revive us again, that Your people may rejoice in You?"
            </blockquote>
            <p className="text-lg text-primary-200">– Psalm 85:6</p>
            
            <blockquote className="text-xl lg:text-2xl font-serif italic text-primary-100 leading-relaxed mt-8">
              "Prepare the way of the Lord, make His paths straight."
            </blockquote>
            <p className="text-lg text-primary-200">– Isaiah 40:3</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-8">
              Our Story
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl text-secondary-700 leading-relaxed mb-8">
              Revival Ark International Ministries was birthed out of a burden for revival—a cry to see God's fire rekindled in the hearts of men, and for His glory to fill the earth as the waters cover the sea.
            </p>
            <p className="text-lg lg:text-xl text-secondary-700 leading-relaxed mb-8">
              Founded by Haruna A'aron Saleh, the ministry began with small prayer gatherings and campus outreaches, which grew into a wider movement across cities and nations. Today, Revival Ark carries the mandate to reach the world with the Gospel through evangelism, discipleship, prayer, and acts of compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Our Founder Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-8">
              Our Founder
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg lg:text-xl text-secondary-700 leading-relaxed">
              Haruna A'aron Saleh is the founding leader of Revival Ark International Ministries. A servant of God with a passion for prayer, revival, and discipleship, he is committed to raising a generation of believers who burn with the fire of the Holy Spirit and live for Christ with integrity. Through teaching, preaching, writing, and mentoring, he continues to inspire many to draw near to God and walk in their divine calling.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-secondary-800 to-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Our Commitment
          </h2>
          <p className="text-xl lg:text-2xl text-secondary-200 leading-relaxed max-w-4xl mx-auto">
            At Revival Ark International Ministries, we are committed to carrying the fire of revival to every soul, every city, and every nation until the earth is filled with the knowledge of the glory of the Lord.
          </p>
        </div>
      </section>

      {/* About Sections Navigation */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Learn More About Us
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Explore different aspects of our ministry and discover how God is working through Revival Ark.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {aboutSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${section.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed mb-6">
                      {section.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-secondary-800 to-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Us in the Revival
          </h2>
          <p className="text-xl text-secondary-200 mb-8 max-w-2xl mx-auto">
            Be part of what God is doing in this generation. Whether through partnership, 
            volunteering, or prayer, there's a place for you in this move of God.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-colors transform hover:scale-105"
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-secondary-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}