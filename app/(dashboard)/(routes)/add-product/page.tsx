import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import FormAddProduct from "@/components/Dashboard/FormAddProduct";

export default function page() {
  return (
    <section id="add-product" className="mx-auto w-2/3 space-y-8 px-6 py-10">
      <h3 className="text-start text-xl font-semibold">Jual Produk</h3>
      <FormAddProduct />
    </section>
  );
}
