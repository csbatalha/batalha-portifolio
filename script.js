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
    "home.sub_post": ", focado em engenharia de software e dados.",
    "bio.eyebrow": "sobre-mim",
    "bio.who_title": "Quem sou?",
    "bio.who_text": "Estudante de tecnologia apaixonado por transformar ideias em produtos digitais funcionais, acessíveis e bem construídos. Gosto de entender a raiz do problema antes de escrever a primeira linha de código, com foco em construir uma sólida carreira nas áreas de Engenharia de Software e Engenharia de Dados.",
    "bio.char_title": "Características",
    "bio.char_text": "Curioso, organizado e direto ao ponto. Prefiro soluções simples que funcionam a soluções complexas que impressionam. Trabalho bem em equipe e gosto de dar e receber feedback.",
    "bio.goals_title": "Objetivos e Sonhos",
    "bio.goals_text": "Quero atuar em projetos que unam bom design e engenharia sólida, crescer na área de tecnologia com foco em Engenharia de Software e de Dados, e, no futuro, liderar times técnicos mantendo a mesma curiosidade que tenho hoje.",
    "bio.experience_title": "Experiência",
    "bio.experience_text": "Aprendiz em Análise de Dados — PwC Brasil (Time de Resource Management / RM) Atuação diária voltada ao ecossistema de dados e suporte estratégico para a gestão de recursos. Responsável pela criação, manutenção e atualização diária de dashboards gerenciais. Trabalho ativamente na manipulação de dados utilizando SQL e Python, aplicando conceitos de ETL, Engenharia de Dados e processamento em plataformas como Databricks para transformar grandes volumes de informações em insights acionáveis e otimizar processos internos.",
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
    "home.sub_post": ", focused on software and data engineering.",
    "bio.eyebrow": "about-me",
    "bio.who_title": "Who am I?",
    "bio.who_text": "Technology student passionate about turning ideas into functional, accessible, and well-crafted digital products. I enjoy understanding the root of the problem before writing the first line of code, focusing on building a solid career in Software Engineering and Data Engineering.",
    "bio.char_title": "Traits",
    "bio.char_text": "Curious, organized and to the point. I'd rather ship a simple solution that works than a complex one that just impresses. I work well in teams and value honest feedback.",
    "bio.goals_title": "Goals & Dreams",
    "bio.goals_text": "I want to work on projects that combine good design and solid engineering, grow in tech with a focus on Software and Data Engineering, and eventually lead technical teams with the same curiosity I have today.",
    "bio.experience_title": "Experience",
    "bio.experience_text": "Data Analytics Apprentice — PwC Brasil (Resource Management / RM Team)Daily engagement in the data ecosystem and strategic support for resource management. Responsible for creating, maintaining, and daily updating of management dashboards. Actively working on data manipulation using SQL and Python, applying ETL concepts, Data Engineering pipelines, and processing within platforms like Databricks to transform large volumes of information into actionable insights and optimize internal processes.",
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

const EXPERIENCE_TIMELINE = {
  pt: [
    { year: "Atual", icon: "🚀", title: "Projetos Acadêmicos & Pessoais", desc: "Desenvolvimento de aplicações web modernas, automações e estudos avançados em Engenharia de Software e Banco de Dados." }
  ],
  en: [
    { year: "Present", icon: "🚀", title: "Academic & Personal Projects", desc: "Building modern web applications, automations, and advanced studies in Software Engineering and Data Science." }
  ]
};

