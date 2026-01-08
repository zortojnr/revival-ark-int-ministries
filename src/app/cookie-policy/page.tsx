import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Cookie Policy | Revival Ark International Ministries',
  description: 'Cookie Policy for Revival Ark International Ministries website.',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function CookiePolicyPage() {
  return (
    <Layout>
      <div className="bg-primary-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-gray-600">
          <p>
            This Cookie Policy explains how Revival Ark International Ministries uses cookies and similar technologies 
            to recognize you when you visit our website.
          </p>
          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
            Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
            as well as to provide reporting information.
          </p>
          <h2>2. Why do we use cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons 
            in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. 
            Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
          </p>
          <p className="mt-8 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>
    </Layout>
  );
}
