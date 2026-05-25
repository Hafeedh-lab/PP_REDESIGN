import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

export interface StatItem {
  /** Number to count up to. Use null for static labels (e.g. ranges). */
  value: number | null;
  /** Prefix (e.g. "₦") rendered statically before the number. */
  prefix?: string;
  /** Suffix (e.g. "M", "+", "%") rendered statically after the number. */
  suffix?: string;
  /** Static display string when value is null (e.g. "₦14M–25M"). */
  staticDisplay?: string;
  label: string;
}

interface StatsGridProps {
  items: StatItem[];
  /** Tailwind columns class for desktop, e.g. 'md:grid-cols-4' or 'md:grid-cols-3'. */
  columnsClass?: string;
  variant?: 'navy' | 'navy-light-tiles';
}

export default function StatsGrid({
  items,
  columnsClass = 'md:grid-cols-4',
  variant = 'navy',
}: StatsGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const tileClass =
    variant === 'navy-light-tiles'
      ? 'bg-navy-light border border-white/10 rounded-2xl p-8 text-center'
      : 'rounded-2xl p-6 md:p-8 text-center';

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-2 ${columnsClass} gap-4 md:gap-6`}
    >
      {items.map((item) => (
        <div key={item.label} className={tileClass}>
          <div className="font-display font-semibold text-5xl md:text-6xl text-teal-light">
            {item.staticDisplay ? (
              item.staticDisplay
            ) : (
              <>
                {item.prefix}
                {inView && item.value !== null ? (
                  <CountUp end={item.value} duration={2.5} separator="," />
                ) : (
                  '0'
                )}
                {item.suffix}
              </>
            )}
          </div>
          <div className="mt-3 text-white/80">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
