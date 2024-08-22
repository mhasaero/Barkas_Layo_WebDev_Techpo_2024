import React from "react";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section id="home" className="h-screen">
      <div className="absolute left-0 right-0 top-[90px] -z-0 h-screen bg-[url('/images/banner.png')] bg-cover bg-fixed flex items-center ">
      <div className="flex justify-center mx- md:justify-end md:mr-20">       
        <div className="bg-background w-3/4 md:w-1/2 h-fit rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-4">
          <div className="flex gap-2 font-semibold text-xs xl:text-sm tracking-[3px]">
            <h3>BERKAS</h3>
            <h3 className="text-yellow">LAYO</h3>
          </div>
          <h1 className="font-bold text-primary text-2xl md:text-4xl xl:text-5xl">Temukan Barang Bekas Berkualitas di Sekitarmu!</h1>
          <p className="text-sm xl:text-base font-semibold mb-2">
            Dari gadget hingga furniture, semua ada di sini. Pilih barang bekas
            impianmu dengan mudah dan cepat.
          </p>
          <Button variant={"default"} >BELI SEKARANG</Button>
        </div>
      </div>
      </div>
    </section>
  );
}
