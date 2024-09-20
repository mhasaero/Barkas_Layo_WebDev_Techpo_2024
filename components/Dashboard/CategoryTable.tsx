"use client";

import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import RecommendationItem from "@/components/Root/RecommendationItem";
import { DropDown } from "@/components/ui/DropDown";

import { cn } from "@/lib/utils";
import { useProduct } from "@/context/ProductContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";
import { delay } from "@/lib/delay";

export default function CategoryTable() {
  const { products, addLikedProduct } = useProduct();
  const { uid } = useAuth();
  const [likedProducts, setLikedProducts] = useState<any>({});
  const router = useRouter();

  const rowsTable = 8;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(rowsTable);
  const [active, setActive] = useState(1);

  // handle items showed per pagination
  function pageHandler(start: any, end: any) {
    setStart(start);
    setEnd(end);
  }

  // handle pagination arrow
  function arrowPageHandler(arrow: any) {
    if (arrow == "next") setActive((prev) => (active < 3 ? prev + 1 : prev));
    else if (arrow == "prev")
      setActive((prev) => (active > 1 ? prev - 1 : prev));
  }

  // set items showed
  useEffect(() => {
    switch (active) {
      case 1:
        return pageHandler(0, 8);
      case 2:
        return pageHandler(8, 16);
      case 3:
        return pageHandler(16, 24);
      default:
        return pageHandler(0, 8);
    }
  }, [active]);

  async function handleLiked(product: any) {
    if (uid !== null) {
      addLikedProduct(product);
      setLikedProducts((prev: any) => ({
        ...prev,
        [product.id]: !prev[product.id],
      }));
      if (likedProducts[product.id]) {
        await deleteDoc(doc(db, `liked${uid}`, product.id));
      }
    } else {
      toast("Please Login first!");
      delay(500);
      router.push("/login");
    }
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <DropDown />
        <p>Jumlah produk {products.length}</p>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(start, end).map((product: any) => (
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
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => arrowPageHandler("prev")} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className={cn(
                "cursor-pointer",
                active == 1 ? "bg-accent" : undefined,
              )}
              onClick={() => {
                setActive(1);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className={cn(
                "cursor-pointer",
                active == 2 ? "bg-accent" : undefined,
              )}
              onClick={() => {
                setActive(2);
              }}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className={cn(
                "cursor-pointer",
                active == 3 ? "bg-accent" : undefined,
              )}
              onClick={() => {
                setActive(3);
              }}
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={() => arrowPageHandler("next")} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
