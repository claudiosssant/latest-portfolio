export type Locale = "en" | "pt";

export type LocalizedText = Record<Locale, string>;

export type NavItem = {
  id: string;
  label: LocalizedText;
};

export type HeroSlide = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  metric: string;
  tag: string;
};

export type ExperienceItem = {
  company: string;
  role: LocalizedText;
  period: string;
  location: LocalizedText;
  bullets: LocalizedText[];
};

export type ProjectCard = {
  title: LocalizedText;
  description: LocalizedText;
  technologies: string[];
  category: string;
  image?: string;
  imageAlt?: LocalizedText;
  featured?: boolean;
  projectName?: string;
  ctaLabel?: LocalizedText;
  href?: string;
  fitContain?: boolean;
};

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

export type EducationItem = {
  title: LocalizedText;
  subtitle: LocalizedText;
  meta: string;
};

export type ContactLink = {
  label: string;
  href: string;
  kind?: "linkedin" | "github" | "email" | "whatsapp";
  placeholder?: boolean;
};

export type PortfolioData = {
  nav: NavItem[];
  labels: {
    experience: LocalizedText;
    projects: LocalizedText;
    contact: LocalizedText;
    language: LocalizedText;
    availableForWork: LocalizedText;
    basedIn: LocalizedText;
    yearsLabel: LocalizedText;
    scrollLabel: LocalizedText;
    viewProjects: LocalizedText;
    contactMe: LocalizedText;
    professionalFocus: LocalizedText;
    heroCardTitle: LocalizedText;
    placeholderBadge: LocalizedText;
    trustedBy: LocalizedText;
    projectImpact: LocalizedText;
    skillsOverview: LocalizedText;
    educationTitle: LocalizedText;
    certificationsTitle: LocalizedText;
    contactTitle: LocalizedText;
    contactBody: LocalizedText;
    footerNote: LocalizedText;
  };
  hero: {
    name: string;
    role: LocalizedText;
    headline: LocalizedText;
    description: LocalizedText;
    location: string;
    stats: Array<{ value: string; label: LocalizedText }>;
    slides: HeroSlide[];
    avatarLabel: LocalizedText;
  };
  about: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    paragraphs: LocalizedText[];
    highlights: LocalizedText[];
  };
  experience: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    items: ExperienceItem[];
  };
  projects: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    impactNote: LocalizedText;
    partnersTitle: LocalizedText;
    partners: Array<{
      name: string;
      logo: string;
    }>;
    cards: ProjectCard[];
  };
  skills: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    groups: SkillGroup[];
  };
  education: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    items: EducationItem[];
    certifications: string[];
  };
  contact: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    body: LocalizedText;
    links: ContactLink[];
  };
};
