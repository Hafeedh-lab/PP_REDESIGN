import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useProductSelector } from '../contexts/ProductSelectorContext';

interface OptionCard {
  borderColor: string;
  heading: string;
  sub: string;
  action: (navigate: ReturnType<typeof useNavigate>, close: () => void) => void;
}

const options: OptionCard[] = [
  {
    borderColor: 'border-t-teal',
    heading: 'I sell in a market or trade goods',
    sub: 'Daily transactions, limited digital access',
    action: (_n, close) => {
      window.open('https://owabypepcode.com.ng', '_blank', 'noopener,noreferrer');
      close();
    },
  },
  {
    borderColor: 'border-t-gold',
    heading: 'I run an SME or service business',
    sub: 'I want to manage my own books',
    action: (_n, close) => {
      window.open('https://pepcodeinc.com', '_blank', 'noopener,noreferrer');
      close();
    },
  },
  {
    borderColor: 'border-t-purple',
    heading: 'I just need audited financials',
    sub: 'For loan, investor, or compliance',
    action: (_n, close) => {
      window.open('https://auditme.com.ng', '_blank', 'noopener,noreferrer');
      close();
    },
  },
];

export default function ProductSelectorModal() {
  const { isOpen, close } = useProductSelector();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-selector-heading"
    >
      <div
        className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          className="absolute top-4 right-4 p-2 text-ink-muted hover:text-ink"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 id="product-selector-heading" className="text-2xl md:text-3xl font-display font-semibold text-ink mb-2">
          Which best describes you?
        </h2>
        <p className="text-ink-muted mb-6">
          Pick the one closest to your situation — we'll point you to the right product.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {options.map((o) => (
            <button
              key={o.heading}
              type="button"
              onClick={() => o.action(navigate, close)}
              className={`text-left bg-cream rounded-xl p-5 border-t-4 ${o.borderColor} border border-ink/5 hover:shadow-lg hover:-translate-y-1 transition`}
            >
              <h3 className="text-base font-semibold text-ink mb-2">{o.heading}</h3>
              <p className="text-sm text-ink-muted">{o.sub}</p>
            </button>
          ))}
        </div>

        <div className="mt-6 text-center text-sm">
          None of these fit?{' '}
          <button
            type="button"
            onClick={() => {
              navigate('/contact');
              close();
            }}
            className="text-teal hover:text-teal-dark font-medium underline"
          >
            Talk to us
          </button>
        </div>
      </div>
    </div>
  );
}
