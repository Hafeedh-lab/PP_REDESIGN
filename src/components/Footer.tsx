import { Link } from 'react-router-dom';

const productLinks = [
  { label: 'OWA by Pepcode', href: 'https://owabypepcode.com.ng', external: true },
  { label: 'Pepcode', href: 'https://pepcodeinc.com', external: true },
  { label: 'AuditMe', href: '/how-it-works#auditme', external: false },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Traction', href: '/traction' },
  { label: 'Contact', href: '/contact' },
];

const connectLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ploutos-page-limited/' },
  { label: 'Instagram', href: 'https://www.instagram.com/ploutospage/' },
  // TODO: remove or update Twitter/X link if no real account exists
  { label: 'Twitter/X', href: 'https://twitter.com/ploutospage' },
  { label: 'WhatsApp', href: 'https://wa.me/2348024247865' },
];

const linkBase = 'text-white/70 hover:text-teal-light transition';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <img
              src="/BendingWaters-8.png"
              alt="Ploutos Page"
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="font-display italic text-white/80 max-w-sm">
              The financial operating system for Africa's market economy.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((l) =>
                l.external ? (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkBase}>
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link to={l.href} className={linkBase}>
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className={linkBase}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              {connectLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkBase}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-teal/30 pt-6 mt-12 flex flex-col md:flex-row md:justify-between gap-3 text-sm text-white/60">
          <div>© 2026 Ploutos Page Limited. All rights reserved.</div>
          <div className="flex gap-4">
            {/* TODO: link to real pages when client provides */}
            <Link to="/contact" className="hover:text-teal-light transition">Privacy Policy</Link>
            {/* TODO: link to real pages when client provides */}
            <Link to="/contact" className="hover:text-teal-light transition">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
