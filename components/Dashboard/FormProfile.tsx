"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import { auth } from "@/lib/firebase";

const formSchema = z.object({
  nama: z.string().min(2).max(50),
  no_telp: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
});

export function FormProfile({ nama, no_telp, email }: any) {
  console.log(nama, no_telp, email);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: "",
      no_telp: "",
      email: "",
    },
  });

  async function onSubmit() {
    try {
      await auth.signOut();
      console.log("User Signed Out Successfully!");
    } catch (error: any) {
      console.log(error.code);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nama"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 md:gap-3">
              <FormLabel className="text-base text-foreground md:text-lg">
                Nama Lengkap
              </FormLabel>
              <FormControl>
                <Input
                  className="px-6 py-6 text-xs text-muted-foreground placeholder:text-xs placeholder:text-muted-foreground md:text-sm md:placeholder:text-sm"
                  placeholder={nama}
                  {...field}
                  disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="no_telp"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 md:gap-3">
              <FormLabel className="text-base text-foreground md:text-lg">
                Nomor telpon
              </FormLabel>
              <FormControl>
                <Input
                  className="px-6 py-6 text-xs text-muted-foreground placeholder:text-xs placeholder:text-muted-foreground md:text-sm md:placeholder:text-sm"
                  placeholder={no_telp}
                  {...field}
                  disabled
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
            <FormItem className="flex flex-col gap-2 md:gap-3">
              <FormLabel className="text-base text-foreground md:text-lg">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="px-6 py-6 text-xs text-muted-foreground placeholder:text-xs placeholder:text-muted-foreground md:text-sm md:placeholder:text-sm"
                  placeholder={email}
                  {...field}
                  disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <div className="w-full pt-8 md:pt-12">
        <Button
          variant={"destructive"}
          type="submit"
          size={"basic"}
          className="w-full rounded-xl py-3 text-base font-medium md:py-4 md:text-lg"
          onClick={() => onSubmit()}
        >
          Log Out
        </Button>
      </div>
    </Form>
  );
}
