import Image from 'next/image';
import Link from 'next/link';
import { BRAND_ASSETS } from '@/config/brand-assets';
import { footerNavigation } from '@/config/navigation';
import { SITE_CONFIG } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Image
              src={BRAND_ASSETS.isotipo}
              alt={SITE_CONFIG.name}
              width={420}
              height={96}
              className="h-14 w-auto"
              priority={false}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Venta de inmuebles terminados con altos estándares de calidad, inversión segura y entrega inmediata.
            </p>
          </div>

          <nav aria-label="Navegación de la landing">
            <p className="text-sm font-bold">Landing</p>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              {footerNavigation.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-sm font-bold">Contacto</p>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li><Link href="/contacto" className="hover:text-white">Solicitar información</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
