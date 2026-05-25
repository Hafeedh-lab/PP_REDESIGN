# PLOUTOS PAGE WEBSITE REDESIGN — MASTER PRD

**Version:** 1.0
**Date:** May 2026
**Repo:** Existing Vite + React + TS + Tailwind + Framer Motion + React Router project
**Target:** Full content + design rebuild per `PloutosPage_Website_Content_V1.docx`

---

## 0. EXECUTION PRINCIPLE

This is a **destructive redesign**, not an incremental refactor. The existing site is a generic bookkeeping firm pitch. The new site is a unified financial-journey narrative (OWA → Pepcode → AuditMe). Do not preserve old visual language. Do not preserve old IA. Preserve only what is explicitly listed in §5.

When this PRD and any prior in-repo convention conflict — **this PRD wins**.

---

## 1. PROJECT CONTEXT

### 1.1 What we're building
A 6-page marketing site for Ploutos Page Limited (Lagos-based fintech), restructured around their unified product journey:
- **OWA by Pepcode** — agent-led bookkeeping for market traders
- **Pepcode** — SaaS bookkeeping for digital SMEs
- **AuditMe** — 7-day audited financial statements

### 1.2 Brand voice
**Credible · Human · Ambitious · Simple.** No corporate fluff. No jargon. Real numbers. Real stories. Photojournalistic visual language.

### 1.3 Core narrative
"From your first sale in the market to your first audited account — Ploutos Page builds the financial road every business deserves to walk."

### 1.4 Out of scope
- E-commerce checkout
- User authentication
- Customer dashboards
- CMS backend (the existing localStorage Blog stays as a hidden route — see §4.4)

---

## 2. TECH STACK & CONSTRAINTS

### 2.1 Preserve (don't touch)
- Vite 5.x build config
- React 18 + TypeScript
- TailwindCSS 3.4 + PostCSS pipeline
- React Router 7
- Framer Motion 12
- Lucide React icons
- ESLint config

### 2.2 Add
- **`@fontsource/fraunces`** — display font (Google Fonts via npm)
- **`@fontsource/inter`** — body font, replaces the existing CDN call if any
- **`react-countup`** — for animated stat counters on Traction + Homepage
- **`react-intersection-observer`** *(if needed for triggering CountUp)* — only if the existing `useScrollAnimation` hook doesn't expose `inView` properly

### 2.3 Remove
- `three` and `@types/three` — kill Three.js entirely
- All custom animated icon components built on Three.js (see §5.2)

### 2.4 Constraint
**No analytics, no cookie banner.** Leave one HTML comment in `index.html` head: `<!-- ANALYTICS_PLACEHOLDER -->` for future drop-in.

---

## 3. BRAND SYSTEM

### 3.1 Color tokens (add to `tailwind.config.js`)

```js
colors: {
  // Primary brand
  'teal': {
    DEFAULT: '#0D9488',  // primary CTAs, links, accents
    light: '#14B8A6',    // hovers
    dark: '#0F766E',     // pressed states
  },
  // Journey progression
  'gold': '#D4A574',     // Pepcode stage accent
  'purple': '#7C3AED',   // AuditMe stage accent
  // Surfaces
  'navy': '#0F2027',     // dark footer + key sections
  'navy-light': '#1E3742', // dark section variants
  'cream': '#FAFAF7',    // off-white page background
  // Text
  'ink': '#0A1518',      // primary text on light
  'ink-muted': '#475569', // secondary text on light
}
```

**Remove** the old `custom-blue`, `matte-dark-blue`, `brand-purple`, `brand-cream`, `soft-slate`, `soft-blue`, `soft-gray` tokens.

### 3.2 Typography

```js
fontFamily: {
  'display': ['"Fraunces"', 'Georgia', 'serif'],     // h1, h2, large pull-quotes
  'sans': ['"Inter"', '-apple-system', 'sans-serif'], // body, h3-h6, UI
}
```

**Rules:**
- `<h1>` and `<h2>` use `font-display`, weight `500-600`, slight optical-size adjustment (`font-variation-settings: 'opsz' 144`)
- All body, nav, UI, h3-h6 use `font-sans`
- Pull-quotes in Founder Story use `font-display italic`

Type scale (mobile / desktop):
- Hero h1: `text-4xl md:text-6xl lg:text-7xl`
- Section h2: `text-3xl md:text-5xl`
- Card h3: `text-xl md:text-2xl`
- Body: `text-base md:text-lg`
- Small/caption: `text-sm`

### 3.3 Spacing rhythm
- Section vertical padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card internal padding: `p-6 md:p-8`

### 3.4 Motion language
- Section reveals: opacity 0→1 + translateY 24px→0, duration 600ms, ease-out, trigger at 15% viewport
- Stat counters: 2.5s count-up duration, triggered when visible
- Journey arrows: idle subtle pulse opacity 0.6↔1, 3s cycle
- Hover lifts on tiles/cards: `translateY(-4px)`, 200ms ease-out, with `shadow-lg` → `shadow-2xl`
- **No Three.js. No LavaLamp. No abstract blob animations.**

---

## 4. INFORMATION ARCHITECTURE

### 4.1 Final routes (the only routes that exist)
```
/                  → Homepage              (HomePage.tsx)
/how-it-works      → How It Works          (HowItWorks.tsx)
/products          → Products              (Products.tsx)  ← rewrite of existing file
/about             → About                 (About.tsx)     ← rewrite, not the existing AboutUs.tsx
/traction          → Traction              (Traction.tsx)  ← NEW FILE
/contact           → Contact               (Contact.tsx)   ← rewrite
/blog              → Blog (hidden, no nav) (Blog.tsx)      ← preserve existing file
*                  → 404                   (NotFound.tsx)  ← NEW FILE
```

