import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--color-brand-night)_0%,_var(--color-brand-night-deep)_100%)]">
      <Image
        src="icons/logotipo.svg"
        alt="Rosales Desarrollo"
        width={550}
        height={410}
        priority
        className="w-72 md:w-96"
      />
      <h1 className="mt-6 font-heading text-2xl tracking-[0.3em] text-brand-gray uppercase">
        Transformamos espacios, elevamos vidas
      </h1>
      <p className="mt-4 text-base text-brand-silver">
        Construimos proyectos inmobiliarios con calidad, diseño y compromiso.
      </p>
    </main>
  );
}
