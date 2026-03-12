# 7clicks — New Website Architecture (Nuxt 4)

## Mission Statement
Position 7clicks as a specialized web agency for local businesses in the US/Europe.
Kill the "Brazilian generalist agency" perception. Become the go-to partner for [NICHE] businesses that need a modern web presence.

---

## Tech Stack

| Layer | Choice | Version | Why |
|-------|--------|---------|-----|
| Framework | **Nuxt 4** | ^4.3.1 | Fast, SEO-friendly, SSR/SSG, `app/` directory |
| UI Framework | **Vue 3** | ^3.5.28 | Composition API, TypeScript-first |
| Language | **TypeScript** | ^5.9.3 | Type safety, strict mode enabled |
| Styling | **Tailwind CSS 4** | ^4.2.1 | CSS-first config (`@plugin`, `@theme`), no `tailwind.config.ts` |
| UI Components | **daisyUI 5** | ^5.5.19 | Semantic classes, 35 themes, zero deps |
| Icons | **Lucide** (`lucide-vue-next`) | latest | Clean, consistent, tree-shakeable |
| State | **Pinia 3** | ^3.0.4 | Official Vue state management |
| Images | **@nuxt/image** | ^2.0.0 | Auto webp/avif, lazy loading |
| ORM | **Drizzle ORM** | ^0.45.1 | Type-safe, lightweight, PostgreSQL |
| DB | **PostgreSQL** | via external host | Drizzle push/migrate, `postgres` driver ^3.4.5 |
| Runtime | **Bun** | latest | Dev server via `bun --bun nuxt dev` |
| Tests | **Vitest** | ^4.0.18 | Fast, Vite-native, happy-dom |
| Lint | **@nuxt/eslint** | ^1.3.0 | Nuxt-aware linting |
| Deploy | **Docker** + **VPS (Hostinger)** | — | `Dockerfile` + `docker-compose.yml`, port 3007 |
| Fonts | **Google Fonts** — Satoshi (display) + General Sans (body) | — | Modern, not overused, professional |
| Forms | TBD (server API route) | — | Nitro server endpoint `server/api/` |
| Analytics | TBD | — | Privacy-first preferred |
| i18n | TBD | — | EN default, PT-BR toggle (future) |
| CMS (optional) | TBD | — | For blog/case studies later |

### Key Architecture Decisions
- **No `tailwind.config.ts`** — Tailwind v4 is CSS-first, all config via `@plugin`, `@theme`, `@import` in `main.css`
- **`@tailwindcss/vite`** plugin directly in `nuxt.config.ts` (NOT `@nuxtjs/tailwindcss` module)
- **Nuxt 4 `app/` directory** — pages, components, composables, stores live under `app/`
- **daisyUI themes**: `light` (default) + `dark` (prefers-dark) — expandable via CSS
- **No separate PostgreSQL in Docker** — using external DB, docker-compose only has `app` service with production profile
- **Dev port**: 3007

---

## Site Map

```
/                     → Home (single-page, high-conversion)
/portfolio            → Case studies / showcase demos
/portfolio/[slug]     → Individual case study
/pricing              → Transparent pricing table
/about                → Compact about (process-focused, not people-focused)
/contact              → Clean contact form (email-first)
/blog (phase 2)       → SEO content for niche keywords
```

---

## Page Structure: HOME (Single Page — Primary Conversion Path)

### Section 1: Hero
```
Layout: Full viewport, dark or bold background
Content:
  - Badge: "Web Design for [Niche] Businesses"
  - H1: "Your [niche] deserves a website that actually brings customers."
  - Subtitle: "We design and build high-performance websites for [dental clinics / restaurants / etc.] across the US and Europe. Live preview in 48 hours."
  - CTA Primary: "See Our Work" → scrolls to portfolio
  - CTA Secondary: "Get a Free Preview" → scrolls to contact
  - Trust bar: "Trusted by 20+ businesses · Avg. PageSpeed 95+ · 5-day delivery"

Design Notes:
  - NO stock photos of generic people
  - Consider a subtle animated grid or gradient mesh background
  - Typography-driven, confident, clean
```

### Section 2: Problem → Solution (The Hook)
```
Layout: Two columns or before/after visual
Content:
  Left (Problem):
    - "Your current website is costing you customers."
    - "Slow load times. Outdated design. Not mobile-friendly. No clear call to action."
    - Show a "bad website" mockup (blurred/generic)

  Right (Solution):
    - "Here's what we build."
    - Show a clean, modern mockup
    - "Fast. Mobile-first. Designed to convert."

Design Notes:
  - This is the emotional trigger
  - Visual contrast is key — make the "before" feel painful
  - Keep copy short, let the visuals do the work
```

