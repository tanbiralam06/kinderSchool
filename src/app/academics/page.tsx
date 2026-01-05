import { Suspense } from "react";
import { CurriculumTabs } from "@/components/modules/academics/CurriculumTabs";
import { AcademicMethodology } from "@/components/modules/academics/AcademicMethodology";

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Simple Page Header */}
      <section className="bg-secondary/10 py-20 text-center">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Academic Programs
          </h1>
          <p className="text-xl text-muted-foreground">
            Excellence in every step of the journey.
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="py-20 text-center">Loading curriculum...</div>
        }
      >
        <CurriculumTabs />
      </Suspense>
      <AcademicMethodology />
    </div>
  );
}
