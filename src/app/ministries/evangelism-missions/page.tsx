export default function EvangelismMissionsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-secondary-900 mb-8">Evangelism & Missions</h1>
        
        <p className="text-lg text-secondary-700 mb-6">
          Our Evangelism & Missions ministry is committed to sharing the Gospel both locally and globally. 
          We believe in the Great Commission and actively work to spread God&apos;s love to all nations.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Local Evangelism</h2>
            <p className="text-secondary-700">
              We organize community outreach events, street evangelism, and door-to-door ministry 
              to share the Gospel with our neighbors and build relationships within our local community.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Global Missions</h2>
            <p className="text-secondary-700 leading-relaxed">
              Through partnerships with missionaries worldwide, we support church planting, 
              humanitarian aid, and Gospel outreach in various countries across the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}