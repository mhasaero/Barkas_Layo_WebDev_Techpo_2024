import Image from "next/image";
import { DropDown } from "@/components/ui/dropdown";

export default function page() {
  return (
    <section id="category" className="space-y-20">
      <h1 className="text-3xl font-bold">Semua Produk</h1>
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <Image
          src={"/images/category-1.png"}
          width={500}
          height={500}
          alt="category-1"
          className="md:w-1/2"
        />
        <div className="space-y-6 md:w-1/2">
          <Image
            src={"/images/category-2.png"}
            width={500}
            height={500}
            alt="category-2"
            className="w-full"
          />
          <div className="flex justify-between gap-6">
            <Image
              src={"/images/category-3.png"}
              width={500}
              height={500}
              alt="category-3"
              className=""
            />
            <Image
              src={"/images/category-4.png"}
              width={500}
              height={500}
              alt="category-4"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <DropDown />
        <p>Jumlah produk 865</p>
      </div>
    </section>
  );
}
