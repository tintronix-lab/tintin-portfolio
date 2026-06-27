export const profile = {
  name: "Tintin Razavian",
  roles: [
    "Senior Product Manager",
    "Cloud Connectivity",
    "AI Strategy",
    "Digital Transformation",
  ],
  intro:
    "I build digital products, lead global engineering initiatives, and transform ideas into scalable solutions across AI, IoT, Cloud Connectivity, and Product Strategy.",
  location: "Global · Remote-first",
  email: "tintronix@gmail.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/tintronix-lab",
};

export const stats = [
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Countries Worked In", value: 14, suffix: "" },
  { label: "Products Delivered", value: 40, suffix: "+" },
  { label: "Teams Led", value: 9, suffix: "" },
];

export const focusAreas = [
  {
    title: "Product Management",
    description:
      "End-to-end ownership from discovery to launch — roadmaps, prioritization, and measurable outcomes.",
  },
  {
    title: "Cloud Connectivity",
    description:
      "Architecting global connectivity platforms spanning eSIM, IoT, and carrier-grade networks.",
  },
  {
    title: "AI Strategy",
    description:
      "Translating frontier AI into pragmatic, revenue-generating product capabilities.",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernizing operations and platforms for enterprises navigating change at scale.",
  },
  {
    title: "International Consulting",
    description:
      "Advising cross-border teams on go-to-market, org design, and technical strategy.",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    role: "Senior Product Manager",
    company: "Global Connectivity Platform",
    period: "2021 — Present",
    location: "Remote · EU/US",
    summary:
      "Lead product for a cloud connectivity suite serving enterprise IoT and consumer eSIM customers across 14 markets.",
    achievements: [
      "Grew connected-device base 3.4x while reducing churn by 22% through lifecycle redesign.",
      "Shipped an AI-assisted diagnostics layer cutting support resolution time by 41%.",
      "Unified three legacy platforms into a single API-first product, retiring $1.2M of annual tech debt.",
    ],
    technologies: ["IoT", "eSIM", "AI/ML", "REST APIs", "Roadmapping", "OKRs"],
  },
  {
    role: "Technology Consultant",
    company: "Independent / Boutique Advisory",
    period: "2018 — 2021",
    location: "Cross-border",
    summary:
      "Advised scale-ups and enterprises on digital transformation, platform strategy, and AI adoption.",
    achievements: [
      "Delivered 18 engagements across fintech, mobility, and telecom verticals.",
      "Designed a data platform blueprint adopted as the client's multi-year north star.",
      "Stood up agile operating models for two 50+ engineer organizations.",
    ],
    technologies: ["Strategy", "Cloud", "Data Platforms", "Agile", "Discovery"],
  },
  {
    role: "Product Lead",
    company: "Enterprise SaaS",
    period: "2015 — 2018",
    location: "EU",
    summary:
      "Owned a B2B SaaS product line from early traction through enterprise scale.",
    achievements: [
      "Launched a self-serve onboarding flow that lifted activation by 58%.",
      "Built and led a cross-functional squad of 9 across design, engineering, and data.",
      "Introduced continuous discovery, doubling validated-experiment throughput.",
    ],
    technologies: ["SaaS", "UX", "Analytics", "Experimentation", "Leadership"],
  },
];

export const skills = [
  { name: "Product Management", level: 95 },
  { name: "AI", level: 88 },
  { name: "Cloud", level: 86 },
  { name: "IoT", level: 84 },
  { name: "Strategy", level: 92 },
  { name: "Leadership", level: 90 },
  { name: "Agile", level: 89 },
  { name: "UX", level: 82 },
  { name: "Business Development", level: 85 },
];

