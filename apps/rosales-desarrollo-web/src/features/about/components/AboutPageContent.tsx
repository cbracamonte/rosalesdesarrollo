import { Section } from "@/components/layout/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InfoCard } from "@/components/ui/InfoCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { WebPageJsonLd } from "@/components/seo/WebPageJsonLd";
import { aboutContent } from "../data/about-content";

export function AboutPageContent() {
  const { hero, story, mission, values } = aboutContent;

  return (
    <main id="main-content" className="min-h-screen pt-28 pb-16">
      <WebPageJsonLd
        name="Nosotros"
        description={hero.description}
        path="/nosotros"
      />

      <Section className="py-0">
        <PageIntro title={hero.title} description={hero.description} />
      </Section>

      <Section className="py-12">
        <h2 className="font-heading text-2xl font-bold text-brand-white">
          {story.title}
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-brand-gray">
          {story.body}
        </p>
      </Section>

      <Section className="py-0">
        <h2 className="font-heading text-2xl font-bold text-brand-white">
          {mission.title}
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-brand-gray">
          {mission.body}
        </p>
      </Section>

      <Section className="py-12">
        <h2 className="font-heading text-2xl font-bold text-brand-white">
          {values.title}
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {values.items.map((value) => (
            <InfoCard
              key={value.title}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <CtaBanner
          title="Construimos proyectos con visión urbana y obsesión por el detalle."
          description="Explorá nuestros desarrollos o hablá con el equipo para conocer oportunidades, disponibilidad y próximos lanzamientos."
          actions={
            <>
              <ButtonLink href="/propiedades">
                Explora nuestros proyectos inmobiliarios
              </ButtonLink>
              <ButtonLink href="/contacto">
                Contáctanos para más información
              </ButtonLink>
            </>
          }
        />
      </Section>
    </main>
  );
}
