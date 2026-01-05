"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ZoomIn, X } from "lucide-react";
// ... (lines 9-114 unchanged implies checking StartLine carefully)

// I will just replace the top imports and the DialogContent part to be safe or use multi_replace if possible.
// But replace_file_content is single block.
// I'll replace the whole file content for imports + render part? No, that's too big.
// I'll replace imports first, then the DialogContent part.
// But I can only do ONE replace per call if use replace_file_content.
// I will use multi_replace_file_content.

// Mock Data for the Gallery
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
    alt: "Sports Day Race",
    category: "Sports Day",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1577896335142-152ba3d11b8d?q=80&w=2070&auto=format&fit=crop",
    alt: "Playground Fun",
    category: "Campus Life",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    alt: "Art Class Projects",
    category: "Academics",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?q=80&w=2070&auto=format&fit=crop",
    alt: "Annual Day Dance",
    category: "Events",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1427504746694-8cb1ea610d26?q=80&w=2064&auto=format&fit=crop",
    alt: "Library Time",
    category: "Academics",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=2000&auto=format&fit=crop",
    alt: "Football Match",
    category: "Sports Day",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    alt: "Festival Celebration",
    category: "Events",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    alt: "Science Experiment",
    category: "Academics",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?q=80&w=2070&auto=format&fit=crop",
    alt: "Swimming Pool",
    category: "Campus Life",
  },
];

const categories = ["All", "Sports Day", "Events", "Academics", "Campus Life"];

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className="rounded-full px-6"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <Dialog key={img.id}>
              <DialogTrigger asChild>
                <div className="relative group overflow-hidden rounded-2xl cursor-zoom-in aspect-[4/3] bg-muted">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white w-10 h-10" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-semibold text-sm">
                      {img.alt}
                    </p>
                    <p className="text-white/80 text-xs">{img.category}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent
                showCloseButton={false}
                className="max-w-screen-xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none"
              >
                <DialogTitle className="sr-only">{img.alt}</DialogTitle>
                <DialogDescription className="sr-only">
                  {img.alt} - Category: {img.category}
                </DialogDescription>
                <div className="relative h-[85vh] w-full rounded-lg overflow-hidden group/modal">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain"
                  />
                  <DialogClose className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors focus:outline-none">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
