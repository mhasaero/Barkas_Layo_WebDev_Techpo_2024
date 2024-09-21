"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CarouselApi, CarouselItem } from "@/components/ui/carousel";
import RecommendationItem from "@/components/Root/RecommendationItem";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useParams } from "next/navigation";
import { useProduct } from "@/context/ProductContext";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ViewProduct() {
  const { products, sellersName } = useProduct();

  const path = useParams<{ slug: string }>();

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

  const productId = useParams<{ slug: string }>();

  function handleLiked(id: number) {
    // setProduct((e) =>
    //   e.map((product) =>
    //     product.id === id ? { ...product, liked: !product.liked } : product,
    //   ),
    // );
  }

  return (
    <div>
      {products.map((e: any) => {
        if (e.id == path.slug) {
          return (
            <section id="detail-product" className="flex flex-col gap-24 py-10">
              <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
                <div className="md:w-1/2">
                  {/* <ItemCarousel>
                    {e.src.map((src : any) => (
                      <CarouselItem>
                        <div className="h-[350px] w-full rounded-2xl bg-card">
                          <Image
                            src={src}
                            width={500}
                            height={500}
                            alt="the-newcomer-keigo-higashino"
                            className="mx-auto h-full w-3/4 object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </ItemCarousel> */}
                  <div className="h-[350px] w-full rounded-2xl bg-card">
                    <Image
                      src={e.img}
                      width={500}
                      height={500}
                      alt="the-newcomer-keigo-higashino"
                      className="mx-auto h-full w-3/4 object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    {Array.from({ length: count }).map((_, index) => (
                      <div
                        key={index}
                        className={`relative h-6 w-6 rounded-full ${index + 1 === current ? "bg-[#0051BA] bg-opacity-70" : "bg-background"}`}
                      >
                        <div
                          key={index}
                          className={`absolute right-1/4 top-1/4 h-3 w-3 cursor-pointer rounded-full ${
                            index + 1 === current
                              ? "bg-[#0051BA]"
                              : "bg-[#D8D8D8]"
                          }`}
                          onClick={() => api && api.scrollTo(index)}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-full w-full rounded-2xl bg-card px-8 py-7 md:w-2/5">
                  <h3 className="font-semibold lg:text-3xl xl:text-4xl">
                    {e.name}
                  </h3>
                  <p className="mt-2 text-lg text-muted xl:text-xl">
                    {e.frequency}
                  </p>
                  <div className="my-4 flex items-center gap-2">
                    <p className="text-sm font-semibold">Rp</p>
                    <h3 className="text-2xl font-bold xl:text-3xl">
                      {e.price}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 rounded-2xl border-2 border-border px-4 py-3">
                    <Image
                      src={"/images/profileDefault.png"}
                      width={500}
                      height={500}
                      alt="doksli"
                      className="size-12 rounded-full"
                    />
                    <h3 className="text-xl font-medium">
                      {sellersName[e.sellerId]}
                    </h3>
                  </div>
                  <div className="mt-4 flex">
                    <Button className="flex gap-2 py-4">
                      <Image
                        src={"/images/icon-whatsapp.png"}
                        width={500}
                        height={500}
                        alt="whatsapp"
                        className="size-4 xl:size-6"
                      />
                      <p className="text-xs md:text-sm xl:text-base">
                        Hubungi Penjual
                      </p>
                    </Button>
                    <div></div>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-medium">
                      Rincian Produk
                    </AccordionTrigger>
                    <AccordionContent>{e.summary}</AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-3 rounded-2xl border-2 border-border px-4 py-3">
                  <h3 className="text-2xl font-medium">Keterangan Penjual</h3>
                  <p className="text-sm">{e.info}</p>
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <p className="text-lg font-medium text-foreground">
                  Produk Lainnya
                </p>

                <ScrollArea>
                  <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {products.slice(0, 4).map((product: any) => (
                      <RecommendationItem
                        key={product.id}
                        src={product.img}
                        name={product.name}
                        shortDesc={product.frequency}
                        price={product.price}
                        id={product.id}
                        liked={false}
                        onLikedButton={handleLiked}
                      />
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </section>
          );
        }
      })}
    </div>
  );
}
