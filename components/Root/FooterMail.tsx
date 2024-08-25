"use client";

import { useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";

import { Button } from "@/components/ui/button";

export function FooterMail() {
  const form = useRef(null);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        )
        .then(
          (result) => {
            alert(result.text);
          },
          (error) => {
            alert(error.text);
          },
        );
    }
  };

  return (
    <form onSubmit={sendEmail} className="h-fit space-y-2 md:space-y-6">
      <label htmlFor="message" className="">
        Message
      </label>
      <div className="flex items-end gap-4">
        <textarea
          rows={8}
          id="message"
          name="message"
          className="h-10 border-0 border-b-2 border-foreground bg-background px-0 focus-visible:outline-none"
          required
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
      </div>
    </form>
  );
}
