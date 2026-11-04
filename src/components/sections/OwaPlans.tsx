import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/motion/Reveal";

export const plans = [
  {
    name: "RETAILER",
    audience: "Single-shop retail traders",
    price: "₦5,000",
    icon: { src: "/icons/plan-retailer.svg", width: 28, height: 25 },
    features: [
      "Weekly bookkeeping",
      "Monthly profit report",
      "Tax support",
      "Co-operative access",
    ],
    cta: "Choose Retailer",
  },
  {
    name: "WHOLESALER",
    audience: "Wholesale traders",
    price: "₦15,000",
    icon: { src: "/icons/plan-wholesaler.svg", width: 28, height: 27 },
    features: [
      "Everything in Retailer",
      "Stock tracking & alerts",
      "Audited accounts",
    ],
    cta: "Choose Wholesaler",
    featured: true,
  },
  {
    name: "DISTRIBUTOR",
    audience: "Traders with more than one shop",
    price: "₦50,000",
    icon: { src: "/icons/plan-distributor.svg", width: 30, height: 25 },
    features: [
      "Everything in Wholesaler",
      "Reports per shop",
      "Combined business view",
    ],
    cta: "Choose Multi-shop",
  },
];

function Check({ featured }: { featured?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 shrink-0">
      <circle cx="10" cy="10" r="10" fill={featured ? "#f5d90a" : "#f3ecf9"} />
      <path
        d="M6 10.2 8.8 13l5.2-5.6"
        fill="none"
        stroke={featured ? "#2b1544" : "#4c1e72"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OwaPlans() {
  return (
    <section className="bg-[#faf7fd]">
      <div className="mx-auto max-w-[1440px] px-5 pt-14 pb-14 xl:px-[102px] xl:pt-[105px] xl:pb-[100px]">
        <Reveal stagger={0.12} className="text-center">
          <p
            data-reveal-item
            className="text-sm font-semibold text-[#4c1e72] xl:text-base"
          >
            Plans
          </p>
          <h2
            data-reveal-item
            className="mt-2 text-[26px] leading-[34px] font-bold text-[#1f0d30] xl:mt-3 xl:text-4xl xl:leading-[43.2px] xl:tracking-[-0.02em]"
          >
            Simple monthly plans
          </h2>
        </Reveal>

        <Reveal
          as="ul"
          stagger={0.15}
          className="mt-8 grid gap-[18px] xl:mt-[63px] xl:grid-cols-3 xl:items-center xl:gap-6"
        >
          {plans.map((plan) => {
            const featured = plan.featured;
            return (
              <li
                key={plan.name}
                data-reveal-item
                className={`hover-lift flex flex-col rounded-3xl px-5 pt-6 pb-6 [--lift-scale:1.02] xl:px-8 xl:pt-10 xl:pb-9 ${featured
                  ? "bg-[#4c1e72] xl:h-[590px]"
                  : "border-[1.5px] border-[#ebe4f3] bg-white xl:h-[559px]"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex size-12 items-center justify-center rounded-xl xl:size-14 ${featured ? "bg-white/10" : "bg-[#f3ecf9]"
                      }`}
                  >
                    <Image
                      src={plan.icon.src}
                      alt=""
                      width={plan.icon.width}
                      height={plan.icon.height}
                    />
                  </span>
                  {featured && (
                    <span className="rounded-full bg-[#f5d90a] px-3 py-1 text-xs font-semibold text-[#1f0d30]">
                      Most popular
                    </span>
                  )}
                </div>
                <h3
                  className={`mt-5 text-[13px] font-semibold xl:mt-6 xl:text-sm ${featured ? "text-[#f5d90a]" : "text-[#4c1e72]"
                    }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 text-[15px] xl:mt-1.5 xl:text-base ${featured ? "text-[#d8cde6]" : "text-[#5a4c70]"
                    }`}
                >
                  {plan.audience}
                </p>
                <p
                  className={`mt-3 flex items-baseline border-b pb-3 xl:mt-4 xl:pb-4 ${featured
                    ? "border-white/15 text-white"
                    : "border-[#ebe4f3] text-[#1f0d30]"
                    }`}
                >
                  <span className="text-[40px] leading-[48px] font-bold tracking-[-0.02em] xl:text-[54px] xl:leading-[60px]">
                    {plan.price}
                  </span>
                  <span
                    className={`ml-1 text-sm xl:text-base ${featured ? "text-[#d8cde6]" : "text-[#5a4c70]"
                      }`}
                  >
                    /month
                  </span>
                </p>
                <ul className="mt-5 space-y-3 xl:mt-7 xl:space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-2.5 text-[15px] xl:text-base ${feature.startsWith("Everything") ? "font-semibold" : ""
                        } ${featured ? "text-white" : "text-[#2b1544]"}`}
                    >
                      <Check featured={featured} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-7 flex h-[52px] items-center justify-center rounded-full text-base font-semibold xl:mt-auto xl:h-[55px] ${featured
                    ? "bg-[#f5d90a] text-[#1f0d30]"
                    : "border-[1.5px] border-[#4c1e72] text-[#4c1e72]"
                    }`}
                >
                  {plan.cta}
                </Link>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
