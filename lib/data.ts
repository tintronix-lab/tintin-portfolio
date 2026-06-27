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
  { label: "Years of Experience", value: 20, suffix: "+" },
  { label: "Countries Worked In", value: 23, suffix: "" },
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
    role: "Solution Architect",
    company: "Electrolux",
    period: "2022 — Present",
    location: "Global · Stockholm",
    summary:
      "Drive digital transformation and solution architecture for connected home ecosystems, bridging consumer IoT, cloud platforms, and enterprise operations at scale.",
    achievements: [
      "Architected a unified API layer integrating 12+ appliance platforms, enabling real-time connectivity and AI-driven insights for 2M+ users globally.",
      "Led cross-functional teams across EU, APAC, and Americas to define go-to-market strategies for smart home integrations, resulting in 3 new product launches.",
      "Established cloud-first architecture principles and best practices, accelerating time-to-market by 40% across product lines.",
    ],
    technologies: ["IoT", "Cloud Architecture", "APIs", "AI/ML", "Smart Home", "Strategy"],
  },
  {
    role: "Product Manager — Software",
    company: "Teledyne (FLIR)",
    period: "2003 — 2022",
    location: "EU/Global",
    summary:
      "Managed software product suites for thermal imaging and sensing systems, serving defense, security, and industrial verticals across 50+ countries.",
    achievements: [
      "Built and scaled software teams from 5 to 40+ engineers, establishing agile practices and continuous delivery across R&D.",
      "Shipped 15+ major software releases integrating AI vision processing, increasing customer retention by 28% and opening new vertical markets.",
      "Drove platform modernization from legacy systems to cloud-native architecture, reducing deployment times by 65% and infrastructure costs by $2.3M annually.",
    ],
    technologies: ["Thermal Imaging", "Software Platform", "Vision AI", "Defense Tech", "Agile", "Leadership"],
  },
  {
    role: "Product Manager",
    company: "Allgon LGP",
    period: "2000 — 2003",
    location: "Sweden",
    summary:
      "Pioneered telecom infrastructure products for mobile connectivity and network optimization in early broadband era.",
    achievements: [
      "Launched Sweden's first 3G-ready network optimization platform, securing 8 carrier contracts across Nordics.",
      "Led product strategy and roadmap adoption across operator networks, establishing Allgon as a trusted infrastructure vendor.",
      "Managed end-to-end product lifecycle from concept through commercialization, growing division revenue 180% in 3 years.",
    ],
    technologies: ["Telecom", "Network Infrastructure", "3G/Mobile", "Product Strategy", "Commercial"],
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
  // North America
  { name: "United States", x: 20, y: 42 },
  { name: "Canada", x: 22, y: 28 },
  // South America
  { name: "Brazil", x: 32, y: 70 },
  // Europe
  { name: "United Kingdom", x: 45, y: 32 },
  { name: "Ireland", x: 43, y: 31 },
  { name: "France", x: 47, y: 37 },
  { name: "Spain", x: 45, y: 41 },
  { name: "Portugal", x: 42, y: 42 },
  { name: "Italy", x: 51, y: 39 },
  { name: "Germany", x: 51, y: 34 },
  { name: "Netherlands", x: 49, y: 32 },
  { name: "Poland", x: 54, y: 30 },
  { name: "Sweden", x: 52, y: 23 },
  { name: "Norway", x: 50, y: 20 },
  { name: "Denmark", x: 51, y: 27 },
  { name: "Finland", x: 56, y: 19 },
  { name: "Romania", x: 57, y: 36 },
  { name: "Lithuania", x: 56, y: 26 },
  { name: "Estonia", x: 57, y: 22 },
  // Africa
  { name: "South Africa", x: 55, y: 72 },
  { name: "Tunisia", x: 52, y: 47 },
  // Middle East
  { name: "UAE", x: 62, y: 48 },
  // Asia
  { name: "India", x: 68, y: 50 },
  { name: "China", x: 75, y: 38 },
  { name: "Thailand", x: 73, y: 53 },
  { name: "Malaysia", x: 75, y: 58 },
  { name: "South Korea", x: 80, y: 35 },
  { name: "Taiwan", x: 79, y: 40 },
  { name: "Hong Kong", x: 78, y: 42 },
  { name: "Singapore", x: 76, y: 59 },
  { name: "Japan", x: 84, y: 41 },
  // Oceania
  { name: "Australia", x: 85, y: 73 },
];

export const budgetOptions = [
  "Under $10k",
  "$10k — $50k",
  "$50k — $150k",
  "$150k+",
  "Let's discuss",
];

export const contactMethods = ["Email", "Phone", "LinkedIn", "Video Call"];
