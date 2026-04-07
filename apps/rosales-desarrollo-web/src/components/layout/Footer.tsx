import Image from 'next/image';
import Link from 'next/link';
import { BRAND_ASSETS } from '@/config/brand-assets';
import { footerNavigation } from '@/config/navigation';
import { SITE_CONFIG } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-brand-gray/15 bg-brand-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-5 border-b border-brand-gray/15 pb-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-sm">
            <Image
              src={BRAND_ASSETS.isotipo}
              alt={SITE_CONFIG.name}
              width={420}
              height={96}
              className="h-auto w-[min(5.5rem,24vw)]"
              priority={false}
            />
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-brand-carbon/52 md:text-sm">
              Casas y proyectos residenciales en Pimentel, Chiclayo y Huanchaco.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-brand-carbon/62 md:text-sm">
              {footerNavigation.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-brand-night focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-silver focus-visible:ring-offset-2 focus-visible:ring-offset-brand-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="transition-colors hover:text-brand-night focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-silver focus-visible:ring-offset-2 focus-visible:ring-offset-brand-white"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2 pt-3 text-xs text-brand-carbon/45 md:flex-row md:items-center md:justify-between md:text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.</p>
          <p>{SITE_CONFIG.location}</p>
        </div>
      </div>
    </footer>
  );
}
