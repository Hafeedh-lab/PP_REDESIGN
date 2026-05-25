import { ArrowRight, ArrowDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const stages = [
  {
    title: 'OWA by Pepcode',
    body:
      "You sell in a market. An OWA agent visits you, records your daily sales, inventory, and expenses on your behalf. No app needed on your end.",
    footer: 'After 3–6 months: you have real financial data.',
    border: 'border-t-teal',
  },
  {
    title: 'Pepcode',
    body:
      'Your business has grown. You manage your own invoices, expenses, inventory, and purchases on Pepcode — on your phone, laptop, or tablet.',
    footer: 'Your financial records are now audit-ready.',
    border: 'border-t-gold',
  },
  {
    title: 'AuditMe',
    body:
      'Upload your financials or bank statements to AuditMe. A rated human auditor reviews and delivers your signed audited financial statement in 7 days.',
    footer: 'Your business is now financially visible.',
    border: 'border-t-purple',
  },
];

export default function JourneyFlow() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-5xl text-ink">
            Every business has a financial journey. We built the entire road.
          </h2>
          <p className="mt-5 text-ink-muted text-base md:text-lg">
            No matter where your business is today — Ploutos Page has a product for you and a clear path to take you further.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-2">
          {stages.map((s, i) => (
            <div key={s.title} className="flex flex-col md:flex-row md:flex-1 md:items-center gap-6 md:gap-2">
              <AnimatedSection delay={i * 250} className="flex-1">
                <div className={`bg-white rounded-2xl border-t-4 ${s.border} shadow-md p-6 md:p-8 h-full flex flex-col`}>
                  <h3 className="text-xl md:text-2xl font-semibold text-ink mb-3">{s.title}</h3>
                  <p className="text-ink-muted flex-1">{s.body}</p>
                  <p className="font-semibold text-ink border-t border-ink/10 pt-4 mt-4">{s.footer}</p>
                </div>
              </AnimatedSection>
              {i < stages.length - 1 && (
                <div className="flex justify-center text-teal/70" aria-hidden="true">
                  <ArrowRight className="hidden md:block w-8 h-8 animate-pulse" />
                  <ArrowDown className="md:hidden w-8 h-8 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
