import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="h-screen scroll-mt-20">
      <div className="absolute left-0 right-0 top-0 flex h-screen items-center bg-[url('/images/banner.png')] bg-cover bg-fixed">
        <div className="flex justify-center lg:mr-20 lg:justify-end">
          <div className="mt-14 flex h-fit w-3/4 flex-col justify-between gap-4 rounded-2xl bg-background p-6 lg:w-1/2 lg:p-8">
            <div className="flex gap-2 text-xs font-semibold tracking-[3px] xl:text-sm">
              <h3>BARKAS</h3>
              <h3 className="text-yellow">LAYO</h3>
            </div>
            <h1 className="text-3xl font-bold text-primary md:text-4xl xl:text-5xl">
              Temukan Barang Bekas Berkualitas di Sekitarmu!
            </h1>
            <p className="mb-2 text-sm font-semibold md:text-base">
              Dari gadget hingga furniture, semua ada di sini. Pilih barang
              bekas impianmu dengan mudah dan cepat.
            </p>
            <Link href={"#recommendation"}>
              <Button variant={"default"}>BELI SEKARANG</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
