## 1. Structured Data

- [x] 1.1 Create `src/lib/structured-data.ts` with typed JSON-LD generator functions using `schema-dts` (`generateOrganizationSchema`, `generatePropertyListingSchema`, `generateWebPageSchema`)
- [x] 1.2 Create `src/components/seo/JsonLd.tsx` reusable Server Component that renders `<script type="application/ld+json">`
- [x] 1.3 Add organization structured data (`RealEstateAgent`) to the root layout via `JsonLd` component
- [x] 1.4 Add property listing structured data (`RealEstateListing`) to `propiedades/[slug]/page.tsx`

## 2. Enhanced Metadata

- [x] 2.1 Extend `createMetadata()` in `src/lib/seo.ts` to accept optional `canonical` path and auto-generate canonical URL from `SITE_URL`
- [x] 2.2 Add optional `ogImage` parameter to `createMetadata()` that sets openGraph.images and twitter.images
- [x] 2.3 Update all page metadata to include keyword-optimized titles and descriptions (120–160 chars)
- [x] 2.4 Add CLAUDE.md section documenting SEO best practices for metadata, content, and structured data

## 3. Sitemap & Indexing

- [x] 3.1 Update `next-sitemap.config.js` with per-route priority and changefreq overrides (home: 1.0/daily, properties: 0.9/weekly, static: 0.6/monthly)
- [x] 3.2 Verify robots.txt allows all public pages and includes sitemap reference

## 4. Internal Linking

- [x] 4.1 Add contextual CTA link section to home page linking to `/propiedades`
- [x] 4.2 Add contextual CTA link to property detail pages linking to `/contacto`
- [x] 4.3 Add contextual links to nosotros page linking to `/propiedades` and `/contacto`
- [x] 4.4 Ensure all internal link anchor text is descriptive with keywords (audit Header/Footer)

## 5. Content Expansion

- [x] 5.1 Expand home page content beyond heading + tagline (add value proposition section, featured projects CTA)
- [x] 5.2 Expand propiedades listing page with introductory content section
- [x] 5.3 Expand nosotros page with company story, mission, and values content
- [x] 5.4 Expand contacto page with contact information and a contact prompt section

## 6. Mobile & Accessibility

- [x] 6.1 Audit all pages for mobile-first responsive rendering (no horizontal scroll at 375px)
- [x] 6.2 Ensure all images have descriptive alt text and all interactive elements have accessible labels

## 7. Validation

- [x] 7.1 Run `pnpm build` and verify all pages are statically generated
- [x] 7.2 Run `pnpm lint` and fix any violations
- [x] 7.3 Verify structured data output is valid JSON-LD in built HTML
- [x] 7.4 Verify no duplicate titles or descriptions across pages
