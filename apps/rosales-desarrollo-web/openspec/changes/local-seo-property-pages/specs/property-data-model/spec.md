## ADDED Requirements

### Requirement: Typed property data model
A `src/lib/properties.ts` module SHALL export a `Property` interface and a `properties` array containing all property/project data. Each property SHALL include: `slug`, `name`, `type`, `description`, `district`, `city`, `country`, `features`, and `status` fields at minimum.

#### Scenario: Property interface has required fields
- **WHEN** the `Property` interface is defined
- **THEN** it SHALL include `slug: string`, `name: string`, `type: string`, `description: string`, `district: string`, `city: string`, `country: string`, `features: string[]`, and `status: string`

#### Scenario: Property data includes real projects
- **WHEN** the `properties` array is populated
- **THEN** it SHALL contain at least 3 properties with distinct locations, types, and descriptions

### Requirement: SEO-optimized property slugs
Each property's `slug` field SHALL follow the pattern `{type}-{city}-{district}` using lowercase Spanish keywords separated by hyphens.

#### Scenario: Slug matches location pattern
- **WHEN** a property has type "departamentos", city "lima", district "miraflores"
- **THEN** the slug SHALL be `departamentos-lima-miraflores`

#### Scenario: Slugs are unique
- **WHEN** the properties array is defined
- **THEN** no two properties SHALL share the same slug

### Requirement: Property lookup by slug
The module SHALL export a `getPropertyBySlug(slug: string)` function that returns the property matching the given slug or `undefined` if not found.

#### Scenario: Valid slug returns property
- **WHEN** `getPropertyBySlug("departamentos-lima-miraflores")` is called
- **THEN** it SHALL return the property object with that slug

#### Scenario: Invalid slug returns undefined
- **WHEN** `getPropertyBySlug("nonexistent")` is called
- **THEN** it SHALL return `undefined`

### Requirement: All property slugs available for static generation
The module SHALL export a `getAllPropertySlugs()` function that returns an array of all property slugs for use in `generateStaticParams()`.

#### Scenario: Static params generation
- **WHEN** `getAllPropertySlugs()` is called
- **THEN** it SHALL return an array of strings matching all property slugs in the data
