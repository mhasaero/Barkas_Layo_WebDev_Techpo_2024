"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ProductItem from "@/components/Dashboard/ProductItem";
import { useRouter } from "next/navigation";
import { getUserProducts } from "@/lib/network/users/userQueries";
import { useAuth } from "@/context/AuthContext";
import { Skeleton } from "@/components/ui/skeleton";

export default function ListProduct() {
  const [lists, setLists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, uid } = useAuth();

  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    getUserProducts(user)
      .then((products: any) => {
        setLists(products);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [uid]);

  return (
    <section id="list-product" className="space-y-10">
      <p className="text-lg font-medium">Produk yang Anda Jual</p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          <>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-40 w-full rounded-xl bg-cover bg-center md:h-64 lg:h-56 xl:h-64" />
              <div className="space-y-2">
                <Skeleton className="h-4" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-40 w-full rounded-xl bg-cover bg-center md:h-64 lg:h-56 xl:h-64" />
              <div className="space-y-2">
                <Skeleton className="h-4" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          </>
        ) : lists.length >= 1 ? (
          lists.map((doc: any) => (
            <ProductItem
              key={doc.id}
              src={doc.img}
              name={doc.name}
              shortDesc={doc.frequency}
              price={doc.price}
              id={doc.id}
              liked={false}
            />
          ))
        ) : (
          <p className="py-8 text-center">Belum ada produk yang dijual</p>
        )}
      </div>
      <Button className="w-full" onClick={() => router.push("/add-product")}>
        Tambahkan Produk
      </Button>
    </section>
  );
}
