import Layout from '@/components/layout/Layout';
import Link from 'next/link';
// Add image and filesystem utilities for hero and gallery
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Load hero image (images/57.jpg) as a data URL for proper rendering in Next/Image
function getHeroImage() {
  const heroPath = path.join(process.cwd(), 'images', '57.jpg');
  if (fs.existsSync(heroPath)) {
    const buf = fs.readFileSync(heroPath);
    return `data:image/jpeg;base64,${buf.toString('base64')}`;
  }
  return null as string | null;
}

// Dynamically read all outreach images from the specified folders
function getOutreachImages() {
  const outreachDir = path.join(process.cwd(), 'images', 'Orphanage outreaches');
  if (!fs.existsSync(outreachDir)) return [] as { src: string; alt: string }[];

  const files = fs
    .readdirSync(outreachDir)
    .filter((f) => /(\.jpe?g|\.png|\.webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  return files.map((file) => {
    const filePath = path.join(outreachDir, file);
    const buf = fs.readFileSync(filePath);
    const mime = file.toLowerCase().endsWith('.png')
      ? 'image/png'
      : file.toLowerCase().endsWith('.webp')
      ? 'image/webp'
      : 'image/jpeg';
    const src = `data:${mime};base64,${buf.toString('base64')}`;
    const alt = file.replace(/\.(jpe?g|png|webp)$/i, '').replace(/[-_]/g, ' ');
    return { src, alt };
  });
}

export default function ArkOfHopePage() {
  const heroSrc = getHeroImage();
  const galleryImages = getOutreachImages();

  return (
    <Layout>
      {/* Hero Section: 57.jpg background with opaque overlay so text is readable */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] overflow-x-hidden">
        {heroSrc && (
          <Image
            src={heroSrc}
            alt="Ark of Hope hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        {/* Opaque overlay to ensure text readability */}
        <div className="absolute inset-0 bg-neutral-900/60" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Ark of Hope (Orphans)</h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Restoring dignity and hope to orphaned and vulnerable children through Christ-centered care, education, and mentorship.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/give" className="w-full sm:w-auto bg-white text-neutral-900 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors border border-neutral-300">
                  Support Ark of Hope
                </Link>
                <Link href="/get-involved" className="w-full sm:w-auto bg-transparent border border-white/70 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Outreach Gallery: grid layout with optimization-friendly settings */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900">Outreach Gallery</h2>
            <p className="text-neutral-600">Moments from our orphanage outreaches, captured to share stories of hope.</p>
          </div>

          {galleryImages.length === 0 ? (
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-700">
              No images found in the outreach folder. Please add photos to <span className="font-semibold">images/Orphanage outreaches</span> to populate this gallery.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 ring-1 ring-neutral-200">
                  <Image
                    src={img.src}
                    alt={img.alt || 'Ark of Hope outreach photo'}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-6">Our Mission</h2>
              <p className="text-secondary-700 leading-relaxed mb-6">
                Ark of Hope exists to provide holistic care for orphaned and vulnerable children, addressing their spiritual, emotional, and physical needs. Through safe housing, education, mentorship, and discipleship, we empower children to grow into their God-given destiny.
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
                <Link
                  href="/get-involved"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 md:px-8 md:py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 shadow-sm hover:shadow-md transition-all border border-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
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