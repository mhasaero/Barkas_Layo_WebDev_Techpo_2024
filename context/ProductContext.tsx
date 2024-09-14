"use client"

import { db } from '@/lib/firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext<any>(null);

export function useProduct(){
  return useContext(ProductContext);
}

export default function ProductContextProvider({ children } : any) {
  const [products, setProducts] =  useState<any>([])
  const [sellersName, setSellersName] = useState<any>([]);

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsArray : any = [];
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      product.id = doc.id;

      productsArray.push({ ...product });

      if (productsArray.length === querySnapshot.docs.length) {
        setProducts(productsArray);
      }
    });

  };

  const getSellerName = () => {
    products.forEach(async (product : any) => {
      if (!sellersName[product.sellerId]) {
        const sellerRef = doc(db, 'users', product.sellerId);
        const sellerDoc : any = await getDoc(sellerRef);
  
        if (sellerDoc.exists()) {
          const sellerData = sellerDoc.data();
          setSellersName((prevSellers : any) => ({
            ...prevSellers,
            [product.sellerId]: sellerDoc.data().displayName,
          }));

          
        }
      }
    }
  );
  }

  useEffect(() => {
    getProducts();
    // getSellerName();
  }, []);

  useEffect(() => {

    if (products.length > 0) {
      getSellerName();
    }
  }, [products]);

  const value = { products, sellersName }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}
