## Why

The current property system uses a single hardcoded entry with a generic slug (`proyecto-ejemplo`) and no location data. This means the site has zero presence for high-value local search queries like "departamentos en Lima" or "proyectos inmobiliarios en Miraflores". Expanding each property into a fully SEO-optimized page with location keywords, structured data with addresses, and lead-generation CTAs will capture local search traffic and convert visitors into leads.

## What Changes

- **Expand the property data model** to include location (district, city), property type, features, price range, status, images, and CTA-relevant fields
- **Create individual SEO-optimized pages** for each property/project with location-based keywords in titles, headings, meta descriptions, and URL slugs
- **Update URL slug pattern** to `{type}-{location}` format (e.g., `departamentos-lima-miraflores`)
- **Enhance property listing page** (`/propiedades`) with filterable grid cards showing location and type, keyword-rich intro content, and internal links to each property
- **Add location keywords to metadata** — titles follow `{Property Type} en {District} | {City} | Rosales Desarrollo`; descriptions include location terms
- **Expand structured data** with `address`, `geo`, and `image` fields in `RealEstateListing` schema
- **Add lead-generation CTAs** to every property page (contact form link, WhatsApp, schedule visit) and contextual CTAs on the listing page

## Capabilities

### New Capabilities
- `property-data-model`: Centralized property/project data with location, type, features, status, and content fields — serves as the single source of truth for all property pages

### Modified Capabilities
- `seo-metadata`: Titles and descriptions for property pages must include location-based keywords following the pattern `{Type} en {District} | {City} | Rosales Desarrollo`
- `structured-data`: `RealEstateListing` schema must include `address` (PostalAddress with district, city, country) and optional `geo` and `image` fields
- `seo-content-strategy`: Property pages must have substantive, keyword-rich content sections (description, features, location highlights) with natural keyword placement and lead-generation CTAs

## Impact

- **`src/lib/properties.ts`** (new) — Centralized property data store with typed interfaces
- **`src/app/propiedades/[slug]/page.tsx`** — Rewritten to consume rich property data, render expanded content sections, location-aware metadata, enhanced structured data
- **`src/app/propiedades/page.tsx`** — Rewritten with property grid cards, location-rich intro content, internal links
- **`src/lib/structured-data.ts`** — `generatePropertyListingSchema` updated with address/geo/image fields
- **`src/lib/seo.ts`** — No changes needed (already supports the required patterns)
- **`next-sitemap.config.js`** — Property pages auto-included via `generateStaticParams`; no changes needed
