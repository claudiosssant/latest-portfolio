import { Locale, PortfolioData } from "@/types/portfolio";
import { Section, SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/Motion";

type SkillsProps = {
  data: PortfolioData["skills"];
  locale: Locale;
};

export function Skills({ data, locale }: SkillsProps) {
  return (
    <Section id="skills" className="bg-white">
      <ScrollReveal>
        <SectionHeading
          eyebrow={data.eyebrow[locale]}
          title={data.title[locale]}
          body={data.intro[locale]}
        />
      </ScrollReveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.groups.map((group, index) => (
          <ScrollReveal
            key={group.title.en}
            className="rounded-[1.8rem] border border-stone-200 bg-[#fbf8f3] p-6 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-amber-600/40"
            delay={index * 80}
          >
            <h3 className="font-display text-2xl text-ink">{group.title[locale]}</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
