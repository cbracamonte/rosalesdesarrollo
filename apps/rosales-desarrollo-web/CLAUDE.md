# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Rosales Desarrollo** — website for a real estate development and construction company. Tagline: "Transformamos espacios, elevamos vidas".

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Styling:** Tailwind CSS v4 + tw-animate-css
- **Utilities:** clsx + tailwind-merge (via `cn()` in `src/lib/utils.ts`), class-variance-authority
- **Icons:** lucide-react
- **Content:** MDX (@next/mdx)
- **SEO:** next-sitemap, schema-dts, metadata helper in `src/lib/seo.ts`
- **UI:** @base-ui/react, shadcn
- **Validation:** zod v4

## Commands

```bash
pnpm dev             # Start dev server with Turbopack
pnpm build           # Production build
pnpm start           # Start production server
pnpm lint            # ESLint
```

Sitemap is auto-generated on `postbuild` via next-sitemap. Config in `next-sitemap.config.js`.

## Project Structure

```
src/
├── app/             # Next.js App Router pages and layouts
│   ├── layout.tsx   # Root layout (fonts, metadata, global styles)
│   ├── page.tsx     # Home page
│   └── globals.css  # Tailwind theme with brand tokens
├── components/      # React components
│   └── ui/          # Base UI components
├── lib/
│   ├── utils.ts     # cn() helper
│   └── seo.ts       # createMetadata() helper
└── mdx-components.tsx
public/
├── logotipo.svg     # Full logo (550x410px)
└── isotipo.svg      # Icon-only (155x177px)
```

## Brand Assets

- `public/logotipo.svg` — Full logo with text. Use in headers, presentations.
- `public/isotipo.svg` — Icon-only symbol. Use as favicon, tight spaces.
- `BRAND_GUIDE.md` — Complete visual identity reference.

## Brand Colors

| Role | Hex | Usage |
|------|-----|-------|
| Azul Noche (Fondo Web) | `#1E2129` | Main web background, hero sections (radial gradient to `#141720`) |
| Slate Oscuro | `#2A2D37` | Secondary dark backgrounds, footer, dark cards |
| Gris Carbón | `#3B3E44` | Main text on light backgrounds |
| Gris Medio | `#9DA2A8` | Secondary backgrounds, cards, dividers |
| Plata (Logo) | `#C0C5CB` | Logo, icons, highlighted elements |
| Blanco | `#FFFFFF` | Light backgrounds, text on dark |

## Typography

- **Headings:** Poppins Bold (700)
- **Body:** Montserrat Regular (400, 16px)
- **Taglines:** Poppins Medium (500, 18-20px)

## Tailwind Brand Tokens

Brand colors are available as `brand-*` classes (e.g., `bg-brand-night`, `text-brand-silver`). Fonts: `font-heading` (Poppins), `font-body` (Montserrat). Defined in `src/app/globals.css` under `@theme`.

## Design Tone

Professional, modern, elegant dark aesthetic targeting real estate/construction. WCAG AA/AAA verified. Reference `BRAND_GUIDE.md` for spacing, shadows, gradients, and logo usage rules.

## React 19 Best Practices

Guidelines for component development, optimized for this static real estate site on Next.js 16 App Router.

### Component Architecture
- **Functional components only** — no class components
- **Server Components by default** — pages and layouts should be Server Components
- **Client Components (`"use client"`)** only when interactivity is required (event handlers, hooks with browser state)
- **Single responsibility** — keep components small and focused on one concern

### State Management
- Prefer local state (`useState`, `useReducer`) over global state
- Avoid prop drilling through proper component composition and children patterns
- For a static site, most components should need no state at all

### Hooks
- Avoid `useEffect` for derived/computed values — compute inline or with `useMemo`
- No `useEffect` for data transformations that can run during render
- Follow Rules of Hooks strictly

### Performance
- Avoid unnecessary re-renders — lift state only as high as needed
- Use `React.memo`, `useMemo`, `useCallback` only when profiling shows a need, not preemptively
- Use `next/image` for all images (automatic optimization, lazy loading)
- Leverage static generation (SSG) — avoid client-side data fetching where possible

### File Organization
- Organize components by feature/section: `components/home/`, `components/properties/`, `components/contact/`
- Shared UI primitives live in `components/ui/`
- Co-locate component-specific types and utilities with the component

### Accessibility
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- Add ARIA attributes only when semantic HTML is insufficient
- Ensure keyboard navigability and visible focus states
- Maintain WCAG AA contrast ratios (already enforced by brand palette)

### Reusability & Clean Code
- Extract repeated UI patterns into shared components in `components/ui/`
- Use clear, descriptive naming (PascalCase for components, camelCase for props/hooks)
- Avoid deeply nested JSX — extract sub-components when nesting exceeds 3-4 levels
- No logic duplication — share through custom hooks or utility functions

## Next.js 16 Best Practices

Conventions for the App Router, rendering, SEO, and performance on this static site.

### Rendering Strategy
- **SSG by default** — all pages are statically generated at build time
- No `dynamic = 'force-dynamic'` or `cache: 'no-store'` unless explicitly justified
- Use `generateStaticParams` for all dynamic routes (e.g., `[slug]`)
- No client-side data fetching (SWR, React Query, `useEffect` + `fetch`) for static content

### App Router Conventions
- Root `layout.tsx` contains shared Header and Footer
- Routes organized by business domain: `propiedades/`, `nosotros/`, `contacto/`
- Nested `layout.tsx` only when a route group needs distinct shared UI (e.g., sidebar)
- `not-found.tsx` and `error.tsx` at app root for error handling

### SEO & Metadata
- Every page exports `metadata` via `createMetadata()` from `src/lib/seo.ts`
- Each page MUST have unique `title` and `description`
- `openGraph` and `twitter` fields are included automatically by `createMetadata()`
- Every page has exactly one `<h1>`; heading levels are sequential (no skipping)

### Performance
- All images use `next/image` with explicit `width`, `height`, and `alt`
- Above-the-fold images use `priority`; below-fold images use default lazy loading
- Server Components for all non-interactive content; `"use client"` on smallest boundary
- All pages must be compatible with static export (`output: 'export'`)
- Target LCP < 2.5s on marketing pages

## SEO Best Practices

Guidelines for metadata, content, structured data, and indexing.

### Metadata
- Use `createMetadata()` from `src/lib/seo.ts` for all page metadata
- Always pass `canonical` path to avoid duplicate content issues
- Title pattern: `{Descriptive Title} | Rosales Desarrollo` — include location keywords where relevant
- Descriptions must be 120–160 characters, keyword-rich, and compelling for click-through
- Use `ogImage` parameter when a page has a custom social sharing image

### Structured Data
- JSON-LD generators in `src/lib/structured-data.ts` — use `schema-dts` types for safety
- `JsonLd` component in `src/components/seo/JsonLd.tsx` renders `<script type="application/ld+json">`
- Organization schema (`RealEstateAgent`) is in root layout — appears on every page
- Property pages must include `RealEstateListing` structured data matching visible content

### Content
- Every page must have substantive, indexable content — no thin pages (heading + tagline only)
- Include primary keywords naturally; never keyword-stuff
- Use descriptive anchor text for internal links (not "click here" or "ver más")
- Each page links contextually to related pages (properties → contact, home → properties)

### Indexing
- Sitemap priorities: home 1.0/daily, properties 0.9/weekly, static pages 0.6/monthly
- All public pages: `robots: { index: true, follow: true }`
- `next-sitemap.config.js` handles sitemap.xml and robots.txt generation
