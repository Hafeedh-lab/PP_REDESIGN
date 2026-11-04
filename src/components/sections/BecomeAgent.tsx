import Image from "next/image";
import Link from "next/link";

import ArrowRight from "@/components/icons/ArrowRight";
import Reveal from "@/components/motion/Reveal";

const requirements = [
  "Comfortable with numbers",
  "Uses a smartphone and WhatsApp",
  "Organised and reliable",
  "Speaks the local language",
];

const visits = [
  {
    name: "Mama Ade Provisions",
    status: "Stock counted",
    icon: {
      src: "/icons/agent-done.svg",
      width: 22,
      height: 22,
      className: "size-5 xl:size-[22px]",
    },
  },
  {
    name: "Grace Pharmacy",
    status: "Report explained",
    icon: {
      src: "/icons/agent-done.svg",
      width: 22,
      height: 22,
      className: "size-5 xl:size-[22px]",
    },
  },
  {
    name: "Bola Stores",
    status: "2:30 pm",
    icon: {
      src: "/icons/agent-pending.svg",
      width: 24,
      height: 24,
      className: "size-[22px] xl:size-6",
    },
    upcoming: true,
  },
];

const duties = [
  {
    title: "Visit businesses",
    body: "Meet traders and healthcare businesses in your area on a regular schedule.",
    icon: { src: "/icons/agent-visit.svg", width: 18, height: 24 },
  },
  {
    title: "Count and record",
    body: "Count stock and capture sales, purchases and expenses accurately.",
    icon: { src: "/icons/agent-record.svg", width: 20, height: 25 },
  },
  {
    title: "Explain the numbers",
    body: "Walk owners through their monthly profit reports in plain language.",
    icon: { src: "/icons/agent-explain.svg", width: 22, height: 23 },
  },
];

