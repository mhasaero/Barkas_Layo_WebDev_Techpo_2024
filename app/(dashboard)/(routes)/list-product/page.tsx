"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import ProductItem from "@/components/Dashboard/ProductItem";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  return (
    <section id="list-product" className="space-y-10">
      <p className="text-lg font-medium">Produk yang Anda Jual</p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        <ProductItem
          key={1}
          src={"/images/product/newcomer-keigo.png"}
          name={"newcomer-keigo"}
          shortDesc={"Seperti Baru"}
          price={50000}
          id={1}
          liked={false}
        />
        <ProductItem
          key={2}
          src={"/images/product/meja-product.png"}
          name={"meja tahan banting"}
          shortDesc={"Seperti Baru"}
          price={500000}
          id={2}
          liked={false}
        />
      </div>
      <Button
        className="w-full"
        onClick={() => {
          router.push("/add-product");
        }}
      >
        Tambahkan Produk
      </Button>
    </section>
  );
}
