import { Section, SectionHeading } from "@/components/ui";
import { Locale, PortfolioData } from "@/types/portfolio";
import { ScrollReveal } from "@/components/Motion";

type AboutProps = {
  data: PortfolioData["about"];
  locale: Locale;
};

export function About({ data, locale }: AboutProps) {
  return (
    <Section id="about" className="bg-mist">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <ScrollReveal className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-panel">
          <SectionHeading
            body={data.paragraphs[0][locale]}
            eyebrow={data.eyebrow[locale]}
            title={data.title[locale]}
          />
        </ScrollReveal>
        <div className="space-y-6">
          {data.paragraphs.slice(1).map((paragraph, index) => (
            <ScrollReveal
              key={paragraph.en}
              className="rounded-[1.6rem] border border-stone-200 bg-white px-6 py-6 text-base leading-8 text-stone-600 shadow-panel"
              delay={index * 90}
            >
              <p>{paragraph[locale]}</p>
            </ScrollReveal>
          ))}
          <div className="grid gap-4 sm:grid-cols-2">
            {data.highlights.map((highlight, index) => (
              <ScrollReveal
                key={highlight.en}
                className="rounded-[1.5rem] border border-stone-200 bg-[#f8f5ef] px-5 py-5 text-sm font-medium leading-7 text-ink transition duration-300 hover:-translate-y-1 hover:border-amber-500/40"
                delay={index * 70}
              >
                {highlight[locale]}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
