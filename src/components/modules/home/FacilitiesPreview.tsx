import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FacilitiesPreview() {
  const images = [
    {
      src: "/images/playground-children-yard.jpg",
      alt: "Colorful Playground",
      className: "col-span-12 md:col-span-8 row-span-2 h-64 md:h-96",
    },
    {
      src: "/images/library.jpg",
      alt: "Library Corner",
      className: "col-span-12 md:col-span-4 h-64 md:h-[185px]",
    },
    {
      src: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2071&auto=format&fit=crop",
      alt: "Art & Craft Room",
      className: "col-span-12 md:col-span-4 h-64 md:h-[185px]",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide uppercase mb-4">
              Campus Life
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Explore Our Campus
            </h2>
            <p className="text-muted-foreground text-lg">
              Designed for safety, creativity, and active learning. Our
              facilities provide the perfect backdrop for your child's growth.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            asChild
          >
            <Link href="/facilities">
              View All Facilities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden group ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur rounded-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="font-bold text-lg text-foreground">{img.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button
            variant="outline"
            className="rounded-full w-full border-2"
            asChild
          >
            <Link href="/facilities">
              View All Facilities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
