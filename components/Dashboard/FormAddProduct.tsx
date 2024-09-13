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
import React, { useState } from "react";
import { addProduct } from "@/lib/network/users/userQueries";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

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
  {
    value: "pakaian",
    label: "Pakaian",
  },
  {
    value: "aksesoris",
    label: "Aksesoris",
  },
  {
    value: "skincare",
    label: "Skincare",
  },
];

const frekuensi = [
  {
    value: "Produk Baru",
    label: "Produk Baru",
  },
  {
    value: "Seperti Baru",
    label: "Seperti Baru",
  },
  {
    value: "Jarang Dipakai",
    label: "Jarang Dipakai",
  },
  {
    value: "Sering Dipakai",
    label: "Sering Dipakai",
  },
];

const formSchema = z.object({
  name: z.string().min(1).max(50),
  price: z.string().min(1).max(50),
  nomor: z.string().min(1).max(50),
  summary: z.string().min(1).max(250),
  info: z.string().min(1).max(250),
});

export default function FormAddProduct() {
  const [category, setCategory] = useState();
  const [frequency, setFrequency] = useState(false);
  const [img, setImg] = useState<File | null>(null);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      nomor: "",
      summary: "",
      info: "",
    },
  });

  const metadata = {
    contentType: img?.type,
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    // console.log(category, frequency);

    // (await addProduct(
    //   category,
    //   frequency,
    //   values.name,
    //   values.price,
    //   values.summary,
    //   values.info,
    // ))
    //   ? router.push("list-product")
    //   : alert("lol");

    if (img === null) {
      alert("No image selected.");
      return;
    }

    const storageRef = ref(storage, "images/" + values.name);
    const uploadTask = uploadBytesResumable(storageRef, img, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          addProduct(
            category,
            frequency,
            values.name,
            values.price,
            values.summary,
            values.info,
            url,
          )
            .then(() => {
              router.push("list-product");
            })
            .catch((error) => {
              console.error("Error adding document:", error.message);
            });
        });
      },
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-4 text-lg font-medium">
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
            <Input
              id="upload-file"
              type="file"
              className="hidden"
              onChange={(e) =>
                setImg(e.target.files ? e.target.files[0] : null)
              }
            />
          </div>
          <label htmlFor="kategori">Kategori</label>
          <ComboBox
            framework={kategori}
            value={category}
            setValue={setCategory}
            id="kategori"
          />
          <label htmlFor="frekuensi">Frekuensi</label>
          <ComboBox
            framework={frekuensi}
            value={frequency}
            setValue={setFrequency}
            id={frekuensi}
          />
          <FormField
            control={form.control}
            name="name"
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
            name="price"
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
            name="summary"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-lg">
                  Masukkan Rincian Produk
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Rincian Produk"
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
            name="info"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-lg">Keterangan Penjual</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Keterangan Penjual"
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
