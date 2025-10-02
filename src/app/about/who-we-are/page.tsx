import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { 
  HeartIcon, 
  GlobeAltIcon, 
  BookOpenIcon, 
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

export default function WhoWeArePage() {
  const coreValues = [
    {
      title: 'Biblical Foundation',
      description: 'Every aspect of our ministry is grounded in the unchanging Word of God.',
      icon: BookOpenIcon,
      verse: 'Thy word is a lamp unto my feet, and a light unto my path. - Psalm 119:105'
    },
    {
      title: 'Compassionate Love',
      description: 'We demonstrate Christ\'s love through practical care for the needy and vulnerable.',
      icon: HeartIcon,
      verse: 'By this shall all men know that ye are my disciples, if ye have love one to another. - John 13:35'
    },
    {
      title: 'Global Vision',
      description: 'Our heart beats for the nations, reaching every tribe, tongue, and people.',
      icon: GlobeAltIcon,
      verse: 'Go ye therefore, and teach all nations... - Matthew 28:19'
    },
    {
      title: 'Unity in Diversity',
      description: 'We celebrate the beautiful diversity of God\'s family while maintaining unity in Christ.',
      icon: UserGroupIcon,
      verse: 'There is neither Jew nor Greek... for ye are all one in Christ Jesus. - Galatians 3:28'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Ministry Founded',
      description: 'Revival Ark International Ministries was birthed from a divine vision to reach the nations.'
    },
    {
      year: '2012',
      title: 'First Orphanage',
      description: 'Established our first children\'s home, providing care for vulnerable children.'
    },
    {
      year: '2015',
      title: 'Bible School Launch',
      description: 'The Sword Institute was launched to train and equip ministry leaders.'
    },
    {
      year: '2018',
      title: 'International Expansion',
      description: 'Extended our reach to multiple nations across Africa and beyond.'
    },
    {
      year: '2020',
      title: 'Digital Ministry',
      description: 'Embraced digital platforms to reach souls during the global pandemic.'
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Expanding our impact through new ministries and partnerships.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Who We Are
              </h1>
              <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed font-serif italic mb-8">
                &quot;And he said unto them, Go ye into all the world, and preach the gospel to every creature.&quot; 
                - Mark 16:15
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                We are a people called by God to be vessels of His love, carriers of His presence, 
                and instruments of His revival in this generation.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <SparklesIcon className="h-32 w-32 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
              Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-primary-100 rounded-2xl p-8 lg:p-12 border border-primary-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mb-4">
                  <HeartIcon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-secondary-900 mb-4">Our Mission</h3>
              </div>
              <p className="text-lg text-secondary-700 leading-relaxed text-center">
                To be an ark of revival to the nations, preparing the way of the Lord through 
                passionate evangelism, intentional discipleship, compassionate care for the 
                vulnerable, and the training of kingdom leaders who will impact their generation 
                for Christ.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-primary-100 rounded-2xl p-8 lg:p-12 border border-primary-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full mb-4">
                  <GlobeAltIcon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-secondary-900 mb-4">Our Vision</h3>
              </div>
              <p className="text-lg text-secondary-700 leading-relaxed text-center">
                To see a generation of believers who are on fire for God, equipped with His Word, 
                and committed to advancing His kingdom in every sphere of society, resulting in 
                global revival and transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              These foundational principles guide every aspect of our ministry and mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-secondary-600 leading-relaxed mb-4">
                        {value.description}
                      </p>
                      <blockquote className="text-sm text-primary-700 font-serif italic border-l-4 border-primary-200 pl-4">
                        {value.verse}
                      </blockquote>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story/Timeline */}
      <section className="py-16 lg:py-24 bg-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              God has been faithful in every season. Here are some key milestones in our ministry journey.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-300 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-primary-50 shadow-lg hidden lg:block z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-primary-50 rounded-xl p-6 shadow-lg border border-primary-200">
                      <div className="flex items-center mb-3">
                        <span className="inline-flex items-center px-3 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-secondary-700 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-secondary-800 to-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-secondary-200 mb-8 max-w-2xl mx-auto">
            God is still writing our story, and He wants to include you in the next chapter. 
            Discover how you can be part of what He&apos;s doing through Revival Ark.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/leadership"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors transform hover:scale-105"
            >
              Meet Our Leadership
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center px-8 py-4 bg-white text-secondary-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors transform hover:scale-105"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}