## MODIFIED Requirements

### Requirement: Keyword-optimized title format
Page titles SHALL follow the pattern `{Descriptive Title} | {Location} | Rosales Desarrollo` where location context is relevant. For pages without location context, the pattern `{Descriptive Title} | Rosales Desarrollo` SHALL be used. Property page titles SHALL follow the pattern `{Type} en {District} | {City} | Rosales Desarrollo`.

#### Scenario: Property page title includes location
- **WHEN** a property page's metadata is generated for a property of type "Departamentos" in district "Miraflores", city "Lima"
- **THEN** the title SHALL be `Departamentos en Miraflores | Lima | Rosales Desarrollo`

#### Scenario: Generic page uses shorter title format
- **WHEN** a non-property page's metadata is generated (e.g., Contacto)
- **THEN** the title SHALL follow `{Page Name} | Rosales Desarrollo` (e.g., "Contacto | Rosales Desarrollo")

### Requirement: Meta description is keyword-optimized
Each page's description SHALL be between 120–160 characters, include the primary keyword for the page, and provide a compelling summary that encourages click-through from search results. Property page descriptions SHALL include the property type, district, and city.

#### Scenario: Description length is within range
- **WHEN** a page's metadata description is set
- **THEN** it SHALL be between 120 and 160 characters long

#### Scenario: Description includes primary keyword
- **WHEN** a property listing page's metadata is generated
- **THEN** the description SHALL include terms related to the property type and location

#### Scenario: Property description includes location keywords
- **WHEN** a property detail page's metadata is generated
- **THEN** the description SHALL include the district name, city name, and property type
