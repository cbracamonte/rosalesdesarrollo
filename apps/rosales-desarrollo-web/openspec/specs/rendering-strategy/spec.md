## ADDED Requirements

### Requirement: SSG as default rendering strategy
All pages SHALL be statically generated at build time using Static Site Generation (SSG). No page SHALL use `dynamic = 'force-dynamic'` or `cache: 'no-store'` fetch options unless explicitly justified and documented.

#### Scenario: Standard marketing page renders statically
- **WHEN** a new page is added to the `src/app/` directory (e.g., `nosotros/page.tsx`)
- **THEN** the page SHALL be rendered as a static HTML file at build time with no server-side runtime dependencies

#### Scenario: Build produces static output for all pages
- **WHEN** `pnpm build` is executed
- **THEN** every page SHALL appear in the static output without requiring a running server to serve content

### Requirement: Use generateStaticParams for dynamic routes
All dynamic routes (e.g., `[slug]`) SHALL export a `generateStaticParams` function that returns all valid parameter combinations at build time.

#### Scenario: Property detail pages are pre-rendered
- **WHEN** a dynamic route such as `propiedades/[slug]/page.tsx` exists
- **THEN** the page SHALL export `generateStaticParams` returning all known slugs so every property page is statically generated

#### Scenario: Missing slug returns 404
- **WHEN** a user navigates to a property slug not included in `generateStaticParams`
- **THEN** Next.js SHALL return a 404 response using the `not-found.tsx` page

### Requirement: Server Components by default
All components SHALL be Server Components unless they require browser APIs, event handlers, or client-side React hooks (`useState`, `useEffect`, `useRef` with DOM access).

#### Scenario: Page component is a Server Component
- **WHEN** a new page component is created
- **THEN** it SHALL NOT include the `"use client"` directive unless it directly uses client-only APIs

#### Scenario: Client directive on smallest boundary
- **WHEN** a component requires interactivity (e.g., a mobile menu toggle)
- **THEN** the `"use client"` directive SHALL be placed on the smallest interactive component, not on the parent page or layout

### Requirement: No client-side data fetching for static content
Pages SHALL NOT use client-side data fetching libraries (SWR, React Query, `useEffect` + `fetch`) for content that is known at build time.

#### Scenario: Content is fetched at build time
- **WHEN** a page needs data (e.g., property listings)
- **THEN** data SHALL be loaded in a Server Component or via static imports, not through client-side fetching
