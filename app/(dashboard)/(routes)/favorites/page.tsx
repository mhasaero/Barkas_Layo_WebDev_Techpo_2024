"use client";

import { useState } from "react";
import RecommendationItem from "@/components/Root/RecommendationItem";
import { products } from "@/lib/product";

export default function page() {
  const [product, setProduct] = useState(
    products.map((product) =>
      product ? { ...product, liked: true } : product,
    ),
  );

  function handleLiked(id: number) {
    setProduct((e) => e.filter((product) => product.id != id));
  }

  return (
    <section id="favorites">
      <p className="text-lg font-medium">Disukai</p>
      <div className="my-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {product.map((product) => (
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
    </section>
  );
}
