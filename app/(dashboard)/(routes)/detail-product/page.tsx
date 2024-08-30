import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function page() {
  return (
    <section id="detail-product" className="flex flex-col gap-24 py-10">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="rounded-2xl bg-card md:w-1/2">
          <Image
            src={"/images/newcomer-keigo.png"}
            width={500}
            height={500}
            alt="the-newcomer-keigo-higashino"
            className="mx-auto h-full w-3/4"
          />
        </div>
        <div className="h-full w-full rounded-2xl bg-card px-8 py-7 md:w-2/5">
          <h3 className="font-semibold lg:text-3xl xl:text-4xl">
            The Newcomer-Keigo Higashino
          </h3>
          <p className="mt-2 text-lg text-muted xl:text-xl">Seperti Baru</p>
          <div className="my-4 flex items-center gap-2">
            <p className="text-sm font-semibold">Rp</p>
            <h3 className="text-2xl font-bold xl:text-3xl">50.000</h3>
          </div>
          <div className="flex items-center gap-6 rounded-2xl border-2 border-border px-4 py-3">
            <Image
              src={"/images/doksli.png"}
              width={500}
              height={500}
              alt="doksli"
              className="size-12 rounded-full"
            />
            <h3 className="text-xl font-medium">Mhasa</h3>
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
              Kategori : Buku <br />
              Penulis : Keigo Higashino <br />
              Halaman : 302 halaman <br />
              Penerbit : Gramedia <br />
              Lokasi : Gang Buntu Indralaya
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="">Keterangan Penjual</AccordionTrigger>
            <AccordionContent>
              Buku sudah lama dibaca, jarang dipakai dan masih bagus. Silakan
              hubungi saya jika berminat
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="space-y-4">
          <Button type="submit" className="w-full">
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
