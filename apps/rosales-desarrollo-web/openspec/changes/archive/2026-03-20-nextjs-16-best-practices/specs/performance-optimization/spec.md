## ADDED Requirements

### Requirement: All images use next/image
All raster and SVG images SHALL be rendered using the `next/image` component to benefit from automatic optimization, responsive sizing, and lazy loading.

#### Scenario: New image added to a page
- **WHEN** an image is added to any page or component
- **THEN** it SHALL use `<Image>` from `next/image` with explicit `width`, `height`, and descriptive `alt` text

#### Scenario: Inline SVG exception
- **WHEN** an SVG needs dynamic styling (color changes, animations)
- **THEN** it MAY be rendered as an inline `<svg>` element instead of using `next/image`

### Requirement: Above-the-fold images use priority
Images visible in the initial viewport (above the fold) SHALL use the `priority` prop on `next/image` to disable lazy loading and optimize LCP.

#### Scenario: Hero image is prioritized
- **WHEN** a hero section contains a primary image
- **THEN** the `<Image>` component SHALL include `priority={true}`

#### Scenario: Below-fold images lazy load
- **WHEN** an image is positioned below the initial viewport
- **THEN** the `<Image>` component SHALL use default lazy loading (no `priority` prop)

### Requirement: Minimize client-side JavaScript
Pages SHALL minimize the amount of JavaScript sent to the browser. Server Components SHALL be used for all non-interactive content. Client Components SHALL be as small as possible.

#### Scenario: Static page sends minimal JS
- **WHEN** a fully static page (no interactivity) is built
- **THEN** the page SHALL send zero or near-zero component JavaScript to the client (only Next.js framework runtime)

#### Scenario: Interactive widget is isolated
- **WHEN** a page contains one interactive element (e.g., contact form)
- **THEN** only that specific component SHALL be a Client Component; the rest of the page SHALL remain Server Components

### Requirement: No runtime dependencies that break static builds
Pages SHALL NOT import libraries or use patterns that require a Node.js server at runtime. All pages MUST be compatible with `next export` (static export).

#### Scenario: Build succeeds as static export
- **WHEN** the project is configured for static export (`output: 'export'` in `next.config`)
- **THEN** `pnpm build` SHALL complete successfully with no errors related to server-only APIs

### Requirement: LCP optimization for marketing pages
All marketing and landing pages SHALL target an LCP (Largest Contentful Paint) under 2.5 seconds by ensuring the largest visible element is statically rendered and images are optimized.

#### Scenario: Home page LCP is optimized
- **WHEN** the home page is loaded
- **THEN** the hero image/text SHALL be server-rendered with `priority` loading, producing an LCP under 2.5 seconds on a standard 4G connection