const STUDIES_TIMELINE = {
  pt: [
    { year: "2019", icon: "💻", title: "Primeiro contato com programação", desc: "Lógica de programação, estrutura de dados básica e robótica." },
    { year: "2023", icon: "🎓", title: "Primeira formatura na área da tecnologia pela Etec Adolpho Berezin", desc: "Técnico em desenvolvimento de sistemas." },
    { year: "2025", icon: "</>", title: "Início da faculdade", desc: "Análise e Desenvolvimento de Sistemas - IFSP Cubatão." },
    { year: "2025", icon: "📊", title: "PwC Brasil", desc: "Aprendiz em Análise de Dados." }
  ],
  en: [
    { year: "2019", icon: "💻", title: "First contact with programming", desc: "Basic programming logic, data structures and robotics." },
    { year: "2023", icon: "🎓", title: "First graduation in tech", desc: "Technical degree in systems development." },
    { year: "2025", icon: "</>", title: "Started university", desc: "Analysis and Development of Systems - IFSP Cubatão." },
    { year: "2025", icon: "📊", title: "PwC Brasil", desc: "Apprentice in Data Analysis." }
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
    { icon: "☕", name: "Java", level: "intermediário" },
    { icon: "🪟", name: "C# / C++", level: "intermediário" },
    { icon: "🐍", name: "Python", level: "intermediário" },
    { icon: "🗄️", name: "SQL", level: "avançado" }
  ],
  tools: [
    { icon: "📊", name: "Databricks", level: "intermediário" },
    { icon: "📈", name: "Power BI", level: "intermediário" },
    { icon: "🐳", name: "Docker", level: "intermediário" },
    { icon: "🔧", name: "Git", level: "avançado" }
  ]
};  

