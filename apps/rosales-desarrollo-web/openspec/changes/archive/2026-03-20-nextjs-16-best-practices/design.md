## Context

Rosales Desarrollo is a static real estate website built on Next.js 16 (App Router) with React 19. The current codebase has a single root layout and home page, both already using Server Components and `next/image`. A `createMetadata()` helper exists in `src/lib/seo.ts` providing centralized SEO defaults. The site uses Tailwind CSS v4 with brand tokens and Google Fonts (Poppins + Montserrat).

As the site grows to include property listings, about, and contact pages, formalized Next.js 16 conventions are needed to ensure consistent SSG rendering, SEO metadata, and minimal client-side JavaScript across all routes.

## Goals / Non-Goals

**Goals:**
- Establish SSG as the default rendering strategy for all pages
- Define clear conventions for Server vs Client Components
- Standardize Metadata API usage so every page has unique, SEO-optimized metadata
- Codify App Router file conventions (layouts, error boundaries, route organization)
- Ensure all images use `next/image` with proper optimization
- Minimize client-side JavaScript to optimize Core Web Vitals (especially LCP)

**Non-Goals:**
- Implementing ISR or dynamic server-side rendering (not needed for a static marketing site)
- Adding a CMS or external data source at this stage
- Internationalization (i18n) beyond the current `es` locale
- E-commerce or transactional features
- Client-side state management libraries (Redux, Zustand, etc.)

## Decisions

### 1. SSG-first with no runtime data fetching

**Decision:** All pages SHALL be statically generated at build time. No `fetch()` with `cache: 'no-store'` or `dynamic = 'force-dynamic'`.

**Rationale:** This is a marketing/branding site with content known at build time. SSG delivers the fastest possible load times and best SEO crawlability. If a future page needs dynamic data, it can opt in explicitly via `generateStaticParams` or ISR — but the default is fully static.

**Alternative considered:** ISR with revalidation — rejected because content changes are infrequent and a full rebuild is acceptable.

### 2. Server Components by default, Client Components only for interactivity

**Decision:** Components SHALL be Server Components unless they require browser APIs, event handlers, or React hooks that depend on client state (`useState`, `useEffect`, etc.).

**Rationale:** Server Components send zero JavaScript to the client, reducing bundle size. For a static site, most components (headers, footers, cards, text sections) have no interactivity and benefit from being Server Components.

**Boundary rule:** The `"use client"` directive SHALL be placed on the smallest possible component — never on a page or layout.

### 3. Metadata API via `createMetadata()` helper

**Decision:** Every page SHALL export `metadata` using the existing `createMetadata()` helper from `src/lib/seo.ts`, passing page-specific overrides for `title`, `description`, `openGraph`, and `twitter`.

**Rationale:** Centralizes SEO defaults (site name, base URL, robots) while allowing per-page customization. Already implemented in `src/app/layout.tsx` — extend the pattern to all new pages.

**Alternative considered:** Per-page raw `Metadata` objects — rejected because it leads to duplication and inconsistent defaults.

### 4. Route organization by domain

**Decision:** Routes SHALL be organized by business domain under `src/app/`:
```
src/app/
├── layout.tsx          # Root layout (header + footer)
├── page.tsx            # Home
├── propiedades/        # Property listings
│   ├── page.tsx
│   └── [slug]/page.tsx
├── nosotros/page.tsx   # About
├── contacto/page.tsx   # Contact
├── not-found.tsx       # 404
└── error.tsx           # Error boundary
```

**Rationale:** Mirrors the site's information architecture. Spanish route names align with the target audience (es_MX).

### 5. Shared layouts for header/footer

**Decision:** The root `layout.tsx` SHALL contain the site-wide header and footer. Nested layouts SHALL be used only if a section needs distinct shared UI (e.g., a sidebar in properties).

**Rationale:** Avoids duplicating navigation across pages and ensures consistent structure. Nested layouts should be added only when genuinely needed.

### 6. Image optimization with `next/image`

**Decision:** All images SHALL use the `next/image` component. Hero/above-the-fold images use `priority`; all others use default lazy loading. SVG logos may use `<Image>` or inline `<svg>` depending on context.

**Rationale:** `next/image` provides automatic format conversion (WebP/AVIF), responsive sizing, and lazy loading — critical for LCP optimization.

## Risks / Trade-offs

- **[Static-only constraint]** → Pages requiring user-specific content (e.g., contact form confirmation) need a Client Component boundary. Mitigation: isolate interactive parts into small Client Components; keep the page itself as a Server Component.
- **[Build time grows with pages]** → As property listings increase, build time scales linearly. Mitigation: acceptable for a marketing site with <100 pages. If it grows beyond that, consider ISR.
- **[Spanish route names]** → Harder to change later if internationalization is needed. Mitigation: accepted trade-off — matches current business requirement (es_MX only). Redirect mapping can be added later if needed.
- **[No client-side navigation state]** → Removing client-side data fetching means no SWR/React Query patterns. Mitigation: not needed for static content. Interactive features (contact forms) use Server Actions or minimal client logic.
