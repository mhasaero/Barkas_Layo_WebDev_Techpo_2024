"use client";

import React, { useState } from "react";
import RecommendationItem from "@/components/Root/RecommendationItem";
import { Button } from "@/components/ui/button";
import { useProduct } from "@/context/ProductContext";

import Image from "next/image";
import { DropDown } from "@/components/ui/DropDown";

export default function page() {
  const { products } = useProduct();

  const [slicedItem, setSLicedItem] = useState(8);

  function handleLiked(id: number) {
    // setProduct((e : any) =>
    //   e.map((product : any) =>
    //     product.id === id ? { ...product, liked: !product.liked } : product,
    //   ),
    // );
  }

  function showMoreItems() {
    setSLicedItem(slicedItem + 4);
  }

  return (
    <section
      id="category"
      className="mb-10 space-y-6 md:space-y-12 xl:space-y-20"
    >
      <h1 className="text-3xl font-bold">Semua Produk</h1>
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <Image
          src={"/images/category-1.png"}
          width={500}
          height={500}
          alt="category-1"
          className="md:w-1/2"
        />
        <div className="space-y-6 md:w-1/2">
          <Image
            src={"/images/category-2.png"}
            width={500}
            height={500}
            alt="category-2"
            className="w-full"
          />
          <div className="flex justify-between gap-6">
            <Image
              src={"/images/category-3.png"}
              width={500}
              height={500}
              alt="category-3"
              className=""
            />
            <Image
              src={"/images/category-4.png"}
              width={500}
              height={500}
              alt="category-4"
              className="md:w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <DropDown />
        <p>Jumlah produk {products.length}</p>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, slicedItem).map((product: any) => (
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
      <Button
        variant={"secondary"}
        size={"basic"}
        className="w-full"
        onClick={showMoreItems}
      >
        Lihat Lebih Banyak
      </Button>
      <h1 className="text-center text-2xl font-bold xl:text-4xl">
        Anda Mungkin Tertarik Juga Dengan
      </h1>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="group relative h-[50vh] w-full cursor-pointer overflow-hidden rounded-xl lg:h-[70vh]">
          <div className="h-full w-full bg-[url('/images/shoe-category.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-[#0051BA] bg-opacity-35"></div>
          <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
            Sepatu
          </span>
        </div>
        <div className="group relative h-[50vh] w-full cursor-pointer overflow-hidden rounded-xl lg:h-[70vh]">
          <div className="h-full w-full bg-[url('/images/chair-category.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-[#0051BA] bg-opacity-35"></div>
          <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
            Kursi
          </span>
        </div>
        <div className="group relative h-[50vh] w-full cursor-pointer overflow-hidden rounded-xl lg:h-[70vh]">
          <div className="h-full w-full bg-[url('/images/table-category.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-[#0051BA] bg-opacity-35"></div>
          <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
            Meja
          </span>
        </div>
      </div>
    </section>
  );
}
