"use client";

import { FormProfile } from "@/components/Dashboard/FormProfile";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function page() {
  const router = useRouter();

  const { userName, userEmail, phoneNumber } = useAuth();

  return (
    <section className="pb-16 lg:pb-32">
      <div className="flex flex-col items-center gap-8">
        <div className="flex w-full items-center justify-between gap-3 rounded-2xl border-2 border-border bg-card px-4 py-3 md:gap-0 md:px-5 md:py-4 lg:w-[700px]">
          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold text-foreground md:text-xl">
              Produk yang Anda Jual
            </p>
            <span className="text-sm text-muted-foreground md:text-base">
              2 Produk Aktif
            </span>
          </div>
          <div className="flex h-fit w-fit items-center justify-center">
            <Button
              size={"basic"}
              className="rounded-2xl px-3 py-2 text-xs font-normal md:px-6 md:text-sm"
              onClick={() => router.push("/list-product")}
            >
              Lihat Produk
            </Button>
          </div>
        </div>

        <div className="flex w-full flex-col lg:w-[700px]">
          <h1 className="font-semibold text-foreground md:text-xl">
            Informasi Akun
          </h1>
          <div className="flex justify-center">
            <Image
              width={100}
              height={100}
              src={"/images/pfp-profile.png"}
              alt="profil"
              className="my-9 h-36 w-36 rounded-full bg-cover bg-center"
            ></Image>
          </div>
          <FormProfile
            nama={userName}
            no_telp={phoneNumber}
            email={userEmail}
          />
        </div>
      </div>
    </section>
  );
}
