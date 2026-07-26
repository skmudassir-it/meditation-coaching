"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import type { TestimonialItem } from "@/lib/data";

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel
      opts={{ loop: true, align: "center" }}
      plugins={[plugin.current]}
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((item, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="glass-card h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="w-6 h-6 text-[oklch(0.55/0.10/160)] mb-4 opacity-50"
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <FontAwesomeIcon
                        key={j}
                        icon={faStar}
                        className="w-3.5 h-3.5 text-[oklch(0.78/0.08/90)]"
                      />
                    ))}
                  </div>
                  <div className="mt-auto">
                    <div className="font-semibold text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.role}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
