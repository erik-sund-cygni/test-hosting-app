import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Förstasidan hej hej</h1>
        <Link href={"/other-page"}>
          <button className="border border-black p-2">
            Link till annan sida
          </button>
        </Link>
      </main>
    </div>
  );
}
