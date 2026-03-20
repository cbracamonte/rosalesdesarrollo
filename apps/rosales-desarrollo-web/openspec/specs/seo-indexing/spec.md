## ADDED Requirements

### Requirement: Sitemap with per-route priority
The `next-sitemap` configuration SHALL define priority and changefreq overrides per route to signal page importance to crawlers.

#### Scenario: Home page has highest priority
- **WHEN** the sitemap is generated
- **THEN** `/` SHALL have `priority: 1.0` and `changefreq: "daily"`

#### Scenario: Property listing has high priority
- **WHEN** the sitemap is generated
- **THEN** `/propiedades` SHALL have `priority: 0.9` and `changefreq: "weekly"`

#### Scenario: Static pages have lower priority
- **WHEN** the sitemap is generated
- **THEN** `/nosotros` and `/contacto` SHALL have `priority: 0.6` and `changefreq: "monthly"`

### Requirement: Robots.txt allows all public pages
The `robots.txt` file SHALL allow all search engine crawlers to access all public pages. No public page SHALL be disallowed.

#### Scenario: Robots.txt permits crawling
- **WHEN** a search engine crawler reads `robots.txt`
- **THEN** it SHALL find `User-agent: *` with `Allow: /` and a reference to the sitemap URL

### Requirement: Canonical URLs on all pages
Every page SHALL include a canonical URL in its metadata pointing to the definitive version of the page.

#### Scenario: Page metadata includes canonical
- **WHEN** a page is rendered
- **THEN** the `<link rel="canonical">` tag SHALL point to the full URL of the current page (e.g., `https://rosalesdesarrollo.com/propiedades`)

#### Scenario: Canonical is auto-generated
- **WHEN** `createMetadata()` is called with a page path
- **THEN** the canonical URL SHALL be automatically constructed from `SITE_URL` + the page path

### Requirement: All pages are crawlable
Every public page SHALL have `robots: { index: true, follow: true }` in its metadata. No public page SHALL be marked `noindex`.

#### Scenario: New page is indexable by default
- **WHEN** a page exports metadata via `createMetadata()`
- **THEN** the robots metadata SHALL include `index: true` and `follow: true`
