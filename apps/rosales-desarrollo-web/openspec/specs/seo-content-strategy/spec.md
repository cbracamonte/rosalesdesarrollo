## ADDED Requirements

### Requirement: No thin content pages
Every indexable page SHALL contain meaningful, substantive content. Pages with only a heading and a single sentence SHALL be considered thin content and MUST be expanded.

#### Scenario: Page has sufficient content depth
- **WHEN** a page is rendered
- **THEN** it SHALL contain at minimum a heading (`<h1>`), a descriptive paragraph, and either a call-to-action, a content section, or a list of relevant items

#### Scenario: Placeholder page detected
- **WHEN** a page contains only a heading and fewer than 50 words of body text
- **THEN** it SHALL be considered a thin content violation requiring expansion

### Requirement: Natural keyword placement
Page content SHALL include relevant keywords naturally in the `<h1>`, first paragraph, and at least one subheading. Keywords SHALL NOT be unnaturally repeated (keyword stuffing).

#### Scenario: Keywords appear in key positions
- **WHEN** a page targets a keyword (e.g., "desarrollo inmobiliario")
- **THEN** the keyword or a close variant SHALL appear in the `<h1>`, within the first 160 characters of body text, and in at least one `<h2>`

#### Scenario: Keyword stuffing is avoided
- **WHEN** a page is reviewed
- **THEN** no single keyword or phrase SHALL appear more than 3 times per 500 words of content

### Requirement: SEO-friendly URL slugs
Dynamic route slugs SHALL use lowercase Spanish keywords separated by hyphens. Slugs SHALL describe the content and include location or type keywords where relevant.

#### Scenario: Property slug includes descriptive keywords
- **WHEN** a property page slug is created
- **THEN** it SHALL follow the pattern `{type}-{location}` (e.g., `departamentos-lima-miraflores`) using lowercase and hyphens

#### Scenario: No query parameters for primary navigation
- **WHEN** a user navigates to any primary page
- **THEN** the URL SHALL NOT contain query parameters (e.g., `/propiedades` not `/propiedades?category=all`)

### Requirement: Mobile-first responsive rendering
All pages and components SHALL be styled mobile-first, with responsive breakpoints for larger screens. Content SHALL be fully readable and navigable on mobile without horizontal scrolling.

#### Scenario: Page renders correctly on mobile viewport
- **WHEN** a page is viewed on a 375px wide viewport
- **THEN** all content SHALL be visible without horizontal scrolling, text SHALL be readable, and interactive elements SHALL be tappable

#### Scenario: Responsive breakpoints use Tailwind mobile-first
- **WHEN** a component uses responsive styles
- **THEN** base styles SHALL target mobile, with `md:` and `lg:` prefixes for larger screens
