import { GalleryGrid } from "@/components/modules/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary/10 py-20 text-center">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground">
            Moments of joy, learning, and celebration captured in frames.
          </p>
        </div>
      </section>

      <GalleryGrid />
    </div>
  );
}
