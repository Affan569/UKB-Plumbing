"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type BrandLogo = {
  name: string;
  imageUrl: string;
  altText: string;
};

const brands: BrandLogo[] = [
  { name: "Vaillant", imageUrl: "/lovable-uploads/49e1cf90-c74d-4037-bcbd-dbe506cc2108.png", altText: "Vaillant Accredited Installer logo" },
  { name: "Worcester", imageUrl: "/lovable-uploads/be8fcfc5-921b-4e89-9bf5-4cb130f86b44.png", altText: "Worcester Accredited Installer logo" },
  { name: "Glow Worm", imageUrl: "/lovable-uploads/0e0e1d58-e270-46d4-ada9-5cf3aa12c713.png", altText: "Glow Worm logo" },
  { name: "Gas Safe", imageUrl: "/lovable-uploads/d0641dab-cf90-489f-88c5-e2060752b6d9.png", altText: "Gas Safe Register logo" }
];

const BrandCarousel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-ukb-blue mb-3">
            Trusted Brands We Work With
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to be certified installers and service providers for these industry-leading plumbing and heating brands.
          </p>
        </div>

        {/* Desktop view - carousel with autoplay */}
        <Carousel
          className="w-full max-w-4xl mx-auto"
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent>
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/4">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-subtle transition-all hover:shadow-elevated">
                  <img src={brand.imageUrl} alt={brand.altText} className="h-16 object-contain mb-3" loading="lazy" decoding="async" />
                  <p className="text-sm font-medium text-gray-700">{brand.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default BrandCarousel;