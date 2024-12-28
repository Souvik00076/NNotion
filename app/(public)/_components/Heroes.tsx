import Image from "next/image";
export const Heroes = () => {
  return (
    <section className="w-full h-[400px]  flex items-center justify-center">
      <div className="flex gap-4 max-w-3xl">
        <div>
          <Image
            src="/documents.png"
            className="dark:hidden"
            alt="Documents"
            width={400}
            height={400}
          />
          <Image
            src="/documents-dark.png"
            className="dark:block"
            alt="Documents"
            width={400}
            height={400}
          />
        </div>

        <div>
          <Image
            src="/reading.png"
            className=" dark:hidden"
            alt="Reading"
            width={400}
            height={400}
          />
          <Image
            src="/reading-dark.png"
            className="dark:block"
            alt="Reading"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};
