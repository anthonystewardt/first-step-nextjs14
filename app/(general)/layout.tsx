import { Navbar } from "@/components/navbar/Navbar";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-200 ">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
          {children}
        </div>
      </main>
    </>
  );
}
