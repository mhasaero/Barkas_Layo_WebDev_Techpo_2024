"use client";

import Image from "next/image";
import { Search, Heart, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { routes } from "@/lib/link";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav
      id="navbar"
      className="fixed left-24 right-24 flex items-center justify-between bg-background py-6"
    >
      <div className="flex items-center gap-3">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="size-10"
        />
        <h1 className="text-4xl text-primary">
          <strong>Barkas Layo</strong>
        </h1>
      </div>
      <ul className="flex items-center gap-16 text-base">
        {routes.map((routes) => (
          <li
            key={routes.linkTo}
            // className={router.asPath == "/#about" ? "active" : ""}
          >
            <Link href={routes.address}>{routes.linkTo}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-9 text-base">
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
