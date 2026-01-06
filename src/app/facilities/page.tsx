import { FacilitiesGrid } from "@/components/modules/facilities/FacilitiesGrid";

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Standardized Page Header */}
      <section className="bg-primary/10 py-20 text-center">
        <div className="container px-4 mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide uppercase mb-4">
            Our Campus
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Facilities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A nurturing home away from home, where every corner is designed for
            joy, discovery, and growth.
          </p>
        </div>
      </section>

      <FacilitiesGrid />
    </div>
  );
}
