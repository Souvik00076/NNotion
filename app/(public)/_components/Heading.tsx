"use client";
import { Spinner } from "@/components";
import { buttonVariants } from "@/components/shared/Button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <section className="w-full  flex flex-col items-center justify-center">
      <div className="max-w-3xl flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl text-center">
          Your Ideas, Documents , & Plans. Unified. Welcome to{" "}
          <span className="underline">NNotion</span>
        </h1>
        <h3 className="text-base font-medium text-center">
          NNotion is the connected workspace where <br />
          better, faster wokrflows happen.
        </h3>
        {isLoading && (
          <div className="flex  w-full items-center justify-center">
            <Spinner size="lg" />
          </div>
        )}
        {!isLoading && isAuthenticated && (
          <Link href="/documents">
            className={buttonVariants({ variant: "default" })}
            Enter NNotion
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        )}
        {!isLoading && !isAuthenticated && (
          <Link
            href={"/sign-in"}
            className={buttonVariants({ variant: "default" })}
          >
            Get NNotion For Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
  );
};
