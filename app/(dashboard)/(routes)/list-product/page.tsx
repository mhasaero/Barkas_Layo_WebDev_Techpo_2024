"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import ProductItem from "@/components/Dashboard/ProductItem";
import { auth } from "@/lib/firebase";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { getProducts, list } from "@/lib/network/users/userQueries";

export default function page() {
  const [lists, setLists] = useState<any[]>([]);

  const router = useRouter();

  // const getProducts = async () => {
  //   const user = auth.currentUser;
  //   const col = query(
  //     collection(db, "products"),
  //     where("id", "==", user ? user.uid : ""),
  //   );
  //   const querySnapshot = await getDocs(col);
  //   querySnapshot.forEach((doc) => {
  //     lists.push(doc.data());
  //   });
  // };

  useEffect(() => {
    getProducts();
    console.log(list);
  }, []);

  return (
    <section id="list-product" className="space-y-10">
      <p className="text-lg font-medium">Produk yang Anda Jual</p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {lists.map((doc: any) => (
          <ProductItem
            key={doc.id}
            src={"/images/product/newcomer-keigo.png"}
            name={doc.id}
            shortDesc={doc.frequency}
            price={doc.price}
            id={doc.id}
            liked={false}
          />
        ))}
        <ProductItem
          key={1}
          src={"/images/product/newcomer-keigo.png"}
          name={"hai"}
          shortDesc={"hai"}
          price={100000}
          id={1}
          liked={false}
        />
      </div>
      <Button className="w-full">Tambahkan Produk</Button>
    </section>
  );
}
