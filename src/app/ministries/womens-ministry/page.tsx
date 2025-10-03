import Layout from '@/components/layout/Layout';
export default function WomensMinistryPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-secondary-900 mb-8">Women&apos;s Ministry</h1>
          
          <p className="text-lg text-secondary-700 mb-6">
            Our Women&apos;s Ministry is dedicated to empowering women of all ages to grow in their faith, 
            build meaningful relationships, and serve their community with purpose and passion.
          </p>
  
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Bible Study & Prayer</h2>
              <p className="text-secondary-700">
                Join us for weekly Bible studies where we dive deep into God&apos;s Word, share insights, 
                and support each other through prayer. Our studies are designed to strengthen your 
                relationship with Christ and provide practical wisdom for daily living.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Community Outreach</h2>
              <p className="text-secondary-700">
                We believe in making a difference in our community. From organizing food drives to 
                supporting local shelters, our women actively participate in outreach programs that 
                reflect Christ&apos;s love and compassion.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Events & Activities</h2>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Monthly women&apos;s fellowship meetings</li>
                <li>Annual women&apos;s retreat</li>
                <li>Mother&apos;s Day celebrations</li>
                <li>Community service projects</li>
                <li>Mentorship programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}