import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, CheckCircle } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const inquiryOptions = ['Business Owner', 'Investor', 'Partner / Agency', 'Media', 'Other'];

export default function Contact() {
  usePageMeta({
    title: 'Contact Ploutos Page Limited | Get Started',
    description: 'Reach the Ploutos Page team — for businesses, investors, and partners.',
  });

  const [params] = useSearchParams();
  const isAuditMe = params.get('subject') === 'AuditMe';
  const submitted = params.get('submitted') === 'true';

  const defaultInquiry = isAuditMe ? 'Business Owner' : '';
  const defaultMessage = useMemo(() => (isAuditMe ? '[AuditMe Enquiry] ' : ''), [isAuditMe]);

  return (
    <main id="main" className="pt-16 md:pt-20">
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl md:text-6xl text-ink">Let's talk.</h1>
            <p className="mt-6 text-ink-muted text-base md:text-lg">
              Whether you are a business owner who wants to get started, an investor exploring the Ploutos Page story, or a partner looking to collaborate — reach out and we will respond within 24 hours.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Form */}
            <div>
              {submitted && (
                <div className="mb-6 bg-teal/10 border border-teal/30 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                  <p className="text-ink font-medium">Thanks. We'll be in touch within 24 hours.</p>
                </div>
              )}

              {/*
                SETUP REQUIRED:
                1. Visit https://web3forms.com and create a free access key.
                2. Replace the WEB3FORMS_ACCESS_KEY_HERE placeholder below with the real key.
                3. Update the redirect URL when the production domain is confirmed.
              */}
              {/* TODO: Replace WEB3FORMS_ACCESS_KEY_HERE with the real key from https://web3forms.com */}
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-5"
              >
                <input type="hidden" name="access_key" value="WEB3FORMS_ACCESS_KEY_HERE" />
                <input type="hidden" name="subject" value="New Ploutos Page Contact Form Submission" />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://ploutospage.com/contact?submitted=true"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ink mb-1">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-ink/15 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-ink/15 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-1">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border border-ink/15 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry_type" className="block text-sm font-semibold text-ink mb-1">I am a:</label>
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    required
                    defaultValue={defaultInquiry}
                    className="w-full rounded-lg border border-ink/15 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-teal"
                  >
                    <option value="" disabled>Select one</option>
                    {inquiryOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-ink mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    defaultValue={defaultMessage}
                    className="w-full rounded-lg border border-ink/15 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal hover:bg-teal-dark text-white rounded-full px-6 py-3 font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm uppercase tracking-wider text-ink-muted font-semibold">Address</div>
                    <div className="text-ink mt-1">8 Rock Drive, Lekki Phase One, Lagos, Nigeria</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm uppercase tracking-wider text-ink-muted font-semibold">Phone</div>
                    <div className="text-ink mt-1 space-x-2">
                      <a href="tel:+2348024247865" className="hover:text-teal">+234 8024247865</a>
                      <span>·</span>
                      <a href="tel:+2347035104346" className="hover:text-teal">+234 7035104346</a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm uppercase tracking-wider text-ink-muted font-semibold">Email</div>
                    <div className="text-ink mt-1 space-x-2 break-all">
                      <a href="mailto:support@pepcode.com" className="hover:text-teal">support@pepcode.com</a>
                      <span>·</span>
                      <a href="mailto:olapeju.n@ploutospage.com" className="hover:text-teal">olapeju.n@ploutospage.com</a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Globe className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm uppercase tracking-wider text-ink-muted font-semibold">Websites</div>
                    <div className="text-ink mt-1 space-x-2 break-all">
                      <a href="https://ploutospage.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal">ploutospage.com</a>
                      <span>·</span>
                      <a href="https://pepcodeinc.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal">pepcodeinc.com</a>
                      <span>·</span>
                      <a href="https://owabypepcode.com.ng" target="_blank" rel="noopener noreferrer" className="hover:text-teal">owabypepcode.com.ng</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
