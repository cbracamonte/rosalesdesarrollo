## ADDED Requirements

### Requirement: Every page exports metadata via createMetadata helper
Every page SHALL export a `metadata` constant using the `createMetadata()` helper from `src/lib/seo.ts`, providing page-specific overrides for `title` and `description` at minimum.

#### Scenario: New page has unique metadata
- **WHEN** a new page is added (e.g., `contacto/page.tsx`)
- **THEN** the page SHALL export `export const metadata: Metadata = createMetadata({ title: "Contacto", description: "..." })` with values unique to that page

#### Scenario: Root layout provides default metadata
- **WHEN** a page does not override a specific metadata field
- **THEN** the `createMetadata()` defaults (site name, description, openGraph, twitter, robots) SHALL apply automatically

### Requirement: OpenGraph and Twitter metadata on all pages
Every page's metadata SHALL include `openGraph` and `twitter` properties with at minimum `title` and `description`.

#### Scenario: Social sharing preview is complete
- **WHEN** a page URL is shared on social media
- **THEN** the platform SHALL display the page-specific title, description, and site name from the openGraph/twitter metadata

### Requirement: Proper heading hierarchy
Every page SHALL have exactly one `<h1>` element. Subheadings SHALL follow a logical hierarchy (`<h2>`, `<h3>`) without skipping levels.

#### Scenario: Page has single H1
- **WHEN** a page is rendered
- **THEN** exactly one `<h1>` element SHALL be present in the DOM

#### Scenario: Heading levels are sequential
- **WHEN** headings are used on a page
- **THEN** heading levels SHALL NOT skip (e.g., no `<h1>` followed directly by `<h3>` without an `<h2>`)

### Requirement: Unique title and description per page
No two pages SHALL share the same `title` or `description` metadata values.

#### Scenario: Duplicate metadata detected
- **WHEN** two pages export identical `title` values
- **THEN** this SHALL be considered a violation and corrected to ensure each page has a unique, descriptive title

### Requirement: Keyword-optimized title format
Page titles SHALL follow the pattern `{Descriptive Title} | {Location} | Rosales Desarrollo` where location context is relevant. For pages without location context, the pattern `{Descriptive Title} | Rosales Desarrollo` SHALL be used.

#### Scenario: Property page title includes location
- **WHEN** a property page's metadata is generated
- **THEN** the title SHALL include the property type and location (e.g., "Departamentos en Miraflores | Lima | Rosales Desarrollo")

#### Scenario: Generic page uses shorter title format
- **WHEN** a non-property page's metadata is generated (e.g., Contacto)
- **THEN** the title SHALL follow `{Page Name} | Rosales Desarrollo` (e.g., "Contacto | Rosales Desarrollo")

### Requirement: OG image support in metadata
The `createMetadata()` helper SHALL support an optional `ogImage` parameter that sets the `openGraph.images` and `twitter.images` fields.

#### Scenario: Page with custom OG image
- **WHEN** `createMetadata({ ogImage: "/images/og-propiedades.jpg" })` is called
- **THEN** the openGraph and twitter metadata SHALL include the image URL resolved against `metadataBase`

#### Scenario: Default OG image when none specified
- **WHEN** `createMetadata()` is called without an `ogImage` parameter
- **THEN** a default OG image (`/images/og-default.jpg`) SHALL be used if it exists, otherwise no image is set

### Requirement: Meta description is keyword-optimized
Each page's description SHALL be between 120–160 characters, include the primary keyword for the page, and provide a compelling summary that encourages click-through from search results.

#### Scenario: Description length is within range
- **WHEN** a page's metadata description is set
- **THEN** it SHALL be between 120 and 160 characters long

#### Scenario: Description includes primary keyword
- **WHEN** a property listing page's metadata is generated
- **THEN** the description SHALL include terms related to the property type and location
