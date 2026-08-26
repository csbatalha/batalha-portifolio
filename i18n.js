const I18N = {
  pt: {
    "nav.home": "Home",
    "nav.bio": "Bio",
    "nav.stacks": "Stacks",
    "nav.projetos": "Projetos",
    "home.status": "Disponível para novos projetos",
    "home.title": "Bem-vindo!",
    "home.sub_pre": "Sou ",
    "home.name": "Gabriel Batalha",
    "home.sub_post": ", um desenvolvedor full-stack.",
    "bio.eyebrow": "sobre-mim",
    "bio.who_title": "Quem sou?",
    "bio.who_text": "Sou desenvolvedor full-stack apaixonado por transformar ideias em produtos digitais rápidos, acessíveis e bem construídos. Gosto de entender o problema antes de escrever a primeira linha de código.",
    "bio.char_title": "Características",
    "bio.char_text": "Curioso, organizado e direto ao ponto. Prefiro soluções simples que funcionam a soluções complexas que impressionam. Trabalho bem em equipe e gosto de dar e receber feedback.",
    "bio.goals_title": "Objetivos e Sonhos",
    "bio.goals_text": "Quero atuar em projetos que unam bom design e engenharia sólida, crescer como desenvolvedor full-stack e, no futuro, liderar times técnicos com a mesma curiosidade que tenho hoje.",
    "bio.studies_title": "Estudos",
    "stacks.eyebrow": "ferramentas",
    "stacks.title": "Stacks",
    "stacks.frontend": "Front-end",
    "stacks.backend": "Back-end",
    "stacks.tools": "Ferramentas & DevOps",
    "projetos.eyebrow": "trabalhos",
    "projetos.title": "Projetos",
    "projetos.empty": "Nenhum projeto adicionado ainda — edite projects.js para começar.",
    "projetos.demo": "ver demo",
    "projetos.repo": "código",
    "footer.rights": "© 2026 Gabriel Batalha. Feito com precisão e café."
  },
  en: {
    "nav.home": "Home",
    "nav.bio": "Bio",
    "nav.stacks": "Stacks",
    "nav.projetos": "Projects",
    "home.status": "Available for new projects",
    "home.title": "Welcome!",
    "home.sub_pre": "I'm ",
    "home.name": "Gabriel Batalha",
    "home.sub_post": ", a full-stack developer.",
    "bio.eyebrow": "about-me",
    "bio.who_title": "Who am I?",
    "bio.who_text": "I'm a full-stack developer who enjoys turning ideas into fast, accessible, well-built digital products. I like understanding the problem before writing the first line of code.",
    "bio.char_title": "Traits",
    "bio.char_text": "Curious, organized and to the point. I'd rather ship a simple solution that works than a complex one that just impresses. I work well in teams and value honest feedback.",
    "bio.goals_title": "Goals & Dreams",
    "bio.goals_text": "I want to work on projects that combine good design with solid engineering, grow as a full-stack developer, and one day lead technical teams with the same curiosity I have today.",
    "bio.studies_title": "Studies",
    "stacks.eyebrow": "toolbox",
    "stacks.title": "Stacks",
    "stacks.frontend": "Front-end",
    "stacks.backend": "Back-end",
    "stacks.tools": "Tools & DevOps",
    "projetos.eyebrow": "work",
    "projetos.title": "Projects",
    "projetos.empty": "No projects added yet — edit projects.js to get started.",
    "projetos.demo": "view demo",
    "projetos.repo": "source",
    "footer.rights": "© 2026 Gabriel Batalha. Built with precision and coffee."
  }
};

const STUDIES_TIMELINE = {
  pt: [
    { year: "2019", icon: "💻", title: "Primeiro contato com programação", desc: "Lógica de programação e estrutura de dados básica." },
    { year: "2021", icon: "🎓", title: "Primeira formatura na área da tecnologia", desc: "Técnico em desenvolvimento de sistemas." },
    { year: "2023", icon: "🇬🇧", title: "Formatura no curso de inglês", desc: "Comunicação avançada em fluência." },
    { year: "2024", icon: "</>", title: "Início da faculdade", desc: "Bacharelado em Ciência da Computação." }
  ],
  en: [
    { year: "2019", icon: "💻", title: "First contact with programming", desc: "Basic programming logic and data structures." },
    { year: "2021", icon: "🎓", title: "First graduation in tech", desc: "Technical degree in systems development." },
    { year: "2023", icon: "🇬🇧", title: "Graduated English course", desc: "Advanced fluency communication." },
    { year: "2024", icon: "</>", title: "Started university", desc: "B.Sc. in Computer Science." }
  ]
};

const STACKS = {
  frontend: [
    { icon: "⚛️", name: "React", level: "avançado" },
    { icon: "▲", name: "Next.js", level: "avançado" },
    { icon: "🎨", name: "TailwindCSS", level: "avançado" },
    { icon: "🟦", name: "TypeScript", level: "intermediário" }
  ],
  backend: [
    { icon: "🟢", name: "Node.js", level: "avançado" },
    { icon: "🐍", name: "Python", level: "intermediário" },
    { icon: "🐘", name: "PostgreSQL", level: "avançado" },
    { icon: "🍃", name: "MongoDB", level: "intermediário" }
  ],
  tools: [
    { icon: "🐳", name: "Docker", level: "intermediário" },
    { icon: "☁️", name: "AWS", level: "básico" },
    { icon: "🔧", name: "Git", level: "avançado" },
    { icon: "▶️", name: "CI/CD", level: "intermediário" }
  ]
};
