"use client";

import { products } from "@/lib/product";
import React, { useState } from "react";
import RecommendationItem from "./RecommendationItem";
import { Button } from "../ui/button";

export default function Recommendation() {
  const [product, setProduct] = useState(products);
  const [slicedItem, setSLicedItem] = useState(8);
 
  function handleLiked(id: number) {
    setProduct((e) =>
      e.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product,
      ),
    );
  }

  function showMoreItems(){
    setSLicedItem(slicedItem+4);
  }

  return (
    <section id="recommendation">
      <div className="flex flex-col justify-center gap-10 px-4 py-4 md:px-12 md:py-6 lg:px-16 xl:px-24">
        <h1 className="text-center text-4xl font-bold">
          Rekomendasi Untuk Anda
        </h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {product.slice(0, slicedItem).map((product) => (
            <RecommendationItem
              key={product.id}
              src={product.src}
              name={product.name}
              shortDesc={product.shortDesc}
              price={product.price}
              id={product.id}
              liked={product.liked}
              onLikedButton={handleLiked}
            />
          ))}
        </div>
          <Button variant={"secondary"} size={"basic"} className="w-fit mx-auto" onClick={showMoreItems}>
            Lihat Lebih Banyak
          </Button>
      </div>
    </section>
  );
}