function VisitsCard() {
  return (
    <div className="rounded-[20px] bg-white px-3 pt-[15px] pb-[18px] xl:px-4 xl:pt-[18px] xl:pb-6">
      <div className="flex items-center justify-between pr-1 pl-1.5 xl:px-1.5">
        <p className="text-[15px] font-semibold text-[#0f1a2b] xl:text-base">
          Today’s visits
        </p>
        <span className="flex h-6 items-center rounded-full bg-[#f1f3f8] px-[11px] text-[11.5px] font-medium text-[#616a7d] xl:h-[26px] xl:px-[15px] xl:text-[11px]">
          Example
        </span>
      </div>
      <ul className="mt-[13px] space-y-2.5 xl:mt-4 xl:space-y-3">
        {visits.map((visit) => (
          <li
            key={visit.name}
            className={`flex h-[54px] items-center justify-between rounded-xl pr-[13px] pl-[14px] xl:h-16 xl:pr-[14px] xl:pl-[17px] ${visit.upcoming ? "bg-[#e6f8fc]" : "bg-[#f4f7fa]"
              }`}
          >
            <span>
              <span className="block text-sm leading-5 font-semibold text-[#121d2c] xl:text-[14.5px]">
                {visit.name}
              </span>
              <span className="block text-[12.5px] leading-[18px] text-[#666f7b] xl:text-[13px] xl:leading-5">
                {visit.status}
              </span>
            </span>
            <Image
              src={visit.icon.src}
              alt=""
              width={visit.icon.width}
              height={visit.icon.height}
              className={visit.icon.className}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function AgentBadge() {
  return (
    <div className="absolute top-[81px] left-[696px] h-[300px] w-[220px] -rotate-6 rounded-2xl bg-white">
      <span
        aria-hidden="true"
        className="absolute -top-[14px] left-1/2 h-6 w-[50px] -translate-x-1/2 rounded-t-md bg-[#1f4870]"
      />
      <p className="relative flex h-[68px] items-center justify-center rounded-t-2xl bg-brand text-[15px] font-semibold text-[#0f2540]">
        PLOUTOS PAGE
      </p>
      <Image
        src="/icons/agent-avatar.svg"
        alt=""
        width={84}
        height={84}
        className="mx-auto mt-[18px]"
      />
      <p className="mt-[19px] text-center text-[18.5px] font-bold text-[#0f1a2b]">
        Field agent
      </p>
      <span
        aria-hidden="true"
        className="mx-auto mt-[11px] block h-1.5 w-[120px] rounded-full bg-[#e1e7f0]"
      />
      <span
        aria-hidden="true"
        className="mx-auto mt-[10px] block h-1.5 w-20 rounded-full bg-[#e1e7f0]"
      />
      <span className="mx-auto mt-[15px] flex h-6 w-[100px] items-center justify-center rounded-full bg-[#dafbe6] text-xs font-semibold text-[#15803d]">
        Verified
      </span>
    </div>
  );
}

export default function BecomeAgent() {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="mx-auto max-w-[1440px] px-5 pt-14 pb-[59px] xl:px-[100px] xl:pt-[100px] xl:pb-[100px]">
        <div className="relative isolate overflow-hidden rounded-[28px] bg-[#17385a] px-6 pt-[33px] pb-[25px] xl:h-[600px] xl:rounded-[32px] xl:px-16 xl:pt-[65px]">
          {/* Background circles: one on mobile, two concentric on desktop. */}
          <span
            aria-hidden="true"
            className="absolute -top-[154px] -right-[157px] -z-10 size-[305px] rounded-full bg-[#144164] xl:-top-[219px] xl:-right-[198px] xl:size-[518px]"
          />
          <span
            aria-hidden="true"
            className="absolute -top-[129px] -right-[108px] -z-10 hidden size-[339px] rounded-full bg-[#13496b] xl:block"
          />

          <Reveal stagger={0.12} className="xl:max-w-[600px]">
            <p
              data-reveal-item
              className="text-xs font-semibold text-brand uppercase xl:text-lg xl:normal-case"
            >
              Join our field team
            </p>
            <h2
              data-reveal-item
              className="mt-[14px] text-[32px] leading-[37px] font-bold text-white xl:mt-[15px] xl:text-[54px] xl:leading-[64px] xl:tracking-[-0.02em]"
            >
              Become a Ploutos agent
            </h2>
            <p
              data-reveal-item
              className="mt-[15px] max-w-[265px] text-base leading-[26px] text-[#c0cedf] xl:mt-5 xl:max-w-[560px] xl:text-lg xl:leading-[30px]"
            >
              Our agents are the people traders and pharmacies meet every week.
              They count stock, record transactions and explain monthly reports,
              so small businesses can see their numbers clearly.
            </p>
          </Reveal>

          {/* Desktop: the badge and visits card are placed over the card's right side. */}
          <Reveal
            variant="scale"
            className="mt-[25px] xl:pointer-events-none xl:absolute xl:inset-0 xl:mt-0"
          >
            <div className="hidden xl:block">
              <AgentBadge />
            </div>
            <div className="xl:absolute xl:top-[190px] xl:left-[876px] xl:w-[300px]">
              <VisitsCard />
            </div>
          </Reveal>

          <Reveal stagger={0.08} className="mt-7 xl:mt-[33px] xl:max-w-[620px]">
            <p
              data-reveal-item
              className="text-xs font-semibold text-[#b2bdc8] uppercase xl:text-[13px]"
            >
              What we look for
            </p>
            <ul className="mt-[10px] flex flex-col gap-2 xl:mt-3 xl:flex-row xl:flex-wrap xl:gap-x-3 xl:gap-y-[10px]">
              {requirements.map((requirement) => (
                <li
                  key={requirement}
                  data-reveal-item
                  className="flex h-10 items-center gap-[9px] rounded-lg bg-[#1f4870] pl-[15px] text-[14.5px] xl:pl-[14px] font-semibold text-white xl:h-9 xl:rounded-full xl:pr-3"
                >
                  <span
                    aria-hidden="true"
                    className="size-2 shrink-0 rounded-full bg-brand"
                  />
                  {requirement}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            stagger={0.12}
            className="mt-6 flex flex-col gap-[10px] xl:mt-10 xl:flex-row xl:gap-5"
          >
            <Link
              href="https://app.owabypepcode.com.ng/signup"
              target="_blank"
              rel="noopener noreferrer"
              data-reveal-item
              className="flex h-[53px] items-center justify-center rounded-full bg-brand text-base font-semibold text-white xl:h-[58px] xl:w-[269px] xl:justify-start xl:pl-7 xl:text-[17px]"
            >
              {/* Both mobile buttons share one inner width, so their arrows line up. */}
              <span className="flex w-[228px] items-center justify-between xl:w-auto xl:gap-2">
                Sign up as an OWA agent
                <ArrowRight className="size-5" />
              </span>
            </Link>
            <Link
              href="https://www.medbooks.com.ng/signup"
              target="_blank"
              rel="noopener noreferrer"
              data-reveal-item
              className="flex h-14 items-center justify-center rounded-full bg-white text-base font-semibold text-[#002248] xl:h-[58px] xl:w-[295px] xl:justify-start xl:pl-[29px] xl:text-[17px]"
            >
              <span className="flex w-[228px] items-center justify-between xl:w-auto xl:gap-1">
                Sign up as a Medbook agent
                <ArrowRight className="size-5" />
              </span>
            </Link>
          </Reveal>
        </div>

        <Reveal stagger={0.12} className="mt-[39px] xl:mt-[58px]">
          <p
            data-reveal-item
            className="ml-[9px] text-sm font-semibold text-brand xl:ml-0 xl:text-[#00738c]"
          >
            What you’ll do
          </p>
          <ul className="mt-[15px] grid gap-4 xl:mt-[23px] xl:grid-cols-3 xl:gap-6">
            {duties.map((duty, i) => (
              <li
                key={duty.title}
                data-reveal-item
                className="rounded-[20px] bg-white px-6 pt-6 pb-[22px] xl:h-[244px] xl:rounded-3xl xl:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-[#e6f8fc] xl:size-14">
                    <Image
                      src={duty.icon.src}
                      alt=""
                      width={duty.icon.width}
                      height={duty.icon.height}
                    />
                  </span>
                  <span className="text-sm font-semibold text-brand xl:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-[15px] text-xl font-semibold text-[#002248] xl:mt-[21px] xl:text-[23px]">
                  {duty.title}
                </h3>
                <p className="mt-[7px] text-[15.5px] leading-6 text-[#5e6774] xl:mt-[9px] xl:text-[16.5px] xl:leading-[27px]">
                  {duty.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
