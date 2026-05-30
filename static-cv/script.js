const siteData = {
  seo: {
    title: "Catur Prasetiyo Gama | AI Engineer & SaaS Builder",
    description:
      "Founder-grade landing page for Catur Prasetiyo Gama, positioned as an AI engineer, product designer, and SaaS builder crafting scalable digital products and premium web experiences.",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    announcement: "Personal brand meets product-grade SaaS execution",
    name: "Catur Prasetiyo Gama",
    title: "AI Engineer & SaaS Builder",
    tagline:
      "Building AI-native products, scalable web systems, and premium digital experiences with startup-level rigor.",
    description:
      "I architect product experiences that feel sharp, fast, and commercially ready, combining design systems, AI workflows, and full-stack execution into a single product vision.",
    primaryCta: {
      label: "Build With Me",
      href: "#contact",
    },
    secondaryCta: {
      label: "Explore Portfolio",
      href: "#portfolio",
    },
    image: "./public/images/profile.png",
    floatingCard: {
      eyebrow: "Now designing",
      title: "Future-facing systems for modern builders",
      description:
        "From product strategy to interaction polish, every layer is shaped for clarity, speed, and scale.",
    },
  },
  about: {
    eyebrow: "About",
    title: "Product thinking, engineering depth, and design precision in one workflow.",
    shortBio:
      "I design and build modern digital products powered by AI, automation, and scalable web technologies.",
    longBio:
      "My focus is building systems that are not only functional, but also commercially sharp, scalable, and visually compelling. I approach every product like a platform: clear positioning, resilient architecture, and interfaces that feel premium from the first scroll.",
  },
  sectionContent: {
    education: {
      eyebrow: "Education",
      title: "A technical foundation shaped by software engineering and AI systems.",
      description:
        "Formal learning grounds the systems thinking behind my product and platform work.",
    },
    skills: {
      eyebrow: "Capabilities",
      title: "A multidisciplinary stack built for product velocity.",
      description:
        "I operate across engineering, AI, and design to move products from concept to launch with fewer handoff gaps.",
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Selected systems and product experiences.",
      description:
        "The portfolio is structured around digital products, interfaces, and AI systems designed for usability, scale, and business clarity.",
      featuredLabel: "Featured SaaS Product",
      impactLabel: "Impact",
    },
    experience: {
      eyebrow: "Experience",
      title: "Independent product execution with a system-builder mindset.",
      description:
        "My work spans product design, SaaS development, and AI-driven systems focused on outcome-oriented delivery.",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Signals of trust from product collaboration.",
      description:
        "Short notes that reflect clarity, ownership, and the ability to turn complex ideas into polished product experiences.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something that looks premium and performs like a real product.",
      description:
        "If you need a product builder who can think in systems, design for conversion, and ship with modern tooling, I'm ready to collaborate.",
      availability: "Open to product collaborations, SaaS design, and AI system builds.",
      responseLabel: "Typical response",
      responseValue: "Within 24 hours",
      locationLabel: "Based in",
      locationValue: "Indonesia",
      socialLinkLabel: "Visit",
      primaryCta: {
        label: "Start a Conversation",
        href: "mailto:caturprasetiyogama17@gmail.com",
      },
    },
  },
  stats: [
    {
      value: "AI x Product",
      label: "Integrated delivery",
      detail: "Engineering, automation, interface strategy, and launch execution.",
    },
    {
      value: "System-first",
      label: "Architecture mindset",
      detail: "Designed to scale beyond one-off builds into repeatable products.",
    },
    {
      value: "Founder-ready",
      label: "Premium positioning",
      detail: "Startup-grade polish built around clarity, speed, and trust.",
    },
  ],
  skills: [
    {
      title: "Development",
      description: "Full-stack product implementation with performance-conscious frontend delivery.",
      items: [
        "Next.js App Router",
        "TypeScript",
        "Tailwind CSS",
        "Component Architecture",
        "Responsive UI Systems",
        "API Integration",
      ],
    },
    {
      title: "AI Systems",
      description: "Practical AI workflows designed for automation, usability, and repeatability.",
      items: [
        "Prompt Systems",
        "Workflow Automation",
        "AI Product Strategy",
        "LLM Integrations",
        "Content Pipelines",
        "Human-in-the-loop Flows",
      ],
    },
    {
      title: "Design",
      description: "Interface direction that balances premium aesthetics with product clarity.",
      items: [
        "Landing Page Architecture",
        "Design Systems",
        "Visual Hierarchy",
        "Glassmorphism",
        "Interaction Design",
        "Conversion-focused UX",
      ],
    },
  ],
  education: [
    {
      year: "2023 - Present",
      degree: "Bachelor of Informatics Engineering",
      school: "Syekh Nurjati State Islamic University Cirebon",
      description:
        "Focused on software engineering, artificial intelligence, and system design with a strong emphasis on applied digital product development.",
      highlights: [
        "Software engineering and system design foundations",
        "AI-oriented technical exploration",
        "Product-minded problem solving for digital platforms",
      ],
    },
  ],
  projects: [
    {
      title: "Virtual Lab SaaS Platform",
      category: "Interactive SaaS Infrastructure",
      description:
        "A scalable web-based virtual laboratory platform built to simulate real-world experiments through interactive digital environments. The product is positioned for remote experimentation, concept visualization, and accessible science learning at scale.",
      tech: ["Next.js", "TypeScript", "Simulation UI", "Interactive Systems", "Scalable Frontend Architecture"],
      impact:
        "Transforms laboratory access into a remote-first digital experience, making experimentation more accessible while reinforcing product scalability and system design maturity.",
      highlights: [
        "Simulates practical experiments through immersive browser workflows",
        "Supports remote usage without sacrificing conceptual clarity",
        "Frames laboratory delivery as a scalable digital product, not a static academic demo",
      ],
      links: [
        { label: "Live Demo V5", href: "https://uregamine.github.io/virtual-lab-5.0/index.html" },
        { label: "Demo Archive", href: "https://uregamine.github.io/virtual-lab-4.0/index.html" },
      ],
      featured: true,
    },
    {
      title: "AI Workflow Orchestrator",
      category: "Automation Platform",
      description:
        "A structured AI workflow layer for coordinating prompt operations, content review, and repeatable publishing flows across modern digital products.",
      tech: ["Automation Logic", "LLM Workflows", "Dashboard UX", "System Design"],
      impact:
        "Creates operational clarity for AI delivery by turning fragmented manual processes into a repeatable system with cleaner decision paths.",
      highlights: [
        "Connects AI generation, review, and final delivery states",
        "Reduces friction between experimentation and production use",
        "Supports scalable operations as workflow complexity increases",
      ],
    },
    {
      title: "Founder Landing Systems",
      category: "Premium Product Marketing",
      description:
        "Conversion-focused landing experiences designed for founders, product builders, and SaaS launches that need premium positioning and startup-grade visual trust.",
      tech: ["Next.js", "Tailwind CSS", "Motion Design", "Design Systems"],
      impact:
        "Improves product perception by aligning interface quality, messaging hierarchy, and interaction polish into a more credible launch experience.",
      highlights: [
        "Built for premium first impressions and clear CTA flow",
        "Balances brand storytelling with product-specific clarity",
        "Combines visual authority with responsive execution",
      ],
    },
    {
      title: "Content Intelligence Pipeline",
      category: "AI Content System",
      description:
        "An AI-assisted content pipeline focused on turning scattered creative and operational workflows into a more reliable production engine.",
      tech: ["AI Tooling", "Automation", "Workflow Mapping", "Content Systems"],
      impact:
        "Strengthens consistency and production speed by shaping content work into a documented, reusable delivery framework.",
      highlights: [
        "Improves repeatability across content operations",
        "Connects creative output with process structure",
        "Translates automation into practical publishing momentum",
      ],
    },
  ],
  experience: [
    {
      role: "AI Developer & Product Builder",
      company: "Independent",
      period: "2024 - Present",
      description:
        "Developing AI-powered systems, SaaS platforms, and automation pipelines for digital products and brand-forward web experiences.",
      highlights: [
        "Building product concepts into usable digital systems",
        "Designing premium landing pages with conversion-focused structure",
        "Combining AI workflows with scalable frontend execution",
      ],
    },
  ],
  testimonials: [],
  social: [
    { label: "GitHub", href: "https://github.com/ureGamine", icon: "github" },
    { label: "Instagram", href: "https://instagram.com/ureGamine", icon: "instagram" },
    { label: "Twitter", href: "https://twitter.com/ureGamine", icon: "twitter" },
  ],
  footer: {
    statement: "AI engineer, product designer, and SaaS builder shaping polished digital systems.",
    identity: "Catur Prasetiyo Gama, 2388010022",
    copyright: `Copyright ${new Date().getFullYear()} Catur Prasetiyo Gama.`,
  },
};

