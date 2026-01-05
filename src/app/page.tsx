import { Hero } from "@/components/modules/home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Placeholder for next sections */}
      <section className="py-20 text-center container">
        <h2 className="text-3xl font-bold mb-4 text-primary">Why Choose Us?</h2>
        <p className="text-muted-foreground">More content coming soon...</p>
      </section>
    </div>
  );
}
