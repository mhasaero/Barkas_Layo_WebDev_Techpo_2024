"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";

export default function Category() {
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

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section id="category" className="h-auto scroll-mt-40">
      <div className="flex flex-col gap-10 px-4 py-4 md:px-12 md:py-6 lg:flex-row lg:gap-4 lg:px-16 xl:px-24">
        <div className="flex w-full flex-col items-center justify-center lg:h-[70vh] lg:w-1/4">
          <div className="flex w-full flex-col gap-10 md:w-full lg:w-fit lg:gap-4">
            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-4 lg:gap-2">
                <h3 className="text-4xl font-bold lg:text-2xl">
                  Kategori Pilihan
                </h3>
                <hr className="w-28 border-t-2 border-primary lg:w-[72px]" />
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between lg:flex-col lg:justify-normal">
              <div className="flex items-center gap-3">
                <Image
                  src={"/images/chart.png"}
                  width={50}
                  height={50}
                  alt="icon"
                />
                <div className="flex flex-col justify-center text-lg text-muted-foreground lg:text-sm">
                  <span>200+ Produk</span>
                  <span>Berkas Layak Pakai</span>
                </div>
              </div>

              <Button variant={"secondary"} size={"basic"}>
                Semua Kategori
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-col gap-4 lg:w-3/4">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem className="lg:basis-1/3">
                <div className="group relative h-[50vh] w-full cursor-pointer overflow-hidden rounded-xl lg:h-[70vh]">
                  <div className="h-full w-full bg-[url('/images/shoe-category.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-[#0051BA] bg-opacity-35"></div>
                  <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
                    Sepatu
                  </span>
                </div>
              </CarouselItem>

              <CarouselItem className="lg:basis-1/3">
                <div className="group relative h-[50vh] w-full cursor-pointer overflow-hidden rounded-xl lg:h-[70vh]">
                  <div className="h-full w-full bg-[url('/images/chair-category.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-[#0051BA] bg-opacity-35"></div>
                  <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
                    Kursi
                  </span>
                </div>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <div className="group relative h-[50vh] w-full cursor-pointer overflow-hidden rounded-xl lg:h-[70vh]">
                  <div className="h-full w-full bg-[url('/images/table-category.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-[#0051BA] bg-opacity-35"></div>
                  <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
                    Meja
                  </span>
                </div>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <div className="group relative h-[50vh] w-full cursor-pointer overflow-hidden rounded-xl lg:h-[70vh]">
                  <div className="h-full w-full bg-[url('/images/bag-category.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-[#0051BA] bg-opacity-35"></div>
                  <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
                    Tas
                  </span>
                </div>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <div className="group relative h-[50vh] w-full cursor-pointer overflow-hidden rounded-xl lg:h-[70vh]">
                  <div className="h-full w-full bg-[url('/images/skincare-category.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-[#0051BA] bg-opacity-35"></div>
                  <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
                    Skincare
                  </span>
                </div>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <div className="group relative h-[50vh] w-full cursor-pointer overflow-hidden rounded-xl lg:h-[70vh]">
                  <div className="h-full w-full bg-[url('/images/clothes-category.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-[#0051BA] bg-opacity-35"></div>
                  <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
                    Baju
                  </span>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <div className="hidden items-center justify-center gap-2 lg:flex">
            {Array.from({ length: Math.ceil(count / 3) }).map((_, index) => (
              <div
                key={index}
                className={`relative h-6 w-6 rounded-full ${index === Math.floor((current - 1) / 3) ? "bg-[#0051BA] bg-opacity-70" : "bg-background"}`}
              >
                <div
                  key={index}
                  className={`absolute right-1/4 top-1/4 h-3 w-3 cursor-pointer rounded-full ${
                    index === Math.floor((current - 1) / 3)
                      ? "bg-[#0051BA]"
                      : "bg-[#D8D8D8]"
                  }`}
                  onClick={() => api && api.scrollTo(index * 3)}
                ></div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 lg:hidden">
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
        </div>
      </div>
    </section>
  );
}
