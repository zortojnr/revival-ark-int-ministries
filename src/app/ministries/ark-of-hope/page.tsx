import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function ArkOfHopePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Ark of Hope (Orphans)</h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Caring for orphans and vulnerable children with Christ-like love, dignity, and hope.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/give" className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Give to Ark of Hope
              </Link>
              <Link href="/get-involved/volunteer" className="bg-transparent border border-white/70 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-6">Our Mission</h2>
              <p className="text-secondary-700 leading-relaxed mb-6">
                Ark of Hope exists to provide holistic care for orphaned and vulnerable children—addressing their spiritual, emotional, and physical needs. Through safe housing, education, mentorship, and discipleship, we empower children to grow into their God-given destiny.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="p-5 bg-white rounded-lg shadow-sm border border-neutral-200">
                  <h3 className="font-semibold text-secondary-800 mb-2">Safe Shelter</h3>
                  <p className="text-secondary-700">We create loving environments where children can heal and flourish.</p>
                </div>
                <div className="p-5 bg-white rounded-lg shadow-sm border border-neutral-200">
                  <h3 className="font-semibold text-secondary-800 mb-2">Education</h3>
                  <p className="text-secondary-700">Access to quality learning and spiritual formation for lifelong impact.</p>
                </div>
                <div className="p-5 bg-white rounded-lg shadow-sm border border-neutral-200">
                  <h3 className="font-semibold text-secondary-800 mb-2">Healthcare</h3>
                  <p className="text-secondary-700">Regular medical care and wellness support for every child.</p>
                </div>
                <div className="p-5 bg-white rounded-lg shadow-sm border border-neutral-200">
                  <h3 className="font-semibold text-secondary-800 mb-2">Mentorship</h3>
                  <p className="text-secondary-700">Christ-centered guidance and life skills through dedicated mentors.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">How You Can Help</h3>
              <ul className="space-y-3 text-secondary-700">
                <li>Partner with monthly giving toward child care and operations</li>
                <li>Volunteer in mentorship, education, and outreach initiatives</li>
                <li>Pray for children, caregivers, and the expansion of Ark of Hope</li>
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link href="/give" className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
                  Donate Now
                </Link>
                <Link href="/get-involved/volunteer" className="inline-flex items-center px-6 py-3 bg-white text-secondary-900 font-semibold rounded-lg hover:bg-neutral-100 border border-neutral-300 transition-colors">
                  Become a Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}