"use client";

import { ComboBox } from "../ui/ComboBox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";

const kategori = [
  {
    value: "buku",
    label: "Buku",
  },
  {
    value: "perabot",
    label: "Perabot",
  },
  {
    value: "elektronik",
    label: "Elektronik",
  },
];

const frekuensi = [
  {
    value: "produk-baru",
    label: "Produk Baru",
  },
  {
    value: "seperti-baru",
    label: "Seperti Baru",
  },
  {
    value: "jarang-dipakai",
    label: "Jarang Dipakai",
  },
  {
    value: "sering-dipakai",
    label: "Sering Dipakai",
  },
];

const formSchema = z.object({
  nama: z.string().min(1).max(50),
  harga: z.string().min(1).max(50),
  nomor: z.string().min(1).max(50),
  rincian: z.string().min(1).max(50),
  keterangan: z.string().min(1).max(50),
});

export default function FormAddProduct() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: "",
      harga: "",
      nomor: "",
      rincian: "",
      keterangan: "",
    },
  });

  function onSubmit() {
    console.log("halo");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-4 text-lg font-medium">
          <label>Kategori</label>
          <ComboBox framework={kategori} />
          <label>Frekuensi Pemakaian</label>
          <ComboBox framework={frekuensi} />
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-lg">Nama Produk</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Nama Produk"
                    {...field}
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="harga"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-lg">Harga</FormLabel>
                <FormControl>
                  <Input placeholder="Rp10.000" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nomor"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-lg">Nomor WhatsApp</FormLabel>
                <FormControl>
                  <Input
                    placeholder="08xx-xxxx-xxxx  "
                    {...field}
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rincian"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-lg">
                  Masukkan rincian produk
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="08xx-xxxx-xxxx  "
                    {...field}
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="keterangan"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-lg">Keterangan Penjual</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan keterangan penjual"
                    {...field}
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          Jual Produk
        </Button>
      </form>
    </Form>
  );
}
