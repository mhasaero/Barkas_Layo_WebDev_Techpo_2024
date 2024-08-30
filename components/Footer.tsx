import Image from "next/image";
import { routes } from "@/lib/link";
import Link from "next/link";
import { FooterMail } from "./Root/FooterMail";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bottom-0 left-0 right-0 mt-40 flex flex-col justify-between gap-6 border-t-2 border-border px-4 py-12 text-sm md:px-12 md:text-base lg:flex-row lg:px-16 xl:px-24"
    >
      <div className="flex flex-col gap-3">
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
        <p className="text-base lg:text-lg">Barang Bekas, Kualitas Emas</p>
      </div>
      <ul className="flex flex-row gap-2 font-medium text-foreground md:gap-6 lg:flex-col">
        <li className="hidden text-muted md:block">Tautan</li>
        {routes.map((routes) => (
          <li
            key={routes.linkTo}
            className="duration-200 hover:text-primary hover:underline"
          >
            <Link href={routes.address}>{routes.linkTo}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-row gap-2 font-medium text-foreground md:gap-6 lg:flex-col">
        <li className="hidden text-muted md:block">Akun</li>
        <li className="duration-200 hover:text-primary hover:underline">
          Instagram
        </li>
        <li className="duration-200 hover:text-primary hover:underline">
          WhatsApp
        </li>
        <li className="duration-200 hover:text-primary hover:underline">
          Tiktok
        </li>
      </ul>
      <FooterMail />
    </footer>
  );
}
