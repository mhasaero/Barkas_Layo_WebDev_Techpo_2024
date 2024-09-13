"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormCard } from "@/components/Auth/FormCard";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

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
import { registerUser } from "@/lib/network/users/userQueries";

const formSchema = z.object({
  phoneNumber: z.string().min(1).max(50),
  email: z.string().email(),
  displayName: z.string().min(1).max(50),
  password: z.string().min(1).max(50),
});

export default function page() {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      email: "",
      displayName: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    (await registerUser(
      values.email,
      values.password,
      values.displayName,
      values.phoneNumber,
    ))
      ? router.push("/profile")
      : alert("Gagal memuat!");
  }
  return (
    <FormCard id="daftar" message="Buat akun dan mulai berbelanja!">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="phoneNumber"
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
            name="displayName"
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
      <Button
        type="submit"
        className="w-full"
        variant={"alt"}
        onClick={() => router.push("/login")}
      >
        Sudah Punya Akun ?
      </Button>
    </FormCard>
  );
}
