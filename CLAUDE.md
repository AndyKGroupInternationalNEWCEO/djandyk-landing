# andyk-landing — Project Init

## Overview
Corporate landing page for Andy'K Group International LTD.
Static marketing site with multi-language support, pricing, roadmap, and contact form.

## Tech Stack
- **Framework**: Next.js 16.1.6 (App Router, standalone output)
- **React**: 19.2.3
- **Styling**: Tailwind CSS v4
- **Languages**: TypeScript
- **Deployment**: Vercel (`vercel --prod` to deploy to production)

## Project Structure
```
src/
├── app/
│   ├── page.tsx                    # Main landing page (assembles all sections)
│   ├── layout.tsx                  # Root layout (fonts, metadata, providers)
│   ├── globals.css                 # Global styles + Tailwind
│   ├── company-information/        # Legal: company info page
│   ├── cookies-policy/             # Legal: cookies policy page
│   ├── disclaimer/                 # Legal: disclaimer page
│   ├── privacy-policy/             # Legal: privacy policy page
│   └── terms-and-conditions/       # Legal: T&C page
├── components/
│   ├── BackgroundGrid.tsx          # Decorative grid background
│   ├── CompanyLogo.tsx             # Logo component
│   ├── ContactForm.tsx             # Contact form with validation
│   ├── CookieBanner.tsx            # GDPR cookie consent banner
│   ├── CtaSection.tsx              # Call-to-action section
│   ├── FaqSection.tsx              # FAQ accordion section
│   ├── FeatureBlock.tsx            # Feature display block
│   ├── Footer.tsx                  # Site footer
│   ├── Hero.tsx                    # Hero/banner section
│   ├── IntegrationsSection.tsx     # A.D.A.M. & E.V.A. integration showcase
│   ├── LogoBar.tsx                 # Logo bar component
│   ├── LovedBySection.tsx          # Testimonial quote
│   ├── MockAgentPanel.tsx          # UI mock: agent panel
│   ├── MockContextStudio.tsx       # UI mock: context studio
│   ├── MockDashboard.tsx           # UI mock: dashboard
│   ├── MockNotebook.tsx            # UI mock: notebook
│   ├── MockSlack.tsx               # UI mock: slack-style UI
│   ├── Navbar.tsx                  # Navigation bar (with services dropdown)
│   ├── PricingSection.tsx          # Pricing tables (B2B, B2G, Tech tabs)
│   ├── RoadmapSection.tsx          # 6-step process roadmap (uses translations)
│   ├── SectionHeader.tsx           # Reusable section header
│   ├── TabSwitcher.tsx             # Tab switching component
│   ├── TestimonialPair.tsx         # Founder/team testimonials
│   ├── TopBanner.tsx               # Top announcement banner
│   └── TronDivider.tsx             # Decorative divider
├── context/
│   ├── CurrencyContext.tsx         # Currency conversion context
│   └── LanguageContext.tsx         # Multi-language context provider
└── lib/
    ├── data.ts                     # All static data (company info, founders, pricing, roadmap, nav)
    ├── translations.ts             # All UI text in 6 languages (en, es, sk, nl, pt, de) — ~1770 lines
    ├── currency.ts                 # Currency conversion utilities
    └── indexnow.ts                 # IndexNow SEO utility
```

## Key Data Locations (what to edit for common changes)

| Change needed | File(s) to edit |
|---|---|
| Company info, address, socials | `src/lib/data.ts` → `COMPANY` |
| Services list | `src/lib/data.ts` → `SERVICES` |
| Founder/team bios & photos | `src/lib/data.ts` → `FOUNDERS` |
| Roadmap steps (data) | `src/lib/data.ts` → `ADAM_ROADMAP` + `ADAM_SHOWCASE` |
| Roadmap steps (translations) | `src/lib/translations.ts` → `roadmap.steps` (×6 languages) |
| Roadmap step icons | `src/components/RoadmapSection.tsx` → `STEP_ICONS` array (position-matched) |
| Pricing plans (B2B, B2G, Tech) | `src/lib/data.ts` → `PRICING_B2B`, `PRICING_B2G`, `PRICING_TECH` |
| Navigation links/dropdowns | `src/lib/data.ts` → `NAV_LINKS`, `NAV_SERVICES` |
| Footer links | `src/lib/data.ts` → `FOOTER_LINKS` |
| Stats (hero section) | `src/lib/data.ts` → `STATS` |
| A.D.A.M./E.V.A. feature bullets | `src/lib/data.ts` → `ADAM_FEATURES`, `EVA_FEATURES` |
| Any UI text (buttons, headings) | `src/lib/translations.ts` (update ALL 6 language blocks) |
| Legal pages content | `src/app/{page-name}/page.tsx` |

## Critical Rules
- **Translations**: When changing any user-facing text in the roadmap or UI sections, update ALL 6 languages in `translations.ts` (en, es, sk, nl, pt, de)
- **Roadmap icons**: The `STEP_ICONS` array in `RoadmapSection.tsx` is position-matched to the steps array. If you reorder steps, reorder the icons too
- **Data vs Translations**: `data.ts` has the canonical data. `translations.ts` has the display text per language. Both must stay in sync for roadmap steps
- **Identical sections**: The roadmap section must be identical between this landing page and the A.D.A.M. app (`/root/adam/`). Always update both

## Build & Deploy
```bash
npm run build      # Build check
vercel --prod       # Deploy to production
```
