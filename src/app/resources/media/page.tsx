import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Media Gallery | Revival Ark International Ministries',
  description: 'Photos and videos from our ministry events, crusades, and services.',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function MediaPage() {
  return (
    <Layout>
      <div className="bg-primary-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Media Gallery</h1>
        <p className="text-xl text-primary-200">Moments of grace captured in time</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery Coming Soon</h2>
          <p className="text-gray-600 mb-8">
            We are curating photos and videos from our recent events. Stay tuned!
          </p>
          <div className="inline-block animate-pulse bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium">
            Media content uploading...
          </div>
        </div>
      </div>
    </Layout>
  );
}
