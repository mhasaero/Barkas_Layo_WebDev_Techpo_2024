'use client'

import { Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type props = {
    id?: number;
    src?: any;
    name?: any;
    shortDesc?: string;
    price?: any;
    liked?: boolean;
    onLikedButton?: any;
    product: any;
}

export default function RecommendationItem({id, src, name, shortDesc, price, liked, onLikedButton} : props) {
  const router = useRouter()

  function rupiahFormat(price: number) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    return formatter.format(price);
  }

  return (
    <div className="flex flex-col rounded-xl bg-card">
      <Image
        width={100}
        height={100}
        src={src}
        alt={name}
        className="h-40 w-full rounded-t-xl bg-cover bg-center md:h-64 lg:h-56 xl:h-64"
        onClick={() => router.push(`/view-product/${id}`)}
      />
      <div className="flex h-20 flex-col justify-between rounded-b-xl border-b-2 border-l-2 border-r-2 border-b-border border-l-border border-r-border px-3 py-2 md:h-24">
        <h3 className="text-sm font-semibold md:text-base">{name}</h3>
        <span className="text-xs font-medium text-muted-foreground">
          {shortDesc}
        </span>
        <div className="flex items-end justify-between">
          <p className="text-xs font-semibold md:text-base">
            {rupiahFormat(price)}
          </p>
          <div className="flex flex-row gap-1 md:gap-3">
            <div
              className="cursor-pointer"
              onClick={() => onLikedButton(id)}
            >
              <Heart
                className={`h-4 md:h-6 ${liked ? "text-red" : "text-black"}`}
                fill={`${liked ? "red" : "none"}`}
              />
            </div>

            <div className="h-4 w-4 cursor-pointer md:h-6 md:w-6">
              <Image
                src={"/images/icon-whatsapp.png"}
                width={24}
                height={24}
                alt="icon whatsapp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
