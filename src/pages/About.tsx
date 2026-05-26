import { X } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const boardMembers = ['Precious Nwanganga', 'Kenechukwu Egbue', 'Daniel Hargley'];

export default function About() {
  usePageMeta({
    title: 'About Ploutos Page — Our Mission & Story',
    description:
      "Learn why Ploutos Page was built — and how we're turning Nigeria's market businesses into financially visible enterprises.",
  });

  return (
    <main id="main" className="pt-16 md:pt-20">
      {/* Mission */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-6xl text-ink">
            We exist because too many businesses die for want of a number.
          </h1>
          <div className="mt-8 space-y-6 text-ink text-base md:text-lg leading-relaxed">
            <p>
              Ploutos Page Limited is a Lagos-based fintech and accounting solutions company. We provide financial management tools and services for Nigeria's MSMEs — from the market trader who has never kept a record, to the established business that needs an audited statement for a bank loan.
            </p>
            <p>
              Our mission is to make every business financially visible — by giving them the tools to capture their data, the platform to manage their finances, and the infrastructure to prove their performance to banks, regulators, and investors.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-teal-light uppercase tracking-widest text-sm font-semibold mb-4">This is personal.</p>
              <div className="text-teal text-7xl font-display leading-none mb-2">"</div>
              <div className="font-display italic text-xl md:text-2xl text-white space-y-5 leading-relaxed">
                <p>
                  Fifteen years ago, my mother ran a business in the open market. She worked hard every day and had loyal customers. But like many market entrepreneurs, she kept no structured financial records.
                </p>
                <p>
                  When the business declined, there was no financial history to understand what went wrong. No books. No reports. No data to pass on. If proper records had existed, my sisters and I might have inherited and grown that business. Instead, it disappeared.
                </p>
              </div>
              <p className="mt-8 font-sans font-bold text-white text-lg md:text-xl leading-relaxed">
                This experience is the reason we built Ploutos Page. Because businesses should not die simply because there was no financial data.
              </p>
              <p className="mt-6 text-right text-teal-light">
                — Olapeju A. Nwanganga, Founder &amp; CEO
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img
                src="/images/Mrs Peju.jpg"
                alt="Olapeju A. Nwanganga, Founder & CEO of Ploutos Page"
                className="w-full max-w-md mx-auto aspect-square object-cover rounded-full border-4 border-teal/30 shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-5xl text-ink">
            Africa's informal economy is not informal by choice.
          </h2>
          <div className="mt-8 space-y-6 text-ink text-base md:text-lg leading-relaxed">
            <p>
              <strong>Over 41.5 million MSMEs</strong> operate in Nigeria. They employ over 59 million Nigerians — 76.5% of the national workforce — and contribute 49.8% of the country's GDP. The largest single category (42.3%) operates in wholesale and retail trade.
            </p>
            <p>Yet most of these businesses cannot:</p>
            <ul className="space-y-3">
              {[
                'Prove their business performance to a bank or investor',
                'Access structured financing without audited financial records',
                'Comply with regulatory requirements that demand formal accounts',
                'Build a financial legacy to pass on to the next generation',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <X className="w-5 h-5 mt-1 flex-shrink-0 text-teal" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              They are not financially invisible by choice. They are invisible because the financial systems that could serve them were never built with them in mind.
            </p>
            <p className="font-display text-teal text-2xl md:text-3xl pt-4">
              Ploutos Page is changing that.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-ink">
            To become the financial operating system for Africa's market economy.
          </h2>
          <p className="mt-6 text-ink-muted text-base md:text-lg">
            Starting in Nigeria's open markets and expanding across African trade hubs — our goal is to help millions of businesses build financial records, access financing, operate sustainably, and build lasting legacies.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-5xl text-ink text-center">The Team</h2>

          <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10 text-center">
            <img
              src="/images/Mrs Peju.jpg"
              alt="Olapeju A. Nwanganga"
              className="w-32 h-32 rounded-full object-cover mx-auto"
              loading="lazy"
            />
            <h3 className="mt-6 text-xl md:text-2xl font-semibold text-ink">Olapeju A. Nwanganga</h3>
            <p className="text-teal font-medium">Founder &amp; CEO</p>
            <p className="mt-4 text-ink-muted text-base">
              ACA (ICAN), MBA — Lagos Business School, FMVA. Over a decade of cross-sector experience in fintech, healthcare, and media. Entrepreneurship trainer at FATE Foundation and Shecluded Hub.
            </p>
          </div>

          <div className="mt-16">
            <p className="text-sm uppercase tracking-widest text-ink-muted text-center mb-6">Board Members</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {boardMembers.map((name) => (
                <div
                  key={name}
                  className="bg-white rounded-xl border border-ink/10 p-5 text-center text-ink font-medium"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
