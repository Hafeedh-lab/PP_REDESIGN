import Hero from '../components/Hero';
import JourneyFlow from '../components/JourneyFlow';
import StatsGrid, { type StatItem } from '../components/StatsGrid';
import FounderStoryTeaser from '../components/FounderStoryTeaser';
import FooterBanner from '../components/FooterBanner';
import { usePageMeta } from '../hooks/usePageMeta';

const homeStats: StatItem[] = [
  { value: 1600, suffix: '+', label: 'Paying Users across all products' },
  { value: 480, suffix: '+', label: 'Audits processed on AuditMe' },
  { value: 105, prefix: '₦', suffix: 'M', label: 'Total Revenue generated to date' },
  { value: 98, suffix: '%', label: 'Satisfaction customer rating' },
];

export default function HomePage() {
  usePageMeta({
    title: 'Ploutos Page — Financial OS for African Businesses',
    description:
      "Bookkeeping, invoicing, and audited financial statements for Nigeria's SMEs and market traders. Three products. One financial journey. Start free today.",
  });

  return (
    <main id="main">
      <Hero />
      <JourneyFlow />
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-5xl">Numbers that tell the story.</h2>
          </div>
          <StatsGrid items={homeStats} columnsClass="md:grid-cols-4" variant="navy-light-tiles" />
        </div>
      </section>
      <FounderStoryTeaser />
      <FooterBanner />
    </main>
  );
}