const icons = {
  arrow:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.5a3 3 0 0 0-.8-2.1c2.6-.3 5.3-1.3 5.3-6A4.7 4.7 0 0 0 18.2 7a4.4 4.4 0 0 0-.1-3.2S17 3.5 15 5a10.2 10.2 0 0 0-6 0C7 3.5 5.9 3.8 5.9 3.8A4.4 4.4 0 0 0 5.8 7a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.7 5.7 5.3 6A3 3 0 0 0 9 18.5V22"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>',
  twitter:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 5.8c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.7-2.2 8.2 8.2 0 0 1-2.6 1 4 4 0 0 0-6.8 3.6A11.4 11.4 0 0 1 3.5 4.7a4 4 0 0 0 1.2 5.4 4 4 0 0 1-1.8-.5v.1A4 4 0 0 0 6 13.6a4 4 0 0 1-1.8.1A4 4 0 0 0 8 16.5a8 8 0 0 1-5 1.7A8.9 8.9 0 0 1 2 18.1a11.4 11.4 0 0 0 6.2 1.8c7.4 0 11.5-6.3 11.5-11.7v-.5A8.3 8.3 0 0 0 22 5.8z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  clock:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  map:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
};

const createSectionHeading = (eyebrow, title, description) => `
  <p>${eyebrow}</p>
  <h2>${title}</h2>
  <p>${description}</p>
`;

