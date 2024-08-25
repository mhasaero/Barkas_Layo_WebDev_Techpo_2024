import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = { src?: any; name?: any; list?: number; children: ReactNode };

export default function ReviewText({ src, name, children, list }: Props) {
  if (typeof list == "undefined") {
    list = 1;
  }

  return (
    <div
      className={cn("mx-auto flex w-full items-center gap-5 md:w-1/2", {
        "flex-row-reverse": list % 2 == 1,
      })}
    >
      <Image
        src={src}
        alt={name}
        width={500}
        height={500}
        className="size-16 rounded-full"
      />
      <div
        className={cn("flex w-full flex-col items-start gap-2", {
          "items-end": list % 2 == 1,
        })}
      >
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="w-full rounded-md bg-card px-4 py-2 text-left text-base font-medium">
          {children}
        </p>
      </div>
    </div>
  );
}