### 4.2 Routes to delete (entirely remove the files and route declarations)
- `/about-us` → file `src/pages/AboutUs.tsx` (replaced by new `About.tsx` at `/about`)
- `/tax-services` → file `src/pages/TaxServices.tsx`
- `/bookkeeping-services` → file `src/pages/BookkeepingServices.tsx`
- `/inventory-management` → file `src/pages/InventoryManagement.tsx`
- `/careers` → file `src/pages/Careers.tsx`
- The existing `/products` page contents (file rewritten in place, old content discarded)

### 4.3 Legacy URL redirects
Add a `RedirectShim` component or use route element-level redirects so old indexed URLs don't 404. All redirect to `/`:
```
/about-us              → /about
/tax-services          → /
/bookkeeping-services  → /
/inventory-management  → /
/careers               → /
```
Use `<Navigate to="/" replace />` from React Router.

### 4.4 Hidden Blog route
- Keep `src/pages/Blog.tsx` and `src/components/BlogCMS.tsx` exactly as they are functionally
- Restyle the Blog list view to match new brand tokens (just colors + fonts, don't rewrite logic)
- Remove all nav links and footer links to `/blog`
- The route still resolves if visited directly

---

## 5. COMPONENT INVENTORY

### 5.1 Preserve (and restyle to new brand tokens)
| File | Action |
|---|---|
| `src/components/AnimatedSection.tsx` | Keep — used for scroll reveals across new build |
| `src/hooks/useScrollAnimation.ts` | Keep — reused by AnimatedSection |
| `src/hooks/useStaggeredAnimation` (inside same file) | Keep |
| `src/components/ScrollToTop.tsx` | Keep |
| `src/components/PageTransition.tsx` | Keep, used in App.tsx wrap |
| `src/components/SectionDivider.tsx` | Keep, restyle to use new teal |
| `src/components/BlogCMS.tsx` | Keep functionally, restyle colors only |
| `public/images/Mrs Peju.jpg` | Keep — founder photo for About page |

### 5.2 Delete entirely
| File | Reason |
|---|---|
| `src/components/LavaLampBackground.tsx` | New hero uses photography |
| `src/components/AnimatedTargetIcon.tsx` | Three.js, off-brand |
| `src/components/AnimatedEyeIcon.tsx` | Three.js, off-brand |
| `src/components/AnimatedStarIcon.tsx` | Three.js, off-brand |
| `src/components/AnimatedCalculatorIcon.tsx` | Off-brand |
| `src/components/AnimatedFileText.tsx` | Off-brand |
| `src/components/AnimatedTrendingUp.tsx` | Off-brand |
| `src/components/About.tsx` | Replaced by new About page content |
| `src/components/Hero.tsx` | Rewritten |
| `src/components/Services.tsx` | Replaced by new Products page logic |
| `public/images/Oyinda.JPG` | Team photo not needed |
| `public/images/EVELYN.jpg` | Team photo not needed |
| `public/images/ADEBUKOLA.jpg` | Team photo not needed |
| `public/images/Hafeedh.jpeg` | Team photo not needed |
| `public/images/Emmanuel.jpeg` | Team photo not needed |

**Do NOT delete** `public/images/Mrs Peju.jpg` — that's the founder.

### 5.3 New components to build
| File | Purpose |
|---|---|
| `src/components/Navigation.tsx` | **Rewrite** — new links, new style |
| `src/components/Footer.tsx` | **Rewrite** — 4-col layout per brief |
| `src/components/ProductSelectorModal.tsx` | NEW — opens from "Get Started" nav CTA |
| `src/components/WhatsAppFloat.tsx` | NEW — fixed bottom-right on all pages |
| `src/components/Hero.tsx` | Rewrite — new hero with photo + product tiles |
| `src/components/JourneyFlow.tsx` | NEW — homepage 3-stage horizontal flow |
| `src/components/StatsGrid.tsx` | NEW — count-up tiles (used on Home + Traction) |
| `src/components/FounderStoryTeaser.tsx` | NEW — homepage section |
| `src/components/FooterBanner.tsx` | NEW — homepage dark CTA banner |
| `src/components/ProductCard.tsx` | NEW — used on Products page |
| `src/components/PathStep.tsx` | NEW — used in How It Works numbered steps |
| `src/pages/Traction.tsx` | NEW page |
| `src/pages/NotFound.tsx` | NEW page |

### 5.4 Pages to rewrite from scratch (delete file contents, write fresh)
- `src/pages/HomePage.tsx`
- `src/pages/Products.tsx`
- `src/pages/Contact.tsx`
- `src/pages/About.tsx` (delete `AboutUs.tsx` first, create new file at this path)
- `src/pages/HowItWorks.tsx` (NEW file at this path)

### 5.5 Files to update
- `src/App.tsx` — new route table per §4
- `tailwind.config.js` — new tokens per §3
- `src/index.css` — load Fraunces + Inter via `@fontsource`, remove old keyframes/utilities that referenced deleted components (LavaLamp, animate-file-text, etc.)
- `src/main.tsx` — verify (likely unchanged)
- `index.html` — title, meta, OG tags, JSON-LD, favicon, analytics placeholder
- `package.json` — add/remove deps per §2
- `public/robots.txt` — NEW
- `public/sitemap.xml` — NEW

---

## 6. PAGE SPECIFICATIONS

> **All copy below is verbatim from the client brief. Do not paraphrase, do not "improve," do not add filler. Use the exact copy.**

### 6.1 PAGE — Homepage (`/`)

#### 6.1.1 Hero Section
- **Background:** Full-width photographic hero image. File path: `/public/images/hero-market.webp` (with `.jpg` fallback at `/public/images/hero-market.jpg`). Use `<picture>` tag.
- **Overlay:** Dark gradient `bg-gradient-to-b from-navy/40 via-navy/60 to-navy/80`
- **Min height:** `min-h-[90vh]` desktop, `min-h-[80vh]` mobile
- **Content layout:** Centered text top half, three product tiles below

**Headline (h1, `font-display`, white):**
> Africa's market economy runs on hard work.
> **We make sure the numbers run too.**

(First line `font-normal`, second line `font-semibold` — emphasis via weight, not color)

**Sub-headline (body, white/90):**
> Ploutos Page is the financial operating system for Nigeria's businesses. From the market woman tracking daily sales to the SME owner managing invoices to the company that needs an audited statement in 7 days.

**Tag line (display, italic, teal-light):**
> One platform. Three products. A complete financial journey.

**Product tiles (3 across desktop, stacked mobile):**

Each tile:
- Glass-morphism: `bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6`
- Hover: `border-teal/60` glow, lift `-translate-y-1`
- Click target: entire tile

| Tile | Heading | Sub | CTA Text | Action |
|---|---|---|---|---|
| 1 | OWA by Pepcode | For market traders & distributors | Start Your Journey → | `target="_blank"` to `https://owabypepcode.com.ng` |
| 2 | Pepcode | For digital-ready SMEs & businesses | Start Recording → | `target="_blank"` to `https://pepcodeinc.com` |
| 3 | AuditMe | Audited statements in 7 days — any business | Get Audited → | Internal link to `/how-it-works#auditme` |

#### 6.1.2 Financial Journey Section
- **Background:** `bg-cream`
- **Padding:** `py-20 md:py-28`

**Section h2 (`font-display`, ink):**
> Every business has a financial journey. We built the entire road.

**Section sub:**
> No matter where your business is today — Ploutos Page has a product for you and a clear path to take you further.

**3-stage flow component (`JourneyFlow.tsx`):**
- Desktop: 3 horizontal stage cards, animated arrow SVGs between them
- Mobile: 3 stacked cards, downward arrow SVGs between them
- Each card border-top is the stage color (Stage 1: teal, Stage 2: gold, Stage 3: purple)
- Cards animate in with stagger (`useStaggeredAnimation`, 250ms delay each)

| Stage | Title | Body | Footer line |
|---|---|---|---|
| 1 | OWA by Pepcode | You sell in a market. An OWA agent visits you, records your daily sales, inventory, and expenses on your behalf. No app needed on your end. | **After 3–6 months: you have real financial data.** |
| 2 | Pepcode | Your business has grown. You manage your own invoices, expenses, inventory, and purchases on Pepcode — on your phone, laptop, or tablet. | **Your financial records are now audit-ready.** |
| 3 | AuditMe | Upload your financials or bank statements to AuditMe. A rated human auditor reviews and delivers your signed audited financial statement in 7 days. | **Your business is now financially visible.** |

Footer line uses `font-semibold` ink, set apart with `border-t border-ink/10 pt-4 mt-4`.

#### 6.1.3 Traction Stats Section
- **Background:** `bg-navy text-white`
- **Padding:** `py-20`

**Section h2:**
> Numbers that tell the story.

**Stats grid (`StatsGrid.tsx`, 4-up desktop, 2x2 tablet, 1-col mobile):**

| Number (animate count-up) | Label |
|---|---|
| 1,600+ | Paying Users across all products |
| 480+ | Audits processed on AuditMe |
| ₦105M | Total Revenue generated to date |
| 98% | Satisfaction customer rating |

Implementation note: `CountUp` from `react-countup` triggered via `IntersectionObserver` at 30% visibility. Numbers in `font-display`, weight 600, `text-5xl md:text-6xl`, color `text-teal-light`. For "₦105M" — animate the `105` portion, render `₦` and `M` as static.

#### 6.1.4 Founder Story Teaser
- **Background:** `bg-cream`
- **Layout:** Centered, max-w-4xl

**h2:**
> This started with a market woman who had no records.

**Body:**
> Fifteen years ago, the founder's mother ran a business in the open market. She worked hard. She had loyal customers. But she kept no financial records. When the business declined, there was nothing to show what went wrong — and nothing to pass on.

**Pull line (font-display, italic, teal):**
> Ploutos Page was built so that story never happens again.

**CTA button (teal filled):**
> Read Our Story →

Links to `/about`.

#### 6.1.5 Footer Hero Banner
- **Background:** `bg-navy` with subtle SVG grid-line pattern overlay at 5% opacity
- **Padding:** `py-24`

**Large italic quote (font-display, text-white, text-3xl md:text-5xl):**
> "From your first sale in the market to your first audited account — Ploutos Page builds the financial road every business deserves to walk."

**Sub line:**
> Join 1,600+ Nigerian businesses on the Ploutos Page platform.

**CTAs (side-by-side, stack on mobile):**
- Primary (teal filled): `Get Started Today` → opens `ProductSelectorModal`
- Secondary (white outline): `Talk to Us` → `/contact`

---

### 6.2 PAGE — How It Works (`/how-it-works`)

#### 6.2.1 Intro
- **Section background:** `bg-cream`
- **Layout:** centered, max-w-4xl

**h1:**
> Built for where businesses actually are — not where we wish they were.

**Body:**
> Most financial tools assume you already have records. We start from zero. Whether you sell in a market, run a shop, or manage a growing business, Ploutos Page meets you exactly where you are.

#### 6.2.2 Path 1 — Market Traders & Distributors

**Background:** white. **h2:**
> You sell in a market. Your financial journey starts with an OWA agent.

**3 numbered steps (`PathStep.tsx` component):**

Number badge: large circle, teal background, white number, `font-display`, size `text-3xl`.

| # | Heading | Body |
|---|---|---|
| 1 | An OWA agent visits you — you don't need an app | Our trained agents come to your market stall or shop. They record your daily sales, inventory movement, expenses, and supplier transactions on the OWA platform. You don't need to do anything digital — that's the agent's job. |
| 2 | Your numbers build up every single day | Over 3 to 6 months, the OWA platform quietly builds your financial history. Revenue trends, inventory levels, profit and loss patterns. You can see your daily report on the OWA dashboard — simple numbers, big picture. |
| 3 | Your data unlocks financing and audit access | With 6+ months of OWA records, you qualify for zero-interest loan products. You can also request a fully audited financial statement through AuditMe — delivered in 7 days — accepted by banks, recognised for regulatory filings. |

**CTA (teal filled):** `Start with OWA by Pepcode →` `target="_blank"` to `https://owabypepcode.com.ng`

#### 6.2.3 Path 2 — Digital-Ready SMEs

**Background:** `bg-cream`. **h2:**
> You manage your own books. Pepcode makes it as simple as a phone.

3 numbered steps using `PathStep.tsx` with **gold** number badge:

| # | Heading | Body |
|---|---|---|
| 1 | Sign up to Pepcode and start recording immediately | Works on phone, tablet, or laptop. Create invoices, record expenses and purchases, manage your inventory, and track your customers — all from one clean dashboard. No accounting degree needed. |
| 2 | Issue NRS-compliant e-invoices — automatically | With Pepcode's e-invoicing integration (powered by Qucoon), every invoice you raise is automatically submitted to the Nigerian Revenue Service. Tax compliance happens in the background — without extra work from you. |
| 3 | When you need an audit, AuditMe is one click away | Ready to apply for a bank loan, attract an investor, or meet a CAC filing requirement? Upload your Pepcode financial records to AuditMe and receive a fully audited, IFRS-compliant financial statement in 7 days. |

**CTA (teal filled):** `Start on Pepcode Today →` `target="_blank"` to `https://pepcodeinc.com`

#### 6.2.4 AuditMe — Anchor section `#auditme`

**Background:** `bg-navy text-white`. **h2 (white, font-display):**
> Audited financial statements. In 7 days. For any business.

**Body:**
> Whether you came through OWA, Pepcode, or already have your own financial records — AuditMe delivers professional, auditor-signed financial statements without the traditional 3–6 month wait and five-figure accounting firm fees.

**Two-up card grid (2 cols desktop, 1 col mobile):**

Cards: `bg-navy-light border border-white/10 rounded-2xl p-8`

| Card Heading | Body |
|---|---|
| No financial records? | Upload your bank statements. Our AI converts them into a full Trial Balance, Ledger, and Financial Statements. A rated human auditor then reviews, signs off, and delivers your audited account in 7 days. |
| Already have financial records? | Upload your Trial Balance, Ledger, Asset Register, and supporting documents. Our internal team reviews your financials, assigns a rated auditor, and delivers the completed audited statement in 7 days. |

**CTA (purple filled, white text):** `Get Your Audit Started →` → `/contact?subject=AuditMe`

Caption below CTA, white/70: `Available to every business regardless of size or records held`

---

### 6.3 PAGE — Products (`/products`)

#### 6.3.1 Intro
- `bg-cream`, max-w-4xl, centered

**h1:**
> We didn't build three separate products. We built one journey in three stages.

**Body:**
> Every Ploutos Page product is designed to bring a business one step closer to financial visibility, compliance, and access to capital. Each product works independently — and works even better together.

#### 6.3.2 Product 1 — OWA by Pepcode (`ProductCard.tsx` component)

**Card style:** Large card, white bg, teal top-border `border-t-4 border-teal`, `rounded-2xl`, `shadow-lg`, padding `p-10`.

**Layout:** 2-col on desktop (logo + heading + description left, checklist right). Stack on mobile.

**Top of card:**
- Small badge: "STAGE 1" in teal, uppercase tracking-wider text-xs
- h2: `OWA by Pepcode` (font-display)
- Tagline (text-lg, ink-muted): `Bookkeeping for the open market — agent-led, offline-first, and built for traders.`

**Description:**
> OWA by Pepcode is a bookkeeping platform designed specifically for Nigeria's wholesalers, distributors, and market traders. Because most of these businesses have limited digital access, OWA uses an agent-led model — trained agents visit business owners, record daily transactions on their behalf, and ensure their financial data stays accurate and up to date.

**Checklist (7 items, each with teal `✓` from Lucide `Check`):**
- Agent records daily sales, inventory, expenses, and supplier transactions on your behalf
- Business owner sees a simple, visual daily report on the OWA dashboard
- Works offline — agents can capture data without internet connectivity
- Builds 3–6 months of structured financial records automatically
- Zero-interest loan access unlocked after 6+ months of OWA records
- Connects directly to AuditMe when you are ready for audited financial statements
- POS device deployment available for seamless transaction capture

**Meta lines (italic, ink-muted, small):**
- Website: `owabypepcode.com.ng` (linkified, opens new tab)
- **Who is this for?** Market women, open-market traders, wholesalers, distributors, kiosk owners — any business with daily cash transactions and limited digital infrastructure.
- **Next step after OWA:** → AuditMe for audited statements and loan-ready financials

**CTAs (button row):**
- Primary (teal filled): `Visit OWA by Pepcode →` → `target="_blank"` to `https://owabypepcode.com.ng`
- Secondary (teal outline): `Find an OWA Agent Near You` → WhatsApp deep link: `https://wa.me/2348024247865?text=Hi%2C%20I%27d%20like%20to%20find%20an%20OWA%20agent%20near%20me`

#### 6.3.3 Product 2 — Pepcode

**Card style:** Same as Product 1 but `border-t-4 border-gold`.

**Top:**
- Badge: "STAGE 2" in gold-dark
- h2: `Pepcode`
- Tagline: `The bookkeeping software built for SMEs who manage their own finances.`

**Description:**
> Pepcode is a full-featured bookkeeping platform for small and medium businesses that are ready to manage their own financial records. Simple enough for a business owner with no accounting background, and powerful enough to produce audit-ready financial statements — accessible from your phone, tablet, or laptop.

**Checklist (8 items, gold ✓):**
- Invoice creation and management — send professional invoices in seconds
- Expense and purchase recording with category tracking
- Inventory management — track stock levels, movements, and value
- E-invoicing integration: every invoice automatically submitted to NRS for tax compliance (powered by Qucoon)
- Financial reports: income summary, expense breakdown, profit and loss
- NRS Invoice Reference Number (IRN) and QR code on every validated invoice
- Export financial records directly to AuditMe when you need an audit
- Works on any device — phone, tablet, or laptop — no installation required

**Meta:**
- Website: `pepcodeinc.com`
- **Who is this for?** SME owners, freelancers, retailers, service businesses, startups — any business with basic digital literacy that wants to manage their own books.
- **Next step after Pepcode:** → AuditMe for audited financial statements in 7 days

**CTAs:**
- Primary (gold-dark filled): `Try Pepcode Free →` → `target="_blank"` to `https://pepcodeinc.com`
- Secondary (gold outline): `See How E-Invoicing Works` → `/how-it-works#path-2`

#### 6.3.4 Product 3 — AuditMe

**Card style:** Same shape, `border-t-4 border-purple`.

**Top:**
- Badge: "STAGE 3" in purple
- h2: `AuditMe`
- Tagline: `Audited financial statements for any business — in 7 days.`

**Description:**
> AuditMe is the audit and compliance engine at the end of the Ploutos Page journey. Whether you came through OWA, Pepcode, or already have your own financial records, AuditMe delivers IFRS-compliant, auditor-signed financial statements in 7 days — reviewed by a Ploutos Page internal team, signed off by a rated and qualified external auditor, and delivered as a PDF to your account.

**Checklist (8 items, purple ✓):**
- Upload bank statements only — AI converts them into Trial Balance, Ledger & Financial Statements
- Already have records — upload directly and skip AI processing
- CAC certificate and MEMART captured — legal details correctly on your audited statement
- Prior-year accounts? — Upload for comparative figures (IFRS requirement)
- Internal team reviews all AI-generated financials before auditor assignment
- Jobs assigned to rated external auditors — best performer, fastest turnaround assigned first
- Final admin vetting before audited account is released to you
- Delivered as a signed, stamped PDF — accepted by banks, regulators, and investors

**Meta:**
- Website: `AuditMe — available via ploutospage.com`
- Add-ons line: `Add-ons: Company Income Tax (CIT) filing · VAT filing · Future bookkeeping via Pepcode`
- **Who is this for?** Any business that needs audited financial statements — for loan applications, investor decks, regulatory compliance, CAC filings, or annual reporting.

**CTAs:**
- Primary (purple filled): `Get Audited in 7 Days →` → `/contact?subject=AuditMe`
- Secondary (purple outline): `See How AuditMe Works` → `/how-it-works#auditme`

---

### 6.4 PAGE — About (`/about`)

#### 6.4.1 Mission section
- `bg-cream`, max-w-4xl

**h1 (font-display):**
> We exist because too many businesses die for want of a number.

**Body (two paragraphs):**
> Ploutos Page Limited is a Lagos-based fintech and accounting solutions company. We provide financial management tools and services for Nigeria's MSMEs — from the market trader who has never kept a record, to the established business that needs an audited statement for a bank loan.

> Our mission is to make every business financially visible — by giving them the tools to capture their data, the platform to manage their finances, and the infrastructure to prove their performance to banks, regulators, and investors.

#### 6.4.2 The Founder's Story
- **Background:** `bg-navy text-white`
- **Layout:** 2-col on desktop (founder photo right, copy left), stack mobile

**Photo:** `/public/images/Mrs Peju.jpg`, rounded, `aspect-[4/5]`, `object-cover`, with subtle warm-tone overlay or border `border-2 border-teal/30`

**Eyebrow text (teal-light, uppercase, tracking-widest, text-sm):**
> This is personal.

**Large opening quote mark (svg or `text-teal`, `text-7xl`, `font-display`):** `"`

**Quote body (font-display italic, white, large):**
> Fifteen years ago, my mother ran a business in the open market. She worked hard every day and had loyal customers. But like many market entrepreneurs, she kept no structured financial records.
>
> When the business declined, there was no financial history to understand what went wrong. No books. No reports. No data to pass on. If proper records had existed, my sisters and I might have inherited and grown that business. Instead, it disappeared.

**Emphasis (font-sans bold, white, larger):**
> This experience is the reason we built Ploutos Page. Because businesses should not die simply because there was no financial data.

**Attribution (text-right, font-sans, text-teal-light):**
> — Olapeju A. Nwanganga, Founder & CEO

#### 6.4.3 The Problem We Solve
- `bg-cream`

**h2:**
> Africa's informal economy is not informal by choice.

**Body:**
> **Over 41.5 million MSMEs** operate in Nigeria. They employ over 59 million Nigerians — 76.5% of the national workforce — and contribute 49.8% of the country's GDP. The largest single category (42.3%) operates in wholesale and retail trade.

> Yet most of these businesses cannot:

**Bulleted list (teal ✗ icon, not ✓):**
- Prove their business performance to a bank or investor
- Access structured financing without audited financial records
- Comply with regulatory requirements that demand formal accounts
- Build a financial legacy to pass on to the next generation

**Body:**
> They are not financially invisible by choice. They are invisible because the financial systems that could serve them were never built with them in mind.

**Closing line (font-display, teal):**
> Ploutos Page is changing that.

#### 6.4.4 Our Vision
- `bg-white`, centered, max-w-4xl

**h2:**
> To become the financial operating system for Africa's market economy.

**Body:**
> Starting in Nigeria's open markets and expanding across African trade hubs — our goal is to help millions of businesses build financial records, access financing, operate sustainably, and build lasting legacies.

#### 6.4.5 The Team
- `bg-cream`

**h2:**
> The Team

**Founder card (single card, centered, max-w-2xl):**

```
[Mrs Peju.jpg, rounded-full, w-32 h-32]

Olapeju A. Nwanganga
Founder & CEO
ACA (ICAN), MBA — Lagos Business School, FMVA. Over a decade of cross-sector
experience in fintech, healthcare, and media. Entrepreneurship trainer at
FATE Foundation and Shecluded Hub.
```

**Second card (text only, no photo, smaller):**

```
Oyindamola Adebowale
Product Manager
Drives product strategy, roadmap execution, and feature development
across Pepcode, AuditMe, and OWA by Pepcode.
```

Use a placeholder initial-circle avatar (teal background, white "OA" letters) for Oyindamola — no photo.

**Board Members (small block below):**

Eyebrow: `Board Members` (uppercase, tracking-widest, ink-muted, text-sm)

Three small name tiles in a row (1-col mobile, 3-col desktop), each just a name in a card with subtle border:
- Precious Nwanganga
- Kenechukwu Egbue
- Daniel Hargley

---

### 6.5 PAGE — Traction (`/traction`)

#### 6.5.1 Key Metrics
- `bg-navy text-white`
- `py-24`

**h1 (font-display, white):**
> Real businesses. Real numbers. Real impact.

**Metrics grid (3-col desktop, 2-col tablet, 1-col mobile, 6 tiles total):**

Each tile: `bg-navy-light border border-white/10 rounded-2xl p-8`. Number in teal-light, font-display, `text-5xl md:text-6xl`. Label below in white/80, body size.

| Number (count-up) | Label |
|---|---|
| 1,600+ | Paying users across all products |
| 480+ | Audit reports processed through AuditMe |
| 385+ | Market businesses onboarded on OWA |
| ₦105M | Total revenue generated to date |
| ₦14M–25M | Monthly revenue range from AuditMe |
| 98% | Customer satisfaction rate |

For range "₦14M–25M": don't animate, render static.

#### 6.5.2 Business Model Overview
- `bg-cream`

**h2:**
> Multiple revenue streams. All growing.

**Table (proper `<table>` with semantic markup, styled with Tailwind):**

Header row: teal background, white text. Body rows: alternating cream / white. Borders: subtle ink/10.

| Product | Pricing | Revenue Streams |
|---|---|---|
| **OWA by Pepcode** | ₦10,000/month | Monthly subscription + POS commission (5%) + Loan disbursement commission (5%) + CAC registration (₦10,000) |
| **Pepcode** | ₦10,000/month + ₦4,000 e-invoicing add-on | Monthly SaaS subscription + E-invoicing add-on (70/30 split with Qucoon) |
| **AuditMe** | ₦25,000–₦250,000 per audit (dynamic pricing by revenue tier) | Per-audit unlock fees + CIT filing + VAT filing + PAYE + Bookkeeping subscriptions |

Make the table responsive — collapse to stacked cards under `md:` breakpoint (each row becomes a card with the product as the heading).

---

### 6.6 PAGE — Contact (`/contact`)

#### 6.6.1 Layout
- `bg-cream`, `py-20`
- Two-column on desktop: form left, contact details right
- Single column on mobile

#### 6.6.2 Heading section
**h1:**
> Let's talk.

**Body:**
> Whether you are a business owner who wants to get started, an investor exploring the Ploutos Page story, or a partner looking to collaborate — reach out and we will respond within 24 hours.

#### 6.6.3 Contact details panel (right column)

Use Lucide icons (`MapPin`, `Phone`, `Mail`, `Globe`), teal color.

| Icon | Label | Value |
|---|---|---|
| `MapPin` | Address | 8 Rock Drive, Lekki Phase One, Lagos, Nigeria |
| `Phone` | Phone | +234 8024247865 · +234 7035104346 |
| `Mail` | Email | support@pepcode.com · olapeju.n@ploutospage.com |
| `Globe` | Websites | ploutospage.com · pepcodeinc.com · owabypepcode.com.ng |

Phone numbers: `tel:` links. Emails: `mailto:` links. Websites: external links new tab.

#### 6.6.4 Contact Form (left column)

**Form integration: Web3Forms.**

```jsx
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="WEB3FORMS_ACCESS_KEY_HERE" />
  <input type="hidden" name="subject" value="New Ploutos Page Contact Form Submission" />
  <input type="hidden" name="redirect" value="https://ploutospage.com/contact?submitted=true" />
  {/* form fields */}
</form>
```

**Important:** `WEB3FORMS_ACCESS_KEY_HERE` is a placeholder. Add a clear comment in the file:
```jsx
{/* TODO: Replace WEB3FORMS_ACCESS_KEY_HERE with the real key from https://web3forms.com */}
```

**Fields:**
| Field name | Label | Type | Required |
|---|---|---|---|
| `name` | Full Name | text | yes |
| `email` | Email Address | email | yes |
| `phone` | Phone Number | tel | no |
| `inquiry_type` | I am a: | select | yes |
| `message` | Message | textarea | yes |

`inquiry_type` options: `Business Owner`, `Investor`, `Partner / Agency`, `Media`, `Other`

If URL query param `?subject=AuditMe` is present, pre-fill `inquiry_type=Business Owner` and prepend message with `[AuditMe Enquiry] `.

If URL query param `?submitted=true` is present, render a success banner above the form: green-tinted card with check icon and text "Thanks. We'll be in touch within 24 hours."

**Submit button:** teal filled, full width, `Send Message`, with hover state.

---

### 6.7 PAGE — 404 (`/*`)

- `bg-cream`, full-screen min height
- Centered content

**h1 (font-display, text-7xl):** `404`
**h2:** `This page took an unrecorded route.`
**Body:**
> Like a market sale without a receipt — it's not where we expected it to be. Let's get you back on the road.

**CTA:** `← Back to home` (teal filled) → `/`

---

## 7. GLOBAL COMPONENTS

### 7.1 Navigation (`Navigation.tsx` — rewrite)

#### 7.1.1 Structure
- Fixed top, full-width, `bg-white/80 backdrop-blur-md` when scrolled, `bg-transparent` when at top of page on dark hero pages (Homepage hero only)
- Logo left, links center, CTA right
- Mobile: hamburger right, logo left, slide-down panel

#### 7.1.2 Links (in order)
```
Home              → /
How It Works      → /how-it-works
Products          → /products
About Us          → /about
Traction          → /traction
Contact           → /contact
```

No dropdowns. Active link: teal underline (2px) with `transition`.

#### 7.1.3 Primary CTA (far right)
- Button text: `Get Started`
- Style: teal filled, rounded-full, `px-5 py-2`
- Action: `onClick={() => setProductSelectorOpen(true)}` — opens `ProductSelectorModal`

#### 7.1.4 Logo
Use existing `/BendingWaters-8.png` (verify it's still in `/public`). On dark backgrounds, add CSS filter `brightness-0 invert` to make it white. Set up a `isDarkContext` boolean — only true on `/` when scroll position < 80px.

### 7.2 ProductSelectorModal (`ProductSelectorModal.tsx` — NEW)

Triggered by the "Get Started" CTA in nav and by `Get Started Today` in Homepage footer banner.

**Style:** Centered modal, `bg-white rounded-2xl p-8 max-w-2xl`, backdrop `bg-navy/60 backdrop-blur-sm`. Esc key + backdrop click closes.

**Heading:** `Which best describes you?`
**Sub:** `Pick the one closest to your situation — we'll point you to the right product.`

**Three cards (vertical stack on mobile, 3-col on `md+`):**

| Card | Heading | Sub | Action |
|---|---|---|---|
| 1 (teal border-top) | I sell in a market or trade goods | Daily transactions, limited digital access | `window.open('https://owabypepcode.com.ng', '_blank')` then close modal |
| 2 (gold border-top) | I run an SME or service business | I want to manage my own books | `window.open('https://pepcodeinc.com', '_blank')` then close modal |
| 3 (purple border-top) | I just need audited financials | For loan, investor, or compliance | `navigate('/contact?subject=AuditMe')` then close modal |

Below: `None of these fit? → Talk to us` link to `/contact`.

### 7.3 Footer (`Footer.tsx` — rewrite)

#### 7.3.1 Structure
- `bg-navy text-white`, `py-16`
- 4 columns on desktop, single stacked column on mobile
- Teal divider line (1px, opacity 30%) before bottom bar

#### 7.3.2 Columns

**Col 1 (wider, span 2):**
- Logo (white version)
- Tagline (italic, font-display): `The financial operating system for Africa's market economy.`

**Col 2 — Products:**
- OWA by Pepcode → `https://owabypepcode.com.ng` (new tab)
- Pepcode → `https://pepcodeinc.com` (new tab)
- AuditMe → `/how-it-works#auditme`

**Col 3 — Company:**
- About Us → `/about`
- How It Works → `/how-it-works`
- Traction → `/traction`
- Contact → `/contact`

**Col 4 — Connect:**
- LinkedIn → `https://www.linkedin.com/company/ploutos-page-limited/`
- Instagram → `https://www.instagram.com/ploutospage/`
- Twitter/X → `https://twitter.com/ploutospage` *(if real, otherwise omit)*
- WhatsApp → `https://wa.me/2348024247865`

All external links open new tab. Links color: white/70 default, teal-light on hover.

**Bottom bar:** flex justify-between, smaller text, `border-t border-teal/30 pt-6 mt-12`:
- Left: `© 2026 Ploutos Page Limited. All rights reserved.`
- Right: `Privacy Policy` · `Terms of Use` (both link to `/contact` for now since pages don't exist; tag with `TODO: link to real pages when client provides`)

**Do NOT** include a `Careers` link.
**Do NOT** include a `Blog` link.

### 7.4 WhatsAppFloat (`WhatsAppFloat.tsx` — NEW)

Fixed bottom-right on **all pages**, including 404.

```jsx
<a
  href="https://wa.me/2348024247865?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Ploutos%20Page"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-lg flex items-center justify-center transition"
  aria-label="Chat with us on WhatsApp"
>
  <MessageCircle className="w-7 h-7 text-white" />
</a>
```

Use Lucide `MessageCircle` icon. Subtle pulse animation on idle (`animate-pulse` Tailwind utility, but slowed via custom keyframe — every 4 seconds).

---

## 8. ASSET MANIFEST

### 8.1 Required new images (AI-generated via Nano Banana)
| Path | Content | Aspect | Format |
|---|---|---|---|
| `/public/images/hero-market.webp` + `.jpg` | Wide cinematic Nigerian market scene | 16:9 (1920x1080) | WebP + JPG fallback |
| `/public/images/hero-naira-hands.webp` + `.jpg` | Hands counting naira (variant, optional reuse) | 3:2 | WebP + JPG |
| `/public/images/og-share.jpg` | Open Graph share card | 1200x630 | JPG |

**Nano Banana prompts:** documented separately — Hafeedh has these.

### 8.2 Preserved images
- `/public/images/Mrs Peju.jpg` — founder photo on About page

### 8.3 Deleted images (clean up `/public/images/`)
- All non-founder team photos (Oyinda, Evelyn, Adebukola, Hafeedh, Emmanuel)
- All `CL*` client logos (no longer used)
- All `IN*` investor logos (no longer used)
- All `pepcode logo.webp`, `auditme.webp`, `Owa Logo*` — replaced by text branding in cards

### 8.4 Favicon
- Generate simple SVG "P" mark, teal background, white letter, rounded square
- Save as `/public/favicon.svg`
- Update `index.html` `<link rel="icon" ...>`

---

## 9. SEO, META, & SCHEMA

### 9.1 Per-page meta tags

Use `react-helmet-async` if available; otherwise hardcode `<title>` and meta tags directly in each page component using a small `usePageMeta` custom hook that sets `document.title` and meta tags on mount.

| Path | `<title>` | Meta description |
|---|---|---|
| `/` | Ploutos Page — Financial OS for African Businesses | Bookkeeping, invoicing, and audited financial statements for Nigeria's SMEs and market traders. Three products. One financial journey. Start free today. |
| `/how-it-works` | How It Works — OWA, Pepcode & AuditMe \| Ploutos Page | See the complete financial journey — from your first market sale to your audited financial statement in 7 days. |
| `/products` | OWA by Pepcode · Pepcode · AuditMe \| Ploutos Page | Discover three products that take any business from zero financial records to audited statements in 7 days. |
| `/about` | About Ploutos Page — Our Mission & Story | Learn why Ploutos Page was built — and how we're turning Nigeria's market businesses into financially visible enterprises. |
| `/traction` | Traction — 1,600+ Users, ₦105M Revenue \| Ploutos Page | The real numbers behind Ploutos Page: 1,600+ paying users, 480+ audits processed, 98% customer satisfaction. |
| `/contact` | Contact Ploutos Page Limited \| Get Started | Reach the Ploutos Page team — for businesses, investors, and partners. |

### 9.2 OG / Twitter tags (in `index.html` as defaults, overridable per page)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Ploutos Page" />
<meta property="og:image" content="https://ploutospage.com/images/og-share.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://ploutospage.com/images/og-share.jpg" />
```

### 9.3 Organization JSON-LD (in `index.html` head)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ploutos Page Limited",
  "url": "https://ploutospage.com",
  "logo": "https://ploutospage.com/BendingWaters-8.png",
  "description": "Financial operating system for African businesses. Bookkeeping, invoicing, and audited financial statements.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8 Rock Drive, Lekki Phase One",
    "addressLocality": "Lagos",
    "addressCountry": "NG"
  },
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+234-802-424-7865",
    "contactType": "customer service",
    "email": "support@pepcode.com"
  }],
  "sameAs": [
    "https://www.linkedin.com/company/ploutos-page-limited/",
    "https://www.instagram.com/ploutospage/",
    "https://pepcodeinc.com",
    "https://owabypepcode.com.ng"
  ]
}
</script>
```

### 9.4 robots.txt (`/public/robots.txt`)

```
User-agent: *
Allow: /
Disallow: /blog
Sitemap: https://ploutospage.com/sitemap.xml
```

### 9.5 sitemap.xml (`/public/sitemap.xml`)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://ploutospage.com/</loc><priority>1.0</priority></url>
  <url><loc>https://ploutospage.com/how-it-works</loc><priority>0.9</priority></url>
  <url><loc>https://ploutospage.com/products</loc><priority>0.9</priority></url>
  <url><loc>https://ploutospage.com/about</loc><priority>0.8</priority></url>
  <url><loc>https://ploutospage.com/traction</loc><priority>0.7</priority></url>
  <url><loc>https://ploutospage.com/contact</loc><priority>0.8</priority></url>
</urlset>
```

---

## 10. ACCESSIBILITY

- Skip link at top of `<body>`: `<a href="#main" className="sr-only focus:not-sr-only ...">Skip to content</a>`
- Each page wraps content in `<main id="main">`
- All images have `alt` text (decorative: `alt=""`)
- All interactive elements keyboard-accessible
- Color contrast: verify teal-on-white (#0D9488 on #FFFFFF) and white-on-navy combinations meet WCAG AA — they do
- Modal traps focus when open, restores on close
- All buttons have proper `aria-label` when icon-only

---

## 11. PERFORMANCE

- Hero image: `<link rel="preload" as="image" href="/images/hero-market.webp" fetchpriority="high">` in `index.html`
- All non-hero images: `loading="lazy"` + explicit `width`/`height` attributes (prevents CLS)
- No image larger than 250KB after compression
- Lazy-load non-homepage routes:

```tsx
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Traction = lazy(() => import('./pages/Traction'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));
```

Wrap `<Routes>` in `<Suspense fallback={<PageLoader />}>` where `PageLoader` is a minimal teal-spinner component.

---

## 12. ACCEPTANCE CRITERIA

Build is complete when ALL of the following are true:

1. `npm install` runs clean, no warnings
2. `npm run dev` boots without errors
3. `npm run build` produces a clean production bundle
4. `npm run lint` passes
5. All 7 active routes (Home, How It Works, Products, About, Traction, Contact, Blog) render without console errors
6. 404 page renders for unknown routes
7. All 5 deprecated routes (`/about-us`, `/tax-services`, `/bookkeeping-services`, `/inventory-management`, `/careers`) redirect to `/`
8. ProductSelectorModal opens from nav "Get Started" CTA AND from Homepage footer banner CTA — both trigger same modal
9. Contact form has Web3Forms `action` and a clear `TODO` comment for the access key
10. WhatsApp float button appears on every page (bottom-right)
11. Founder photo (`Mrs Peju.jpg`) renders on About page
12. No references to Three.js, LavaLamp, or any deleted component remain in the codebase
13. Tailwind config has only the new color tokens — old tokens removed
14. Fraunces + Inter both load and render correctly on h1/h2 vs body
15. Stats animate count-up when scrolled into view (Homepage + Traction)
16. Responsive at 375px (mobile), 768px (tablet), 1440px (desktop) — no horizontal scroll, no overlapping text
17. All copy on the site matches the brief verbatim (no paraphrasing)
18. SEO meta tags set per page per §9.1
19. JSON-LD Organization schema present in `index.html`
20. `robots.txt` and `sitemap.xml` exist in `/public`
21. No remaining `console.log` in production code (test code OK)
22. No broken external links — verify each `target="_blank"` URL is correctly formed

---

## 13. THINGS NOT TO DO (FAILURE MODES)

- **Do not** invent additional copy or "improve" the brief's wording — use exact text
- **Do not** add a Careers page or any nav/footer link to careers
- **Do not** add an `/about-us` route — it's `/about` only (with a redirect from `/about-us`)
- **Do not** keep LavaLamp, Three.js, or any abstract animation from the old build
- **Do not** add stock cookie banners, GDPR popups, or analytics scripts
- **Do not** keep the old `custom-blue` token or any old color tokens
- **Do not** restore deleted team photos
- **Do not** add a separate "Privacy Policy" or "Terms of Use" page — link those footer items to `/contact` with a TODO comment
- **Do not** use any font other than Fraunces (display) and Inter (sans)

---

## 14. FINAL NOTES

- This PRD is the source of truth. The original brief (`PloutosPage_Website_Content_V1.docx`) is the copy reference but contains design suggestions you can override per this PRD.
- The Web3Forms access key is the only post-build manual step for the client. Surface this prominently in commit messages.
- When in doubt about a visual decision: **photographic, warm, dignified, simple**. Not abstract, not techy, not "modern fintech."

END OF PRD.
