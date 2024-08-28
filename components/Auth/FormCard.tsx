import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  message?: string;
  children?: ReactNode;
};

export function FormCard({ id, message, children }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-3/4 space-y-4 rounded-lg bg-background p-8 lg:w-2/5",
        { "mt-20": id == "login" },
      )}
    >
      <div className="mb-6 space-y-4">
        <h1 className="text-center text-5xl font-bold capitalize">{id}</h1>
        <p className="text-center text-lg font-medium">{message}</p>
      </div>
      {children}
    </section>
  );
}
