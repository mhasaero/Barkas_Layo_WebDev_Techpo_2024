import React from "react";
import FormAddProduct from "@/components/Dashboard/FormAddProduct";

export default function page() {
  return (
    <section id="add-product" className="mx-auto space-y-8 px-6 py-10 md:w-2/3">
      <h3 className="text-start text-xl font-semibold">Jual Produk</h3>
      <FormAddProduct />
    </section>
  );
}
