import { Link } from 'react-router-dom';

const tiles = [
  {
    heading: 'OWA by Pepcode',
    sub: 'For market traders & distributors',
    cta: 'Start Your Journey →',
    href: 'https://owabypepcode.com.ng',
    external: true,
  },
  {
    heading: 'Pepcode',
    sub: 'For digital-ready SMEs & businesses',
    cta: 'Start Recording →',
    href: 'https://pepcodeinc.com',
    external: true,
  },
  {
    heading: 'AuditMe',
    sub: 'Audited statements in 7 days — any business',
    cta: 'Get Audited →',
    href: 'https://auditme.com.ng',
    external: true,
  },
] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center text-white overflow-hidden bg-navy">
      <picture className="absolute inset-0">
        <source srcSet="/images/hero-market.webp" type="image/webp" />
        <img
          src="/images/hero-market.jpg"
          alt=""
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/75 to-navy/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            <span className="font-normal block">Africa's market economy runs on hard work.</span>
            <span className="font-semibold block">We make sure the numbers run too.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            Ploutos Page is the financial operating system for Nigeria's businesses. From the market woman tracking
            daily sales to the SME owner managing invoices to the company that needs an audited statement in 7 days.
          </p>
          <p className="mt-4 font-display italic text-lg md:text-xl text-teal-light">
            One platform. Three products. A complete financial journey.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {tiles.map((t) => {
            const className =
              'group bg-white/10 backdrop-blur-md border border-white/20 hover:border-teal/60 rounded-2xl p-6 transition transform hover:-translate-y-1 hover:shadow-2xl block';
            const content = (
              <>
                <h3 className="text-xl font-semibold text-white">{t.heading}</h3>
                <p className="mt-2 text-sm text-white/80">{t.sub}</p>
                <p className="mt-4 text-teal-light font-medium">{t.cta}</p>
              </>
            );
            return t.external ? (
              <a key={t.heading} href={t.href} target="_blank" rel="noopener noreferrer" className={className}>
                {content}
              </a>
            ) : (
              <Link key={t.heading} to={t.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