export const radarSkills = [
  { axis: "Product", value: 0.95 },
  { axis: "AI", value: 0.88 },
  { axis: "Cloud", value: 0.86 },
  { axis: "Strategy", value: 0.92 },
  { axis: "Leadership", value: 0.9 },
  { axis: "UX", value: 0.82 },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  outcome: string;
  link?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Unified Connectivity API",
    category: "Cloud",
    description:
      "An API-first platform consolidating eSIM, IoT, and billing into a single developer experience.",
    technologies: ["APIs", "eSIM", "Billing", "DX"],
    outcome: "Retired 3 legacy systems · -38% integration time",
    link: "#",
    accent: "from-sky-200 to-indigo-200",
  },
  {
    title: "AI Support Copilot",
    category: "AI",
    description:
      "LLM-powered diagnostics that triage and resolve connectivity issues before they reach an agent.",
    technologies: ["LLM", "RAG", "Support", "Automation"],
    outcome: "-41% resolution time · +17 NPS",
    link: "#",
    accent: "from-violet-200 to-fuchsia-200",
  },
  {
    title: "Global Activation Funnel",
    category: "Product",
    description:
      "Reimagined self-serve onboarding across 14 markets with localized, adaptive flows.",
    technologies: ["Onboarding", "Experimentation", "i18n"],
    outcome: "+58% activation · 14 markets",
    link: "#",
    accent: "from-emerald-200 to-teal-200",
  },
  {
    title: "Fleet IoT Dashboard",
    category: "IoT",
    description:
      "Real-time visibility into connected device fleets with predictive health scoring.",
    technologies: ["IoT", "Realtime", "Analytics"],
    outcome: "Monitors 1.2M devices",
    link: "#",
    accent: "from-amber-200 to-orange-200",
  },
  {
    title: "Transformation Playbook",
    category: "Strategy",
    description:
      "A reusable operating model and discovery framework adopted across consulting engagements.",
    technologies: ["Strategy", "Agile", "Discovery"],
    outcome: "Adopted by 6 organizations",
    link: "#",
    accent: "from-rose-200 to-pink-200",
  },
  {
    title: "Data Platform Blueprint",
    category: "Cloud",
    description:
      "A north-star architecture unifying analytics, governance, and ML enablement.",
    technologies: ["Data", "Governance", "ML"],
    outcome: "Multi-year client roadmap",
    link: "#",
    accent: "from-cyan-200 to-blue-200",
  },
];

export const projectCategories = [
  "All",
  "Product",
  "AI",
  "Cloud",
  "IoT",
  "Strategy",
];

export const certifications = [
  { title: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", year: "2022" },
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2021" },
  { title: "AI for Product Managers", issuer: "Professional Program", year: "2023" },
  { title: "SAFe Agilist", issuer: "Scaled Agile", year: "2020" },
  { title: "Pragmatic Product Management", issuer: "Pragmatic Institute", year: "2019" },
];

export const education = [
  {
    degree: "M.Sc. — Technology & Innovation Management",
    school: "Graduate School of Management",
    year: "2012 — 2014",
    detail: "Focus on product strategy, platforms, and emerging technology.",
  },
  {
    degree: "B.Sc. — Computer / Information Engineering",
    school: "University of Engineering",
    year: "2008 — 2012",
    detail: "Foundations in software, networks, and systems design.",
  },
];

export const testimonials = [
  {
    quote:
      "Tintin pairs rare product intuition with deep technical fluency. He turned an ambiguous, multi-region mandate into a crisp roadmap the whole org rallied behind.",
    name: "VP of Engineering",
    company: "Connectivity Platform",
  },
  {
    quote:
      "One of the few leaders who can move seamlessly from boardroom strategy to API design reviews. Our transformation simply would not have shipped without him.",
    name: "Chief Product Officer",
    company: "Enterprise SaaS",
  },
  {
    quote:
      "He brought clarity, calm, and momentum to a complex AI initiative. The team delivered ahead of schedule and with measurable business impact.",
    name: "Head of Data",
    company: "Mobility Scale-up",
  },
];

export const countries = [
  { name: "United States", x: 22, y: 42 },
  { name: "United Kingdom", x: 47, y: 33 },
  { name: "Germany", x: 51, y: 35 },
  { name: "France", x: 48, y: 38 },
  { name: "Netherlands", x: 49, y: 33 },
  { name: "Sweden", x: 53, y: 26 },
  { name: "UAE", x: 62, y: 48 },
  { name: "India", x: 70, y: 50 },
  { name: "Singapore", x: 77, y: 60 },
  { name: "Japan", x: 84, y: 42 },
  { name: "Australia", x: 84, y: 74 },
  { name: "Brazil", x: 33, y: 70 },
  { name: "Canada", x: 22, y: 30 },
  { name: "Spain", x: 46, y: 41 },
];

export const budgetOptions = [
  "Under $10k",
  "$10k — $50k",
  "$50k — $150k",
  "$150k+",
  "Let's discuss",
];

export const contactMethods = ["Email", "Phone", "LinkedIn", "Video Call"];
