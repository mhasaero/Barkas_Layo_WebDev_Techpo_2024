import React, { ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <main className="absolute bottom-0 left-0 right-0 h-full bg-card py-12 lg:relative xl:absolute">
      <Image
        src={"/images/acc-1.png"}
        alt="acc-1"
        width={500}
        height={500}
        className="absolute left-20 hidden size-48 lg:block"
      />
      <Image
        src={"/images/acc-2.png"}
        alt="acc-1"
        width={500}
        height={500}
        className="absolute right-12 top-12 hidden size-48 lg:block"
      />
      {children}
    </main>
  );
}
