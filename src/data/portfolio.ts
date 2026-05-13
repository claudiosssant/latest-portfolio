import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  nav: [
    { id: "hero", label: { en: "Home", pt: "Início" } },
    { id: "about", label: { en: "About", pt: "Sobre" } },
    { id: "experience", label: { en: "Experience", pt: "Experiência" } },
    { id: "projects", label: { en: "Projects", pt: "Projetos" } },
    { id: "skills", label: { en: "Skills", pt: "Skills" } },
    { id: "education", label: { en: "Education", pt: "Formação" } },
    { id: "contact", label: { en: "Contact", pt: "Contato" } },
  ],
  labels: {
    experience: { en: "3+ years", pt: "3+ anos" },
    projects: { en: "Real delivery", pt: "Entrega real" },
    contact: { en: "Get in touch", pt: "Entre em contato" },
    language: { en: "Language", pt: "Idioma" },
    availableForWork: { en: "Available for new opportunities", pt: "Disponível para novas oportunidades" },
    basedIn: { en: "Based in", pt: "Atuando em" },
    yearsLabel: { en: "Professional experience", pt: "Experiência profissional" },
    scrollLabel: { en: "Scroll to explore", pt: "Role para explorar" },
    viewProjects: { en: "View Projects", pt: "Ver Projetos" },
    contactMe: { en: "Contact Me", pt: "Falar Comigo" },
    professionalFocus: { en: "Fullstack developer portfolio", pt: "Portfólio de desenvolvedor fullstack" },
    heroCardTitle: { en: "Developer Snapshot", pt: "Resumo Profissional" },
    placeholderBadge: { en: "Placeholder asset", pt: "Asset temporário" },
    trustedBy: {
      en: "Contributed to digital solutions for recognized organizations including Campari and Polícia Civil de Pernambuco.",
      pt: "Contribuiu com soluções digitais para organizações reconhecidas, incluindo Campari e Polícia Civil de Pernambuco.",
    },
    projectImpact: {
      en: "Professional impact across web platforms, mobile experiences, and API-driven products.",
      pt: "Impacto profissional em plataformas web, experiências mobile e produtos orientados por APIs.",
    },
    skillsOverview: {
      en: "Technologies used to design, build, integrate, and evolve modern digital products.",
      pt: "Tecnologias usadas para desenhar, construir, integrar e evoluir produtos digitais modernos.",
    },
    educationTitle: { en: "Education & Certifications", pt: "Formação e Certificações" },
    certificationsTitle: { en: "Certifications", pt: "Certificações" },
    contactTitle: { en: "Let's build something meaningful", pt: "Vamos construir algo relevante" },
    contactBody: {
      en: "Open to conversations with recruiters, companies, and product teams looking for a fullstack developer who values performance, clarity, and user experience.",
      pt: "Aberto a conversas com recrutadores, empresas e times de produto que buscam um desenvolvedor fullstack com foco em performance, clareza e experiência do usuário.",
    },
    footerNote: {
      en: "Portfolio landing page structure ready for real images, production links, and project media.",
      pt: "Estrutura do portfólio pronta para receber imagens reais, links finais e mídia dos projetos.",
    },
  },
  hero: {
    name: "Claudio Santos",
    role: {
      en: "Fullstack Developer",
      pt: "Desenvolvedor Fullstack",
    },
    headline: {
      en: "Building impactful web and mobile digital experiences.",
      pt: "Desenvolvendo experiências digitais impactantes para web e mobile.",
    },
    description: {
      en: "Software Developer focused on creating digital solutions with JavaScript, TypeScript, React, Next.js, React Native and Node.js. Passionate about technology, design and user experience.",
      pt: "Desenvolvedor de Software focado em criar soluções digitais com JavaScript, TypeScript, React, Next.js, React Native e Node.js. Apaixonado por tecnologia, design e experiência do usuário.",
    },
    location: "Recife, Pernambuco, Brazil",
    stats: [
      {
        value: "3+",
        label: { en: "Years building products", pt: "Anos construindo produtos" },
      },
      {
        value: "Web + Mobile",
        label: { en: "Cross-platform delivery", pt: "Entrega multiplataforma" },
      },
      {
        value: "UX-minded",
        label: { en: "Design-aware execution", pt: "Execução orientada a design" },
      },
    ],
    slides: [
      {
        eyebrow: { en: "Project Highlights", pt: "Destaques de Projetos" },
        title: { en: "Enterprise Web Platform", pt: "Plataforma Web Corporativa" },
        description: {
          en: "Structured front-end flows, scalable components, and API-connected experiences for high-visibility products.",
          pt: "Fluxos front-end bem estruturados, componentes escaláveis e experiências conectadas por API para produtos de alta visibilidade.",
        },
        metric: "React + Next.js",
        tag: "Frontend Systems",
      },
      {
        eyebrow: { en: "Mobile Experience", pt: "Experiência Mobile" },
        title: { en: "Responsive Mobile Interfaces", pt: "Interfaces Mobile Responsivas" },
        description: {
          en: "Mobile-first interfaces developed with React Native, TypeScript, and careful usability decisions.",
          pt: "Interfaces mobile-first desenvolvidas com React Native, TypeScript e decisões cuidadosas de usabilidade.",
        },
        metric: "React Native",
        tag: "Mobile Delivery",
      },
      {
        eyebrow: { en: "Backend Integration", pt: "Integração Backend" },
        title: { en: "API Integration & Services", pt: "Integração de APIs e Serviços" },
        description: {
          en: "Typed integrations, feature implementation, and maintainable backend communication with Node.js, NestJS, and Prisma.",
          pt: "Integrações tipadas, implementação de features e comunicação backend sustentável com Node.js, NestJS e Prisma.",
        },
        metric: "Node.js + NestJS",
        tag: "Fullstack Flow",
      },
    ],
    avatarLabel: {
      en: "Claudio Santos portrait and profile presentation",
      pt: "Retrato e apresentação profissional de Claudio Santos",
    },
  },
  about: {
    eyebrow: { en: "About Claudio", pt: "Sobre Claudio" },
    title: {
      en: "A fullstack developer focused on useful products, clean systems, and thoughtful user experiences.",
      pt: "Um desenvolvedor fullstack focado em produtos úteis, sistemas limpos e experiências de usuário bem pensadas.",
    },
    paragraphs: [
      {
        en: "Claudio Santos is a Brazilian software developer with 2+ years of professional experience building responsive web and mobile solutions using JavaScript, TypeScript, React, Next.js, and React Native.",
        pt: "Claudio Santos é um desenvolvedor brasileiro com mais de 2 anos de experiência profissional construindo soluções web e mobile responsivas com JavaScript, TypeScript, React, Next.js e React Native.",
      },
      {
        en: "His work combines functionality, maintainable architecture, and strong attention to design quality, making collaboration between product, engineering, and user experience more effective.",
        pt: "Seu trabalho une funcionalidade, arquitetura sustentável e forte atenção à qualidade visual, tornando a colaboração entre produto, engenharia e experiência do usuário mais eficiente.",
      },
      {
        en: "He is currently completing a degree in Sistemas para Internet, expected in 2026, and has complementary certifications in UX/UI and Design Thinking that reinforce his product-driven approach.",
        pt: "Atualmente cursa Sistemas para Internet, com conclusão prevista para 2026, e possui certificações em UX/UI e Design Thinking que reforçam sua abordagem orientada a produto.",
      },
    ],
    highlights: [
      { en: "3+ years of market experience", pt: "3+ anos de experiência de mercado" },
      { en: "Web and mobile product development", pt: "Desenvolvimento de produtos web e mobile" },
      { en: "Strong design and user experience awareness", pt: "Forte atenção a design e experiência do usuário" },
      { en: "Graduating in Sistemas para Internet in 2026", pt: "Graduando em Sistemas para Internet com conclusão em 2026" },
    ],
  },
  experience: {
    eyebrow: { en: "Professional Experience", pt: "Experiência Profissional" },
    title: {
      en: "Hands-on delivery across product interfaces, mobile applications, and fullstack integrations.",
      pt: "Atuação prática em interfaces de produto, aplicações mobile e integrações fullstack.",
    },
    intro: {
      en: "Recent work spans responsive front-end delivery, mobile interfaces, API integrations, and ongoing product improvements.",
      pt: "A experiência recente inclui entregas front-end responsivas, interfaces mobile, integrações de API e evolução contínua de produto.",
    },
    items: [
      {
        company: "Souv",
        role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
        period: "Apr 2025 - Present",
        location: { en: "Recife, Pernambuco, Brazil · Hybrid", pt: "Recife, Pernambuco, Brasil · Híbrido" },
        bullets: [
          {
            en: "Developed and collaborated on responsive web interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
            pt: "Desenvolveu e colaborou em interfaces web responsivas com React, Next.js, TypeScript e Tailwind CSS.",
          },
          {
            en: "Built mobile interfaces with React Native and NativeWind for performance-oriented applications.",
            pt: "Desenvolveu interfaces mobile com React Native e NativeWind para aplicações orientadas à performance.",
          },
          {
            en: "Integrated APIs with front-end applications using Node.js, NestJS, Prisma, and TypeScript.",
            pt: "Realizou integrações de APIs com aplicações front-end usando Node.js, NestJS, Prisma e TypeScript.",
          },
          {
            en: "Refactored code, fixed bugs, and helped align delivery through planning and client meetings.",
            pt: "Refatorou código, corrigiu bugs e ajudou no alinhamento das entregas por meio de planejamentos e reuniões com clientes.",
          },
        ],
      },
      {
        company: "Freelancer",
        role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
        period: "Oct 2024 - Apr 2025",
        location: { en: "Brazil · Remote", pt: "Brasil · Remoto" },
        bullets: [
          {
            en: "Built fullstack solutions for web and mobile using JavaScript, TypeScript, React, Next.js, and React Native.",
            pt: "Desenvolveu soluções fullstack para web e mobile usando JavaScript, TypeScript, React, Next.js e React Native.",
          },
          {
            en: "Created responsive interfaces with Tailwind CSS and NativeWind, keeping usability and visual consistency as priorities.",
            pt: "Criou interfaces responsivas com Tailwind CSS e NativeWind, mantendo usabilidade e consistência visual como prioridades.",
          },
          {
            en: "Integrated services and APIs with Node.js, NestJS, Prisma, and TypeScript for maintainable product flows.",
            pt: "Realizou integrações de serviços e APIs com Node.js, NestJS, Prisma e TypeScript para fluxos de produto sustentáveis.",
          },
          {
            en: "Delivered product-oriented features across front-end and backend with the same core technology stack used in later professional roles.",
            pt: "Entregou funcionalidades orientadas a produto entre front-end e backend com a mesma stack principal usada nas experiências profissionais seguintes.",
          },
        ],
      },
      {
        company: "AFRO CROWN LTDA ®",
        role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
        period: "Jul 2023 - Sep 2024",
        location: { en: "Campinas, São Paulo, Brazil · Remote", pt: "Campinas, São Paulo, Brasil · Remoto" },
        bullets: [
          {
            en: "Worked directly on front-end development for two mobile applications using React Native and TypeScript.",
            pt: "Atuou diretamente no desenvolvimento front-end de dois aplicativos mobile com React Native e TypeScript.",
          },
          {
            en: "Developed web product screens with React, Next.js, Tailwind CSS, and related modern technologies.",
            pt: "Desenvolveu telas de produto web com React, Next.js, Tailwind CSS e tecnologias modernas correlatas.",
          },
          {
            en: "Created service confirmation email templates and integrated applications with backend APIs.",
            pt: "Criou templates de e-mail de confirmação de serviços e integrou aplicações com APIs backend.",
          },
          {
            en: "Focused on usability, responsiveness, and maintainable implementation across mobile and web products.",
            pt: "Manteve foco em usabilidade, responsividade e implementação sustentável em produtos mobile e web.",
          },
        ],
      },
    ],
  },
  projects: {
    eyebrow: { en: "Selected Highlights", pt: "Destaques Selecionados" },
    title: {
      en: "Professional work translated into polished product experiences and scalable technical execution.",
      pt: "Trabalho profissional traduzido em experiências de produto refinadas e execução técnica escalável.",
    },
    intro: {
      en: "A curated mix of professional delivery, technical range, and visual execution, now supported by real portfolio assets and partner references.",
      pt: "Uma curadoria entre entrega profissional, amplitude técnica e execução visual, agora apoiada por assets reais do portfólio e referências de parceiros.",
    },
    impactNote: {
      en: "Contributed to digital solutions for recognized organizations such as Campari and Polícia Civil de Pernambuco.",
      pt: "Contribuiu com soluções digitais para organizações reconhecidas como Campari e Polícia Civil de Pernambuco.",
    },
    partnersTitle: {
      en: "Partners and recognized organizations",
      pt: "Parceiros e organizações reconhecidas",
    },
    partners: [
      {
        name: "Campari",
        logo: "/assets/logo-campari.png",
      },
      {
        name: "Fiabesa",
        logo: "/assets/logo-fiabesa.png",
      },
      {
        name: "Polícia Civil de Pernambuco",
        logo: "/assets/logo-policia.png",
      },
      {
        name: "UpSaúde",
        logo: "/assets/logo-upsaúde.png",
      },
    ],
    cards: [
      {
        title: { en: "Enterprise Web Platform", pt: "Plataforma Web Corporativa" },
        description: {
          en: "Responsive product flows, robust interface composition, and maintainable front-end architecture for business-critical web experiences.",
          pt: "Fluxos responsivos de produto, composição robusta de interfaces e arquitetura front-end sustentável para experiências web críticas ao negócio.",
        },
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        category: "Web",
        projectName: "Organixe",
        image: "/assets/project1.png",
        imageAlt: {
          en: "Preview of a personal project interface",
          pt: "Prévia de uma interface de projeto pessoal",
        },
        ctaLabel: {
          en: "Visit Project",
          pt: "Acessar Projeto",
        },
        href: "https://organixe-test.vercel.app/",
        fitContain: true,
        featured: true,
      },
      {
        title: { en: "Mobile Application Experience", pt: "Experiência em Aplicações Mobile" },
        description: {
          en: "Digital healthcare experience designed for mobile, connecting patients and services in a practical and accessible consultório digital flow.",
          pt: "Experiência digital em saúde desenhada para mobile, conectando pacientes e serviços em um fluxo prático e acessível de consultório digital.",
        },
        technologies: ["React Native", "TypeScript", "NativeWind", "Zustand"],
        category: "Mobile",
        projectName: "UpSaúde App",
        image: "/assets/mobile.jpeg",
        imageAlt: {
          en: "UpSaúde App mobile project preview",
          pt: "Prévia do projeto mobile UpSaúde App",
        },
        ctaLabel: {
          en: "Watch Feature",
          pt: "Ver Matéria",
        },
        href: "https://www.youtube.com/watch?v=xD3mRY_kCOA",
        fitContain: true,
      },
      {
        title: { en: "API Integration & Backend Services", pt: "Integração de APIs e Serviços Backend" },
        description: {
          en: "Robust backend structure supporting a public-safety recovery platform with reliable data flow, service orchestration, and production-grade support.",
          pt: "Estrutura backend robusta sustentando uma plataforma de recuperação em contexto de segurança pública, com fluxo confiável de dados, orquestração de serviços e suporte de produção.",
        },
        technologies: ["Node.js", "NestJS", "Prisma", "REST APIs"],
        category: "Backend",
        projectName: "Recupera 197",
        image: "/assets/backend.jpeg",
        imageAlt: {
          en: "Backend project preview for Recupera 197 platform",
          pt: "Prévia do projeto backend da plataforma Recupera 197",
        },
        ctaLabel: {
          en: "Read Article",
          pt: "Ver Matéria",
        },
        href: "https://www2.pc.pe.gov.br/post/policia-civil-de-pernambuco-devolve-mais-de-200-celulares-a-vitimas",
        fitContain: true,
      },
    ],
  },
  skills: {
    eyebrow: { en: "Tech Stack", pt: "Stack Tecnológica" },
    title: {
      en: "A practical toolkit for shipping interfaces, services, and user-centered digital products.",
      pt: "Um conjunto prático de tecnologias para entregar interfaces, serviços e produtos digitais centrados no usuário.",
    },
    intro: {
      en: "Grouped by specialty to show where Claudio contributes most across modern product teams.",
      pt: "Agrupado por especialidade para mostrar onde Claudio contribui mais em times de produto modernos.",
    },
    groups: [
      {
        title: { en: "Frontend", pt: "Frontend" },
        items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
      },
      {
        title: { en: "Mobile", pt: "Mobile" },
        items: ["React Native", "NativeWind", "Expo"],
      },
      {
        title: { en: "Backend", pt: "Backend" },
        items: ["Node.js", "NestJS", "Prisma", "REST APIs"],
      },
      {
        title: { en: "State Management", pt: "Gerenciamento de Estado" },
        items: ["Redux", "Zustand", "Context API"],
      },
      {
        title: { en: "Database / Cloud / Tools", pt: "Banco / Cloud / Ferramentas" },
        items: ["Firebase", "PostgreSQL", "Git", "GitHub", "Docker"],
      },
      {
        title: { en: "Design", pt: "Design" },
        items: ["UX/UI", "Design Thinking", "Responsive Design"],
      },
    ],
  },
  education: {
    eyebrow: { en: "Learning Journey", pt: "Jornada de Aprendizado" },
    title: {
      en: "Formal education backed by product-minded certifications.",
      pt: "Formação formal apoiada por certificações voltadas a produto.",
    },
    intro: {
      en: "A blend of software development foundations and user-experience-driven thinking.",
      pt: "Uma combinação de fundamentos em desenvolvimento de software com pensamento orientado à experiência do usuário.",
    },
    items: [
      {
        title: { en: "Sistemas para Internet", pt: "Sistemas para Internet" },
        subtitle: {
          en: "Undergraduate degree in progress",
          pt: "Graduação em andamento",
        },
        meta: "Expected completion / Conclusão prevista: 2026",
      },
    ],
    certifications: ["UX/UI", "Design Thinking"],
  },
  contact: {
    eyebrow: { en: "Contact", pt: "Contato" },
    title: {
      en: "Recruiters, companies, and collaborators are welcome here.",
      pt: "Recrutadores, empresas e colaboradores são bem-vindos por aqui.",
    },
    body: {
      en: "If you are building thoughtful products and need a fullstack developer who can move between interface, integration, and user experience, Claudio is open to the conversation.",
      pt: "Se você está construindo produtos relevantes e precisa de um desenvolvedor fullstack capaz de transitar entre interface, integração e experiência do usuário, Claudio está aberto à conversa.",
    },
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/claudiosssantos/",
        kind: "linkedin",
      },
      {
        label: "GitHub",
        href: "https://github.com/claudiosssant",
        kind: "github",
      },
      {
        label: "Email",
        href: "mailto:claudiogsssantos@gmail.com",
        kind: "email",
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/5581994981809",
        kind: "whatsapp",
      },
    ],
  },
};
