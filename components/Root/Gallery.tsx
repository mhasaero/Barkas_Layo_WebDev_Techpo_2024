import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="">
      <div className="text-center">
        <h1 className="font-poppins text-lg text-foreground md:text-2xl xl:text-4xl">
          <strong>Barkas Layo</strong>
        </h1>
        <p className="text-base lg:text-lg">Barang Bekas, Kualitas Emas</p>
      </div>
      <div className="flex gap-1 md:gap-6">
        <div className="w-2/5 space-y-1 md:space-y-6">
          <div className="flex items-end gap-1 md:gap-6">
            <Image
              src={"/images/gallery-1.png"}
              width={100}
              height={100}
              alt="gallery-1"
              className="w-1/5"
            ></Image>
            <Image
              src={"/images/gallery-2.png"}
              width={100}
              height={100}
              alt="gallery-1"
              className="w-4/5"
            ></Image>
          </div>
          <div className="flex items-start gap-1 md:gap-6">
            <Image
              src={"/images/gallery-3.png"}
              width={100}
              height={100}
              alt="gallery-1"
              className="w-1/3"
            ></Image>
            <Image
              src={"/images/gallery-4.png"}
              width={100}
              height={100}
              alt="gallery-1"
              className="w-2/3"
            ></Image>
          </div>
        </div>
        <Image
          src={"/images/gallery-5.png"}
          width={100}
          height={100}
          alt="gallery-1"
          className="ms-1 w-1/6 self-center md:ms-0"
        ></Image>
        <div className="w-2/5 space-y-1 md:space-y-6">
          <div className="flex items-end gap-1 md:gap-6">
            <Image
              src={"/images/gallery-6.png"}
              width={100}
              height={100}
              alt="gallery-1"
              className="w-1/2"
            ></Image>
            <Image
              src={"/images/gallery-7.png"}
              width={100}
              height={100}
              alt="gallery-1"
              className="w-1/2"
            ></Image>
          </div>
          <div className="flex items-start gap-1 md:gap-6">
            <Image
              src={"/images/gallery-8.png"}
              width={100}
              height={100}
              alt="gallery-1"
              className="w-1/3"
            ></Image>
            <Image
              src={"/images/gallery-9.png"}
              width={100}
              height={100}
              alt="gallery-1"
              className="w-1/2"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
