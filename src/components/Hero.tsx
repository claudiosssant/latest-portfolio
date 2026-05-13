"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PortfolioData, Locale } from "@/types/portfolio";
import { ButtonLink, Section } from "@/components/ui";
import { ScrollReveal, usePointerTilt } from "@/components/Motion";

type HeroProps = {
  data: PortfolioData;
  locale: Locale;
};

export function Hero({ data, locale }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const tiltRef = usePointerTilt(5);
  const imageSlides = [
    {
      src: "/assets/hero1.jpeg",
      alt:
        locale === "en"
          ? "Hero project image 1"
          : "Imagem hero 1",
    },
    {
      src: "/assets/hero2.jpeg",
      alt:
        locale === "en"
          ? "Hero project image 2"
          : "Imagem hero 2",
    },
    {
      src: "/assets/hero3.jpeg",
      alt:
        locale === "en"
          ? "Hero project image 3"
          : "Imagem hero 3",
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % imageSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [imageSlides.length]);

  return (
    <Section
      id="hero"
      className="min-h-[calc(100svh-4.75rem)] overflow-x-hidden bg-ink bg-hero-radial text-white py-12 sm:py-16 lg:py-14"
    >
      <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(26rem,0.95fr)] lg:items-center">
        <div className="relative min-w-0">
          <ScrollReveal distance={18}>
            <h1 className="max-w-3xl text-balance break-words font-display text-[clamp(2.55rem,10.5vw,4.5rem)] leading-[1.05] sm:text-[clamp(3rem,7vw,5rem)] lg:text-[clamp(3.25rem,4.7vw,5.5rem)]">
              {data.hero.headline[locale]}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={120} distance={20}>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-stone-300 sm:text-lg lg:text-xl">
              {data.hero.description[locale]}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={220} distance={18}>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="#projects">{data.labels.viewProjects[locale]}</ButtonLink>
              <ButtonLink href="#contact" variant="ghost">
                {data.labels.contactMe[locale]}
              </ButtonLink>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={320} distance={22}>
            <div className="mt-12 grid min-w-0 gap-4 sm:grid-cols-3">
              {data.hero.stats.map((stat) => (
                <div
                  key={stat.value}
                  className="min-w-0 rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.07]"
                >
                  <p className="break-words font-display text-2xl leading-tight text-accentSoft">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    {stat.label[locale]}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-10 hidden items-center gap-3 text-xs uppercase tracking-[0.28em] text-stone-500 sm:flex">
            <span className="h-px w-12 bg-white/15" />
            {data.labels.scrollLabel[locale]}
          </div>
        </div>

        <ScrollReveal className="relative min-w-0" delay={180} distance={24}>
          <div className="absolute -left-10 top-10 hidden h-36 w-36 rounded-full bg-accent/20 blur-3xl md:block" />
          <div className="absolute bottom-8 right-0 hidden h-52 w-52 rounded-full bg-white/10 blur-3xl md:block" />

          <div
            ref={tiltRef}
            className="tilt-panel relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-3 shadow-panel backdrop-blur sm:rounded-[2rem] sm:p-4"
          >
            <div className="relative z-10 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#171c25]">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5">
                <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-stone-200 backdrop-blur">
                  {String(activeSlide + 1).padStart(2, "0")} / {String(imageSlides.length).padStart(2, "0")}
                </div>
              </div>

              <div className="relative aspect-[4/5] min-h-[18rem] sm:min-h-[24rem] lg:aspect-[5/6] lg:min-h-[28rem]">
                <Image
                  alt={imageSlides[activeSlide].alt}
                  className="h-full w-full object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  src={imageSlides[activeSlide].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10131a]/55 via-transparent to-[#10131a]/10" />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between p-5">
                <div className="flex gap-2">
                  {imageSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      aria-label={`Slide ${index + 1}`}
                      className={`h-2.5 rounded-full transition ${
                        activeSlide === index ? "w-8 bg-accent" : "w-2.5 bg-white/40"
                      }`}
                      onClick={() => setActiveSlide(index)}
                      type="button"
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    aria-label="Previous slide"
                    className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                    onClick={() =>
                      setActiveSlide((current) =>
                        current === 0 ? imageSlides.length - 1 : current - 1,
                      )
                    }
                    type="button"
                  >
                    ←
                  </button>
                  <button
                    aria-label="Next slide"
                    className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                    onClick={() =>
                      setActiveSlide((current) => (current + 1) % imageSlides.length)
                    }
                    type="button"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
