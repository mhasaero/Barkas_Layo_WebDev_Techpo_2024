"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useParams, useRouter } from "next/navigation";
import { useProduct } from "@/context/ProductContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function page({ params: { slug }} : PageProps) {
  const router = useRouter();

  const productId = useParams<{ slug: string }>();
  
  const { products, sellersName } = useProduct();

  async function handleDeleteProduct(id : string){
    await deleteDoc(doc(db, "products", id)).then(() => {
      router.push('/list-product')
      alert("successfully deleted");
    })
  }


  return <>
  {products.map((product : any) => {
      if (product.id == slug){
        return (
          <section id="detail-product" className="flex flex-col gap-24 py-10">
            <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
              <div className="rounded-2xl bg-card md:w-1/2">
                <Image
                  src={product.img}
                  width={500}
                  height={500}
                  alt={product.name}
                  className="mx-auto h-full w-3/4"
                />
              </div>
              <div className="h-full w-full rounded-2xl bg-card px-8 py-7 md:w-2/5">
                <h3 className="font-semibold lg:text-3xl xl:text-4xl">
                  {product.name}
                </h3>
                <p className="mt-2 text-lg text-muted xl:text-xl">{product.frequency}</p>
                <div className="my-4 flex items-center gap-2">
                  <p className="text-sm font-semibold">Rp</p>
                  <h3 className="text-2xl font-bold xl:text-3xl">{product.price}</h3>
                </div>
                <div className="flex items-center gap-6 rounded-2xl border-2 border-border px-4 py-3">
                  <Image
                    src={"/images/profileDefault.png"}
                    width={500}
                    height={500}
                    alt="doksli"
                    className="size-12 rounded-full"
                  />
                  <h3 className="text-xl font-medium">{sellersName[product.sellerId]}</h3>
                </div>
                <div className="mt-4 flex">
                  <Button className="flex gap-2 py-4">
                    <Image
                      src={"/images/icon-whatsapp.png"}
                      width={500}
                      height={500}
                      alt="whatsapp"
                      className="size-4 xl:size-6"
                    />
                    <p className="text-xs md:text-sm xl:text-base">Hubungi Penjual</p>
                  </Button>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="">Rincian Produk</AccordionTrigger>
                  <AccordionContent>
                    {/* Kategori : Buku <br />
                    Penulis : Keigo Higashino <br />
                    Halaman : 302 halaman <br />
                    Penerbit : Gramedia <br />
                    Lokasi : Gang Buntu Indralaya */}
                    {product.summary}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="">Keterangan Penjual</AccordionTrigger>
                  <AccordionContent>
                    {product.info}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="space-y-4">
                <Button type="submit" className="w-full" onClick={() => handleDeleteProduct(product.id)}>
                  Hapus Produk
                </Button>
                <Button type="submit" className="w-full" variant={"alt"}>
                  Edit Produk
                </Button>
              </div>
            </div>
          </section>
        );
      }
    })
  }
  </>

  
}
