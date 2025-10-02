import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FounderSection from '@/components/home/FounderSection';
import HighlightsSection from '@/components/home/HighlightsSection';
import ImpactSection from '@/components/home/ImpactSection';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <FounderSection />
      <HighlightsSection />
      <ImpactSection />
    </Layout>
  );
}
