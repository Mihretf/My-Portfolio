import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";

export default function ForgePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24 relative overflow-hidden">
      {/* Background Ambience (Optional: reuse your Stars/Fog here later) */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black -z-10" />

      {/* Header */}
      <header className="mb-16 flex justify-between items-end border-b border-white/10 pb-8">
        <div>
          <h2 className="font-pixel text-abyssinian-gold text-lg mb-2 underline">LEVEL_02</h2>
          <h1 className="font-pixel text-6xl">THE_FORGE</h1>
        </div>
        <Link href="/" className="font-pixel text-slate-500 hover:text-white transition-colors">
          {"<"} BACK_TO_HOME
        </Link>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
        
        {/* Empty Slot Placeholder (Adds to the RPG vibe) */}
        <div className="border-2 border-dashed border-white/5 flex items-center justify-center p-12 opacity-30">
          <span className="font-pixel text-sm text-slate-500 uppercase tracking-widest">
            Slot_Empty
          </span>
        </div>
      </div>

      {/* Bottom HUD */}
      <footer className="mt-24 font-mono text-[10px] text-slate-600 uppercase tracking-widest">
        SYSTEM_NOTICE: PROJECTS_RENDERED_VIA_INVENTORY_MODULE
      </footer>
    </main>
  );
}