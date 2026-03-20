import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-6xl font-bold text-brand-silver">404</h1>
      <p className="mt-4 text-lg text-brand-gray">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-brand-slate px-6 py-3 font-heading text-sm tracking-wider text-brand-white transition-colors hover:bg-brand-carbon"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
