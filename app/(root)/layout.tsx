import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="overflow-x-hidden bg-background">
      <main className="mx-24">{children}</main>
    </div>
  );
}

// mt-28 md:mt-40 lg:mt-44 xl:mt-48
