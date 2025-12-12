import { Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import ContactContent from './ContactContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Revival Ark International Ministries',
  description: 'Get in touch with Revival Ark International Ministries. Whether you have a question, prayer request, or want to get involved, we are here to hear from you.',
};

export default function ContactPage() {
  return (
    <Layout>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mb-4"></div>
            <p className="text-gray-600">Loading contact form...</p>
          </div>
        </div>
      }>
        <ContactContent />
      </Suspense>
    </Layout>
  );
}
