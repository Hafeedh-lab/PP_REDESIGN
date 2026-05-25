import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta({
    title: 'Page not found — Ploutos Page',
    description: "This page took an unrecorded route. Let's get you back on the road.",
  });
  return (
    <main id="main" className="bg-cream min-h-screen flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-xl">
        <h1 className="font-display text-7xl md:text-8xl text-ink mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-4">This page took an unrecorded route.</h2>
        <p className="text-ink-muted text-lg mb-8">
          Like a market sale without a receipt — it's not where we expected it to be. Let's get you back on the road.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-teal hover:bg-teal-dark text-white rounded-full px-6 py-3 font-semibold transition"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
