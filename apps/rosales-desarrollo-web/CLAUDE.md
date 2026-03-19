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
