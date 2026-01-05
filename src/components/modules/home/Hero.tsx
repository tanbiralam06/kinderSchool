"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
      title: "Nurturing Future Leaders",
      subtitle:
        "A safe, fun, and creative environment for your child to grow and learn.",
      cta: "Admissions Open",
      link: "/admissions",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop",
      title: "Learning Through Play",
      subtitle:
        "Our unique curriculum combines academic excellence with creative play.",
      cta: "Explore Academics",
      link: "/academics",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2070&auto=format&fit=crop",
      title: "World-Class Facilities",
      subtitle:
        "State-of-the-art infrastructure designed for safety and holistic development.",
      cta: "Visit Campus",
      link: "/contact",
    },
  ];

  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-background">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "bg-primary w-8 rounded-full",
          bulletClass:
            "inline-block w-3 h-3 bg-white/50 rounded-full mx-1 cursor-pointer transition-all duration-300",
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container px-4 text-center text-white">
                  <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl drop-shadow-lg animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    {slide.title}
                  </h1>
                  <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl lg:text-2xl drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    {slide.subtitle}
                  </p>
                  <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                    <Button
                      size="lg"
                      className="h-14 rounded-full px-8 text-lg font-bold shadow-lg"
                      asChild
                    >
                      <Link href={slide.link}>
                        {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: var(--primary) !important;
          width: 32px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
