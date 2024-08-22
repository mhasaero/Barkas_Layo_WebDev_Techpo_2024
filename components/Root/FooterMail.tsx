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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  text: z.string().min(1).max(100),
});

export function FooterMail() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-fit items-end gap-3"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-weight text-muted">
                <strong>Kritik dan Saran</strong>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tulis pesan anda"
                  {...field}
                  className="h-10 rounded-none border-0 border-b-2 border-foreground px-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={"basic"}
          size={"basic"}
          className="group relative h-fit font-medium"
        >
          <div className="duration-[250ms] absolute bottom-0 left-0 right-0 h-0 bg-foreground transition-all ease-out group-hover:h-full"></div>
          <strong className="relative group-hover:text-background">
            Kirim
          </strong>
        </Button>
      </form>
    </Form>
  );
}
