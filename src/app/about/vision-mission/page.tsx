import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Vision & Mission | Revival Ark International Ministries',
  description: 'The vision and mission of Revival Ark International Ministries.',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function VisionMissionPage() {
  return (
    <Layout>
      <div className="bg-primary-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Vision & Mission</h1>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-gray-600">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Our Vision</h2>
            <p className="text-xl leading-relaxed">
              To raise a generation of believers who are passionate about God, empowered by the Holy Spirit, 
              and committed to the Great Commission, bringing revival to the nations.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Our Mission</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-lg">To preach the undiluted Gospel of Jesus Christ to all nations.</li>
              <li className="text-lg">To disciple believers and equip them for the work of ministry.</li>
              <li className="text-lg">To care for the needy, orphans, and widows through acts of love and service.</li>
              <li className="text-lg">To plant churches that will be centers of revival and transformation.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
