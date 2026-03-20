## 1. CLAUDE.md Best Practices

- [x] 1.1 Add Next.js 16 Best Practices section to CLAUDE.md covering all rendering, SEO, App Router, and performance conventions

## 2. App Router Conventions

- [x] 2.1 Update root `layout.tsx` to include shared Header and Footer components
- [x] 2.2 Create `src/components/layout/Header.tsx` Server Component with site navigation
- [x] 2.3 Create `src/components/layout/Footer.tsx` Server Component with brand info and links
- [x] 2.4 Create `src/app/not-found.tsx` with branded 404 page and link back to home
- [x] 2.5 Create `src/app/error.tsx` Client Component with user-friendly error message and retry option

## 3. SEO Metadata

- [x] 3.1 Ensure home page (`src/app/page.tsx`) exports unique metadata via `createMetadata()` with page-specific title and description
- [x] 3.2 Verify `createMetadata()` helper includes openGraph and twitter fields with title and description
- [x] 3.3 Ensure every page has exactly one `<h1>` and sequential heading hierarchy

## 4. Route Structure

- [x] 4.1 Create `src/app/propiedades/page.tsx` with SSG, unique metadata, and proper heading structure
- [x] 4.2 Create `src/app/propiedades/[slug]/page.tsx` with `generateStaticParams` exporting all known slugs
- [x] 4.3 Create `src/app/nosotros/page.tsx` with SSG, unique metadata, and proper heading structure
- [x] 4.4 Create `src/app/contacto/page.tsx` with SSG, unique metadata, and proper heading structure

## 5. Performance Optimization

- [x] 5.1 Audit all existing images to ensure they use `next/image` with explicit `width`, `height`, and `alt`
- [x] 5.2 Ensure hero/above-the-fold images use `priority` prop; below-fold images use default lazy loading
- [x] 5.3 Verify no Client Components exist unless strictly necessary for interactivity
- [x] 5.4 Verify build succeeds with `pnpm build` and all pages are statically generated

## 6. Validation

- [x] 6.1 Run `pnpm lint` and fix any ESLint violations
- [x] 6.2 Run `pnpm build` and confirm all pages appear as static HTML in build output
- [x] 6.3 Verify no page shares duplicate title or description metadata
