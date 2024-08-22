import Image from "next/image";
import { routes } from "@/lib/link";
import Link from "next/link";
import { FooterMail } from "./Root/FooterMail";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bottom-0 left-0 right-0 flex flex-col justify-between gap-6 border-t-2 border-border py-12 text-sm md:flex-row md:text-base"
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
      <ul className="flex flex-row gap-2 font-medium text-foreground md:flex-col md:gap-6">
        <li className="hidden text-muted md:block">
          <strong>Tautan</strong>
        </li>
        {routes.map((routes) => (
          <li key={routes.linkTo} className="">
            <Link href={routes.address}>
              <strong>{routes.linkTo}</strong>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-row gap-2 font-medium text-foreground md:flex-col md:gap-6">
        <li className="hidden text-muted md:block">
          <strong>Akun</strong>
        </li>
        <li>
          <strong>Instagram</strong>
        </li>
        <li>
          <strong>WhatsApp</strong>
        </li>
        <li>
          <strong>Tiktok</strong>
        </li>
      </ul>
      <FooterMail />
    </footer>
  );
}
