import React from "react";
import Image from "next/image";

export default function Recommendation() {
  return (
    <section className="bg-lightBlue h-screen flex items-center justify-center relative">
      <Image
        src="/images/StarFour.png"
        width={80}
        height={70}
        alt="StarFour"
        className="absolute top-16 md:top-32"
      />
      <Image
        src="/images/StarFour.png"
        width={40}
        height={20}
        alt="StarFour"
        className="absolute top-50 left-8"
      />
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 px-6 md:px-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-poppins font-bold text-3xl text-primary md:text-4xl">
            Tentang Barkas
          </h1>
          <p className="text-justify">
            Barkas Layo adalah platform yang menghadirkan barang bekas
            berkualitas dengan harga terjangkau. Kami menghubungkan penjual dan
            pembeli di Indralaya, serta menawarkan layanan endorsement untuk
            membantu mempromosikan produk Anda.
          </p>
        </div>
        <Image
          src="/images/about-img.png"
          width={600}
          height={400}
          alt="about us"
          className="object-cover"
        />
      </div>
    </section>
  );
}
