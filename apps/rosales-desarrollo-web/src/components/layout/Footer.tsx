import Link from "next/link";

const footerLinks = [
  { href: "/propiedades", label: "Propiedades" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-slate/50 bg-brand-slate">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        <p className="font-heading text-sm tracking-wider text-brand-silver">
          Rosales Desarrollo
        </p>
        <nav aria-label="Navegación del pie de página">
          <ul className="flex items-center gap-6">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-brand-gray transition-colors hover:text-brand-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-brand-gray">
          &copy; {new Date().getFullYear()} Rosales Desarrollo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
