"use client";

import { useState } from "react";
import RecommendationItem from "@/components/Root/RecommendationItem";
import { products } from "@/lib/product";

export default function page() {
  const [product, setProduct] = useState(products);

  function handleLiked(id: number) {
    setProduct((e) =>
      e.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product,
      ),
    );
  }

  return (
    <section id="favorites">
      <p className="text-lg font-medium">Disukai</p>
      <div className="my-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {product.map((product) => {
          if (product.liked) {
            return (
              <RecommendationItem
                key={product.id}
                src={product.src[0]}
                name={product.name}
                shortDesc={product.shortDesc}
                price={product.price}
                id={product.id}
                liked={product.liked}
                onLikedButton={handleLiked}
              />
            );
          }
        })}
      </div>
    </section>
  );
}
