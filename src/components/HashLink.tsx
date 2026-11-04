"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type HashLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

// Next's router doesn't scroll when a link points at the page you're already
// on: clicking "/#products" while on "/#products" does nothing, and clicking
// "/about" while scrolled down /about leaves you where you are. In those cases
// we scroll ourselves (to the hash target, or to the top); every other click
// is left to Next.
export default function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const url = new URL(href, window.location.href);
    if (
      url.pathname !== window.location.pathname ||
      url.search !== window.location.search
    ) {
      return;
    }

    if (!url.hash) {
      // Same page: let Next update the URL (e.g. drop a "#products"), then go to the top.
      window.scrollTo({ top: 0 });
      return;
    }

    if (url.hash !== window.location.hash) return;

    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView();
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
