"use client";

import React, { useEffect, useState } from "react";
import RecommendationItem from "./RecommendationItem";
import { Button } from "../ui/button";
import { useProduct } from "@/context/ProductContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";

export default function Recommendation() {
  const { products, isProductLiked, addLikedProduct } = useProduct();
  const { uid } = useAuth();
  const router = useRouter();
  const [slicedItem, setSLicedItem] = useState(8);
  const [likedProducts, setLikedProducts] = useState<any>({});

  useEffect(() => {
    if (uid) {
      products.forEach(async (product: any) => {
        const liked = await isProductLiked(product.id);
        setLikedProducts((prev: any) => ({
          ...prev,
          [product.id]: liked,
        }));
      });
    }
  }, [uid, products]);

  async function handleLiked(product: any) {
    if (uid !== null) {
      addLikedProduct(product);
      setLikedProducts((prev: any) => ({
        ...prev,
        [product.id]: !prev[product.id],
      }));
      if (likedProducts[product.id]) {
        await deleteDoc(doc(db, `liked${uid}`, product.id)).then(() => {
          toast("successfully deleted");
        });
      }
    } else {
      toast("Please Login first!");
      router.push("/login");
    }
  }

  function showMoreItems() {
    setSLicedItem(slicedItem + 4);
  }

  return (
    <section id="recommendation" className="scroll-mt-40">
      <div className="flex flex-col justify-center gap-10 px-4 py-4 md:px-12 md:py-6 lg:px-16 xl:px-24">
        <h1 className="text-center text-4xl font-bold">
          Rekomendasi Untuk Anda
        </h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, slicedItem).map((product: any) => (
            <RecommendationItem
              key={product.id}
              src={product.img}
              name={product.name}
              shortDesc={product.frequency}
              price={product.price}
              id={product.id}
              liked={likedProducts[product.id]}
              onLikedButton={() => handleLiked(product)}
            />
          ))}
        </div>
        <Button
          variant={"secondary"}
          size={"lg"}
          className="mx-auto w-fit"
          onClick={showMoreItems}
        >
          Lihat Lebih Banyak
        </Button>
      </div>
    </section>
  );
}
