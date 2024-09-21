import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import NavBread from "@/components/Dashboard/NavBread";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="overflow-x-hidden bg-background">
      <Navbar type={false} />
      <NavBread />
      <main className="mx-4 mt-24 md:mx-12 md:mt-32 lg:mx-16 xl:mx-24">
        {children}
      </main>
    </div>
  );
}
