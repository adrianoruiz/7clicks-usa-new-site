# 7clicks — New Website Architecture (Nuxt 4)

## Mission Statement
Position 7clicks as a specialized web agency for local businesses in the US/Europe.
Kill the "Brazilian generalist agency" perception. Become the go-to partner for [NICHE] businesses that need a modern web presence.

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Nuxt 4** (SSG mode) | Fast, SEO-friendly, you ship faster with it |
| Styling | **Tailwind CSS 4** | Utility-first, consistent, fast iteration |
| Animations | **GSAP** or **@vueuse/motion** | Smooth, professional micro-interactions |
| Fonts | **Google Fonts** — Satoshi (display) + General Sans (body) | Modern, not overused, professional |
| Icons | **Lucide** or **Phosphor** | Clean, consistent |
| Forms | **Formspree** or **Resend** | No backend needed, reliable email delivery |
| Deploy | **Vercel** or **Cloudflare Pages** | Edge performance, free tier generous |
| Analytics | **Plausible** or **Umami** | Privacy-first, no cookie banner needed |
| i18n | **@nuxtjs/i18n** | EN default, PT-BR toggle |
| CMS (optional) | **Nuxt Content** or **Notion as CMS** | For blog/case studies later |

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

## Nuxt 4 Project Structure

```
7clicks/
├── nuxt.config.ts
├── app.vue
├── assets/
│   ├── css/
│   │   └── main.css           # Tailwind + custom styles
│   └── images/
│       ├── logo.svg
│       └── portfolio/         # Project screenshots
├── components/
│   ├── layout/
│   │   ├── TheHeader.vue
│   │   ├── TheFooter.vue
│   │   └── LanguageToggle.vue
│   ├── home/
│   │   ├── HeroSection.vue
│   │   ├── ProblemSolution.vue
│   │   ├── ServicesGrid.vue
│   │   ├── ProcessTimeline.vue
│   │   ├── PortfolioShowcase.vue
│   │   ├── SocialProof.vue
│   │   └── ContactCTA.vue
│   ├── portfolio/
│   │   ├── ProjectCard.vue
│   │   └── BeforeAfter.vue
│   ├── pricing/
│   │   ├── PricingTable.vue
│   │   └── FAQAccordion.vue
│   └── ui/
│       ├── BaseButton.vue
│       ├── SectionHeading.vue
│       ├── StatCard.vue
│       └── AnimatedCounter.vue
├── composables/
│   ├── useScrollAnimation.ts   # Intersection Observer for reveals
│   └── useContactForm.ts       # Form submission logic
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue               # Home (single-page)
│   ├── portfolio/
│   │   ├── index.vue           # Portfolio grid
│   │   └── [slug].vue          # Case study detail
│   ├── pricing.vue
│   ├── about.vue
│   └── contact.vue
├── content/                    # Nuxt Content for case studies
│   └── portfolio/
│       ├── bright-smile-dental.md
│       ├── oak-street-barbershop.md
│       └── bella-cucina-restaurant.md
├── i18n/
│   ├── en.json
│   └── pt-br.json
├── public/
│   ├── favicon.ico
│   └── og-image.png
├── server/
│   └── api/
│       └── contact.post.ts     # Contact form handler
└── tailwind.config.ts
```

---

## SEO Strategy (built into Nuxt)

```ts
// nuxt.config.ts essentials
export default defineNuxtConfig({
  app: {
    head: {
      title: '7clicks — Modern Websites for [Niche] Businesses',
      meta: [
        { name: 'description', content: 'We design and build high-performance websites for [niche] businesses in the US and Europe. Live preview in 48 hours. Starting at $500.' },
        { property: 'og:title', content: '7clicks — Modern Websites for [Niche] Businesses' },
        { property: 'og:description', content: 'Live preview in 48 hours. Starting at $500.' },
        { property: 'og:image', content: '/og-image.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://7clicks.dev' }
      ]
    }
  },
  // SSG for performance
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
```

---

## Implementation Priority (Sprint Plan)

### Week 1: Foundation
- [ ] Nuxt 4 project setup + Tailwind + i18n
- [ ] TheHeader + TheFooter + default layout
- [ ] HeroSection component
- [ ] Deploy to Vercel (get live URL early)

### Week 2: Core Sections
- [ ] ProblemSolution section
- [ ] ServicesGrid with pricing
- [ ] ProcessTimeline
- [ ] ContactCTA with form integration

### Week 3: Portfolio
- [ ] Create 3 demo sites with Lovable (dental, restaurant, barbershop)
- [ ] PortfolioShowcase component
- [ ] Case study pages with Nuxt Content
- [ ] BeforeAfter component

### Week 4: Polish & Launch
- [ ] Pricing page
- [ ] About page
- [ ] Scroll animations + micro-interactions
- [ ] SEO meta tags + OG images
- [ ] PageSpeed optimization (target: 95+)
- [ ] Language toggle (EN/PT-BR)

### Week 5+: Prospecting Engine
- [ ] Start Google Maps prospecting in chosen niche
- [ ] Build first 5 speculative demos
- [ ] Write outbound email templates
- [ ] Set up Wise account for international payments
- [ ] Set up Invoice Ninja for professional invoicing

---

## Critical Reminders

1. **English first. Always.** PT-BR is a toggle, not the default.
2. **Pick ONE niche before building.** The copy depends on it. Dental clinics are the safest bet (high ticket, always need websites, easy to find on Maps).
3. **Your site IS your portfolio.** If it scores below 95 on PageSpeed, don't send it to prospects.
4. **No WhatsApp. No Instagram. No Brazilian addresses.** On the EN version, you are a remote agency. Period.
5. **Demo > Promise.** Every section should reinforce: "We show, not tell."
