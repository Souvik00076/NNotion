"use client";

import { useScrollTop } from "@/hooks";
import { cn } from "@/utils";
import { Logo } from "./Logo";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner, Button } from "@/components";
import Link from "next/link";

let x = 0;
export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  console.log(x++, isAuthenticated);
  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex w-full items-center bg-background px-6  py-1 dark:bg-[#1F1F1F]",
        scrolled && "border-b shadow-sm",
      )}
    >
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <Button variant={"ghost"} size={"sm"}>
              Login
            </Button>
            <Button size={"sm"}>Get Jotion Freee</Button>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link href={"/documents"}>Enter Jotion</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
