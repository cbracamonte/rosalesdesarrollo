import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/propiedades", label: "Propiedades" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-brand-slate/50 bg-brand-night/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Inicio — Rosales Desarrollo">
          <Image
            src="icons/logotipo.svg"
            alt="Rosales Desarrollo"
            width={155}
            height={177}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <ul className="flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-heading text-sm tracking-wider text-brand-gray transition-colors hover:text-brand-white"
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
