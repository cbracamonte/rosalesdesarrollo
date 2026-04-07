"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BRAND_ASSETS } from "@/config/brand-assets";
import { mainNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-brand-slate/50 bg-brand-night/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Inicio — Rosales Desarrollo">
          <Image
            src={BRAND_ASSETS.isotipo}
            alt="Rosales Desarrollo"
            width={155}
            height={177}
            className="h-7 w-auto"
            priority
          />
        </Link>
        <ul className="flex items-center gap-8">
          {mainNavigation.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={cn(
                  "font-heading text-sm tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-silver focus-visible:ring-offset-2 focus-visible:ring-offset-brand-night",
                  pathname === href
                    ? "text-brand-white"
                    : "text-brand-gray hover:text-brand-white",
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
