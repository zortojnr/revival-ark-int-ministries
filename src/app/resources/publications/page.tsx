import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Publications | Revival Ark International Ministries',
  description: 'Books, newsletters, and teaching materials from Revival Ark International Ministries.',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function PublicationsPage() {
  return (
    <Layout>
      <div className="bg-primary-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Publications</h1>
        <p className="text-xl text-primary-200">Books and resources for your spiritual growth</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Library Coming Soon</h2>
          <p className="text-gray-600 mb-8">
            Our collection of books and teaching materials will be available here soon.
          </p>
          <div className="inline-block animate-pulse bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium">
            Resources being cataloged
          </div>
        </div>
      </div>
    </Layout>
  );
}
