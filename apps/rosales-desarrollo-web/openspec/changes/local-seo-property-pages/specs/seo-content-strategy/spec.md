## ADDED Requirements

### Requirement: Property pages have substantive content sections
Each property detail page SHALL render at minimum: a location-keyword H1, a descriptive paragraph, a features section, a location highlights section, and a lead-generation CTA section.

#### Scenario: Property page has full content structure
- **WHEN** a property detail page is rendered
- **THEN** it SHALL contain an `<h1>` with the property name including location, a description paragraph, a features grid, a location section with an `<h2>`, and a CTA section

#### Scenario: Property page is not thin content
- **WHEN** a property detail page is rendered
- **THEN** the page body SHALL contain more than 100 words of visible text content

### Requirement: Lead-generation CTAs on property pages
Each property detail page SHALL include a prominent CTA section encouraging the visitor to contact the company. The CTA SHALL link to the `/contacto` page and include action-oriented text.

#### Scenario: Property page has contact CTA
- **WHEN** a property detail page is rendered
- **THEN** it SHALL contain at least one link to `/contacto` with descriptive anchor text related to the property

#### Scenario: CTA uses action-oriented language
- **WHEN** the CTA section is rendered
- **THEN** the CTA text SHALL include action verbs (e.g., "Solicita", "Agenda", "Consulta") rather than generic text like "click here"

### Requirement: Property listing page shows all properties
The `/propiedades` page SHALL display a grid of cards for all available properties, each card showing the property name, type, location, and a link to the detail page.

#### Scenario: Listing page renders property cards
- **WHEN** the `/propiedades` page is rendered
- **THEN** it SHALL display one card per property in the data, each with the property name, type, district, and a link to `/propiedades/{slug}`

#### Scenario: Listing page has keyword-rich intro
- **WHEN** the `/propiedades` page is rendered
- **THEN** the H1 and first paragraph SHALL include keywords related to "proyectos inmobiliarios" and "Perú"

### Requirement: Location keywords in property headings
Each property detail page's `<h1>` SHALL include the property type and location (district). At least one `<h2>` on the page SHALL include a location-related keyword.

#### Scenario: H1 includes type and location
- **WHEN** a property detail page for "Departamentos" in "Miraflores" is rendered
- **THEN** the `<h1>` SHALL contain both "Departamentos" and "Miraflores"

#### Scenario: H2 includes location keyword
- **WHEN** a property detail page is rendered
- **THEN** at least one `<h2>` SHALL include the district or city name
