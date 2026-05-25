import ProductCard from '../components/ProductCard';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Products() {
  usePageMeta({
    title: 'OWA by Pepcode · Pepcode · AuditMe | Ploutos Page',
    description:
      'Discover three products that take any business from zero financial records to audited statements in 7 days.',
  });

  return (
    <main id="main" className="pt-16 md:pt-20">
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-ink">
            We didn't build three separate products. We built one journey in three stages.
          </h1>
          <p className="mt-6 text-ink-muted text-base md:text-lg">
            Every Ploutos Page product is designed to bring a business one step closer to financial visibility, compliance, and access to capital. Each product works independently — and works even better together.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ProductCard
            stage="STAGE 1"
            accent="teal"
            title="OWA by Pepcode"
            tagline="Bookkeeping for the open market — agent-led, offline-first, and built for traders."
            description="OWA by Pepcode is a bookkeeping platform designed specifically for Nigeria's wholesalers, distributors, and market traders. Because most of these businesses have limited digital access, OWA uses an agent-led model — trained agents visit business owners, record daily transactions on their behalf, and ensure their financial data stays accurate and up to date."
            checklist={[
              'Agent records daily sales, inventory, expenses, and supplier transactions on your behalf',
              'Business owner sees a simple, visual daily report on the OWA dashboard',
              'Works offline — agents can capture data without internet connectivity',
              'Builds 3–6 months of structured financial records automatically',
              'Zero-interest loan access unlocked after 6+ months of OWA records',
              'Connects directly to AuditMe when you are ready for audited financial statements',
              'POS device deployment available for seamless transaction capture',
            ]}
            metaWebsite={{ label: 'owabypepcode.com.ng', href: 'https://owabypepcode.com.ng' }}
            whoIsThisFor="Market women, open-market traders, wholesalers, distributors, kiosk owners — any business with daily cash transactions and limited digital infrastructure."
            nextStep="→ AuditMe for audited statements and loan-ready financials"
            ctas={[
              {
                label: 'Visit OWA by Pepcode →',
                href: 'https://owabypepcode.com.ng',
                external: true,
                variant: 'primary',
              },
              {
                label: 'Find an OWA Agent Near You',
                href: 'https://wa.me/2348024247865?text=Hi%2C%20I%27d%20like%20to%20find%20an%20OWA%20agent%20near%20me',
                external: true,
                variant: 'secondary',
              },
            ]}
          />

          <ProductCard
            stage="STAGE 2"
            accent="gold"
            title="Pepcode"
            tagline="The bookkeeping software built for SMEs who manage their own finances."
            description="Pepcode is a full-featured bookkeeping platform for small and medium businesses that are ready to manage their own financial records. Simple enough for a business owner with no accounting background, and powerful enough to produce audit-ready financial statements — accessible from your phone, tablet, or laptop."
            checklist={[
              'Invoice creation and management — send professional invoices in seconds',
              'Expense and purchase recording with category tracking',
              'Inventory management — track stock levels, movements, and value',
              'E-invoicing integration: every invoice automatically submitted to NRS for tax compliance (powered by Qucoon)',
              'Financial reports: income summary, expense breakdown, profit and loss',
              'NRS Invoice Reference Number (IRN) and QR code on every validated invoice',
              'Export financial records directly to AuditMe when you need an audit',
              'Works on any device — phone, tablet, or laptop — no installation required',
            ]}
            metaWebsite={{ label: 'pepcodeinc.com', href: 'https://pepcodeinc.com' }}
            whoIsThisFor="SME owners, freelancers, retailers, service businesses, startups — any business with basic digital literacy that wants to manage their own books."
            nextStep="→ AuditMe for audited financial statements in 7 days"
            ctas={[
              {
                label: 'Try Pepcode Free →',
                href: 'https://pepcodeinc.com',
                external: true,
                variant: 'primary',
              },
              {
                label: 'See How E-Invoicing Works',
                href: '/how-it-works#path-2',
                variant: 'secondary',
              },
            ]}
          />

          <ProductCard
            stage="STAGE 3"
            accent="purple"
            title="AuditMe"
            tagline="Audited financial statements for any business — in 7 days."
            description="AuditMe is the audit and compliance engine at the end of the Ploutos Page journey. Whether you came through OWA, Pepcode, or already have your own financial records, AuditMe delivers IFRS-compliant, auditor-signed financial statements in 7 days — reviewed by a Ploutos Page internal team, signed off by a rated and qualified external auditor, and delivered as a PDF to your account."
            checklist={[
              'Upload bank statements only — AI converts them into Trial Balance, Ledger & Financial Statements',
              'Already have records — upload directly and skip AI processing',
              'CAC certificate and MEMART captured — legal details correctly on your audited statement',
              'Prior-year accounts? — Upload for comparative figures (IFRS requirement)',
              'Internal team reviews all AI-generated financials before auditor assignment',
              'Jobs assigned to rated external auditors — best performer, fastest turnaround assigned first',
              'Final admin vetting before audited account is released to you',
              'Delivered as a signed, stamped PDF — accepted by banks, regulators, and investors',
            ]}
            metaWebsite={{ label: 'AuditMe — available via ploutospage.com' }}
            addonsLine="Add-ons: Company Income Tax (CIT) filing · VAT filing · Future bookkeeping via Pepcode"
            whoIsThisFor="Any business that needs audited financial statements — for loan applications, investor decks, regulatory compliance, CAC filings, or annual reporting."
            ctas={[
              {
                label: 'Get Audited in 7 Days →',
                href: '/contact?subject=AuditMe',
                variant: 'primary',
              },
              {
                label: 'See How AuditMe Works',
                href: '/how-it-works#auditme',
                variant: 'secondary',
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
