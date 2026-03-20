# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Garage Goat is a marketing website for a garage door repair company (Cypress, TX area). The codebase was generated from **Figma Make** — the package is `@figma/my-make-file`. The original Figma design is at `figma.com/design/X32YdgfI93zzOhRC3iFVU2/Garage-Goat`.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build

No test runner or linter is configured.

## Tech Stack

- **React 18** + **TypeScript** + **Vite 6**
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin — not PostCSS)
- **React Router v7** (`react-router` / `react-router-dom`) with `BrowserRouter`
- **Radix UI** primitives (shadcn/ui-style wrappers in `src/app/components/ui/`)
- **lucide-react** for icons
- `cn()` utility from `src/app/components/ui/utils.ts` (clsx + tailwind-merge)

## Architecture

**Entry:** `src/main.tsx` → `src/app/App.tsx` (router + all routes)

**Routing:** All routes are explicit and flat (no nested dynamic segments). Service, service-area, and offer pages use SEO-friendly slugs at the root level (e.g., `/garage-door-repair`, `/garage-door-repair-cypress-tx`). The `slug` prop is passed directly to detail page components.

**Layout:** `src/app/components/layout/Layout.tsx` wraps all pages via `<Outlet />`. Header has three responsive breakpoints: xl (full mega-dropdown nav), lg (condensed dropdown), and mobile (slide-down menu).

**Data layer:** All content lives in `src/data/cms.ts` as static TypeScript arrays/objects — there is no backend or CMS. Types: `Service`, `ServiceArea`, `Review`, `Offer`, `BlogPost`. Cross-reference helpers (`getRelatedServices`, `getCrossReferences`, etc.) link entities by ID.

**Shared components:**
- `src/app/components/RelatedContent.tsx` — reusable cross-reference cards/sections used across detail pages
- `src/app/components/StarAccent.tsx` — brand accent components (StarDivider, TripleStarDivider, StarBullet, etc.)
- `src/app/components/Breadcrumbs.tsx`
- `src/app/components/figma/ImageWithFallback.tsx` — image component with error fallback

**Pages:** `src/app/pages/` — each page is a standalone component. Detail pages (`ServiceDetail`, `ServiceAreaDetail`, `OfferDetail`, `BlogDetail`) accept a `slug` prop and look up data from `cms.ts`.

## Styling

**Fonts:** Outfit (headings, `--font-heading`) and Inter (body, `--font-body`), loaded from Google Fonts in `src/styles/fonts.css`.

**Brand colors** are defined as Tailwind theme tokens in `src/styles/theme.css` under `@theme inline`. Use `goat-*` prefixed classes:
- Navy palette: `goat-navy-deep`, `goat-navy-dark`, `goat-navy`, `goat-navy-light`
- Red: `goat-red`, `goat-red-dark`, `goat-red-light`
- Teal (CTA accent): `goat-teal`, `goat-teal-dark`
- Ice/cream/gold/silver variants

**Custom CSS utilities** (defined in `theme.css` `@layer base`):
- `.noise-overlay` / `.noise-overlay-light` / `.noise-overlay-strong` — gritty texture overlays
- `.ribbon-banner` — red banner ribbon shape
- `.diagonal-stripes` / `.diagonal-stripes-bold` — truck-wrap-inspired patterns
- `.shield-badge` — logo-inspired shield clip-path
- `.sunburst` / `.sunburst-bright` — conic gradient ray pattern
- `.gradient-divider` — tri-color gradient line
- `.star-divider`, `.accent-underline`, `.grit-card` — decorative accents

**Typography** uses fluid `clamp()` values. Headings are uppercase with `var(--font-heading)`.

## Figma-Specific Conventions

- Images from Figma are imported as `figma:asset/<hash>.png` (stored in `src/assets/`)
- The Vite config includes React and Tailwind plugins marked as required for Figma Make — do not remove them
- `assetsInclude` in Vite config supports raw SVG and CSV imports; never add `.css`, `.tsx`, or `.ts`
- Path alias: `@` maps to `./src`
