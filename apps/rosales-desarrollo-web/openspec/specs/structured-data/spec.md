## ADDED Requirements

### Requirement: Organization structured data on all pages
Every page SHALL include a JSON-LD `<script type="application/ld+json">` block containing a `RealEstateAgent` schema with the organization's name, URL, logo, and contact information.

#### Scenario: Home page includes organization schema
- **WHEN** the home page is rendered
- **THEN** the HTML SHALL contain a `<script type="application/ld+json">` with `@type: "RealEstateAgent"`, `name: "Rosales Desarrollo"`, `url`, `logo`, and `contactPoint`

#### Scenario: Organization data is consistent across pages
- **WHEN** any page is rendered
- **THEN** the organization structured data SHALL use the same values sourced from a centralized generator function

### Requirement: Property listing structured data
Each property detail page SHALL include a JSON-LD block with `RealEstateListing` schema containing the property name, description, location, and images.

#### Scenario: Property page includes listing schema
- **WHEN** a property detail page (e.g., `/propiedades/[slug]`) is rendered
- **THEN** the HTML SHALL contain a `<script type="application/ld+json">` with `@type: "RealEstateListing"`, `name`, `description`, `url`, and `address`

#### Scenario: Property data matches page content
- **WHEN** structured data is generated for a property
- **THEN** the `name` and `description` in the JSON-LD SHALL match the visible `<h1>` and description text on the page

### Requirement: Structured data generator library
A centralized `src/lib/structured-data.ts` module SHALL export typed generator functions for each Schema.org type, using `schema-dts` for TypeScript safety.

#### Scenario: Generator produces valid JSON-LD
- **WHEN** `generateOrganizationSchema()` is called
- **THEN** it SHALL return a valid JSON-LD object with `@context: "https://schema.org"` and all required fields

#### Scenario: Generator uses schema-dts types
- **WHEN** a structured data generator function is defined
- **THEN** it SHALL use TypeScript types from `schema-dts` for type safety

### Requirement: JSON-LD script component
A reusable `JsonLd` component SHALL render structured data as a `<script type="application/ld+json">` tag in the page.

#### Scenario: JsonLd component renders valid script tag
- **WHEN** the `JsonLd` component receives a structured data object
- **THEN** it SHALL render a `<script type="application/ld+json">` containing the JSON-serialized data
