import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
  // Find the project based on the ID in the URL
  const project = projects.find((p) => p.id === id);

  // If the ID doesn't exist in our data file, show the 404 page
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24 relative">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Navigation Back */}
        <Link 
          href="/forge" 
          className="font-pixel text-slate-500 hover:text-abyssinian-gold transition-colors mb-12 inline-flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">{"<"}</span> 
          RETURN_TO_INVENTORY
        </Link>

        {/* Header Block */}
        <header className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-abyssinian-gold text-[10px] uppercase tracking-[0.4em]">
                  MISSION_REPORT // {project.year}
                </span>
                <span className="h-[1px] w-12 bg-abyssinian-gold/30" />
              </div>
              <h1 className="font-pixel text-5xl md:text-7xl leading-none">
                {project.title}
              </h1>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-4 min-w-[150px]">
              <span className="block font-mono text-[9px] text-slate-500 uppercase mb-1">Current_Status</span>
              <span className={`font-pixel text-lg ${project.status === 'STABLE' ? 'text-green-500' : 'text-yellow-500'}`}>
                {project.status}
              </span>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar: Technical Specs */}
          <aside className="lg:col-span-4 space-y-10">
            <div>
              <h3 className="font-pixel text-xs text-slate-500 mb-3 uppercase tracking-widest">Designated_Role</h3>
              <p className="font-mono text-white text-lg border-l-2 border-abyssinian-gold pl-4 uppercase">
                {project.role}
              </p>
            </div>

            <div>
              <h3 className="font-pixel text-xs text-slate-500 mb-3 uppercase tracking-widest">Stack_Manifest</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] bg-slate-900 border border-white/10 px-3 py-1.5 font-mono text-slate-300 uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-abyssinian-gold/5 border border-abyssinian-gold/20 italic font-sans text-xs text-slate-400">
              "This mission involved high-volume data ingestion and secure role-based access control protocols."
            </div>
          </aside>

          {/* Main Body: System Details */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h3 className="font-pixel text-xl text-abyssinian-gold mb-6 uppercase flex items-center gap-3">
                <span className="h-2 w-2 bg-abyssinian-gold rotate-45" />
                System_Overview
              </h3>
              <p className="font-sans text-slate-300 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </section>

            <section className="rugged-border bg-slate-900/30 p-10 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/10" />
              
              <h3 className="font-pixel text-2xl text-white mb-8 uppercase underline decoration-abyssinian-gold decoration-2 underline-offset-8">
                Technical_Achievements
              </h3>
              
              <ul className="space-y-6">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex gap-6 items-start group">
                    <span className="font-pixel text-abyssinian-gold opacity-40 group-hover:opacity-100 transition-opacity">
                      [0{index + 1}]
                    </span>
                    <p className="font-sans text-slate-300 leading-snug">
                      {achievement}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Page Footer */}
        <footer className="mt-32 pt-8 border-t border-white/5 flex justify-between font-mono text-[10px] text-slate-600 uppercase tracking-[0.5em]">
          <span>Project_ID: {id}</span>
          <span>Access_Level: Administrator</span>
        </footer>
      </div>
    </main>
  );
}