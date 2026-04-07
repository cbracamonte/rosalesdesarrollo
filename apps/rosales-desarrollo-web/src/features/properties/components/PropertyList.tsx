import type { Property } from "../types";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { PropertyCard } from "./PropertyCard";

interface PropertyListProps {
  properties: Property[];
}

export function PropertyList({ properties }: PropertyListProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {properties.map((property, index) => (
        <MotionReveal
          key={property.slug}
          delay={Math.min(index * 0.08, 0.28)}
          y={28}
          className="h-full"
        >
          <PropertyCard property={property} />
        </MotionReveal>
      ))}
    </div>
  );
}
