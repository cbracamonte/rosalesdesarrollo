import { cn } from "@/lib/utils";

interface PageIntroProps {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
  tone?: "dark" | "light";
}

export function PageIntro({
  title,
  description,
  eyebrow,
  className,
  tone = "dark",
}: PageIntroProps) {
  return (
    <div className={cn("max-w-4xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "font-heading text-sm uppercase tracking-[0.24em]",
            tone === "dark" ? "text-brand-silver" : "text-brand-carbon/65",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={cn(
          "mt-4 font-heading text-4xl font-bold md:text-5xl",
          tone === "dark" ? "text-brand-white" : "text-brand-carbon",
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          "mt-4 max-w-3xl text-lg leading-relaxed",
          tone === "dark" ? "text-brand-gray" : "text-brand-carbon/80",
        )}
      >
        {description}
      </p>
    </div>
  );
}
