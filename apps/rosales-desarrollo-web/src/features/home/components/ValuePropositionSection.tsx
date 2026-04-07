import { Section } from "@/components/layout/Section";
import { InfoCard } from "@/components/ui/InfoCard";
import { homeContent } from "../data/home-content";

export function ValuePropositionSection() {
  const { eyebrow, title, description, pillars } = homeContent.valueProposition;

  return (
    <Section>
      <p className="font-heading text-sm uppercase tracking-[0.24em] text-brand-silver">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-4xl font-heading text-3xl font-bold text-brand-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-gray">
        {description}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <InfoCard
            key={pillar.title}
            title={pillar.title}
            description={pillar.description}
          />
        ))}
      </div>
    </Section>
  );
}
