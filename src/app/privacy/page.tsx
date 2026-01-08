import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Privacy Policy | Revival Ark International Ministries',
  description: 'Privacy Policy for Revival Ark International Ministries website.',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="bg-primary-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-gray-600">
          <p>
            At Revival Ark International Ministries, we are committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and phone number 
            when you fill out forms on our website, such as contact forms or donation forms.
          </p>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries, process donations, 
            and send you updates about our ministry activities if you have opted in to receive them.
          </p>
          <h2>3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information 
            from unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p className="mt-8 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>
    </Layout>
  );
}
