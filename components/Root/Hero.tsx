import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="h-screen">
      <div className="absolute left-0 right-0 flex h-screen items-center bg-[url('/images/banner.png')] bg-cover bg-fixed top-0">
        <div className="flex justify-center lg:mr-20 lg:justify-end">
          <div className="flex h-fit w-3/4 flex-col justify-between gap-4 rounded-2xl bg-background p-6 lg:w-1/2 lg:p-8 mt-14">
            <div className="flex gap-2 text-xs font-semibold tracking-[3px] xl:text-sm">
              <h3>BARKAS</h3>
              <h3 className="text-yellow">LAYO</h3>
            </div>
            <h1 className="text-3xl font-bold text-primary md:text-4xl xl:text-5xl">
              Temukan Barang Bekas Berkualitas di Sekitarmu!
            </h1>
            <p className="mb-2 text-sm md:text-base font-semibold">
              Dari gadget hingga furniture, semua ada di sini. Pilih barang
              bekas impianmu dengan mudah dan cepat.
            </p>
            <Button variant={"default"}>BELI SEKARANG</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
