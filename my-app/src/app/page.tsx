import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-950">
      <div className="rugged-border bg-highland-green p-8 text-center max-w-md">
        <h1 className="font-pixel text-5xl text-abyssinian-gold mb-4">
          SYSTEM_START
        </h1>
        <p className="font-mono text-sm text-slate-200 uppercase tracking-widest">
          Mihret // Year 2 CS // INSA Intern
        </p>
        <button className="mt-8 bg-abyssinian-gold text-black font-pixel px-6 py-2 hover:translate-y-1 transition-transform">
          ENTER OVERWORLD
        </button>
      </div>
    </main>
  );
}