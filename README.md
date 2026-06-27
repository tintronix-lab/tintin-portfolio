# Tintin Razavian — Portfolio

A modern, premium, fully responsive personal portfolio for a Senior Product Manager, Technology Consultant, and AI Strategist. Built with a luxury-minimal aesthetic inspired by Apple, Linear, Stripe, and Notion.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (class-based dark mode)
- **Framer Motion** for animations
- **next-themes** for the dark mode toggle
- **lucide-react** icons

## Features

- Hero with typing animation, animated gradient background, and CTAs
- About with animated counters, focus-area timeline, and interactive world map
- Expandable experience timeline
- Skills cards + SVG radar chart
- Projects with category filtering and live search
- Certifications, education, and an auto-playing testimonials carousel
- CV section with inline PDF preview + download
- Validated contact form with success animation
- Floating scroll-spy navigation, scroll progress bar, mouse-follow glow,
  back-to-top, reveal-on-scroll, loading screen, dark mode
- SEO metadata, sitemap, robots, semantic HTML, reduced-motion support

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Customize

- **Content** lives in [`lib/data.ts`](lib/data.ts) — edit profile, experience,
  skills, projects, testimonials, etc.
- **CV**: replace [`public/Tintin-Razavian-CV.pdf`](public/Tintin-Razavian-CV.pdf)
  with your real resume (same filename) to power the download and inline preview.
- **Contact form**: the submit handler in
  [`components/sections/Contact.tsx`](components/sections/Contact.tsx) has an
  email-integration placeholder — wire it to an API route or service
  (Resend, Formspree, etc.).
- **Theme**: colors, shadows, and animations are in
  [`tailwind.config.ts`](tailwind.config.ts) and
  [`app/globals.css`](app/globals.css).

## Deploy

Optimized for [Vercel](https://vercel.com): push to GitHub and import the repo,
or run `vercel`. Any Node host that runs `next build` / `next start` works too.
