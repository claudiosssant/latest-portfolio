"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PortfolioData, Locale } from "@/types/portfolio";
import { ButtonLink, Section } from "@/components/ui";

type HeroProps = {
  data: PortfolioData;
  locale: Locale;
};

export function Hero({ data, locale }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);
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
      className="overflow-hidden bg-ink bg-hero-radial text-white lg:py-14 h-screen"
    >
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative">
          <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] sm:text-4xl lg:text-5xl xl:text-7xl">
            {data.hero.headline[locale]}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
            {data.hero.description[locale]}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="#projects">{data.labels.viewProjects[locale]}</ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              {data.labels.contactMe[locale]}
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {data.hero.stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <p className="font-display text-2xl text-accentSoft">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  {stat.label[locale]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-stone-500">
            <span className="h-px w-12 bg-white/15" />
            {data.labels.scrollLabel[locale]}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 hidden h-36 w-36 rounded-full bg-accent/20 blur-3xl md:block" />
          <div className="absolute bottom-8 right-0 hidden h-52 w-52 rounded-full bg-white/10 blur-3xl md:block" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-panel backdrop-blur">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#171c25]">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5">
                <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-stone-200 backdrop-blur">
                  {String(activeSlide + 1).padStart(2, "0")} / {String(imageSlides.length).padStart(2, "0")}
                </div>
              </div>

              <div className="relative aspect-[5/6] min-h-[28rem]">
                <Image
                  alt={imageSlides[activeSlide].alt}
                  className="h-full w-full object-cover"
                  fill
                  priority
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
        </div>
      </div>
    </Section>
  );
}
