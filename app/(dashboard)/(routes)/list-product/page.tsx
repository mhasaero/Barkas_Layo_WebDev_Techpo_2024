"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ProductItem from "@/components/Dashboard/ProductItem";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Skeleton } from "@/components/ui/skeleton";

export default function page() {
  const { user, uid } = useAuth();

  const [lists, setLists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // const user = auth.currentUser;

  const router = useRouter();

  // const getProducts = async () => {
  //   setLoading(true);

  //   try{
  //     const user = auth.currentUser;
  //     const col = query(
  //       collection(db, "products"),
  //       where("id", "==", user ? user.uid : ""),
  //     );
  //     const querySnapshot = await getDocs(col);
  //     const productsArray: any = [];
  //     querySnapshot.forEach((doc) => {

  //       productsArray.push(doc.data());

  //       if (productsArray.length === querySnapshot.docs.length) {
  //         setLists(productsArray);
  //       }
  //     });
  //   } catch(error) {

  //   } finally {
  //   setLoading(false);
  //   }

  // };

  // useEffect(() => {
  //   getProducts().then(() => {

  //   })
  // }, []);
  
  const getProducts = () => {
    return new Promise(async (resolve, reject) => {

      try {
        const col = query(
          collection(db, "products"),
          where("sellerId", "==", user.uid),
        );
        const querySnapshot = await getDocs(col);
        const productsArray: any[] = [];

        querySnapshot.forEach((doc) => {
          const product = doc.data();
          product.id = doc.id;
          productsArray.push({ ...product });
        });

        resolve(productsArray);
      } catch (err) {
        reject(`Error fetching products: ${err}`);
      }
    });
  };

  useEffect(() => {
    // if (!user) router.push("/");
    setLoading(true);
    getProducts()
      .then((products: any) => {
        // alert("nais");
        setLists(products);
        setLoading(false);
      })
      .catch((err) => {
        // setError(err);
        // alert(err);
        setLoading(false);
      });
  }, [uid]);


  return (
    <section id="list-product" className="space-y-10">
      <p className="text-lg font-medium">Produk yang Anda Jual</p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {loading ?     
        <>
          <div className="flex flex-col space-y-3">
          <Skeleton className=" h-40 w-full bg-cover bg-center md:h-64 lg:h-56 xl:h-64 rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Skeleton className=" h-40 w-full bg-cover bg-center md:h-64 lg:h-56 xl:h-64 rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
        </>
         : 
         lists.length >= 1 ?
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
        )) : <p className="text-center py-8">Belum ada produk yang dijual</p>
      }
      </div>
      <Button className="w-full" onClick={() => router.push("/add-product")}>
        Tambahkan Produk
      </Button>
    </section>
  );
}
