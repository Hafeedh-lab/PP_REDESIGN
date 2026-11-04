"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import HashLink from "@/components/HashLink";

const links = [
  {
    label: "Home",
    href: "/",
    // Figma draws this icon larger than the others and off-centre in its tile.
    icon: {
      src: "/icons/menu-home.svg",
      width: 27,
      height: 27,
      className: "translate-x-[2.5px] translate-y-[2px]",
    },
  },
  {
    label: "About us",
    href: "/about",
    icon: { src: "/icons/menu-about.svg", width: 20, height: 20 },
  },
  {
    label: "Contact",
    href: "/contact",
    icon: { src: "/icons/menu-contact.svg", width: 20, height: 20 },
  },
];

const services = [
  {
    label: "OWA",
    description: "For market traders",
    href: "/owa",
    icon: { src: "/icons/partner-owa.svg", width: 24, height: 22 },
    tile: "bg-[#f3ecf9]",
  },
  {
    label: "MedBooks",
    description: "For healthcare businesses",
    href: "/medbooks",
    icon: { src: "/icons/partner-medbooks.svg", width: 22, height: 22 },
    tile: "bg-[#eaf0fd]",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled && !menuOpen
          ? "bg-white/70 shadow-[0_1px_0_rgba(8,24,38,0.08),0_8px_24px_rgba(8,24,38,0.06)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between pr-5 pl-[17px] lg:h-[84px] lg:pr-[79px] lg:pl-[100px]">
        <Link href="/" aria-label="Ploutos Page home" className="shrink-0">
          {/* logo-transparent.png is logo.png with its white background removed, so it sits on the glass. */}
          <Image
            src="/images/navbar/logo-transparent.png"
            alt="Ploutos Page"
            width={218}
            height={92}
            preload
            className="h-[39px] w-[93px] lg:h-[46px] lg:w-[109px]"
          />
        </Link>

        <ul className="hidden items-center gap-12 text-base text-ink lg:flex">
          <li>
            <HashLink href={links[0].href}>{links[0].label}</HashLink>
          </li>
          <li
            className="relative flex items-center gap-2"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setServicesOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setServicesOpen(false);
            }}
          >
            <HashLink href="/#services">Services</HashLink>
            <button
              type="button"
              aria-label="Show services"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((open) => !open)}
              className="flex h-6 items-center"
            >
              <Image
                src="/icons/chevron-down.svg"
                alt=""
                width={14}
                height={8}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* pt-4 bridges the gap so the menu stays open while the pointer moves onto it. */}
            <div
              id="services-menu"
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-[opacity,translate,visibility] duration-200 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <ul className="w-[300px] rounded-2xl bg-white p-2 shadow-[0_16px_40px_-12px_rgba(8,24,38,0.28)] ring-1 ring-[#081826]/5">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-[#f5f7fa] focus-visible:bg-[#f5f7fa]"
                    >
                      <span
                        className={`flex size-11 shrink-0 items-center justify-center rounded-[10px] ${service.tile}`}
                      >
                        <Image
                          src={service.icon.src}
                          alt=""
                          width={service.icon.width}
                          height={service.icon.height}
                        />
                      </span>
                      <span>
                        <span className="block font-semibold text-ink">
                          {service.label}
                        </span>
                        <span className="block text-sm text-body">
                          {service.description}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {links.slice(1).map((link) => (
            <li key={link.href}>
              <HashLink href={link.href}>{link.label}</HashLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <HashLink
            href="/#products"
            className="flex h-9 items-center rounded-full bg-brand px-[17px] text-[12.5px] font-bold text-white lg:h-12 lg:px-[22.5px] lg:text-[15.5px]"
          >
            Explore our products
          </HashLink>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            className="flex size-[18px] items-center justify-center lg:hidden"
          >
            {menuOpen ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="#0B1B2E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1H17M1 6H17M1 11H17"
                  stroke="#0B1B2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Drops down from under the bar by animating its row from 0fr to 1fr, as on stockwaka.com. */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={`absolute inset-x-0 top-full grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="h-[calc(100dvh-4rem)] space-y-[21px] overflow-y-auto overscroll-contain bg-[#f6f6f6] px-5 pt-[21px] pb-8 text-base text-ink">
            <li>
              <MobileLink {...links[0]} onClick={closeMenu} />
            </li>
            <li>
              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services"
                onClick={() => setMobileServicesOpen((open) => !open)}
                className="flex items-center gap-[13px]"
              >
                <MenuIcon
                  src="/icons/menu-services.svg"
                  width={20}
                  height={20}
                />
                <span className="translate-y-px">Services</span>
                <Image
                  src="/icons/chevron-down.svg"
                  alt=""
                  width={14}
                  height={8}
                  className={`-ml-1 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                id="mobile-services"
                inert={!mobileServicesOpen}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <ul className="min-h-0 overflow-hidden pl-[34px]">
                  {services.map((service) => (
                    <li key={service.href} className="first:pt-3">
                      <Link
                        href={service.href}
                        onClick={closeMenu}
                        className="flex items-center gap-3 rounded-xl p-3"
                      >
                        <span
                          className={`flex size-11 shrink-0 items-center justify-center rounded-[10px] ${service.tile}`}
                        >
                          <Image
                            src={service.icon.src}
                            alt=""
                            width={service.icon.width}
                            height={service.icon.height}
                          />
                        </span>
                        <span>
                          <span className="block font-semibold">
                            {service.label}
                          </span>
                          <span className="block text-sm text-body">
                            {service.description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {links.slice(1).map((link) => (
              <li key={link.href}>
                <MobileLink {...link} onClick={closeMenu} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

type Icon = {
  src: string;
  width: number;
  height: number;
  className?: string;
};

function MenuIcon({ src, width, height, className }: Icon) {
  return (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e6f8fc]">
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className={className}
      />
    </span>
  );
}

function MobileLink({
  label,
  href,
  icon,
  onClick,
}: {
  label: string;
  href: string;
  icon: Icon;
  onClick: () => void;
}) {
  return (
    <HashLink
      href={href}
      onClick={onClick}
      className="flex items-center gap-[13px]"
    >
      <MenuIcon {...icon} />
      <span className="translate-y-px">{label}</span>
    </HashLink>
  );
}
