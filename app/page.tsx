import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página Home",
  description: "Página Home",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-950 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
        <h1 className="text-5xl">Home Page</h1>
        <Link href="/contact" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-800 transition ease">Go to Contact Page</Link>
      </div>
    </main>
  );
}
