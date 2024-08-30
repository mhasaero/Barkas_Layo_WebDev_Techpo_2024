"use client";

import Image from "next/image";
import { Search, Heart, CircleUser, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes } from "@/lib/link";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {
  type?: boolean;
};

export default function Navbar({ type }: Props) {
  const pathname = usePathname();

  return (
    <nav
      id="navbar"
      className="fixed left-0 right-0 z-50 flex items-center justify-between border-b-2 border-primary bg-background px-4 py-4 md:px-12 md:py-6 lg:px-16 xl:px-24"
    >
      <div className="flex items-center gap-1 md:gap-3">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="size-6 md:size-8 xl:size-10"
        />
        <h1 className="font-montserrat text-lg text-primary md:text-2xl xl:text-4xl">
          <strong>Barkas Layo</strong>
        </h1>
      </div>
      {type && (
        <ul className="hidden items-center gap-16 text-sm lg:flex xl:text-base">
          {routes.map((routes) => (
            <li
              key={routes.linkTo}
              className={cn("", {
                "text-primary underline": "" === routes.address,
              })}
            >
              <Link href={routes.address}>{routes.linkTo}</Link>
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-between gap-9">
        <ul className="hidden gap-9 md:flex md:text-sm xl:text-base">
          <li>
            <Search className="size-6 xl:size-8" />
          </li>
          <li>
            <Heart className="size-6 xl:size-8" />
          </li>
          <li>
            <CircleUser className="size-6 xl:size-8" />
          </li>
        </ul>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="size-6 text-primary md:size-8" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="my-6 flex items-center justify-center gap-2">
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  width={100}
                  height={100}
                  className="size-8"
                />
                <h1 className="font-montserrat text-xl text-primary">
                  <strong>Barkas Layo</strong>
                </h1>
              </SheetTitle>
              <ul className="flex flex-col items-start gap-6 text-base">
                {routes.map((routes) => (
                  <li
                    key={routes.linkTo}
                    className={cn("", {
                      "text-primary underline": pathname === routes.address,
                    })}
                  >
                    <Link href={routes.address}>{routes.linkTo}</Link>
                  </li>
                ))}
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
