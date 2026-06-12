import Image from "next/image";
import Link from "next/link";
import { BRAND_ASSETS } from "@/config/brand-assets";
import { landingNavigation } from "@/config/navigation";
import { MessageCircle } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/50 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex min-h-20 max-w-[1280px] items-center justify-between gap-5 px-4 sm:px-6">
        <Link href="/" aria-label="Inicio — Rosales Desarrollo" className="flex items-center gap-3">
          <Image
            src={BRAND_ASSETS.isotipo}
            alt=""
            width={155}
            height={177}
            className="h-10 w-auto brightness-[.35] saturate-[1.5]"
            priority
          />
          <span className="hidden text-sm font-bold uppercase tracking-[0.12em] text-primary sm:block">
            Rosales Desarrollo
          </span>
        </Link>
        <ul className="hidden items-center gap-7 md:flex">
          {landingNavigation.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#contacto"
          className="inline-flex min-h-10 items-center gap-2 rounded bg-accent px-4 text-sm font-bold text-primary transition hover:bg-accent-dark"
        >
          <MessageCircle aria-hidden="true" className="size-4" />
          <span className="hidden sm:inline">Contactar</span>
        </Link>
      </nav>
    </header>
  );
}
