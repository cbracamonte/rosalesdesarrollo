## Why

The site has basic metadata via `createMetadata()` and sitemap generation, but lacks structured data (Schema.org), internal linking strategy, keyword-optimized content guidelines, and advanced SEO controls needed to compete for organic real estate search traffic. Establishing these now—before content scales—ensures every page is discoverable, rich-snippet-ready, and optimized for Google ranking from launch.

## What Changes

- Add JSON-LD structured data (Schema.org) for the organization, real estate listings, and contact information
- Enhance `createMetadata()` to support keyword-rich titles with location context and canonical URLs
- Establish internal linking patterns connecting all key pages (home, properties, about, contact)
- Define content strategy guidelines: minimum content depth, natural keyword placement, no thin pages
- Enforce SEO-friendly URL structure with Spanish keywords
- Add viewport meta and mobile-first responsive guarantees
- Enhance sitemap configuration with per-route priority and changefreq overrides
- Ensure robots.txt allows crawling of all public pages

## Capabilities

### New Capabilities
- `structured-data`: JSON-LD Schema.org implementation for RealEstateAgent organization, RealEstateListing properties, and ContactPage structured data
- `internal-linking`: Internal link strategy connecting key pages with descriptive anchor text and navigation patterns
- `seo-content-strategy`: Content depth requirements, keyword optimization guidelines, and URL structure conventions
- `seo-indexing`: Sitemap enhancements, robots.txt configuration, canonical URLs, and crawlability guarantees

### Modified Capabilities
- `seo-metadata`: Enhance metadata requirements to include keyword-optimized titles with location, canonical URLs, and OG image support

## Impact

- **Code:** `src/lib/seo.ts` (enhanced metadata helper), new `src/lib/structured-data.ts` (JSON-LD generators), all page components (structured data injection, internal links), `src/components/layout/Header.tsx` and `Footer.tsx` (internal linking)
- **Dependencies:** `schema-dts` (already installed) for TypeScript-safe structured data types
- **Config:** `next-sitemap.config.js` (per-route priority), `next.config.ts` (canonical URL support)
- **SEO:** Every page gains rich snippet eligibility, proper crawl signals, and keyword-optimized metadata
