## ADDED Requirements

### Requirement: Root layout contains shared header and footer
The root `layout.tsx` SHALL render a site-wide header and footer that appear on every page. Pages SHALL NOT duplicate header or footer markup.

#### Scenario: Navigation is consistent across pages
- **WHEN** a user navigates between any two pages
- **THEN** the header and footer SHALL remain consistent, rendered by the root layout

### Requirement: Routes organized by business domain
Routes SHALL be organized under `src/app/` by business domain using Spanish names matching the target audience:
- `propiedades/` — Property listings
- `nosotros/` — About the company
- `contacto/` — Contact page

#### Scenario: New section follows naming convention
- **WHEN** a new site section is added
- **THEN** it SHALL be created as a directory under `src/app/` with a Spanish kebab-case name reflecting its business domain

### Requirement: Custom not-found page
The application SHALL include a `src/app/not-found.tsx` file that renders a branded 404 page consistent with the site's design system.

#### Scenario: User visits invalid URL
- **WHEN** a user navigates to a URL that does not match any route
- **THEN** the custom `not-found.tsx` page SHALL be displayed with brand styling and a link back to the home page

### Requirement: Error boundary page
The application SHALL include a `src/app/error.tsx` Client Component that gracefully handles runtime errors.

#### Scenario: Runtime error occurs
- **WHEN** a runtime error occurs during page rendering
- **THEN** the `error.tsx` component SHALL display a user-friendly error message with an option to retry or return home

### Requirement: Nested layouts only when justified
Nested `layout.tsx` files SHALL be created only when a group of routes shares distinct UI elements (e.g., a sidebar or sub-navigation) not present in the root layout.

#### Scenario: Section with shared sub-navigation
- **WHEN** a group of routes (e.g., `propiedades/` and its sub-routes) needs a shared sidebar
- **THEN** a nested `layout.tsx` SHALL be created in that directory

#### Scenario: Section without unique shared UI
- **WHEN** a new route section has no unique shared UI beyond the root header/footer
- **THEN** no nested `layout.tsx` SHALL be created; the root layout is sufficient
