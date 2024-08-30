import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import FormAddProduct from "@/components/Dashboard/FormAddProduct";

export default function page() {
  return (
    <section id="add-product" className="mx-auto w-2/3 space-y-8 px-6 py-10">
      <h3 className="text-start text-xl font-semibold">Jual Produk</h3>
      <div className="mx-auto w-5/6 rounded-2xl border-4 bg-[#E6EEF9] py-8 opacity-75 duration-200 ease-in-out hover:border-dashed hover:border-border hover:opacity-100">
        <label htmlFor="upload-file" className="space-y-8">
          <Image
            src={"/images/uploadImage.png"}
            width={500}
            height={500}
            alt="uploadImage"
            className="mx-auto size-24"
          />
          <p className="text-center text-lg font-semibold text-primary">
            Unggah Foto Produk Anda
          </p>
        </label>
        <Input id="upload-file" type="file" className="hidden" />
      </div>
      <FormAddProduct />
    </section>
  );
}
