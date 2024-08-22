"use client";

import Image from "next/image";
import { Search, Heart, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes } from "@/lib/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      id="navbar"
      className="fixed left-0 right-0 flex items-center justify-between border-b-2 border-primary bg-background px-4 py-4 md:px-12 md:py-6 lg:px-16 xl:px-24"
    >
      <div className="flex items-center gap-3">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="size-8 xl:size-10"
        />
        <h1 className="font-montserrat text-2xl text-primary xl:text-4xl">
          <strong>Barkas Layo</strong>
        </h1>
      </div>
      <ul className="hidden items-center gap-16 text-sm lg:flex xl:text-base">
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
      <ul className="hidden gap-9 text-sm lg:flex xl:text-base">
        <li>
          <Search />
        </li>
        <li>
          <Heart />
        </li>
        <li>
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
}
