"use client";

import { auth, db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";

const ProductContext = createContext<any>(null);

export function useProduct() {
  return useContext(ProductContext);
}

export default function ProductContextProvider({ children }: any) {
  const [products, setProducts] = useState<any>([]);
  const [likedProducts, setLikedProducts] = useState<any>([]);
  const [sellersName, setSellersName] = useState<any>([]);
  const { uid } = useAuth();


  // get product global
  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsArray: any = [];
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      product.id = doc.id;

      productsArray.push({ ...product });

      if (productsArray.length === querySnapshot.docs.length) {
        setProducts(productsArray);
      }
    });
  };

  // get seller name for each product
  const getSellerName = () => {
    products.forEach(async (product: any) => {
      if (!sellersName[product.sellerId]) {
        const sellerRef = doc(db, "users", product.sellerId);
        const sellerDoc: any = await getDoc(sellerRef);

        if (sellerDoc.exists()) {
          const sellerData = sellerDoc.data();
          setSellersName((prevSellers: any) => ({
            ...prevSellers,
            [product.sellerId]: sellerDoc.data().displayName,
          }));
        }
      }
    });
  };

  //add liked product
  const addLikedProduct = async ( product : any) => {
    let Product;
    Product = product;
    Product["liked"] = true;

    await setDoc(doc(db, `liked${uid}`, Product.id), Product);
  }

  //get liked product
  const getLikedProduct = () => {
      return new Promise(async (resolve, reject) => {
        try {
          if (uid) {
            const q = query(collection(db, `liked${uid}`));
            const unsub = onSnapshot(q, (querySnapshot) => {  
              const Product : any = [];
              querySnapshot.forEach((doc) => { 
                Product.push({ ...doc.data(), id: doc.id });
              });
              setLikedProducts(Product); 
            })
            console.log('success!');
            return () => unsub;  
          } else {
            setLikedProducts([]);
          }
          resolve(likedProducts);
        } catch (err) {
          reject(`Error fetching products: ${err}`);
        }
      });
  }

  useEffect(() => {
    getProducts();
  }, []);
  
  useEffect(() => {
    if (products.length > 0) {
      getSellerName();
    }
  }, [products]);

  useEffect(() => {
    getLikedProduct();
    console.log(uid);
  }, [uid]);

  const value = { products, sellersName, addLikedProduct, likedProducts};

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
