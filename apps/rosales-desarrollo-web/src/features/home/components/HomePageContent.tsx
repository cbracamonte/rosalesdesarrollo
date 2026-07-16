import Image from "next/image";
import Link from "next/link";
import { Clock3, MessageCircle, ShieldCheck } from "lucide-react";
import { WebPageJsonLd } from "@/components/seo/WebPageJsonLd";
import { Container } from "@/components/layout/Container";
import { getProperties } from "@/features/properties";
import { SITE_CONFIG } from "@/config/site";
import {
  benefits,
  contactDetails,
  journeySteps,
  projectHighlights,
  projectImages,
  services,
  trustSignals,
} from "../data/home-page-content";
import { ContactLeadForm } from "./ContactLeadForm";

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded bg-accent px-6 text-sm font-bold text-primary transition hover:bg-accent-dark focus-visible:ring-accent";

export function HomePageContent() {
  const featuredProperty = getProperties()[0];
  const whatsappMessage = encodeURIComponent(
    `Hola, quiero información sobre ${featuredProperty.name}.`,
  );
  const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main id="main-content" className="bg-background text-on-background">
      <WebPageJsonLd
        name="Rosales Desarrollo"
        description="Casa propia en Chiclayo con venta directa, sin intermediarios y asesoría para evaluar financiamiento."
        path="/"
      />

      <section className="relative isolate flex min-h-155 items-center overflow-hidden bg-primary pt-20 text-white md:min-h-170">
        <Image
          src="/images/valle-dorado-pimentel/intro-home.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,15,34,.92)_0%,rgba(0,15,34,.72)_48%,rgba(0,15,34,.38)_100%)]" />
        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {featuredProperty.status}
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              {featuredProperty.name}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/82 md:text-lg">
              {featuredProperty.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#proyecto-chiclayo" className={primaryButton}>
                Ver el proyecto
              </Link>
              <Link
                href={whatsappHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-white/40 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                Agendar visita
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {trustSignals.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-5 text-accent"
                    strokeWidth={1.8}
                  />
                  <p className="mt-3 text-sm font-bold">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/68">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="proyecto-chiclayo" className="scroll-mt-24 py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative min-h-115 overflow-hidden rounded-lg sm:col-span-2">
                <Image
                  src={projectImages[0]}
                  alt={`${featuredProperty.name}, ${featuredProperty.district}`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              {projectImages.slice(1).map((image, index) => (
                <div
                  key={image}
                  className="relative min-h-56 overflow-hidden rounded-lg"
                >
                  <Image
                    src={image}
                    alt={`Vista ${index + 2} del proyecto residencial en Chiclayo`}
                    fill
                    sizes="(min-width: 640px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                Conoce la casa
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-primary md:text-4xl">
                Recorre cada espacio antes de decidir
              </h2>
              <p className="mt-4 text-sm font-semibold text-accent-dark">
                {featuredProperty.type} · {featuredProperty.district},{" "}
                {featuredProperty.city}
              </p>
              <p className="mt-5 text-base leading-relaxed text-on-surface-variant">
                Una alternativa real para dejar de alquilar y empezar una nueva
                etapa con tu familia.
              </p>
              <ul className="mt-7 space-y-4">
                {projectHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-on-surface-variant"
                  >
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-accent-dark"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/propiedades/${featuredProperty.slug}`}
                  className={primaryButton}
                >
                  Ver detalles
                </Link>
                <Link
                  href={whatsappHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-primary px-6 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  Agendar visita
                  <MessageCircle aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="beneficios"
        className="scroll-mt-24 bg-surface-container-low py-16 md:py-20"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary">
              Lo que ganas comprando directo
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
              Menos vueltas. Más claridad. Una casa que puedes visitar.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-lg border border-outline-variant/45 bg-white p-7 shadow-[0_4px_20px_rgba(10,37,64,0.05)] transition hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(10,37,64,0.11)]"
              >
                <div className="flex size-10 items-center justify-center rounded bg-surface-container text-primary">
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-white md:py-20">
        <Container>
          <h2 className="text-center text-3xl font-bold">
            Para familias que quieren avanzar
          </h2>
          <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ title, description, icon: Icon }) => (
              <article key={title} className="grid grid-cols-[auto_1fr] gap-4">
                <Icon
                  aria-hidden="true"
                  className="mt-1 size-5 text-accent"
                  strokeWidth={1.8}
                />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/68">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="proceso"
        className="scroll-mt-24 bg-surface-container-low py-16 md:py-20"
      >
        <Container>
          <h2 className="text-center text-3xl font-bold text-primary">
            Tu camino a casa propia
          </h2>
          <ol className="relative mt-12 grid gap-8 md:grid-cols-5 md:gap-4">
            <span
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-outline-variant md:block"
            />
            {journeySteps.map(({ step, title, description }) => (
              <li key={step} className="relative text-center">
                <span
                  className={`relative z-10 mx-auto flex size-10 items-center justify-center rounded border font-bold ${
                    step === 1 || step === 5
                      ? "border-accent-dark bg-accent text-primary"
                      : "border-primary bg-primary text-white"
                  }`}
                >
                  {step}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-primary">
                  {title}
                </h3>
                <p className="mx-auto mt-2 max-w-40 text-xs leading-relaxed text-on-surface-variant">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="contacto" className="scroll-mt-24 py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold text-primary">
                ¿La vemos juntos?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-on-surface-variant">
                Escríbenos por WhatsApp. Te contamos precio, requisitos y
                horarios de visita.
              </p>
              <Link href={whatsappHref} className={`${primaryButton} mt-6`}>
                Quiero agendar visita
                <MessageCircle aria-hidden="true" className="size-4" />
              </Link>
              <dl className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <Clock3
                    aria-hidden="true"
                    className="mt-1 size-5 text-accent-dark"
                  />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                      {contactDetails[0].label}
                    </dt>
                    <dd className="mt-1 text-sm text-primary">
                      {contactDetails[0].value}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
            <ContactLeadForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
