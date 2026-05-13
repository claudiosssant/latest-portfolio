"use client";

import Image from "next/image";
import { Locale, PortfolioData } from "@/types/portfolio";
import { Section, SectionHeading } from "@/components/ui";
import { ScrollReveal } from "@/components/Motion";

type ProjectsProps = {
  data: PortfolioData["projects"];
  locale: Locale;
  trustedBy: string;
};

export function Projects({ data, locale, trustedBy }: ProjectsProps) {
  const partnerTrack = [...data.partners, ...data.partners, ...data.partners];

  return (
    <Section id="projects" className="bg-ink text-white">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <ScrollReveal>
          <SectionHeading
            align="left"
            body={data.intro[locale]}
            eyebrow={data.eyebrow[locale]}
            theme="dark"
            title={data.title[locale]}
          />
        </ScrollReveal>
        <ScrollReveal className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 text-base leading-8 text-stone-300" delay={120}>
          <p>{trustedBy}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-accentSoft">
            {data.impactNote[locale]}
          </p>
        </ScrollReveal>
      </div>

      <div className="mt-10">
        <ScrollReveal className="flex flex-col gap-5 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-accentSoft">
              {data.partnersTitle[locale]}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
              {locale === "en"
                ? "Some highly regarded institutions where they have already developed solutions."
                : "Algumas instituições de grande reconhecimento onde já desenvolveram soluções."}
            </p>
          </div>
          <div className="flex gap-2">
            {data.partners.map((partner) => (
              <span
                key={partner.name}
                className="h-2.5 w-2.5 rounded-full bg-white/20"
              />
            ))}
          </div>
        </ScrollReveal>

        <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 overflow-hidden py-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24" />
          <div className="flex w-max animate-marquee gap-6 pr-6">
            {partnerTrack.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex h-28 w-[300px] shrink-0 items-center justify-center rounded-[1.8rem] px-10 sm:h-32 sm:w-[360px] lg:w-[420px]"
              >
                <Image
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain opacity-90 grayscale transition hover:opacity-100 hover:grayscale-0"
                  height={120}
                  src={partner.logo}
                  width={300}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {data.cards.map((card, index) => (
          <ScrollReveal
            key={card.title.en}
            className={`group rounded-[2rem] border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08] ${
              card.featured ? "md:col-span-2" : ""
            }`}
            delay={index * 110}
          >
            <div className="rounded-[1.6rem] border border-dashed border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-stone-400">
                  {card.category}
                </span>
                <span className="font-display text-lg text-accentSoft">
                  0{index + 1}
                </span>
              </div>
              {card.image ? (
                <div
                  className={`mt-8 overflow-hidden rounded-[1.2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(202,138,4,0.35),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] ${
                    card.featured ? "aspect-[16/7]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    alt={card.imageAlt?.[locale] ?? card.title[locale]}
                    className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${
                      card.fitContain ? "object-contain bg-[#17120f] p-3" : "object-cover"
                    }`}
                    height={720}
                    src={card.image}
                    width={1280}
                  />
                </div>
              ) : (
                <div className="mt-12 h-40 rounded-[1.2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(202,138,4,0.35),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
                  <div className="grid gap-3">
                    <div className="h-3 w-24 rounded-full bg-white/20" />
                    <div className="h-3 w-40 rounded-full bg-accent/45" />
                    <div className="mt-6 grid gap-2">
                      <div className="h-14 rounded-2xl bg-white/10" />
                      <div className="h-14 rounded-2xl bg-white/5" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <h3 className="mt-6 font-display text-2xl text-white">
              {card.title[locale]}
            </h3>
            {card.projectName ? (
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                <div>
                  <p className="mt-2 font-display text-xl text-white">{card.projectName}</p>
                </div>
                {card.href && card.ctaLabel ? (
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-accentSoft"
                    href={card.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {card.ctaLabel[locale]}
                  </a>
                ) : null}
              </div>
            ) : null}
            <p className="mt-4 text-base leading-8 text-stone-300">
              {card.description[locale]}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {card.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
