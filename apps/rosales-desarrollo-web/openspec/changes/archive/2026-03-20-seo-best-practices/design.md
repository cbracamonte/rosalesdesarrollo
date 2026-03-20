## Context

Rosales Desarrollo is a statically generated real estate site on Next.js 16. Basic SEO infrastructure is in place: `createMetadata()` provides default openGraph/twitter metadata, `next-sitemap` generates sitemap.xml and robots.txt, and all pages are Server Components rendered at build time.

However, the site lacks structured data (Schema.org), an internal linking strategy, keyword-optimized content guidelines, and advanced indexing controls. For a real estate business competing for organic search traffic in the Mexican market, these are essential for rich snippets, crawl efficiency, and ranking.

## Goals / Non-Goals

**Goals:**
- Implement JSON-LD structured data for the organization and property listings
- Enhance metadata to support keyword-rich titles with location context and canonical URLs
- Establish internal linking patterns across all key pages
- Define content depth and keyword guidelines for all pages
- Optimize sitemap with per-route priority levels
- Guarantee mobile-first responsive rendering

**Non-Goals:**
- Paid search (SEM/PPC) integration
- Analytics or tracking implementation (Google Analytics, Tag Manager)
- Link building or off-site SEO strategies
- Multi-language SEO (only es_MX)
- Dynamic sitemap generation from a CMS or database

## Decisions

### 1. JSON-LD structured data via a helper library in `src/lib/structured-data.ts`

**Decision:** Create typed JSON-LD generator functions using `schema-dts` (already installed). Each function returns a serializable object for a specific Schema.org type. Inject into pages via a `<script type="application/ld+json">` rendered in the page component.

**Rationale:** JSON-LD is Google's recommended structured data format. Using `schema-dts` provides TypeScript safety. Centralizing generators in one file avoids duplication and ensures consistent schema across pages.

**Types implemented:**
- `RealEstateAgent` — organization-level data (name, URL, logo, contact)
- `RealEstateListing` — per-property data (name, description, location, price, images)
- `WebPage` — generic page data with breadcrumbs

**Alternative considered:** Microdata attributes inline — rejected because JSON-LD is easier to maintain, doesn't pollute markup, and is preferred by Google.

### 2. Enhanced `createMetadata()` with canonical URLs and keyword patterns

**Decision:** Extend `createMetadata()` to automatically generate canonical URLs from the page path and support an optional `keywords` field. Title format: `{Keyword-rich title} | {Location} | Rosales Desarrollo`.

**Rationale:** Canonical URLs prevent duplicate content issues. Location in titles improves local SEO ranking. The helper already centralizes metadata, so extending it is natural.

**Alternative considered:** Per-page manual canonical — rejected because it's error-prone and duplicative.

### 3. Internal linking via navigation and contextual links

**Decision:** The Header and Footer already link to all key pages. Additionally, each page SHALL include contextual links to related pages (e.g., property pages link to contact, home links to properties). Use descriptive anchor text with keywords, not generic "click here".

**Rationale:** Internal links distribute page authority and help crawlers discover all content. Descriptive anchor text signals relevance to search engines.

### 4. SEO-friendly URL structure in Spanish

**Decision:** All routes use Spanish keywords matching search intent: `/propiedades`, `/propiedades/[slug]` (with keyword-rich slugs like `departamentos-lima-miraflores`), `/nosotros`, `/contacto`. No query parameters for navigation.

**Rationale:** Spanish URLs align with target audience (es_MX) search behavior. Keyword-rich slugs improve ranking for specific property searches.

### 5. Sitemap priority tiers

**Decision:** Configure `next-sitemap` with per-route priority:
- Home: 1.0 (daily)
- Properties listing: 0.9 (weekly)
- Individual properties: 0.8 (weekly)
- About/Contact: 0.6 (monthly)

**Rationale:** Signals to crawlers which pages are most important. Properties change more frequently than static pages.

### 6. Mobile-first via Tailwind responsive defaults

**Decision:** All components SHALL be styled mobile-first using Tailwind's responsive prefixes (`md:`, `lg:`). No separate mobile templates or media queries outside Tailwind.

**Rationale:** Tailwind is already the styling system. Mobile-first is its default paradigm. Google uses mobile-first indexing, so this directly impacts ranking.

## Risks / Trade-offs

- **[Structured data validation]** → Google's Rich Results Test may flag issues if property data is incomplete. Mitigation: all required Schema.org fields are enforced by TypeScript types from `schema-dts`.
- **[Keyword stuffing risk]** → Over-optimizing titles/content can trigger Google penalties. Mitigation: guidelines explicitly forbid keyword stuffing; titles follow a natural `{Topic} | {Location} | {Brand}` pattern.
- **[Maintenance of structured data]** → Property data must be kept in sync with page content. Mitigation: structured data generators take the same data objects used to render the page, ensuring single source of truth.
- **[Canonical URL mismatches]** → Incorrect canonicals can de-index pages. Mitigation: canonical is auto-generated from the current route path, not manually set.
