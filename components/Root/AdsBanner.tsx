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
                <div className="h-80 lg:h-44 xl:h-52 w-full rounded-xl bg-lighterBlue">
                    <div className="flex flex-col lg:flex-row h-full w-full">
                      <div className="min-h-36 lg:h-full w-full lg:w-1/2">
                        <div className="h-full w-full rounded-t-xl lg:rounded-r-none lg:rounded-l-xl bg-[url('/images/kimbab-banner.png')] bg-cover bg-center"></div>
                      </div>
                      <div className="lg:h-full w-full lg:w-1/2 py-5 lg:py-0 px-5 flex flex-col  lg:justify-center gap-2">
                        <div className="flex gap-2">
                          <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl text-muted-foreground">
                            PROMO KEMERDEKAAN
                          </h1>
                          <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl text-primary">KIMBAB YEAY</h1>
                        </div>
                        <div className="flex flex-col  gap-1">
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
                  <div className="h-80 lg:h-44 xl:h-52 w-full rounded-xl bg-lighterBlue">
                    <div className="flex flex-col lg:flex-row h-full w-full">
                      <div className="min-h-36 lg:h-full w-full lg:w-1/2">
                        <div className="h-full w-full rounded-t-xl lg:rounded-r-none lg:rounded-l-xl bg-[url('/images/kost-banner.png')] bg-cover bg-center"></div>
                      </div>
                      <div className="lg:h-full w-full lg:w-1/2 py-3 px-4 md:py-5 md:px-5 lg:py-0  flex flex-col  lg:justify-center gap-1 lg:gap-2">
                        <div className="flex gap-2">
                          <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl text-muted-foreground">
                          TAKE OVER KAMAR
                          </h1>
                          <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl text-primary"></h1>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-primary">
                          KOST MUSLIMAH 2
                          </h1>
                          <p className="text-xs text-muted-foreground">
                          *Khusus Putri
                          </p>
                          <p className="text-xs text-muted-foreground">
                          *Dekat UNSRI (Gg. Buntu)
                          </p>
                          <p className="text-xs text-muted-foreground">
                          *Periode Agustus-Desember (Alasan mau magang)
                          </p>
                          <p className="text-xs font-bold text-primary">
                          Selengkapnya Hubungi: 0853-7812-1234
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
                  <div className="h-80 lg:h-44 xl:h-52 w-full rounded-xl bg-[#D9D4D0]">
                    <div className="flex flex-col lg:flex-row h-full w-full">
                      <div className="min-h-36 lg:h-full w-full lg:w-1/2">
                        <div className="h-full w-full rounded-t-xl lg:rounded-r-none lg:rounded-l-xl bg-[url('/images/ads-banner.png')] bg-cover bg-center"></div>
                      </div>
                      <div className="flex  lg:relative lg:h-full w-full lg:w-1/2 py-2 px-1 md:py-5 md:px-5 lg:py-0 xl:-ml-6 items-center justify-center">
                        <div className="lg:absolute xl:flex lg:w-[475px] xl:w-auto bottom-auto lg:-left-16 xl:-left-0 flex flex-col gap-3 md:items-center md:gap-8 lg:gap-3 lg:border-[1px] border-primary py-1 px-2 lg:py-2 lg:px-4 xl:py-3 xl:px-6 rounded-lg">
                          <div className="flex flex-col md:flex-row md:gap-2 text-center text-sm md:text-base lg:text-xs xl:text-sm">
                            <h5 className="text-muted-foreground font-medium ">Ingin memasarkan produk?  </h5>
                            <h5 className="text-primary font-bold">Hubungi kami</h5>
                            <h5 className="text-muted-foreground font-medium">untuk jasa iklan!</h5>
                          </div>
                          <div className="flex flex-col md:flex-row gap-1 lg:gap-2 text-xl lg:text-xl xl:text-2xl font-semibold text-primary text-center">
                          <h1>0853-1234-5678 </h1>
                          <h1>(Admin Barkas)</h1>
                          </div>

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
