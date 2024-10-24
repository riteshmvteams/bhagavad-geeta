import { cn } from "@/utils/helpers";
import React from "react";

export default function Skelton({ className }: { className: string }) {
  return (
    <div
      className={cn("rounded-md animate-pulse bg-secondaryBg", className)}
    ></div>
  );
}
