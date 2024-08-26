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
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function page() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <FormCard id="login" message="Masuk dan temukan produk yang kamu cari">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="">Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="">Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="float-right text-muted">Lupa Password ? </p>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button type="submit" className="w-full" variant={"alt"}>
            Belum Punya Akun ?
          </Button>
        </form>
      </Form>
    </FormCard>
  );
}
