"use client";

import { useEffect, useState } from "react";
import RecommendationItem from "@/components/Root/RecommendationItem";
import { products } from "@/lib/product";
import { useProduct } from "@/context/ProductContext";
import { useAuth } from "@/context/AuthContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function page() {  
  const { likedProducts } = useProduct();
  const { uid } = useAuth();

  async function handleLiked(id: string) {
    await deleteDoc(doc(db, `liked${uid}`, id)).then(() => {
      alert("successfully deleted");
    })
  }

  return (
    <section id="favorites">
      {likedProducts.length > 0 ? 
      <div><p className="text-lg font-medium">Disukai</p>
      <div className="my-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {likedProducts.map((product : any) => (
          <RecommendationItem
                key={product.id}
                src={product.img}
                name={product.name}
                shortDesc={product.frequency}
                price={product.price}
                id={product.id}
                liked={true}
                onLikedButton={() => handleLiked(product.id)}
              />             
        ))}
      </div></div> : <p className="text-center">Belum ada produk yang disukai</p>}
      
    </section>
  );
}
