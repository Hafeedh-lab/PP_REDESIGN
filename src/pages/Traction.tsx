import StatsGrid, { type StatItem } from '../components/StatsGrid';
import { usePageMeta } from '../hooks/usePageMeta';

const stats: StatItem[] = [
  { value: 1600, suffix: '+', label: 'Paying users across all products' },
  { value: 480, suffix: '+', label: 'Audit reports processed through AuditMe' },
  { value: 385, suffix: '+', label: 'Market businesses onboarded on OWA' },
  { value: 105, prefix: '₦', suffix: 'M', label: 'Total revenue generated to date' },
  { value: null, staticDisplay: '₦14M–25M', label: 'Monthly revenue range from AuditMe' },
  { value: 98, suffix: '%', label: 'Customer satisfaction rate' },
];

interface Row {
  product: string;
  pricing: string;
  streams: string;
}

const rows: Row[] = [
  {
    product: 'OWA by Pepcode',
    pricing: '₦10,000/month',
    streams:
      'Monthly subscription + POS commission (5%) + Loan disbursement commission (5%) + CAC registration (₦10,000)',
  },
  {
    product: 'Pepcode',
    pricing: '₦10,000/month + ₦4,000 e-invoicing add-on',
    streams: 'Monthly SaaS subscription + E-invoicing add-on (70/30 split with Qucoon)',
  },
  {
    product: 'AuditMe',
    pricing: '₦25,000–₦250,000 per audit (dynamic pricing by revenue tier)',
    streams: 'Per-audit unlock fees + CIT filing + VAT filing + PAYE + Bookkeeping subscriptions',
  },
];

export default function Traction() {
  usePageMeta({
    title: 'Traction — 1,600+ Users, ₦105M Revenue | Ploutos Page',
    description:
      'The real numbers behind Ploutos Page: 1,600+ paying users, 480+ audits processed, 98% customer satisfaction.',
  });

  return (
    <main id="main" className="pt-16 md:pt-20">
      {/* Metrics */}
      <section className="bg-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h1 className="font-display text-4xl md:text-6xl text-white">
              Real businesses. Real numbers. Real impact.
            </h1>
          </div>
          <StatsGrid items={stats} columnsClass="md:grid-cols-3" variant="navy-light-tiles" />
        </div>
      </section>

      {/* Business model */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-5xl text-ink text-center mb-12">
            Multiple revenue streams. All growing.
          </h2>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-md border border-ink/10">
              <thead>
                <tr className="bg-teal text-white">
                  <th className="text-left p-4 font-semibold">Product</th>
                  <th className="text-left p-4 font-semibold">Pricing</th>
                  <th className="text-left p-4 font-semibold">Revenue Streams</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.product} className={`${i % 2 === 0 ? 'bg-white' : 'bg-cream'} border-t border-ink/10`}>
                    <td className="p-4 font-semibold text-ink">{r.product}</td>
                    <td className="p-4 text-ink">{r.pricing}</td>
                    <td className="p-4 text-ink">{r.streams}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-4">
            {rows.map((r) => (
              <div key={r.product} className="bg-white rounded-2xl shadow-md border border-ink/10 p-6">
                <h3 className="text-lg font-semibold text-ink mb-3">{r.product}</h3>
                <p className="text-sm text-ink-muted mb-1 font-semibold">Pricing</p>
                <p className="text-ink mb-3">{r.pricing}</p>
                <p className="text-sm text-ink-muted mb-1 font-semibold">Revenue Streams</p>
                <p className="text-ink">{r.streams}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
