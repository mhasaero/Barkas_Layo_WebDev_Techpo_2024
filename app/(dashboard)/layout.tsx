"use client";

import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  const pathname = usePathname();

  return (
    <div className="overflow-x-hidden bg-background">
      <Navbar type={false} />
      <Breadcrumb className="mx-4 mt-24 md:mx-12 md:mt-32 lg:mx-16 xl:mx-24">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-xl">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-xl font-medium text-primary">
              {pathname.slice(1)}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="mx-4 mt-24 md:mx-12 md:mt-32 lg:mx-16 xl:mx-24">
        {children}
      </main>
    </div>
  );
}
