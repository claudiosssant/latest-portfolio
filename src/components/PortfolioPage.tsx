"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Locale } from "@/types/portfolio";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function PortfolioPage() {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <div className="min-h-screen bg-mist text-ink">
      <Navbar
        nav={portfolioData.nav}
        locale={locale}
        onLocaleChange={setLocale}
      />
      <main>
        <Hero data={portfolioData} locale={locale} />
        <About data={portfolioData.about} locale={locale} />
        <Experience data={portfolioData.experience} locale={locale} />
        <Projects
          data={portfolioData.projects}
          locale={locale}
          trustedBy={portfolioData.labels.trustedBy[locale]}
        />
        <Skills data={portfolioData.skills} locale={locale} />
        <Education
          data={portfolioData.education}
          locale={locale}
          labels={portfolioData.labels}
        />
        <Contact data={portfolioData.contact} locale={locale} />
      </main>
      <Footer
        locale={locale}
        nav={portfolioData.nav}
        note={portfolioData.labels.footerNote[locale]}
      />
    </div>
  );
}
