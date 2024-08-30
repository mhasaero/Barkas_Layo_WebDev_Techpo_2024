import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="overflow-x-hidden bg-background">
      <Navbar type={false} />
      <main className="mx-4 mt-32 md:mx-12 lg:mx-16 xl:mx-24">{children}</main>
    </div>
  );
}

// template padding section
// mx-4 md:mx-12 lg:mx-16 xl:mx-24
// px-4 md:px-12 lg:px-16 xl:px-24
