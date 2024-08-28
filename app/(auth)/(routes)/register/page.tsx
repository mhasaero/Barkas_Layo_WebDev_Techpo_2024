"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormCard } from "@/components/Auth/FormCard";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  no_telp: z.string().min(1).max(50),
  email: z.string().email(),
  nama: z.string().min(1).max(50),
  password: z.string().min(1).max(50),
});

export default function page() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      no_telp: "",
      email: "",
      nama: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <FormCard id="daftar" message="Buat akun dan mulai berbelanja!">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="no_telp"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="">Nomor Telepon</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan nomor telepon Anda"
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
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Email Anda"
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
            name="nama"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="">Nama Lengkap</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Nama Lengkap Anda"
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
            name="password"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Password Anda"
                    {...field}
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Daftar
          </Button>
        </form>
      </Form>
      <Button type="submit" className="w-full" variant={"alt"}>
        Sudah Punya Akun ?
      </Button>
    </FormCard>
  );
}
