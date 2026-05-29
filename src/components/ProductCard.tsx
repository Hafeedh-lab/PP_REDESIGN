import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Accent = 'teal' | 'gold' | 'purple';

interface ProductCardProps {
  stage: string;
  accent: Accent;
  title: string;
  tagline: string;
  description: string;
  checklist: string[];
  metaWebsite: { label: string; href?: string };
  addonsLine?: string;
  whoIsThisFor: string;
  nextStep?: string;
  ctas: { label: string; href: string; external?: boolean; variant: 'primary' | 'secondary'; onClick?: () => void }[];
  extraMeta?: ReactNode;
}

const borderTopMap: Record<Accent, string> = {
  teal: 'border-t-teal',
  gold: 'border-t-gold',
  purple: 'border-t-purple',
};

const badgeMap: Record<Accent, string> = {
  teal: 'text-teal',
  gold: 'text-gold-dark',
  purple: 'text-purple',
};

const checkMap: Record<Accent, string> = {
  teal: 'text-teal',
  gold: 'text-gold-dark',
  purple: 'text-purple',
};

const primaryMap: Record<Accent, string> = {
  teal: 'bg-teal hover:bg-teal-dark text-white',
  gold: 'bg-gold-dark hover:bg-gold text-white',
  purple: 'bg-purple hover:bg-purple-dark text-white',
};

const secondaryMap: Record<Accent, string> = {
  teal: 'border-2 border-teal text-teal hover:bg-teal hover:text-white',
  gold: 'border-2 border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white',
  purple: 'border-2 border-purple text-purple hover:bg-purple hover:text-white',
};

export default function ProductCard({
  stage,
  accent,
  title,
  tagline,
  description,
  checklist,
  metaWebsite,
  addonsLine,
  whoIsThisFor,
  nextStep,
  ctas,
}: ProductCardProps) {
  return (
    <article className={`bg-white border-t-4 ${borderTopMap[accent]} rounded-2xl shadow-lg p-6 md:p-10`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <div className={`text-xs uppercase tracking-widest font-semibold ${badgeMap[accent]}`}>{stage}</div>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-2">{title}</h2>
          <p className="text-lg text-ink-muted mt-3">{tagline}</p>
          <p className="text-ink mt-6 leading-relaxed">{description}</p>
        </div>
        <div>
          <ul className="space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <Check className={`w-5 h-5 mt-1 flex-shrink-0 ${checkMap[accent]}`} aria-hidden="true" />
                <span className="text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-ink/10 space-y-2 text-sm italic text-ink-muted">
        <p>
          Website:{' '}
          {metaWebsite.href ? (
            <a href={metaWebsite.href} target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark not-italic">
              {metaWebsite.label}
            </a>
          ) : (
            <span className="not-italic">{metaWebsite.label}</span>
          )}
        </p>
        {addonsLine && <p>{addonsLine}</p>}
        <p>
          <span className="font-semibold text-ink not-italic">Who is this for?</span>{' '}
          <span className="not-italic">{whoIsThisFor}</span>
        </p>
        {nextStep && (
          <p>
            <span className="font-semibold text-ink not-italic">Next step after {title.split(' ')[0]}:</span>{' '}
            <span className="not-italic">{nextStep}</span>
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {ctas.map((cta) => {
          const classes = `inline-flex justify-center items-center rounded-full px-6 py-3 font-semibold transition ${
            cta.variant === 'primary' ? primaryMap[accent] : secondaryMap[accent]
          }`;
          const isExternal = cta.external || /^https?:\/\//i.test(cta.href);
          return isExternal ? (
            <a
              key={cta.label}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={classes}
            >
              {cta.label}
            </a>
          ) : (
            <Link key={cta.label} to={cta.href} className={classes}>
              {cta.label}
            </Link>
          );
        })}
      </div>
    </article>
  );
}
