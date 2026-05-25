import { Link } from 'react-router-dom';
import PathStep from '../components/PathStep';
import { usePageMeta } from '../hooks/usePageMeta';

const path1 = [
  {
    n: 1,
    heading: "An OWA agent visits you — you don't need an app",
    body:
      "Our trained agents come to your market stall or shop. They record your daily sales, inventory movement, expenses, and supplier transactions on the OWA platform. You don't need to do anything digital — that's the agent's job.",
  },
  {
    n: 2,
    heading: 'Your numbers build up every single day',
    body:
      'Over 3 to 6 months, the OWA platform quietly builds your financial history. Revenue trends, inventory levels, profit and loss patterns. You can see your daily report on the OWA dashboard — simple numbers, big picture.',
  },
  {
    n: 3,
    heading: 'Your data unlocks financing and audit access',
    body:
      'With 6+ months of OWA records, you qualify for zero-interest loan products. You can also request a fully audited financial statement through AuditMe — delivered in 7 days — accepted by banks, recognised for regulatory filings.',
  },
];

const path2 = [
  {
    n: 1,
    heading: 'Sign up to Pepcode and start recording immediately',
    body:
      'Works on phone, tablet, or laptop. Create invoices, record expenses and purchases, manage your inventory, and track your customers — all from one clean dashboard. No accounting degree needed.',
  },
  {
    n: 2,
    heading: 'Issue NRS-compliant e-invoices — automatically',
    body:
      "With Pepcode's e-invoicing integration (powered by Qucoon), every invoice you raise is automatically submitted to the Nigerian Revenue Service. Tax compliance happens in the background — without extra work from you.",
  },
  {
    n: 3,
    heading: 'When you need an audit, AuditMe is one click away',
    body:
      'Ready to apply for a bank loan, attract an investor, or meet a CAC filing requirement? Upload your Pepcode financial records to AuditMe and receive a fully audited, IFRS-compliant financial statement in 7 days.',
  },
];

export default function HowItWorks() {
  usePageMeta({
    title: 'How It Works — OWA, Pepcode & AuditMe | Ploutos Page',
    description:
      'See the complete financial journey — from your first market sale to your audited financial statement in 7 days.',
  });

  return (
    <main id="main" className="pt-16 md:pt-20">
      {/* Intro */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-ink">
            Built for where businesses actually are — not where we wish they were.
          </h1>
          <p className="mt-6 text-ink-muted text-base md:text-lg">
            Most financial tools assume you already have records. We start from zero. Whether you sell in a market, run a shop, or manage a growing business, Ploutos Page meets you exactly where you are.
          </p>
        </div>
      </section>

      {/* Path 1 */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-5xl text-ink mb-12">
            You sell in a market. Your financial journey starts with an OWA agent.
          </h2>
          <div className="space-y-10 md:space-y-12">
            {path1.map((s) => (
              <PathStep key={s.n} number={s.n} heading={s.heading} body={s.body} color="teal" />
            ))}
          </div>
          <div className="mt-12">
            <a
              href="https://owabypepcode.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-teal hover:bg-teal-dark text-white rounded-full px-6 py-3 font-semibold transition"
            >
              Start with OWA by Pepcode →
            </a>
          </div>
        </div>
      </section>

      {/* Path 2 */}
      <section id="path-2" className="bg-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-5xl text-ink mb-12">
            You manage your own books. Pepcode makes it as simple as a phone.
          </h2>
          <div className="space-y-10 md:space-y-12">
            {path2.map((s) => (
              <PathStep key={s.n} number={s.n} heading={s.heading} body={s.body} color="gold" />
            ))}
          </div>
          <div className="mt-12">
            <a
              href="https://pepcodeinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-teal hover:bg-teal-dark text-white rounded-full px-6 py-3 font-semibold transition"
            >
              Start on Pepcode Today →
            </a>
          </div>
        </div>
      </section>

      {/* AuditMe */}
      <section id="auditme" className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-5xl text-white">
            Audited financial statements. In 7 days. For any business.
          </h2>
          <p className="mt-6 text-white/85 text-base md:text-lg max-w-4xl">
            Whether you came through OWA, Pepcode, or already have your own financial records — AuditMe delivers professional, auditor-signed financial statements without the traditional 3–6 month wait and five-figure accounting firm fees.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-light border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">No financial records?</h3>
              <p className="text-white/80">
                Upload your bank statements. Our AI converts them into a full Trial Balance, Ledger, and Financial Statements. A rated human auditor then reviews, signs off, and delivers your audited account in 7 days.
              </p>
            </div>
            <div className="bg-navy-light border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">Already have financial records?</h3>
              <p className="text-white/80">
                Upload your Trial Balance, Ledger, Asset Register, and supporting documents. Our internal team reviews your financials, assigns a rated auditor, and delivers the completed audited statement in 7 days.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/contact?subject=AuditMe"
              className="inline-flex items-center bg-purple hover:bg-purple-dark text-white rounded-full px-6 py-3 font-semibold transition"
            >
              Get Your Audit Started →
            </Link>
            <p className="mt-4 text-white/70 text-sm">
              Available to every business regardless of size or records held
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
