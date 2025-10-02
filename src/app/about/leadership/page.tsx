import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { 
  EnvelopeIcon, 
  PhoneIcon,
  UserGroupIcon,
  HeartIcon,
  BookOpenIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

export default function LeadershipPage() {
  const seniorLeadership = [
    {
      name: 'Pastor [Name]',
      title: 'Senior Pastor & Founder',
      image: '/images/leadership/senior-pastor.svg',
      bio: 'Called by God with a heart for revival and the nations. Pastor [Name] has been in ministry for over [X] years, with a passion for seeing souls saved and believers equipped for kingdom service.',
      specialties: ['Evangelism', 'Church Planting', 'Leadership Development'],
      email: 'revivalarkint\'lministry@gmail.com',
      phone: '+234-803-456-7890'
    },
    {
      name: 'Pastor [Name]',
      title: 'Associate Pastor',
      image: '/images/leadership/associate-pastor.svg',
      bio: 'A gifted teacher and shepherd with a heart for discipleship and spiritual growth. Pastor [Name] oversees our teaching ministries and pastoral care.',
      specialties: ['Teaching', 'Pastoral Care', 'Discipleship'],
      email: 'revivalarkint\'lministry@gmail.com',
      phone: '+234-805-123-4567'
    }
  ];

  const departmentHeads = [
    {
      name: '[Name]',
      title: 'Director of Missions',
      department: 'Global Missions',
      image: '/images/leadership/missions-director.svg',
      bio: 'Coordinates our international outreach efforts and missionary activities.',
      icon: GlobeAltIcon
    },
    {
      name: '[Name]',
      title: 'Director of Education',
      department: 'Sword Institute',
      image: '/images/leadership/education-director.svg',
      bio: 'Oversees our Bible school and educational programs for ministry training.',
      icon: BookOpenIcon
    },
    {
      name: '[Name]',
      title: 'Director of Children\'s Ministry',
      department: 'Orphan Care',
      image: '/images/leadership/children-director.svg',
      bio: 'Leads our orphan care initiatives and children\'s outreach programs.',
      icon: HeartIcon
    },
    {
      name: '[Name]',
      title: 'Director of Administration',
      department: 'Operations',
      image: '/images/leadership/admin-director.svg',
      bio: 'Manages the administrative and operational aspects of the ministry.',
      icon: UserGroupIcon
    }
  ];

  const boardMembers = [
    {
      name: '[Name]',
      title: 'Board Chairman',
      profession: 'Business Executive'
    },
    {
      name: '[Name]',
      title: 'Board Secretary',
      profession: 'Legal Practitioner'
    },
    {
      name: '[Name]',
      title: 'Board Treasurer',
      profession: 'Financial Consultant'
    },
    {
      name: '[Name]',
      title: 'Board Member',
      profession: 'Medical Doctor'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-secondary-800 via-secondary-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/leadership.jpg"
            alt="Revival Ark International Leadership Vision"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Leadership
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed font-serif italic mb-8 max-w-3xl mx-auto">
              "And he gave some, apostles; and some, prophets; and some, evangelists; 
              and some, pastors and teachers; For the perfecting of the saints..." - Ephesians 4:11-12
            </p>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Meet the dedicated servants whom God has called to lead Revival Ark International Ministries 
              in this season of divine assignment.
            </p>
          </div>
        </div>
      </section>

      {/* Senior Leadership */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Senior Leadership
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Our senior pastors provide spiritual oversight and vision for the ministry.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {seniorLeadership.map((leader, index) => (
              <div key={index} className="bg-primary-100 rounded-2xl p-8 shadow-lg border border-primary-200">
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full bg-primary-500 rounded-full flex items-center justify-center">
                      <UserGroupIcon className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-lg text-primary-700 font-semibold mb-4">
                    {leader.title}
                  </p>
                </div>

                <p className="text-secondary-700 leading-relaxed mb-6 text-center">
                  {leader.bio}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-secondary-900 mb-3 text-center">
                    Ministry Specialties
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {leader.specialties.map((specialty, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${leader.email}`}
                    className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                  >
                    <EnvelopeIcon className="h-4 w-4 mr-2" />
                    Email
                  </a>
                  <a
                    href={`tel:${leader.phone}`}
                    className="inline-flex items-center px-4 py-2 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Department Leadership
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Our department heads oversee specific areas of ministry and ensure excellence in service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {departmentHeads.map((leader, index) => {
              const IconComponent = leader.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <div className="w-full h-full bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center shadow-inner">
                      <IconComponent className="h-14 w-14 text-accent-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {leader.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {leader.title}
                  </p>
                  <p className="text-sm text-secondary-500 mb-6">
                    {leader.department}
                  </p>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 lg:py-24 bg-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Board of Directors
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Our board provides governance, accountability, and strategic guidance for the ministry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-primary-50 rounded-xl p-6 text-center border border-primary-200">
                <div className="w-16 h-16 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserGroupIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-700 font-semibold mb-1">
                  {member.title}
                </p>
                <p className="text-sm text-secondary-600">
                  {member.profession}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Leadership Principles
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              The values that guide our leadership and shape our ministry culture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <HeartIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Servant Leadership</h3>
              <p className="text-primary-100 leading-relaxed">
                We lead by serving, following Christ's example of humility and love.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <BookOpenIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Biblical Integrity</h3>
              <p className="text-primary-100 leading-relaxed">
                Our decisions and actions are anchored in the unchanging Word of God.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <UserGroupIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Unity</h3>
              <p className="text-primary-100 leading-relaxed">
                We work together as one body, each contributing their unique gifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Leadership Team
          </h2>
          <p className="text-xl text-secondary-200 mb-8 max-w-2xl mx-auto">
            God is raising up leaders for this generation. If you feel called to serve 
            in leadership, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors transform hover:scale-105"
            >
              Contact Leadership
            </Link>
            <Link
              href="/get-involved/volunteer"
              className="inline-flex items-center px-8 py-4 bg-white text-secondary-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors transform hover:scale-105"
            >
              Volunteer Opportunities
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}