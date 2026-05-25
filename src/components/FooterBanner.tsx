import { Link } from 'react-router-dom';
import { useProductSelector } from '../contexts/ProductSelectorContext';

export default function FooterBanner() {
  const { open } = useProductSelector();
  return (
    <section className="relative bg-navy text-white py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <p className="font-display italic text-3xl md:text-5xl text-white leading-tight">
          "From your first sale in the market to your first audited account — Ploutos Page builds the financial road every business deserves to walk."
        </p>
        <p className="mt-8 text-white/80 text-base md:text-lg">
          Join 1,600+ Nigerian businesses on the Ploutos Page platform.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={open}
            className="bg-teal hover:bg-teal-dark text-white rounded-full px-6 py-3 font-semibold transition"
          >
            Get Started Today
          </button>
          <Link
            to="/contact"
            className="border-2 border-white hover:bg-white hover:text-navy text-white rounded-full px-6 py-3 font-semibold transition"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