(function () {
  "use strict";

  const app = document.getElementById("app");
  const navLinks = document.querySelectorAll(".nav-link");
  const themeToggle = document.getElementById("themeToggle");
  const langToggle = document.getElementById("langToggle");
  const langLabel = langToggle.querySelector("[data-i18n-lang]");

  let state = {
    theme: "light",
    lang: "pt"
  };

  const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com/csbatalha", icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .32.2.67.8.56A10.53 10.53 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/></svg>` },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gbatalha8", icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>` },
    { label: "Instagram", href: "https://instagram.com/gabriel.batalhaa", icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.4" cy="6.6" r="1"/></svg>` },
    { label: "Email", href: "mailto:gabriel.batalhaa@gmail.com", icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6 9 7 9-7"/></svg>` }
  ];

  function t(key) { 
    return (I18N[state.lang] && I18N[state.lang][key]) ? I18N[state.lang][key] : key; 
  }

  /* ---------------- RENDERERS ---------------- */

  function renderHome() {
    const socials = SOCIAL_LINKS.map(
      s => `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">${s.icon}</a>`
    ).join("");

    return `
      <section class="hero">
        <div class="hero-kicker"><span class="status-dot"></span>${t("home.status")}</div>
        <h1 class="hero-title">${t("home.title")}<span class="cursor">&nbsp;</span></h1>
        <p class="hero-sub">${t("home.sub_pre")}<strong>${t("home.name")}</strong>${t("home.sub_post")}</p>
        <div class="social-bar">${socials}</div>
      </section>`;
  }

 function renderBio() {
    const timeline = (STUDIES_TIMELINE[state.lang] || []).map(item => `
      <div class="timeline-item">
        <div class="timeline-icon">${item.icon}</div>
        <div>
          <div class="timeline-year">${item.year}</div>
          <div class="timeline-title">${item.title}</div>
          <div class="timeline-desc">${item.desc}</div>
        </div>
      </div>`).join("");

    return `
      <div class="page">
        <div class="eyebrow">${t("bio.eyebrow")}</div>
        <section>
          <h2 class="section-title">${t("bio.who_title")}</h2>
          <p class="body-text">${t("bio.who_text")}</p>
        </section>
        <section>
          <h2 class="section-title">${t("bio.char_title")}</h2>
          <p class="body-text">${t("bio.char_text")}</p>
        </section>
        <section>
          <h2 class="section-title">${t("bio.goals_title")}</h2>
          <p class="body-text">${t("bio.goals_text")}</p>
        </section>
        <section>
          <h2 class="section-title">${t("bio.experience_title")}</h2>
          <p class="body-text">${t("bio.experience_text")}</p>
        </section>
        <section>
          <h2 class="section-title">${t("bio.studies_title")}</h2>
          <div class="timeline">${timeline}</div>
        </section>
      </div>`;
  }
  function renderStackGroup(label, items) {
    const chips = (items || []).map(s => `
      <div class="stack-chip">
        <div class="stack-chip-icon">${s.icon}</div>
        <div class="stack-chip-name">${s.name}</div>
        <div class="stack-chip-level">${s.level}</div>
      </div>`).join("");
    return `
      <div>
        <div class="stack-group-label">${label}</div>
        <div class="stack-grid">${chips}</div>
      </div>`;
  }

  function renderStacks() {
    return `
      <div class="page">
        <div class="eyebrow">${t("stacks.eyebrow")}</div>
        <h2 class="section-title">${t("stacks.title")}</h2>
        <div class="stack-groups">
          ${renderStackGroup(t("stacks.frontend"), STACKS.frontend)}
          ${renderStackGroup(t("stacks.backend"), STACKS.backend)}
          ${renderStackGroup(t("stacks.tools"), STACKS.tools)}
        </div>
      </div>`;
  }

  function renderProjetos() {
    const projList = (typeof PROJECTS !== "undefined") ? PROJECTS : [];

    if (!projList || projList.length === 0) {
      return `
        <div class="page">
          <div class="eyebrow">${t("projetos.eyebrow")}</div>
          <h2 class="section-title">${t("projetos.title")}</h2>
          <div class="empty-state">${t("projetos.empty")}</div>
        </div>`;
    }

    const cards = projList.map(p => {
      const tags = (p.tags || []).map(tag => `<span class="project-tag">${tag}</span>`).join("");
      const links = [];
      if (p.links && p.links.demo) links.push(`<a href="${p.links.demo}" target="_blank" rel="noopener">${t("projetos.demo")} ↗</a>`);
      if (p.links && p.links.repo) links.push(`<a href="${p.links.repo}" target="_blank" rel="noopener">${t("projetos.repo")} ↗</a>`);

      return `
        <article class="project-card">
          <div class="project-head">
            <div class="project-name">${p.name}</div>
            <div class="project-year">${p.year || ""}</div>
          </div>
          <p class="project-summary">${p.summary || ""}</p>
          <div class="project-tags">${tags}</div>
          <div class="project-links">${links.join("")}</div>
        </article>`;
    }).join("");

    return `
      <div class="page">
        <div class="eyebrow">${t("projetos.eyebrow")}</div>
        <h2 class="section-title">${t("projetos.title")}</h2>
        <div class="project-grid">${cards}</div>
      </div>`;
  }

  const ROUTES = {
    home: renderHome,
    bio: renderBio,
    stacks: renderStacks,
    projetos: renderProjetos
  };

  /* ---------------- ROUTER ---------------- */

  function currentRoute() {
    const hash = window.location.hash.replace("#", "");
    return ROUTES[hash] ? hash : "home";
  }

  function render() {
    const route = currentRoute();
    app.innerHTML = ROUTES[route]();

    navLinks.forEach(link => {
      link.classList.toggle("active", link.dataset.route === route);
      link.textContent = t(`nav.${link.dataset.route}`);
    });

    document.title = state.lang === "pt"
      ? "Gabriel Batalha — Estudante de Tecnologia"
      : "Gabriel Batalha — Tech Student";
  }

  window.addEventListener("hashchange", render);

  /* ---------------- TOGGLES ---------------- */

  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", state.theme);
  });

  langToggle.addEventListener("click", () => {
    state.lang = state.lang === "pt" ? "en" : "pt";
    langLabel.textContent = state.lang.toUpperCase();
    render();
  });

  /* ---------------- INIT ---------------- */

  if (!window.location.hash) window.location.hash = "#home";
  render();
})();