import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Terms of Service | Revival Ark International Ministries',
  description: 'Terms of Service for using the Revival Ark International Ministries website.',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className="bg-primary-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-gray-600">
          <p>
            Welcome to the Revival Ark International Ministries website. By accessing or using our website, 
            you agree to be bound by these Terms of Service.
          </p>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing this website, you agree to be bound by these website Terms and Conditions of Use, 
            all applicable laws and regulations, and agree that you are responsible for compliance with any 
            applicable local laws.
          </p>
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) 
            on Revival Ark International Ministries' website for personal, non-commercial transitory viewing only.
          </p>
          <h2>3. Disclaimer</h2>
          <p>
            The materials on Revival Ark International Ministries' website are provided "as is". 
            Revival Ark International Ministries makes no warranties, expressed or implied, and hereby disclaims 
            and negates all other warranties.
          </p>
          <p className="mt-8 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>
    </Layout>
  );
}
