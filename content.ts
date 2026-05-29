// ─────────────────────────────────────────────────────────────────────────────
// David Muehlfeld — site content
// ─────────────────────────────────────────────────────────────────────────────

export const meta = {
  title: "David Muehlfeld — Design Leader",
  description:
    "Lead Product Designer with 20+ years experience driving business impact through Data, Research, and UX.",
};

export const nav = {
  name: "David Muehlfeld",
  links: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
  ],
};

export const home = {
  hero: {
    label: "Design Leader",
    headline: "Hello,\nI am David.",
    subheadline:
      "Design Leader with 20+ years driving business impact through Data, Research, and UX.",
    cta: {
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/davidmuehlfeld/",
    },
  },
  about: {
    label: "About",
    paragraphs: [
      "Lead Product Designer with 20+ years experience in product design and brand design for high-profile companies.",
      "He runs cross-functional initiatives with design teams, cares deeply about user research, and shows business impact with data.",
      "Currently Head of Design at Shine / Ageras.",
    ],
  },
  skills: {
    label: "Expertise",
    items: ["Product Design", "Brand Design", "Growth Hacking", "Data Analysis"],
  },
  featuredWork: {
    label: "Selected Work",
    items: [
      {
        index: "01",
        title: "Scaling AI-powered Expenses",
        company: "SumUp",
        description:
          "AI-powered Expense Management from scratch — 1K to 12K MAUs through automation.",
        href: "/work",
      },
      {
        index: "02",
        title: "Monetizing Invoices",
        company: "SumUp",
        description:
          "Paywall conversion boosted to 10.6%; E-Invoices Germany launch, mobile billing.",
        href: "/work",
      },
      {
        index: "03",
        title: "Point of Sale Item Catalog",
        company: "SumUp",
        description: "Items MAUs +120%, TPV +159% nine months post-launch.",
        href: "/work",
      },
    ],
  },
  news: {
    label: "Recent",
    items: [
      {
        marker: "Now",
        text: "Head of Design at Shine / Ageras — leading design across accounting, invoicing, and banking in France, Germany, Denmark, Netherlands.",
      },
      {
        marker: "Speaker",
        text: "Hatch Conference 2026 — UX & design experts, Berlin.",
      },
      {
        marker: "Writing",
        text: "Articles on Product Design, UX, Agile Leadership on Medium.",
        href: "https://medium.com/@davidmuehlfeld",
      },
      {
        marker: "Building",
        text: "Mobile-first unified banking, invoicing & accounting experience at Shine.",
      },
    ],
  },
};

export const work = {
  headline: "Work",
  subheadline: "Selected case studies from 20+ years of product and brand design.",
  caseStudies: [
    {
      index: "01",
      title: "Scaling AI-powered Expenses",
      company: "SumUp",
      tags: ["Product Design", "AI"],
      summary:
        "Developed an AI-powered Expense Management tool from scratch. Automation features — creating expenses from Business Account transactions, converting receipts — drove rapid adoption, growing from 1K to 12K MAUs.",
      href: "#",
    },
    {
      index: "02",
      title: "Monetizing Invoices with a Better Purchase Flow",
      company: "SumUp",
      tags: ["Product Design", "Growth"],
      summary:
        "Improved visibility of paid features across three teams building Invoices into the SumUp Ecosystem. Boosted paywall conversion to 10.6%. Launched Billing on Mobile and E-Invoices in Germany, leading to further subscription growth.",
      href: "#",
    },
    {
      index: "03",
      title: "Point of Sale Item Catalog",
      company: "SumUp",
      tags: ["Product Design", "Data"],
      summary:
        "Redesigned how SumUp merchants manage items in their Point of Sale. Nine months post-release: Items MAUs +120%, TPV +159%. Unified three separate item catalogs into one.",
      href: "#",
    },
    {
      index: "04",
      title: "Digital Branding — Health & Fashion",
      company: "Freelance",
      tags: ["Brand Design"],
      summary:
        "Brand identity and digital design for health and fashion clients. Visual systems built for digital-first contexts.",
      href: "#",
    },
    {
      index: "05",
      title: "Design × AI Workflow Tools",
      company: "Personal",
      tags: ["AI", "Tooling"],
      summary:
        "Explored and integrated AI tools into design workflows: Ugic (UI generation in Figma), Lovable (interactive prototypes in code), HTML.to.Design (any URL to editable Figma layers), Feedback Wizard AI (useful feedback inside Figma).",
      href: "#",
    },
  ],
};

