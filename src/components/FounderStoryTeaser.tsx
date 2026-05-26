import { Link } from 'react-router-dom';

export default function FounderStoryTeaser() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-ink">
          This started with a market woman who had no records.
        </h2>
        <p className="mt-6 text-ink-muted text-base md:text-lg">
          Fifteen years ago, our founder's mother ran a business in the open market. She worked hard. She had loyal
          customers. But she kept no financial records. When the business declined, there was nothing to show what went
          wrong — and nothing to pass on.
        </p>
        <p className="mt-8 font-display italic text-2xl md:text-3xl text-teal">
          Ploutos Page was built so that story never happens again.
        </p>
        <Link
          to="/about"
          className="mt-10 inline-flex items-center bg-teal hover:bg-teal-dark text-white rounded-full px-6 py-3 font-semibold transition"
        >
          Read Our Story →
        </Link>
      </div>
    </section>
  );
}
