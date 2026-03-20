## Context

The site currently has a single placeholder property (`proyecto-ejemplo`) with only `name` and `description` fields. The property detail page renders minimal content with no location data, and the listing page shows a "coming soon" message. There is no way to target local SEO keywords like "departamentos en Lima" or "proyectos inmobiliarios en Miraflores" because the data model lacks location, type, and rich content fields.

Existing infrastructure that this builds on:
- `createMetadata()` in `src/lib/seo.ts` — already supports title formatting and canonical URLs
- `generatePropertyListingSchema()` in `src/lib/structured-data.ts` — currently accepts `name`, `description`, `slug`
- `JsonLd` component in `src/components/seo/JsonLd.tsx` — renders JSON-LD script tags
- `generateStaticParams()` already wired in `[slug]/page.tsx`

## Goals / Non-Goals

**Goals:**
- Define a rich property data model with location, type, features, and content fields
- Generate SEO-optimized pages for each property with location keywords in titles, headings, URLs, and descriptions
- Include `PostalAddress` in structured data for local search visibility
- Add lead-generation CTAs (contact link, WhatsApp, visit scheduling) on every property page
- Create a property listing page with grid cards linking to individual properties

**Non-Goals:**
- No CMS or database — properties remain as static TypeScript data
- No search/filter UI on the listing page (just display all properties)
- No dynamic pricing or availability — content is static
- No internationalization beyond Spanish (es_PE)
- No property comparison or favoriting features

## Decisions

### 1. Property data as a typed TypeScript module

**Decision:** Create `src/lib/properties.ts` exporting a `Property` interface and a `properties` array.

**Rationale:** The site uses static export (`output: 'export'`), so all data must be available at build time. A TypeScript module gives type safety, IDE autocomplete, and zero runtime overhead. The data lives close to where it's consumed and is easy to extend later into MDX or a CMS fetch.

**Alternative considered:** MDX files per property — adds complexity (frontmatter parsing, MDX rendering) without enough benefit for the current number of properties (~3-5).

### 2. Slug format: `{type}-{city}-{district}`

**Decision:** Property slugs follow the pattern `departamentos-lima-miraflores`, derived from the property data fields.

**Rationale:** This embeds the primary local SEO keywords directly in the URL, matching how users search ("departamentos en Lima Miraflores"). The slug is stored as a field in the property data (not auto-generated) to allow manual optimization.

### 3. Title format: `{Type} en {District} | {City} | Rosales Desarrollo`

**Decision:** Property page titles use the three-segment pattern with location keywords.

**Rationale:** Matches the existing `seo-metadata` spec requirement for keyword-optimized titles with location context. The district is the most specific and valuable keyword, so it comes first after the type.

### 4. Expanded `generatePropertyListingSchema` with address

**Decision:** Add `address` (PostalAddress with `addressLocality`, `addressRegion`, `addressCountry`) and optional `image` to the existing generator function.

**Rationale:** Google's structured data guidelines for real estate listings recommend address information for local search features. Extending the existing function maintains backward compatibility while adding local SEO value.

### 5. Property page layout with content sections

**Decision:** Each property page renders: hero with H1 → description paragraph → features grid → location section → lead-generation CTA section.

**Rationale:** This structure ensures substantive content (avoiding thin pages per `seo-content-strategy` spec), places keywords in H1 and first paragraph, and ends with a conversion-focused CTA.

### 6. Contact CTA design

**Decision:** Each property page includes a CTA section with a primary link to `/contacto` and a secondary mention of contact channels. The listing page includes a general contact prompt.

**Rationale:** The site doesn't yet have a form or WhatsApp integration, so CTAs link to the existing contact page. This is the minimal viable approach that satisfies lead-generation requirements without adding new infrastructure.

## Risks / Trade-offs

- **Static data maintenance** → Property data changes require code deploys. Mitigated by keeping the data structure simple and well-typed so edits are straightforward.
- **Slug changes break URLs** → If a property slug is renamed, old URLs 404. Mitigated by documenting that slugs should be treated as permanent once published.
- **Thin initial property set** → Launching with only 3-5 properties may look sparse on the listing page. Mitigated by designing the grid layout to look intentional at small counts (1-2 columns on mobile, 3 on desktop).
