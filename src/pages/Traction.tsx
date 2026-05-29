import StatsGrid, { type StatItem } from '../components/StatsGrid';
import { usePageMeta } from '../hooks/usePageMeta';

const stats: StatItem[] = [
  { value: 1600, suffix: '+', label: 'Paying users across all products' },
  { value: 580, suffix: '+', label: 'Audit reports processed through AuditMe' },
  { value: 685, suffix: '+', label: 'Market businesses onboarded on OWA' },
  { value: 98, suffix: '%', label: 'Customer satisfaction rate' },
];

export default function Traction() {
  usePageMeta({
    title: 'Traction — 1,600+ Users | Ploutos Page',
    description:
      'The real numbers behind Ploutos Page: 1,600+ paying users, 580+ audits processed, 685+ market businesses, 98% customer satisfaction.',
  });

  return (
    <main id="main" className="pt-16 md:pt-20">
      <section className="bg-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h1 className="font-display text-4xl md:text-6xl text-brand-gradient">
              Real businesses. Real numbers. Real impact.
            </h1>
          </div>
          <StatsGrid items={stats} columnsClass="md:grid-cols-2" variant="navy-light-tiles" />
        </div>
      </section>
    </main>
  );
}
