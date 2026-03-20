## Why

The project currently lacks formalized Next.js 16 best practices, which risks inconsistent rendering strategies, suboptimal SEO, and unnecessary client-side JavaScript across the static real estate site. Establishing these standards now—before building out pages—ensures every route is SSG-first, SEO-optimized, and performant from day one.

## What Changes

- Adopt Static Site Generation (SSG) as the default rendering strategy; dynamic rendering only when strictly justified
- Enforce Server Components by default; `"use client"` only for interactive widgets
- Standardize the Metadata API usage across all pages (title, description, openGraph, twitter)
- Establish App Router conventions: layouts for shared UI, `generateStaticParams` for dynamic routes, `not-found.tsx` and `error.tsx` for error handling
- Define server-side data fetching patterns with proper caching; avoid client-side fetching
- Require `next/image` for all images with lazy loading and LCP optimization
- Organize routes by domain (properties, about, contact) with modular, reusable components
- Minimize client-side JavaScript to ensure fast load times across all marketing pages

## Capabilities

### New Capabilities
- `rendering-strategy`: SSG-first rendering rules, `generateStaticParams` usage, and guidelines for when dynamic rendering is acceptable
- `seo-metadata`: Metadata API standards for all pages including openGraph, twitter cards, heading structure (H1–H3), and unique per-page metadata
- `app-router-conventions`: App Router file structure, layouts, error boundaries (`not-found.tsx`, `error.tsx`), and route organization by domain
- `performance-optimization`: Image optimization via `next/image`, lazy loading, client JS minimization, and LCP optimization for static marketing pages

### Modified Capabilities
_None — no existing specs to modify._

## Impact

- **Code:** All pages under `src/app/`, layouts, and components must follow the new conventions
- **Dependencies:** Relies on `next/image`, Next.js Metadata API, and `next-sitemap` (already installed)
- **Build:** All marketing/landing pages must be statically exportable; no runtime dependencies that break static builds
- **SEO:** Every page will have structured metadata; heading hierarchy enforced for crawler readability
