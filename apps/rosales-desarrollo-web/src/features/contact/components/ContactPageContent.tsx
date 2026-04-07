import { Section } from "@/components/layout/Section";
import { WebPageJsonLd } from "@/components/seo/WebPageJsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InfoCard } from "@/components/ui/InfoCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { contactContent } from "../data/contact-content";

export function ContactPageContent() {
  const { hero, info, interest } = contactContent;

  return (
    <main id="main-content" className="min-h-screen pt-28 pb-16">
      <WebPageJsonLd
        name="Contacto"
        description={hero.description}
        path="/contacto"
      />

      <Section className="py-0">
        <PageIntro title={hero.title} description={hero.description} />
      </Section>

      <Section className="py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <InfoCard
            title={info.title}
            description={
              <dl className="space-y-4">
                {info.items.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm font-medium text-brand-silver">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-brand-gray">{item.value}</dd>
                  </div>
                ))}
              </dl>
            }
            className="p-8"
          />

          <InfoCard
            title={interest.title}
            description={
              <>
                <p>{interest.description}</p>
                <ButtonLink href="/propiedades" variant="text" className="mt-6">
                  Ver nuestros proyectos disponibles
                </ButtonLink>
              </>
            }
            className="p-8"
          />
        </div>
      </Section>
    </main>
  );
}
