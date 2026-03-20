## ADDED Requirements

### Requirement: Keyword-optimized title format
Page titles SHALL follow the pattern `{Descriptive Title} | {Location} | Rosales Desarrollo` where location context is relevant. For pages without location context, the pattern `{Descriptive Title} | Rosales Desarrollo` SHALL be used.

#### Scenario: Property page title includes location
- **WHEN** a property page's metadata is generated
- **THEN** the title SHALL include the property type and location (e.g., "Departamentos en Miraflores | Lima | Rosales Desarrollo")

#### Scenario: Generic page uses shorter title format
- **WHEN** a non-property page's metadata is generated (e.g., Contacto)
- **THEN** the title SHALL follow `{Page Name} | Rosales Desarrollo` (e.g., "Contacto | Rosales Desarrollo")

### Requirement: OG image support in metadata
The `createMetadata()` helper SHALL support an optional `ogImage` parameter that sets the `openGraph.images` and `twitter.images` fields.

#### Scenario: Page with custom OG image
- **WHEN** `createMetadata({ ogImage: "/images/og-propiedades.jpg" })` is called
- **THEN** the openGraph and twitter metadata SHALL include the image URL resolved against `metadataBase`

#### Scenario: Default OG image when none specified
- **WHEN** `createMetadata()` is called without an `ogImage` parameter
- **THEN** a default OG image (`/images/og-default.jpg`) SHALL be used if it exists, otherwise no image is set

### Requirement: Meta description is keyword-optimized
Each page's description SHALL be between 120–160 characters, include the primary keyword for the page, and provide a compelling summary that encourages click-through from search results.

#### Scenario: Description length is within range
- **WHEN** a page's metadata description is set
- **THEN** it SHALL be between 120 and 160 characters long

#### Scenario: Description includes primary keyword
- **WHEN** a property listing page's metadata is generated
- **THEN** the description SHALL include terms related to the property type and location