const createButton = (button, variant) => `
  <a class="button-link ${variant}" href="${button.href}">
    <span>${button.label}</span>
  </a>
`;

const createSocialPill = (item) => `
  <a class="social-pill" href="${item.href}" target="_blank" rel="noreferrer">
    ${icons[item.icon] || icons.arrow}
    <span>${item.label}</span>
    ${icons.arrow}
  </a>
`;

const createChip = (item) => `<span class="chip">${item}</span>`;

const createProjectLink = (item) => `
  <a class="project-link" href="${item.href}" target="_blank" rel="noreferrer">
    <span>${item.label}</span>
    ${icons.arrow}
  </a>
`;

function renderNavigation() {
  document.getElementById("site-nav").innerHTML = siteData.navigation
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");
}

function renderHero() {
  document.title = siteData.seo.title;
  document.getElementById("hero-announcement").textContent = siteData.hero.announcement;
  document.getElementById("hero-title").textContent = siteData.hero.title;
  document.getElementById("hero-name").textContent = siteData.hero.name;
  document.getElementById("hero-tagline").textContent = siteData.hero.tagline;
  document.getElementById("hero-description").textContent = siteData.hero.description;
  document.getElementById("hero-image").src = siteData.hero.image;
  document.getElementById("hero-image").alt = siteData.hero.name;
  document.getElementById("floating-eyebrow").textContent = siteData.hero.floatingCard.eyebrow;
  document.getElementById("floating-mini-kicker").textContent = siteData.hero.floatingCard.eyebrow;
  document.getElementById("floating-title").textContent = siteData.hero.floatingCard.title;
  document.getElementById("floating-description").textContent = siteData.hero.floatingCard.description;
  document.getElementById("hero-actions").innerHTML =
    createButton(siteData.hero.primaryCta, "button-primary") +
    createButton(siteData.hero.secondaryCta, "button-secondary");
  document.getElementById("hero-socials").innerHTML = siteData.social.map(createSocialPill).join("");
  document.getElementById("stats-grid").innerHTML = siteData.stats
    .map(
      (stat) => `
        <article class="glass-card stat-card reveal">
          <p class="stat-label">${stat.label}</p>
          <h3 class="stat-value">${stat.value}</h3>
          <p class="stat-copy">${stat.detail}</p>
        </article>
      `,
    )
    .join("");
}

