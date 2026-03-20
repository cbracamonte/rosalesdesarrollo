## 1. Property Data Model

- [x] 1.1 Create `src/lib/properties.ts` with `Property` interface including all required fields (slug, name, type, description, district, city, country, features, status)
- [x] 1.2 Add `getPropertyBySlug()` and `getAllPropertySlugs()` helper functions
- [x] 1.3 Populate properties array with at least 3 real Rosales Desarrollo projects using SEO-optimized slugs (`{type}-{city}-{district}`)

## 2. Structured Data Enhancement

- [x] 2.1 Update `generatePropertyListingSchema()` in `src/lib/structured-data.ts` to accept location fields and output `PostalAddress` with `addressLocality`, `addressRegion`, `addressCountry`

## 3. Property Detail Pages

- [ ] 3.1 Rewrite `src/app/propiedades/[slug]/page.tsx` to import from `src/lib/properties.ts` and use `getPropertyBySlug()` / `getAllPropertySlugs()`
- [ ] 3.2 Update `generateMetadata()` to produce location-keyword titles (`{Type} en {District} | {City} | Rosales Desarrollo`) and descriptions including district, city, and type
- [ ] 3.3 Render expanded page content: H1 with type + location, description paragraph, features grid, location highlights section with H2 including location keyword
- [ ] 3.4 Add lead-generation CTA section with action-oriented link to `/contacto`
- [ ] 3.5 Pass location data to `generatePropertyListingSchema()` for structured data with address

## 4. Property Listing Page

- [ ] 4.1 Rewrite `src/app/propiedades/page.tsx` to import properties and render a grid of property cards with name, type, district, and link to detail page
- [ ] 4.2 Update H1 and intro paragraph with keywords ("proyectos inmobiliarios", "Perú")

## 5. Verification

- [ ] 5.1 Run `pnpm build` to verify all property pages are statically generated
- [ ] 5.2 Run `pnpm lint` and fix any issues
- [ ] 5.3 Verify JSON-LD output includes PostalAddress in built HTML
- [ ] 5.4 Verify all property page titles and descriptions are unique and within character limits
