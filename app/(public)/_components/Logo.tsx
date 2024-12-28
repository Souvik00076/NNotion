"use client";

import { cn } from "@/utils";
import Image from "next/image";

export const Logo = () => {
  return (
    <div>
      <Image
        alt="logo"
        src="/logo.svg"
        width={40}
        height={40}
        className="dark:hidden"
      />
      <Image
        alt="logo"
        src="/logo-dark.svg"
        width={40}
        height={40}
        className="dark:block hidden"
      />
      <p className={cn("text-lg font-bold", "dark:text-white")}>NNotion</p>
    </div>
  );
};
