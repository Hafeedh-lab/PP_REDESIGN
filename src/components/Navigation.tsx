import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useProductSelector } from '../contexts/ProductSelectorContext';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/traction', label: 'Traction' },
  { to: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const { pathname } = useLocation();
  const { open } = useProductSelector();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isDarkContext = pathname === '/' && !scrolled;
  const headerBg = scrolled
    ? 'bg-white/80 backdrop-blur-md shadow-sm'
    : isDarkContext
      ? 'bg-transparent'
      : 'bg-white/80 backdrop-blur-md';

  const linkTextColor = isDarkContext ? 'text-white/90' : 'text-ink';
  const logoFilter = isDarkContext ? 'brightness-0 invert' : '';

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Ploutos Page home">
          <img
            src="/BendingWaters-8.png"
            alt="Ploutos Page"
            className={`h-9 md:h-10 w-auto transition ${logoFilter}`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition ${linkTextColor} hover:text-teal ${
                  isActive ? 'border-b-2 border-teal pb-1' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={open}
            className="hidden lg:inline-flex items-center bg-teal hover:bg-teal-dark text-white rounded-full px-5 py-2 text-sm font-semibold transition"
          >
            Get Started
          </button>
          <button
            type="button"
            className={`lg:hidden p-2 rounded-md ${linkTextColor}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-ink/10 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block py-2 text-base font-medium text-ink ${isActive ? 'text-teal' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                open();
              }}
              className="mt-2 inline-flex justify-center items-center bg-teal hover:bg-teal-dark text-white rounded-full px-5 py-2 text-sm font-semibold transition"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
