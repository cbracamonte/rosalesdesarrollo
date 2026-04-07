import { describe, expect, it } from "vitest";
import { properties } from "../data/properties";
import {
  getAllPropertySlugs,
  getProperties,
  getPropertyBySlug,
} from "./get-properties";

describe("get-properties service", () => {
  it("returns the same property collection as the domain source of truth", () => {
    expect(getProperties()).toEqual(properties);
    expect(getProperties()).toHaveLength(3);
  });

  it("returns all slugs in stable dataset order", () => {
    expect(getAllPropertySlugs()).toEqual(
      properties.map((property) => property.slug),
    );
  });

  it("finds a property by slug", () => {
    expect(getPropertyBySlug("departamentos-lima-miraflores")).toEqual(
      properties[0],
    );
  });

  it("returns undefined for an unknown slug", () => {
    expect(getPropertyBySlug("slug-inexistente")).toBeUndefined();
  });
});
