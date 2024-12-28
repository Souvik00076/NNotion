import { Heading, Heroes } from "./_components";

export default function PublicPage() {
  return (
    <main className="flex min-h-full flex-col mt-40 dark:bg-background">
      <div className="flex flex-1 flex-col item-center justify-center">
        <Heading />
        <Heroes />
      </div>
    </main>
  );
}
