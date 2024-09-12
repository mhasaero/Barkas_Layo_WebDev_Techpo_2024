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
  const [loading, setLoading] = useState(true);

  const user = auth.currentUser;

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
  //     console.error("Error fetching products:", error);
  //   } finally {
  //   setLoading(false);
  //   }
    
  // };

  // useEffect(() => {
  //   getProducts().then(() => {

  //   })
  //   console.log(lists);
  // }, []);



  const getProducts = () => {
    return new Promise(async (resolve, reject) => {
      

      if (!user) {
        reject("User is not authenticated");
        return;
      } else {
        alert(user.uid);
      }

      try {
        const col = query(
          collection(db, "products"),
          where("id", "==", user.uid)
        );
        const querySnapshot = await getDocs(col);
        const productsArray: any[] = [];

        querySnapshot.forEach((doc) => {
          const product = doc.data();
          product.id = doc.id;
          productsArray.push({ ...product });
        });

        console.log(productsArray);

        resolve(productsArray);
      } catch (err) {
        reject(`Error fetching products: ${err}`);
      }
    });
  };

  useEffect(() => {
    if (!user) router.push("/");
    setLoading(true);
    getProducts()
      .then((products: any) => {
        alert("nais");
        setLists(products);
        console.log(products);
        setLoading(false);
      })
      .catch((err) => {
        // setError(err);
        alert(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="list-product" className="space-y-10">
      <p className="text-lg font-medium">Produk yang Anda Jual</p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {loading ? <div>bang loading dulu mff ya</div> : lists.map((doc: any) => (
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
        {/* <ProductItem
          key={1}
          src={"/images/product/newcomer-keigo.png"}
          name={"hai"}
          shortDesc={"hai"}
          price={100000}
          id={1}
          liked={false}
        /> */}
      </div>
      <Button className="w-full">Tambahkan Produk</Button>
    </section>
  );
}