function renderAbout() {
  document.getElementById("about-heading").innerHTML = createSectionHeading(
    siteData.about.eyebrow,
    siteData.about.title,
    siteData.about.shortBio,
  );

  document.getElementById("about-long").innerHTML = `
    <p class="about-long-copy">${siteData.about.longBio}</p>
  `;

  document.getElementById("about-stats").innerHTML = siteData.stats
    .map(
      (stat) => `
        <div class="about-metric">
          <h3 class="card-title">${stat.value}</h3>
          <p class="mini-kicker">${stat.label}</p>
          <p class="card-copy">${stat.detail}</p>
        </div>
      `,
    )
    .join("");
}

function renderEducation() {
  const section = siteData.sectionContent.education;
  document.getElementById("education-heading").innerHTML = createSectionHeading(
    section.eyebrow,
    section.title,
    section.description,
  );

  document.getElementById("education-grid").innerHTML = siteData.education
    .map(
      (item) => `
        <article class="stack-card reveal">
          <div class="stack-shell">
            <div class="stack-meta">
              <p class="timeline-tag">${item.year}</p>
              <div class="timeline-line"></div>
            </div>
            <div>
              <h3 class="stack-title">${item.degree}</h3>
              <p class="stack-org">${item.school}</p>
              <p class="stack-copy">${item.description}</p>
              <div class="chip-group">${item.highlights.map(createChip).join("")}</div>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSkills() {
  const section = siteData.sectionContent.skills;
  document.getElementById("skills-heading").innerHTML = createSectionHeading(
    section.eyebrow,
    section.title,
    section.description,
  );

  document.getElementById("skills-grid").innerHTML = siteData.skills
    .map(
      (skill) => `
        <article class="project-card skill-card reveal">
          <p class="card-label">${skill.title}</p>
          <h3 class="card-title">${skill.title}</h3>
          <p class="skill-copy">${skill.description}</p>
          <div class="chip-group">${skill.items.map(createChip).join("")}</div>
        </article>
      `,
    )
    .join("");
}

function renderPortfolio() {
  const section = siteData.sectionContent.portfolio;
  document.getElementById("portfolio-heading").innerHTML = createSectionHeading(
    section.eyebrow,
    section.title,
    section.description,
  );

  const featured = siteData.projects.find((project) => project.featured);
  const others = siteData.projects.filter((project) => !project.featured);

  if (featured) {
    document.getElementById("featured-project").innerHTML = `
      <article class="glass-card featured-project reveal">
        <div class="featured-shell">
          <div>
            <div class="featured-badge">${section.featuredLabel}</div>
            <p class="featured-meta">${featured.category}</p>
            <h3 class="featured-title">${featured.title}</h3>
            <p class="featured-copy">${featured.description}</p>
            <div class="chip-group">${featured.tech.map(createChip).join("")}</div>
          </div>
          <div class="featured-side">
            <div class="detail-card">
              <h3>${section.impactLabel}</h3>
              <p>${featured.impact}</p>
            </div>
            <div class="detail-card">
              <h3>Highlights</h3>
              <ul class="detail-list">${featured.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
            </div>
            <div class="hero-actions">${(featured.links || []).map(createProjectLink).join("")}</div>
          </div>
        </div>
      </article>
    `;
  }

  document.getElementById("portfolio-grid").innerHTML = others
    .map(
      (project) => `
        <article class="project-card reveal">
          <p class="project-label">${project.category}</p>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-copy">${project.description}</p>
          <div class="chip-group">${project.tech.map(createChip).join("")}</div>
          <ul class="detail-list">${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
          <div class="project-impact">${project.impact}</div>
        </article>
      `,
    )
    .join("");
}

function renderExperience() {
  const section = siteData.sectionContent.experience;
  document.getElementById("experience-heading").innerHTML = createSectionHeading(
    section.eyebrow,
    section.title,
    section.description,
  );

  document.getElementById("experience-grid").innerHTML = siteData.experience
    .map(
      (item) => `
        <article class="stack-card reveal">
          <div class="stack-shell">
            <div class="stack-meta">
              <p class="timeline-tag">${item.period}</p>
              <h3 class="stack-title">${item.role}</h3>
              <p class="stack-org">${item.company}</p>
            </div>
            <div>
              <p class="stack-copy">${item.description}</p>
              <ul class="detail-list">${item.highlights.map((point) => `<li>${point}</li>`).join("")}</ul>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderTestimonials() {
  if (!siteData.testimonials.length) return;

  const section = siteData.sectionContent.testimonials;
  document.getElementById("testimonials-section").classList.remove("hidden");
  document.getElementById("testimonials-heading").innerHTML = createSectionHeading(
    section.eyebrow,
    section.title,
    section.description,
  );
  document.getElementById("testimonials-grid").innerHTML = siteData.testimonials
    .map(
      (item) => `
        <article class="project-card testimonial-card reveal">
          <p class="project-copy">${item.quote}</p>
          <h3 class="project-title">${item.name}</h3>
          <p class="project-label">${item.role}</p>
        </article>
      `,
    )
    .join("");
}

function renderContact() {
  const section = siteData.sectionContent.contact;
  document.getElementById("contact-heading").innerHTML = createSectionHeading(
    section.eyebrow,
    section.title,
    section.description,
  );

  document.getElementById("contact-card").innerHTML = `
    <div class="contact-card-main">
      <div class="contact-head">
        <div class="icon-badge">${icons.mail}</div>
        <div>
          <p class="mini-kicker">${siteData.hero.title}</p>
          <a class="contact-email" href="${section.primaryCta.href}">
            ${section.primaryCta.href.replace("mailto:", "")}
          </a>
          <p class="contact-copy">${section.availability}</p>
        </div>
      </div>
      <div class="info-grid">
        <div class="info-card">
          <p class="info-label">${icons.clock}<span>${section.responseLabel}</span></p>
          <p class="card-copy">${section.responseValue}</p>
        </div>
        <div class="info-card">
          <p class="info-label">${icons.map}<span>${section.locationLabel}</span></p>
          <p class="card-copy">${section.locationValue}</p>
        </div>
      </div>
      <div class="contact-button-wrap">${createButton(section.primaryCta, "button-primary")}</div>
    </div>
  `;

  document.getElementById("contact-links").innerHTML = `
    <div class="contact-links-shell">
      ${siteData.social
        .map(
          (item) => `
            <a class="contact-link" href="${item.href}" target="_blank" rel="noreferrer">
              <div class="contact-link-shell">
                <div class="contact-link-icon">${icons[item.icon] || icons.arrow}</div>
                <div>
                  <p class="contact-link-title">${item.label}</p>
                  <p class="contact-link-subtitle">${item.href.replace("https://", "")}</p>
                </div>
              </div>
              <p class="contact-link-cta">${section.socialLinkLabel}</p>
            </a>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderFooter() {
  document.getElementById("footer-statement").textContent = siteData.footer.statement;
  document.getElementById("footer-identity").textContent = siteData.footer.identity;
  document.getElementById("footer-copyright").textContent = siteData.footer.copyright;
  document.getElementById("footer-links").innerHTML = siteData.social
    .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`)
    .join("");
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    },
  );

  document
    .querySelectorAll(".reveal, .section-heading, .glass-card, .stack-card, .project-card, .hero-copy, .hero-visual")
    .forEach((element) => observer.observe(element));
}

function initParallax() {
  const heroVisual = document.getElementById("hero-visual");
  const heroCard = heroVisual ? heroVisual.querySelector(".hero-card") : null;

  if (!heroVisual || !heroCard) return;

  heroVisual.addEventListener("mousemove", (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
    heroCard.style.transform = `perspective(1200px) rotateY(${offsetX * 8}deg) rotateX(${offsetY * -8}deg) translateY(-4px)`;
  });

  heroVisual.addEventListener("mouseleave", () => {
    heroCard.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
  });
}

function boot() {
  renderNavigation();
  renderHero();
  renderAbout();
  renderEducation();
  renderSkills();
  renderPortfolio();
  renderExperience();
  renderTestimonials();
  renderContact();
  renderFooter();
  initReveal();
  initParallax();
}

boot();
