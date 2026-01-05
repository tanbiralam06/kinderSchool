import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function HomeAbout() {
  const highlights = [
    "Holistic Development Approach",
    "Experienced & Caring Faculty",
    "Safe & Secure Environment",
    "Activity-Based Learning",
  ];

  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="flex-1 w-full max-w-2xl relative group">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl skew-y-1 transform transition-transform duration-700 hover:skew-y-0">
              <Image
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
                alt="Students learning"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            {/* Decorative Dot Blob */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl" />
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide uppercase">
                About Our School
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Where Learning is an{" "}
                <span className="text-primary">Adventure!</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Kinder School, we believe every child is unique. Our mission
                is to provide a nurturing, stimulating, and safe environment
                where children discover the joy of learning. We focus not just
                on academics, but on social, emotional, and physical growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-lg font-bold"
                asChild
              >
                <Link href="/about">
                  Discover More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
