import { ReactNode } from "react";
import { Navbar } from "./_components";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className="h-full">{children}</div>
    </main>
  );
}