### Section 3: Services (Simplified)
```
Layout: 3 cards, clean grid
Content:
  Card 1: Landing Pages
    - "Perfect for promotions and new patient campaigns"
    - Starting at $500
    - Delivery: 3-5 days

  Card 2: Business Websites
    - "Your complete online presence"
    - Starting at $800
    - Delivery: 5-7 days

  Card 3: Monthly Care
    - "Hosting, updates, and support"
    - $29/month
    - "Set it and forget it"

Design Notes:
  - NO "e-commerce", "apps", "sistemas web"
  - Keep it laser-focused on what the niche needs
  - Prices visible = trust + lead qualification
```

### Section 4: How It Works (Process)
```
Layout: Horizontal timeline or numbered steps
Content:
  Step 1: "We find your business"
    - "We research your online presence and identify opportunities."

  Step 2: "We build a preview"
    - "In 48 hours, you receive a live preview of your new website. No commitment."

  Step 3: "You review & we refine"
    - "Give us feedback. We adjust until it's perfect."

  Step 4: "Launch & grow"
    - "Your site goes live. We handle hosting and support."

Design Notes:
  - This section sells the METHOD, not the product
  - The "preview before commitment" is the killer differentiator
  - Use icons or illustrations, keep it visual
```

### Section 5: Portfolio / Showcase
```
Layout: Grid of 3-6 projects with hover preview
Content:
  - Each card shows: Screenshot, Business type, Key metric
  - Example: "Bright Smile Dental · Miami, FL · PageSpeed: 98"
  - Click opens full case study

Design Notes:
  - These can be DEMO sites you built speculatively
  - Show diversity within the niche (different cities, styles)
  - Interactive hover effects (slight zoom, overlay with details)
  - CRITICAL: These must look like real US/EU businesses
```

### Section 6: Results / Social Proof
```
Layout: Stats bar + optional testimonials
Content:
  Option A (no real testimonials yet):
    - "95+ Average PageSpeed Score"
    - "48h Preview Delivery"
    - "20+ Websites Delivered"
    - "100% Mobile Optimized"

  Option B (when you have testimonials):
    - Short quotes from US/EU clients
    - Name, business, city
    - Star rating optional

Design Notes:
  - If you don't have international testimonials, use metrics instead
  - NEVER show Brazilian testimonials on the EN version
  - Metrics > words when you're building credibility from zero
```

### Section 7: CTA / Contact
```
Layout: Split — left copy, right form
Content:
  Left:
    - H2: "Ready to see what your new website looks like?"
    - "Tell us about your business. We'll build a free live preview in 48 hours."
    - Email: hello@7clicks.dev
    - "We respond within 24 hours."

  Right:
    - Form fields: Name, Email, Business Name, Website URL (optional), Message
    - CTA Button: "Get My Free Preview"

Design Notes:
  - NO WhatsApp
  - NO phone number with Brazilian country code
  - NO physical address
  - Clean, minimal, professional
  - Form submits to Formspree/Resend → your email
```

### Footer
```
Content:
  - Logo: "7clicks"
  - Tagline: "Modern websites for local businesses."
  - Links: Portfolio, Pricing, Contact
  - Social: LinkedIn, GitHub (not Instagram)
  - "© 2025 7clicks. Remote-first agency."
  - Language toggle: EN | PT-BR

Design Notes:
  - Minimal
  - NO "Soluções Digitais"
  - NO Brazilian addresses
  - LinkedIn > Instagram for this market
```

---

## Page: /pricing

```
Layout: Clean pricing table with 3 tiers
Content:

| | Landing Page | Business Website | Premium |
|---|---|---|---|
| Price | $500 - $800 | $800 - $1,500 | Custom |
| Pages | 1 | Up to 5 | Unlimited |
| Mobile optimized | ✓ | ✓ | ✓ |
| SEO basics | ✓ | ✓ | ✓ |
| Contact form | ✓ | ✓ | ✓ |
| Custom design | ✓ | ✓ | ✓ |
| Blog/CMS | — | Optional (+$300) | ✓ |
| Delivery | 3-5 days | 5-7 days | 10-14 days |

Add-on: Monthly Care — $29/mo
  - Hosting, SSL, updates, minor edits, uptime monitoring

FAQ below pricing:
  - "Do I pay before seeing anything?" → No. We build a free preview first.
  - "How do I pay?" → Via Wise or PayPal. Simple international transfer.
  - "Can I cancel monthly care?" → Yes, anytime. No contracts.
  - "Do you redesign existing sites?" → Yes. Same process, same pricing.
```

---

## Page: /portfolio/[slug]

