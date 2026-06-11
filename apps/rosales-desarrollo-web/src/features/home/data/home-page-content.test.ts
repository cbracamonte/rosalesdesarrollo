import { describe, expect, it } from "vitest";
import {
  benefits,
  journeySteps,
  projectHighlights,
  services,
  testimonials,
  trustSignals,
} from "./home-page-content";

describe("home page content", () => {
  it("keeps the service grid complete", () => {
    expect(services).toHaveLength(4);
  });

  it("keeps the purchase benefits balanced", () => {
    expect(benefits).toHaveLength(6);
  });

  it("defines the complete five-step purchase journey", () => {
    expect(journeySteps.map((step) => step.step)).toEqual([1, 2, 3, 4, 5]);
  });

  it("offers financing guidance without promising approval", () => {
    const copy = journeySteps.map((step) => `${step.title} ${step.description}`).join(" ");
    expect(copy).toMatch(/crédito/i);
    expect(copy).not.toMatch(/aprobado|aprobación garantizada/i);
  });

  it("keeps the landing focused on one Chiclayo project", () => {
    expect(projectHighlights).toHaveLength(3);
    expect(trustSignals.map((signal) => signal.description).join(" ")).toMatch(/Chiclayo/i);
  });

  it("includes realistic Chiclayo family testimonials", () => {
    expect(testimonials).toHaveLength(2);
    expect(testimonials.map((testimonial) => testimonial.quote).join(" ")).not.toMatch(/perfecto|increíble|lujo/i);
  });
});
