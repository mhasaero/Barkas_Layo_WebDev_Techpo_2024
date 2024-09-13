"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormCard } from "@/components/Auth/FormCard";
import { useRouter } from "next/navigation";
import { signInWithEmail } from "@/lib/network/users/userQueries";

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
import { PasswordInput } from "@/components/Auth/passwordInput";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1).max(50),
});

export default function page() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  function pushProfile() {
    router.push("/profile");
    alert("Anda berhasil Login!");
  }

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    (await signInWithEmail(values.email, values.password))
      ? pushProfile()
      : alert("Gagal memuat akun!");
  }

  return (
    <FormCard id="login" message="Masuk dan temukan produk yang kamu cari">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            name="password"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="">Password</FormLabel>
                <FormControl>
                  <PasswordInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="float-right text-muted">Lupa Password ? </p>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
      <Button
        onClick={() => router.push("/register")}
        type="submit"
        className="w-full"
        variant={"alt"}
      >
        Belum Punya Akun ?
      </Button>
    </FormCard>
  );
}
