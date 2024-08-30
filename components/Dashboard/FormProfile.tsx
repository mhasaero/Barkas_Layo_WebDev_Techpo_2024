"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  phoneNumber: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
});

export function FormProfile() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "Andini Larashati",
      phoneNumber: "085378124125",
      email: "larashatiandini@gmail.com",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 md:gap-3">
              <FormLabel className="text-base text-foreground md:text-lg">
                Nama Lengkap
              </FormLabel>
              <FormControl>
                <Input
                  className="px-6 py-6 text-xs text-muted-foreground placeholder:text-xs placeholder:text-muted-foreground md:text-sm md:placeholder:text-sm"
                  placeholder={form.getValues("fullName")}
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
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 md:gap-3">
              <FormLabel className="text-base text-foreground md:text-lg">
                Nomor telpon
              </FormLabel>
              <FormControl>
                <Input
                  className="px-6 py-6 text-xs text-muted-foreground placeholder:text-xs placeholder:text-muted-foreground md:text-sm md:placeholder:text-sm"
                  placeholder={form.getValues("phoneNumber")}
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
                  placeholder={form.getValues("email")}
                  {...field}
                  disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full pt-8 md:pt-12">
          <Button
            variant={"secondary"}
            type="submit"
            size={"basic"}
            className="w-full rounded-xl py-3 text-base font-medium md:py-4 md:text-lg"
          >
            Edit Profil
          </Button>
        </div>
      </form>
    </Form>
  );
}
