"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function AdsBanner() {
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
    <section id="ads" className="">
      <div className="flex items-center">
        <div className="flex w-full flex-col gap-10 px-4 py-4 md:px-12 md:py-6 lg:px-16 xl:px-24">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem>
                <div>
                  <div className="h-[50vh] lg:h-44 xl:h-52 w-full rounded-xl bg-lighterBlue">
                    <div className="flex flex-col lg:flex-row h-full w-full">
                      <div className="h-full w-full lg:w-1/2">
                        <div className="h-full w-full rounded-t-xl lg:rounded-l-xl bg-[url('/images/kimbab-banner.png')] bg-cover bg-center"></div>
                      </div>
                      <div className="h-44 lg:h-full w-full lg:w-1/2 py-5 lg:py-0 px-5 flex flex-col  lg:justify-center gap-2">
                        <div className="flex gap-2">
                          <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl text-muted-foreground">
                            PROMO KEMERDEKAAN
                          </h1>
                          <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl text-primary">KIMBAB YEAY</h1>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-primary">
                            BELI 7 KIMBAB + FREE 2 KIMBAB
                          </h1>
                          <p className="text-xs text-muted-foreground">
                            *Hanya berlaku pada 17 Agustus 2024
                          </p>
                          <p className="text-xs text-muted-foreground">
                            *Lokasi di depan kampus UNSRI Layo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="my-2 text-center text-base lg:text-lg text-primary">
                    Iklan
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div>
                  <div className="h-[50vh] lg:h-44 xl:h-52 w-full rounded-xl bg-lighterBlue">
                    <div className="flex flex-col lg:flex-row h-full w-full">
                      <div className="h-full w-full lg:w-1/2">
                        <div className="h-full w-full rounded-t-xl lg:rounded-l-xl bg-[url('/images/kimbab-banner.png')] bg-cover bg-center"></div>
                      </div>
                      <div className="h-44 lg:h-full w-full lg:w-1/2 py-5 lg:py-0 px-5 flex flex-col  lg:justify-center gap-2">
                        <div className="flex gap-2">
                          <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl text-muted-foreground">
                            PROMO KEMERDEKAAN
                          </h1>
                          <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl text-primary">KIMBAB YEAY</h1>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-primary">
                            BELI 7 KIMBAB + FREE 2 KIMBAB
                          </h1>
                          <p className="text-xs text-muted-foreground">
                            *Hanya berlaku pada 17 Agustus 2024
                          </p>
                          <p className="text-xs text-muted-foreground">
                            *Lokasi di depan kampus UNSRI Layo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="my-2 text-center text-base lg:text-lg text-primary">
                    Iklan
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div>
                  <div className="h-[50vh] lg:h-44 xl:h-52 w-full rounded-xl bg-lighterBlue">
                    <div className="flex flex-col lg:flex-row h-full w-full">
                      <div className="h-full w-full lg:w-1/2">
                        <div className="h-full w-full rounded-t-xl lg:rounded-l-xl bg-[url('/images/kimbab-banner.png')] bg-cover bg-center"></div>
                      </div>
                      <div className="h-44 lg:h-full w-full lg:w-1/2 py-5 lg:py-0 px-5 flex flex-col  lg:justify-center gap-2">
                        <div className="flex gap-2">
                          <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl text-muted-foreground">
                            PROMO KEMERDEKAAN
                          </h1>
                          <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl text-primary">KIMBAB YEAY</h1>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-primary">
                            BELI 7 KIMBAB + FREE 2 KIMBAB
                          </h1>
                          <p className="text-xs text-muted-foreground">
                            *Hanya berlaku pada 17 Agustus 2024
                          </p>
                          <p className="text-xs text-muted-foreground">
                            *Lokasi di depan kampus UNSRI Layo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="my-2 text-center text-base lg:text-lg text-primary">
                    Iklan
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

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
        </div>
      </div>
    </section>
  );
}
