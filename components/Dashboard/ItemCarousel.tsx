"use client";

import React, { ReactNode, useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

type props = {
  children?: ReactNode;
};

export default function ItemCarousel({ children }: props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="flex flex-col gap-4">
      <CarouselContent>{children}</CarouselContent>

      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`relative h-6 w-6 rounded-full ${index + 1 === current ? "bg-[#0051BA] bg-opacity-70" : "bg-background"}`}
          >
            <div
              key={index}
              className={`absolute right-1/4 top-1/4 h-3 w-3 cursor-pointer rounded-full ${
                index + 1 === current ? "bg-[#0051BA]" : "bg-[#D8D8D8]"
              }`}
              onClick={() => api && api.scrollTo(index)}
            ></div>
          </div>
        ))}
      </div>
    </Carousel>
  );
}
