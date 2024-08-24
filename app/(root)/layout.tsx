import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="overflow-x-hidden bg-background">
      <main className="">{children}</main>
    </div>
  );
}

// template padding section
// mx-4 md:mx-12 lg:mx-16 xl:mx-24
// px-4 md:px-12 lg:px-16 xl:px-24
