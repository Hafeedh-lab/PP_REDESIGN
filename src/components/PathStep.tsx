interface PathStepProps {
  number: number;
  heading: string;
  body: string;
  color?: 'teal' | 'gold' | 'purple';
}

const colorMap = {
  teal: 'bg-teal',
  gold: 'bg-gold',
  purple: 'bg-purple',
};

export default function PathStep({ number, heading, body, color = 'teal' }: PathStepProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">
      <div
        className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full ${colorMap[color]} text-white font-display text-3xl flex items-center justify-center shadow-lg`}
        aria-hidden="true"
      >
        {number}
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-ink mb-3">{heading}</h3>
        <p className="text-ink-muted text-base md:text-lg">{body}</p>
      </div>
    </div>
  );
}
