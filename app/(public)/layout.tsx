import { ReactNode } from "react";
import { Navbar } from "./_components";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <main className="dark:bg-black">
      <Navbar />
      <div className="h-full">{children}</div>
    </main>
  );
}
