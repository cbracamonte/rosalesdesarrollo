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
