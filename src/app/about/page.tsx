import { MissionVision } from "@/components/modules/about/MissionVision";
import { PrincipalMessage } from "@/components/modules/about/PrincipalMessage";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Simple Page Header */}
      <section className="bg-primary/10 py-20 text-center">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the heart and soul of Kinder School.
          </p>
        </div>
      </section>

      <MissionVision />
      <PrincipalMessage />
    </div>
  );
}
