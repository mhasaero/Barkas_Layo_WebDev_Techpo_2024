import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="overflow-x-hidden bg-background">
      <main className="mx-4 md:mx-12 md:py-6 lg:mx-16 xl:mx-24">
        {children}
      </main>
    </div>
  );
}