```
Layout: Full case study page
Content:
  - Hero image (full-width screenshot)
  - Business name, type, location
  - Challenge: What was wrong with their old site
  - Solution: What we built and why
  - Results: PageSpeed, mobile score, visual comparison
  - Before/After screenshots
  - CTA: "Want similar results? Get your free preview."

Design Notes:
  - Even for demo/speculative projects, write them as real case studies
  - This builds your portfolio AND demonstrates expertise
```

---

## Page: /about

```
Layout: Minimal, process-focused
Content:
  - H1: "We're a remote web agency obsessed with speed and simplicity."
  - Short paragraph: Who you are, what you believe in
  - Focus on: Fast delivery, modern tech, no BS
  - NO team photos or individual bios (for now)
  - Optional: "Built with Nuxt, Vue, and Tailwind" (tech credibility)
  - CTA: "See our work" or "Get a free preview"
```

---

## Design Direction

### Aesthetic: "Technical Confidence"
- Dark mode primary (dark navy/charcoal) with bright accent (electric blue or green)
- Clean typography, generous whitespace
- Subtle grid/dot pattern background (echoes the protocol's design language)
- Micro-animations on scroll (fade-up, stagger)
- Code-inspired elements (monospace for stats, terminal-style accents)
- NO gradients-on-white generic AI look
- NO stock photos

### Color Palette (suggestion)
```css
:root {
  --bg-primary: #0a0a0f;        /* Near black */
  --bg-secondary: #12121a;      /* Dark card */
  --bg-accent: #1a1a2e;         /* Subtle elevation */
  --text-primary: #f0f0f5;      /* Off-white */
  --text-secondary: #8888a0;    /* Muted */
  --accent: #3b82f6;            /* Electric blue */
  --accent-hover: #60a5fa;      /* Lighter blue */
  --success: #22c55e;           /* Green for metrics */
  --border: #1e1e2e;            /* Subtle borders */
}
```

### Typography
```css
/* Display/Headings */
font-family: 'Satoshi', sans-serif;
/* or 'Cabinet Grotesk', 'Clash Display' */

/* Body */
font-family: 'General Sans', sans-serif;
/* or 'Switzer', 'Plus Jakarta Sans' */

/* Code/Metrics */
font-family: 'JetBrains Mono', monospace;
```

---

## Project Structure (Nuxt 4 — `app/` directory)

```
7clicks-usa-new-site/
├── app/                          # Nuxt 4 app directory
│   ├── app.vue                   # Root component
│   ├── error.vue                 # Global error page (404, 500)
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # Tailwind v4 + daisyUI config (CSS-first)
│   ├── components/
│   │   ├── AppNavbar.vue         # Responsive navbar (Lucide Menu icon)
│   │   ├── AppFooter.vue         # Footer with year + app name
│   │   ├── ThemeToggle.vue       # Theme switcher (Lucide Palette icon)
│   │   ├── AppToast.vue          # Toast notification system
│   │   ├── home/                 # (to create) Home page sections
│   │   │   ├── HeroSection.vue
│   │   │   ├── ProblemSolution.vue
│   │   │   ├── ServicesGrid.vue
│   │   │   ├── ProcessTimeline.vue
│   │   │   ├── PortfolioShowcase.vue
│   │   │   ├── SocialProof.vue
│   │   │   └── ContactCTA.vue
│   │   ├── portfolio/            # (to create)
│   │   │   ├── ProjectCard.vue
│   │   │   └── BeforeAfter.vue
│   │   └── pricing/              # (to create)
│   │       ├── PricingTable.vue
│   │       └── FAQAccordion.vue
│   ├── composables/
│   │   └── useToast.ts           # Toast state management
│   ├── layouts/
│   │   └── default.vue           # Navbar + main + footer
│   ├── pages/
│   │   ├── index.vue             # Home (single-page, boilerplate — needs custom content)
│   │   ├── portfolio/            # (to create)
│   │   │   ├── index.vue
│   │   │   └── [slug].vue
│   │   ├── pricing.vue           # (to create)
│   │   ├── about.vue             # (to create)
│   │   └── contact.vue           # (to create)
│   ├── plugins/
│   │   └── theme.client.ts       # Theme persistence (localStorage)
│   └── stores/
│       └── user.ts               # Pinia user store
├── server/
│   ├── api/
│   │   └── health.get.ts         # Health check endpoint
│   ├── database/
│   │   ├── index.ts              # Drizzle + postgres connection
│   │   └── schema.ts             # Users table (Drizzle schema)
│   ├── middleware/
│   │   └── log.ts                # Request logging
│   └── utils/
│       └── db.ts                 # Re-exports db
├── public/
│   └── favicon.ico
├── nuxt.config.ts                # Nuxt config (Tailwind vite plugin, Pinia, etc.)
├── drizzle.config.ts             # Drizzle Kit config
├── docker-compose.yml            # Production app container (port 3007)
├── Dockerfile                    # Multi-stage Bun build
├── eslint.config.mjs             # Nuxt ESLint
├── vitest.config.ts              # Vitest + happy-dom
├── tsconfig.json
├── package.json
└── bun.lock
```

### What exists vs. what needs to be built

| Status | Item |
|--------|------|
| Done | Nuxt 4 boilerplate, layout, navbar, footer, theme toggle, toast system |
| Done | Drizzle + PostgreSQL setup, health API, server middleware |
| Done | Docker + CI/deploy config |
| Done | Home page sections (Hero, Problem/Solution, Services, Process, Portfolio, Social Proof, Contact CTA) |
| Done | Portfolio pages (`/portfolio`, `/portfolio/[slug]`) |
| Done | Pricing page with table + FAQ |
| Done | About page |
| Done | Contact page with form |
| Done | Scroll animations / micro-interactions |
| Done | SEO meta tags per page (useSeoMeta in all pages) |
| Done | Custom fonts (Satoshi + General Sans via Fontshare) |
| Done | Form submission endpoint (`server/api/contact.post.ts`) |
| Done | Favicon (SVG) + public directory |
| **To build** | i18n (EN/PT-BR) |
| **To build** | OG image (`/public/og-image.png`) |
| **To build** | Deploy to Hostinger VPS |
| **To build** | PageSpeed optimization (target: 95+) |
| **To decide** | Analytics provider |
| **To decide** | CMS for case studies |
| **To decide** | Email service integration (Resend/Formspree for contact form) |

---

## SEO Strategy (built into Nuxt)

Currently configured in `nuxt.config.ts`:
- `lang: 'en'`, `charset: 'utf-8'`, `viewport` set
- `title: '7clicks'`
- `description: '7clicks - Professional Development and AI Engineering'`
- Page transitions enabled (`page` + `layout`)
- `@nuxt/image` with webp/avif auto-format

**Per-page SEO** — use `useSeoMeta()` in each page:
```ts
useSeoMeta({
  title: 'Page Title',
  ogTitle: '7clicks — Page Title',
  description: 'Page description for SEO.',
  ogDescription: 'Page description for social sharing.',
  ogImage: '/og-image.png'
})
```

**Still needed:**
- OG image (`/public/og-image.png`)
- Canonical URLs
- Structured data (JSON-LD for LocalBusiness or Organization)
- SSG prerender config if going static

---

## Implementation Priority (Sprint Plan)

### Phase 1: Foundation (DONE)
- [x] Nuxt 4 project setup + Tailwind v4 + daisyUI 5
- [x] AppNavbar + AppFooter + default layout
- [x] ThemeToggle (light/dark)
- [x] Toast notification system
- [x] Error page (404/500)
- [x] Drizzle ORM + PostgreSQL schema
- [x] Docker + Dockerfile
- [x] Vitest + ESLint setup

### Phase 2: Home Page Sections
- [x] HeroSection — bold, typography-driven, animated background
- [x] ProblemSolution — before/after visual contrast
- [x] ServicesGrid — 3 cards with pricing
- [x] ProcessTimeline — 4 steps, visual
- [x] ContactCTA — split layout, form + copy
- [ ] Deploy to Hostinger VPS (get live URL early)

### Phase 3: Inner Pages
- [x] Portfolio showcase grid on home
- [x] `/portfolio` page with project cards
- [x] `/portfolio/[slug]` case study pages
- [x] `/pricing` with table + FAQ accordion
- [x] `/about` — minimal, process-focused
- [x] `/contact` — dedicated form page

### Phase 4: Polish & Launch
- [x] Scroll animations + micro-interactions
- [x] SEO meta tags + OG images per page
- [ ] PageSpeed optimization (target: 95+)
- [x] Custom fonts (Satoshi + General Sans)
- [x] Form submission endpoint (`server/api/contact.post.ts`)

### Phase 5: Growth
- [ ] i18n (EN/PT-BR toggle)
- [ ] Analytics integration
- [ ] Blog/CMS for case studies
- [ ] Google Maps prospecting in chosen niche
- [ ] Speculative demos for prospects

---

## Critical Reminders

1. **English first. Always.** PT-BR is a toggle, not the default.
2. **Pick ONE niche before building.** The copy depends on it. Dental clinics are the safest bet (high ticket, always need websites, easy to find on Maps).
3. **Your site IS your portfolio.** If it scores below 95 on PageSpeed, don't send it to prospects.
4. **No WhatsApp. No Instagram. No Brazilian addresses.** On the EN version, you are a remote agency. Period.
5. **Demo > Promise.** Every section should reinforce: "We show, not tell."
