import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { 
  HeartIcon, 
  GlobeAltIcon, 
  BookOpenIcon, 
  UserGroupIcon,
  HomeIcon,
  MusicalNoteIcon,
  MegaphoneIcon,
  HandRaisedIcon,
  AcademicCapIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function MinistriesPage() {
  const ministries = [
    {
      title: 'Evangelism & Missions',
      description: 'Reaching the lost with the Gospel of Jesus Christ across nations and cultures.',
      href: '/ministries/evangelism-missions',
      icon: GlobeAltIcon,
      color: 'bg-primary-100 text-primary-600',
      image: '/images/ministries/evangelism.svg',
      stats: '50+ Nations Reached'
    },
    {
      title: 'Orphan Care',
      description: 'Providing love, care, and hope to orphaned and vulnerable children.',
      href: '/ministries/orphan-care',
      icon: HeartIcon,
      color: 'bg-accent-100 text-accent-600',
      image: '/images/ministries/orphan-care.svg',
      stats: '200+ Children Cared For'
    },
    {
      title: 'Church Planting',
      description: 'Establishing vibrant local churches that transform communities.',
      href: '/ministries/church-planting',
      icon: HomeIcon,
      color: 'bg-secondary-100 text-secondary-600',
      image: '/images/ministries/church-planting.svg',
      stats: '30+ Churches Planted'
    },
    {
      title: 'Youth Ministry',
      description: 'Empowering young people to live for Christ and impact their generation.',
      href: '/ministries/youth-ministry',
      icon: UserGroupIcon,
      color: 'bg-primary-100 text-primary-600',
      image: '/images/ministries/youth.svg',
      stats: '1000+ Youth Impacted'
    },
    {
      title: 'Women\'s Ministry',
      description: 'Equipping women to fulfill their God-given purpose and calling.',
      href: '/ministries/womens-ministry',
      icon: HandRaisedIcon,
      color: 'bg-accent-100 text-accent-600',
      image: '/images/ministries/women.svg',
      stats: '500+ Women Empowered'
    },
    {
      title: 'Men\'s Ministry',
      description: 'Building godly men who lead their families and communities with integrity.',
      href: '/ministries/men',
      icon: UserGroupIcon,
      color: 'bg-secondary-100 text-secondary-600',
      image: '/images/ministries/men.svg',
      stats: '300+ Men Discipled'
    },
    {
      title: 'Children\'s Ministry',
      description: 'Nurturing children in the love and knowledge of Jesus Christ.',
      href: '/ministries/children-ministry',
      icon: SparklesIcon,
      color: 'bg-primary-100 text-primary-600',
      image: '/images/ministries/children.svg',
      stats: '800+ Children Reached'
    },
    {
      title: 'Worship & Arts',
      description: 'Leading people into God\'s presence through music, dance, and creative arts.',
      href: '/ministries/worship-arts',
      icon: MusicalNoteIcon,
      color: 'bg-accent-100 text-accent-600',
      image: '/images/ministries/worship.svg',
      stats: '50+ Artists Trained'
    },
    {
      title: 'Media Ministry',
      description: 'Spreading the Gospel through television, radio, and digital platforms.',
      href: '/ministries/media',
      icon: MegaphoneIcon,
      color: 'bg-secondary-100 text-secondary-600',
      image: '/images/ministries/media.svg',
      stats: '1M+ People Reached'
    },
    {
      title: 'Bible Training',
      description: 'Equipping believers with sound biblical knowledge and ministry skills.',
      href: '/ministries/bible-training',
      icon: BookOpenIcon,
      color: 'bg-primary-100 text-primary-600',
      image: '/images/ministries/bible-training.svg',
      stats: '200+ Leaders Trained'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/3.jpg')",
            opacity: 0.3
          }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-700/70 to-secondary-800/80"></div>
        {/* Additional Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 heading-primary">
              Our Ministries
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed font-serif italic mb-10 max-w-4xl mx-auto text-xl-enhanced">
              &quot;And he gave some, apostles; and some, prophets; and some, evangelists; 
              and some, pastors and teachers; For the perfecting of the saints, 
              for the work of the ministry...&quot; - Ephesians 4:11-12
            </p>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto text-lg-enhanced">
              God has called Revival Ark to serve in multiple areas of ministry, 
              each designed to advance His kingdom and transform lives for His glory.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-16 left-16 w-16 h-16 border border-white/20 rounded-full hidden lg:block"></div>
        <div className="absolute bottom-16 right-16 w-12 h-12 border border-white/20 rounded-full hidden lg:block"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white/30 rounded-full hidden md:block"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white/20 rounded-full hidden md:block"></div>
      </section>

      {/* Ministry Overview */}
      <section className="py-20 lg:py-28 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-10 heading-secondary">
              Called to Serve
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg lg:text-xl text-secondary-700 leading-relaxed mb-10 text-lg-enhanced">
                Revival Ark International Ministries operates across multiple spheres of ministry, 
                each flowing from our core mission to prepare the way of the Lord. From evangelism 
                to education, from caring for orphans to training leaders, every ministry is designed 
                to advance God&apos;s kingdom and transform lives.
              </p>
              
              <div className="grid md:grid-cols-3 gap-10 mt-16">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-18 h-18 bg-primary-500 rounded-full mb-6">
                    <GlobeAltIcon className="h-9 w-9 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-4 text-xl-enhanced">Global Impact</h3>
                  <p className="text-secondary-700 text-body">Ministries spanning across nations and cultures</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-18 h-18 bg-primary-500 rounded-full mb-6">
                    <HeartIcon className="h-9 w-9 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-4 text-xl-enhanced">Holistic Care</h3>
                  <p className="text-secondary-700 text-body">Addressing spiritual, physical, and emotional needs</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-18 h-18 bg-primary-500 rounded-full mb-6">
                    <AcademicCapIcon className="h-9 w-9 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-4 text-xl-enhanced">Leadership Development</h3>
                  <p className="text-secondary-700 text-body">Training the next generation of kingdom leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 lg:py-28 bg-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-6 heading-secondary">
              Areas of Ministry
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto leading-relaxed">
              Each ministry area represents a unique calling to serve God&apos;s people and advance His kingdom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon;
              return (
                <Link
                  key={index}
                  href={ministry.href}
                  className="group bg-primary-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-primary-200"
                >
                  {/* Ministry Image */}
                  <div className="relative h-56 bg-gradient-to-br from-primary-200 via-primary-100 to-primary-300 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="h-20 w-20 text-primary-600/30" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary-300/30 rounded-full blur-md"></div>
                  </div>

                  {/* Ministry Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-secondary-800 mb-4 group-hover:text-primary-600 transition-colors">
                      {ministry.title}
                    </h3>
                    <p className="text-secondary-700 leading-relaxed mb-6">
                      {ministry.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-semibold text-primary-700 bg-primary-100 px-4 py-2 rounded-full border border-primary-300">
                        {ministry.stats}
                      </span>
                    </div>

                    {/* Learn More Link */}
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

      {/* Ministry Impact Stats */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
              Ministry Impact
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              God has been faithful in multiplying our efforts. Here&apos;s a glimpse of the impact 
              across our various ministries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-primary-100 rounded-xl p-6 border border-primary-200">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-secondary-800 font-semibold">Nations Reached</div>
            </div>
            <div className="text-center bg-primary-100 rounded-xl p-6 border border-primary-200">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">3000+</div>
              <div className="text-secondary-800 font-semibold">Lives Transformed</div>
            </div>
            <div className="text-center bg-primary-100 rounded-xl p-6 border border-primary-200">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">30+</div>
              <div className="text-secondary-800 font-semibold">Churches Planted</div>
            </div>
            <div className="text-center bg-primary-100 rounded-xl p-6 border border-primary-200">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-secondary-800 font-semibold">Leaders Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-secondary-800 to-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Us in Ministry
          </h2>
          <p className="text-xl text-secondary-200 mb-8 max-w-2xl mx-auto">
            God is calling people to serve in every area of ministry. Whether through volunteering, 
            partnership, or financial support, there&apos;s a place for you in what God is doing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved/volunteer"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors transform hover:scale-105"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/get-involved/partner"
              className="inline-flex items-center px-8 py-4 bg-primary-100 text-secondary-800 font-semibold rounded-lg hover:bg-primary-200 transition-colors transform hover:scale-105 border border-primary-300"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}