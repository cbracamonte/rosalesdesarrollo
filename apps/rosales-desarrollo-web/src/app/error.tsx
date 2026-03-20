"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-4xl font-bold text-brand-silver">
        Algo salió mal
      </h1>
      <p className="mt-4 text-lg text-brand-gray">
        Ocurrió un error inesperado. Por favor, intenta de nuevo.
      </p>
      <button
        onClick={reset}
        className="mt-8 rounded-md bg-brand-slate px-6 py-3 font-heading text-sm tracking-wider text-brand-white transition-colors hover:bg-brand-carbon"
      >
        Intentar de nuevo
      </button>
    </main>
  );
}
