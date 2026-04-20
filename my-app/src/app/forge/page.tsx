import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";

export default function ForgePage() {
  const activeProjects = projects.filter(p => p.status === "IN_DEV");
  const stableProjects = projects.filter(p => p.status === "STABLE");

  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-black to-black -z-10" />

      {/* Header */}
      <header className="mb-16 flex justify-between items-end border-b border-white/10 pb-8">
        <div>
          <h2 className="font-pixel text-abyssinian-gold text-lg mb-2 underline">LEVEL_02</h2>
          <h1 className="font-pixel text-6xl">THE_FORGE</h1>
          <p className="font-mono text-[10px] text-slate-500 mt-2 tracking-[0.3em]">TOTAL_ASSETS: {projects.length} // ENCRYPTED_STORAGE_ACTIVE</p>
        </div>
        <Link href="/" className="font-pixel text-slate-500 hover:text-white transition-colors">
          {"<"} BACK_TO_HOME
        </Link>
      </header>

      {/* SECTION A: ACTIVE_OPERATIONS (IN_DEV) */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] flex-1 bg-abyssinian-gold/20"></span>
            <h3 className="font-pixel text-abyssinian-gold text-sm uppercase tracking-widest">Active_Operations</h3>
            <span className="h-[1px] flex-1 bg-abyssinian-gold/20"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
            ))}
        </div>
      </section>

      {/* SECTION B: COMPLETED_MISSIONS (STABLE) */}
      <section>
        <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] flex-1 bg-white/10"></span>
            <h3 className="font-pixel text-slate-500 text-sm uppercase tracking-widest">Completed_Missions</h3>
            <span className="h-[1px] flex-1 bg-white/10"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stableProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
            ))}
            
            {/* The Empty Slot RPG Placeholder */}
            <div className="border-2 border-dashed border-white/5 flex flex-col items-center justify-center p-12 opacity-20 hover:opacity-40 transition-opacity">
              <span className="font-pixel text-[10px] text-slate-500 uppercase mb-2">New_Venture</span>
              <div className="h-8 w-8 rounded-full border border-slate-500 flex items-center justify-center text-slate-500 font-mono">+</div>
            </div>
        </div>
      </section>

      {/* Bottom HUD */}
      <footer className="mt-24 font-mono text-[10px] text-slate-600 uppercase tracking-widest flex justify-between border-t border-white/5 pt-8">
        <span>ENCODING: UTF-8</span>
        <span>AUTH_SIG: MERCY_DEV_01</span>
      </footer>
    </main>
  );
}