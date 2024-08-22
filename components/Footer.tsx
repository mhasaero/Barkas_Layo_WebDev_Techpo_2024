import Image from "next/image";
import { routes } from "@/lib/link";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bottom-0 left-0 right-0 flex justify-between border-t-2 border-border px-4 py-12 text-base md:px-12 lg:px-16 xl:px-24"
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
        <p className="text-lg">Barang Bekas, Kualitas Emas</p>
      </div>
      <ul className="">
        <li className="text-muted-foreground">Tautan</li>
        {routes.map((routes) => (
          <li key={routes.linkTo} className="">
            <Link href={routes.address}>{routes.linkTo}</Link>
          </li>
        ))}
      </ul>
      <ul className="">
        <li>Akun</li>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Tiktok</li>
      </ul>
    </footer>
  );
}
