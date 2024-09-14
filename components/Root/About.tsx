import React from "react";
import Image from "next/image";

export default function Recommendation() {
  return (
    <section className="relative flex h-screen items-center justify-center bg-lightBlue">
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
        className="top-50 absolute left-8"
      />
      <div className="flex flex-col-reverse items-center gap-12 px-6 md:px-24 lg:flex-row">
        <div className="flex flex-col gap-5">
          <h1 className="font-poppins text-3xl font-bold text-primary md:text-4xl">
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