export const blog = {
  headline: "Blog",
  subheadline: "Thoughts on product design, UX, and leadership. Published on Medium.",
  profileHref: "https://medium.com/@davidmuehlfeld",
  fallbackArticles: [
    {
      index: "01",
      title: "Why Product Design & Support Make a Dream Team",
      tag: "Collaboration",
      description: "On the underrated connection between design and support functions.",
      href: "https://medium.com/@davidmuehlfeld",
      image: null,
    },
    {
      index: "02",
      title: "10 Nudging Examples for Consideration, Purchase & Usage",
      tag: "Behavioral Design",
      description: "Behavioral design patterns applied to real product moments.",
      href: "https://medium.com/@davidmuehlfeld",
      image: null,
    },
    {
      index: "03",
      title: "Improving a Camera UI in 5 Days — Google Design Sprint",
      tag: "Case Study",
      description: "A rapid design sprint applied to camera UX challenges.",
      href: "https://medium.com/@davidmuehlfeld",
      image: null,
    },
    {
      index: "04",
      title: "Assistive Technology for the 15% of Us",
      tag: "Accessibility",
      description: "Designing for the users we most often forget to consider.",
      href: "https://medium.com/@davidmuehlfeld",
      image: null,
    },
  ],
};

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/davidmuehlfeld/",
  },
  {
    label: "Medium",
    href: "https://medium.com/@davidmuehlfeld",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/davidmuehlfeld",
  },
  {
    label: "Email",
    href: "mailto:davidmuehlfeld@gmail.com",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Legacy exports — kept so existing component files continue to compile
// ─────────────────────────────────────────────────────────────────────────────

export const hero = {
  name: "David Muehlfeld",
  role: "Design Leader",
  location: "Berlin, Germany",
  headline:
    "Design Leader with 20+ years driving business impact through Data, Research, and UX.",
  ctaPrimary: { label: "See my work", href: "/work" },
  ctaSecondary: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/davidmuehlfeld/",
  },
};

export const about = {
  heading: "About",
  paragraphs: [
    "Lead Product Designer with 20+ years experience in product design and brand design for high-profile companies.",
    "Runs cross-functional initiatives with design teams, cares deeply about user research, and shows business impact with data.",
    "Currently Head of Design at Shine / Ageras.",
  ],
};

export const experience = {
  heading: "Experience",
  roles: [
    {
      title: "Head of Design",
      company: "Shine / Ageras",
      period: "2024 — Present",
      summary:
        "Leading design across accounting, invoicing, and banking in France, Germany, Denmark, Netherlands.",
    },
    {
      title: "Lead Product Designer",
      company: "SumUp",
      period: "2019 — 2024",
      summary:
        "Designed AI-powered Expense Management, Invoicing, and Point of Sale products.",
    },
  ],
};

export const projects = {
  heading: "Selected work",
  items: [
    {
      title: "Scaling AI-powered Expenses",
      year: "2023",
      summary:
        "AI-powered Expense Management from scratch — grew from 1K to 12K MAUs.",
      link: { label: "View case study", href: "/work" },
    },
    {
      title: "Monetizing Invoices",
      year: "2022",
      summary:
        "Paywall conversion boosted to 10.6%; E-Invoices Germany launch.",
      link: { label: "View case study", href: "/work" },
    },
    {
      title: "Point of Sale Item Catalog",
      year: "2021",
      summary: "Items MAUs +120%, TPV +159% nine months post-launch.",
      link: { label: "View case study", href: "/work" },
    },
  ],
};

export const skills = {
  heading: "What I work with",
  groups: [
    {
      label: "Design",
      items: [
        "Product Design",
        "Brand Design",
        "Design Systems",
        "User Research",
        "Prototyping",
      ],
    },
    { label: "Growth", items: ["Growth Hacking", "Data Analysis", "A/B Testing"] },
    {
      label: "Tools",
      items: ["Figma", "Framer", "Lovable", "Maze", "Linear"],
    },
  ],
};

export const testimonials = {
  heading: "What people say",
  quotes: [] as { text: string; author: string; role: string }[],
};

export const contact = {
  heading: "Get in touch",
  body: "Open to design leadership conversations, collaborations, and speaking opportunities.",
  email: "davidmuehlfeld@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/davidmuehlfeld/" },
    { label: "Medium", href: "https://medium.com/@davidmuehlfeld" },
    { label: "Behance", href: "https://www.behance.net/davidmuehlfeld" },
  ],
};
