## MODIFIED Requirements

### Requirement: Property listing structured data
Each property detail page SHALL include a JSON-LD block with `RealEstateListing` schema containing the property name, description, location, and images. The schema SHALL include a `PostalAddress` with `addressLocality` (district), `addressRegion` (city), and `addressCountry`.

#### Scenario: Property page includes listing schema
- **WHEN** a property detail page (e.g., `/propiedades/[slug]`) is rendered
- **THEN** the HTML SHALL contain a `<script type="application/ld+json">` with `@type: "RealEstateListing"`, `name`, `description`, `url`, and `address`

#### Scenario: Property data matches page content
- **WHEN** structured data is generated for a property
- **THEN** the `name` and `description` in the JSON-LD SHALL match the visible `<h1>` and description text on the page

#### Scenario: Address includes district and city
- **WHEN** structured data is generated for a property in Miraflores, Lima
- **THEN** the `address` field SHALL contain `@type: "PostalAddress"`, `addressLocality: "Miraflores"`, `addressRegion: "Lima"`, `addressCountry: "PE"`
